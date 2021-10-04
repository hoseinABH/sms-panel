import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { digitsFaToEn } from 'persian-tools2';

// template
import AuthTemplate from 'templates/AuthTemplate';

// components
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

// icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// assets
import logo from 'assets/images/account_info.png';

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF, SPACING_THIRD } from 'constants/spacing';

// lib
import { getAuthCookie, setAuthCookie } from 'lib/Storage';

// api
import { resetPassword } from 'api/auth';

const useStyles = makeStyles((theme) => ({
  leftSection: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 480,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(SPACING, 0),
      maxWidth: 720,
    },
  },
  rightSection: {
    background: theme.palette.background.accountInfo,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(SPACING * 1.5, SPACING_DOUBLE * 1.5),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  accountInfoDesc: {
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
    marginTop: theme.spacing(SPACING),
  },
  input: {
    marginBottom: theme.spacing(SPACING_THIRD),
  },

  poster: {
    height: 300,
    userSelect: 'none',
  },
  buttons: {
    display: 'flex',
    width: '100%',
    margin: theme.spacing(SPACING_HALF, 0),
  },

  registerLogo: {
    height: 220,
    userSelect: 'none',
  },
  cancelButton: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  nextButton: {
    marginRight: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component ResetPassword
 */
function ResetPassword() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState(null);
  const [rePass, setRePass] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { register, errors, handleSubmit } = useForm();

  const phoneNumber = location.search ? location.search.split('=')[1] : null;

  const handleConfirmInfo = async ({ password }) => {
    if (pass === rePass && phoneNumber.length > 0) {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await resetPassword(phoneNumber, digitsFaToEn(password));

        if (data?.accessToken) {
          setAuthCookie({ ...data });
          setLoading(false);
          history.push('/');
        }
      } catch (err) {
        setLoading(false);
        enqueueSnackbar(err.message, { variant: 'error' });
      }
    } else {
      enqueueSnackbar('کلمه عبور باهم مطابقت ندارند', { variant: 'warning' });
    }
  };

  const onCancel = () => {
    history.goBack();
  };

  if (!!getAuthCookie()?.accessToken) history.push('/');

  return (
    <AuthTemplate>
      <Card className={classes.leftSection} square elevation={0}>
        <CardContent className={classes.cardContent}>
          <Typography>انتخاب رمز عبور جدید</Typography>
          <form
            noValidate
            name="accountInfoForm"
            onSubmit={handleSubmit(handleConfirmInfo)}
            className={classes.form}
          >
            <Input
              type="password"
              name="password"
              className={classes.input}
              inputRef={register({ required: true })}
              label="کلمه عبور"
              value={pass}
              onChange={(value) => setPass(value)}
              variant="outlined"
              error={!!errors?.password}
              helperText="رمز عبور میتواند شامل تمام کاراکتر ها باشد"
              InputProps={{
                type: showPassword ? 'text' : 'password',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} size="small">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Input
              type="password"
              name="repeatPassword"
              error={!!errors?.repeatPassword}
              className={classes.input}
              value={rePass}
              onChange={(value) => setRePass(value)}
              inputRef={register({ required: true })}
              label="تکرار کلمه عبور"
              variant="outlined"
              InputProps={{
                type: showRePassword ? 'text' : 'password',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowRePassword(!showRePassword)}
                      size="small"
                    >
                      {showRePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
                ثبت اطلاعات
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
        </CardContent>
      </Card>
      <div className={classes.rightSection}>
        <div className={classes.accountInfoDesc}>
          <img src={logo} alt="register" className={classes.registerLogo} />
          <Typography variant="h4" gutterBottom>
            لطفا یک رمز عبور جدید
          </Typography>
          <Typography variant="h4">برای حساب کاربری خود وارد نمایید</Typography>
        </div>
      </div>
    </AuthTemplate>
  );
}

export default ResetPassword;
