import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import PageWithTitle from 'components/shared/PageWithTitle';
import RichEditor from 'components/shared/RichEditor';
import Typography from 'components/shared/Typography';
import LoadingButton from 'components/shared/LoadingButton';
import Input from 'components/shared/Input';
import Accordion from '@material-ui/core/Accordion';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

// icons
import SystemSettings from '@material-ui/icons/SettingsOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/EditOutlined';
import UploadIcon from '@material-ui/icons/CloudUploadOutlined';
import ClearIcon from '@material-ui/icons/Clear';
// constants
import { SPACING_THIRD, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

// fakse assets
import logo from 'assets/images/logo.png';
import poster from 'assets/images/office.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(SPACING_THIRD),
    paddingBottom: theme.spacing(SPACING_THIRD),
  },
  summary: {
    alignItems: 'center',
    display: 'flex',
  },
  heading: {
    color: theme.palette.warning.dark,
  },
  icon: {
    marginRight: theme.spacing(SPACING_HALF),
    color: theme.palette.warning.dark,
  },
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  saveButton: {
    marginTop: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  swithFormControl: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(SPACING_HALF),
  },
  switch: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  switchLable: {
    width: 230,
  },
  logoImage: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  selectedFilePaper: {
    padding: theme.spacing(SPACING_LEAST / 4),
    backgroundColor: theme.palette.grey[300],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoSection: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      width: '100%',
    },
  },
}));

/**
 * @component Branding
 */
