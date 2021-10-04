// components
import { IdDocUploadForm } from '../../components';
import PageWithTitle from 'components/shared/PageWithTitle';
import Notification from 'components/shared/Notification';

// icons
import AccountIcon from '@material-ui/icons/AccountBoxOutlined';

/**
 * @component ProfileAuth
 */
function ProfileAuth() {
  return (
    <PageWithTitle title="احراز هویت" icon={AccountIcon} contentTitle="احراز هویت">
      <IdDocUploadForm />
      <Notification
        normalText
        type="error"
        variant="outlined"
        primaryText="مدارک تایید شده قابل حذف نیستند و فقط مدارک تایید نشده امکان حذف و بارگزاری مجدد دارند"
      />
    </PageWithTitle>
  );
}

export default ProfileAuth;
