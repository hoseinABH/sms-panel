import axios from 'lib/axios';
import { removeAuthCookie } from 'lib/Storage';

const config = { baseURL: process.env.REACT_APP_BASE_AUTH_API_URL };

export const login = async (username, password) => {
  return await axios.post('/signin', { username, password }, config);
};

export const signUp = async (firstName, lastName, phoneNumber, nationalCode) => {
  return await axios.post(
    '/signup',
    { firstName, lastName, phoneNumber, nationalCode },
    config
  );
};

export const verifyUser = async (verificationCode, phoneNumber) => {
  return await axios.post('/verify-user', { verificationCode, phoneNumber }, config);
};

export const finalRegister = async (username, password) => {
  return await axios.post('/register', { username, password }, config);
};

export const refreshAccessToken = async (refreshToken) => {
  return await axios.post('/refresh-token', { refreshToken }, config);
};

export const verifyAccessToken = async () => {
  return await axios.post('/does-token-expires', null, config);
};

export const forgetPasswrod = async (username, phoneNumber) => {
  return await axios.post('/forgot-password', { username, phoneNumber }, config);
};

export const verifyForgetPassword = async (verificationCode, phoneNumber) => {
  return await axios.post(
    '/verify-forgot-password',
    { verificationCode, phoneNumber },
    config
  );
};
export const resetPassword = async (phoneNumber, password) => {
  return await axios.post('/reset-password', { phoneNumber, password }, config);
};

export const resendCode = async (phoneNumber) => {
  return await axios.post('/resend-verify-code', { phoneNumber }, config);
};

export const logout = () => {
  removeAuthCookie();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};
