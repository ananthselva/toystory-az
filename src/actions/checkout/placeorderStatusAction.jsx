import { PLACEORDER_STATUS,PLACECARD_STATUS } from "../types";
export const postPlaceOrderStatus = (placeorder) => ({
    type: PLACEORDER_STATUS,
    payload: placeorder,
  });
export const PlaceCardStatus = (status) => ({
  type: PLACECARD_STATUS,
  payload: status,
});
