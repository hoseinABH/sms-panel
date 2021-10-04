// components
import { P2PSendTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import ReportsIcon from '@material-ui/icons/AssessmentOutlined';

/**
 * @component P2PSendReport
 */
function P2PSendReport() {
  return (
    <PageWithTitle
      title="گزارش ها"
      contentTitle="لیست ارسال های نظیر به نظیر"
      icon={ReportsIcon}
    >
      <P2PSendTable />
    </PageWithTitle>
  );
}

export default P2PSendReport;
