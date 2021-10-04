import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { digitsEnToFa } from 'persian-tools2';

// components
import Typography from 'components/shared/Typography';
import FileDropzone from 'components/shared/FileDropzone';
import Dialog from 'components/shared/DialogImproved';
import Input from 'components/shared/Input';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TabPanel from 'components/shared/TabPanel';
import Notification from 'components/shared/Notification';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';

// constants
import { SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  input: {
    textAlign: 'center',
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
 * @component AddNumberToWebserviceModal
 */
function AddNumberToWebserviceModal({ open, ...rest }) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [check, setCheck] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog {...rest} title="افزودن شماره به وبسرویس" open={open} successButtonText="ذخیره">
      <Autocomplete
        disableClearable
        options={[
          { title: 'اپراتور 1000' },
          { title: 'اپراتور 02' },
          { title: 'اپراتور 3000' },
        ]}
        getOptionLabel={(option) => digitsEnToFa(option.title)}
        classes={{
          input: classes.input,
        }}
        renderInput={(params) => (
          <Input placeholder="--انتخاب وبسرویس--" label="نام وبسرویس" {...params} fullWidth />
        )}
      />
      <Paper elevation={3} className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="ورود دستی" />
          <Tab label="آپلود از فایل" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0} disableGutters>
        <Grid container spacing={SPACING_HALF}>
          <Grid item xs={12}>
            <Input
              name="firstName"
              label="شماره خط"
              fullWidth
              placeholder="شماره خط را وارد کنید"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>نمونه صحیح وارد کردن شماره 1000711 یا 21000210</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              disableClearable
              options={[{ title: 'سفارشی' }, { title: 'غیر سفارشی' }]}
              getOptionLabel={(option) => option.title}
              defaultValue={{ title: 'سفارشی' }}
              classes={{
                input: classes.input,
              }}
              renderInput={(params) => <Input label="نوع خرید" {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              disableClearable
              options={[
                { title: '14 رقمی' },
                { title: '12 رقمی' },
                { title: '11 رقمی' },
                { title: '10 رقمی' },
              ]}
              getOptionLabel={(option) => digitsEnToFa(option.title)}
              defaultValue={{ title: '14 رقمی' }}
              classes={{
                input: classes.input,
              }}
              renderInput={(params) => <Input label="تعداد ارقام" {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              disableClearable
              options={[{ title: 'تبلیغاتی' }, { title: 'خدماتی' }]}
              getOptionLabel={(option) => option.title}
              defaultValue={{ title: 'تبلیغاتی' }}
              classes={{
                input: classes.input,
              }}
              renderInput={(params) => <Input label="نوع خط" {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              disableClearable
              options={[{ title: 'دارد' }, { title: 'ندارد' }]}
              getOptionLabel={(option) => option.title}
              defaultValue={{ title: 'دارد' }}
              classes={{
                input: classes.input,
              }}
              renderInput={(params) => <Input label="ارسال لینک" {...params} fullWidth />}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>بررسی عدم درج تکراری</Typography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
              />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} disableGutters>
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
              primaryText="کلیه ستون های اکسل بجز SendToBlack و SendLink الزامی بوده و درصورت پر نکردن دو مورد ذکر شده خط ها بصورت تبلیغاتی و عدم ارسال لینک ثبت می شوند"
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <div className={classes.swithFormControl}>
              <Typography className={classes.switchLable}>عدم درج تکراری </Typography>
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

export default AddNumberToWebserviceModal;
