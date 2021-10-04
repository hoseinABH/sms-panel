import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { addUniqueKey } from 'utils';

// components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  },
  row: ({ onSelect }) => ({
    cursor: typeof onSelect === 'function' ? 'pointer' : 'unset',
    transition: theme.transitions.create(['background']),
    '&:hover': {
      background: typeof onSelect === 'function' ? theme.palette.action.hover : 'unset',
    },
  }),
  cell: {
    whiteSpace: 'nowrap',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  titleContainer: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  titleWrapper: {
    padding: theme.spacing(SPACING_HALF),
    display: 'flex',
    alignItems: 'center',
    justifyContent: ({ titleAlign }) => titleAlign,
  },
  icon: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
}));

/**
 * @component SimpleTable
 */
function SimpleTable({ columns, data, title, titleIcon, titleAlign = 'start', onSelect }) {
  const classes = useStyles({ titleAlign, onSelect });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const generatedData = addUniqueKey(data);
    setTableData(generatedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TitleIcon = titleIcon;
  return (
    <div className={classes.root}>
      {title && (
        <div className={classes.titleContainer}>
          <div className={classes.titleWrapper}>
            {titleIcon && <TitleIcon className={classes.icon} />}
            <Typography>{title}</Typography>
          </div>
        </div>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((head, key) => (
                <TableCell
                  className={classes.cell}
                  data-testid="table_header_cell"
                  key={key}
                  align="center"
                >
                  {head.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, key) => {
              return (
                <TableRow
                  className={classes.row}
                  key={key}
                  onClick={() => onSelect && onSelect(row)}
                >
                  {columns.map((column, key) => {
                    return (
                      <TableCell
                        className={classes.cell}
                        data-testid="table_collapse_row_cell"
                        key={key}
                        align="center"
                        {...column.tableCellProps}
                      >
                        {column.render ? column.render(row) : row[column.field]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SimpleTable;
