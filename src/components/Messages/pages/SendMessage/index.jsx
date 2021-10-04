// components
import SendFromFile from './SendFromFile';
import SendToContact from './SendToContact';
import NormalSend from './NormalSend';
import P2PSend from './P2PSend';

import PageWithTab from 'components/shared/PageWithTab';

// icons
import SmsIcon from '@material-ui/icons/Sms';

/**
 * @component SendMessage
 */
function SendMessage() {
  return (
    <PageWithTab
      pages={[
        {
          title: 'ارسال عادی',
          content: <NormalSend />,
        },
        {
          title: 'ارسال به مخاطبین',
          content: <SendToContact />,
        },
        {
          title: 'ارسال از فایل',
          content: <SendFromFile />,
        },
        {
          title: 'ارسال نظیر به نظیر',
          content: <P2PSend />,
        },
        {
          title: 'ارسال برنامه ریزی',
          disabled: true,
        },
        {
          title: 'ارسال هوشمند',
          disabled: true,
        },
      ]}
      title="ارسال پیامک"
      icon={SmsIcon}
    />
  );
}

export default SendMessage;
