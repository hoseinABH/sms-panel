import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// components
import { TicketHeader } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import Input from 'components/shared/Input';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LoadingButton from 'components/shared/LoadingButton';
import IconButton from '@material-ui/core/IconButton';

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

// icons
import SupportIcon from '@material-ui/icons/Help';

import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING),
  },
  form: {
    padding: theme.spacing(SPACING_DOUBLE),
    marginTop: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(SPACING_HALF),
    },
  },
  input: {
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  cancelButton: {
    marginLeft: theme.spacing(SPACING_LEAST),
    marginRight: theme.spacing(SPACING_LEAST),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
      width: '100%',
      marginTop: theme.spacing(SPACING_LEAST),
    },
  },
  submitButton: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

/**
 * @component CreateTicket
 */
function CreateTicket() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <PageWithTitle title="پشتیبانی" contentTitle="تیکت ها" icon={SupportIcon}>
      <div className={classes.root}>
        <TicketHeader />
        <Paper variant="outlined" className={classes.form}>
          <Grid container spacing={SPACING} direction="column">
            <Grid item xs={12} md={6}>
              <Input fullWidth label="موضوع تیکت" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                disableClearable
                options={[
                  { title: 'پشتیبانی' },
                  { title: 'فنی' },
                  { title: 'مالی' },
                  { title: 'شکایت' },
                ]}
                classes={{
                  input: classes.input,
                }}
                getOptionLabel={(option) => option.title}
                defaultValue={{ title: 'پشتیبانی' }}
                renderInput={(params) => <Input label="دپارتمان" {...params} fullWidth />}
              />{' '}
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                disableClearable
                options={[{ title: 'معمولی' }, { title: 'زیاد' }, { title: 'کم' }]}
                classes={{
                  input: classes.input,
                }}
                getOptionLabel={(option) => option.title}
                defaultValue={{ title: 'معمولی' }}
                renderInput={(params) => <Input label="اولویت" {...params} fullWidth />}
              />{' '}
            </Grid>
            <Grid item xs={12} md={6}>
              <Input fullWidth label="متن تیکت" multiline rows={8} />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.actions}>
                <div>
                  <LoadingButton
                    className={classes.submitButton}
                    variant="contained"
                    color="success"
                  >
                    ثبت تیکت
                  </LoadingButton>

                  <LoadingButton
                    onClick={() => history.goBack()}
                    variant="contained"
                    color="primary"
                    className={classes.cancelButton}
                  >
                    انصراف
                  </LoadingButton>
                </div>

                <label htmlFor="upload-file">
                  <input
                    style={{ display: 'none' }}
                    id="upload-file"
                    name="upload-file"
                    type="file"
                  />
                  <IconButton component="span">
                    <AttachFileIcon />
                  </IconButton>
                </label>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </PageWithTitle>
  );
}

export default CreateTicket;
