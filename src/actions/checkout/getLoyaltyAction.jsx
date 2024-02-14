import { getLoyaltyApi } from "../../api/checkout/getLoyaltyPointsApi";
import { GET_LOYALTY_SUCCESS, GET_LOYALTY_FAILURE } from "../types";

export const getLoyaltySuccess = (data) => ({
  type: GET_LOYALTY_SUCCESS,
  payload: data,
});

export const getLoyaltyFailure = (error) => ({
  type: GET_LOYALTY_FAILURE,
  payload: error,
});

export const getLoyaltyPoints = (postData) => {
  return (dispatch) => {
    getLoyaltyApi(postData)
      .then((response) => {
        if (response.data.status === true) {
          dispatch(getLoyaltySuccess(response.data.data));
        } else {
          dispatch(getLoyaltyFailure(response.data.data));
        }
      })
      .catch((error) => {
        dispatch(getLoyaltyFailure(error.message));
      });
  };
};
