import axios from 'lib/axios';

export const getAllDrafts = async () => {
  const { data } = await axios.get('/drafts');
  return data;
};

export const getDraftById = async (id) => {
  const { data } = await axios.get(`/drafts/${id}`);
  return data;
};

export const createDraft = async (draft) => {
  const { data } = await axios.post('/drafts', draft);
  return data;
};

export const updateDraft = async (id, newDraft) => {
  const { data } = await axios.put(`/drafts/${id}`, newDraft);
  return data;
};

export const deleteDraft = async (id) => {
  const { data } = await axios.put(`/drafts/${id}`);
  return data;
};
