// src/actions/myaccount/wallet/walletDashboardActions.js
import { getWalletDashboardApi } from '../../../api/myaccount/wallet/walletDashboardApi';
import { GET_WALLETDASHBOARD_SUCCESS, GET_WALLETDASHBOARD_FAILURE } from '../../types';

export const getWalletDashboardSuccess = (walletdashboard) => ({
  type: GET_WALLETDASHBOARD_SUCCESS,
  payload: walletdashboard,
});

export const getWalletDashboardFailure = (error) => ({
  type: GET_WALLETDASHBOARD_FAILURE,
  payload: error,
});

export const getWalletDashboard = (postData) => {
  return (dispatch,getState) => {
    const customerId = getState().userdata.userData.id;
    const cust_id = { customer_id: customerId };
    getWalletDashboardApi(cust_id)
      .then((response) => {
        dispatch(getWalletDashboardSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getWalletDashboardFailure(error.message));
      });
  };
};
