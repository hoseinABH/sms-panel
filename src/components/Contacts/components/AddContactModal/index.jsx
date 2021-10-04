import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import FileDropzone from 'components/shared/FileDropzone';
import Input from 'components/shared/Input';
import Dialog from 'components/shared/DialogImproved';
import TabPanel from 'components/shared/TabPanel';
import Notification from 'components/shared/Notification';
import Typography from 'components/shared/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// constants
import { SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
  addContact: {
    marginRight: theme.spacing(SPACING_HALF),
    marginLeft: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(SPACING_HALF),
      marginTop: theme.spacing(SPACING_HALF),
      marginRight: 0,
      marginLeft: 0,
    },
  },

  tabs: {
    flexGrow: 1,
    marginTop: theme.spacing(SPACING_HALF),
    marginBottom: theme.spacing(SPACING_HALF),
  },
  swithFormControl: {
    display: 'flex',
    alignItems: 'center',
  },
  switch: {
    marginLeft: theme.spacing(SPACING_HALF),
  },

  spacing: {
    marginBottom: theme.spacing(SPACING_HALF),
    marginTop: theme.spacing(SPACING_HALF),
  },
  switchLable: {
    width: 220,
  },
}));

/**
 * @component AddContactModal
 */
function AddContactModal({ ...rest }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [check, setCheck] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog title="افزودن مخاطب" successButtonText="ثبت" {...rest}>
      <Autocomplete
        options={[{ title: 'همکاران' }, { title: 'مشتریان قدیمی' }, { title: 'مشتریان جدید' }]}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <Input placeholder="--انتخاب گروه--" label="نام گروه" {...params} fullWidth />
        )}
      />
      <Paper elevation={3} className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="ورود دستی" />
          <Tab label="آپلود از فایل" />
          <Tab label="ورود سریع" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0} disableGutters>
        <Grid container spacing={SPACING_HALF}>
          <Grid item xs={12} md={6}>
            <Input name="firstName" label="نام" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input name="lastName" label="نام خانوادگی" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input name="organization" label="نام شرکت" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input name="mobile" label="موبایل" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input name="email" label="ایمیل" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input name="telephone" label="تلفن" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input name="gender" label="جنسیت" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input name="birthDate" label="تاریخ تولد" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Notification
              normalText
              type="error"
              variant="outlined"
              primaryText="پر کردن فیلد شماره موبایل الزامی و سایر فیلد ها اختیاری است"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>
                بروزرسانی شماره های تکراری
              </Typography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="receivedSmsForward"
                inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
              />
            </div>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>
                افزودن شماره درصورت تکراری بودن
              </Typography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="receivedSmsForward"
                inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
              />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={SPACING_HALF}>
          <Grid item xs={12}>
            <FileDropzone />
          </Grid>
          <Grid item xs={12}>
            <Notification
              normalText
              type="info"
              variant="outlined"
              primaryText="برای دانلود نمونه فایل اکسل اینجا کلیک کنید"
            />
          </Grid>
          <Grid item xs={12}>
            <Notification
              normalText
              type="error"
              variant="outlined"
              primaryText="پر کردن فیلد شماره موبایل الزامی و سایر فیلد ها اختیاری است"
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>
                بروزرسانی شماره های تکراری
              </Typography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="receivedSmsForward"
                inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
              />
            </div>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>
                افزودن شماره درصورت تکراری بودن
              </Typography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="receivedSmsForward"
                inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
              />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={SPACING_HALF}>
          <Grid item xs={12}>
            <Input fullWidth name="numbers" multiline rows="8" label="شماره ها" />
          </Grid>
          <Grid item xs={12}>
            <Notification
              normalText
              type="info"
              variant="outlined"
              primaryText="هر شماره را در یک سطر وارد کرده و اینتر را بزنید"
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>
                بروزرسانی شماره های تکراری
              </Typography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="receivedSmsForward"
                inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
              />
            </div>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>
                افزودن شماره درصورت تکراری بودن
              </Typography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="receivedSmsForward"
                inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
              />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
    </Dialog>
  );
}

export default AddContactModal;
