import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { digitsFaToEn } from 'persian-tools2';
import { useSnackbar } from 'notistack';

// template
import AuthTemplate from 'templates/AuthTemplate';

// components
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

// assets
import SignupLogo from 'assets/images/signup.png';

// constatns
import { SPACING, SPACING_DOUBLE, SPACING_HALF, SPACING_THIRD } from 'constants/spacing';
import { MOBILE_REGEX } from 'constants/regex';

// api
import { signUp } from 'api/auth';

const useStyles = makeStyles((theme) => ({
  leftSection: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 500,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(SPACING, 0),
      maxWidth: 720,
    },
  },
  rightSection: {
    background: theme.palette.background.register,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(SPACING, SPACING_DOUBLE),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  registerDesc: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 600,
    padding: theme.spacing(SPACING, SPACING_DOUBLE),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(SPACING_HALF),
    },
  },
  formWrapper: {
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    marginBottom: theme.spacing(SPACING_THIRD),
  },
  buttons: {
    display: 'flex',
    width: '100%',
    margin: theme.spacing(SPACING_HALF, 0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  registerLogo: {
    height: 220,
    userSelect: 'none',
  },
  cancelButton: {
    marginLeft: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: theme.spacing(SPACING_HALF),
    },
  },
  nextButton: {
    marginRight: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
}));

/**
 * @component Register
 */
function Register() {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);

  const { register, errors, handleSubmit } = useForm();

  const handleNext = async ({ firstName, lastName, phoneNumber, nationalCode }) => {
    setLoading(true);
    try {
      const { data } = await signUp(firstName, lastName, phoneNumber, nationalCode);

      if (data?.success) {
        setLoading(false);
        history.push(`/confirm-code?phone=${phoneNumber}`);
      }
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };
  const onCancel = () => {
    history.goBack();
  };

  const validateRegex = (value) => {
    const innerValue = digitsFaToEn(value);
    if (!MOBILE_REGEX.test(innerValue)) {
      return ' شماره موبایل نامعتبر است';
    }
    return true;
  };

  return (
    <AuthTemplate>
      <Card className={classes.leftSection} square elevation={0}>
        <CardContent className={classes.cardContent}>
          <div className={classes.formWrapper}>
            <form
              noValidate
              name="registerForm"
              onSubmit={handleSubmit(handleNext)}
              className={classes.form}
            >
              <Input
                defaultValue=""
                required
                name="firstName"
                className={classes.input}
                variant="outlined"
                inputRef={register({ required: true })}
                error={!!errors?.firstname}
                label="نام"
              />
              <Input
                defaultValue=""
                required
                name="lastName"
                className={classes.input}
                variant="outlined"
                inputRef={register({ required: true })}
                error={!!errors?.lastname}
                label="نام خانوادگی"
              />
              <Input
                defaultValue=""
                required
                name="nationalCode"
                className={classes.input}
                variant="outlined"
                inputRef={register({ required: true, maxLength: 10, minLength: 10 })}
                error={!!errors?.nationalCode}
                label="کدملی"
                helperText="ورود کد ملی جهت بررسی اطلاعات هویتی الزامیست."
              />
              <Input
                defaultValue=""
                required
                name="phoneNumber"
                className={classes.input}
                label="شماره موبایل"
                variant="outlined"
                inputRef={register({
                  required: true,
                  validate: validateRegex,
                })}
                error={!!errors?.phoneNumber}
                helperText="ورود شماره موبایل جهت دریافت پیامک فعال سازی الزامیست."
              />
              <div className={classes.buttons}>
                <LoadingButton
                  size="normal"
                  type="submit"
                  className={classes.nextButton}
                  fullWidth
                  variant="contained"
                  color="success"
                  loading={loading}
                >
                  مرحله بعد
                </LoadingButton>
                <LoadingButton
                  size="normal"
                  onClick={onCancel}
                  className={classes.cancelButton}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  انصراف
                </LoadingButton>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>

      <div className={classes.rightSection}>
        <div className={classes.registerDesc}>
          <img src={SignupLogo} alt="register" className={classes.registerLogo} />
          <Typography variant="h4" gutterBottom>
            جهت عضویت در سامانه پیامکی
          </Typography>
          <Typography variant="h4">لطفا مراحل ثبت نام را تکمیل نمایید</Typography>
        </div>
      </div>
    </AuthTemplate>
  );
}

export default Register;
