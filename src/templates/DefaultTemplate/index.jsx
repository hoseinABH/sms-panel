import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Scrollbar from 'components/shared/Scrollbar';

// components
import Container from '@material-ui/core/Container';
import NavigationDrawer from 'components/NavigationDrawer';
import AppBar from 'components/AppBar';
import CookieNotification from 'components/shared/CookieNotification';

// libs
import withAuth from 'lib/withAuth';

// api
import { verifyAccessToken } from 'api/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 0),
    },
  },
  container: {
    display: 'flex',
    flex: 1,
  },
}));

/**
 * @component DefaultTemplate
 */
function DefaultTemplate({ children }) {
  const classes = useStyles();

  useEffect(() => {
    const checkToken = async () => {
      await verifyAccessToken();
    };

    checkToken();
  }, []);
  return (
    <div className={classes.root}>
      <NavigationDrawer />
      <div className={classes.content}>
        <AppBar />
        <CookieNotification />
        <Scrollbar>
          <div className={classes.contentWrapper}>
            <Container className={classes.container} maxWidth="xl">
              {children}
            </Container>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
}

export default DefaultTemplate;
