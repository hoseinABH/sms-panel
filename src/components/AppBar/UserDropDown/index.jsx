import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// components
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';

// icons
import LoginIcon from '@material-ui/icons/LockOutlined';
import LockIcon from '@material-ui/icons/ExitToAppOutlined';

// constants
import { SPACING_LEAST } from 'constants/spacing';

// api
import { logout } from 'api/auth';

const useStyles = makeStyles((theme) => ({
  userWithAvatar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(SPACING_LEAST),
  },
  owner: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
  userName: {
    fontWeight: 600,
  },
  userBoxText: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  userWrapper: {},
  menuPaper: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
}));

/**
 * @component UserDropDown
 */
function UserDropDown() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.userWrapper}>
      <ButtonBase onClick={handleClick}>
        <Hidden smDown>
          <div className={classes.userWithAvatar}>
            <ListItemText
              classes={{ secondary: classes.userBoxText, primary: classes.userName }}
              primary={'صالح زارعی'}
              secondary={'کاربر'}
            />
          </div>
        </Hidden>
        <div className={classes.owner}>
          <Avatar src="/">M</Avatar>
        </div>
      </ButtonBase>
      <Menu
        classes={{ paper: classes.menuPaper }}
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            history.push('/setting/profile');

            handleClose();
          }}
        >
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="تغییر رمز" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="خروج" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default UserDropDown;
