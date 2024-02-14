import { restaurantDetailApi } from '../../api/menu/restaurantDetailApi';
import { RESTAURANT_DETAIL_REQUEST, RESTAURANT_DETAIL_SUCCESS, RESTAURANT_DETAIL_FAILURE } from '../types';

export const getRestaurantRequest = () => ({
    type: RESTAURANT_DETAIL_REQUEST,
});
  
export const getRestaurantSuccess = (pageData) => ({
    type: RESTAURANT_DETAIL_SUCCESS,
    payload: pageData,
});
  
export const getRestaurantFailure = (error) => ({
    type: RESTAURANT_DETAIL_FAILURE,
    payload: error,
});
  
export const getRestaurantDetail = (formData) => {
    return dispatch => {
      dispatch(getRestaurantRequest());
      restaurantDetailApi(formData)
        .then((response) => {
            if(response.data.status === true) {
                dispatch(getRestaurantSuccess(response.data.message)); 
            } else {
                dispatch(getRestaurantFailure(response.data.message));
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch(getRestaurantFailure(error.message));
        });
    };
};
  