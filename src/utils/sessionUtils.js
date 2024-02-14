export const checkUserSession = (dispatch) => {
  const userData = sessionStorage.getItem('userData');
  if (userData) {
    const parsedData = JSON.parse(userData);
    const expirationTime = parsedData.expirationTime;
    const currentTime = Date.now();

    if (currentTime < expirationTime) {
      //dispatch(loginSuccess(parsedData));
      return true; // User session is valid
    } else {
     // sessionStorage.removeItem('userData');
      return false; // User session has expired
    }
  }

  return false; // No user session found
};
