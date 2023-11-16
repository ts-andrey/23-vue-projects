const PASS = 'admin';
const USER = 'admin';

export const checkAuth = data => {
  if (data.password === PASS && data.user === USER) {
    return true;
  }
  return false;
};

export const login = data => {
  const isCredentialsValid = checkAuth(data);
  if (isCredentialsValid) {
    const jsonData = JSON.stringify({
      sessionTime: getSessionTime(),
      isLoggedIn: true,
      user: data.user,
    });
    localStorage.setItem('data', jsonData);
    return { loggedIn: true };
  } else {
    throw new Error('Wrong credentials');
  }
};

export const logout = () => {
  localStorage.removeItem('data');
};

export const checkSession = () => {
  const jsonData = localStorage.getItem('data');
  if (jsonData) {
    const data = JSON.parse(jsonData);
    const isSessionValid = checkSessionTime(data.sessionTime);
    if (isSessionValid) {
      return {
        isValid: true,
        data: data,
      };
    }
  }
  return {
    isValid: false,
  };
};

const SESSION_TIME = 3600;

const getSessionTime = () => {
  return getCurrentTime() + SESSION_TIME;
};

const checkSessionTime = time => {
  const curTime = getCurrentTime();
  return time - curTime > 0;
};

const getCurrentTime = () => {
  return Date.now() / 1000;
};
