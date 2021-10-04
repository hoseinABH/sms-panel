import { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, darken } from '@material-ui/core/styles';

// constants
import { SPACING_HALF } from 'constants/spacing';

// components
import Paper from '@material-ui/core/Paper';
import Typography from 'components/shared/Typography';
import Collapse from '@material-ui/core/Collapse';
import CardActionArea from '@material-ui/core/CardActionArea';

// icons
import DownArrowIcon from '@material-ui/icons/KeyboardArrowDown';
import HelpIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  summary: {
    display: 'flex',
    padding: theme.spacing(SPACING_HALF),
    alignItems: 'center',
  },
  title: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(SPACING_HALF),
    color: darken(theme.palette.warning.main, 0.3),
  },
  paper: {
    cursor: 'pointer',
  },
  arrowButton: {
    transition: theme.transitions.create(['transform']),
  },
  arrowDown: {
    transform: 'rotate(180deg)',
  },
  child: {
    padding: theme.spacing(SPACING_HALF),
  },
}));
export default function Accordion({ title, children }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const upArrowClasses = clsx(classes.arrowButton, open && classes.arrowDown);

  const onExpandClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className={classes.root}>
      <CardActionArea disableRipple disableTouchRipple onClick={onExpandClick}>
        <Paper className={classes.paper} variant="outlined">
          <div className={classes.summary}>
            <div className={classes.title}>
              <HelpIcon className={classes.icon} />
              <Typography color="warning" variant="body1" component="span">
                {title}
              </Typography>
            </div>
            <DownArrowIcon fontSize="small" color="action" className={upArrowClasses} />
          </div>
        </Paper>
      </CardActionArea>

      <Collapse in={open} unmountOnExit>
        <Paper elevation={1}>
          <div className={classes.child}>{children}</div>
        </Paper>
      </Collapse>
    </div>
  );
}
