import { reviewDetailApi } from '../../api/menu/reviewDetailApi';
import { REVIEW_DETAIL_REQUEST, REVIEW_DETAIL_SUCCESS, REVIEW_DETAIL_FAILURE } from '../types';

export const getReviewRequest = () => ({
    type: REVIEW_DETAIL_REQUEST,
});
  
export const getReviewSuccess = (pageData) => ({
    type: REVIEW_DETAIL_SUCCESS,
    payload: pageData,
});
  
export const getReviewFailure = (error) => ({
    type: REVIEW_DETAIL_FAILURE,
    payload: error,
});
  
export const getReviewDetail = (formData) => {
    return dispatch => {
      dispatch(getReviewRequest());
      reviewDetailApi(formData)
        .then((response) => {
            if(response.data.status === true) {
                dispatch(getReviewSuccess(response.data.data)); 
            } else {
                dispatch(getReviewFailure(response.data.message));
            }
        })
        .catch((error) => {
            console.log(error);
            dispatch(getReviewFailure(error.data.message));
        });
    };
};
  