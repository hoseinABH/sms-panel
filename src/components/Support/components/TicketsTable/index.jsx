import { makeStyles } from '@material-ui/core/styles';

// components
import UserWithAvatar from '../UserWithAvatar';
import Spinner from 'components/shared/Spinner';
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import LoadingButton from 'components/shared/LoadingButton';

// hooks
import { useAllTickets } from 'hooks/tickets';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  statusButton: {
    width: 100,
    cursor: 'unset',
  },
}));

/**
 * @component TicketsTable
 */
function TicketsTable() {
  const classes = useStyles();
  const history = useHistory();

  const { data, isLoading } = useAllTickets();
  if (isLoading) return <Spinner />;

  return (
    <Table
      disableSelect
      disableExport
      enableRowButtonSelect
      columns={[
        {
          field: 'user',
          title: 'ایجاد کننده',
          render: (row) => {
            const fullName = `${row.user?.firstName} ${row.user?.lastName}`;
            return <UserWithAvatar username={fullName} avatar={row.author?.avatar} />;
          },
        },
        {
          field: 'id',
          title: 'شماره تیکت',
          render: (row) => <Typography>{row.id}</Typography>,
        },
        {
          field: 'title',
          title: 'موضوع',
        },
        {
          field: 'file',
          title: 'فایل ضمیمه',
          render: (row) => (row.file ? `دارد` : `ندارد`),
        },
        {
          field: 'department',
          title: 'دپارتمان',
          render: (row) => <Typography>{row.department}</Typography>,
        },
        {
          field: 'child',
          title: 'زیر شاخه',
          render: (row) => <Typography>1</Typography>, //should be data.child
        },
        {
          field: 'createdAt',
          title: 'تاریخ ایجاد',
          render: (row) => (
            <Typography>{new Date(row.createdAt).toLocaleString('fa-IR')}</Typography>
          ),
        },
        {
          field: 'updatedAt',
          title: 'آخرین بروزرسانی',
          render: (row) => (
            <Typography>{new Date(row.updatedAt).toLocaleString('fa-IR')}</Typography>
          ),
        },

        {
          field: 'status',
          title: 'وضعیت',
          render: (row) => {
            const getStatus = () => {
              switch (row.status) {
                case 'pending':
                  return {
                    color: 'purple',
                    title: 'در حال بررسی',
                  };
                case 'waiting': // typo from server i forced to type like this /:
                  return {
                    color: 'orange',
                    title: 'منتظر کاربر',
                  };
                case 'solved':
                  return {
                    color: 'success',
                    title: 'حل شده',
                  };
                default:
                  return {
                    color: 'error.light',
                    title: 'بررسی نشده',
                  };
              }
            };

            const status = getStatus();
            return (
              <LoadingButton
                className={classes.statusButton}
                size="small"
                variant="contained"
                color={status.color}
              >
                {status.title}
              </LoadingButton>
            );
          },
        },
      ]}
      data={data?.data?.docs}
      onSelect={(data) => {
        const selected = data[0];
        history.push(`/support/tickets/${selected.id}`);
      }}
    />
  );
}

export default TicketsTable;
