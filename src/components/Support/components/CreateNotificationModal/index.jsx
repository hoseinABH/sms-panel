import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Typography from 'components/shared/Typography';
import RichEditor from 'components/shared/RichEditor';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import Dialog from 'components/shared/DialogImproved';
import FormGroup from 'components/shared/FormGroup';
import Input from 'components/shared/Input';
import Autocomplete from '@material-ui/lab/Autocomplete';

// icons
import SuccessIcon from '@material-ui/icons/CheckCircleOutline';
import WarningIcon from '@material-ui/icons/ReportProblemOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';
import AttachIcon from '@material-ui/icons/AttachFileOutlined';

// constants
import { SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    paddingTop: theme.spacing(SPACING_HALF),
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formControlLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  switchLable: {
    width: 220,
  },
  swithFormControl: {
    display: 'flex',
    alignItems: 'center',
  },
  switch: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  input: {
    textAlign: 'center',
  },
  secondaryAction: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  success: {
    color: theme.palette.success.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  info: {
    color: theme.palette.info.main,
  },
}));

/**
 * @component CreateNotificationModal
 */
function CreateNotificationModal({ ...rest }) {
  const classes = useStyles();
  const [notificationType, setNotificationType] = useState('error');
  const [check, setCheck] = useState(true);

  const handleChange = (event) => {
    setNotificationType(event.target.value);
  };
  return (
    <Dialog
      {...rest}
      title="درج اعلان"
      renderAction={
        <label htmlFor="upload-file">
          <input style={{ display: 'none' }} id="upload-file" name="upload-file" type="file" />
          <IconButton component="span" className={classes.secondaryAction}>
            <AttachIcon />
          </IconButton>
        </label>
      }
      successButtonText="انتشار"
    >
      <Grid container spacing={SPACING_HALF}>
        <Grid item xs={12}>
          <Input label="عنوان اعلان" fullWidth placeholder="افزایش تعرفه" />
        </Grid>
        <Grid item xs={12}>
          <FormGroup title="نوع اعلان">
            <div className={classes.radioGroup}>
              <div className={classes.formControlLabel}>
                <Radio
                  checked={notificationType === 'error'}
                  onChange={handleChange}
                  size="small"
                  value="error"
                />
                <ErrorIcon color="error" />
              </div>
              <div className={classes.formControlLabel}>
                <Radio
                  checked={notificationType === 'info'}
                  onChange={handleChange}
                  size="small"
                  value="info"
                />
                <ErrorIcon className={classes.info} />
              </div>
              <div className={classes.formControlLabel}>
                <Radio
                  checked={notificationType === 'warning'}
                  onChange={handleChange}
                  size="small"
                  value="warning"
                />
                <WarningIcon className={classes.warning} />
              </div>
              <div className={classes.formControlLabel}>
                <Radio
                  checked={notificationType === 'success'}
                  onChange={handleChange}
                  size="small"
                  value="success"
                />
                <SuccessIcon className={classes.success} />
              </div>
            </div>
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <RichEditor />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            disableClearable
            options={[{ title: 'کل سورس' }, { title: 'نمایندگان' }, { title: 'کاربران' }]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'کل سورس' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="لایه انتشار" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className={classes.swithFormControl}>
            <Typography className={classes.switchLable}>ارسال پیام به نمایندگان</Typography>
            <Switch
              className={classes.switch}
              checked={check}
              onChange={() => setCheck(!check)}
            />
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default CreateNotificationModal;
