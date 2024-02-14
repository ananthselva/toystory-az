// src/reducers/myaccount/wallet/savecardReducer.js
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "../../../actions/types";

// Function to store data in local storage or session storage
const storeData = (key, value) => {
  // Use localStorage or sessionStorage based on your preference
  localStorage.setItem(key, JSON.stringify(value));
  // sessionStorage.setItem(key, JSON.stringify(value));
};

// Function to retrieve data from local storage or session storage
const retrieveData = (key) => {
  // Use localStorage or sessionStorage based on your preference
  const value = localStorage.getItem(key);
  // const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const initialState = {
  profile: retrieveData("profile") || null, // Retrieve the initial value from local storage or session storage
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      storeData("profile", action.payload);

      return {
        ...state,
        profile: action.payload,
        error: null,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        profile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
