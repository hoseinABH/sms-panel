import { addCommas } from 'persian-tools2';

import { toFarsiNumber } from 'utils';

// components
import Table from 'components/shared/Table';

// fakeData
import data from './data.json';

/**
 * @component LastReturnedChargesTable
 */
function LastReturnedChargesTable() {
  return (
    <Table
      disablePagination
      disableExport
      disableSelect
      disableFilter
      title="آخرین شارژهای برگشتی"
      columns={[
        {
          field: 'messageCount',
          title: 'تعداد پیامک',
          render: (row) => toFarsiNumber(row.messageCount),
        },
        {
          field: 'pageCount',
          title: 'تعداد صفحات / پارت',
          render: (row) => `${toFarsiNumber(row.pageCount)} صفحه ای`,
        },

        {
          field: 'sendNumber',
          title: 'شناسه ارسال',
          render: (row) => toFarsiNumber(row.sendNumber),
        },
        { field: 'sendType', title: 'نوع ارسال' },
        {
          field: 'returnedAmount',
          title: 'مبلغ برگشتی',
          render: (row) => `${toFarsiNumber(addCommas(row.returnedAmount))} ريال`,
        },
        {
          field: 'date',
          title: 'تاریخ',
          render: (row) => `${toFarsiNumber(new Date().toLocaleDateString('fa-IR'))}`,
        },
        {
          field: 'time',
          title: 'ساعت',
          render: (row) => `${toFarsiNumber(row.time)}`,
        },
      ]}
      data={data}
    />
  );
}

export default LastReturnedChargesTable;
