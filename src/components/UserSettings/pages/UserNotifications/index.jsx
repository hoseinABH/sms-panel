import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import PageWithTitle from 'components/shared/PageWithTitle';
import FormGroup from 'components/shared/FormGroup';
import MultiSelect from 'components/shared/MultiSelect';
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import WarningTypography from 'components/shared/Typography';

import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// icons
import UserSettingsIcon from 'components/shared/icons/UserSetting';

// constants
import { SPACING, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  swithFormControl: {
    display: 'flex',
    alignItems: 'center',
  },
  saveButton: {
    marginTop: theme.spacing(SPACING),
  },
  switch: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  helperText: {
    marginTop: theme.spacing(SPACING_LEAST),
  },
  divider: {
    margin: theme.spacing(SPACING, 0),
  },
  mulitSelect: {
    marginTop: theme.spacing(SPACING),
    '&:first-child': {
      marginBottom: 'auto',
    },
  },
  desc: {
    color: theme.palette.warning.dark,
  },
}));

const numbers = [
  {
    title: '09361748187',
  },
  {
    title: '09225681423',
  },
  {
    title: '09152365487',
  },
  {
    title: '09380654874',
  },
];

/**
 * @component UserNotifications
 */
function UserNotifications() {
  const [check, setCheck] = useState(true);
  const classes = useStyles();

  return (
    <PageWithTitle
      title="تنظیمات کاربری"
      contentTitle="اعلان ها و فروارد ها"
      icon={UserSettingsIcon}
    >
      <FormGroup>
        <Grid
          container
          spacing={SPACING_HALF}
          direction="column"
          className={classes.formGroup}
        >
          <Grid item xs={12} md={7}>
            <div className={classes.swithFormControl}>
              <WarningTypography color="warning.dark">
                تنظیمات شماره موبایل های دریافت کننده هشدار پیامکی
              </WarningTypography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="enableNotification"
                inputProps={{ 'aria-label': 'enable notification checkbox' }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <MultiSelect label="شماره موبایل" list={numbers} />
            <div className={classes.helperText}>
              <WarningTypography variant="overline" color="warning.dark">
                لطفا شماره موبایل هایی که تمایل دارید هشدار های سامانه را بصورت پیامک دریافت
                کنند را در کادر فوق وارد کنید
              </WarningTypography>
            </div>
          </Grid>

          <Divider className={classes.divider} />

          <Grid item xs={12} md={7}>
            <div className={classes.swithFormControl}>
              <WarningTypography color="warning.dark">
                حداقل اعتبار حساب پیامک
              </WarningTypography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="smsCharge"
                inputProps={{ 'aria-label': 'enable charge notification' }}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Input fullWidth name="smsCharge" label="مبلغ به ریال" />
            <div className={classes.helperText}>
              <WarningTypography variant="overline" color="warning.dark">
                درصورتی که اعتبار حساب پیامک به این میزان برسید پیامک هشدار کمبود اعتبار برای
                شما ارسال خواهد شد
              </WarningTypography>
            </div>
          </Grid>

          <Divider className={classes.divider} />

          <Grid item xs={12} md={7}>
            <div className={classes.swithFormControl}>
              <WarningTypography color="warning.dark">
                فروارد پیامک های دریافت شده
              </WarningTypography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="receivedSmsForward"
                inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <div className={classes.mulitSelect}>
              <MultiSelect label="خط پیامکی" list={numbers} />
            </div>
            <div className={classes.mulitSelect}>
              <MultiSelect label="شماره موبایل" list={numbers} />
            </div>
            <div className={classes.mulitSelect}>
              <MultiSelect label="ارسال از شماره" list={numbers} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <WarningTypography variant="overline" color="warning.dark">
              درصورتی که میخواهید پیامک های دریافتی خطوط اختصاصی خود را بر روی موبایل خود
              دریافت کنید ابتدا شماره خطوط را وارد کرده و در قسمت بعدی شماره موبایل دریافت
              کننده و در اخر خط ارسال کننده پیامک{' '}
            </WarningTypography>
          </Grid>

          <Divider className={classes.divider} />

          <Grid item xs={12} md={7}>
            <div className={classes.swithFormControl}>
              <WarningTypography color="warning.dark">
                اطلاع رسانی های مرتبط با تیکت
              </WarningTypography>
              <Switch
                className={classes.switch}
                checked={check}
                onChange={() => setCheck(!check)}
                name="enableTicketNotification"
                inputProps={{ 'aria-label': 'enable ticket notification checkbox' }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <MultiSelect label="شماره موبایل" list={numbers} />
          </Grid>
          <Grid item xs={12}>
            <WarningTypography variant="overline" color="warning.dark">
              در صورتی که میخواهید به محض اینکه اپراتور پشتیبان به تیکت شما پاسخ میدهد ، از
              طریق پیامک با خبر شوید ، بهتر است همیشه این گزینه را فعال نگه دارید{' '}
            </WarningTypography>
          </Grid>

          <Divider className={classes.divider} />

          <Grid item xs={12} md={7}>
            <Input fullWidth name="webAddress" label="آدرس اینترنتی" />
          </Grid>
          <Grid item xs={12}>
            <WarningTypography variant="body1" color="warning.dark" gutterBottom>
              آدرس انتقال ترافیک
            </WarningTypography>
            <Typography variant="overline" className={classes.desc}>
              وقتی پیامک کوتاهی به هریک از شماره های تخصیص یافته شما ارسال میشود ، پس از تایید
              صحت شماره ، اطلاعات پیام کوتاه که شامل شماره فرستنده ، متن پیام ، شماره شما و کد
              امنیتی می باشد به ادرس اینترنتی <code>URL</code> که مشخص کرده اید به صورت
              <code>Post</code> ارسال میشود. برای نمونه <br />{' '}
              <code>https://your-domain.com/sms/receive-sms.php</code>
            </Typography>
          </Grid>
        </Grid>
      </FormGroup>
      <Grid item xs={12} md={2} className={classes.saveButton}>
        <LoadingButton fullWidth type="submit" variant="contained" color="success">
          ذخیره
        </LoadingButton>
      </Grid>
    </PageWithTitle>
  );
}

export default UserNotifications;
