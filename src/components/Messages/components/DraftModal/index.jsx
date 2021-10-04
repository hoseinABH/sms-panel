import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from 'components/shared/DialogImproved';
import Typography from 'components/shared/Typography';
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import Pagination from '@material-ui/lab/Pagination';
import Notification from 'components/shared/Notification';

// constants
import { SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));

/**
 * @component DraftModal
 */
function DraftModal({ open, setOpen, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Dialog title="پیش نویس ها" open={open} {...rest} disableSuccessButton>
      <Grid container spacing={SPACING_HALF} alignItems="center">
        <Grid item xs={12} md={6}>
          <Input fullWidth type="search" name="searchContact" label="جستجو" />
        </Grid>
        <Grid item xs={12} md={3}>
          <LoadingButton fullWidth variant="contained" color="primary">
            جستجو
          </LoadingButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <LoadingButton
            onClick={() => history.push('/setting/drafts')}
            variant="contained"
            color="success"
            size="small"
            fullWidth
          >
            افزودن متن
          </LoadingButton>
        </Grid>

        <Grid item xs={12}>
          <Paper variant="outlined">
            <List component="nav" disablePadding>
              {[1, 2, 3, 4, 5].map((item) => (
                <Fragment key={item}>
                  <ListItem button onClick={() => setOpen(false)}>
                    <ListItemText
                      primary="ارسال پیامک تبلیغاتی براساس سن و جنسیت"
                      secondary={
                        <>
                          <Typography>اطلاعات بیشتر :</Typography>
                          <Typography>goo.gl/fgedgr</Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="fullWidth" />
                </Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Notification
            normalText
            type="info"
            variant="outlined"
            primaryText="برای انتخاب متن مورد نظر روی آن کلیک کنید"
          />
        </Grid>

        <Grid item xs={12} className={classes.pagination}>
          <Pagination size="small" shape="rounded" color="primary" count={10} />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default DraftModal;
