import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import CircularProgress from 'components/shared/CircularProgress';
import Typography from 'components/shared/Typography';

import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

// icons
import FactCheck from 'components/shared/icons/FactCheck';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import RepeatIcon from '@material-ui/icons/Repeat';
import StopIcon from '@material-ui/icons/Stop';

// constants
import { SPACING_THIRD } from 'constants/spacing';

// fakeData
import data from './data.json';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING_THIRD),
    paddingBottom: theme.spacing(SPACING_THIRD),
  },
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
 * @component NormalSendTable
 */
function NormalSendTable() {
  const classes = useStyles();

  const [progress, setProgress] = useState(10);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [progress]);
  return (
    <Table
      disableSearch
      tableDescription="لیست پیامک های ارسالی صالح زارعی [2000]"
      columns={[
        {
          field: 'title',
          title: 'عنوان',
        },
        {
          field: 'sender',
          title: 'فرستنده',
          render: (row) => <Typography>{row.sender}</Typography>,
        },

        {
          field: 'count',
          title: 'تعداد',
          render: (row) => <Typography color="info">{row.count}</Typography>,
        },
        {
          field: 'sendNumber',
          title: 'شناسه ارسال',
          render: (row) => <Typography>{row.sendNumber}</Typography>,
        },
        {
          field: 'date/time',
          title: 'تاریخ و ساعت',
          render: (row) => <Typography>{new Date().toLocaleString('fa-IR')}</Typography>,
        },
        {
          field: 'status',
          title: 'وضعیت ارسال',
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
          field: 'sendPrice',
          title: 'مبلغ ارسال',
          render: (row) => (
            <Box display="flex" justifyContent="center">
              <Typography color="error.light" useComma>
                {row.sendPrice}
              </Typography>
              <Typography withRials color="error.light">
                -
              </Typography>
            </Box>
          ),
        },
        {
          field: 'returnedPrice',
          title: 'مبلغ برگشتی',
          render: (row) => <Typography useComma>{row.returnedPrice}</Typography>,
        },
        {
          field: 'messageText',
          title: 'متن پیام',
        },
      ]}
      data={data}
      actions={[
        {
          label: 'ثبت',
          icon: <FactCheck />,
          onClick: () => {},
        },
        {
          label: 'تکرار',
          icon: <RepeatIcon />,
          onClick: () => {},
        },
        {
          label: 'ذخیره',
          icon: <SaveAltIcon />,
          onClick: () => {},
        },
        {
          label: 'خوانده شده',
          icon: <DoneAllIcon />,
          onClick: () => {},
        },
      ]}
    />
  );
}

export default NormalSendTable;
