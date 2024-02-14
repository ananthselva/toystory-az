import { becomePartnerApi } from "../../api/static/becomepartnerapi";

import {
  BECOMEPARTNER_REQUEST,
  BECOMEPARTNER_SUCCESS,
  BECOMEPARTNER_FAILURE,
} from "../types";

export const becomePartnerRequest = () => ({
  type: BECOMEPARTNER_REQUEST,
});

export const becomePartnerSuccess = (partner) => ({
  type: BECOMEPARTNER_SUCCESS,
  payload: partner,
});

export const becomePartnerFailure = (error) => ({
  type: BECOMEPARTNER_FAILURE,
  payload: error,
});

export const becomePartner = (formData) => {
  return (dispatch) => {
    dispatch(becomePartnerRequest());
    becomePartnerApi(formData)
      .then((response) => {
        console.log(response.data);
        dispatch(becomePartnerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(becomePartnerFailure(error.message));
      });
  };
};
