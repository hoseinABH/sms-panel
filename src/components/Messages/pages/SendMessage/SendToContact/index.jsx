import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import {
  DraftModal,
  ContactModal,
  SelectPhoneNumber,
  PhoneNumberTextField,
  SMSTextField,
} from '../../../components';

import Input from 'components/shared/Input';
import SimpleTable from 'components/shared/SimpleTable';
import Typography from 'components/shared/Typography';
import LoadingButton from 'components/shared/LoadingButton';
import MultiSelect from 'components/shared/MultiSelect';
import DateTimePicker from 'components/shared/DateTimePicker';

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

// icons
import SendIcon from '@material-ui/icons/Send';
import CalcIcon from '@material-ui/icons/ExposureOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import DraftIcon from '@material-ui/icons/PostAdd';
import ContactIcon from '@material-ui/icons/ContactPhoneOutlined';

// constants
import { SPACING_HALF, SPACING, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(SPACING),
    marginBottom: theme.spacing(SPACING),
  },
  swithFormControl: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(SPACING_LEAST),
  },
  switch: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  clacButton: {
    marginRight: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginRight: 0,
    },
  },
  sendButton: {
    marginLeft: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      marginTop: theme.spacing(SPACING_HALF),
    },
  },
  stickyTable: {
    position: 'sticky',
    top: 0,
    height: 'auto',
    minHeight: '300px',
  },
  buttons: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  switchLable: {
    width: 150,
  },
}));

/**
 * @component SendToContact
 */
function SendToContact() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(null);
  const [check, setCheck] = useState(true);
  const [draftModal, setDraftModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={SPACING_HALF}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={SPACING}>
            <Grid item xs={12}>
              <Input fullWidth name="sendTitle" label="عنوان ارسال" />
            </Grid>
            <Grid item xs={12}>
              <MultiSelect
                label="انتخاب گروه"
                list={[
                  { title: 'همکاران', value: 'group1Id' },
                  { title: 'مشتریان', value: 'group2Id' },
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <PhoneNumberTextField
                title="ورود دستی شماره"
                headerChildren={
                  <Button
                    onClick={() => setContactModal(true)}
                    variant="outlined"
                    startIcon={<ContactIcon />}
                  >
                    افزودن مخاطب
                  </Button>
                }
              />
            </Grid>

            <Grid item xs={12}>
              <SMSTextField
                title="متن ارسال"
                headerChildren={
                  <Button
                    onClick={() => setDraftModal(true)}
                    variant="outlined"
                    startIcon={<DraftIcon />}
                  >
                    پیش نویس ها
                  </Button>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <SelectPhoneNumber />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                options={[{ title: 'ارسال در آینده' }, { title: 'ارسال آنی' }]}
                defaultValue={{ title: 'ارسال در آینده' }}
                disableClearable
                getOptionLabel={(option) => option.title}
                renderInput={({ ...rest }) => <Input label="زمان ارسال" {...rest} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker
                label="تاریخ ارسال"
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
            <Grid item xs={12}>
              <div className={classes.swithFormControl}>
                <Typography className={classes.switchLable}>عدم ارسال به لیست ویژه</Typography>
                <Switch
                  className={classes.switch}
                  checked={check}
                  onChange={() => setCheck(!check)}
                  name="receivedSmsForward"
                  inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
                />
              </div>
              <Typography variant="body2" color="textSecondary">
                این گزینه بدین معنی است که پیامک در شماره های موجود در لیست ویژه ارسال نمیشود
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.swithFormControl}>
                <Typography className={classes.switchLable}>عدم ارسال تکراری</Typography>
                <Switch
                  className={classes.switch}
                  checked={check}
                  onChange={() => setCheck(!check)}
                  name="receivedSmsForward"
                  inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
                />
              </div>
              <Typography variant="body2" color="textSecondary">
                این گزینه بدین معناست که اگر در گروه های انتخاب شده شماره تکراری وجود داشت حذف
                شود{' '}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.stickyTable}>
            {/* Summary Table */}
            <SimpleTable
              titleIcon={ShoppingCartIcon}
              title="جزئیات هزینه ارسال پیامک"
              columns={[
                {
                  field: 'operator',
                  title: 'اپراتور',
                  render: (row) => (
                    <Typography align="left" style={{ marginRight: 15 }}>
                      {row.operator}
                    </Typography>
                  ),
                },
                {
                  field: 'count',
                  title: 'تعداد شماره',
                  render: (row) => <Typography>{row.count}</Typography>,
                },

                {
                  field: 'tariff',
                  title: 'تعرفه پیامک',
                  render: (row) => <Typography>{row.tariff}</Typography>,
                },
                {
                  field: 'cost',
                  title: 'مبلغ',
                  render: (row) => <Typography>{row.cost}</Typography>,
                },
              ]}
              data={[
                {
                  operator: 'ایرانسل',
                  count: 8,
                  tariff: 195,
                  cost: 2000,
                },
                {
                  operator: 'همراه اول',
                  count: 5,
                  tariff: 150,
                  cost: 950,
                },
                {
                  operator: 'سایر اپراتور ها',
                  count: 1,
                  tariff: 195,
                  cost: 1260,
                },
                {
                  operator: 'نوع پیامک',
                  tariff: 'فارسی 1 صفحه ای',
                  count: '',
                  cost: '',
                },
                {
                  operator: 'شماره های لیست ویژه',
                  tariff: '0',
                  count: '',
                  cost: '',
                },
                {
                  operator: 'مخاطبین قابل ارسال',
                  tariff: '0',
                  count: '',
                  cost: '',
                },
                {
                  operator: 'مبلغ نهایی ارسال',
                  tariff: '0',
                  count: '',
                  cost: '',
                },
              ]}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttons}>
            <LoadingButton
              size="small"
              className={classes.clacButton}
              variant="contained"
              color="primary"
              startIcon={<CalcIcon />}
            >
              محسابه هزینه ارسال
            </LoadingButton>
            <LoadingButton
              className={classes.sendButton}
              variant="contained"
              color="success"
              startIcon={<SendIcon />}
            >
              ارسال پیامک
            </LoadingButton>
          </div>
        </Grid>
      </Grid>

      {/* Start Draft Modal */}
      <DraftModal
        open={draftModal}
        onClose={() => setDraftModal(false)}
        setOpen={setDraftModal}
      />
      {/* End Draft Modal */}

      {/* Start Contact Modal */}
      <ContactModal
        open={contactModal}
        setOpen={setContactModal}
        onClose={() => setContactModal(false)}
      />
      {/* End Contact Modal */}
    </div>
  );
}

export default SendToContact;
