import { makeStyles } from '@material-ui/core/styles';
// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import Box from '@material-ui/core/Box';

// icons
import SuccessIcon from 'components/shared/icons/TaskAlt';
import ErrorIcon from '@material-ui/icons/CancelOutlined';

// fakeData
import payments from './payments.json';

const useStyles = makeStyles((theme) => ({
  success: {
    color: theme.palette.success.main,
  },
  error: {
    color: theme.palette.error.main,
  },
}));

/**
 * @component PaymentsTable
 */
function PaymentsTable() {
  const classes = useStyles();

  return (
    <Table
      tableDescription="لیست پرداخت های صالح زارعی "
      totalDataCount={2000}
      columns={[
        {
          field: 'requestCode',
          title: 'کد درخواست',
          render: (row) => <Typography>{row.requestCode}</Typography>,
        },
        {
          field: 'paymentType',
          title: 'نوع پرداخت',
        },
        {
          field: 'bank',
          title: 'بانک',
        },
        {
          field: 'paymentAmount',
          title: 'مبلغ پرداخت',
          render: (row) => (
            <Typography withRials useComma>
              {row.paymentAmount}
            </Typography>
          ),
        },
        {
          field: 'chargedAmount',
          title: 'مبلغ شارژ شده',
          render: (row) => (
            <Typography withRials useComma>
              {row.chargedAmount}
            </Typography>
          ),
        },
        {
          field: 'fourLastCardNumber',
          title: '4 رقم آخر کارت',
          render: (row) =>
            row.fourLastCardNumber ? <Typography>{row.fourLastCardNumber}</Typography> : `---`,
        },

        {
          field: 'paymentDate',
          title: 'تاریخ پرداخت',
          render: (row) => (
            <Box display="flex">
              <Typography>{new Date().toLocaleTimeString('fa-IR')} </Typography>

              <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>
            </Box>
          ),
        },
        {
          field: 'confirmationDate',
          title: 'تاریخ تایید',
          render: (row) =>
            row.confirmationDate ? (
              <Box display="flex">
                <Typography>{new Date().toLocaleTimeString('fa-IR')} </Typography>
                <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>
              </Box>
            ) : (
              `---`
            ),
        },

        {
          field: 'status',
          title: 'وضعیت',
          render: (row) => {
            return row.status === 'fail' ? (
              <ErrorIcon className={classes.error} />
            ) : (
              <SuccessIcon className={classes.success} />
            );
          },
        },

        {
          field: 'description',
          title: 'توضیحات',
          render: (row) => {
            const desc = row.description.trim();
            return desc.length < 1 ? `-----` : `${desc}`;
          },
        },
      ]}
      data={payments}
    />
  );
}

export default PaymentsTable;
