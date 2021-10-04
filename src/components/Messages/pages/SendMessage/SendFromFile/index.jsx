import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { collectPhoneNumbers, toFarsiNumber } from 'utils';

// components
import {
  ContactModal,
  SMSTextField,
  PhoneNumberTextField,
  SelectPhoneNumber,
  DraftModal,
} from '../../../components';

import Input from 'components/shared/Input';
import Typography from 'components/shared/Typography';
import SimpleTable from 'components/shared/SimpleTable';
import LoadingButton from 'components/shared/LoadingButton';
import FileDropzone from 'components/shared/FileDropzone';
import InfoCard from 'components/shared/InfoCard';

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

// icons
import SendIcon from '@material-ui/icons/Send';
import CalcIcon from '@material-ui/icons/ExposureOutlined';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
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
  searchInput: {
    marginRight: theme.spacing(SPACING_HALF),
  },
  contactTable: {
    marginBottom: theme.spacing(SPACING),
  },
}));

/**
 * @component SendFromFile
 */
function SendFromFile() {
  const classes = useStyles();
  const [check, setCheck] = useState(true);

  const [draftModal, setDraftModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  return (
    <div className={classes.root}>
      <Grid container spacing={SPACING_HALF}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={SPACING}>
            <Grid item xs={12}>
              <Input fullWidth name="sendTitle" label="عنوان ارسال" />
            </Grid>
            <Grid item xs={12}>
              <InfoCard
                variant="outlined"
                icon={PhoneIcon}
                primaryText="فرمت فایل و شماره موبایل ها"
              >
                <Typography gutterBottom variant="body2">
                  فایل قابل شناسایی txt و شماره ها با فرمت های زیر قابل شناسایی است :
                </Typography>
                <Typography gutterBottom variant="body2">
                  00989XXXXXXX
                </Typography>
                <Typography gutterBottom variant="body2">
                  0998XXXXXXXX
                </Typography>
                <Typography gutterBottom variant="body2">
                  998XXXXXXXXX
                </Typography>
                <Typography gutterBottom variant="body2">
                  9XXXXXXXXXX
                </Typography>
              </InfoCard>
            </Grid>

            <Grid item xs={12}>
              <FileDropzone
                options={{
                  accept: '.txt',
                }}
                onChange={(files) => {
                  const file = files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.readAsText(file);
                    reader.onloadend = (e) => {
                      const content = reader.result;
                      const phoneNumbers = collectPhoneNumbers(content, true);

                      setPhoneNumbers(phoneNumbers);
                    };
                  } else {
                    setPhoneNumbers([]);
                  }
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                fullWidth
                inputProps={{ min: 0, style: { textAlign: 'center' } }} // the change is here
                readOnly
                value={toFarsiNumber(phoneNumbers.length)}
                label="تعداد شماره های شناسایی شده"
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
                renderInput={(params) => <Input label="زمان ارسال" {...params} fullWidth />}
              />
            </Grid>

            <Grid item xs={12}>
              <div className={classes.swithFormControl}>
                <Typography>عدم ارسال به لیست ویژه</Typography>
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
                  tariff: 1000,
                  cost: 2000,
                },
                {
                  operator: 'همراه اول',
                  count: 5,
                  tariff: 900,
                  cost: 950,
                },
                {
                  operator: 'سایر اپراتور ها',
                  count: 1,
                  tariff: 1200,
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
        setOpen={setDraftModal}
        onClose={() => setDraftModal(false)}
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

export default SendFromFile;
