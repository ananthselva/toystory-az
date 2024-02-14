// src/reducers/index.js
import { combineReducers } from "redux";
import { homepageReducer } from "./home/homepageReducer";
import { sendAppLinkReducer } from "./home/sendAppLinkReducer";
import { wallethistoryReducer } from "./myaccount/wallet/wallethistoryReducer";
import { walletdashboardReducer } from "./myaccount/wallet/walletdashboardReducer";
import { addressReducer } from "./myaccount/address/getAddressReducer";
import { savecardReducer } from "./myaccount/wallet/getSaveCardReducer";
import { dsavecardReducer } from "./myaccount/wallet/deleteSaveCardReducer";
import { adsavecardReducer } from "./myaccount/wallet/adSaveCardReducer";
import { upsavecardReducer } from "./myaccount/wallet/updatePrimarySavecardReducer";
import { orderhistoryReducer } from "./myaccount/order/orderhistoryReducer";
import { orderdetailReducer } from "./myaccount/order/orderdetailReducer";
import { orderagainReducer } from "./myaccount/order/orderagainReducer";
import { ordertrackingReducer } from "./myaccount/orderstatus/ordertrackingReducer";
import { myAccountFeedbackReducer } from "./myaccount/orderstatus/myAccountFeedbackReducer";
import { profileReducer } from "./myaccount/profile/getProfile";
import { sendotpprofileReducer } from "./myaccount/profile/sendProfileOtpReducer";
import { saveprofileReducer } from "./myaccount/profile/saveProfileReducer";
import { authReducer } from "./login/authReducer";
import { ssoReducer } from "./login/ssoReducer";
import { addAddressReducer } from "./myaccount/address/addAddressReducer";
import { deleteAddressReducer } from "./myaccount/address/deleteAddressReducer";
import { updateAddressReducer } from "./myaccount/address/updateAddressReducer";
import { updatePrimaryAddressReducer } from "./myaccount/address/updatePrimaryAddressReducer";
import { listpageReducer } from "./restaurant/listpageReducer";
import { suggestRestaurantReducer } from "./restaurant/suggestRestaurantReducer";
import { restaurantDetailReducer } from "./menu/restaurantDetailReducer";
import { menuDetailReducer } from "./menu/menuDetailReducer";
import { aboutDetailReducer } from "./menu/aboutDetailReducer";
import { reviewDetailReducer } from "./menu/reviewDetailReducer";
import { addonDetailReducer } from "./menu/addonDetailReducer";
import { leadSignUpReducer } from "./static/leadSignuReducer";
import { contactlessdinningReducer } from "./static/contactlessdinningReducer";
import { careerReducer } from "./static/careerReducer";
import { partnerReducer } from "./static/becomepartnerReducer";
import { resellerReducer } from "./static/resellerReducer";
import { cartDetailReducer } from "./menu/cartDetailReducer";
import { stripeReducer } from "./stripe/stripeReducer";
import { placeOrderReducer } from "./checkout/placeOrderReducer";
import { chargeDetailReducer } from "./checkout/chargesDetailReducer";
import { stripePaymentReducer } from "./checkout/stripePaymentReducer";
import { feedbackStatusReducer } from "./feedback/feedbackStatusReducer";
import { createClientFeedbackReducer } from "./feedback/createClientFeedbackReducer";
import { placeorderStatusReducer } from "./checkout/placeorderStatusReducer";
import { getLoyaltyReducer } from "./checkout/getLoyaltyReducer";
import { AutocompleteReducer } from "./autocomplete/autoCompleteDetail";
import { listCusinesReducer } from "./restaurant/listcuisinesReducer";
import { listFilterReducer } from "./restaurant/listfilterReducer";
const rootReducer = combineReducers({
  homepage: homepageReducer,
  sendAppLink: sendAppLinkReducer,
  wallethistory: wallethistoryReducer,
  walletdashboard: walletdashboardReducer,
  address: addressReducer,
  addaddress: addAddressReducer,
  deleteaddress: deleteAddressReducer,
  updateaddress: updateAddressReducer,
  updateprimaryaddress: updatePrimaryAddressReducer,
  savecard: savecardReducer,
  adsavecard: adsavecardReducer,
  dsavecard: dsavecardReducer,
  upsavecard: upsavecardReducer,
  orderhistory: orderhistoryReducer,
  orderdetail: orderdetailReducer,
  orderagain: orderagainReducer,
  ordertracking: ordertrackingReducer,
  myaccountfeedback: myAccountFeedbackReducer,
  profile: profileReducer,
  userdata: authReducer,
  getListpage: listpageReducer,
  postdata: ssoReducer,
  suggestRestaurant: suggestRestaurantReducer,
  sendotpprofile: sendotpprofileReducer,
  saveprofile: saveprofileReducer,
  getRestaurantDetail: restaurantDetailReducer,
  getMenuDetail: menuDetailReducer,
  getAboutDetail: aboutDetailReducer,
  getReviewDetail: reviewDetailReducer,
  getAddonDetail: addonDetailReducer,
  leadSignuReducer: leadSignUpReducer,
  contactlessdinning: contactlessdinningReducer,
  career: careerReducer,
  partner: partnerReducer,
  getreseller: resellerReducer,
  cartStore: cartDetailReducer,
  stripe: stripeReducer,
  chargesdetail: chargeDetailReducer,
  stripepayment: stripePaymentReducer,
  placeorder: placeOrderReducer,
  feedbackStatus: feedbackStatusReducer,
  createClientFeedback: createClientFeedbackReducer,
  placeorderStatusReducer: placeorderStatusReducer,
  getLoyalty: getLoyaltyReducer,
  placeorderStatusReducer:placeorderStatusReducer,
  AutocompleteReducer:AutocompleteReducer,
  listCusinesReducer:listCusinesReducer,
  listFilterReducer:listFilterReducer,
});

export default rootReducer;
