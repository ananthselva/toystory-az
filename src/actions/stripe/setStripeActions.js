// src/actions//stripe/setStripeActions.js
import { SET_STRIPE } from "../types";

export const setStripe = (stripe) => ({
  type: SET_STRIPE,
  payload: stripe,
});
