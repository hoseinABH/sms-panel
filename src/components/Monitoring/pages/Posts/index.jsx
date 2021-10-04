// components
import PageWithTab from 'components/shared/PageWithTab';
import PostsList from './PostsList';

// icons
import ComputerIcon from '@material-ui/icons/ComputerRounded';

/**
 * @component MonitoringPosts
 */

function MonitoringPosts() {
  return (
    <PageWithTab
      title="مانیتورینگ"
      icon={ComputerIcon}
      pages={[
        {
          title: 'لیست ارسال ها',
          content: <PostsList />,
        },
        {
          title: 'ارسال وبسرویس خدماتی',
          disabled: true,
        },
      ]}
    />
  );
}

export default MonitoringPosts;
