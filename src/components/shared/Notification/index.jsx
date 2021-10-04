import { useMemo } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';

// components
import ListItemText from '@material-ui/core/ListItemText';
import Typography from 'components/shared/Typography';

// icons
import SuccessIcon from 'components/shared/icons/TaskAlt';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/ReportProblemOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => {
  const getBackgroundFromVariant = (type) => {
    switch (type) {
      case 'error':
        return theme.palette.error.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'success':
        return theme.palette.success.main;
      case 'info':
        return theme.palette.info.main;
      default:
        return theme.palette.info.main;
    }
  };
  return {
    root: {
      background: ({ type, variant, normalText }) =>
        variant === 'contained' ? fade(getBackgroundFromVariant(type), 0.15) : 'transparent',
      border: ({ variant, type }) =>
        variant === 'outlined' ? `1px solid ${getBackgroundFromVariant(type)}` : 'none',
      padding: theme.spacing(SPACING_LEAST, SPACING_HALF),
      display: 'flex',
      borderRadius: theme.shape.borderRadius,
      alignItems: 'center',
    },
    icon: {
      color: ({ type }) => getBackgroundFromVariant(type),
      marginRight: theme.spacing(SPACING_HALF),
      width: 32,
      height: 32,
    },
    ListItemText: {
      flex: 1,
    },
    primaryText: {
      color: ({ type, normalText }) =>
        type === 'info' || normalText
          ? theme.palette.text.primary
          : getBackgroundFromVariant(type),
      fontWeight: ({ normalText }) => !normalText && 'bold',
    },
    secondaryText: {
      marginRight: theme.spacing(SPACING_LEAST),
      color: 'inherit',
    },
    dateContainer: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        fontWeight: 'bold',
      },
    },
  };
});

/**
 * @component Notification
 */
function Notification({
  type,
  normalText = false,
  primaryText,
  secondaryText,
  variant = 'contained',
  date = false,
}) {
  const classes = useStyles({ type, variant, normalText });

  const Icon = useMemo(() => {
    switch (type) {
      case 'error':
        return ErrorIcon;
      case 'warning':
        return WarningIcon;
      case 'success':
        return SuccessIcon;
      case 'info':
        return InfoIcon;
      default:
        return InfoIcon;
    }
  }, [type]);

  return (
    <div className={classes.root}>
      <Icon className={classes.icon} />

      <ListItemText
        className={classes.listItemText}
        classes={{ primary: classes.primaryText, secondary: classes.secondaryText }}
        primary={primaryText}
        secondary={secondaryText}
      />

      {date && (
        <div className={classes.dateContainer}>
          <Typography
            locale="fa"
            type="caption"
            align="center"
            gutterBottom
            color="textSecondary"
          >
            {new Date().toLocaleDateString()}
          </Typography>
          <Typography type="caption" align="center" color="textSecondary">
            08:00:00
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Notification;
