import { useState } from 'react';

// components
import { AddToContactModal, IncomingMessageTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import ReportsIcon from '@material-ui/icons/AssessmentOutlined';

/**
 * @component IncomingMessageReport
 */
function IncomingMessageReport() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <PageWithTitle title="گزارش ها" contentTitle="لیست پیامک های دریافتی" icon={ReportsIcon}>
      <IncomingMessageTable setOpenModal={setOpenModal} />
      <AddToContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </PageWithTitle>
  );
}

export default IncomingMessageReport;
