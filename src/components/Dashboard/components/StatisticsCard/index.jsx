import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// components
import Button from '@material-ui/core/Button';
import Typography from 'components/shared/Typography';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(SPACING_HALF, SPACING_LEAST),
    color: '#fff',
    background: ({ backgroundColor }) => backgroundColor,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  button: {
    color: ({ backgroundColor }) => backgroundColor,
    background: '#fff',
  },
  icon: {
    width: 64,
    height: 64,
  },
}));

/**
 * @component StatisticsCard
 */
function StatisticsCard({ backgroundColor, title, value, action, icon, className }) {
  const classes = useStyles({ backgroundColor });

  const rootClasses = clsx(classes.root, className);

  const Icon = icon;
  return (
    <div className={rootClasses}>
      <Icon className={classes.icon} />

      <Typography color="inherit">{title}</Typography>
      <Typography color="inherit" variant="body2">
        {value}
      </Typography>

      {action && (
        <Button
          fullWidth
          color="inherit"
          variant="contained"
          className={classes.button}
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

export default StatisticsCard;
