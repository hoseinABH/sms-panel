import { getAllPackages, getAllDefaultPackages } from 'api/packages';
import { useQuery } from 'react-query';

function useAllPackages() {
  return useQuery('packages', getAllPackages);
}

function useDefaultPackages() {
  return useQuery('default-packages', getAllDefaultPackages);
}

export { useAllPackages, useDefaultPackages };
