import { aboutDetailApi } from '../../api/menu/aboutDetailApi';
import { ABOUT_DETAIL_REQUEST, ABOUT_DETAIL_SUCCESS, ABOUT_DETAIL_FAILURE } from '../types';

export const getAboutRequest = () => ({
    type: ABOUT_DETAIL_REQUEST,
});
  
export const getAboutSuccess = (pageData) => ({
    type: ABOUT_DETAIL_SUCCESS,
    payload: pageData,
});
  
export const getAboutFailure = (error) => ({
    type: ABOUT_DETAIL_FAILURE,
    payload: error,
});
  
export const getAboutDetail = (formData) => {
    return dispatch => {
      dispatch(getAboutRequest());
      aboutDetailApi(formData)
        .then((response) => {
            if(response.data.status === true) {
                dispatch(getAboutSuccess(response.data.data)); 
            } else {
                dispatch(getAboutFailure(response.data.message));
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch(getAboutFailure(error.data.message));
        });
    };
};
  