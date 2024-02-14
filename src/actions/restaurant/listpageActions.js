import { listpageApi } from "../../api/restaurant/listpageApi";
import {
  RESTAURANT_PAGE_REQUEST,
  RESTAURANT_PAGE_SUCCESS,
  RESTAURANT_PAGE_FAILURE,
  CLEAR_PAGE_DATA
} from "../types";

export const getListPageRequest = () => ({
  type: RESTAURANT_PAGE_REQUEST,
});

export const getListPageSuccess = (pageData) => ({
  type: RESTAURANT_PAGE_SUCCESS,
  payload: pageData,
});
export const getListPageFailure = (error) => ({
  type: RESTAURANT_PAGE_FAILURE,
  payload: error,
});
export const getListPageClear = () => ({
  type: CLEAR_PAGE_DATA,
});

export const getListpage = (formData) => {
  return (dispatch) => {
    dispatch(getListPageRequest());

    listpageApi(formData)
      .then((response) => {
        if (response.data.status === true) {
          dispatch(getListPageSuccess(response.data.data));
        } else {
          dispatch(getListPageFailure(response.data.message));
        }
      })
      .catch((error) => {
        dispatch(getListPageFailure(error.message));
      });
  };
};
