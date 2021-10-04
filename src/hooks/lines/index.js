import { getAllLines } from 'api/lines';
import { useQuery } from 'react-query';

function useAllLines() {
  return useQuery('lines', getAllLines);
}

export { useAllLines };
