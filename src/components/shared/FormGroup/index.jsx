import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

// components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '-20px',
    left: '12px',
    padding: '1px 4px',
  },
  container: {
    paddingTop: theme.spacing(SPACING_LEAST),
    paddingBottom: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component FormGroup
 */

function FormGroup({ title, children, className }) {
  const classes = useStyles();

  const rootClasses = clsx(className, classes.root);

  return (
    <Paper variant="outlined" className={rootClasses}>
      <Typography color="textSecondary" className={classes.title}>
        {title}
      </Typography>
      <Container className={classes.container}>{children}</Container>
    </Paper>
  );
}

export default FormGroup;
