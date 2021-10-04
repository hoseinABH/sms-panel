import { makeStyles } from '@material-ui/core/styles';

// components
import { RealPersonForm } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import FormGroup from 'components/shared/FormGroup';
import LoadingButton from 'components/shared/LoadingButton';
import Input from 'components/shared/Input';
import Typography from 'components/shared/Typography';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

// icons
import UserSettingsIcon from 'components/shared/icons/UserSetting';
import UpdateIcon from '@material-ui/icons/CreateOutlined';

// constants
import { SPACING, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  accountInfo: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  avatar: {
    width: 140,
    height: 140,
    marginRight: theme.spacing(SPACING),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(SPACING),
      marginRight: 0,
    },
  },
  uploadInfo: {
    marginLeft: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      width: '100%',
      marginBottom: theme.spacing(SPACING_HALF),
    },
  },
  avatarActions: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(SPACING_LEAST),
  },
  button: {
    marginBottom: theme.spacing(SPACING_LEAST),
  },
  input: {
    marginBottom: theme.spacing(SPACING_HALF),
  },
  profileForm: {
    paddingTop: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component Profile
 */
function Profile() {
  const classes = useStyles();

  return (
    <PageWithTitle
      title="تنظیمات کاربری"
      contentTitle="اطلاعات کاربری"
      icon={UserSettingsIcon}
    >
      <FormGroup title="اطلاعات کاربری">
        <form noValidate name="profileForm" className={classes.profileForm}>
          <Grid container spacing={SPACING_HALF}>
            <Grid item xs={12} lg={6}>
              <div className={classes.accountInfo}>
                <Avatar src="/broken-image.jpg" className={classes.avatar} />
                <div className={classes.uploadInfo}>
                  <div className={classes.avatarActions}>
                    <div className={classes.button}>
                      <LoadingButton fullWidth color="primary" variant="outlined">
                        تغییر عکس پروفایل
                      </LoadingButton>
                    </div>
                    <div>
                      <LoadingButton fullWidth variant="outlined" color="error">
                        حذف عکس پروفایل
                      </LoadingButton>
                    </div>
                  </div>
                  <div>
                    <Typography variant="body2" gutterBottom>
                      فرمت های قابل قبول :JPG , PNG , GIF
                    </Typography>
                    <Typography variant="body2">حداکثر حجم عکس: 500 مگابایت</Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Input fullWidth name="username" className={classes.input} label="نام کاربری" />
              <Input
                fullWidth
                type="password"
                name="password"
                className={classes.input}
                label="پسورد"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <UpdateIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </form>
      </FormGroup>
      <RealPersonForm />
      <Grid item xs={12} md={2}>
        <LoadingButton fullWidth type="submit" variant="contained" color="success">
          ذخیره
        </LoadingButton>
      </Grid>
    </PageWithTitle>
  );
}

export default Profile;
