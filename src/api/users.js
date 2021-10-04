import axios from 'lib/axios';

// admin requets
export const getAllUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

export const createUser = async (User) => {
  const { data } = await axios.post('/users', User);
  return data;
};

export const updateUser = async (id, newUser) => {
  const { data } = await axios.put(`/users/${id}`, newUser);
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await axios.put(`/users/${id}`);
  return data;
};

// profile
export const getMyProfile = async () => {
  const { data } = await axios.get('users/me');
  return data;
};

export const updateProfile = async (newProfile) => {
  const { data } = await axios.post('/users/update-profile', newProfile);
  return data;
};

export const completeProfile = async (profile) => {
  const { data } = await axios.post('/users/complete-profile', profile);
  return data;
};
