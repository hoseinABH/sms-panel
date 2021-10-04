import { useMemo } from 'react';

import { makeStyles } from '@material-ui/core/styles';

// providers
import { useTableState } from '../providers/TableProvider';

// components
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  tableHead: {},
  tableHeadCell: {
    whiteSpace: 'nowrap',
    background: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

/**
 * @component TableHeader
 */
function TableHeader({ columns, disableSelect, disableActions, tableData, enableDnD }) {
  const classes = useStyles();

  const [selected, setSelected] = useTableState();

  // check data states for header
  const indeterminate = useMemo(
    () => selected.length > 0 && selected.length < tableData.length,
    [selected, tableData]
  );
  const checked = useMemo(() => tableData.length > 0 && selected.length === tableData.length, [
    selected,
    tableData,
  ]);

  // on select all check box
  const onSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(tableData);
      return;
    }
    setSelected([]);
  };

  return (
    <TableHead className={classes.tableHead} data-testid="table_header">
      <TableRow>
        {!disableSelect && (
          <TableCell padding="checkbox" variant="head" className={classes.tableHeadCell}>
            <Checkbox
              data-testid="table_header_checkbox"
              color="primary"
              onChange={onSelectAll}
              indeterminate={indeterminate}
              checked={checked}
            />
          </TableCell>
        )}

        {columns.map((head, key) => (
          <TableCell
            data-testid="table_header_cell"
            key={key}
            align="center"
            className={classes.tableHeadCell}
          >
            {head.title}
          </TableCell>
        ))}

        {/* action menu cell */}
        {!disableActions && (
          <TableCell
            align="center"
            data-testid="table_header_action_cell"
            className={classes.tableHeadCell}
          >
            ابزارها
          </TableCell>
        )}

        {enableDnD && (
          <TableCell
            data-testid="table_header_action_cell"
            className={classes.tableHeadCell}
          ></TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
