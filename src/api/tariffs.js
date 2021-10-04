import axios from 'lib/axios';

export const getAllTariffs = async () => {
  const { data } = await axios.get('/tariffs');
  return data;
};

export const getTariffById = async (id) => {
  const { data } = await axios.get(`/tariffs/${id}`);
  return data;
};

export const createTariff = async (tariff) => {
  const { data } = await axios.post('/tariffs', tariff);
  return data;
};

export const updateTariff = async (id, newTariff) => {
  const { data } = await axios.put(`/tariffs/${id}`, newTariff);
  return data;
};

export const deleteTariff = async (id) => {
  const { data } = await axios.put(`/tariffs/${id}`);
  return data;
};
