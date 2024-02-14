import { RESELLER_REQUEST, RESELLER_SUCCESS, RESELLER_FAILURE } from "../types";
import { getresellerApi } from "../../api/static/resellerapi";

export const getresellerRequest = () => ({
  type: RESELLER_REQUEST,
});

export const getresellerSuccess = (homepage) => ({
  type: RESELLER_SUCCESS,
  payload: homepage,
});

export const getresellerFailure = (error) => ({
  type: RESELLER_FAILURE,
  payload: error,
});

export const getreseller = (formData) => {
  return (dispatch) => {
    dispatch(getresellerRequest());
    getresellerApi(formData)
      .then((response) => {
        console.log(response.data);
        dispatch(getresellerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getresellerFailure(error.message));
      });
  };
};
