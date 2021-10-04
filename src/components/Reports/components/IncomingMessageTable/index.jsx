import { makeStyles } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';

// icons
import SuccessIcon from 'components/shared/icons/TaskAlt';
import ErrorIcon from '@material-ui/icons/CancelOutlined';
import CancelSendIcon from '@material-ui/icons/CancelScheduleSend';
import ReplyIcon from '@material-ui/icons/Reply';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';

// constants

// fakeData
import data from './data.json';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
  error: {
    color: theme.palette.error.main,
  },
}));

/**
 * @component IncomingMessageTable
 */
function IncomingMessageTable({ setOpenModal }) {
  const classes = useStyles();

  return (
    <Table
      tableDescription="لیست پیامک های دریافتی صالح زارعی [2000]"
      columns={[
        {
          field: 'sender',
          title: 'شماره فرستنده',
          render: (row) => <Typography>{row.sender}</Typography>,
        },

        {
          field: 'senderInfo',
          title: 'اطلاعات فرستنده',
        },
        {
          field: 'receiverNumber',
          title: 'گیرنده',
          render: (row) => <Typography>{row.receiverNumber}</Typography>,
        },
        {
          field: 'date/time',
          title: 'تاریخ و ساعت',
          render: (row) => <Typography>{new Date().toLocaleString('fa-IR')}</Typography>,
        },
        {
          field: 'specialList',
          title: 'لیست ویژه',
          render: (row) => {
            return row.specialList === false ? (
              <ErrorIcon className={classes.error} />
            ) : (
              <SuccessIcon className={classes.success} />
            );
          },
        },

        {
          field: 'messageText',
          title: 'متن پیام',
        },
      ]}
      data={data}
      actions={[
        {
          label: 'پاسخ',
          icon: <ReplyIcon />,
          onClick: () => {},
        },
        {
          label: 'لغو ارسال',
          icon: <CancelSendIcon />,
          onClick: () => {},
        },
        {
          label: 'کپی',
          icon: <CopyIcon />,
          onClick: () => {},
        },
        {
          label: 'ارسال',
          icon: <SendIcon />,
          onClick: () => {},
        },
        {
          label: 'اضافه به مخاطبین',
          icon: <PersonAddIcon />,
          onClick: () => setOpenModal(true),
        },
        {
          label: 'ارسال پیام',
          icon: <MailIcon />,
          onClick: () => {},
        },
      ]}
    />
  );
}

export default IncomingMessageTable;
