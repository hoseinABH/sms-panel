// components
import { NormalSendTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import ReportsIcon from '@material-ui/icons/AssessmentOutlined';

/**
 * @component NormalSendReport
 */
function NormalSendReport() {
  return (
    <PageWithTitle title="گزارش ها" contentTitle="لیست ارسال های عادی" icon={ReportsIcon}>
      <NormalSendTable />
    </PageWithTitle>
  );
}

export default NormalSendReport;
