import { useState, useRef, Fragment } from 'react';
import { toFarsiNumber } from 'utils';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

// components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Chip from '@material-ui/core/Chip';

const INPUT_HEIGHT = 185;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(SPACING_HALF, 0),
    boxSizing: '',
    '&:hover': {
      borderColor: theme.palette.action.active,
    },
  },
  rootFocued: {
    borderWidth: 2,
    borderColor: theme.palette.action.active,
  },
  contentContainer: {
    paddingTop: theme.spacing(SPACING_HALF),
    height: INPUT_HEIGHT,
    overflowY: 'auto',
  },
  headerWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  titleWrapper: {
    width: '100%',
    padding: theme.spacing(SPACING_HALF, 0),
  },
  titleContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(SPACING_LEAST),
    position: 'absolute',
    transform: 'translateY(-50%)',
  },
  title: {},
  input: {
    width: '100%',
  },
  chip: {
    margin: SPACING_LEAST,
  },
  footer: {
    paddingTop: theme.spacing(SPACING_HALF),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

/**
 * @component AdvancedTextField
 */
function AdvancedTextField({
  headerChildren,
  title,
  renderFooter,
  chips,
  onChipDelete = () => {},
  ...rest
}) {
  const classes = useStyles();

  const [focused, setFocused] = useState(false);

  const inputRef = useRef();

  const rootClasses = clsx(classes.root, { [classes.rootFocued]: focused });

  const onPaperClick = () => {
    !inputRef.current.hasFocus && inputRef.current.focus();
  };

  return (
    <Paper variant="outlined" className={rootClasses}>
      <Container>
        <div className={classes.headerWrapper}>{headerChildren}</div>
      </Container>

      <div className={classes.titleWrapper}>
        <Container>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>{title}</Typography>
          </div>
        </Container>
        <Divider variant="fullWidth" />
      </div>
      <Container className={classes.contentContainer} onClick={onPaperClick}>
        {chips?.map((chip, index) => (
          <Chip
            className={classes.chip}
            label={toFarsiNumber(chip)}
            key={index}
            onDelete={() => onChipDelete(index)}
          />
        ))}
        <InputBase
          inputRef={inputRef}
          // onChange={onInputChange}
          className={classes.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          multiline
          {...rest}
        />
      </Container>

      {renderFooter && (
        <Fragment>
          <Divider variant="fullWidth" />
          <Container>
            <div className={classes.footer}>{renderFooter()}</div>
          </Container>
        </Fragment>
      )}
    </Paper>
  );
}

export default AdvancedTextField;
