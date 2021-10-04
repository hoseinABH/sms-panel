import { makeStyles } from '@material-ui/core/styles';

// components
import Typography from '@material-ui/core/Typography';
import LoadingButton from 'components/shared/LoadingButton';

// icons
import AccessDeniedIcon from 'components/shared/icons/AccessDenied';

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: theme.spacing(SPACING),
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    width: 128,
    height: 128,
    marginBottom: theme.spacing(SPACING_HALF),
  },
  textContainer: {
    marginBottom: theme.spacing(SPACING_DOUBLE),
  },
  buttonWrapper: {},
  prevButton: {
    marginRight: theme.spacing(SPACING_HALF),
  },
  upgradeButton: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component AccessDenied
 */
function AccessDenied() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <AccessDeniedIcon className={classes.icon} color="primary" />
        <div className={classes.textContainer}>
          <Typography variant="h2" gutterBottom align="center">
            عدم دسترسی!
          </Typography>
          <Typography variant="h5" align="center">
            شما مجوز دسترسی به این بخش را ندارید
          </Typography>
        </div>

        <div className={classes.buttonWrapper}>
          <LoadingButton className={classes.prevButton} color="primary" variant="contained">
            صفحه قبلی
          </LoadingButton>
          <LoadingButton className={classes.upgradeButton} color="success" variant="contained">
            ارتقاء پکیج
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}

export default AccessDenied;
