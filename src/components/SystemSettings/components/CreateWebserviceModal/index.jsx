import { makeStyles } from '@material-ui/core/styles';

// components
import LoadingButton from 'components/shared/LoadingButton';
import Typography from 'components/shared/Typography';
import Dialog from 'components/shared/DialogImproved';
import Input from 'components/shared/Input';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

// constants
import { SPACING_THIRD, SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  input: {
    textAlign: 'center',
  },
  secondaryAction: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component CreateWebserviceModal
 */
function CreateWebserviceModal({ ...rest }) {
  const classes = useStyles();

  return (
    <Dialog
      title="اطلاعات وبسرویس"
      {...rest}
      successButtonText="ذخیره"
      renderAction={
        <LoadingButton
          className={classes.secondaryAction}
          size="small"
          variant="contained"
          color="info.dark"
        >
          بررسی وبسرویس
        </LoadingButton>
      }
    >
      <Grid container spacing={SPACING_THIRD}>
        <Grid item xs={12}>
          <Input
            fullWidth
            label="نام وبسرویس"
            placeholder="یک عنوان بنویسید ، به عنوان مثال :وبسرویس خدماتی"
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disableClearable
            options={[{ title: 'اسانک' }, { title: 'رهیاب' }]}
            getOptionLabel={(option) => option.title}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => (
              <Input placeholder="--انتخاب مسیر--" label="وبسرویس" {...params} fullWidth />
            )}
          />
          <Typography variant="body2">
            مسیر ارسال : در واقع این همان وبسرویس اصلی ارسال است که از اپراتور های اصلی یا شرکت
            های پیامکی گرفته شده است و کد نویسی آن اجام شده و برای ارسال و دریافت پیامک از آن
            استفاده خواهیم کرد
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            label="نام کاربری"
            placeholder="نام کاربری شمار در وبسرویس اپراتور"
          />
          <Typography variant="body2">
            آدرس وبسرویس سامانه : شامل آدرس فایل کد نویسی شده براساس پارامتر های وبسرویس
            اپراتور ارائه دهنده خدمات پیامک
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth label="پسورد" placeholder="پسورد شما در وبسرویس اپراتور" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">موجودی پیامک : 0</Typography>{' '}
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default CreateWebserviceModal;
