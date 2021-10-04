import { makeStyles } from '@material-ui/core/styles';

// components
import MuiDialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import LoadingButton from '../LoadingButton';
import Scrollbar from 'components/shared/Scrollbar';
// constatns
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  action: {
    marginRight: theme.spacing(SPACING_HALF),
  },
  secondaryAction: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  content: {
    padding: theme.spacing(SPACING_HALF, SPACING_LEAST - 0.8),
    flex: 1,
  },
  dialogAction: {
    flexDirection: 'row-reverse',
    padding: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component Dialog
 */
function Dialog({
  open,
  successButtonText = 'ثبت',
  cancelButtonText = 'انصراف',
  disableSuccessButton,
  disableCancelButton,
  onClose = () => {},
  title,
  children,
  renderAction,
}) {
  const classes = useStyles();

  const [_open, setOpen] = useState(false);

  const onDialogClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <MuiDialog
      open={_open}
      onClose={onDialogClose}
      aria-labelledby="Core-Dialog"
      fullWidth
      maxWidth="sm"
      container={document.getElementById('portal')}
    >
      <div className={classes.root}>
        <AppBar position="static" elevation={1}>
          <Toolbar variant="dense" component="header">
            <Typography align="left" variant="subtitle1" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Scrollbar>
          <DialogContent>
            <div className={classes.content}>{children}</div>
          </DialogContent>
        </Scrollbar>

        <DialogActions className={classes.dialogAction}>
          {renderAction}
          {!disableCancelButton && (
            <LoadingButton variant="contained" color="primary" onClick={onDialogClose}>
              {cancelButtonText}
            </LoadingButton>
          )}

          {!disableSuccessButton && (
            <div className={classes.action}>
              <LoadingButton variant="contained" color="success" onClick={onDialogClose}>
                {successButtonText}
              </LoadingButton>
            </div>
          )}
        </DialogActions>
      </div>
    </MuiDialog>
  );
}

export default Dialog;
