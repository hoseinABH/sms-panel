import { addCommas } from 'persian-tools2';

// components
import Table from 'components/shared/Table';
import Typography from 'components/shared/Typography';

// fakeData
import data from './data.json';

/**
 * @component ReturnedChargeTable
 */
function ReturnedChargeTable() {
  return (
    <Table
      title="آخرین شارژهای برگشتی"
      tableDescription="لیست شارژ های برگشتی صالح زارعی [2000]"
      columns={[
        {
          field: 'messageCount',
          title: 'تعداد پیامک',
          render: (row) => <Typography>{row.messageCount}</Typography>,
        },
        {
          field: 'pageCount',
          title: 'تعداد صفحات / پارت',
          render: (row) => <Typography>{row.pageCount} صفحه ای</Typography>,
        },

        {
          field: 'sendNumber',
          title: 'شناسه ارسال',
          render: (row) => <Typography>{row.sendNumber}</Typography>,
        },

        { field: 'sendType', title: 'نوع ارسال' },
        {
          field: 'returnedAmount',
          title: 'مبلغ برگشتی',
          render: (row) => <Typography>{addCommas(row.returnedAmount)} ریال</Typography>,
        },
        {
          field: 'date',
          title: 'تاریخ',
          render: (row) => <Typography>{new Date().toLocaleDateString('fa-IR')}</Typography>,
        },
        {
          field: 'time',
          title: 'ساعت',
          render: (row) => <Typography>{new Date().toLocaleTimeString('fa-IR')}</Typography>,
        },
      ]}
      data={data}
    />
  );
}

export default ReturnedChargeTable;
