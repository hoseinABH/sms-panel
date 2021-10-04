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
import routes from './routes.json';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
}));

/**
 * @component WebserviceRoutesTable
 */
function WebserviceRoutesTable() {
  const classes = useStyles();
  const [active, setActive] = useState({});

  const isSwitchActive = (id) => Boolean(active[id]);
  return (
    <Table
      disableSelect
      columns={[
        {
          field: 'routeName',
          title: 'نام مسیر وبسرویس',
          render: (row) => <Typography>{row.routeName}</Typography>,
        },
        {
          field: 'routeLink',
          title: 'لینک مسیر وبسرویس',
        },
        {
          field: 'routeAddress',
          title: 'آدرس وبسرویس سامانه',
        },
        {
          field: 'smsRecieveAddress',
          title: 'آدرس دریافت پیامک',
        },

        {
          field: 'active',
          title: 'وضعیت',
          render: (row) => row.active && <SuccessIcon className={classes.success} />,
        },
      ]}
      data={routes}
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

export default WebserviceRoutesTable;
