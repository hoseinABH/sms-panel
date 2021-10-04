import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';

// components
import MuiAppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Animate from 'components/shared/Animate';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// constants
import { SPACING_THIRD } from 'constants/spacing';
import { APPBAR_HEIGHT } from 'constants/mixins';

// icons
import MenuIcon from '@material-ui/icons/Menu';

export const DRAWER_WIDTH = 250;

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: APPBAR_HEIGHT - 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'start',
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
  },

  drawerPaper: {
    border: 'none',
    width: DRAWER_WIDTH,
    transition: theme.transitions.create(['all']),
    // background: theme.palette.sideBar.background,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    background: theme.palette.background.auth,
    color: theme.palette.primary.contrastText,
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authCard: {
    margin: 'auto',
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    maxWidth: '100%',
    height: '100%',
    minHeight: '50vh',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down('md')]: {
      maxWidth: 640,
      height: '80vh',
    },
  },
  link: {
    textDecoration: 'none',
    margin: theme.spacing('auto', SPACING_THIRD),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing('auto'),
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const topbarLinks = [
  {
    title: 'تعرفه پنل',
    path: '/panel-tariff',
  },
  {
    title: 'تعرفه شارژ پیامک',
    path: '/sms-tariff',
  },
  {
    title: 'تعرفه خطوط',
    path: '/lines-tariff',
  },
  {
    title: 'نمایندگی',
    path: '/agency',
  },
  {
    title: 'تماس با ما',
    path: '/contact-us',
  },
];

/**
 * @component AuthTemplate
 */
function AuthTemplate({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <div className={classes.root}>
      <MuiAppBar position="relative" color="inherit" elevation={2} className={classes.appbar}>
        <Toolbar>
          <div className={classes.wrapper}>
            <Hidden mdUp implementation="js">
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
          <Hidden smDown implementation="js">
            {topbarLinks.map((item) => (
              <Typography
                key={item.title}
                color="primary"
                className={classes.link}
                variant="h6"
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Typography>
            ))}
          </Hidden>
        </Toolbar>
      </MuiAppBar>
      <div className={classes.content}>
        <Animate animation="transition.expandIn" delay={300}>
          <Container maxWidth="lg">
            <div className={classes.authCard}>{children}</div>
          </Container>
        </Animate>
      </div>

      <MuiAppBar
        component="footer"
        position="relative"
        color="inherit"
        elevation={2}
        className={classes.footer}
      >
        <Toolbar>
          <Typography color="primary" variant="h6">
            تمام حقوق این سامانه متعلق به سامانه برتر می باشد.
          </Typography>
        </Toolbar>
      </MuiAppBar>

      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {topbarLinks.map((item) => (
            <ListItem button onClick={() => history.push(item.path)} key={item.title}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default AuthTemplate;
