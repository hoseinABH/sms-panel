import { getAllTariffs } from 'api/tariffs';
import { useQuery } from 'react-query';

function useAllTariffs() {
  return useQuery('tariffs', getAllTariffs);
}

export { useAllTariffs };
