import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

// components
import Input from 'components/shared/Input';
import Notification from 'components/shared/Notification';
import Dialog from 'components/shared/DialogImproved';
import MultiSelect from 'components/shared/MultiSelect';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from 'components/shared/Typography';

// constants
import { SPACING_HALF, SPACING_LEAST, SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  swithFormControl: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(SPACING_LEAST),
  },
  switch: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  switchLable: {
    width: 220,
  },
}));

/**
 * @component AddToContactModal
 */
function AddToContactModal({ ...rest }) {
  const classes = useStyles();
  const [check, setCheck] = useState(true);

  return (
    <Dialog title="افزودن شماره به گروه مخاطبین" successButtonText="ثبت" {...rest}>
      <Grid container spacing={SPACING_THIRD}>
        <Grid item xs={12}>
          <MultiSelect
            label="انتخاب گروه"
            list={[
              { title: 'همکاران', value: 'group1Id' },
              { title: 'مشتریان', value: 'group2Id' },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="نام" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input label="نام خانوادگی" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Notification
            normalText
            variant="outlined"
            primaryText="پر کردن فیلد ها اختیاری است"
            type="error"
          />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.swithFormControl}>
            <Typography className={classes.switchLable}>
              بروز رسانی های شماره های تکراری
            </Typography>
            <Switch
              className={classes.switch}
              checked={check}
              onChange={() => setCheck(!check)}
              name="receivedSmsForward"
              inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
            />
          </div>
          <div className={classes.swithFormControl}>
            <Typography className={classes.switchLable}>
              افزودن شماره در صورت تکراری بودن
            </Typography>
            <Switch
              className={classes.switch}
              checked={check}
              onChange={() => setCheck(!check)}
              name="receivedSmsForward"
              inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
            />
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default AddToContactModal;
