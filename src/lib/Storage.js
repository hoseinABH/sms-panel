import Cookies from 'universal-cookie';

/**
 * @function setItem stores data in Storage with expire date
 * @param key stored data key
 * @param value value to store
 * @param expire expire data can be undefined to not set expire data
 */
export const setItem = (key, value, expire) => {
  if (expire) {
    const now = Date.now();
    const expiresIn = now + expire * 1000;
    localStorage.setItem(`${key}_expiresIn`, expiresIn.toString());
  }
  localStorage.setItem(key, value);
};

/**
 * @function getItem checks if data has expire data if true and has passed that time will remove all data otherwise return data
 * @param key sotred data key
 */
export const getItem = (key) => {
  const expiresIn = localStorage.getItem(`${key}_expiresIn`);
  if (expiresIn) {
    const now = Date.now();

    if (Number(expiresIn) > now) {
      // expired
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}_expiresIn`);

      return;
    } else {
      return localStorage.getItem(key);
    }
  } else {
    return localStorage.getItem(key);
  }
};

export const setAuthCookie = (authTokens) => {
  const cookies = new Cookies();
  cookies.set('authTokens', JSON.stringify(authTokens), {
    path: '/',
    maxAge: 10000000000000,
    sameSite: true,
  });
};

export const removeAuthCookie = () => {
  const cookies = new Cookies();
  cookies.remove('authTokens', { path: '/' });
};

export const getAuthCookie = () => {
  const cookies = new Cookies();
  return cookies.get('authTokens');
};

export const setConsentCookie = (value) => {
  const cookies = new Cookies();
  return cookies.set('consent', value.toString(), {
    path: '/',
    maxAge: 1000 * 3600 * 24 * 30 * 2, // 2 months
    sameSite: true,
  });
};

export const getConsentCookie = () => {
  const cookies = new Cookies();
  return cookies.get('consent') === 'true';
};
