// components
import { ContactTable } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';

// icons
import ContactIcon from '@material-ui/icons/ContactPhoneOutlined';

/**
 * @component ContactList
 */
function ContactList() {
  return (
    <PageWithTitle title="مخاطبین" contentTitle="لیست مخاطبین " icon={ContactIcon}>
      <ContactTable />
    </PageWithTitle>
  );
}

export default ContactList;
