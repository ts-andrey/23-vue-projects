export const checkAuth = data => {
  if (data.password === 'adminPassword' && data.user === 'admin') {
    return true;
  }
  return false;
};
