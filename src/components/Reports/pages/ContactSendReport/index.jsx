// components
import { ContactSendTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import ReportsIcon from '@material-ui/icons/AssessmentOutlined';

/**
 * @component ContactSendReport
 */
function ContactSendReport() {
  return (
    <PageWithTitle title="گزارش ها" contentTitle="لیست ارسال به مخاطبین" icon={ReportsIcon}>
      <ContactSendTable />
    </PageWithTitle>
  );
}

export default ContactSendReport;
