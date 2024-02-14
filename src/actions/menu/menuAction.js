import { menuDetailApi } from '../../api/menu/menuDetailApi';
import { MENU_DETAIL_REQUEST, MENU_DETAIL_SUCCESS, MENU_DETAIL_FAILURE } from '../types';

export const getMenuRequest = () => ({
    type: MENU_DETAIL_REQUEST,
});
  
export const getMenuSuccess = (pageData) => ({
    type: MENU_DETAIL_SUCCESS,
    payload: pageData,
});
  
export const getMenuFailure = (error) => ({
    type: MENU_DETAIL_FAILURE,
    payload: error,
});
  
export const getMenuDetail = (formData) => {
    return dispatch => {
      dispatch(getMenuRequest());
      menuDetailApi(formData)
        .then((response) => {
            if(response.data.status === true) {
                dispatch(getMenuSuccess(response.data.message)); 
            } else {
                dispatch(getMenuFailure(response.data.message));
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch(getMenuFailure(error.message));
        });
    };
};
  