import { useState, useEffect, useMemo, Fragment } from 'react';
import { createPortal } from 'react-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { generateTableData, reorderList } from './utils';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

// providers
import { useTableValue } from './providers/TableProvider';

// dnd
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// components
import MuiTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import Typography from 'components/shared/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import PaperWithTitle from 'components/Dashboard/components/PaperWithTitle';
import Pagination from '@material-ui/lab/Pagination';
import LoadingButton from 'components/shared/LoadingButton';
import Collapse from '@material-ui/core/Collapse';
import TableHeader from './TableHeader';
import TableCollapseRow from './TableCollapseRow';
import Scrollbar from 'components/shared/Scrollbar';
import Filter from './Filter';
import { CSVLink } from 'react-csv';

// icons
import PrintIcon from '@material-ui/icons/PrintOutlined';
import FilterIcon from '@material-ui/icons/FilterListOutlined';
import ExcelFileIcon from 'components/shared/icons/ExcelFile';
import ImageFileIcon from 'components/shared/icons/ImageFile';
import PDFFileIcon from 'components/shared/icons/PDFFile';

const portal = document.createElement('div');
portal.classList.add('portal');

if (!document.body) {
  throw new Error('body not ready for portal creation!');
}

document.body.appendChild(portal);

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  notFound: {
    height: 256,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {},
  actionsSection: {
    padding: theme.spacing(SPACING_HALF, 0),
    marginTop: 0,
    alignItems: 'center',
    display: 'flex',
  },
  exportWrapper: {
    flex: 1,
  },
  bulkActions: {
    marginLeft: theme.spacing(SPACING_HALF),
    display: 'flex',
    alignItems: 'center',
  },
  bulkButton: {
    margin: theme.spacing('0', SPACING_LEAST / 2),
  },
  tableFooter: {
    marginTop: theme.spacing(SPACING_HALF),
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  inner: ({ maxHeight }) => {
    return {
      minHeight: maxHeight,
      minWidth: '100px',
    };
  },
  tableContainer: {},
}));

/**
 * @component TableCore
 */
