import axios from 'lib/axios';

export const getAllTickets = async () => {
  const { data } = await axios.get('/tickets');
  return data;
};

export const getTicketById = async (id) => {
  const { data } = await axios.get(`/tickets/${id}`);
  return data;
};

export const createTicket = async (ticket) => {
  const { data } = await axios.post('/tickets', ticket);
  return data;
};

export const createNewComment = async (id, comment) => {
  const { data } = await axios.post(`/tickets/${id}/comments`, comment);
  return data;
};
export const replayComment = async (ticketId, commentId, comment) => {
  const { data } = await axios.post(`/tickets/${ticketId}/comments/${commentId}`, comment);
  return data;
};

export const getAllComment = async (id) => {
  const { data } = await axios.post(`/tickets/${id}/comments`);
  return data;
};
