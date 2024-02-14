import { contactlessdinningApi } from "../../api/static/contactlessdinningapi";

import {
  CONTACT_LESS_DINNING_REQUEST,
  CONTACT_LESS_DINNING_SUCCESS,
  CONTACT_LESS_DINNING_FAILURE,
} from "../types";

export const contactlessdinningRequest = () => ({
  type: CONTACT_LESS_DINNING_REQUEST,
});

export const contactlessdinningSuccess = (formData) => ({
  type: CONTACT_LESS_DINNING_SUCCESS,
  payload: formData,
});

export const contactlessdinningFailue = (error) => ({
  type: CONTACT_LESS_DINNING_FAILURE,
  payload: error,
});

export const contactlessdinning = (formData) => {
  return (dispatch) => {
    dispatch(contactlessdinningRequest());

    contactlessdinningApi(formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          dispatch(contactlessdinningSuccess(response.data.data));
        } else {
          dispatch(contactlessdinningFailue(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(contactlessdinningFailue(error.message));
      });
  };
};
