import { getAllContacts } from 'api/contacts';
import { useQuery } from 'react-query';

const useAllContacts = () => {
  return useQuery('contacts', getAllContacts);
};

export { useAllContacts };
