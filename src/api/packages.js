import axios from 'lib/axios';

export const getAllPackages = async () => {
  const { data } = await axios.get('/packages');
  return data;
};
export const getAllDefaultPackages = async () => {
  const { data } = await axios.get('/default-packages');
  return data;
};

export const getPackageById = async (id) => {
  const { data } = await axios.get(`/packages/${id}`);
  return data;
};

export const createPackage = async (pckg) => {
  const { data } = await axios.post('/packages', pckg);
  return data;
};

export const updatePackage = async (id, newPackage) => {
  const { data } = await axios.put(`/packages/${id}`, newPackage);
  return data;
};

export const deletePackage = async (id) => {
  const { data } = await axios.put(`/packages/${id}`);
  return data;
};
