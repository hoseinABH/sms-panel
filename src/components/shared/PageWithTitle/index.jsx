import { makeStyles } from '@material-ui/core/styles';

// components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import AnimateGroup from 'components/shared/AnimateGroup';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';
import { DRAWER_HEADER_HEIGHT, PAGE_HEADER_HEIGHT } from 'constants/mixins';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  headerBackground: {
    top: 0,
    left: 0,
    right: 0,
    height: DRAWER_HEADER_HEIGHT,
    position: 'absolute',
    background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    pointerEvents: 'none',
    backgroundSize: 'cover',
  },
  titleContent: {
    position: 'relative',
    zIndex: 1,
    color: theme.palette.primary.contrastText,
    height: '82px',
    alignItems: 'center',
    display: 'flex',
    maxHeight: '82px',
    minHeight: '82px',
  },
  icon: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
  paperContent: {
    zIndex: 1,
    position: 'relative',
    flex: 1,
  },
  container: {
    paddingTop: theme.spacing(SPACING_HALF),
    paddingBottom: theme.spacing(SPACING_HALF),
  },
  titleContainer: {
    paddingTop: theme.spacing(SPACING_HALF),
    paddingBottom: theme.spacing(SPACING_HALF),
    height: PAGE_HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
  },
}));

/**
 * @component PageWithTitle
 */
function PageWithTitle({ title, icon, contentTitle, children }) {
  const classes = useStyles();

  const Icon = icon;
  return (
    <div className={classes.root}>
      <div className={classes.headerBackground}></div>
      <div className={classes.titleContent}>
        {icon && <Icon color="inherit" className={classes.icon} />}
        <Typography color="inherit">{title}</Typography>
      </div>

      <Paper variant="outlined" className={classes.paperContent}>
        <Container className={classes.titleContainer}>
          <Typography>{contentTitle}</Typography>
        </Container>
        <Divider variant="fullWidth" />
        <Container maxWidth="xl" className={classes.container}>
          <AnimateGroup
            enter={{
              animation: 'transition.slideUpBigIn',
            }}
            duration={300}
          >
            {children}
          </AnimateGroup>
        </Container>
      </Paper>
    </div>
  );
}

export default PageWithTitle;
