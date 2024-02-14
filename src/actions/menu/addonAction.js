import { addonDetailApi } from "../../api/menu/addonDetailApi";
import {
  ADDON_DETAIL_REQUEST,
  ADDON_DETAIL_SUCCESS,
  ADDON_DETAIL_FAILURE,
} from "../types";

export const getAddonRequest = () => ({
  type: ADDON_DETAIL_REQUEST,
});

export const getAddonSuccess = (pageData) => ({
  type: ADDON_DETAIL_SUCCESS,
  payload: pageData,
});

export const getAddonFailure = (error) => ({
  type: ADDON_DETAIL_FAILURE,
  payload: error,
});

export const getAddonDetail = (postData) => {
  return (dispatch) => {
    dispatch(getAddonRequest());
    addonDetailApi(postData)
      .then((response) => {
        // console.log(response);
        if (response.data.status === true) {
          // console.log(response.data.message);
          dispatch(getAddonSuccess(response.data.message));
        } else {
          // console.log(response.data.message);
          dispatch(getAddonFailure(response.data.message));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getAddonFailure(error));
      });
  };
};

export const addonDetail = async (formData) => {
  try {
    const response = await addonDetailApi(formData);
    console.log(response.data);
    return response.data; // Assuming the response has a 'data' property
  } catch (error) {
    console.log(error);
    throw error;
  }
};
