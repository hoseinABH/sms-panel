import axios from 'lib/axios';

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const getContactById = async (id) => {
  const { data } = await axios.get(`/contacts/${id}`);
  return data;
};

export const createContact = async (contact) => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const updateContact = async (id, newContact) => {
  const { data } = await axios.put(`/contacts/${id}`, newContact);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await axios.put(`/contacts/${id}`);
  return data;
};
