import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import Table from 'components/shared/Table';
import SimpleTable from 'components/shared/SimpleTable';
import Typography from 'components/shared/Typography';
import Notification from 'components/shared/Notification';
import Input from 'components/shared/Input';
import LoadingButton from 'components/shared/LoadingButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from '@material-ui/pickers';

// icons
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';

// constants
import { SPACING, SPACING_HALF } from 'constants/spacing';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(SPACING_HALF),
    marginBottom: theme.spacing(SPACING_HALF),
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

const testData1 = [
  {
    id: 0,
    bankName: 'ملت',
    owner: 'حسین حاصلی',
    accountNumber: 4533050660,
    cardNumber: 6104337833786104,
    shabaNumber: 'IR040610000000704533050661',
  },
  {
    id: 1,
    bankName: 'پارسیان',
    owner: 'حسین حاصلی',
    accountNumber: 4533050660,
    cardNumber: 6104337833786104,
    shabaNumber: 'IR040610000000704533050661',
  },
];

/**
 * @component DepositSlip
 */
function DepositSlip() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={classes.root}>
      <Grid container spacing={SPACING_HALF}>
        <Grid xs={12} item>
          <Table
            disablePagination
            disableExport
            disableSelect
            title="آخرین شارژهای برگشتی"
            columns={[
              {
                field: 'bankName',
                title: 'نام بانک',
              },
              { field: 'owner', title: 'صاحب حساب' },

              {
                field: 'accountNumber',
                title: 'شماره حساب',
                render: (row) => <Typography>{row.accountNumber}</Typography>,
              },
              {
                field: 'cardNumber',
                title: 'شماره کارت',
                render: (row) => <Typography>{row.cardNumber}</Typography>,
              },
              {
                field: 'shabaNumber',
                title: 'شماره شبا',
                render: (row) => <Typography>{row.shabaNumber}</Typography>,
              },
            ]}
            data={testData1}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Grid container spacing={SPACING}>
            <Grid item xs={12}>
              <Notification
                normalText
                type="info"
                variant="outlined"
                primaryText="لطفا مبلغ شارژ را به ریال وارد کنید"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                options={[{ title: 'بانک ملت-حساب 4533050660-کارت 6104337833786104' }]}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <Input label="نام بانک" {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <Input fullWidth name="amount" label="واریزی مبلغ" />
            </Grid>
            <Grid item xs={12}>
              <Input fullWidth name="trackingCode" label="کد پیگیری" />
            </Grid>
            <Grid item xs={12}>
              <Input
                fullWidth
                placeholder="درصورتی که کارت به کارت انجام داده اید، پر شود"
                name="cardLastNumber"
                label="4 رقم آخر کارت"
              />
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                DialogProps={{
                  disablePortal: true,
                }}
                label="تاریخ واریز"
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
              <Input
                label="توضیحات"
                name="description"
                variant="outlined"
                multiline
                rows={5}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <LoadingButton fullWidth variant="contained" color="success">
                ثبت فیش
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={6} item>
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
    </div>
  );
}

export default DepositSlip;
