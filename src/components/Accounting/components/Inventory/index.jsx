import { makeStyles } from '@material-ui/core/styles';

// components
import Paper from '@material-ui/core/Paper';
import Typography from 'components/shared/Typography';
import Divider from '@material-ui/core/Divider';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  walletInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  inventory: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(SPACING_HALF),
  },
  icon: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
}));

/**
 * @component Inventory
 */
function Inventory({ icon, currentCredit, afterCredit, currentTitle, afterTitle }) {
  const classes = useStyles();
  const Icon = icon;

  return (
    <Paper variant="outlined" className={classes.walletInfo}>
      <div className={classes.inventory}>
        {icon && <Icon fontSize="large" color="action" className={classes.icon} />}
        <div>
          <Typography useComma withRials gutterBottom align="center">
            {currentCredit}
          </Typography>
          <Typography variant="body2">{currentTitle}</Typography>
        </div>
      </div>

      <Divider orientation="vertical" flexItem variant="fullWidth" />

      <div className={classes.inventory}>
        {icon && <Icon fontSize="large" color="action" className={classes.icon} />}
        <div>
          <Typography
            gutterBottom
            withRials
            useComma
            align="center"
            color={currentCredit > afterCredit ? `error` : `success`}
          >
            {afterCredit}
          </Typography>
          <Typography variant="body2">{afterTitle}</Typography>
        </div>
      </div>
    </Paper>
  );
}

export default Inventory;
