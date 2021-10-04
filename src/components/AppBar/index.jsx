import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// components
import UserDropDown from './UserDropDown';
import FullScreenToggle from './FullScreenToggle';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import Fade from '@material-ui/core/Fade';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';

// providers
import { useNavigationDrawerSetState } from 'providers/NavigationDrawerProvider';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import BellIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import QAIcon from '@material-ui/icons/QuestionAnswerOutlined';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import CloseIcon from '@material-ui/icons/Close';
import MoneyIcon from '@material-ui/icons/AttachMoneyOutlined';
import ContactIcon from '@material-ui/icons/PermContactCalendarOutlined';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import PersonAdd from '@material-ui/icons/PersonAddOutlined';
import PhoneIcon from '@material-ui/icons/PhoneOutlined';

// constants
import { APPBAR_HEIGHT } from 'constants/mixins';

const useStyles = makeStyles((theme) => ({
  root: {
    height: APPBAR_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
  },
  search: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    background: theme.palette.background.paper,
    zIndex: theme.zIndex.appBar,
  },
  searchInput: {
    flex: 1,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
}));

/**
 * @component AppBar
 */
function AppBar() {
  const classes = useStyles();

  const history = useHistory();

  const [toggleSearch, setToggleSearch] = useState(false);

  const setNavigationDrawer = useNavigationDrawerSetState();

  const searchRef = useRef();

  const onNavigationMenuClick = () => {
    setNavigationDrawer((prevState) => ({ ...prevState, open: true }));
  };

  const onSearchButtonClick = () => {
    setToggleSearch(true);
  };

  const onSearchCloseClick = () => {
    setToggleSearch(false);
  };

  const onSearchEnter = () => {
    searchRef.current.focus();
  };

  return (
    <MuiAppBar position="relative" color="inherit" elevation={2} className={classes.root}>
      <Toolbar>
        <Fade in={toggleSearch} onEnter={onSearchEnter}>
          <div className={classes.search}>
            <Container className={classes.searchContainer}>
              <InputBase
                placeholder="جست و جو..."
                inputRef={searchRef}
                autoFocus
                className={classes.searchInput}
              />
              <IconButton onClick={onSearchCloseClick}>
                <CloseIcon />
              </IconButton>
            </Container>
          </div>
        </Fade>

        <div className={classes.wrapper}>
          <Hidden mdUp implementation="js">
            <IconButton color="inherit" onClick={onNavigationMenuClick}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>

        <IconButton onClick={onSearchButtonClick}>
          <SearchIcon />
        </IconButton>

        <div>
          <FullScreenToggle />
        </div>

        <IconButton onClick={() => history.push('/lines')}>
          <Tooltip title="مدیریت خطوط">
            <PhoneIcon />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => history.push('/message/new')}>
          <Tooltip title="ارسال پیامک">
            <ChatIcon />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => history.push('/contacts')}>
          <Tooltip title="مخاطبین">
            <ContactIcon />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => history.push('/accounting/transactions')}>
          <Tooltip title="مدیریت مالی">
            <MoneyIcon />
          </Tooltip>
        </IconButton>

        <Badge
          color="secondary"
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          overlap="circle"
          badgeContent={5}
        >
          <IconButton onClick={() => history.push('/user-manager/users')}>
            <Tooltip title="کاربران ثبت نامی جدید">
              <PersonAdd />
            </Tooltip>
          </IconButton>
        </Badge>

        <Badge
          color="secondary"
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          overlap="circle"
          badgeContent={2}
        >
          <IconButton>
            <Tooltip title="اعلان ها">
              <BellIcon />
            </Tooltip>
          </IconButton>
        </Badge>

        <Badge
          color="secondary"
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          overlap="circle"
          badgeContent={1}
        >
          <IconButton onClick={() => history.push('/support/tickets')}>
            <Tooltip title="تیکت ها">
              <QAIcon />
            </Tooltip>
          </IconButton>
        </Badge>

        <Badge
          color="secondary"
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          overlap="circle"
          badgeContent={5}
        >
          <IconButton onClick={() => history.push('/reports/incoming-messages')}>
            <Tooltip title="پیام های دریافتی">
              <MailIcon />
            </Tooltip>
          </IconButton>
        </Badge>

        <div>
          <UserDropDown />
        </div>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
