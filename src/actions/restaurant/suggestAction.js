import { suggestApi } from "../../api/restaurant/suggestApi";
import {
  SUGGEST_RESTAURANT_REQUEST,
  SUGGEST_RESTAURANT_SUCCESS,
  SUGGEST_RESTAURANT_FAILURE,
} from "../types";

export const suggestRestaurantRequest = () => ({
  type: SUGGEST_RESTAURANT_REQUEST,
});

export const suggestRestaurantSuccess = (pageData) => ({
  type: SUGGEST_RESTAURANT_SUCCESS,
  payload: pageData,
});

export const suggestRestaurantFailure = (error) => ({
  type: SUGGEST_RESTAURANT_FAILURE,
  payload: error,
});

export const suggestRestaurant = (formData) => {
  return (dispatch) => {
    dispatch(suggestRestaurantRequest());

    suggestApi(formData)
      .then((response) => {
        if (response.data.response_code === 200) {
          dispatch(suggestRestaurantSuccess(response.data.message));
        } else {
          dispatch(suggestRestaurantFailure(response.data.data));
        }
      })
      .catch((error) => {
        dispatch(suggestRestaurantFailure(error.message));
      });
  };
};
