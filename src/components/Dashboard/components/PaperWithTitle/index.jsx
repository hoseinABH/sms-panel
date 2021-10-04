import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

// constants
import { SPACING_HALF } from 'constants/spacing';

// components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(SPACING_HALF),
    },
  },
  paperBody: {
    display: 'flex',
    width: '100%',
    marginBottom: theme.spacing(SPACING_HALF),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
}));

/**
 * @component PaperWithTitle
 */
function PaperWithTitle({
  title,
  children,
  headerChildren,
  className,
  align = 'inherit',
  ...rest
}) {
  const classes = useStyles();

  const rootClasses = clsx(classes.root, className);
  return (
    <Paper variant="outlined" className={rootClasses} {...rest}>
      <div className={classes.container}>
        <div className={classes.paperBody}>
          <Typography
            variant="body1"
            component="h2"
            className={classes.title}
            gutterBottom
            align={align}
          >
            {title}
          </Typography>
          {headerChildren}
        </div>
        {children}
      </div>
    </Paper>
  );
}

export default PaperWithTitle;
