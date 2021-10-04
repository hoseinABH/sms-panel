import { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

// react-router-dom
import { NavLink } from 'react-router-dom';

// constants
// import { SPACING_HALF } from 'constants/spacing';

// components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
  },
  arrowButton: {
    transition: theme.transitions.create(['transform', 'opacity']),
  },
  arrowDown: {
    transform: 'rotate(180deg)',
  },
  listItem: {
    paddingTop: theme.spacing(SPACING_LEAST / 2),
    paddingBottom: theme.spacing(SPACING_LEAST / 2),
    borderTopRightRadius: ' 50px',
    borderBottomRightRadius: '50px',
    width: 'calc(100% - 16px)',
    transition: theme.transitions.create(['background', 'color', 'opacity']),
    '&.active': {
      background: theme.palette.secondary.main,
    },
    '&.active $listItemText': {
      color: theme.palette.secondary.contrastText,
    },
    '&.active $listItemIcon': {
      //color: theme.palette.secondary.contrastText,
    },
  },
  listItemText: {
    // color: theme.palette.sideBar.color,
  },
  listItemIcon: {
    minWidth: 'auto',
    transition: theme.transitions.create(['padding']),
    marginRight: theme.spacing(2),
    '& > *': {
      width: 22,
      height: 22,
    },
    // color: fade(theme.palette.sideBar.color, 0.5),
  },
  navigationList: {
    marginRight: theme.spacing(2),
  },
}));

/**
 * @component NavigationItem
 */
function NavigationItemCore({
  text,
  items,
  classes,
  disabled,
  to = '#',
  icon,
  open,
  onClick = () => {},
  defaultOpen,
}) {
  const innerClasses = useStyles();

  const [_open, setOpen] = useState(defaultOpen);

  const onItemClick = () => {
    typeof open === 'undefined' && setOpen((prevState) => !prevState);
    onClick();
  };

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const upArrowClasses = clsx(
    innerClasses.arrowButton,
    _open && innerClasses.arrowDown,
    classes?.listItemArrow
  );
  const listItemIconClasses = clsx(innerClasses.listItemIcon, classes?.listItemIcon);
  const listItemTextClasses = clsx(innerClasses.listItemText, classes?.listItemText);
  const listItemClasses = clsx(innerClasses.listItem, classes?.listItem);
  const listItemChildrenClasses = clsx(
    innerClasses.navigationList,
    classes?.listItemChildrenClasses
  );

  const renderItemContent = (
    <Fragment>
      {icon && <ListItemIcon className={listItemIconClasses}>{icon}</ListItemIcon>}
      <ListItemText
        primaryTypographyProps={{ noWrap: true }}
        color="inherit"
        className={listItemTextClasses}
        primary={text}
      />
    </Fragment>
  );

  return (
    <Fragment>
      {items ? (
        <ListItem className={listItemClasses} disabled={disabled} button onClick={onItemClick}>
          {renderItemContent}
          <div className={innerClasses.arrow}>
            <ExpandMoreIcon className={upArrowClasses} fontSize="small" />
          </div>
        </ListItem>
      ) : (
        <ListItem
          disabled={disabled}
          className={listItemClasses}
          component={NavLink}
          to={to}
          button
          onClick={onItemClick}
          isActive={(match, location) => {
            if (to === location.pathname || (to === '/dashboard' && location.pathname === '/'))
              return true;
          }}
        >
          {renderItemContent}
        </ListItem>
      )}

      {items && (
        <Collapse in={_open} unmountOnExit>
          <div className={listItemChildrenClasses}>
            <List>
              {items.map((item, key) => (
                <NavigationItemCore key={key} {...item} />
              ))}
            </List>
          </div>
        </Collapse>
      )}
    </Fragment>
  );
}

export default NavigationItemCore;
