import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// icons
import Visibility from '@material-ui/icons/Visibility';
import KeyIcon from '@material-ui/icons/VpnKey';
import AddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/PersonOutline';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// assets
import logo from 'assets/images/logo.png';
import office from 'assets/images/office.jpg';

// constants
import {
  SPACING,
  SPACING_DOUBLE,
  SPACING_HALF,
  SPACING_LEAST,
  SPACING_THIRD,
} from 'constants/spacing';

// api
import { login } from 'api/auth';

// lib
import { setAuthCookie, getAuthCookie } from 'lib/Storage';

// notistack
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  leftSection: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 720,
  },
  rightSection: {
    background: theme.palette.common.white,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
  rememberme: {
    marginBottom: theme.spacing(SPACING_HALF),
  },
  links: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    margin: theme.spacing(SPACING_HALF, 0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  icon: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
  poster: {
    height: 300,
    userSelect: 'none',
  },
}));

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

/**
 * @component Login
 */
function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const remember = localStorage.getItem('rememberMe') === 'true';
    setUsername(remember ? localStorage.getItem('username') : '');
    setPassword(remember ? localStorage.getItem('password') : '');
    setRememberMe(remember);
  }, []);

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSubmitLogin = async ({ username, password }) => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await login(username, digitsFaToEn(password));

      if (data?.accessToken) {
        setAuthCookie({ ...data });
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('username', rememberMe ? username : null);
        localStorage.setItem('password', rememberMe ? password : null);
        setLoading(false);
        history.push('/');
      }
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };

  if (!!getAuthCookie()?.accessToken) history.push('/');

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
              name="loginForm"
              onSubmit={handleSubmit(handleSubmitLogin)}
              className={classes.form}
            >
              <Input
                value={username}
                onChange={(event, value) => setUsername(value)}
                required
                name="username"
                className={classes.input}
                variant="outlined"
                inputRef={register}
                error={!!errors?.username}
                label="نام کاربری"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              <Input
                value={password}
                onChange={(event, value) => setPassword(value)}
                required
                type="password"
                name="password"
                className={classes.input}
                label="کلمه عبور"
                variant="outlined"
                inputRef={register}
                error={!!errors?.password}
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

              <div className={classes.rememberme}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      color="primary"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      name="rememberme"
                    />
                  }
                  label="مرا به خاطر بسپار"
                />
              </div>

              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                fullwidth
                loading={loading}
              >
                ورود
              </LoadingButton>
            </form>
          </div>
          <div className={classes.links}>
            <Typography
              color="primary"
              component={Link}
              to="/register"
              className={classes.link}
            >
              <AddIcon className={classes.icon} />
              ثبت نام پنل
            </Typography>

            <Typography
              color="primary"
              variant="body1"
              component={Link}
              to="/forget-password"
              className={classes.link}
            >
              <KeyIcon className={classes.icon} />
              بازیابی رمز عبور
            </Typography>
          </div>
        </CardContent>
      </Card>

      <div className={classes.rightSection}>
        <img alt="office" className={classes.poster} src={office} />
      </div>
    </AuthTemplate>
  );
}

export default Login;
