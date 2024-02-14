// src/actions//myaccount/walletDashboardActions.js
import { getauthApi } from "../../api/login/authApi";
import { getProfileApi } from "../../api/myaccount/profile/getProfileApi";

import { GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, SET_LOGGED_IN } from "../types";

export const loginSuccess = (userData) => {
  // console.log(userData);
  return {
    type: GET_LOGIN_SUCCESS,
    payload: userData,
  };
};

export const setLoggedIn = () => {
  return {
    type: SET_LOGGED_IN,
  };
};

export const loginFailure = (error) => {
  return {
    type: GET_LOGIN_FAILURE,
    payload: error,
  };
};

export const login = (postData) => {
  // console.log(postData);
  return (dispatch) => {
    getauthApi(postData)
      .then((response) => {
        // Set expirationTime to current timestamp + 30 minutes
        const expirationTime = Date.now() + 30 * 60 * 1000;

        // Add expirationTime to the response data
        response.data.expirationTime = expirationTime;

        // Make another API call here
        getProfileApi({ customer_id: response.data.customerId })
          .then((profileresponse) => {
            // Handle the response of the second API call
            response.data.fname = profileresponse.data.data.profile.fname;
            response.data.login_type=0;
            console.log(response.data);
            response.data.lastOrder = profileresponse.data.data.lastOrder;

            dispatch(loginSuccess(response.data));
          })
          .catch((profileError) => {
            // Handle the error of the second API call
            response.data.fname = null;
            if(response?.data?.response_code=="400"){
              dispatch(loginFailure(response.data));

            }
            else{
            dispatch(loginSuccess(response.data));
            }

            // dispatch(anotherFailure(anotherError.message));
          });
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    // Remove user data from sessionStorage
    sessionStorage.removeItem("userData");

    // Dispatch a logout action
    dispatch({ type: "LOGOUT" });
  };
};
