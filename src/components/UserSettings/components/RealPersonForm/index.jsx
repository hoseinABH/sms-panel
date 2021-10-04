import { makeStyles } from '@material-ui/core/styles';

// components
import FormGroup from 'components/shared/FormGroup';
import Input from 'components/shared/Input';
import Grid from '@material-ui/core/Grid';

// constants
import { SPACING_HALF, SPACING, SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  spacing: {
    margin: theme.spacing(SPACING, 0),
  },
  profileForm: {
    paddingTop: theme.spacing(SPACING_THIRD),
  },
}));

/**
 * @component RealPersonForm
 */
function RealPersonForm() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.spacing}>
        <FormGroup title="اطلاعات شخصی">
          <Grid container spacing={SPACING_HALF} className={classes.profileForm}>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="firstName" label="نام" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input
                fullWidth
                name="lastName"
                label="نام خانوادگی"
                className={classes.input}
              />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="fatherName" label="نام پدر" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="nationalCode" label="کد ملی" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input
                fullWidth
                name="idNumber"
                label="شماره شناسنامه"
                className={classes.input}
              />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="birthDate" label="تاریخ تولد" className={classes.input} />
            </Grid>
          </Grid>
        </FormGroup>
      </div>

      <div className={classes.spacing}>
        <FormGroup title="اطلاعات تماس">
          <Grid container spacing={SPACING_HALF} className={classes.profileForm}>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="mobile" label="موبایل" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="telephone" label="تلفن" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="email" label="ایمیل" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="state" label="استان" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="ciry" label="شهر" className={classes.input} />
            </Grid>
            <Grid xs={12} md={6} item>
              <Input fullWidth name="postalCode" label="کد پستی" className={classes.input} />
            </Grid>
            <Grid xs={12} item>
              <Input fullWidth name="address" label="آدرس کامل" className={classes.input} />
            </Grid>
          </Grid>
        </FormGroup>
      </div>
    </>
  );
}

export default RealPersonForm;
