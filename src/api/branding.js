import axios from 'lib/axios';

export const getBrandingInfo = async () => {
  const { data } = await axios.get('/brandings/my-branding');
  return data;
};

export const createBranding = async (branding) => {
  const { data } = await axios.post('/brandings', branding);
  return data;
};

export const updateMyBranding = async (newBranding) => {
  const { data } = await axios.post(`/brandings/update-my-branding`, newBranding);
  return data;
};

export const deleteBranding = async (id) => {
  const { data } = await axios.put(`/brandings/${id}`);
  return data;
};

// super admin

export const updateBrandingInfo = async (id, newBranding) => {
  const { data } = await axios.post(`/brandings/${id}`, newBranding);
  return data;
};
