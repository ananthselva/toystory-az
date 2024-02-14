// src/api/index.jsx

// const baseurl = "https://api-fk.fusiontesting.co.uk";
const baseurl = "https://api-new.fusionkitchen.co.uk";
// const baseurl = "https://api-newdev.fusionkitchen.co.uk";
const innovativeUrl = "https://api.fusioninnovative.com";
// const baseurl = "http://localhost:8000";

export const GETWALLETHISTORYURL = baseurl + "/getWalletHistory";
export const WALLETDASHBOARDURL = baseurl + "/walletDashboard";
export const GETSAVECARDURL = baseurl + "/getSaveCard";
export const ADDSAVECARDURL = baseurl + "/addSaveCard";
export const UPDATEPRIMARYSAVECARDURL = baseurl + "/updatePrimarySaveCard";
export const GETORDERHISTORY = baseurl + "/getOrderHistory";
export const GETBILLDETAIL = baseurl + "/getBillDetail";
export const HOMEPAGEURL = baseurl + "/homePage";
export const GETADDRESSURL = baseurl + "/getAddress";
export const ADDADDRESSURL = baseurl + "/addAddress";
export const UPDATEADDRESSURL = baseurl + "/updateAddress";
export const DELETEADDRESSURL = baseurl + "/deleteAddress";
export const UPDATEPRIMARYADDRESSURL = baseurl + "/updatePrimaryAddress";
export const CREATEMYACCOUNTFEEDBACK = baseurl + "/createMyaccountFeedback";
export const ORDERAGAIN = baseurl + "/orderAgain";
export const ORDERTRACKING = baseurl + "/orderTracking";
export const SENDPROFILEOTP = baseurl + "/sendProfileOtp";
export const UPDATEPROFILE = baseurl + "/updateProfile";
export const LOGINOTPGENERATEURL = baseurl + "/loginOtpGenerate";
export const GETPROFILE = baseurl + "/getProfile";
export const APPLINK = baseurl + "/getAppDownloadLink";
//list
export const RESTAURANT = baseurl + "/getRestaurantDatas";
export const CUISINES = baseurl + "/getCuisinesList";
export const GETFILTER = baseurl + "/getRestaurantFiltersList";
//list end
export const NOTAKEAWAY = baseurl + "/noTakeaway";
export const DELETESAVECARDURL = baseurl + "/deleteSaveCard";
export const SSOLOGINREGISTER = baseurl + "/ssoLoginRegister";

// menu page apis
export const RESTAURANTDETAIL = baseurl + "/getRestaurantMenuDetail";
export const MENUDATA = baseurl + "/getMenuPage";
export const REVIEWDATA = baseurl + "/getReviewPage";
export const ABOUTDATA = baseurl + "/getAboutPage";
export const ORDERTIMING = baseurl + "/getOrderTime";
export const DELIVERYPOSTCODE = baseurl + "/checkDeliveryPostcode";
export const UPDATEFAVOURITE = baseurl + "/favouriteAction";

//addon api
export const ADDONDATA = baseurl + "/getItemAddonList";

// static api
export const LEADSIGNUP = baseurl + "/leadSignup";
export const CONTACTLESSDINNING = baseurl + "/contactlessDinningSignup";
export const CAREER = innovativeUrl + "/career";
export const BECOMEPARTNER = baseurl + "/partnerSignup";
export const RESELLER = baseurl + "/resellerSignup";

// feedback api
export const FEEDBACKSTATUS = baseurl + "/getClientFeedbackStatus";
export const CREATEEMAILFEEDBACK = baseurl + "/createEmailFeedback";

// checkout page api
export const UPDATECUSTOMERADDRESS = baseurl + "/updateCustomerAddressPopup";
export const PLACEORDERURL = baseurl + "/placeOrderWithPayment";
export const CHARGESDETAILS = baseurl + "/getChargesDetail";
export const STRIPEPAYMENTDETAIL = baseurl + "/getStripePaymentDetail";

// get google api
export const GETGOOGLEPOSTCODE = baseurl + "/getGoogleAddress";

// get loyalty points
export const GETCHECKOUTLOYALTY = baseurl + "/getLoyaltyPoints";
//autocomplete postcode
export const AUTOCOMPLETEURL = baseurl + "/searchPostcode";