function TableCore({
  columns,
  data,
  title,
  actions,
  headerChildren,
  tableDescription,
  disableExport,
  disablePagination,
  disableBulkActions,
  parentChildData,
  disableSelect,
  onSelect = () => {},
  enableRowButtonSelect,
  disableFilter,
  totalDataCount,
  enableDnD,
  maxHeight = 325,
}) {
  const classes = useStyles({ maxHeight });
  const theme = useTheme();

  // data with added __id and children
  const [tableData, setTableData] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  // selected data
  const selected = useTableValue();

  const isEmpty = useMemo(() => !(tableData.length > 0), [tableData]);

  const onFilterButtonClick = () => {
    setOpenFilter((prevState) => !prevState);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorderList(tableData, result.source.index, result.destination.index);
    setTableData(items);
  };

  useEffect(() => {
    const generatedData = generateTableData(data, parentChildData);
    setTableData(generatedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const exportToPdf = () => {};

  const exportToImage = () => {};

  const print = () => {};

  return (
    <div className={classes.root}>
      {/* start filter */}
      <Collapse in={openFilter}>
        <Filter />
      </Collapse>
      {/* end filter */}

      <PaperWithTitle
        variant="elevation"
        elevation={2}
        title={title}
        className={classes.paper}
        headerChildren={
          <div className={classes.header}>
            {!disableFilter && !isEmpty && (
              <div data-testid="table_search" className={classes.searchBar}>
                <IconButton onClick={onFilterButtonClick} size="small">
                  <FilterIcon />
                </IconButton>
              </div>
            )}{' '}
            {headerChildren}
          </div>
        }
      >
        <TableContainer className={classes.tableContainer}>
          {isEmpty ? (
            <div className={classes.notFound}>
              <Typography align="center" variant="h6" color="textSecondary">
                موردی یافت نشد!
              </Typography>
            </div>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <Scrollbar>
                <div className={classes.inner}>
                  <MuiTable stickyHeader>
                    {/* table header (where table column name seats) */}
                    <TableHeader
                      enableDnD={enableDnD}
                      disableSelect={disableSelect}
                      columns={columns}
                      tableData={tableData}
                      disableActions={!Boolean(actions)}
                    />

                    <Droppable droppableId="table_droppable">
                      {(provided) => {
                        return (
                          <TableBody
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            style={{ flip: true }}
                          >
                            {tableData.map((row, index) => {
                              return (
                                <Draggable
                                  isDragDisabled={!enableDnD}
                                  key={row.__id}
                                  draggableId={row.__id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    if (snapshot.isDragging) {
                                      return createPortal(
                                        <TableCollapseRow
                                          disableSelect={disableSelect}
                                          children={row.children}
                                          data={row}
                                          index={index}
                                          innerRef={provided.innerRef}
                                          actions={actions}
                                          columns={columns}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        />,
                                        portal
                                      );
                                    } else
                                      return (
                                        <TableCollapseRow
                                          onSelect={onSelect}
                                          disableSelect={disableSelect}
                                          children={row.children}
                                          enableRowButtonSelect={enableRowButtonSelect}
                                          data={row}
                                          index={index}
                                          enableDnD={enableDnD}
                                          innerRef={provided.innerRef}
                                          actions={actions}
                                          columns={columns}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        />
                                      );
                                  }}
                                </Draggable>
                              );
                            })}
                            {enableDnD && provided.placeholder}
                          </TableBody>
                        );
                      }}
                    </Droppable>
                  </MuiTable>
                </div>
              </Scrollbar>
            </DragDropContext>
          )}
        </TableContainer>

        {/* table footer */}
        {!isEmpty && (
          <div className={classes.tableFooter}>
            <div className={classes.descriptionWrapper}>
              {tableDescription && (
                <Typography variant="overline">{tableDescription}</Typography>
              )}
              {totalDataCount && (
                <Typography useComma variant="overline">
                  {`[${totalDataCount}]`}
                </Typography>
              )}
            </div>

            <div className={classes.exportWrapper}>
              {!disableExport && (
                <Fragment>
                  <CSVLink data={data} filename={`${title || 'table_data'}.csv`}>
                    <IconButton size="small" style={{ color: theme.palette.success.main }}>
                      <ExcelFileIcon color="inherit" />
                    </IconButton>
                  </CSVLink>
                  <IconButton
                    disabled
                    onClick={exportToPdf}
                    size="small"
                    // style={{ color: theme.palette.error.main }}
                  >
                    <PDFFileIcon />
                  </IconButton>
                  <IconButton
                    disabled
                    onClick={exportToImage}
                    size="small"
                    // style={{ color: theme.palette.secondary.main }}
                  >
                    <ImageFileIcon />
                  </IconButton>
                  <IconButton disabled onClick={print} size="small">
                    <PrintIcon color="inherit" />
                  </IconButton>
                </Fragment>
              )}
            </div>

            {!disablePagination && (
              <div className={classes.pagination}>
                <Pagination
                  data-testid="table_pagination"
                  size="small"
                  shape="rounded"
                  color="primary"
                  count={10}
                />
              </div>
            )}
          </div>
        )}
        {/* end table footer */}
      </PaperWithTitle>

      {!disableSelect && (
        <Fade in={selected.length > 1}>
          <div className={classes.actionsSection}>
            <Typography data-testid="table_selected_text">
              {selected.length} انتخاب شده
            </Typography>
            {!disableBulkActions && actions && (
              <div className={classes.bulkActions} data-testid="table_bulk_actions">
                {actions.map((action, key) => {
                  if (!action.enableBulk) return null;
                  return (
                    <div className={classes.bulkButton} key={key}>
                      <LoadingButton
                        data-testid="table_bulk_action_button"
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={() => action.onClick && action.onClick(selected)}
                        startIcon={action.icon}
                        disabled={action.disabled}
                      >
                        {action.label}
                      </LoadingButton>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Fade>
      )}
    </div>
  );
}

export default TableCore;
