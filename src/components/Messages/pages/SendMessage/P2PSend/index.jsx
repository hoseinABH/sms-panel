import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import readXlsxFile from 'read-excel-file';

// components
import {
  SelectPhoneNumber,
  SMSPreviewTextField,
  SMSTextField,
  DraftModal,
  CarrierPhoneNumber,
} from '../../../components';

import FileDropzone from 'components/shared/FileDropzone';
import Input from 'components/shared/Input';
import Typography from 'components/shared/Typography';
import LoadingButton from 'components/shared/LoadingButton';
import InfoCard from 'components/shared/InfoCard';

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

// icons
import ExcelFileIcon from 'components/shared/icons/ExcelFile';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PreviewIcon from '@material-ui/icons/Visibility';
import FilterIcon from '@material-ui/icons/FilterList';
import DraftIcon from '@material-ui/icons/PostAdd';

// constants
import { SPACING_HALF, SPACING, SPACING_LEAST } from 'constants/spacing';

// utils
import { collectPhoneNumbers, getSMSDetail, groupPhoneNumbersByCarrier } from 'utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(SPACING),
    marginBottom: theme.spacing(SPACING),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  swithFormControl: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(SPACING_LEAST),
  },
  switch: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  spacing: {
    marginTop: theme.spacing(SPACING_HALF),
  },
  sendButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(SPACING_HALF),
    },
  },
  switchLable: {
    width: 130,
  },
}));

/**
 * @component P2PSend
 */
