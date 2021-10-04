import { makeStyles } from '@material-ui/core/styles';

// components
import PageWithTitle from 'components/shared/PageWithTitle';
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import LoadingButton from 'components/shared/LoadingButton';
import CodeInput from 'components/shared/CodeInput';
import FormGroup from 'components/shared/FormGroup';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Spinner from 'components/shared/Spinner';

// icons
import LinesIcon from '@material-ui/icons/PhoneOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import UpdateIcon from '@material-ui/icons/CreateOutlined';

// constants
import { SPACING, SPACING_HALF, SPACING_LEAST, SPACING_THIRD } from 'constants/spacing';

// fakeData

// hooks
import { useAllOrders } from 'hooks/lineOrder';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: theme.spacing(SPACING_THIRD),
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
    },
  },
  checkButton: {
    marginRight: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      width: '100%',
    },
  },
  orderButton: {
    marginLeft: theme.spacing(SPACING_HALF),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(SPACING_LEAST),
      marginLeft: 0,
      width: '100%',
    },
  },

  summary: {
    alignItems: 'center',
    display: 'flex',
  },
  accordionContainer: {
    marginBottom: theme.spacing(SPACING),
  },
  icon: {
    marginRight: theme.spacing(SPACING_HALF),
    color: theme.palette.warning.dark,
  },

  formInputWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  formInputPlaceholder: {
    paddingLeft: theme.spacing(SPACING_LEAST),
  },
}));

/**
 * @component LineOrder
 */
function LineOrder() {
  const classes = useStyles();

  const { data, isLoading } = useAllOrders();

  if (isLoading) return <Spinner />;

  return (
    <PageWithTitle icon={LinesIcon} title="مدیریت خطوط" contentTitle="سفارش خرید">
      <Grid container spacing={SPACING}>
        <Grid item xs={12}>
          <Typography lineHeight={30} variant="body2">
            جهت خرید خط اختصاصی با قابلیت انتخاب شماره ابتدا شماره مورد نظر خود را جستجو کرده و
            درصورت آزاد بودن بروی گزینه سفارش کلیک کنید و جهت خرید شماره غیر سفارشی روی سفارش
            خط کلیک کنید
          </Typography>
        </Grid>
        <Grid xs={12} lg={6} item>
          <div className={classes.form}>
            <FormGroup title="جستجو شماره">
              <div className={classes.formInputWrapper}>
                <CodeInput noWrap fields="10" />
                <Typography
                  variant="h3"
                  className={classes.formInputPlaceholder}
                  color="textSecondary"
                >
                  21000
                </Typography>
              </div>
            </FormGroup>
            <div className={classes.buttons}>
              <LoadingButton
                className={classes.checkButton}
                variant="contained"
                color="primary"
              >
                استعلام
              </LoadingButton>

              <LoadingButton
                className={classes.orderButton}
                variant="contained"
                color="success"
              >
                سفارش خط
              </LoadingButton>
            </div>
          </div>
        </Grid>
        <Grid xs={12} lg={6} item>
          <div className={classes.form}>
            <FormGroup title="جستجو شماره">
              <div className={classes.formInputWrapper}>
                <CodeInput noWrap fields="10" value="0123456789" />
                <Typography
                  variant="h3"
                  className={classes.formInputPlaceholder}
                  color="textSecondary"
                >
                  1000
                </Typography>
              </div>
            </FormGroup>{' '}
            <div className={classes.buttons}>
              <LoadingButton
                className={classes.checkButton}
                variant="contained"
                color="primary"
              >
                استعلام
              </LoadingButton>

              <LoadingButton
                className={classes.orderButton}
                variant="contained"
                color="success"
              >
                سفارش خط
              </LoadingButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Accordion variant="outlined" className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.summary}>
                <InfoIcon color="inherit" className={classes.icon} />
                <Typography color="warning.dark">مشاهده قیمت خطوط 1000</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                جهت خرید خط اختصاصی با قابلیت انتخاب شماره ابتدا شماره مورد نظر خود را جستجو
                کرده و درصورت آزاد بودن بروی گزینه سفارش کلیک کنید و جهت خرید شماره غیر سفارشی
                روی سفارش خط کلیک کنید{' '}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion variant="outlined" className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.summary}>
                <InfoIcon color="inherit" className={classes.icon} />
                <Typography color="warning.dark">مشاهده قیمت خطوط 02</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                جهت خرید خط اختصاصی با قابلیت انتخاب شماره ابتدا شماره مورد نظر خود را جستجو
                کرده و درصورت آزاد بودن بروی گزینه سفارش کلیک کنید و جهت خرید شماره غیر سفارشی
                روی سفارش خط کلیک کنید
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Table
            disableSearch
            disableExport
            disablePagination
            disableSelect
            maxHeight={400}
            columns={[
              {
                field: 'phoneNumber',
                title: 'شماره خط',
                render: (row) => <Typography>{row.phoneNumber}</Typography>,
              },
              {
                field: 'preNumber',
                title: 'پیش شماره',
                render: (row) => <Typography>{row.preNumber}</Typography>,
              },

              {
                field: 'numLength',
                title: 'تعداد ارقام',
                render: (row) => `نامشخص`,
              },
              {
                field: 'lineType',
                title: 'نوع خط',
                render: (row) => `نامشخص`,
              },
              {
                field: 'validityDays',
                title: 'اعتبار زمان',
                render: (row) => <Typography>{row.validityDays}</Typography>,
              },
              {
                field: 'price',
                title: 'قیمت خط',
                render: (row) => (
                  <Typography withRials useComma>
                    {row.price}
                  </Typography>
                ),
              },
              {
                field: 'renewPrice',
                title: 'تمدید سالانه',
                render: (row) => (
                  <Typography withRials useComma>
                    {row.renewPrice}
                  </Typography>
                ),
              },
              {
                field: 'createdAt',
                title: 'تاریخ درخواست',
                render: (row) => (
                  <Typography>
                    {new Date(row.createdAt).toLocaleDateString('fa-IR')}
                  </Typography>
                ),
              },
              {
                field: 'status',
                title: 'وضعیت',
              },
              {
                field: 'description',
                title: 'توضیحات',
              },
            ]}
            data={data?.data?.docs}
            actions={[
              {
                label: 'ویرایش',
                icon: <UpdateIcon />,
                onClick: () => {},
              },
              {
                label: 'حذف',
                icon: <DeleteIcon />,
                onClick: () => {},
              },
            ]}
          />
        </Grid>
      </Grid>
    </PageWithTitle>
  );
}

export default LineOrder;
