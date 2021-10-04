import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DateTimePicker from 'components/shared/DateTimePicker';

// components
import LoadingButton from 'components/shared/LoadingButton';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Input from 'components/shared/Input';
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(SPACING_HALF),
    '& > *': {
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  actionButton: {
    '&:first-child': {
      marginBottom: theme.spacing(SPACING_LEAST),
    },
  },
}));

/**
 * @component Filter
 */
function Filter() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={classes.root}>
      <Grid container spacing={SPACING_HALF}>
        <Grid item xs={12} sm={6} lg={3}>
          <Autocomplete
            options={[{ title: 'test' }]}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <Input {...params} fullWidth placeholder="--انتخاب فیلتر--" />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Input
            label="جست و جو"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <DateTimePicker
            label="شروع تاریخ"
            placeholder="--انتخاب تاریخ--"
            value={selectedDate}
            onChange={setSelectedDate}
            okLabel="تأیید"
            cancelLabel="لغو"
            clearLabel="پاک کردن"
            labelFunc={(date) => (date ? date.format('jYYYY/jMM/jDD') : '')}
            TextFieldComponent={(props) => (
              <Input
                fullWidth
                {...props}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <DateTimePicker
            label="پایان تاریخ"
            placeholder="--انتخاب تاریخ--"
            value={selectedDate}
            onChange={setSelectedDate}
            okLabel="تأیید"
            cancelLabel="لغو"
            clearLabel="پاک کردن"
            labelFunc={(date) => (date ? date.format('jYYYY/jMM/jDD') : '')}
            TextFieldComponent={(props) => (
              <Input
                fullWidth
                {...props}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
      </Grid>

      <div className={classes.actionContainer}>
        <LoadingButton
          className={classes.actionButton}
          fullWidth
          variant="contained"
          color="primary"
        >
          اعمال فیلتر
        </LoadingButton>

        <LoadingButton
          className={classes.actionButton}
          fullWidth
          variant="contained"
          color="error"
        >
          حذف فیلتر
        </LoadingButton>
      </div>
    </div>
  );
}

export default Filter;
