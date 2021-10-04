import axios from 'lib/axios';

export const getAllLineOrders = async () => {
  const { data } = await axios.get('/line-orders');
  return data;
};

export const getLineOrderById = async (id) => {
  const { data } = await axios.get(`/line-orders/${id}`);
  return data;
};

export const createLineOrder = async (lineOrder) => {
  const { data } = await axios.post('/line-orders', lineOrder);
  return data;
};

export const updateLineOrder = async (id, newLineOrder) => {
  const { data } = await axios.put(`/line-orders/${id}`, newLineOrder);
  return data;
};

export const deleteLineOrder = async (id) => {
  const { data } = await axios.put(`/line-orders/${id}`);
  return data;
};