function Branding() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(0);
  const [check, setCheck] = useState(false);
  const [editorCheck, setEditorCheck] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : -1);
  };
  return (
    <PageWithTitle title="تنظیمات سیستم" contentTitle="برندینگ" icon={SystemSettings}>
      <div className={classes.root}>
        <Accordion
          onChange={onAccordionChange(0)}
          expanded={expanded === 0}
          variant="outlined"
          className={classes.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.summary}>
              <EditIcon className={classes.icon} />
              <Typography className={classes.heading}>تنظیمات نام برندینگ</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={SPACING_HALF}>
              <Grid item xs={12} md={6}>
                <Input label="نام برند شما" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  disabled
                  value={'http://sms.sms-bartar.com'}
                  label="آدرس ورود"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>موارد استفاده از برندینگ :</Typography>
                <Typography gutterBottom>-صفحه ورود در قسمت کپی رایت </Typography>
                <Typography gutterBottom>
                  -داخل پنل ، بالای منو سمت راست قسمت خوش آمدگویی به کاربر
                </Typography>
                <Typography gutterBottom>
                  -در تراکنش های مالی زمان ایجاد تغییر در حساب پیامک و کیف پول
                </Typography>
                <Typography gutterBottom>
                  -در زمان ارسال پیامک های سیستمی به کاربران و نمایندگان
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>آدرس ورود کاربران :</Typography>
                <Typography gutterBottom>
                  -آدرس صفحه ورود شما در بالا نمایش داده شده است
                </Typography>
                <Typography gutterBottom>
                  -شما نمیتوانید آدرس را ویرایش کنید ، جهت تغییر آدرس با پشتیبانی تماس بگیرید
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.actions}>
                <LoadingButton
                  className={classes.saveButton}
                  color="success"
                  variant="contained"
                >
                  ذخیره
                </LoadingButton>
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
              <EditIcon className={classes.icon} />
              <Typography className={classes.heading}>لوگو و تصویر صفحه ورود</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              spacing={SPACING_HALF}
              justify="space-between"
              className={classes.logoSection}
              alignItems="center"
            >
              <Grid style={{ width: '100%' }} item xs={12} md={6}>
                <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }}>
                  <Box
                    width={{ xs: 1, lg: 190 }}
                    mb={{ xs: SPACING_HALF, lg: 0 }}
                    mr={{ xs: 0, lg: SPACING_HALF }}
                  >
                    <LoadingButton fullWidth color="primary" variant="contained">
                      انتخاب لوگو
                    </LoadingButton>
                  </Box>
                  <Box width={{ xs: 1, lg: 190 }}>
                    <label htmlFor="upload-file">
                      <input
                        id="btn-upload"
                        name="btn-upload"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={changeHandler}
                      />
                      <LoadingButton
                        component="span"
                        fullWidth
                        startIcon={<UploadIcon />}
                        color="success"
                        variant="contained"
                      >
                        آپلود لوگو
                      </LoadingButton>
                    </label>
                  </Box>
                </Box>
                {selectedFile ? (
                  <Box width={1} marginTop={SPACING_HALF}>
                    <Paper className={classes.selectedFilePaper} variant="outlined">
                      <Box marginLeft={SPACING_LEAST} display="flex" alignItems="center">
                        <Typography
                          style={{ marginLeft: 5 }}
                          color="textSecondary"
                          locale="en"
                        >
                          ({selectedFile.size} kb)
                        </Typography>
                        <Typography>{selectedFile.name}</Typography>
                      </Box>
                      <IconButton onClick={() => setSelectedFile(null)}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </Paper>
                  </Box>
                ) : (
                  <Box marginTop={SPACING_HALF}>
                    <Typography>برای مشاهده جزئیات یک عکس آپلود کنید</Typography>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={classes.logoImage}>
                  <img src={logo} width={95} height={95} alt="logo" />
                </div>
              </Grid>
              <Grid style={{ width: '100%' }} item xs={12} md={6}>
                <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }}>
                  <Box
                    width={{ xs: 1, lg: 190 }}
                    mb={{ xs: SPACING_HALF, lg: 0 }}
                    mr={{ xs: 0, lg: SPACING_HALF }}
                  >
                    <LoadingButton fullWidth color="primary" variant="contained">
                      انتخاب تصویر
                    </LoadingButton>
                  </Box>
                  <Box width={{ xs: 1, lg: 190 }}>
                    <label htmlFor="btn-upload">
                      <input
                        id="btn-upload"
                        name="btn-upload"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={changeHandler}
                      />

                      <LoadingButton
                        component="span"
                        fullWidth
                        startIcon={<UploadIcon />}
                        color="success"
                        variant="contained"
                      >
                        آپلود تصویر
                      </LoadingButton>
                    </label>
                  </Box>
                </Box>
                {selectedFile ? (
                  <Box width={1} marginTop={SPACING_HALF}>
                    <Paper className={classes.selectedFilePaper} variant="outlined">
                      <Box marginLeft={SPACING_LEAST} display="flex" alignItems="center">
                        <Typography
                          style={{ marginLeft: 5 }}
                          color="textSecondary"
                          locale="en"
                        >
                          ({selectedFile.size} kb)
                        </Typography>
                        <Typography>{selectedFile.name}</Typography>
                      </Box>
                      <IconButton onClick={() => setSelectedFile(null)}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </Paper>
                  </Box>
                ) : (
                  <Box marginTop={SPACING_HALF}>
                    <Typography>برای مشاهده جزئیات یک عکس آپلود کنید</Typography>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={classes.logoImage}>
                  <img src={poster} width={360} height={200} alt="poster" />
                </div>
              </Grid>
            </Grid>
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
              <EditIcon className={classes.icon} />
              <Typography className={classes.heading}>منو های بالا در صفحه ورود</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={SPACING_HALF}>
              <Grid item xs={12}>
                <div className={classes.swithFormControl}>
                  <Typography className={classes.switchLable}>
                    ارسال پیامک اعتبار سنجی
                  </Typography>
                  <Switch
                    className={classes.switch}
                    checked={editorCheck}
                    onChange={() => setEditorCheck(!editorCheck)}
                  />
                </div>
                <Fade unmountOnExit appear={false} in={editorCheck}>
                  <div>
                    <RichEditor />
                    <div className={classes.actions}>
                      <LoadingButton
                        className={classes.saveButton}
                        variant="contained"
                        color="success"
                      >
                        ذخیره
                      </LoadingButton>
                    </div>
                  </div>
                </Fade>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.swithFormControl}>
                  <Typography className={classes.switchLable}>منو تعرفه شارژ پیامک</Typography>
                  <Switch
                    className={classes.switch}
                    checked={check}
                    onChange={() => setCheck(!check)}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.swithFormControl}>
                  <Typography className={classes.switchLable}>منو تعرفه خطوط </Typography>
                  <Switch
                    className={classes.switch}
                    checked={check}
                    onChange={() => setCheck(!check)}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.swithFormControl}>
                  <Typography className={classes.switchLable}>منو مایندگی </Typography>
                  <Switch
                    className={classes.switch}
                    checked={check}
                    onChange={() => setCheck(!check)}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.swithFormControl}>
                  <Typography className={classes.switchLable}>منو تماس با ما </Typography>
                  <Switch
                    className={classes.switch}
                    checked={check}
                    onChange={() => setCheck(!check)}
                  />
                </div>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </PageWithTitle>
  );
}

export default Branding;
