// components
import PageWithTab from 'components/shared/PageWithTab';

// pages
import UsersList from './UsersList';

// icons
import UsersIcon from '@material-ui/icons/PeopleAltOutlined';

/**
 * @component Users
 */
function Users() {
  return (
    <PageWithTab
      pages={[
        {
          title: 'لیست کاربران',
          content: <UsersList />,
        },
      ]}
      title="مدیریت کاربران"
      icon={UsersIcon}
    />
  );
}

export default Users;
