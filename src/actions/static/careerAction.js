import { careerApi } from "../../api/static/careerapi";

import { CAREER_REQUEST, CAREER_SUCCESS, CAREER_FAILURE } from "../types";

export const careerRequest = () => ({
  type: CAREER_REQUEST,
});

export const careerSuccess = (formData) => ({
  type: CAREER_SUCCESS,
  payload: formData,
});

export const careerFailue = (error) => ({
  type: CAREER_FAILURE,
  payload: error,
});

export const careerAction = (formData) => {
  return (dispatch) => {
    dispatch(careerRequest());

    careerApi(formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          dispatch(careerSuccess(response.data.data));
        } else {
          dispatch(careerFailue(response.data.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(careerFailue(error.message));
      });
  };
};
