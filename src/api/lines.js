import axios from 'lib/axios';

export const getAllLines = async () => {
  const { data } = await axios.get('/lines');
  return data;
};

export const getLineById = async (id) => {
  const { data } = await axios.get(`/lines/${id}`);
  return data;
};

export const createLine = async (line) => {
  const { data } = await axios.post('/lines', line);
  return data;
};

export const updateLine = async (id, newLine) => {
  const { data } = await axios.put(`/lines/${id}`, newLine);
  return data;
};

export const deleteLine = async (id) => {
  const { data } = await axios.put(`/lines/${id}`);
  return data;
};
