// components
import { ReturnedChargeTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import ReportsIcon from '@material-ui/icons/AssessmentOutlined';

/**
 * @component ReturnedCharges
 */
function ReturnedCharges() {
  return (
    <PageWithTitle title="گزارش ها" contentTitle="لیست شارژ برگشتی" icon={ReportsIcon}>
      <ReturnedChargeTable />
    </PageWithTitle>
  );
}

export default ReturnedCharges;
