import { makeStyles } from '@material-ui/core/styles';

// components
import Dialog from 'components/shared/DialogImproved';
import Input from 'components/shared/Input';
import Notification from 'components/shared/Notification';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

// constants
import { SPACING_HALF } from 'constants/spacing';

// fakeData

const useStyles = makeStyles((theme) => ({
  input: {
    textAlign: 'center',
  },
}));

/**
 * @component CreatePackageModal
 */
function CreatePackageModal({ ...rest }) {
  const classes = useStyles();

  return (
    <Dialog successButtonText="ذخیره" title="ویرایش کلی تعرفه ها" {...rest}>
      <Grid container spacing={SPACING_HALF}>
        <Grid item xs={12} md={6}>
          <Input
            inputProps={{ style: { textAlign: 'center' } }}
            fullWidth
            placeholder="به عنوان مثال پنل شرکتی"
            label="عنوان پکیج"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[{ title: 'نمایندگی' }, { title: 'کاربری' }]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'نمایندگی' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="نوع دسترسی" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[
              { title: 'نمایندگی طلایی' },
              { title: 'نمایندگی نقره ای' },
              { title: 'کاربری تجاری' },
              { title: 'کاربری شرکتی' },
              { title: 'کاربری رایگان' },
            ]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'نمایندگی طلایی' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="بسته پیامکی" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input inputProps={{ style: { textAlign: 'center' } }} fullWidth label="قیمت پکیج" />
        </Grid>

        <Grid item xs={12} md={6}>
          {' '}
          <Input
            inputProps={{ style: { textAlign: 'center' } }}
            fullWidth
            label="هزینه تمدید"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            inputProps={{ style: { textAlign: 'center' } }}
            fullWidth
            label="درصد تخفیف"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            inputProps={{ style: { textAlign: 'center' } }}
            fullWidth
            label="اعتبار اولیه"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            inputProps={{
              style: { textAlign: 'center' },
              defaultValue: '365 روز',
              disabled: true,
            }}
            fullWidth
            label="مدت زمان"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            inputProps={{ style: { textAlign: 'center' } }}
            fullWidth
            label="زیر نماینده"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            inputProps={{
              style: { textAlign: 'center' },
              defaultValue: '20 درصد',
              disabled: true,
            }}
            fullWidth
            label="درصد تخفیف خط"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {' '}
          <Autocomplete
            disableClearable
            options={[{ title: 'فعال' }, { title: 'غیر فعال' }]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'فعال' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="ثبت نام آنلاین" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disableClearable
            options={[{ title: 'فعال' }, { title: 'غیر فعال' }]}
            getOptionLabel={(option) => option.title}
            defaultValue={{ title: 'فعال' }}
            classes={{
              input: classes.input,
            }}
            renderInput={(params) => <Input label="وضعیت" {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12}>
          {' '}
          <Notification
            normalText
            type="error"
            variant="outlined"
            primaryText="کلیه مبالغ برحسب ریال وارد شود"
          />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default CreatePackageModal;
