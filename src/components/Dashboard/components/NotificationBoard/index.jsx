import { makeStyles } from '@material-ui/core/styles';

// components
import PaperWithTitle from '../PaperWithTitle';
import Button from '@material-ui/core/Button';
import Notification from 'components/shared/Notification';

// constants
import { SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  notificationWrapper: {
    marginBottom: theme.spacing(SPACING_HALF),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

const testValue = [
  {
    primaryText: 'شارژ رایگان به مدت محدود',
    secondaryText:
      'به مناسبت چهار سالگی اس ام اس برتر به مدت چهار روز به تمامی خرید های شما 2 درصد شارژ رایگان اضافه میشود',
    type: 'success',
    date: Date.now(),
  },
  {
    primaryText: 'خطوط خدماتی',
    secondaryText:
      'طبق اطلاعیه اپراتور تا اطلاع ثانویه امکان خدماتی کردن خطوط وجود نخواهد داشت',
    type: 'error',
    date: Date.now(),
  },
  {
    primaryText: 'ساعت ارسال',
    secondaryText:
      'لطفا جهت ارسال تبلیغات انبوه بازه ارسال را بین 9 صبح تا 9 شب تنظیم کنید و در غیر این بازه ارسال انجام ندهید.',
    type: 'warning',
    date: Date.now(),
  },
];

/**
 * @component NotificationBoard
 */
function NotificationBoard({ notifications = testValue }) {
  const classes = useStyles();

  return (
    <PaperWithTitle
      title="تابلوی اعلانات"
      headerChildren={
        <Button variant="contained" color="primary">
          آرشیو اعلانات
        </Button>
      }
    >
      {notifications.map((notification, index) => (
        <div className={classes.notificationWrapper} key={index}>
          <Notification date key={index} {...notification} />
        </div>
      ))}
    </PaperWithTitle>
  );
}

export default NotificationBoard;
