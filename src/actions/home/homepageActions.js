import { getHomepageApi } from "../../api/home/homepageApi";
import {
  GET_HOMEPAGE_REQUEST,
  GET_HOMEPAGE_SUCCESS,
  GET_HOMEPAGE_FAILURE,
} from "../types";

export const getHomepageRequest = () => ({
  type: GET_HOMEPAGE_REQUEST,
});

export const getHomepageSuccess = (homepage) => ({
  type: GET_HOMEPAGE_SUCCESS,
  payload: homepage,
});

export const getHomepageFailure = (error) => ({
  type: GET_HOMEPAGE_FAILURE,
  payload: error,
});

export const getHomepage = () => {
  return (dispatch) => {
    dispatch(getHomepageRequest());
    getHomepageApi()
      .then((response) => {
        dispatch(getHomepageSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getHomepageFailure(error.message));
      });
  };
};
