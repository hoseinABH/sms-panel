import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { addCommas } from 'persian-tools2';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import IconButton from '@material-ui/core/IconButton';

// icons
import SuccessIcon from 'components/shared/icons/TaskAlt';
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import KeyIcon from '@material-ui/icons/VpnKeyOutlined';
import DeactiveIcon from '@material-ui/icons/ToggleOffOutlined';
import ActiveIcon from '@material-ui/icons/ToggleOn';

// fakeData
import packages from './packages.json';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
}));

/**
 * @component DefaultPackagesTable
 */
function DefaultPackagesTable() {
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
          field: 'accessType',
          title: 'توضیحات',
        },
        {
          field: 'smsPackage',
          title: 'توضیحات',
        },
        {
          field: 'packagePrice',
          title: 'قیمت بسته',
          render: (row) => <Typography>{addCommas(row.packagePrice)}</Typography>,
        },
        {
          field: 'extensionPrice',
          title: 'هزینه تمدید',
          render: (row) => <Typography>{addCommas(row.extensionPrice)}</Typography>,
        },
        {
          field: 'intialCredit',
          title: 'اعتبار اولیه',
          render: (row) => <Typography>{addCommas(row.intialCredit)}</Typography>,
        },
        {
          field: 'lineOff',
          title: 'تخفیف خط',
          render: (row) => <Typography>{row.lineOff}</Typography>,
        },
        {
          field: 'timeAmount',
          title: 'مدت زمان',
          render: (row) => <Typography>{row.timeAmount}</Typography>,
        },
        {
          field: 'childUsers',
          title: 'زیر کاربر',
          render: (row) => <Typography>{row.childUsers}</Typography>,
        },
        {
          field: 'onlineRegister',
          title: 'ثبت نام آنلاین',
          render: (row) => row.onlineRegister && <SuccessIcon className={classes.success} />,
        },
        {
          field: 'active',
          title: 'وضعیت',
          render: (row) => row.active && <SuccessIcon className={classes.success} />,
        },
      ]}
      data={packages}
      actions={[
        {
          label: 'کلید',
          icon: <KeyIcon />,
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
        },
      ]}
    />
  );
}

export default DefaultPackagesTable;
