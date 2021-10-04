import { useState, Fragment } from 'react';

import clsx from 'clsx';

import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

// providers
import { useTableState } from '../providers/TableProvider';

// constants
import { SPACING_HALF } from 'constants/spacing';

// components
import TableActionMenu from '../TableActionMenu';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

// icons
import DownArrowIcon from '@material-ui/icons/ExpandMore';
import DragIcon from '@material-ui/icons/DragHandle';

const useStyles = makeStyles((theme) => ({
  root: ({ color, padding = 0, enableRowButtonSelect }) => {
    return {
      background: color ? fade(color, padding * 0.05) : theme.palette.background.paper,
      cursor: enableRowButtonSelect ? 'pointer' : 'unset',
    };
  },
  tableChild: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  downArrow: {
    marginRight: theme.spacing(SPACING_HALF),
  },
  tableRowCell: {
    whiteSpace: 'nowrap',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  arrowButton: {
    transition: theme.transitions.create(['transform']),
    fontSize: 15,
  },
  arrowDown: {
    transform: 'rotate(180deg)',
  },
  padding: ({ padding = 0 }) => {
    if (padding > 0) {
      return {
        padding: theme.spacing(padding),
      };
    } else return {};
  },
}));

/**
 * @component TableCollapseRow
 */
function TableCollapseRow({
  columns,
  data,
  disableSelect,
  actions,
  children,
  padding = 0,
  color,
  enableDnD,
  index,
  enableRowButtonSelect,
  onSelect,
  ...rest
}) {
  const classes = useStyles({ padding, color, enableRowButtonSelect });

  const theme = useTheme();

  const [selected, setSelected] = useTableState();

  // const [openMenu, setOpenMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const onRowSelect = (item) => {
    const id = item.__id;
    let temp = [...selected];
    const keyIndex = temp.findIndex((item) => item.__id === id);
    const removeItem = (index) => {
      temp.splice(index, 1);
    };
    if (keyIndex > -1) {
      removeItem(keyIndex);
    } else temp.push(item);
    setSelected(temp);
    onSelect(temp);
  };

  // check if row is selected
  const isSelected = (id) => selected.findIndex((item) => item.__id === id) > -1;

  const onOpenClick = () => {
    setOpen((prevState) => !prevState);
  };

  // on action menu click
  // const onMenuClick = (element) => {
  //   setOpenMenu(element);
  // };

  // const onMenuClose = () => {
  //   setOpenMenu(null);
  // };

  const getDepth = () => (children ? padding + 1 : padding);

  const upArrowClasses = clsx(classes.arrowButton, open && classes.arrowDown);
  const checkBoxCellClasses = clsx(classes.padding, classes.tableRowCell);

  const rootSelected = isSelected && isSelected(data.__id);

  return (
    <Fragment>
      <TableRow
        selected={rootSelected}
        className={classes.root}
        data-testid="table_collapse_row"
        onClick={() => enableRowButtonSelect && onRowSelect(data, index)}
        hover={enableRowButtonSelect}
        {...rest}
      >
        {!disableSelect && !enableRowButtonSelect && (
          <TableCell padding="checkbox" className={checkBoxCellClasses}>
            <Checkbox
              data-testid="table_collapse_row_checkbox"
              color="primary"
              checked={rootSelected}
              onClick={() => !enableRowButtonSelect && onRowSelect(data, index)}
            />
          </TableCell>
        )}

        {columns.map((column, key) => {
          return (
            <TableCell
              data-testid="table_collapse_row_cell"
              className={classes.tableRowCell}
              key={key}
              align="center"
              {...column.tableCellProps}
            >
              {column.render ? column.render(data, index) : data[column.field]}
            </TableCell>
          );
        })}

        {(actions || children) && (
          <TableCell align="center" className={classes.tableRowCell}>
            <div className={classes.tableChild}>
              {children && (
                <div className={classes.downArrow}>
                  <IconButton
                    data-testid="table_collapse_row_open_button"
                    onClick={onOpenClick}
                    size="small"
                  >
                    <DownArrowIcon
                      color="secondary"
                      fontSize="small"
                      className={upArrowClasses}
                    />
                  </IconButton>
                </div>
              )}

              {actions && (
                <Fragment>
                  {/* <IconButton
                    data-testid="table_collapse_row_action_button"
                    size="small"
                    onClick={(event) => onMenuClick(event.currentTarget)}
                  >
                    <MenuVerticalIcon />
                  </IconButton> */}

                  <TableActionMenu
                    data-testid="table_collapse_row_action_menu"
                    row={data}
                    actions={actions}
                  />
                </Fragment>
              )}
            </div>
          </TableCell>
        )}

        {enableDnD && (
          <TableCell align="center" className={classes.tableRowCell}>
            <DragIcon color="action" />
          </TableCell>
        )}
      </TableRow>

      {children && open && (
        <Fragment>
          {children.map((child) => {
            return (
              <TableCollapseRow
                children={child.children}
                key={child.__id}
                columns={columns}
                data={child}
                actions={actions}
                padding={getDepth()}
                color={theme.palette.primary.main}
              />
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
}

export default TableCollapseRow;
