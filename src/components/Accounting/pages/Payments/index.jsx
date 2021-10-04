// components
import { PaymentsTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import AccountingIcon from '@material-ui/icons/LocalAtmOutlined';

/**
 * @component Payments
 */
function Payments() {
  return (
    <PageWithTitle title="مدیریت مالی" contentTitle="لیست پرداخت ها" icon={AccountingIcon}>
      <PaymentsTable />
    </PageWithTitle>
  );
}

export default Payments;
