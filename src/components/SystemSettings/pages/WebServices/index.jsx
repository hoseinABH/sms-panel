// components
import PageWithTab from 'components/shared/PageWithTab';
import WebServiceRoute from './WebServiceRoute';
import WebServicesList from './WebServicesList';
import WebServiceLines from './WebServiceLines';

// icons
import SystemSettings from '@material-ui/icons/SettingsOutlined';

/**
 * @component WebServices
 */
function WebServices() {
  return (
    <PageWithTab
      title="تنظیمات سیستم"
      icon={SystemSettings}
      pages={[
        {
          title: 'مسیر وبسرویس',
          content: <WebServiceRoute />,
        },
        {
          title: 'وبسرویس ها',
          content: <WebServicesList />,
        },
        {
          title: 'خطوط وبسرویس',
          content: <WebServiceLines />,
        },
      ]}
    />
  );
}

export default WebServices;
