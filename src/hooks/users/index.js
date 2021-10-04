import { getAllUsers } from 'api/users';
import { useQuery } from 'react-query';

function useAllUsers() {
  return useQuery('users', getAllUsers);
}

export { useAllUsers };
