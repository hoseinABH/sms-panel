import { getAllLineOrders } from 'api/lineOrders';
import { useQuery } from 'react-query';

function useAllOrders() {
  return useQuery('orders', getAllLineOrders);
}

export { useAllOrders };