function P2PSend() {
  const classes = useStyles();
  const [check, setCheck] = useState(true);
  const [draftModal, setDraftModal] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState({});

  return (
    <div className={classes.root}>
      <Grid container spacing={SPACING_HALF} className={classes.container}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={SPACING}>
            <Grid item xs={12}>
              <Input fullWidth name="sendTitle" label="عنوان ارسال" />
            </Grid>

            <Grid item xs={12}>
              <FileDropzone
                options={{
                  accept: '.xlsx, .xls, .csv, .txt',
                }}
                onChange={(files) => {
                  const file = files[0];
                  const type = file?.type;

                  const isXlsFile =
                    type ===
                      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                    type === 'application/vnd.ms-excel';

                  const isTextFile = type === 'text/plain';

                  if (isTextFile) {
                    // handle text files here
                    const reader = new FileReader();
                    reader.readAsText(file);
                    reader.onloadend = (e) => {
                      const content = reader.result;
                      const phoneNumbers = collectPhoneNumbers(content);

                      setPhoneNumbers(groupPhoneNumbersByCarrier(phoneNumbers));
                    };
                  } else if (isXlsFile) {
                    // handle xls files here

                    readXlsxFile(file).then((rows) => {
                      const columnsCount = rows[0]?.length;
                      if (columnsCount === 2) {
                        const numbers = rows.map((row) => row[0]);
                        const text = rows.map((row) => row[1]);

                        const pages = text.reduce(
                          (acc, curr) => acc + getSMSDetail(curr).page,
                          0
                        );

                        setPhoneNumbers({
                          ...groupPhoneNumbersByCarrier(numbers),
                          pages,
                          cost: 0,
                        });
                      } else if (columnsCount === 3) {
                        const numbers = rows.map((row) => row[0]);

                        const text = rows.map((row) => row[2]);

                        const pages = text.reduce(
                          (acc, curr) => acc + getSMSDetail(curr).page,
                          0
                        );

                        setPhoneNumbers({
                          ...groupPhoneNumbersByCarrier(numbers),
                          pages,
                          cost: 0,
                        });
                      } else {
                        setPhoneNumbers({});
                      }
                    });
                  } else {
                    setPhoneNumbers({});
                  }
                }}
              />
            </Grid>
            {/* File DropZone Grid Item */}

            <Grid item xs={12}>
              <CarrierPhoneNumber
                numberCount={{
                  rightel: phoneNumbers['رایتل']?.length,
                  irancell: phoneNumbers['ایرانسل']?.length,
                  hamrahAval: phoneNumbers['همراه اول']?.length,
                  talia: phoneNumbers['تالیا']?.length,
                  wrong: phoneNumbers['نادرست']?.length,
                  pages: phoneNumbers?.pages,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <div className={classes.swithFormControl}>
                <Typography className={classes.switchLable}>افزودن متن به ارسال</Typography>
                <Switch
                  className={classes.switch}
                  checked={check}
                  onChange={() => setCheck(!check)}
                  name="receivedSmsForward"
                  inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
                />
              </div>
              <div className={classes.swithFormControl}>
                <Typography className={classes.switchLable}>افزودن متن به ابتدا</Typography>
                <Switch
                  className={classes.switch}
                  checked={check}
                  onChange={() => setCheck(!check)}
                  name="receivedSmsForward"
                  inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
                />
              </div>
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
              <div className={classes.swithFormControl}>
                <Typography className={classes.switch}>افزودن متن به انتها</Typography>
                <Switch
                  className={classes.switch}
                  checked={check}
                  onChange={() => setCheck(!check)}
                  name="receivedSmsForward"
                  inputProps={{ 'aria-label': 'enable received sms forward checkbox' }}
                />
              </div>
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
              <SMSPreviewTextField
                title="پیش نمایش متن نهایی ارسالی"
                headerChildren={
                  <Button variant="outlined" startIcon={<PreviewIcon />}>
                    نمایش متن
                  </Button>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <SelectPhoneNumber />
            </Grid>

            <Grid item xs={12}>
              <div className={classes.swithFormControl}>
                <Typography className={classes.switch}>عدم ارسال به لیست ویژه</Typography>
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
              <LoadingButton
                className={classes.sendButton}
                variant="contained"
                color="success"
                startIcon={<SendIcon />}
              >
                ارسال پیامک
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={SPACING_HALF}>
            <Grid item xs={12}>
              <InfoCard variant="outlined" icon={MailIcon} primaryText="موجودی پیامک">
                <Typography variant="body2">
                  لطفا قبل از ارسال از کافی بودن اعتبار خود اطمینان حاصل فرمایید
                </Typography>
              </InfoCard>
            </Grid>
            <Grid item xs={12}>
              <InfoCard
                variant="outlined"
                icon={ExcelFileIcon}
                primaryText="فایل اکسل سه ستونی"
              >
                <Typography gutterBottom variant="body2">
                  فایل اکسل سه ستونی باید شامل :
                </Typography>
                <Typography gutterBottom variant="body2">
                  ستون اول شماره فرستنده ، ستون دوم شماره گیرنده و ستون سوم حاوی متن ارسالی است{' '}
                </Typography>
                <div>
                  <LoadingButton
                    className={classes.spacing}
                    size="small"
                    color="info"
                    variant="contained"
                  >
                    دانلود فایل نمونه
                  </LoadingButton>
                </div>
              </InfoCard>
            </Grid>

            <Grid item xs={12}>
              <InfoCard
                variant="outlined"
                icon={ExcelFileIcon}
                primaryText="فایل اکسل دو ستونی"
              >
                <Typography gutterBottom variant="body2">
                  فایل اکسل سه ستونی باید شامل :
                </Typography>
                <Typography gutterBottom variant="body2">
                  ستون اول شماره گیرنده ، ستون دوم حاوی متن ارسالی است{' '}
                </Typography>
                <div className={classes.spacing}></div>
                <Typography variant="body2" color="error">
                  نکته :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  شماره ارسال در این روش از لیست شماره ارسال قابل انتخاب است
                </Typography>
                <div>
                  <LoadingButton
                    className={classes.spacing}
                    size="small"
                    color="info"
                    variant="contained"
                  >
                    دانلود فایل نمونه
                  </LoadingButton>
                </div>
              </InfoCard>
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
              <InfoCard
                variant="outlined"
                icon={FileCopyIcon}
                primaryText="افزودن متن به ارسال"
              >
                <Typography variant="body2">
                  این گزینه برای مواری که لازم به افزودن متنی به ابتدا یا انتهای متن تنظیم شده
                  نظیر به نظیر فایل آپلود شده کاربرد دارد ، و متن اضافه شده به انتها و انتهای
                  تمامی متن های فایل اپلود شده اضافه می شود
                </Typography>
              </InfoCard>
            </Grid>
            <Grid item xs={12}>
              <InfoCard
                variant="outlined"
                icon={FilterIcon}
                primaryText="عدم ارسال به لیست ویژه"
              >
                <Typography variant="body2">
                  با فعال بودن این گزینه شما به سیستم این اجازه را می دهید که شماره موبایل های
                  موجود جهت ارسال نظیر به نظیر ابتدا با لیست ویژه (شماره هایی که نباید به آنها
                  ارسال انجام شود) تطابق داده شده و شماره های موجود در لیست ، از لیست ارسال حذف
                  شده و به آنها ارسال انجام نمی شود
                </Typography>
              </InfoCard>
            </Grid>
            <Grid item xs={12}>
              <InfoCard variant="outlined" icon={PreviewIcon} primaryText="پیش نمایش متن">
                <Typography variant="body2">
                  با کلیک بر روی گزینه نمایش متن ، سیستم اولین ردیف فایل اکسلی را که آپلود کرده
                  اید را شناسایی کرده و متن ارسال و اولین شماره را برای شما نمایش میدهد ، این
                  مورد صرفا جهت بررسی صحت فایل بارگزاری شده جهت ارسال است و ریف های بعدی فایل
                  قابل مشاهده نیست
                </Typography>
              </InfoCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Start Draft Modal */}
      <DraftModal
        open={draftModal}
        setOpen={setDraftModal}
        onClose={() => setDraftModal(false)}
      />
      {/* End Draft Modal */}
    </div>
  );
}

export default P2PSend;
