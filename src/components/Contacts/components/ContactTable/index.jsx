import { makeStyles } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import Spinner from 'components/shared/Spinner';

// icons
import SuccessIcon from 'components/shared/icons/TaskAlt';
import SendIcon from '@material-ui/icons/SendOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';

// hooks
import { useAllContacts } from 'hooks/contacts';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
}));

/**
 * @component ContactTable
 */
function ContactTable() {
  const classes = useStyles();

  const { data, isLoading } = useAllContacts();

  if (isLoading) return <Spinner />;

  return (
    <Table
      tableDescription="لیست مخاطبین صالح زارعی [2000]"
      columns={[
        {
          field: 'phoneNumber',
          title: 'شماره موبایل',
          render: (row) => <Typography>{row.phoneNumber}</Typography>,
        },
        {
          field: 'firstName',
          title: 'نام',
        },
        {
          field: 'lastName',
          title: 'نام خانوادگی',
        },
        {
          field: 'company',
          title: 'شرکت',
        },
        {
          field: 'email',
          title: 'ایمیل',
        },
        {
          field: 'telephone',
          title: 'تلفن',
          render: (row) => <Typography>{row.telephone}</Typography>,
        },
        {
          field: 'gender',
          title: 'جنسیت',
        },
        {
          field: 'birthDay',
          title: 'تاریخ تولد',
          render: (row) => (
            <Typography>{new Date(row.birthDay).toLocaleDateString('fa-IR')}</Typography>
          ),
        },
        {
          field: 'groups',
          title: 'گروه',
          render: (row) => row.groups[0]?.name ?? `ندارد`,
        },
        {
          field: 'isInSpecialList',
          title: 'ویژه',
          render: (row) => row.isInSpecialList && <SuccessIcon className={classes.success} />,
        },
      ]}
      data={data?.data?.docs}
      actions={[
        {
          label: 'ارسال پیام',
          icon: <SendIcon />,
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
          enableBulk: true,
        },
      ]}
    />
  );
}

export default ContactTable;
