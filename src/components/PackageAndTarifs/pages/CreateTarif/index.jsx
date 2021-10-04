import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// components
import PageWithTitle from 'components/shared/PageWithTitle';
import FormGroup from 'components/shared/FormGroup';
import Notification from 'components/shared/Notification';
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';

import Grid from '@material-ui/core/Grid';

// icons
import PackageAndTarifIcon from '@material-ui/icons/ListAlt';

// constants
import { SPACING, SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(SPACING),
  },
  formGroup: {
    paddingTop: theme.spacing(SPACING),
    paddingBottom: theme.spacing(SPACING_HALF),
  },
}));

/**
 * @component CreateTarif
 */
function CreateTarif() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <PageWithTitle title="پکیج و تعرفه ها" contentTitle="تعرفه ها" icon={PackageAndTarifIcon}>
      <div className={classes.root}>
        <Grid container spacing={SPACING}>
          <Grid item xs={12} md={6}>
            <Input label="عنوان بسته" fullWidth placeholder="پنل رایگان" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input label="توضیحات" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label="از مبلغ"
              fullWidth
              inputProps={{ style: { textAlign: 'center' }, defaultValue: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label="تا مبلغ"
              fullWidth
              inputProps={{ style: { textAlign: 'center' }, defaultValue: 500000 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Notification
              normalText
              color="info"
              primaryText="کلیه تعرفه ها به ریال می باشد"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Notification
              normalText
              type="error"
              primaryText="تعرفه های پیش فرض ، برابر یا تعرفه های پکیج نمایندگی شماست ، شما می بایست تعرفه های دلخواه خود را جایگزین کرده ، بدیهی است در صورت عدم تغییر تعرفه ها کلیه ارسال ها با تعرفه های زیر برای کاربر محاسبه می شود و سودی از ارسال عاید شما نخواهد شد"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <FormGroup title="رهیاب">
              <Grid container spacing={SPACING} className={classes.formGroup}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={SPACING_HALF}>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="همراه اول فارسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 170 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="همراه اول انگلیسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 425 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={SPACING_HALF}>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="ایرانسل فارسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 210 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="ایرانسل انگلیسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 525 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup title="آسانک">
              <Grid container spacing={SPACING} className={classes.formGroup}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={SPACING_HALF}>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="همراه اول فارسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 170 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="همراه اول انگلیسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 425 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={SPACING_HALF}>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="ایرانسل فارسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 210 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="ایرانسل انگلیسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 525 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup title="وبسرویس خدماتی">
              <Grid container spacing={SPACING} className={classes.formGroup}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={SPACING_HALF}>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="همراه اول فارسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 210 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="همراه اول انگلیسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 525 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={SPACING_HALF}>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="ایرانسل فارسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 250 }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        label="ایرانسل انگلیسی"
                        fullWidth
                        inputProps={{ style: { textAlign: 'center' }, defaultValue: 625 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={SPACING_HALF}>
              <Grid item xs={12} md={4}>
                <LoadingButton fullWidth size="small" variant="contained" color="success">
                  ذخیره
                </LoadingButton>
              </Grid>
              <Grid item xs={12} md={4}>
                <LoadingButton fullWidth size="small" variant="contained" color="error.light">
                  پاک کردن تعرفه ها
                </LoadingButton>
              </Grid>
              <Grid item xs={12} md={4}>
                <LoadingButton
                  fullWidth
                  size="small"
                  variant="contained"
                  onClick={() => history.goBack()}
                  color="primary"
                >
                  انصراف
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </PageWithTitle>
  );
}

export default CreateTarif;
