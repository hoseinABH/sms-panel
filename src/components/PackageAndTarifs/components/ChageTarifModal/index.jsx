import { makeStyles } from '@material-ui/core/styles';

// components
import Grid from '@material-ui/core/Grid';
import Typography from 'components/shared/Typography';
import Dialog from 'components/shared/DialogImproved';
import Input from 'components/shared/Input';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Notification from 'components/shared/Notification';

// constants
import { SPACING_HALF, SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  notification: {
    padding: theme.spacing(SPACING_THIRD),
  },
  input: {
    textAlign: 'center',
  },
}));

/**
 * @component ChangeTarifModal
 */
function ChangeTarifModal({ ...rest }) {
  const classes = useStyles();

  return (
    <Dialog {...rest} successButtonText="تایید و اعمال" title="ویرایش کلی تعرفه ها">
      <Grid container spacing={SPACING_HALF}>
        <Grid item xs={12} md={6}>
          <Typography>نوع عملیات ویرایش</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[{ title: 'افزایش' }, { title: 'کاهش' }]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'ارسال در آینده' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="تعرفه پیامک" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>میزان تغییر تعرفه</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            inputProps={{ style: { textAlign: 'center' }, defaultValue: 10 }}
            fullWidth
            label="میزان تغییر"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography>نوع عملیات محاسبه</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[{ title: 'ریال' }, { title: 'تومان' }]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'ریال' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="نوع اعمال" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>اعمال برای پکیج</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[
              { title: 'همه پکیج ها' },
              { title: 'کاربری' },
              { title: 'نمایندگی' },
              { title: 'خدماتی' },
            ]}
            classes={{
              input: classes.input,
            }}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'همه پکیج ها' }}
            renderInput={(params) => <Input label="انتخاب پکیج" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>اپراتور مورد نظر</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[
              { title: 'همه اپراتور ها' },
              { title: 'ایرانسل' },
              { title: 'همراه اول' },
              { title: 'تالیا' },
            ]}
            classes={{
              input: classes.input,
            }}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'همه اپراتور ها' }}
            renderInput={(params) => <Input label="انتخاب اپراتور" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>ارسال مورد نظر</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[{ title: 'همه' }, { title: 'تبلیغاتی' }]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'همه' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="نوع ارسال" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12}>
          <Notification
            type="error"
            variant="outlined"
            primaryText="هشدار اعمال تغییرات"
            secondaryText="افزایش تعرفه پیامک به میزان 10 ریال برای همه پکیج ها ، همه اپراتور ها و همه نوع ارسال اعمال خواهد شد ، درصورت صحیح بودن تایید را بزنید"
          />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default ChangeTarifModal;
