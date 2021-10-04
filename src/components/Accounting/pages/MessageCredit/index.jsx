import { makeStyles } from '@material-ui/core/styles';
import { addCommas } from 'persian-tools2';
// components
import { Inventory } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import Notification from 'components/shared/Notification';
import SimpleTable from 'components/shared/SimpleTable';
import Typography from 'components/shared/Typography';
import LoadingButton from 'components/shared/LoadingButton';
import Input from 'components/shared/Input';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// icons
import AccountingIcon from '@material-ui/icons/LocalAtmOutlined';
import WalletIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import MessageIcon from '@material-ui/icons/MailOutlineOutlined';

// constants
import { SPACING, SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(SPACING_HALF),
  },
  creditSection: {
    marginTop: theme.spacing(SPACING),
    marginBottom: theme.spacing(SPACING),
  },
  spacing: {
    marginBottom: theme.spacing(SPACING),
  },

  tableTitle: {
    padding: theme.spacing(SPACING_LEAST - 2),
    display: 'flex',
  },

  paper: {
    border: '1px solid #dddd',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: 0,
    padding: theme.spacing(SPACING_HALF),
  },
}));
const testData = [
  {
    id: 0,
    sendType: 'ارسال 1000',
    mciFa: 170,
    mciEn: 220,
    mtnFa: 185,
    mtnEn: 230,
    otherFa: 220,
    otherEn: 280,
  },
  {
    id: 1,
    sendType: 'ارسال 02',
    mciFa: 170,
    mciEn: 220,
    mtnFa: 185,
    mtnEn: 230,
    otherFa: 220,
    otherEn: 280,
  },
  {
    id: 2,
    sendType: 'وبسرویس خدماتی',
    mciFa: 170,
    mciEn: 220,
    mtnFa: 185,
    mtnEn: 230,
    otherFa: 220,
    otherEn: 280,
  },
];

/**
 * @component MessageCredit
 */
function MessageCredit() {
  const classes = useStyles();

  return (
    <PageWithTitle title="مدیریت مالی" contentTitle="شارژ اعتبار پیامک" icon={AccountingIcon}>
      <Paper elevation={0} className={classes.paper}>
        <Typography align="center"> جدول تعرفه هر پیامک بر اساس اپراتور</Typography>
      </Paper>
      <SimpleTable
        title="پکیج شما (کاربر شرکتی)"
        titleAlign="center"
        columns={[
          {
            field: 'sendType',
            title: 'نوع ارسال',
            render: (row) => <Typography>{row.sendType}</Typography>,
          },
          {
            field: 'mciFa',
            title: 'همراه اول فارسی',
            render: (row) => <Typography>{addCommas(row.mciFa)} ريال</Typography>,
          },
          {
            field: 'mciEn',
            title: 'همراه اول انگلیسی',
            render: (row) => <Typography>{addCommas(row.mciEn)} ريال</Typography>,
          },
          {
            field: 'mtnFa',
            title: 'ایرانسل فارسی',
            render: (row) => <Typography>{addCommas(row.mtnFa)} ريال</Typography>,
          },
          {
            field: 'mtnEn',
            title: 'ایرانسل انگلیسی',
            render: (row) => <Typography>{addCommas(row.mtnEn)} ريال</Typography>,
          },
          {
            field: 'otherFa',
            title: 'سایر خطوط فارسی',
            render: (row) => <Typography>{addCommas(row.otherFa)} ريال</Typography>,
          },
          {
            field: 'otherEn',
            title: 'سایر خطوط انگلیسی',
            render: (row) => <Typography>{addCommas(row.otherEn)} ريال</Typography>,
          },
        ]}
        data={testData}
      />
      <Grid container spacing={SPACING_HALF} className={classes.creditSection}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={SPACING}>
            <Grid item xs={12}>
              <Inventory
                icon={WalletIcon}
                currentTitle="موجودی فعلی کیف پول شما"
                currentCredit="2500000"
                afterTitle="موجودی کیف پول شما بعد از تبدیل"
                afterCredit="1500000"
              />
            </Grid>
            <Grid item xs={12}>
              <Inventory
                icon={MessageIcon}
                currentTitle="موجودی فعلی پیامک شما"
                currentCredit="1500000"
                afterTitle="موجودی پیامک شما بعد از تبدیل"
                afterCredit="2500000"
              />
            </Grid>
            <Grid item xs={12}>
              <Notification
                normalText
                type="info"
                variant="outlined"
                primaryText="جهت تبدیل اعتبار کیف پول به اعتبار پیامک ، مبلغ را وارد نمایید"
              />
            </Grid>
            <Grid item xs={12}>
              <Input placeholder="10000000 ريال" fullWidth name="amount" label="ورود مبلغ" />
            </Grid>
            <Grid item xs={12} md={7} lg={5} className={classes.spacing}>
              <LoadingButton fullWidth variant="contained" color="success">
                تبدیل اعتبار
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <div className={classes.tableTitle}>
              <CartIcon className={classes.icon} />
              <Typography>جزئیات تعرفه پکیج پیامکی شما </Typography>
            </div>
          </Paper>
          <SimpleTable
            title="پکیج شما (کاربر شرکتی)"
            titleAlign="center"
            columns={[
              {
                field: 'operator',
                title: 'اپراتور',
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
            ]}
          />
        </Grid>
      </Grid>
    </PageWithTitle>
  );
}

export default MessageCredit;
