import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { addCommas } from 'persian-tools2';

// components
import Table from 'components/shared/Table';
import IconButton from '@material-ui/core/IconButton';
import Typography from 'components/shared/Typography';

// icons
import SuccessIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeactiveIcon from '@material-ui/icons/ToggleOffOutlined';
import ActiveIcon from '@material-ui/icons/ToggleOn';

// fakeData
import tarifs from './tarifs.json';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
}));

/**
 * @component DefaultTarifsTable
 */
function DefaultTarifsTable() {
  const classes = useStyles();
  const [active, setActive] = useState({});

  const isSwitchActive = (id) => Boolean(active[id]);

  return (
    <Table
      disableSelect
      columns={[
        {
          field: 'packageTitle',
          title: 'عنوان بسته',
        },
        {
          field: 'description',
          title: 'توضیحات',
        },
        {
          field: 'from',
          title: 'از مبلغ',
          render: (row) => <Typography>{addCommas(row.from)}</Typography>,
        },
        {
          field: 'to',
          title: 'تا مبلغ',
          render: (row) => <Typography>{addCommas(row.to)}</Typography>,
        },
        {
          field: 'lastUpdate',
          title: 'آخرین بروزرسانی',
          render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
        },
        {
          field: 'customers',
          title: 'تعداد مشتریان',
          render: (row) => <Typography>{row.customers}</Typography>,
        },

        {
          field: 'active',
          title: 'وضعیت',
          render: (row) => row.active && <SuccessIcon className={classes.success} />,
        },
      ]}
      data={tarifs}
      actions={[
        {
          label: 'تغییر وضعیت',
          render: (_, row) => {
            return (
              <IconButton
                size="small"
                onClick={() => {
                  setActive((prevState) => {
                    const newState = { ...prevState, [row.__id]: !prevState[row.__id] };
                    setActive(newState);
                  });
                }}
              >
                {isSwitchActive(row.__id) ? <ActiveIcon /> : <DeactiveIcon />}
              </IconButton>
            );
          },
        },
        {
          label: 'ویرایش',
          icon: <EditIcon />,
          onClick: () => {},
        },
        {
          label: 'حذف',
          icon: <DeleteIcon />,
          onClick: () => {},
          enableBulk: true,
        },
      ]}
    />
  );
}

export default DefaultTarifsTable;
