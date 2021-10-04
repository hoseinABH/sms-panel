import { makeStyles } from '@material-ui/core/styles';

// components
import Dialog from 'components/shared/DialogImproved';
import Input from 'components/shared/Input';
import Notification from 'components/shared/Notification';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

// constants
import { SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  input: {
    textAlign: 'center',
  },
}));

/**
 * @component AddNewAccountModal
 */
function AddNewAccountModal({ ...rest }) {
  const classes = useStyles();

  return (
    <Dialog {...rest} title="اطلاعات حساب و درگاه" successButtonText="ذخیره">
      <Grid container spacing={SPACING_THIRD}>
        <Grid item xs={12} md={6}>
          <Autocomplete
            options={['پرداخت فیش', 'درگاه و پرداخت فیش', 'درگاه']}
            getOptionLabel={(option) => option}
            disableClearable
            classes={{
              input: classes.input,
            }}
            defaultValue={'درگاه و پرداخت فیش'}
            renderInput={(params) => <Input {...params} fullWidth label="نوع پرداخت" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            options={[' فیش', 'پارسیان', 'سامان']}
            getOptionLabel={(option) => option}
            disableClearable
            classes={{
              input: classes.input,
            }}
            defaultValue={'ملت'}
            renderInput={(params) => <Input {...params} fullWidth label="نام بانک" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input inputProps={{ className: classes.input }} label="صاحب حساب" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="شماره حساب" inputProps={{ className: classes.input }} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="شماره کارت" inputProps={{ className: classes.input }} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="شماره شبا" inputProps={{ className: classes.input }} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="کد پذیرنده" inputProps={{ className: classes.input }} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="نام کاربری" inputProps={{ className: classes.input }} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="رمز عبور" inputProps={{ className: classes.input }} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="درگاه" inputProps={{ className: classes.input }} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Notification
            type="error"
            variant="outlined"
            normalText
            primaryText="از هر درگاه فقط باید یک نسخه در سیستم درج شود ، به عنوان مثال فقط یک درگاه پارسیان نه بیشتر"
          />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default AddNewAccountModal;
