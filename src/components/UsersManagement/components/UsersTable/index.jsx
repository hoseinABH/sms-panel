import { useTheme } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';

// data
import users from './users.json';

// icons
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import SuccessIcon from '@material-ui/icons/CheckCircleOutline';
import PendingIcon from '@material-ui/icons/QueryBuilder';
import BlockIcon from '@material-ui/icons/Block';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import LoginIcon from '@material-ui/icons/ExitToAppOutlined';

/**
 * @component UsersTable
 */
function UsersTable() {
  const theme = useTheme();

  return (
    <Table
      disableSelect
      tableDescription="لیست ارسال های [2000]"
      columns={[
        {
          field: 'fullName',
          title: 'نام و نام خانوادگی',
        },
        {
          field: 'username',
          title: 'نام کاربری',
        },
        {
          field: 'company',
          title: 'شرکت',
        },
        {
          field: 'type',
          title: 'نوع',
        },
        {
          field: 'subUser',
          title: 'زیرشاخه',
          render: (row) => <Typography>{row.subUser}</Typography>,
        },
        {
          field: 'userCount',
          title: 'تعداد کاربران',
          render: (row) => <Typography useComma>{row.userCount}</Typography>,
        },
        {
          field: 'phoneNumber',
          title: 'موبایل',
          render: (row) => <Typography>{row.phoneNumber}</Typography>,
        },
        {
          field: 'createDate',
          title: 'تاریخ ثبت',
          render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
        },
        {
          field: 'expireDate',
          title: 'تاریخ انقضاء',
          render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
        },
        {
          field: 'walletCredit',
          title: 'اعتبار کیف پول',
          render: (row) => <Typography useComma>{row.walletCredit}</Typography>,
        },

        {
          field: 'smsCredit',
          title: 'اعتبار پیامک',
          render: (row) => <Typography useComma>{row.smsCredit}</Typography>,
        },

        {
          field: 'documents',
          title: 'مدارک',
          render: ({ documents }) =>
            documents ? (
              <BatteryFullIcon style={{ color: theme.palette.success.main }} />
            ) : (
              <BatteryAlertIcon color="action" />
            ),
        },
        {
          field: 'documents',
          title: 'مدارک',
          render: (row) => {
            const getStatus = () => {
              switch (row.status) {
                case 'pending':
                  return <PendingIcon color="error" />;
                case 'active':
                  return <SuccessIcon style={{ color: theme.palette.success.main }} />;
                case 'blocked':
                  return <BlockIcon color="error" />;
                default:
                  return <PendingIcon color="error" />;
              }
            };
            return getStatus();
          },
        },
      ]}
      data={users}
      actions={[
        {
          label: 'لاگین کردن',
          icon: <LoginIcon />,
          onClick: () => {},
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

export default UsersTable;
