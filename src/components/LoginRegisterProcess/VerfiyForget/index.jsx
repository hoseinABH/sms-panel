import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// template
import AuthTemplate from 'templates/AuthTemplate';

// components
import CodeInput from 'components/shared/CodeInput';
import LoadingButton from 'components/shared/LoadingButton';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// assets
import ConfirmCodeLogo from 'assets/images/confirmCode.png';

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF } from 'constants/spacing';

// api
import { verifyForgetPassword } from 'api/auth';

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
    background: theme.palette.background.confirmCode,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(SPACING * 1.5, SPACING_DOUBLE * 1.5),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  ConfirmCodeDesc: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.common.white,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    alignItems: 'center',
    marginTop: theme.spacing(SPACING_DOUBLE),
    padding: theme.spacing(SPACING, SPACING_DOUBLE),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(SPACING_HALF),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    marginTop: theme.spacing(SPACING),
  },
  input: {
    marginBottom: theme.spacing(SPACING),
  },
  buttons: {
    display: 'flex',
    width: '100%',
    margin: theme.spacing(SPACING_HALF, 0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  ConfirmCodeLogo: {
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
  gutterBottom: {
    marginBottom: theme.spacing(SPACING_HALF),
  },
  resendcode: {
    marginBottom: theme.spacing(SPACING),
  },
  codeInput: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(SPACING_HALF),
    marginBottom: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component ConfirmCode
 */
function VerifyForget() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const phoneNumber = location.search ? location.search.split('=')[1] : null;

  const handleNext = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await verifyForgetPassword(+verificationCode, phoneNumber);

      if (data?.success) {
        setLoading(false);
        history.push(`/reset-password?phone=${phoneNumber}`);
      }
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };
  const onCancel = () => {
    history.goBack();
  };

  const resendHandler = () => {};
  return (
    <AuthTemplate>
      <Card className={classes.leftSection} square elevation={0}>
        <CardContent className={classes.cardContent}>
          <Typography>لطفا کد دریافتی را در کادر زیر وارد نمایید</Typography>
          <form
            noValidate
            name="ConfirmCodeForm"
            onSubmit={handleNext}
            className={classes.form}
          >
            <div className={classes.input}>
              <Paper variant="outlined" className={classes.codeInput}>
                <CodeInput
                  fields="6"
                  value={verificationCode}
                  onChange={setVerificationCode}
                />
              </Paper>
              <Typography variant="body2" color="textSecondary">
                کد فعال سازی حاوی عدد می باشد که به شماره موبایل ثبتی شما ارسال شده است
              </Typography>
            </div>
            <div className={classes.resendcode}>
              <Typography
                component={Button}
                onClick={resendHandler}
                variant="body2"
                color="textSecondary"
              >
                ارسال مجدد کد فعال سازی؟
              </Typography>
            </div>

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
              <Button
                size="normal"
                onClick={onCancel}
                className={classes.cancelButton}
                fullWidth
                variant="contained"
                color="primary"
              >
                انصراف
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className={classes.rightSection}>
        <div className={classes.ConfirmCodeDesc}>
          <img src={ConfirmCodeLogo} alt="ConfirmCode" className={classes.ConfirmCodeLogo} />
          <Typography variant="h4" color="inherit" gutterBottom>
            جهت تایید شماره موبایل کد دریافتی را وارد نمایید
          </Typography>
        </div>
      </div>
    </AuthTemplate>
  );
}

export default VerifyForget;
