import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import IconButton from '@material-ui/core/IconButton';

// icons
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import SuccessIcon from 'components/shared/icons/TaskAlt';
import CancelIcon from '@material-ui/icons/CancelOutlined';
import DeactiveIcon from '@material-ui/icons/ToggleOffOutlined';
import ActiveIcon from '@material-ui/icons/ToggleOn';
import ReloadIcon from '@material-ui/icons/Cached';

// fakeData
import webservices from './webservices.json';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
}));

/**
 * @component WebserviceListTable
 */
function WebserviceListTable() {
  const classes = useStyles();
  const [active, setActive] = useState({});

  const isSwitchActive = (id) => Boolean(active[id]);
  return (
    <Table
      disableSelect
      columns={[
        {
          field: 'name',
          title: 'نام وبسرویس',
          render: (row) => <Typography>{row.name}</Typography>,
        },
        {
          field: 'route',
          title: 'مسیر وبسرویس',
        },
        {
          field: 'numbersCount',
          title: 'تعداد کل شماره ها',
          render: (row) => <Typography>{row.numbersCount}</Typography>,
        },
        {
          field: 'serviceNumbersCount',
          title: 'تعداد شماره خدماتی',
          render: (row) => <Typography>{row.serviceNumbersCount}</Typography>,
        },
        {
          field: 'AdvertisingNumbersCount',
          title: 'تعداد شماره تبلیغاتی',
          render: (row) => <Typography>{row.AdvertisingNumbersCount}</Typography>,
        },
        {
          field: 'chargeBalance',
          title: 'مانده شارژ',
          render: (row) => <Typography>{row.chargeBalance}</Typography>,
        },
        {
          field: 'active',
          title: 'وضعیت',
          render: (row) =>
            row.active ? (
              <SuccessIcon className={classes.success} />
            ) : (
              <CancelIcon color="error" />
            ),
        },
      ]}
      data={webservices}
      actions={[
        {
          label: 'بروز رسانی',
          icon: <ReloadIcon />,
          onClick: () => {},
        },
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

export default WebserviceListTable;
