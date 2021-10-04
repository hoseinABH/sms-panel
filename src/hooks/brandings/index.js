import { getBrandingInfo } from 'api/branding';
import { useQuery } from 'react-query';

function useBrading() {
  return useQuery('brandings', getBrandingInfo);
}

export { useBrading };
