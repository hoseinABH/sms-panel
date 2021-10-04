import axios from 'lib/axios';

export const getAllGroups = async () => {
  const { data } = await axios.get('/groups');
  return data;
};

export const getGroupById = async (id) => {
  const { data } = await axios.get(`/groups/${id}`);
  return data;
};

export const createGroup = async (group) => {
  const { data } = await axios.post('/groups', group);
  return data;
};

export const updateGroup = async ({ id, ...newGroup }) => {
  const { data } = await axios.patch(`/groups/${id}`, newGroup);
  return data;
};

export const deleteGroup = async (id) => {
  const { data } = await axios.delete(`/groups/${id}`);
  return data;
};
