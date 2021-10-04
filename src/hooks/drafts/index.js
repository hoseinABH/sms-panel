import { getAllDrafts } from 'api/drafts';
import { useQuery } from 'react-query';

function useAllDrafts() {
  return useQuery('drafts', getAllDrafts);
}

export { useAllDrafts };
