import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// components
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from 'components/shared/Typography';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from 'components/shared/Input';
import Table from 'components/shared/Table';
import LoadingButton from 'components/shared/LoadingButton';
import Box from '@material-ui/core/Box';

// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import UploadIcon from '@material-ui/icons/CloudUploadOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import SuccessIcon from 'components/shared/icons/TaskAlt';
import selfie from 'assets/images/sampleSelfie/selfie.svg';

// fakeData
import groups from './groups.json';

// constants
import { SPACING, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  accordion: {},
  summary: {
    alignItems: 'center',
    display: 'flex',
  },
  accordionContainer: {
    marginBottom: theme.spacing(SPACING),
  },
  heading: {
    color: theme.palette.warning.dark,
  },
  icon: {
    marginRight: theme.spacing(SPACING_HALF),
  },
  button: {
    height: '100%',
  },
  inputContainer: {
    marginBottom: theme.spacing(SPACING),
  },
  success: {
    color: theme.palette.success.main,
  },
  media: {
    height: '100%',
    width: '100%',
    maxHeight: 280,
    maxWidth: 300,
  },
}));

/**
 * @component IdDocUploadForm
 */
function IdDocUploadForm() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(0);

  const onAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : -1);
  };

  return (
    <>
      <div className={classes.accordionContainer}>
        <Accordion
          onChange={onAccordionChange(0)}
          expanded={expanded === 0}
          variant="outlined"
          className={classes.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.summary}>
              <InfoIcon color="inherit" className={classes.icon} />
              <Typography className={classes.heading}>
                آپلود مدارک شناسایی و فعال سازی پنل
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={SPACING_HALF} justify="space-between" alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography locale="en">
                  جهت فعال سازی پنل پیامک ابتدا می بایست مدارک شناسایی خواسته شده در زیر را
                  آپلود کنید دقت فرمایید که عکس سلفی می بایست مطابق تصویر نمومه و به همراه کارت
                  ملی و متن زیر باشد{' '}
                  <Typography color="secondary">
                    "جهت ثبت نام در سامانه پیامک + تاریخ و امضا"
                  </Typography>
                  متن فوق باید با خودکار نوشته شده باشد، بدیعی هست در صورت عدم رعایت موارد
                  خواسته شده مدرک شناسایی تایید نخواهد شد و امکان ارسال پیامک پیامک نخواهید
                  داشت
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img src={selfie} alt="نمونه سلفی" className={classes.media} />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          onChange={onAccordionChange(1)}
          expanded={expanded === 1}
          variant="outlined"
          className={classes.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.summary}>
              <InfoIcon color="inherit" className={classes.icon} />
              <Typography className={classes.heading}>کیفیت تصویر مدارک</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              کلیه مدارک باید رنگی باشد شما می توانید ان ها را اسکن کرده یا با دوربین گوشی عکس
              بگیرید و ارسال نمایید ، اما نکته مهم کیفیت و واضح بودن مدارک است ، در صورت مات
              بودن ، تاریک بودن و نا خوانا بودن مدارک تایید نمی شود
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={onAccordionChange(2)}
          expanded={expanded === 2}
          variant="outlined"
          className={classes.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.summary}>
              <InfoIcon color="inherit" className={classes.icon} />
              <Typography className={classes.heading}>پسوند های قابل قبول</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              برای ارسال مدارک تنها می توانید فایلهایی با پسوند jpeg/ png/ gif ارسال نمایید.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={onAccordionChange(3)}
          expanded={expanded === 3}
          variant="outlined"
          className={classes.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.summary}>
              <InfoIcon color="inherit" className={classes.icon} />
              <Typography className={classes.heading}>احراز هویت</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography locale="en">
              مدارک مورد نیاز برای خرید خط اختصاصی و فعال شدن پنل ارسال پیامک به شرح زیر است :
              <br />
              مدارک مورد نیاز برای افراد حقیقی: تصویر کارت ملی و عکس سلفی به همراه متن دست نویس
              با امضا و تاریخ روز <br />
              مدارک مورد نیاز برای افراد حقوقی: تصویر کارت ملی مدیر عامل و تصویر نامه معرفی به
              همراه مهر و امضا مدیرعامل در سربرگ <br /> مدارک مورد نیاز برای سازمان های خصوصی:
              تصویر کارت ملی مدیر عامل و تصویر آخرین روزنامه رسمی در صورت نداشتن کارت ملی تصویر
              گواهینامه یا پاسپورت قابل قبول است
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={onAccordionChange(4)}
          expanded={expanded === 4}
          variant="outlined"
          className={classes.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.summary}>
              <InfoIcon color="inherit" className={classes.icon} />
              <Typography className={classes.heading}>مراحل کاهش حجم عکس</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              بر روی تصویر مورد نظر خود راست کلیک کرده و از قسمت Open With گزینه مربوط به Paint
              را انتخاب نمایید تا تصویر مورد نظر شما در نرم افزار مذکور بازشود سپس بر روی گزینه
              Resize کلیک نمایید در این بخش ابتدا گزینه Pixel را انتخاب کنید و در قسمت
              Horizonatl مقدار را بر روی 650 قرار دهید و در اخر روی گزینه OK کلیک کنید و جهت
              ذخیره تصویر از منو File بر روی گزینه Save as و گزینه JPEG picture کلیک کنید و
              ادرس مکانی که میخواهید تصویر در انجا ذخیره شود را انتخاب کنید
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Grid
        container
        spacing={SPACING_HALF}
        alignItems="center"
        className={classes.inputContainer}
      >
        <Grid item xs={12} lg={6}>
          <Autocomplete
            options={[
              'تصویر رنگی کارت ملی',
              'احراز هویت سلفی',
              'تصویر رنگی شناسنامه',
              'گواهینامه / پاسپورت',
              'تصویر مجوز  فعالیت / پروانه کسب',
              'تصویر تعهدنامه',
              'نامه معرفی در سربرگ',
              'تصویر روزنامه رسمی',
              'سایر مدارک',
            ]}
            defaultValue="تصویر رنگی کارت ملی"
            disableClearable
            renderInput={(props) => (
              <Input
                variant="outlined"
                label="نوع مدرک"
                InputLabelProps={{
                  shrink: true,
                }}
                {...props}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', lg: 'row' }}
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
          >
            <Box
              mb={{ xs: SPACING_LEAST, lg: 0 }}
              mr={{ xs: 0, lg: SPACING }}
              height={1}
              width={{ xs: '100%', lg: 'auto' }}
            >
              <LoadingButton fullWidth color="primary" variant="contained">
                انتخاب فایل
              </LoadingButton>
            </Box>
            <Box ml={{ xs: 0, lg: SPACING }} height={1} width={{ xs: '100%', lg: 'auto' }}>
              <LoadingButton
                fullWidth
                color="success"
                variant="contained"
                startIcon={<UploadIcon />}
              >
                ارسال فایل
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <div className={classes.tableContainer}>
        <Table
          disableSelect
          disableExport
          columns={[
            {
              field: 'documentType',
              title: 'نوع مدرک',
            },
            {
              field: 'sendDate',
              title: 'تاریخ ارسال',
              render: () => <Typography>1399/10/29 22:45</Typography>,
            },
            {
              field: 'code',
              title: 'کد پیگیری',
              render: (row) => <Typography>{row.code}</Typography>,
            },
            {
              field: 'documentFile',
              title: 'فایل مدرک',
              render: (row) => (
                <Typography component={Link} to="/" color="info">
                  مشاهده
                </Typography>
              ),
            },

            {
              field: 'status',
              title: 'وضعیت',
              render: (row) => row.status && <SuccessIcon className={classes.success} />,
            },

            {
              field: 'description',
              title: 'توضیحات',
            },
          ]}
          data={groups}
          actions={[
            {
              label: 'حذف',
              icon: <DeleteIcon />,
              onClick: () => {},
              enableBulk: true,
            },
          ]}
        />
      </div>
    </>
  );
}

export default IdDocUploadForm;
