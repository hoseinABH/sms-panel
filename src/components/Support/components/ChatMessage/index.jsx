import { useMemo } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

// components
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from 'components/shared/Typography';

// constants
import { SPACING_THIRD, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  avatar: ({ randomColor, myMessage }) => ({
    background: `#${randomColor}`,
    width: 58,
    height: 58,
    marginRight: myMessage && theme.spacing(SPACING_LEAST),
    marginLeft: !myMessage && theme.spacing(SPACING_LEAST),
  }),
  paper: {
    background: fade(theme.palette.info.main, 0.05),
    padding: theme.spacing(SPACING_LEAST, SPACING_THIRD, SPACING_HALF),
  },
  messageHeader: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

/**
 * @component ChatMessage
 */
function ChatMessage({ topic, avatar, children, myMessage = false, time }) {
  const randomColor = useMemo(() => Math.floor(Math.random() * 16777215).toString(16), []);

  const classes = useStyles({ randomColor, myMessage });
  return (
    <div className={classes.root}>
      {myMessage && <Avatar className={classes.avatar} alt="user avatar" src={avatar} />}
      <Paper elevation={0} className={classes.paper}>
        <div className={!myMessage && classes.messageHeader}>
          {!myMessage && (
            <Typography variant="body1" color="info">
              {topic}
            </Typography>
          )}
          <Typography align="right" variant="body2" color="textSecondary">
            {time}
          </Typography>
        </div>
        {children}
      </Paper>
      {!myMessage && <Avatar className={classes.avatar} alt="user avatar" src={avatar} />}
    </div>
  );
}

export default ChatMessage;
