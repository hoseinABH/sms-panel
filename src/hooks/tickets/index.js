import { getAllTickets } from 'api/tickets';
import { useQuery } from 'react-query';

function useAllTickets() {
  return useQuery('tickets', getAllTickets);
}

export { useAllTickets };
