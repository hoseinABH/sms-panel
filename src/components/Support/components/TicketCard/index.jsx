import { makeStyles } from '@material-ui/core/styles';

// components
import Paper from '@material-ui/core/Paper';
import Typography from 'components/shared/Typography';

// constants
import { SPACING_HALF } from 'constants/spacing';

// utils
import { textToMaterialColor } from 'utils';

const useStyles = makeStyles((theme) => ({
  card: ({ color }) => {
    const customColor = textToMaterialColor(theme.palette, color);

    return {
      backgroundColor: customColor,
      padding: theme.spacing(SPACING_HALF),
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: theme.palette.common.white,
    };
  },
}));

/**
 * @component TicketCard
 */
function TicketCard({ icon, title, value, color }) {
  const classes = useStyles({ color });

  const Icon = icon;
  return (
    <Paper elevation={0} className={classes.card}>
      <Icon color="inherit" fontSize="large" />
      <div>
        <Typography variant="h4" color="inherit" align="center" gutterBottom>
          {value}
        </Typography>
        <Typography variant="h5" color="inherit" align="center">
          {title}
        </Typography>
      </div>
    </Paper>
  );
}

export default TicketCard;
