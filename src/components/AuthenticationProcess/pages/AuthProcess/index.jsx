import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { Steps } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import PackageCard from 'components/shared/PackageCard';
import Grid from '@material-ui/core/Grid';
import Notification from 'components/shared/Notification';
import LoadingButton from 'components/shared/LoadingButton';
import Paper from '@material-ui/core/Paper';
import Typography from 'components/shared/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from 'components/shared/Input';
import RealPersonForm from 'components/shared/RealPersonForm';
import IdDocUploadForm from 'components/UserAuthentication/components/IdDocUploadForm';

// icons
import AuthIcon from '@material-ui/icons/AccountBox';
import SuccessIcon from 'components/shared/icons/TaskAlt';

// constants
import { SPACING, SPACING_DOUBLE, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: theme.spacing(SPACING_DOUBLE),
    marginBottom: theme.spacing(SPACING),
  },
  startProcess: {
    marginTop: theme.spacing(SPACING),
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(SPACING),
  },
  successPaper: {
    paddingTop: theme.spacing(SPACING_HALF),
    paddingBottom: theme.spacing(SPACING_HALF),
    borderColor: theme.palette.success.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  successIcon: {
    color: theme.palette.success.main,
  },
  selectPerson: {
    width: '50%',
    padding: theme.spacing(SPACING_LEAST),

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  prevButton: {
    marginRight: theme.spacing(SPACING_LEAST),
  },
  nextButton: {
    marginLeft: theme.spacing(SPACING_LEAST),
  },
}));

/**
 * @component AuthProcess
 */
