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
import DeactiveIcon from '@material-ui/icons/ToggleOffOutlined';
import ActiveIcon from '@material-ui/icons/ToggleOn';

// fakeData
import data from './data.json';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
}));

/**
 * @component AccountAndGatewaysTable
 */
function AccountAndGatewaysTable() {
  const classes = useStyles();
  const [active, setActive] = useState({});

  const isSwitchActive = (id) => Boolean(active[id]);
  return (
    <Table
      disableSelect
      disableExport
      columns={[
        {
          field: 'bankName',
          title: 'نام مسیر وبسرویس',
        },
        {
          field: 'paymentType',
          title: 'نوع پرداخت',
        },
        {
          field: 'accountOwner',
          title: 'صاحب حساب',
        },
        {
          field: 'accountNumber',
          title: 'شماره حساب',
          render: (row) => <Typography>{row.accountNumber}</Typography>,
        },
        {
          field: 'cardNumber',
          title: 'شماره کارت',
          render: (row) => <Typography>{row.cardNumber}</Typography>,
        },
        {
          field: 'shabaNumber',
          title: 'شماره شبا',
          render: (row) => <Typography>{row.shabaNumber}</Typography>,
        },
        {
          field: 'acceptorCode',
          title: 'کد پذیرنده',
          render: (row) => <Typography>{row.acceptorCode}</Typography>,
        },
        {
          field: 'username',
          title: 'نام کاربری',
        },
        {
          field: 'password',
          title: 'رمز عبور',
        },
        {
          field: 'gateway',
          title: 'درگاه',
        },

        {
          field: 'active',
          title: 'وضعیت',
          render: (row) => row.active && <SuccessIcon className={classes.success} />,
        },
      ]}
      data={data}
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

export default AccountAndGatewaysTable;
