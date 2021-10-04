import { fade, makeStyles } from '@material-ui/core/styles';

// components
import Typography from '../Typography';

// icons
import InfoIcon from '@material-ui/icons/InfoOutlined';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => {
  return {
    root: ({ variant, iconAlign }) => {
      return {
        background: variant === 'contained' && fade(theme.palette.info.main, 0.15),
        border: `1px solid ${theme.palette.info.main}`,
        padding: theme.spacing(SPACING_LEAST, SPACING_HALF),
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        alignItems: iconAlign,
      };
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      backgroundColor: fade(theme.palette.info.main, 0.8),
      marginRight: theme.spacing(SPACING_HALF),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(SPACING_LEAST),
    },
    icon: ({ iconVariant }) => {
      return {
        color:
          iconVariant === 'contained' ? theme.palette.common.white : theme.palette.info.main,
        width: 24,
        height: 24,
        marginRight: iconVariant !== 'contained' && theme.spacing(SPACING_LEAST),
      };
    },
    content: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    },
  };
});

/**
 * @component InfoCard
 */
function InfoCard({
  icon = InfoIcon,
  iconVariant = 'contained',
  variant = 'contained',
  iconAlign = 'start',
  primaryText,
  children,
}) {
  const classes = useStyles({ variant, iconAlign, iconVariant });

  const Icon = icon;

  return (
    <div className={classes.root}>
      <div className={iconVariant === 'contained' && classes.iconWrapper}>
        <Icon className={classes.icon} />
      </div>
      <div className={classes.content}>
        <Typography variant="body2" color="info" gutterBottom>
          {primaryText}
        </Typography>
        {children}
      </div>
    </div>
  );
}

export default InfoCard;
