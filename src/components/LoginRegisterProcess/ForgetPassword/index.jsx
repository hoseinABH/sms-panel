import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// template
import AuthTemplate from 'templates/AuthTemplate';

// components
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

// icons
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import UserIcon from '@material-ui/icons/PermIdentity';

// assets
import logo from 'assets/images/logo.png';
import ForgetPassLogo from 'assets/images/lock.png';

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF, SPACING_THIRD } from 'constants/spacing';
import { digitsFaToEn } from 'persian-tools2';
import { MOBILE_REGEX } from 'constants/regex';
import { forgetPasswrod } from 'api/auth';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  leftSection: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 480,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(SPACING),
      maxWidth: 720,
    },
  },
  rightSection: {
    background: theme.palette.background.forgetPass,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  description: {
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
    maxWidth: 512,
    padding: theme.spacing(SPACING, SPACING_DOUBLE),
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  logo: {
    marginBottom: theme.spacing(SPACING),
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

  forgetPasswordLogo: {
    height: 220,
    userSelect: 'none',
  },
  cancelButton: {
    marginLeft: theme.spacing(SPACING_HALF),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: theme.spacing(SPACING_HALF),
    },
  },
  nextButton: {
    marginRight: theme.spacing(SPACING_HALF),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
}));

/**
 * @component ForgetPassword
 */
function ForgetPassword() {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { register, errors, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const handleSubmitHandle = async ({ username, phoneNumber }) => {
    setLoading(true);
    try {
      const { data } = await forgetPasswrod(username, phoneNumber);

      if (data?.success) {
        setLoading(false);

        history.push(`/verify-forget?phone=${phoneNumber}`);
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
          <div className={classes.logo}>
            <img alt="logo" width="125px" height="125px" src={logo} />
          </div>
          <div className={classes.formWrapper}>
            <form
              noValidate
              name="forgetPassForm"
              onSubmit={handleSubmit(handleSubmitHandle)}
              className={classes.form}
            >
              <Input
                defaultValue=""
                required
                type="text"
                name="username"
                className={classes.input}
                variant="outlined"
                inputRef={register}
                error={!!errors?.username}
                label="نام کاربری"
                helperText="نام کاربری حسابی که رمز عبور آن را فراموش کرده اید وارد نمایید"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <UserIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              <Input
                defaultValue=""
                required
                type="text"
                name="phoneNumber"
                className={classes.input}
                label="شماره موبایل"
                variant="outlined"
                inputRef={register({
                  required: true,
                  validate: validateRegex,
                })}
                error={!!errors?.phoneNumber}
                helperText="شماره موبایلی که برای حساب کاربری ثبت کرده بودید"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <div className={classes.buttons}>
                <LoadingButton
                  success
                  type="submit"
                  className={classes.nextButton}
                  variant="contained"
                  color="success"
                  loading={loading}
                >
                  بازیابی رمز
                </LoadingButton>
                <Button
                  onClick={onCancel}
                  className={classes.cancelButton}
                  variant="contained"
                  color="primary"
                >
                  انصراف
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>

      <div className={classes.rightSection}>
        <div className={classes.description}>
          <img
            src={ForgetPassLogo}
            alt="forgetPassword"
            className={classes.forgetPasswordLogo}
          />
          <Typography variant="h4" gutterBottom>
            جهت بازیابی رمز عبور
          </Typography>
          <Typography variant="h4">لطفا موراد خواسته شده را تکمیل کنید</Typography>
        </div>
      </div>
    </AuthTemplate>
  );
}

export default ForgetPassword;
