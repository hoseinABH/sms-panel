// components
import { TransactionsTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import AccountingIcon from '@material-ui/icons/LocalAtmOutlined';

/**
 * @component Transactions
 */
function Transactions() {
  return (
    <PageWithTitle title="مدیریت مالی" contentTitle="تراکنش های حساب" icon={AccountingIcon}>
      <TransactionsTable />
    </PageWithTitle>
  );
}

export default Transactions;
