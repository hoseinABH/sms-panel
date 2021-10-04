import { makeStyles } from '@material-ui/core/styles';

// components
import { ChatMessage, TicketHeader } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import Typography from 'components/shared/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Avatar from '@material-ui/core/Avatar';

// constants
import { SPACING, SPACING_HALF, SPACING_LEAST, SPACING_THIRD } from 'constants/spacing';

// icons
import SupportIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/PersonOutline';
import ListIcon from '@material-ui/icons/ListAlt';
import TreeIcon from '@material-ui/icons/AccountTreeOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PhoneIcon from '@material-ui/icons/PhoneIphoneOutlined';
import InboxIcon from '@material-ui/icons/MoveToInboxOutlined';
import DraftIcon from '@material-ui/icons/DraftsOutlined';
import MarkAsRead from 'components/shared/icons/MarkAsRead';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING),
  },
  form: {
    padding: theme.spacing(SPACING),
    marginTop: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(SPACING_HALF),
      marginTop: theme.spacing(SPACING),
    },
  },
  chatSection: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  input: {
    textAlign: 'center',
    height: 4,
  },
  selectInput: {
    marginTop: theme.spacing(SPACING_LEAST),
  },
  avatar: {
    width: 72,
    height: 72,
    marginBottom: theme.spacing(SPACING_THIRD),
  },
  profileSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderLeft: '1px solid #ddd',
    [theme.breakpoints.down('md')]: {
      borderLeft: 'none',
      marginBottom: theme.spacing(SPACING_THIRD),
      borderBottom: '1px solid #ddd',
    },
  },
  textWithIcon: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(SPACING_LEAST),
  },
  icon: {
    marginRight: theme.spacing(SPACING_THIRD),
    color: theme.palette.text.secondary,
  },
  chatList: {
    maxHeight: 300,
    overflowY: 'auto',
  },
}));

/**
 * @component Ticket
 */
function Ticket() {
  const classes = useStyles();

  return (
    <PageWithTitle title="پشتیبانی" contentTitle="تیکت ها" icon={SupportIcon}>
      <div className={classes.root}>
        <TicketHeader />
        <Paper variant="outlined" className={classes.form}>
          <Grid container spacing={SPACING_HALF} className={classes.chatSection}>
            <Grid item xs={12} lg={9}>
              <Grid container spacing={SPACING}>
                <Grid item xs={12} lg={11}>
                  <Grid container spacing={SPACING} className={classes.chatList}>
                    <Grid item xs={12}>
                      <ChatMessage
                        time="نوشته شده در 10 روز 3 ساعت قبل"
                        topic="لیست ویژه"
                        avatar={`https://randomuser.me/api/portraits/men/46.jpg`}
                      >
                        <Typography lineHeight={20}>
                          سلام وقت بخیر چرا ارسال های من تعدادش کم میشه و مینویسه لیست ویژه ؟
                          من لیست ویژه ای تنظیم نکردم
                        </Typography>
                      </ChatMessage>
                    </Grid>
                    <Grid item xs={12}>
                      <ChatMessage
                        myMessage
                        time="نوشته شده در 10 روز 3 ساعت قبل"
                        avatar={`https://randomuser.me/api/portraits/men/29.jpg`}
                      >
                        <Typography lineHeight={20}>
                          سلام وقت بخیر ، به این دلیل است که اون شماره ها درخواست لغو ارسال
                          داشته اند و سیستم شماره های آنهارا به صورت اتوماتیک از لیست ارسال شما
                          حذف میکند.
                        </Typography>
                      </ChatMessage>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={SPACING_LEAST}>
                    <Grid item xs={12} md={9}>
                      <Input
                        fullWidth
                        label="متن پاسخ"
                        multiline
                        rows={9}
                        placeholder="لطفا پاسخ خود را اینجا تایپ کنید"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Autocomplete
                        disableClearable
                        options={[{ title: 'معمولی' }, { title: 'زیاد' }, { title: 'کم' }]}
                        classes={{
                          input: classes.input,
                        }}
                        getOptionLabel={(option) => option.title}
                        defaultValue={{ title: 'معمولی' }}
                        renderInput={(params) => (
                          <Input label="اولویت" {...params} fullWidth />
                        )}
                      />
                      <Autocomplete
                        disableClearable
                        options={[
                          { title: 'در حال بررسی' },
                          { title: 'حل شده' },
                          { title: 'منتظر کاربر' },
                          { title: 'بررسی نشده' },
                        ]}
                        className={classes.selectInput}
                        classes={{
                          input: classes.input,
                        }}
                        getOptionLabel={(option) => option.title}
                        defaultValue={{ title: 'حل شده' }}
                        renderInput={(params) => <Input label="وضعیت" {...params} fullWidth />}
                      />
                      <Autocomplete
                        disableClearable
                        className={classes.selectInput}
                        options={[{ title: 'بله' }, { title: 'خیر' }]}
                        classes={{
                          input: classes.input,
                        }}
                        getOptionLabel={(option) => option.title}
                        defaultValue={{ title: 'بله' }}
                        renderInput={(params) => (
                          <Input label="ارسال پیامک" {...params} fullWidth />
                        )}
                      />
                      <LoadingButton
                        className={classes.selectInput}
                        fullWidth
                        size="small"
                        variant="contained"
                        color="success"
                      >
                        ارسال پاسخ
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={3} className={classes.profileSection}>
              <Avatar
                className={classes.avatar}
                alt="user avatar"
                src={`https://randomuser.me/api/portraits/men/46.jpg`}
              />
              <div className={classes.userInfo}>
                <div className={classes.textWithIcon}>
                  <PersonIcon className={classes.icon} />
                  <Typography variant="oveline">محمد افشار</Typography>
                </div>
                <div className={classes.textWithIcon}>
                  <ListIcon className={classes.icon} />
                  <Typography variant="oveline">کاربر</Typography>
                </div>
                <div className={classes.textWithIcon}>
                  <TreeIcon className={classes.icon} />
                  <Typography variant="oveline">لایه 1</Typography>
                </div>
                <div className={classes.textWithIcon}>
                  <MailIcon className={classes.icon} />
                  <Typography variant="oveline">mohammad@gmail.com</Typography>
                </div>
                <div className={classes.textWithIcon}>
                  <PhoneIcon className={classes.icon} />
                  <Typography variant="oveline">09175594952</Typography>
                </div>
                <div className={classes.textWithIcon}>
                  <InboxIcon className={classes.icon} />
                  <Typography variant="oveline">تیکت های ارسالی 4 عدد</Typography>
                </div>
                <div className={classes.textWithIcon}>
                  <DraftIcon className={classes.icon} />
                  <Typography variant="oveline">تیکت های حل نشده 1 عدد</Typography>
                </div>
                <div className={classes.textWithIcon}>
                  <MarkAsRead className={classes.icon} />
                  <Typography variant="oveline">تیکت های حل شده 3 عدد</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </PageWithTitle>
  );
}

export default Ticket;
