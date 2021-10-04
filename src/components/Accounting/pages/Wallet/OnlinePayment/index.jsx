import { makeStyles } from '@material-ui/core/styles';

// components
import { Inventory } from '../../../components';
import SimpleTable from 'components/shared/SimpleTable';
import Typography from 'components/shared/Typography';
import Notification from 'components/shared/Notification';
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';

// icons
import WalletIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';

// constants
import { SPACING, SPACING_HALF, SPACING_THIRD } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(SPACING_HALF),
    marginBottom: theme.spacing(SPACING_HALF),
  },
  paymentMethod: {
    marginTop: theme.spacing(SPACING_HALF),
    padding: theme.spacing(SPACING_HALF),
  },
  paymentMethodTitle: {
    padding: theme.spacing(SPACING_HALF),
  },
  paymentMethodItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(SPACING_THIRD),
  },
  tableTitle: {
    padding: theme.spacing(SPACING_HALF),
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(SPACING_HALF),
  },
  paper: {
    border: '1px solid #dddd',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: 0,
  },
}));

/**
 * @component OnlinePayment
 */
function OnlinePayment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={SPACING_HALF}>
        <Grid xs={12} md={6} item>
          <Grid container spacing={SPACING}>
            <Grid item xs={12}>
              <Inventory
                icon={WalletIcon}
                currentTitle="موجودی فعلی کیف پول شما"
                currentCredit="2500000"
                afterTitle="موجودی کیف پول شما بعد از تبدیل"
                afterCredit="3500000"
              />
            </Grid>
            <Grid item xs={12}>
              <Notification
                normalText
                type="info"
                variant="outlined"
                primaryText="لطفا مبلغ شارژ را به ریال وارد کنید"
              />
            </Grid>
            <Grid item xs={12}>
              <Input fullWidth name="amount" label="ورود مبلغ" />
            </Grid>
            <Grid item xs={12}>
              <Paper variant="outlined">
                <div className={classes.paymentMethodTitle}>
                  <Typography color="textSecondary">روش پرداخت مالیات</Typography>
                </div>

                <Divider variant="fullWidth" />

                <div className={classes.paymentMethod}>
                  <RadioGroup row>
                    <div className={classes.paymentMethodItem}>
                      <FormControlLabel value="one" control={<Radio />} />

                      <Typography color="textSecondary">
                        9% به مبلغ پرداختی شما افزوده میشود (شما مبلغ 10090000 ریال به بانک
                        پرداخت کرده و حساب شما به میزان1000000 ریال شارژ میشود)
                      </Typography>
                    </div>
                    <div className={classes.paymentMethodItem}>
                      <FormControlLabel value="two" control={<Radio />} />
                      <Typography color="textSecondary">
                        9% از مبلغ پرداختی شما کسر میشود (شما مبلغ 1000000 ریال به بانک پرداخت
                        کرده و حساب شما به میزان917431 ریال شارژ میشود)
                      </Typography>
                    </div>
                  </RadioGroup>
                </div>
                <Divider className={classes.divider} variant="fullWidth" />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                options={[{ title: 'ملت' }, { title: 'پارسیان' }, { title: 'صادرات' }]}
                defaultValue={{ title: 'ملت' }}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <Input label="درگاه بانک" {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <LoadingButton fullWidth variant="contained" color="success">
                پرداخت
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
          {/* Summary Table */}
          <SimpleTable
            title="جزئیات هزینه ارسال پیامک"
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
    </div>
  );
}

export default OnlinePayment;
