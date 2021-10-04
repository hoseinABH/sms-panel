import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import PageWithTitle from 'components/shared/PageWithTitle';
import Typography from 'components/shared/Typography';
import Table from 'components/shared/Table';
import Dialog from 'components/shared/DialogImproved';
import Input from 'components/shared/Input';
import Notification from 'components/shared/Notification';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

// icons
import LinesIcon from '@material-ui/icons/PhoneOutlined';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import SecurityIcon from '@material-ui/icons/Security';
import TimeIcon from '@material-ui/icons/AccessTime';

// constants
import { SPACING, SPACING_HALF } from 'constants/spacing';

// fakeData
import lines from './lines.json';

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: theme.spacing(SPACING_HALF),
    marginBottom: theme.spacing(SPACING_HALF),
  },
  lineInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  icon: {
    marginLeft: theme.spacing(SPACING),
  },
}));

/**
 * @component LinesList
 */
function LinesList() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  return (
    <PageWithTitle title="مدیریت خطوط" contentTitle="لیست خطوط پنل" icon={LinesIcon}>
      <div className={classes.spacing}>
        <Typography lineHeight={30} variant="body2">
          در این لیست خطوط اختصاصی و اشتراکی که در پنل شما جهت ارسال و دریافت پیامک تخصیص داده
          شده ، نمایش داده شده است ،جهت تغییر در اولویت و ارسال در پنل کافی است شماره مورد نظر
          به بالا یا پایین کشیده و رها کنید تا به ترتیب دلخواه شما تنظیم شود. این اولیت در زمان
          ارسال و انتخاب شماره در ارسال های تکی و انبوه نمایش داده میشود.
        </Typography>
      </div>
      <Table
        enableDnD
        disableSelect
        disableExport
        maxHeight={400}
        disablePagination
        columns={[
          {
            field: 'lineNumber',
            title: 'شماره خط',
            render: (row) => <Typography>{row.lineNumber}</Typography>,
          },
          {
            field: 'assignmentDate',
            title: 'تاریخ واگذاری',
            render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
          },
          {
            field: 'ExpirationDate',
            title: 'تاریخ انقضا',
            render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
          },
          {
            field: 'daysLeft',
            title: 'روز های باقی مانده',
            render: (row) => {
              const days = row.daysLeft;
              return days < 0 ? (
                <Box display="flex" justifyContent="center">
                  <Typography color="error">{days.toString().split('-')[1]}</Typography>
                  <Typography color="error">-</Typography>
                </Box>
              ) : (
                <Typography>{days}</Typography>
              );
            },
          },
          {
            field: 'permissions',
            title: 'مجوز',
          },
          {
            field: 'lineType',
            title: 'نوع خط',
          },
          {
            field: 'status',
            title: 'سایر خطوط انگلیسی',
            render: (row) => {
              const getStatus = () => {
                switch (row.status) {
                  case 'released':
                    return {
                      type: 'info',
                      text: 'آزاد شده',
                    };
                  case 'banned':
                    return {
                      type: 'error',
                      text: 'مسدود شده',
                    };
                  case 'expired':
                    return {
                      type: 'error',
                      text: 'منقضی شده',
                    };
                  default:
                    return {
                      type: '',
                      text: 'فعال',
                    };
                }
              };
              const status = getStatus();
              return <Typography color={status.type}>{status.text}</Typography>;
            },
          },
        ]}
        actions={[
          {
            label: 'تمدید',
            icon: <TimeIcon />,
            onClick: showModal,
          },
        ]}
        data={lines}
      />
      <div className={classes.description}>
        <Typography gutterBottom>لیست خطوط وبسرویس</Typography>
        <Typography lineHeight={30} variant="body2">
          در این لیست خطوط اختصاصی و اشتراکی که در پنل شما جهت ارسال و دریافت پیامک تخصیص داده
          شده ، نمایش داده شده است ،جهت تغییر در اولویت و ارسال در پنل کافی است شماره مورد نظر
          به بالا یا پایین کشیده و رها کنید تا به ترتیب دلخواه شما تنظیم شود. این اولیت در زمان
          ارسال و انتخاب شماره در ارسال های تکی و انبوه نمایش داده میشود.
        </Typography>
      </div>
      <Table
        disableSearch
        disableExport
        disablePagination
        disableSelect
        enableDnD
        maxHeight={400}
        columns={[
          {
            field: 'lineNumber',
            title: 'شماره خط',
            render: (row) => <Typography>{row.lineNumber}</Typography>,
          },
          {
            field: 'assignmentDate',
            title: 'تاریخ واگذاری',
            render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
          },
          {
            field: 'ExpirationDate',
            title: 'تاریخ انقضا',
            render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
          },
          {
            field: 'daysLeft',
            title: 'روز های باقی مانده',
            render: (row) => {
              const days = row.daysLeft;
              return days < 0 ? (
                <Box display="flex" justifyContent="center">
                  <Typography color="error">{days.toString().split('-')[1]}</Typography>
                  <Typography color="error">-</Typography>
                </Box>
              ) : (
                <Typography>{days}</Typography>
              );
            },
          },
          {
            field: 'permissions',
            title: 'مجوز',
          },
          {
            field: 'lineType',
            title: 'نوع خط',
          },
          {
            field: 'status',
            title: 'وضعیت',
            render: (row) => {
              const getStatus = () => {
                switch (row.status) {
                  case 'released':
                    return {
                      type: 'info',
                      text: 'آزاد شده',
                    };
                  case 'banned':
                    return {
                      type: 'error',
                      text: 'مسدود شده',
                    };
                  case 'expired':
                    return {
                      type: 'error',
                      text: 'منقضی شده',
                    };
                  default:
                    return {
                      type: '',
                      text: 'فعال',
                    };
                }
              };
              const status = getStatus();
              return <Typography color={status.type}>{status.text}</Typography>;
            },
          },
        ]}
        data={lines}
      />

      {/* Start of Extension Dialog */}
      {/* show when user click on each row's extention button */}
      <Dialog
        title="تمدید خط"
        open={openModal}
        onClose={() => setOpenModal(false)}
        successButtonText="تمدید"
      >
        <Notification
          normalText
          type="error"
          variant="outlined"
          primaryText="جهت تمدید از کافی بودن موجودی خود اطمینان حاصل فرمایید"
        />
        <div className={classes.spacing}>
          <Notification
            normalText
            type="warning"
            variant="outlined"
            primaryText="شماره هایی که منقضی نشده ولی تمدید می شود یک سال به تاریخ انقضاء انها اضاف می شود و تاریخ تمدید شماره های منقضی شده یکسال  از تاریخ تمدید است "
          />
        </div>
        <Paper variant="outlined" className={classes.lineInfo}>
          <div className={classes.cell}>
            <div>
              <Typography gutterBottom align="center">
                شماره خط
              </Typography>
              <Typography variant="body2">1000917554578</Typography>
            </div>
            <PhoneIcon fontSize="large" color="action" className={classes.icon} />
          </div>

          <Divider orientation="vertical" flexItem variant="fullWidth" />

          <div className={classes.cell}>
            <div>
              <Typography gutterBottom align="center">
                مجوز خط
              </Typography>
              <Typography variant="body2">ارسال و دریافت</Typography>
            </div>
            <SecurityIcon fontSize="large" color="action" className={classes.icon} />
          </div>
        </Paper>
        <Input
          className={classes.spacing}
          label="هزینه تمدید"
          placeholder="۱۷۵۰۰۰۰"
          name="price"
          variant="outlined"
          fullWidth
        />
        <Notification
          normalText
          className={classes.spacing}
          type="error"
          variant="outlined"
          primaryText="مبلغ تمدید خط برحسب ریال و بر اساس ۲۵% قیمت روز خط محاسبه شده است"
        />
        <div className={classes.spacing} />
      </Dialog>
      {/* End of Extension Dialog */}
    </PageWithTitle>
  );
}

export default LinesList;
