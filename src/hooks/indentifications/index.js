import { getMyDocs, getAllDocs } from 'api/identifications';
import { useQuery } from 'react-query';

// admin
function useAllDocs() {
  return useQuery('docs', getAllDocs);
}

function useMyDocs() {
  return useQuery('mydocs', getMyDocs);
}

export { useMyDocs, useAllDocs };
