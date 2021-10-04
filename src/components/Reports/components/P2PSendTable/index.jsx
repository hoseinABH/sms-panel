// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';
import Box from '@material-ui/core/Box';
// icons
import DoneAllIcon from '@material-ui/icons/DoneAll';

// fakeData
import data from './data.json';

/**
 * @component P2PSendTable
 */
function P2PSendTable() {
  return (
    <Table
      tableDescription="لیست پیامک های ارسالی صالح زارعی [2000]"
      columns={[
        {
          field: 'title',
          title: 'عنوان',
        },
        {
          field: 'sender',
          title: 'فرستنده',
          render: (row) => <Typography>{row.sender}</Typography>,
        },

        {
          field: 'count',
          title: 'تعداد',
          render: (row) => <Typography color="info">{row.count}</Typography>,
        },
        {
          field: 'sendNumber',
          title: 'شماره ارسال',
          render: (row) => <Typography>{row.sendNumber}</Typography>,
        },
        {
          field: 'date/time',
          title: 'تاریخ و ساعت',
          render: (row) => <Typography>{new Date().toLocaleString('fa-IR')}</Typography>,
        },
        {
          field: 'status',
          title: 'وضعیت ارسال',
          render: (row) => `${row.status === 'sent' ? 'ارسال شده' : 'در صف ارسال'}`,
        },
        {
          field: 'sendPrice',
          title: 'مبلغ ارسال',
          render: (row) => (
            <Box display="flex" justifyContent="center">
              <Typography color="error.light" useComma>
                {row.sendPrice}
              </Typography>
              <Typography withRials color="error.light">
                -
              </Typography>
            </Box>
          ),
        },
        {
          field: 'returnedPrice',
          title: 'مبلغ برگشتی',
          render: (row) => <Typography useComma>{row.returnedPrice}</Typography>,
        },
        {
          field: 'delivered',
          title: 'رسیده به گوشی',
          render: (row) => <Typography color="info">{row.delivered}</Typography>,
        },
        {
          field: 'notReached',
          title: 'نرسیده به گوشی',
          render: (row) => <Typography color="info">{row.notReached}</Typography>,
        },
        {
          field: 'reachedToTci',
          title: 'رسیده به مخابرات',
          render: (row) => <Typography color="info">{row.reachedToTci}</Typography>,
        },
        {
          field: 'blackList',
          title: 'بلک لیست',
          render: (row) => <Typography color="info">{row.blackList}</Typography>,
        },
      ]}
      data={data}
      actions={[
        {
          label: 'خوانده شده',
          icon: <DoneAllIcon />,
        },
      ]}
    />
  );
}

export default P2PSendTable;
