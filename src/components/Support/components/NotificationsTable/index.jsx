import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import IconButton from '@material-ui/core/IconButton';

// icons
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeactiveIcon from '@material-ui/icons/ToggleOffOutlined';
import ActiveIcon from '@material-ui/icons/ToggleOn';
import SuccessIcon from '@material-ui/icons/CheckCircleOutline';
import WarningIcon from '@material-ui/icons/ReportProblemOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';

// fake Data
import notifications from './notifications.json';
import { useAllNotifications } from 'hooks/notifications';
import Spinner from 'components/shared/Spinner';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  info: {
    color: theme.palette.info.main,
  },
}));

/**
 * @component NotificationsTable
 */
function NotificationsTable() {
  const classes = useStyles();
  const [active, setActive] = useState({});

  const isSwitchActive = (id) => Boolean(active[id]);

  const { data, isLoading } = useAllNotifications();

  if (isLoading) return <Spinner />;

  return (
    <Table
      disableSelect
      columns={[
        {
          field: 'notificationName',
          title: 'عنوان اعلان',
          render: (row) => <Typography>{row.notificationName}</Typography>,
        },
        {
          field: 'CreatedAt',
          title: 'تاریخ درج',
          render: (row) => <Typography>1 ماه 12 ساعت قبل</Typography>,
        },
        {
          field: 'releaseLayer',
          title: 'لایه انتشار',
        },
        {
          field: 'text',
          title: 'متن ارسال',
          render: (row) => <Typography>{row.text}</Typography>,
        },
        {
          field: 'attachedFile',
          title: 'فایل ضمیمه',
        },
        {
          field: 'notificationType',
          title: 'نوع اعلان',
          render: (row) => {
            const getStatus = () => {
              switch (row.notificationType) {
                case 'success':
                  return <SuccessIcon className={classes.success} />;
                case 'warning':
                  return <WarningIcon className={classes.warning} />;
                case 'error':
                  return <ErrorIcon color="error" />;
                default:
                  return <ErrorIcon className={classes.info} />;
              }
            };

            const status = getStatus();
            return status;
          },
        },
        {
          field: 'viewStatus',
          title: 'وضعیت نمایش',
        },
      ]}
      data={notifications}
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

export default NotificationsTable;
