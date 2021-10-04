import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import CircularProgress from 'components/shared/CircularProgress';
import IconButton from '@material-ui/core/IconButton';

// icons
import DownloadIcon from '@material-ui/icons/MoveToInboxOutlined';
import AssignmentIcon from '@material-ui/icons/AssignmentIndOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineRounded';
import DeliveryIcon from '@material-ui/icons/DoneAllOutlined';
import StopIcon from '@material-ui/icons/Stop';

// fakeData
import posts from './posts.json';

const useStyles = makeStyles((theme) => ({
  sendingStatus: {
    display: 'flex',
    alignItems: 'center',
  },
  stopIcon: {
    border: `2px solid ${theme.palette.error.main}`,
    borderRadius: '50%',
  },
}));

/**
 * @component PostListTable
 */
function PostListTable() {
  const classes = useStyles();
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Table
      disableSelect
      tableDescription="لیست ارسال های [2000]"
      columns={[
        {
          field: 'senderName',
          title: 'فرستنده',
          render: (row) => <Typography>{row.senderName}</Typography>,
        },
        {
          field: 'child',
          title: 'زیر شاخه',
          render: (row) => <Typography color="info">{row.child}</Typography>,
        },
        {
          field: 'lineNumber',
          title: 'شماره خط',
          render: (row) => <Typography>{row.lineNumber}</Typography>,
        },
        {
          field: 'lineType',
          title: 'نوع خط',
        },
        {
          field: 'contacts',
          title: 'مخاطبین',
          render: (row) => <Typography color="info">{row.contacts}</Typography>,
        },
        {
          field: 'sendId',
          title: 'شناسه ارسال',
          render: (row) => <Typography>{row.sendId}</Typography>,
        },
        {
          field: 'submitDate',
          title: 'تاریخ ثبت',
          render: (row) => <Typography>11:55 , 1399/10/17</Typography>,
        },
        {
          field: 'startSending',
          title: 'شروع ارسال',
          render: (row) => <Typography>11:55 , 1399/10/17</Typography>,
        },
        {
          field: 'endSending',
          title: 'پایان ارسال',
          render: (row) => <Typography>11:55 , 1399/10/17</Typography>,
        },

        {
          field: 'sendType',
          title: 'نوع ارسال',
        },

        {
          field: 'status',
          title: 'وضعیت',
          render: (row) => {
            const getStatus = () => {
              switch (row.status) {
                case 'pending':
                  return <Typography>در صف ارسال</Typography>;
                case 'sending':
                  return (
                    <div className={classes.sendingStatus}>
                      <CircularProgress value={progress} />
                      <IconButton>
                        <StopIcon
                          fontSize="large"
                          className={classes.stopIcon}
                          color="error"
                        />
                      </IconButton>
                    </div>
                  );
                case 'sent':
                  return <Typography>ارسال شده</Typography>;
                case 'deleted':
                  return <Typography color="error">حذف شده</Typography>;
                default:
                  return <Typography>در صف ارسال</Typography>;
              }
            };

            const status = getStatus();
            return status;
          },
        },
        {
          field: 'messageText',
          title: 'متن ارسال',
          render: (row) => <Typography>{row.messageText}</Typography>,
        },
      ]}
      data={posts}
      actions={[
        {
          label: 'پروفایل کاربر',
          icon: <PersonIcon />,
          onClick: () => {},
        },
        {
          label: 'اهراز هویت کاربر',
          icon: <AssignmentIcon />,
          onClick: () => {},
        },
        {
          label: 'دریافت خروجی دلیوری ها',
          icon: <DownloadIcon />,
          onClick: () => {},
        },
        {
          label: 'نمایش دلیوری',
          icon: <DeliveryIcon />,
          onClick: () => {},
        },
      ]}
    />
  );
}

export default PostListTable;
