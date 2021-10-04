import { isArray } from 'lodash';
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
import ToggleIcon from '@material-ui/icons/ToggleOnOutlined';

// hooks
import { useAllGroups, useDeleteGroup } from 'hooks/groups';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
}));

/**
 * @component ContactGroupTable
 */
function ContactGroupTable() {
  const classes = useStyles();
  const history = useHistory();
  const { data, isLoading } = useAllGroups();
  const { mutate } = useDeleteGroup();

  if (isLoading) return <Spinner />;

  return (
    <Table
      columns={[
        {
          field: 'name',
          title: 'نام گروه',
        },
        {
          field: 'description',
          title: 'توضیحات گروه',
        },

        {
          field: 'contacts',
          title: 'تعداد اعضا',
          render: (row) => <Typography>{row.contacts}</Typography>,
        },
        {
          field: 'status', //should be data.status
          title: 'وضعیت',
          render: (row) => <SuccessIcon className={classes.success} />,
        },
      ]}
      data={data?.data?.docs}
      actions={[
        {
          label: 'ارسال پیام',
          onClick: () => {},
          icon: <SendIcon />,
        },
        {
          label: 'سوییچ',
          onClick: () => {},
          icon: <ToggleIcon />,
        },
        {
          label: 'ویرایش',
          onClick: (row) => {
            if (!isArray(row)) {
              history.push(`/contacts/groups/${row.id}`);
            }
          },
          icon: <EditIcon />,
        },
        {
          label: 'حذف',
          onClick: (row) => {
            if (!isArray(row)) {
              mutate(row._id);
            }
          },
          icon: <DeleteIcon />,
          enableBulk: true,
        },
      ]}
    />
  );
}

export default ContactGroupTable;
