import axios from 'lib/axios';

export const getAllNotifications = async () => {
  const { data } = await axios.get('/notifications');
  return data;
};

export const getNotificationById = async (id) => {
  const { data } = await axios.get(`/notifications/${id}`);
  return data;
};

export const createNotification = async (notification) => {
  const { data } = await axios.post('/notifications', notification);
  return data;
};

export const updateNotification = async (id, newNotification) => {
  const { data } = await axios.post(`/notifications/${id}`, newNotification);
  return data;
};

export const deleteNotification = async (id) => {
  const { data } = await axios.post(`/notifications/${id}`);
  return data;
};

export const getMyNotifications = async () => {
  const { data } = await axios.post('/notifications/my-notifies');
  return data;
};
