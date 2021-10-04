import { addCommas } from 'persian-tools2';
// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import Box from '@material-ui/core/Box';
// fakeData
import transactions from './transactions.json';

/**
 * @component TransactionsTable
 */
function TransactionsTable() {
  return (
    <Table
      tableDescription="لیست تراکنش های  صالح زارعی [2000]"
      columns={[
        {
          field: 'typeCode',
          title: 'نوع تراکنش',
          render: (row) => <Typography>{row.typeCode}</Typography>,
        },
        {
          field: 'sendNumber',
          title: 'شناسه ارسال',
          render: (row) => <Typography>{row.sendNumber}</Typography>,
        },
        {
          field: 'datetime',
          title: 'تاریخ/ساعت',
          render: (row) => (
            <Box display="flex">
              <Typography>{new Date().toLocaleTimeString('fa-IR')} </Typography>

              <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>
            </Box>
          ),
        },
        {
          field: 'by',
          title: 'توسط',
        },
        {
          field: 'amount',
          title: 'مبلغ',
          render: (row) => {
            return row.amount < 0 ? (
              <Box display="flex" justifyContent="center">
                <Typography color="error.light">
                  {row.amount.toString().split('-')[1]}
                </Typography>
                <Typography withRials color="error.light">
                  -
                </Typography>
              </Box>
            ) : (
              <Box display="flex" justifyContent="center">
                <Typography color="success">{row.amount}</Typography>
                <Typography withRials color="success">
                  +
                </Typography>
              </Box>
            );
          },
        },
        {
          field: 'remaining',
          title: 'مانده حساب',
          render: (row) => <Typography>{addCommas(row.remaining)}ريال</Typography>,
        },
        {
          field: 'account',
          title: 'حساب',
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
      data={transactions}
    />
  );
}

export default TransactionsTable;
