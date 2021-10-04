// components
import Typography from 'components/shared/Typography';
import Dialog from 'components/shared/DialogImproved';
import Input from 'components/shared/Input';
import Grid from '@material-ui/core/Grid';

// constants
import { SPACING_THIRD } from 'constants/spacing';

/**
 * @component AddNewRouteModal
 */
function AddNewRouteModal({ ...rest }) {
  return (
    <Dialog title="مسیر وبسرویس" {...rest} successButtonText="ذخیره">
      <Grid container spacing={SPACING_THIRD}>
        <Grid item xs={12}>
          <Input
            fullWidth
            label="نام مسیر وبسرویس"
            placeholder="یک عنوان بنویسید ، به عنوان مثال :رهیاب"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            label="لینک مسیر وبسرویس"
            placeholder="آدرس وبسرویس اپراتور ارائه دهنده خدمات پیامک به سامانه"
          />
          <Typography variant="body2">
            لینک مسیر وبسرویس : لینک وبسرویس اپراتور است که کد نویسی های آن انجام شده و شما از
            طریق این آدرس اقدام به ارسال و دریافت پیامک میکنید
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            label="آدرس وبسرویس سامانه"
            placeholder="آدرس کد نویسی مسیر سامانه"
          />
          <Typography variant="body2">
            آدرس وبسرویس سامانه : شامل آدرس فایل کد نویسی شده براساس پارامتر های وبسرویس
            اپراتور ارائه دهنده خدمات پیامک
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth label="لینک دریافت" placeholder="لینک دریافت پیامک" />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default AddNewRouteModal;