function AuthProcess() {
  const classes = useStyles();
  const [state, setState] = useState(1);
  const [selectPackageStage, SetSelectPackageStage] = useState(1);
  const [person, setPerson] = useState({ title: 'حقیقی', value: 'real' });
  return (
    <PageWithTitle title="احراز هویت" icon={AuthIcon} contentTitle="فرآیند احراز هویت">
      <Steps setState={setState} state={state} />

      {/* Start Access Denied */}
      {state === 1 && (
        <div className={classes.spacing}>
          <Notification
            type="error"
            variant="outlined"
            primaryText="عدم دسترسی"
            secondaryText="کاربر گرامی صالح زارعی عزیز پروفایل کاربری و مدارک احراز هویت شما کامل نیست جهت فعال سازی دسترسی پنل و امکانات ، لطفا فرآیند ثبت نام را تکمیل نمایید ، این کار کمتر از 5 دقیقه وقت شمارا میگیرد."
          />
          <div className={classes.startProcess}>
            <LoadingButton onClick={() => setState(2)} variant="contained" color="success">
              شروع فرآیند تکمیل ثبت نام
            </LoadingButton>
          </div>
        </div>
      )}
      {/* End Access Denied */}

      {/*Start Select Package */}
      {state === 2 && (
        <div className={classes.spacing}>
          {selectPackageStage === 1 && (
            <Grid container spacing={SPACING} justify="center">
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <PackageCard
                  extension="تمدید سالانه رایگان"
                  usage="کاربری"
                  title="پنل رایگان"
                  price={0}
                  onSelect={() => SetSelectPackageStage(2)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <PackageCard
                  extension="تخفیف تمدید 50 دصد"
                  usage="کاربری"
                  title="پنل اقتصادی"
                  price={72000}
                  onSelect={() => SetSelectPackageStage(2)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <PackageCard
                  offPrice={112000}
                  extension="تخفیف تمدید 50 دصد"
                  usage="کاربری"
                  title="پنل شرکتی"
                  price={125000}
                  onSelect={() => SetSelectPackageStage(2)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <PackageCard
                  extension="تخفیف تمدید 50 دصد"
                  usage="کاربری"
                  title="پنل تجاری"
                  price={114200}
                  onSelect={() => SetSelectPackageStage(2)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <PackageCard
                  extension="تخفیف تمدید 50 دصد"
                  usage="نمایندگی"
                  title="پنل برنزی"
                  price={2500000}
                  onSelect={() => SetSelectPackageStage(2)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <PackageCard
                  extension="تخفیف تمدید 50 دصد"
                  usage="نمایندگی"
                  title="پنل نقره ای"
                  price={44200000}
                  onSelect={() => SetSelectPackageStage(2)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <PackageCard
                  extension="تخفیف تمدید 50 دصد"
                  usage="نمایندگی"
                  title="پنل طلایی"
                  price={56000000}
                  onSelect={() => SetSelectPackageStage(2)}
                />
              </Grid>
            </Grid>
          )}
          {selectPackageStage === 2 && (
            <>
              <Paper className={classes.paper} variant="outlined">
                <Grid container spacing={SPACING_HALF}>
                  <Grid item xs={12}>
                    <Typography fontWeight="bold" gutterBottom align="center">
                      پرداخت صورت حساب
                    </Typography>
                    <Typography fontWeight="bold" gutterBottom align="center">
                      پنل کاربری - شرکتی
                    </Typography>
                    <Typography fontWeight="bold" gutterBottom align="center">
                      قابل پرداخت 1300000 ریال
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      options={[{ title: 'آنلاین' }, { title: 'فیش واریزی' }]}
                      defaultValue={{ title: 'آنلاین' }}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <Input label="نوع پرداخت" {...params} fullWidth />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      options={[{ title: 'ملت' }, { title: 'پارسیان' }, { title: 'صادرات' }]}
                      defaultValue={{ title: 'ملت' }}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <Input label="انتخاب درگاه" {...params} fullWidth />
                      )}
                    />
                  </Grid>
                </Grid>
              </Paper>
              <div className={classes.startProcess}>
                <LoadingButton
                  onClick={() => SetSelectPackageStage(3)}
                  variant="contained"
                  color="success"
                >
                  پرداخت صورت حساب
                </LoadingButton>
              </div>
            </>
          )}
          {selectPackageStage === 3 && (
            <>
              <Paper variant="outlined" className={classes.successPaper}>
                <SuccessIcon fontSize="large" className={classes.successIcon} />
                <Typography color="success.light" fontWeight="bold">
                  پرداخت با موفقیت انجام شد
                </Typography>
                <Typography fontWeight="bold">کاربر گرامی صالح زارعی عزیز </Typography>
                <Typography fontWeight="bold">
                  لطفا فرآیند ثبت نام را ادامه و تکمیل کنید
                </Typography>
              </Paper>
              <div className={classes.startProcess}>
                <LoadingButton onClick={() => setState(3)} variant="contained" color="success">
                  تکمیل فرآیند ثبت نام
                </LoadingButton>
              </div>
            </>
          )}
        </div>
      )}
      {/*End Select Package */}

      {/* Start Compelete Profile */}

      {state === 3 && (
        <div className={classes.spacing}>
          <div className={classes.selectPerson}>
            <Autocomplete
              options={[
                { title: 'حقیقی', value: 'real' },
                { title: 'حقوقی', value: 'legal' },
              ]}
              onChange={(event, newValue) => {
                setPerson(newValue);
              }}
              defaultValue={{ title: 'حقیقی' }}
              value={person}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <Input label="انتخاب شخص" {...params} fullWidth />}
            />
          </div>
          {person?.title === 'حقیقی' ? <RealPersonForm /> : <h1>فرم شخص حقوقی</h1>}
          <div>
            <LoadingButton
              onClick={() => setState(2)}
              className={classes.prevButton}
              variant="contained"
              color="primary"
            >
              مرحله قبل
            </LoadingButton>
            <LoadingButton
              onClick={() => setState(4)}
              className={classes.nextButton}
              variant="contained"
              color="success"
            >
              ثبت و ادامه
            </LoadingButton>
          </div>
        </div>
      )}
      {/* End Compelete Profile */}

      {/* Start Upload Identification Documents  */}
      {state === 4 && (
        <div className={classes.spacing}>
          <IdDocUploadForm />
          <div>
            <LoadingButton
              onClick={() => setState(3)}
              className={classes.prevButton}
              variant="contained"
              color="primary"
            >
              مرحله قبل
            </LoadingButton>
            <LoadingButton
              onClick={() => setState(5)}
              className={classes.nextButton}
              variant="contained"
              color="success"
            >
              ثبت و ادامه
            </LoadingButton>
          </div>
        </div>
      )}
      {/* End Upload Identification Documents  */}

      {/* Start Compelete Process Secion */}
      {state === 5 && (
        <div className={classes.spacing}>
          <Paper variant="outlined" className={classes.successPaper}>
            <SuccessIcon fontSize="large" className={classes.successIcon} />
            <Typography color="success.light" fontWeight="bold">
              پایان فرآیند
            </Typography>
            <Typography fontWeight="bold">کاربر گرامی صالح زارعی عزیز </Typography>
            <Typography fontWeight="bold">
              فرآیند ثبت نام شما تکمیل شد ، بزودی مدارک شما بررسی و پنل شما فعال خواهد شد
            </Typography>
          </Paper>
        </div>
      )}
      {/* Start Compelete Process Secion */}
    </PageWithTitle>
  );
}

export default AuthProcess;
