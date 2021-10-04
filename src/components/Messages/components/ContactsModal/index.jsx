import { makeStyles } from '@material-ui/core/styles';

// components
import Input from 'components/shared/Input';
import SimpleTable from 'components/shared/SimpleTable';
import Typography from 'components/shared/Typography';
import LoadingButton from 'components/shared/LoadingButton';
import Dialog from 'components/shared/DialogImproved';
import Notification from 'components/shared/Notification';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

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
 * @component ContactModal
 */
function ContactModal({ setOpen, open, ...rest }) {
  const classes = useStyles();

  return (
    <Dialog title="افزودن شماره از مخاطبین" open={open} {...rest} disableSuccessButton>
      <Grid container spacing={SPACING_HALF} alignItems="center">
        <Grid item xs={12} md={8}>
          <Input
            fullWidth
            className={classes.searchInput}
            type="search"
            name="searchContact"
            label="جستجو"
            placeholder="جهت جستجو مشخصات مورد نظر خود را وارد کنید"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <LoadingButton fullWidth variant="contained" color="primary">
            جستجو
          </LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <SimpleTable
            onSelect={(data) => {
              setOpen(false);
            }}
            columns={[
              {
                field: 'phone',
                title: 'شماره موبایل',
                render: (row) => <Typography>{row.phone}</Typography>,
              },
              {
                field: 'firstName',
                title: 'نام',
                render: (row) => <Typography>{row.firstName}</Typography>,
              },

              {
                field: 'lastName',
                title: 'نام خانوادگی',
                render: (row) => <Typography>{row.lastName}</Typography>,
              },
              {
                field: 'group',
                title: 'گروه',
                render: (row) => <Typography>{row.group}</Typography>,
              },
            ]}
            data={[
              {
                phone: '09175594952',
                firstName: 'حسین',
                lastName: 'حاصلی',
                group: 'همکاران',
              },
              {
                phone: '09175594952',
                firstName: 'حسین',
                lastName: 'حاصلی',
                group: 'مشتریان',
              },
              {
                phone: '09175594952',
                firstName: 'حسین',
                lastName: 'حاصلی',
                group: 'همکاران',
              },
              {
                phone: '09175594952',
                firstName: 'حسین',
                lastName: 'حاصلی',
                group: 'دوستان',
              },
              {
                phone: '09175594952',
                firstName: 'حسین',
                lastName: 'حاصلی',
                group: 'همکاران',
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <Notification
            normalText
            type="info"
            variant="outlined"
            primaryText="جهت درج شماره روی آن کلیک کنید"
          />
        </Grid>
        <Grid item xs={12} className={classes.pagination}>
          <Pagination size="small" shape="rounded" color="primary" count={10} />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default ContactModal;
