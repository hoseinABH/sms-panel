import { makeStyles } from '@material-ui/core/styles';

// components
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: theme.palette.action.active,
  },
  menuItem: {
    minWidth: 124,
  },
}));

/**
 * @component TableActionMenu
 */
function TableActionMenu({ actions, row }) {
  const classes = useStyles();

  const renderAction = (action) => {
    if (typeof action.render === 'function') {
      return action.render(action, row);
    } else {
      return action.onClick ? (
        <IconButton size="small" onClick={() => action.onClick(row)}>
          {action.icon}
        </IconButton>
      ) : (
        action.icon
      );
    }
  };

  return (
    <div className={classes.root}>
      {actions.map((action, index) => {
        return action.icon || action.render ? (
          <Tooltip title={action.label} key={index}>
            {renderAction(action, row)}
          </Tooltip>
        ) : null;
      })}
    </div>
  );
}

export default TableActionMenu;
