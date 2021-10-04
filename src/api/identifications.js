import axios from 'lib/axios';

// admin

export const getAllDocs = async () => {
  const { data } = await axios.get('/identification-doc/admin-docs');
  return data;
};

// user
export const getMyDocs = async () => {
  const { data } = await axios.get('/identification-doc/my-docs');
  return data;
};

export const uploadNewDoc = async () => {
  const { data } = await axios.post('/identification-doc/upload');
  return data;
};

export const updateDoc = async (id, newDoc) => {
  const { data } = await axios.put(`/identification-doc/${id}`, newDoc);
  return data;
};

export const deleteDoc = async (id) => {
  const { data } = await axios.delete(`/identification-doc/my-docs/${id}`);
  return data;
};
