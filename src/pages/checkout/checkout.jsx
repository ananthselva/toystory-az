// *******~ Import ~******** //
// React
import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  createContext,
  lazy,
  useRef,
} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// Assets

// import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentRequestButtonElement,
  CardElement,
  Elements,
  useElements,
  useStripe,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";
// Components
import PreOrder from "../preorder/preorder";
import { PaymentFaild } from "./popup";
import { PaymentSuccess } from "./popup";
import { FKPlus } from "./cart";
// import Cart from "./cart";
import { MdOutlineCancel } from "react-icons/md";
import { OrderFlow } from "../../App";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
// CSS
import "./css/checkout.scss";
import "./css/address-form.scss";
import "./css/popup.scss";
// Images
import OrderTypeImg from "./img/order-type.gif";
import PreorderLottie from "./img/preorder.json";
import CollectionImg from "./img/collectionimg.gif";
// import NoticeImg from "./img/notice.gif";
// import PreImgWhite from "./img/preimg-white.svg";
// import CardImg from "./img/cardimg.svg";
import CardImgWhite from "./img/cardimgwhite.png";
import checkoutcard from "./img/checkoutcard.svg";
import InfoImg from "./img/info.svg"

import GooglePayNew from "./img/gpay-new.png";
import GooglePaySmall from "./img/gpay-new-small.png";
import Gpay from "./img/Google__G__logo.svg.png"

import ApplyPayNew from "./img/applpay-new.svg";
import ApplyPayNewWhite from "./img/applpay-new-white.svg";

// checkout images
import Paypallogo from "./img/paypal2.svg";
import applepays from "./img/applecheckout.svg";
import applepaydark from './img/apple-dark.png'
import klarnapay from "./img/klarnacheckout.png";
import threeplus from "./img/3 +.svg";

// import WalletNew from "./img/walletnew.svg";
import PayPal from "./img/paypal.svg";
import Clarna from "./img/clarna.png";
// import ClarnaWhite from "./img/clarna-white.png";
import AfterPay from "./img/afterpay.png";
import FKWallet from "./img/fk-wallet.png";
import AfterPayWhite from "./img/afterpaywhite.png";
// import NoticeImgLight from "./img/notice-light.svg";
// import AppleIcon from "./img/apple.png";
import CardIcon from "./img/card.png";
import WalletIcon from "./img/wallet.png";
import { IoCloseSharp } from "react-icons/io5";
// import AppleIconDark from "./img/apple-dark.png";
import CardIconDark from "./img/card-dark.png";
// import WalletIconDark from "./img/wallet-dark.png";
import WalletIconwhite from "./img/wallet-white.svg";
import DoorIcon from "./img/door.svg";
import DoorLightIcon from "./img/doorlight.svg";
import RecordIcon from "./img/record.svg";
import RecordlightIcon from "./img/recordlight.svg";
import GuardIcon from "./img/gaurd.svg";
import GuardlightIcon from "./img/gaurdlight.svg";
import EarnIcon from "./img/earn.svg";
import MapIcon from "./img/collection-map.svg";
import MapIconLight from "./img/collection-map-light.svg";
import CallIcon from "./img/call.svg";
import CallIconLight from "./img/call-light.svg";
import BagIcon from "./img/double-bag.svg";
import BagIconLight from "./img/double-bag-light.svg";
import { IoIosArrowForward } from "react-icons/io";
import DotWalletimg from "./img/dot.svg";
import CreditCardImg from "./img/credit-card 1.png" 
import SavedCardImg from "./img/savedCard.png"
// Icons
import { MdDone } from "react-icons/md";
import { RxDot } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
// import { FaEdit } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
// *******~ Import ~******** //

// accordian
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import PlaceOrderJson from "../../components/placeorderdetails.json";
import axios from "axios";

import { updateAddressApi } from "../../api/checkout/updateAddress";
import { postcodeDetailApi } from "../../api/menu/postcodeDetailApi";
import { googleAddressApi } from "../../api/checkout/googleAddress";

// Redux wallet history
import { connect } from "react-redux";
import { getAddress } from "../../actions/myaccount/address/getAddressActions";
import { getchargesDetail } from "../../actions/checkout/getChargesDetailActions";
import { getStripePayment } from "../../actions/checkout/getStripePaymentDetailActions";
import { postPlaceOrder } from "../../actions/checkout/placeorderActions";
import { getLoyaltyPoints } from "../../actions/checkout/getLoyaltyAction";
import {
  postPlaceOrderStatus,
  PlaceCardStatus,
} from "../../actions/checkout/placeorderStatusAction";
import { useSelector, useDispatch } from "react-redux";
import Loadable from "../../router/loadable";
import { isIOS, isAndroid, isMobile, isTablet } from "react-device-detect";
// import Checkoutpage2 from "./Checkoutpageskeleton";
import Checkoutpageskeleton from "./Checkoutpageskeleton";
// lazy
const Cart = Loadable(lazy(() => import("./cart")));

export const CheckoutContext = createContext({});
export const CheckoutData = () => useContext(CheckoutContext);

// accordian
function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={`acco-btn-checkout ${isCurrentEventKey && "active"}`}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const CheckoutPage = ({
  getchargesDetail,
  getStripePayment,
  error,
  userData,
  postPlaceOrder,
  chargesdetail,
  stripepayment,
  getAddress,
  addressDetail,
  placeorder,
  getLoyaltyPoints,
  getLoyalty,
  isLoading,
}) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { path } = useParams();
  const { theme } = useContext(ThemeContext);
  const stripe = useStripe();
  const elements = useElements();
  const [paysaveCard,setPaySaveCard]=useState(null);
  const [saveCardError,setSaveCardError]=useState(null);
  const [cardStatus,setCardStatus]=useState(false);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [applepayGpayBtnStatus, setApplepayGpayBtnStatus] = useState(0);
  const [payType, setPayType] = useState("");
  const [paymentSva, setPaymentSva] = useState(0);
  const [paymentMId, setPaymentMId] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [paymentType, setPaymentType] = useState(1); // payment type 1,7,8,9
  const [paySubmit, setPaySubmit] = useState(0); // validate pay button submitted or not
  const {
    getOrderMode,
    getOrderTime,
    setOrderTime,
    setStuartStatus,
    stuartStatus,
  } = OrderFlow();
  const [AddressPopupshow, setAddressPopupshow] = useState(false);
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  const preorderTime = localStorage.getItem("preOrder");
  const preorder = preorderTime || "";
  const [instruction, setInstruction] = useState("");
  const localCutlery = localStorage.getItem("cutlery") || "";
  const gift = localStorage.getItem("gift") || "";
  const bagCharge = chargesdetail?.message?.baggageCharge || 0;
  const serviceCharge = chargesdetail?.message?.serviceCharge || 0;
  const [gpaySubmit, setGpaySubmit] = useState(0);
  const [svpaySubmit, setSvpaySubmit] = useState(0);
  const [apaySubmit, setApaySubmit] = useState(0);
  const [svclientSecret, setSvclientSecret] = useState(0);
  const [clientSecret, setClientSecret] = useState(0);
  const [walletstatus, setWalletstatus] = useState(0);
  const [walletamount, setWalletamount] = useState(0);
  const [cardErrorMessage, setCardErrorMessage] = useState(null);
  const [faildshow, setFaildShow] = useState(false); //order status warning
  const [buttonstatus, setButtonstatus] = useState(false); //order button loading
  const discountJSON = localStorage.getItem("discount");
  const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : 0;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [localCustomerId, setCustomerId] = useState("");
  const [localAddressId, setAddressId] = useState("");
  const [localOrderPostcode, setOrderPostcode] = useState("");
  const loginAddress = localStorage.getItem("loginAddress") || "";
  const guestAddress = localStorage.getItem("guestAddress") || "";
  //order button disable & enable
  const [footerBtn, setFooterBtn] = useState(true);
  const [paymentMethodId, setPaymentMethodId] = useState(null); // Add state for payment method ID
  const [jsonData, setJsonData] = useState(PlaceOrderJson);
  // Function to update the JSON data with the new paymentMethodId
  const updateJsonData = (newPaymentMethodId) => {
    // Create a copy of the JSON data
    const updatedData = [...jsonData];

    // Find the specific item you want to update (for example, the first item)
    const itemToUpdate = updatedData[0];

    // Update the "paymentMethodId" property within the "paymentDetail" object
    itemToUpdate.paymentDetail.paymentMethodId = newPaymentMethodId;

    // Update the state with the modified JSON data
    setJsonData(updatedData);

    // postPlaceOrder(jsonData[0]); // post the latest PM ID
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [cardtype, setCardtype] = useState(0);
  const [applepaytype, setApplepaytype] = useState(0);
  const [googlepaytype, setGooglepaytype] = useState(0);
  // type 1 - mobile view only, 2- all device, 3 - future use

  const [gpaydeviceInfo, setGpaydeviceInfo] = useState(null);
  const [appledeviceInfo, setAppledeviceInfo] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [scrollelement, setScrollelement] = useState(false);
  const [paymentSuccessShow, setPaymentSuccessShow] = useState(false);
  const [paymentSuccessMsg, setPaymentSuccessMsg] = useState("");
  const [paySpinner,setPaySpinner]=useState(false);
  const deviceDetect = () => {
    let width = window.innerWidth;
    if (width < 1199) {
      if (isIOS) {
        //check apple pay
        setSelectedValue("apple-pay");
        setPaymentType(7);
        setApplepaytype(1);
        setAppledeviceInfo(1);
      } else if (isAndroid || isTablet) {
        setGpaydeviceInfo(1);
        setPaymentType(8);
        setSelectedValue("google-pay");
        setGooglepaytype(1);
      } else {
        setSelectedValue("cardimg");
      }
    } else {
      setSelectedValue("cardimg");
      setCardtype(1);
    }
  };
  useEffect(() => {
    // let width = window.innerWidth;
    // console.log(width);
    // if (width < 1199) {
    //   const userAgent = window.navigator.userAgent.toLowerCase();
    //   // Check the platform and set the devicePlatform state accordingly
    //   setCardtype(1);
    //   if (
    //     userAgent.indexOf("iphone") !== -1 ||
    //     userAgent.indexOf("iphone") !== -1 ||
    //     userAgent.indexOf("ipad") !== -1
    //   ) {
    //     setSelectedValue("apple-pay");
    //     setPaymentType(7);
    //     setApplepaytype(1);
    //     setAppledeviceInfo(1);
    //   } else if (userAgent.indexOf("mac") !== -1) {
    //     setSelectedValue("apple-pay");
    //     setPaymentType(7);
    //     setApplepaytype(1);
    //     setAppledeviceInfo(1);
    //   } else if (userAgent.indexOf("windows") !== -1) {
    //     setSelectedValue("google-pay");
    //     setPaymentType(8);
    //     setGpaydeviceInfo(1);
    //   } else if (userAgent.indexOf("linux") !== -1) {
    //     setGooglepaytype(1);
    //     setSelectedValue("google-pay");
    //     setPaymentType(8);
    //     setGpaydeviceInfo(1);
    //   } else if (userAgent.indexOf("android") !== -1) {
    //     setGpaydeviceInfo(1);
    //     setPaymentType(8);
    //     setSelectedValue("google-pay");
    //     setGooglepaytype(1);
    //   } else {
    //     setSelectedValue("cardimg");
    //   }
    // } else {
    //   setSelectedValue("cardimg");
    //   setCardtype(1);
    // }
    deviceDetect();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  const PayOptions = [
    {
      value: "cardimg",
      icon: CardImgWhite,
      darkicon: CardImgWhite,
      type: 2,
      status: cardtype,
      device: 1,
    },
    // {
    //   value: "apple-pay",
    //   icon: ApplyPayNew,
    //   darkicon: ApplyPayNewWhite,
    //   type: 2,
    //   status: paymentType === 7 ? 1 : 0,
    //   device: applepaytype,
    // },
    // {
    //   value: "google-pay",
    //   icon: Gpay,
    //   darkicon: GooglePayNew,
    //   type: 2,
    //   status: paymentType === 8 ? 1 : 0,
    //   device: googlepaytype,
    // },
    {
      value: "wallet",
      icon: FKWallet,
      darkicon: FKWallet,
      type: 2,
      status: 1,
      device: 1,
    },
    {
      value: "paypal",
      icon: PayPal,
      darkicon: PayPal,
      type: 3,
      status: 11,
      device: 1,
    },
    {
      value: "klarna",
      icon: Clarna,
      darkicon: Clarna,
      type: 3,
      status: 10,
      device: 1,
    },
    {
      value: "savedcard",
      icon: Clarna,
      darkicon: Clarna,
      type: 3,
      status: 12,
      device: 1,
    },
    {
      value: "afterpay",
      icon: AfterPay,
      darkicon: AfterPayWhite,
      type: 3,
      status: 0,
      device: 1,
    },
  ];
  const [paymentOptions, setPaymentOptions] = useState(null);

  useEffect(() => {
    setPaymentOptions(PayOptions);
  }, [
    gpaydeviceInfo,
    appledeviceInfo,
    cardtype,
    applepayGpayBtnStatus,
    applepaytype,
    googlepaytype,
  ]);

  // type 1 - mobile view only, 2- all device, 3 - future use

  // const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // adjust the time once cross the selected time with every minutes
  const [showPreorder, setShowPreorder] = useState(false);

  // ! page width
  useEffect(() => {
    // let addressData = null;
    if (isLoggedIn === "true") {
      if (loginAddress) {
        const address = JSON.parse(loginAddress);
        setOrderPostcode(address.postcode || "");
        setCustomerId(address.customerId);
        setAddressId(address.addressId);
      } else {
        setAddressPopupshow(true);
      }
      // addressData = loginAddress;
    } else {
      if (guestAddress) {
        const address = JSON.parse(guestAddress);
        setOrderPostcode(address.postcode || "");
        setCustomerId(address.customerId);
        setAddressId(address.addressId);
      } else {
        setAddressPopupshow(true);
      }
      // addressData = guestAddress;
    }

    // if (addressData) {
    //   const address = JSON.parse(addressData);
    //   setOrderPostcode(address.postcode || "");
    //   setCustomerId(address.customerId);
    //   setAddressId(address.addressId);
    // } else {
    //   setAddressPopupshow(true);
    // }
  }, [isLoggedIn, loginAddress, guestAddress]);

  const [promo, setPromo] = useState(0);
  const [promoDesc, setPromoDesc] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountDesc, setDiscountDesc] = useState("");

  useEffect(() => {
    if (parsedDiscount) {
      if (parsedDiscount.source === "promoDiscount") {
        setPromo(parsedDiscount.appliedDiscount);
        setPromoDesc(parsedDiscount.discount);
      } else {
        setDiscount(parsedDiscount.appliedDiscount);
        setDiscountDesc(parsedDiscount.discount);
      }
    } else {
      setDiscount(0);
      setDiscountDesc("");
    }
  }, [setPromo, setPromoDesc, setDiscount, setDiscountDesc, parsedDiscount]);

  // round off and donation
  const roundOffPrice = localStorage.getItem("roundOffPrice") || 0;
  const [roundedValue, setRoundedValue] = useState(roundOffPrice);
  const subTotal = parseFloat(localStorage.getItem("totalPrice"));
  const driverTipValue = localStorage.getItem("driverTipValue") || 0;
  const [driverTip, setDriverTip] = useState(driverTipValue);
  const localFinalTotal = localStorage.getItem("finalTotal") || 0;
  const [finalTotal, setFinalTotal] = useState(localFinalTotal);
  const [finalTotalValue, setFinalTotalValue] = useState("");
  const [paymentModalShow, setPaymentModalShow] = useState(false);
  const [ukRailwayTime, setUkRailwayTime] = useState(new Date());
  // get ip address
  const [ipAddress, setIpAddress] = useState("");
  axios
    .get("https://api.ipify.org?format=json")
    .then((response) => {
      setIpAddress(response.data.ip);
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
    });

  useEffect(() => {
    const storedInstruction = localStorage.getItem("instruction") || "";
    setInstruction(storedInstruction);
  }, []);

  const postcodeDetail = localStorage.getItem("postcodeDetail") || "";
  const parsedPostcode = postcodeDetail ? JSON.parse(postcodeDetail) : "";
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [stuartCharge, setStuartCharge] = useState(0);
  const sessionalOfferStatus = localStorage.getItem("sessionalOffer") || 0;
  const sessionalOfferTotal = localStorage.getItem("seasonalDiscount") || 0;
  const seasonalTotalPrice = localStorage.getItem("seasonalTotalPrice") || 0;

  useEffect(() => {
    setStuartStatus(stripepayment?.message?.stuart || false);
  }, [stripepayment]);

  useEffect(() => {
    if (getOrderMode === "Delivery") {
      setDeliveryCharge(parsedPostcode?.deliveryCharge || 0);
      if (stuartStatus !== false) {
        setStuartCharge(
          parsedPostcode?.stuartDeliveryCharge?.deliveryCharge || 0
        );
      } else {
        setStuartCharge(0);
      }
    } else {
      setDeliveryCharge(0);
      setStuartCharge(0);
    }
  }, [parsedPostcode, getOrderMode]);

  useEffect(() => {
    if (
      isLoggedIn === "true" &&
      !isNaN(finalTotalValue) &&
      finalTotalValue > 0
    ) {
      getLoyaltyPoints({
        ordered_amount: finalTotalValue,
      });
    }
  }, [isLoggedIn, finalTotalValue]);


  const customerId = userData ? userData.customerId : "";

  // paymentDetail memo
  const paymentDetail = useMemo(() => {

    if (svpaySubmit > 0 || paySubmit > 0) {
      if (svpaySubmit === 1 || paySubmit === 1) {
        return {
          type: payType,
          paymentMethodId: paymentMId,
          sva: paymentSva,
        };
      }

      if (svpaySubmit === 3 || paySubmit === 2 || paySubmit === 3) {
        return {
          type: payType,
          sva: paymentSva,
          paymentIntentId: paymentIntentId,
        };
      }
    } else if (svpaySubmit === 0 || paySubmit === 0) {
      return {
        type: payType,
        paymentMethodId: paymentMId,
        sva: paymentSva,
      };
    }
  }, [
    paymentType,
    paymentMId,
    paymentSva,
    paymentIntentId,
    svpaySubmit,
    paySubmit,
  ]);

  // orderDetail memo
  const orderDetail = useMemo(() => {
    // with and without time fieldsCheckoutPage
    let dateParts = "";
    let timePart = "";
    let formattedDate = "";

    if (preorder && preorder !== "0") {
      const inputDate = preorder;
      dateParts = inputDate.split(" ")[0].split("/"); // Split the date into parts
      timePart = inputDate.split(" ")[1]; // Get the time part
      // Create a Date object with the parts
      const dateObject = new Date(
        `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timePart}`
      );

      // Format the date in the desired format
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0");
      const day = String(dateObject.getDate()).padStart(2, "0");
      const hour = String(dateObject.getHours()).padStart(2, "0");
      const minute = String(dateObject.getMinutes()).padStart(2, "0");
      formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;
    }

    let login_type = 5;
    if (userData) {
      if (userData.login_type || userData.login_type === 0) {
        login_type = userData.login_type;
      }
    }
    const paymentType1 = selectedValue === "google-pay" ? "8" : selectedValue === "apple-pay" ? "7" : paymentType;
    return {
      loginType: login_type,
      orderType: orderType,
      paymentType: paymentType1,
      instruction: instruction,
      preOrder: formattedDate,
      cutlery: localCutlery,
      gift: gift,
      giftQty: gift === "" ? "" : "1",
    };
  }, [
    paymentType,
    orderType,
    preorder,
    instruction,
    localCutlery,
    userData,
    gift,
    selectedValue,
  ]);

  // chargesDetail memo
  const placeOrderChargesDetail = useMemo(() => {
    return {
      subTotal: subTotal,
      deliveryCharge: deliveryCharge,
      driverTip: driverTip,
      roundAmount: roundedValue,
      extraDonate: "0.00",
      clientStuartCharge: stuartCharge,
      discount: discount,
      discountDescription: discountDesc,
      promo: promo,
      promoDescription: promoDesc,
      voucher: "",
      voucherDescription: "",
      sessionalOffer: sessionalOfferStatus,
      sessionalOfferTotal: sessionalOfferTotal
    };
  }, [
    promo,
    promoDesc,
    discount,
    discountDesc,
    deliveryCharge,
    stuartCharge,
    roundedValue,
    subTotal,
    driverTip,
    sessionalOfferStatus,
    sessionalOfferTotal
  ]);

  // itemsDetail memo
  const cartJSON = localStorage.getItem("cart") || "";
  const parsedCart = cartJSON ? JSON.parse(cartJSON) : "";

  useEffect(() => {
    if (parsedCart.length === 0) {
      navigate("/" + path + "/menu");
    }
  }, [parsedCart, navigate]);

  const itemsDetail = parsedCart
    .filter((item) => item.gift === 0)
    .map((item) => ({
      id: item.itemId.toString(),
      qty: item.count.toString(),
      loyalty: item.loyalty.toString(),
      instruction: "",
      addon: item.addon,
    }));

  // userDetail memo
  const userDetail = useMemo(() => {
    return {
      customerId: localCustomerId,
      addressId: localAddressId,
      postcode: localOrderPostcode,
      userAgent: navigator.userAgent,
      ip: ipAddress,
    };
  }, [
    navigator,
    paymentType,
    ipAddress,
    localCustomerId,
    localAddressId,
    localOrderPostcode,
  ]);
  // final place order api memo
  const placeOrderApiJson = useMemo(() => {
    return {
      clientPath: path,
      orderDetail: orderDetail,
      paymentDetail: paymentDetail,
      userDetail: userDetail,
      chargesDetail: placeOrderChargesDetail,
      itemsDetail: itemsDetail,
    };
  }, [
    path,
    orderDetail,
    paymentDetail,
    placeOrderChargesDetail,
    userDetail,
    itemsDetail,
  ]);

  const [orderApiStatus, setOrderApiStatus] = useState(false);

  useEffect(() => {
    if (gpaySubmit == 0) {
      return;
    }
    if (gpaySubmit === 1) {
      postPlaceOrder(placeOrderApiJson);
      setPaymentSuccessShow(true);
      setPaymentSuccessMsg("loading");
    } // google pay/ apple pay order submit
  }, [gpaySubmit]);

  useEffect(() => {
    if (svpaySubmit == 0) {
      return;
    }
    postPlaceOrder(placeOrderApiJson); // savecard payment submit
  }, [svpaySubmit]);

  useEffect(() => {
    if (paySubmit == 0) {
      return;
    }
    if (paySubmit === 1 || paySubmit === 3 || paySubmit == 9) {
      postPlaceOrder(placeOrderApiJson); // card payment and wallet payment submit
    }
  }, [paySubmit]);

  useEffect(() => {
    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "orderPlaced" &&
      gpaySubmit == 1
    ) {
      setPaymentSuccessShow(true);
      setPaymentSuccessMsg("loading");
    }
  }, [placeorder, gpaySubmit]);

  useEffect(() => {
    if (placeorder?.response_code === 500) {
      navigate("/" + path + "/menu");
    }
    // Gp and Ap payment code
    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "orderPlaced" &&
      gpaySubmit == 1
    ) {
      console.log("orderstatus1");
      setPaymentSuccessShow(true);
      setPaymentSuccessMsg("success");
      setGpaySubmit(0);
      setPaySubmit(0);
      navigate("/orderstatus");
      setOrderApiStatus(false);
      removeSession();
    }

    // wallet payment code
    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "orderPlaced" &&
      paySubmit == 9
    ) {
      console.log("orderstatus9");
      setGpaySubmit(0);
      setPaySubmit(0);
      setSvpaySubmit(0);
      navigate("/orderstatus");
      setOrderApiStatus(false);
      removeSession();
    }

    // savecard payment code
    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "orderPlaced" &&
      svpaySubmit == 3
    ) {
      console.log("orderstatus3");
      setGpaySubmit(0);
      setPaySubmit(0);
      setSvpaySubmit(0);
      navigate("/orderstatus");
      setOrderApiStatus(false);
      removeSession();
    }

    // card payment code
    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "orderPlaced" &&
      paySubmit == 3
    ) {
      console.log("orderstatus33");
      setGpaySubmit(0);
      setPaySubmit(0);
      setSvpaySubmit(0);
      setButtonstatus(false);
      navigate("/orderstatus");
      setOrderApiStatus(false);
      removeSession();
    }

    // save card payment code
    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "3dSecure" &&
      svpaySubmit == 1
    ) {
      if (placeorder?.message?.clientSecret) {
        const svclientSecret = placeorder.message.clientSecret;
        setSvclientSecret(svclientSecret);
        setSvpaySubmit(2);
      } else {
        setSvpaySubmit(0);
      }
      setOrderApiStatus(true);
    }

    // card payment code
    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "3dSecure" &&
      paySubmit == 1
    ) {
      if (placeorder?.message?.clientSecret) {
        const clientSecret = placeorder.message.clientSecret;
        setClientSecret(clientSecret);
        setPayType("paymentIntentId");
        setPaymentIntentId(placeorder.message.id);
        setPaySubmit(2);
        // console.log(clientSecret);
        // console.log(placeorder.message.id);
      } else {
        setPaySubmit(0);
      }
      setOrderApiStatus(true);
    }

    if (
      placeorder &&
      placeorder.status &&
      placeorder.type == "orderPlaced" &&
      paySubmit == 1 &&
      orderApiStatus === true
    ) {
      console.log("orderstatus11");
      setGpaySubmit(0);
      setPaySubmit(0);
      setSvpaySubmit(0);
      setPaySpinner(true);
      navigate("/orderstatus");
      setOrderApiStatus(false);
      removeSession();
    }
  }, [placeorder, paySubmit]);

  function removeSession() {
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("cartQty");
    localStorage.removeItem("discount");
    localStorage.removeItem("gift");
    localStorage.removeItem("orderType");
    localStorage.removeItem("cutlery");
    localStorage.removeItem("preOrder");
    localStorage.removeItem("postcodeDetail");
    localStorage.removeItem("checkRoundEnable");
    localStorage.removeItem("roundOffPrice");
    // localStorage.removeItem("guestAddress");
    localStorage.removeItem("driverTipValue");
    localStorage.removeItem("orderMode");
    localStorage.removeItem("itemNotes");
    localStorage.removeItem("orderTime");
    localStorage.removeItem("instruction");
    localStorage.removeItem("checkRepeatAddon");
    localStorage.removeItem("sessionalOffer");
    localStorage.removeItem("seasonalDiscount");
  }

  // console.log(svclientSecret);
  // get the data from API
  useEffect(() => {
    getStripePayment({
      client_path: path,
      customer_id: customerId,
    });
  }, [getStripePayment, path]);

  useEffect(() => {
    getchargesDetail({
      client_path: path,
    });
  }, [getchargesDetail, path]);

  const [customer, setCustomer] = useState("");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData !== null && isLoggedIn === "true") {
      setCustomer(userData);
    } else {
      setCustomer("");
    }
  }, [isLoggedIn]);

  const addressFormData = useMemo(() => {
    return customer ? { customer_id: customer.customerId } : null;
  }, [customer]);

  useEffect(() => {
    if (!addressFormData) {
      return;
    }
    getAddress(addressFormData);
  }, [addressFormData, getAddress]);
    //preOrder Check
    useEffect(() => {
      const interval = setInterval(() => {
        setUkRailwayTime(new Date());
      }, 1000); // Update every second
  
      return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);
    // const currentTime = ukRailwayTime.toLocaleTimeString('en-GB');
      const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      
      const currentDateTime1 = formatter.format(ukRailwayTime);
      const currentDateTime=currentDateTime1?.replace(',', '');
  
  if (!addressDetail && !chargesdetail && !stripepayment) {
    return <Checkoutpageskeleton />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const scrollToSection = () => {
    // Use the current property of the ref to access the DOM node
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
//save card function
  const handlesavecardPayment = async (paymentMethodId) => {
    setPaymentMId(paymentMethodId);
    setPayType("saveCardPaymentIntent");
    setSvpaySubmit(1); // for create payment Intent id
    setPaymentType(1); // payment type 1,8,7,9
    setButtonstatus(true);
  
  };
  const CARD_OPTIONS1 = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: theme === "dark" ? "#fff" : "#000",
        fontWeight: 300,
        border: theme === "dark" ?"1px solid #fff":"1px solid #000", // Add border style here
        fontFamily: "Source Code Pro, monospace",
        fontSmoothing: "antialiased",
        padding: "15px", 
        ":-webkit-autofill": {
          color: `${theme === "dark" ? "#fff" : "#000"}`, // Conditional color
          backgroundColor: `${theme === "dark" ? "" : "#fff"}`, // Conditional color
        },
        "::placeholder": { color: "#aab7c4" },
        backgroundColor: theme === "dark" ? "" : "#fff", // // Background color for the card input area
       // Adjust padding as needed
        fontSize: "20px",// Padding for the card input area
        "::before": {
          content: "''",
          borderRadius: "50%",// Set the desired border-radius for the icon
          border: "2px solid #c4f0ff",
          padding: "15px", 
          // ... other styles for the icon
        },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: theme === "dark" ? "red" : "#000",
        backgroundColor: theme === "dark" ? "" : "#fff", //Background color for invalid input
        paddingTop: "10px", // Padding for the invalid input area
      },
    },
  };
  const containerStyle = {
    borderRadius: '25px',
    padding: "5px 15px 5px 17px", 
    // overflow: 'hidden',
  
    // // height:'20px',
    border: theme === "dark" ? "1px solid #fff" : "1px solid #ebedf0", // Add border style here
  };

  return (
    <>
      <CheckoutContext.Provider
        value={{
          addressDetail,
          payType,
          setPayType,
          paymentSva,
          setPaymentSva,
          paymentMId,
          setPaymentMId,
          paymentIntentId,
          setPaymentIntentId,
          paymentType,
          setPaymentType,
          stripepayment,
          placeOrderApiJson,
          chargesdetail,
          applepayGpayBtnStatus,
          setApplepayGpayBtnStatus,
          paymentRequest,
          PlaceOrderJson,
          stripe,
          elements,
          setPaySubmit,
          paySubmit,
          setGpaySubmit,
          gpaySubmit,
          setSvpaySubmit,
          svpaySubmit,
          setApaySubmit,
          clientSecret,
          setClientSecret,
          svclientSecret,
          setSvclientSecret,
          apaySubmit,
          placeorder,
          instruction,
          setInstruction,
          AddressPopupshow,
          walletstatus,
          setWalletstatus,
          walletamount,
          setWalletamount,
          setAddressPopupshow,
          setCardErrorMessage,
          setFinalTotal,
          cardErrorMessage,
          deliveryCharge,
          bagCharge,
          serviceCharge,
          setRoundedValue,
          roundedValue,
          setDriverTip,
          driverTip,
          subTotal,
          setFinalTotal,
          finalTotal,
          faildshow,
          setFaildShow,
          buttonstatus,
          setButtonstatus,
          finalTotalValue,
          setFinalTotalValue,
          getLoyalty,
          updateJsonData,
          setPaymentMethodId,
          jsonData,
          setPaymentRequest,
          selectedValue,
          setSelectedValue,
          paymentOptions,
          cardtype,
          setCardtype,
          applepaytype,
          setApplepaytype,
          googlepaytype,
          setGooglepaytype,
          footerBtn,
          setFooterBtn,
          scrollelement,
          setScrollelement,
          sectionRef,
          scrollToSection,
          paymentSuccessShow,
          setPaymentSuccessShow,
          paymentSuccessMsg,
          setPaymentSuccessMsg,
          paymentModalShow,
          setPaymentModalShow,
          gpaydeviceInfo,
          appledeviceInfo,
          paysaveCard,
          setPaySaveCard,
          handlesavecardPayment,
          CARD_OPTIONS1,
          containerStyle,
          saveCardError,
          setSaveCardError,
          cardStatus,setCardStatus,
          paySpinner,setPaySpinner,
          currentDateTime,
          preorder
        }}
      >
        <Helmet>
          <style type="text/css">{`
       @media only screen and (min-width: 320px) and (max-width: 767px) {
        .copyright-sec {
          display:none;
        }
        .top-to-btm .icon-position {
          bottom: 80px;
          display:none;
        }
        .theme-btn{
          display:none;
        }
        nav.main-header .logo img{
            visibility:hidden;
          }
       }
       footer{ 
          display:none;
        }
         
        
    `}</style>
        </Helmet>

        <section className="checkout-page">
          {width < 768 && <ClientNameHeader />}
          <Container>
            <Row>
              <Col xs={12} sm={12} md={7} lg={8} xl={8} xxl={8}>
                <Checkout
                  showPreorder={showPreorder}
                  setShowPreorder={setShowPreorder}
                />
              </Col>
              <Col xs={12} sm={12} md={5} lg={4} xl={4} xxl={4}>
                <Cart />
              </Col>
            </Row>
          </Container>
        </section>
        <PaymentSuccess />
        <PaymentFaild />
      </CheckoutContext.Provider>
    </>
  );
};

const mapStateToProps = (state) => ({
  chargesdetail: state.chargesdetail.chargesdetail, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
  stripepayment: state.stripepayment.stripepayment,
  stripee: state.stripe,
  placeorder: state.placeorder.placeorder,
  addressDetail: state.address.address,
  getLoyalty: state.getLoyalty.loyaltyPoints,
});

const mapDispatchToProps = {
  getchargesDetail,
  getStripePayment,
  postPlaceOrder,
  getAddress,
  getLoyaltyPoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

const Checkout = ({ showPreorder, setShowPreorder }) => {
  // ! page width
  const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // ! page width
  const { getLoyalty } = useContext(CheckoutContext);

  return (
    <>
      <div className="checkout">
        <AddressSection
          setShowPreorder={setShowPreorder}
          showPreorder={showPreorder}
        />
        <PaymentMethod />
        {/* <PaymentMethods /> */}
        {/* {width < 768 && (
          <>
            <div className="order-details">
              <FKPlus />
            </div>
          </>
        )} */}
       
        <CancelPopup />
        <AddTip />
        <DonateChange />
        {getLoyalty ? <EarnPoints /> : null}
        <OrderButton />
        <TermsText />
      </div>
    </>
  );
};



function ChangeOrder(props) {
  // console.log(props);
  // default preorder tab
  const [defaultCollectionTabStatus, setDefaultCollectionTabStatus] =
    useState(null);
  const [defaultDeliveryTabStatus, setDefaultDeliveryTabStatus] =
    useState(null);
  return (
    <Modal
      show={props.showPreorder}
      onHide={props.HandleClickClose}
      centered
      className={`preorder-popup ${props.theme === "dark" ? "dark-theme" : ""}`}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <span className="close-btn" onClick={props.HandleClickClose}>
          <MdOutlineCancel />
        </span>
        <PreOrder
          selectedOrderMode={props.selectedOrderMode}
          setSelectedOrderModeValue={props.setSelectedOrderModeValue}
          showPreorder={props.showPreorder}
          setShowPreorder={props.setShowPreorder}
          defaultCollectionTabStatus={defaultCollectionTabStatus}
          setDefaultCollectionTabStatus={setDefaultCollectionTabStatus}
          defaultDeliveryTabStatus={defaultDeliveryTabStatus}
          setDefaultDeliveryTabStatus={setDefaultDeliveryTabStatus}
        />
      </Modal.Body>
    </Modal>
  );
}

export const updateAddress = async (formData) => {
  try {
    const response = await updateAddressApi(formData);
    console.log(response.data);
    return response.data; // Assuming the response has a 'data' property
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const checkPostcode = async (formData) => {
  try {
    const response = await postcodeDetailApi(formData);
    return response.data; // Assuming the response has a 'data' property
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const googleAddress = async (formData) => {
  try {
    const response = await googleAddressApi(formData);
    return response.data; // Assuming the response has a 'data' property
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const AddressProvider = createContext({});
export const AddressPopupContext = () => useContext(AddressProvider);
function DeliveryData(props) {
  // Map integer type values to corresponding string values
  const getTypeString = (type) => {
    switch (type) {
      case 1:
        return "Home";
      case 2:
        return "Office";
      case 3:
        return "Other";
      default:
        return "";
    }
  };

  const { addressDetail, instruction, setInstruction ,currentDateTime,preorder} =
    useContext(CheckoutContext);

  const [getAddress, setAddress] = useState([]);
  const [getDefaultAddress, setDefaultAddress] = useState("Home");
  const [getAddressField, setAddressField] = useState([]);

  const orderType = localStorage.getItem("orderType");

  const { setAddressPopupshow } = useContext(CheckoutContext);

  useEffect(() => {
    if (addressDetail?.status === true) {
      console.log(addressDetail);
      const checkAddressPopup =
        addressDetail.data.find(
          (item) => item.postcode === localStorage.getItem("orderPostcode")
        ) || "";
      if (!checkAddressPopup) {
        setAddressPopupshow(true);
      } else {
        setAddressPopupshow(false);
      }

      const updatedData = addressDetail.data.map((item) => {
        const type = getTypeString(item.type);
        if (item.postcode === localStorage.getItem("orderPostcode")) {
          setDefaultAddress(type);
          const deliveryData = {
            firstName: item.fname || "",
            lastName: item.lname || "",
            postcode: item.postcode || "",
            phone: item.phone || "",
            email: item.email || "",
            door: item.no || "",
            street: item.address1 || "",
            city: item.address2 || "",
            customerId: item.cid || "",
            addressId: item.id || "",
          };
          setAddressField(deliveryData);
        }
        return { ...item, type };
      });
      setAddress(updatedData);
    }
  }, [addressDetail, setAddressField]);

  return (
    <Accordion.Collapse eventKey="0">
      <>
        <div className="address-content">
          <h4 className="add-title">
            Delivery to
            {props.width < 768 && (
              <AddressPopup
                getAddress={getAddress}
                setAddressField={setAddressField}
                getDefaultAddress={getDefaultAddress}
                setDefaultAddress={setDefaultAddress}
                label="Edit"
              />
            )}
          </h4>
          <div className="add-data">
            <AddressProvider.Provider
              value={{
                getAddressField,
              }}
            >
              <DeliveryAddressField />
            </AddressProvider.Provider>
            {props.width > props.breakpoint && (
              <AddressPopup
                getAddress={getAddress}
                setAddressField={setAddressField}
                getDefaultAddress={getDefaultAddress}
                setDefaultAddress={setDefaultAddress}
                label="Edit"
              />
            )}
          </div>
        </div>
        {orderType !== "ASAP" ?currentDateTime>preorder ?(
          <>
            <div className="notice">
              <div className="lottie-ani">
                {/* <Player autoplay loop src={PreorderLottie}></Player> */}
                <img src={InfoImg} alt="" />

              </div>
              <div className="data">
                <p>
                  <div className="lottie-ani">
                    {/* <Player autoplay loop src={PreorderLottie}></Player> */}
                    <img src={InfoImg} alt="" />
                  </div>
                  Please note, This is a Preorder
                </p>
                <span>Please check the day and time</span>
              </div>
            </div>
          </>
        ):null : null}
        <div className="instruction-section">
          <h4 className="title">Add Delivery Instruction</h4>
          <div className="option-div">
            <label
              className={`instruct-box ${props.selectedOption === "door" ? "selected" : ""
                }`}
            >
              {props.selectedOption === "door" && (
                <span
                  className={`checkmark ${props.selectedOption === "door" ? "active" : ""
                    }`}
                >
                  <MdDone />
                </span>
              )}
              <input
                type="radio"
                name="Instruction"
                value="door"
                checked={props.selectedOption === "door"}
                onChange={() => props.handleOptionChange("door")}
              />
              <img
                src={props.theme === "dark" ? DoorLightIcon : DoorIcon}
                alt="door icon"
              />
              <div className="content">
                <p>Leave at door</p>
              </div>
            </label>
            <label
              className={`instruct-box ${props.selectedOption === "guard" ? "selected" : ""
                }`}
            >
              {props.selectedOption === "guard" && (
                <span
                  className={`checkmark ${props.selectedOption === "guard" ? "active" : ""
                    }`}
                >
                  <MdDone />
                </span>
              )}
              <input
                type="radio"
                name="Instruction"
                value="guard"
                checked={props.selectedOption === "guard"}
                onChange={() => props.handleOptionChange("guard")}
              />
              <img
                src={props.theme === "dark" ? GuardlightIcon : GuardIcon}
                alt="guard icon"
              />
              <div className="content">
                <p>Leave with guard</p>
              </div>
            </label>

            <label
              className={`instruct-box other-text ${props.selectedOption === "other" ? "selected" : ""
                }`}
            >
              {props.selectedOption === "other" && (
                <span
                  className={`checkmark ${props.selectedOption === "other" ? "active" : ""
                    }`}
                >
                  <MdDone />
                </span>
              )}
              <input
                type="radio"
                name="Instruction"
                value="other"
                checked={props.selectedOption === "other"}
                onChange={() => props.handleOptionChange("other")}
              />
              <div className="header-div">
                <div className="icons">
                  <RxDot />
                  <RxDot />
                  <RxDot />
                </div>
                <p>Other</p>
              </div>
              <div className="content">
                <span>text me</span>
              </div>
            </label>
            <label className="instruct-box">
              <img
                src={props.theme === "dark" ? RecordlightIcon : RecordIcon}
                alt="record icon"
              />
              <div className="content">
                <p>Record</p>
                <span>Tap here and hold</span>
              </div>
            </label>
          </div>
          {props.selectedOption === "other" && (
            <div className="input-textarea">
              <Form>
                <Form.Control
                  as="textarea"
                  placeholder="Eg: Add extra choose and spices"
                  rows={3}
                  value={instruction}
                  onChange={props.otherInstruction}
                />
              </Form>
            </div>
          )}
        </div>
      </>
    </Accordion.Collapse>
  );
}

function DeliveryAddressField() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const { setAddressPopupshow } = useContext(CheckoutContext);
  let getAddressField = [];
  if (isLoggedIn === true) {
    const data = AddressPopupContext();
    getAddressField = data.getAddressField;
  } else {
    const guestAddress = localStorage.getItem("guestAddress");
    getAddressField = guestAddress ? JSON.parse(guestAddress) : "";
    console.log(getAddressField.postcode);
    if (getAddressField.postcode !== localStorage.getItem("orderPostcode")) {
      setAddressPopupshow(true);
    }
  }
  return (
    <div className="name-add">
      {getAddressField ? (
        <>
          <p>
            {getAddressField.firstName} {getAddressField.lastName},{" "}
            {getAddressField.phone}
          </p>
          <span>
            {getAddressField.door}
            {", "}
            {getAddressField.street}
            {", "}
            {getAddressField.city}
            {", "}
            {getAddressField.postcode}
          </span>
        </>
      ) : null}
    </div>
  );
}

function CollectionData(props) {
  const [collectionData, setCollectionData] = useState([]);
  const { stripepayment, instruction,currentDateTime,preOrder } = useContext(CheckoutContext);

  useEffect(() => {
    if (stripepayment?.message?.clientDetail) {
      setCollectionData(stripepayment.message.clientDetail);
    }
  }, [stripepayment]);

  const orderType = localStorage.getItem("orderType");
  return (
    <Accordion.Collapse eventKey="0">
      <>
        <div className="address-content collection">
          <h4 className="add-title">
            <img src={props.theme === "dark" ? MapIconLight : MapIcon} alt="" />{" "}
            Pickup From {props.width < 768 && <ConfirmDetails label="Edit" />}
          </h4>
          <div className="add-data">
            <div className="name-add">
              {collectionData ? (
                <>
                  <p>{collectionData.name}</p>
                  <span>
                    {collectionData.address1}
                    {", "}
                    {collectionData.address2}
                    {", "}
                    {collectionData.pincode}
                    {", "}
                    {collectionData.city}
                  </span>
                </>
              ) : null}
            </div>
            {props.width > props.breakpoint && <ConfirmDetails label="Edit" />}
          </div>
        </div>
        {orderType !== "ASAP" ? currentDateTime>preOrder?(
          <>
            <div className="notice">
              <div className="lottie-ani">
                {/* <Player autoplay loop src={PreorderLottie}></Player> */}
                <img src={InfoImg} alt="" />

              </div>
              <div className="data">
                <p>
                  <div className="lottie-ani">
                    {/* <Player autoplay loop src={PreorderLottie}></Player> */}
                    <img src={InfoImg} alt="" />
                  </div>
                  Please note, This is a Preorder
                </p>
                <span>Please check the day and time</span>
              </div>
            </div>
          </>
        ):null : null}

        <div className="instruction-section collection">
          <h4 className="title">Add Collection Instruction</h4>
          <div className="option-div">
            {/* Bag */}
            <label
              className={`instruct-box ${props.selectedOption === "doublebag" ? "selected" : ""
                }`}
            >
              {props.selectedOption === "doublebag" && (
                <span
                  className={`checkmark ${props.selectedOption === "doublebag" ? "active" : ""
                    }`}
                >
                  <MdDone />
                </span>
              )}
              <input
                type="radio"
                name="Instruction"
                value="doublebag"
                checked={props.selectedOption === "doublebag"}
                onChange={() => props.handleOptionChange("doublebag")}
              />
              <img
                src={props.theme === "dark" ? BagIconLight : BagIcon}
                alt="bag icon"
              />
              <div className="content">
                <p>
                  Need <br /> Double Bags
                </p>
              </div>
            </label>
            {/* call */}
            <label
              className={`instruct-box ${props.selectedOption === "call" ? "selected" : ""
                }`}
            >
              {props.selectedOption === "call" && (
                <span
                  className={`checkmark ${props.selectedOption === "call" ? "active" : ""
                    }`}
                >
                  <MdDone />
                </span>
              )}
              <input
                type="radio"
                name="Instruction"
                value="call"
                checked={props.selectedOption === "call"}
                onChange={() => props.handleOptionChange("call")}
              />
              <img
                src={props.theme === "dark" ? CallIconLight : CallIcon}
                alt="call icon"
              />
              <div className="content">
                <p>
                  Food is ready? <br /> Please Call me
                </p>
              </div>
            </label>
            {/* other */}
            <label
              className={`instruct-box other-text ${props.selectedOption === "other" ? "selected" : ""
                }`}
            >
              {props.selectedOption === "other" && (
                <span
                  className={`checkmark ${props.selectedOption === "other" ? "active" : ""
                    }`}
                >
                  <MdDone />
                </span>
              )}
              <input
                type="radio"
                name="Instruction"
                value="other"
                checked={props.selectedOption === "other"}
                onChange={() => props.handleOptionChange("other")}
              />
              <div className="header-div">
                <div className="icons">
                  <RxDot />
                  <RxDot />
                  <RxDot />
                </div>
                <p>Other</p>
              </div>
              <div className="content">
                <span>text me</span>
              </div>
            </label>
          </div>
          {/* other text*/}
          {props.selectedOption === "other" && (
            <div className="input-textarea">
              <Form>
                <Form.Control
                  as="textarea"
                  placeholder="Eg: Add extra choose and spices"
                  rows={3}
                  value={instruction}
                  onChange={props.otherInstruction}
                />
              </Form>
            </div>
          )}
        </div>
      </>
    </Accordion.Collapse>
  );
}

const AddressSection = (props) => {
  const { getOrderMode, getOrderTime, setOrderMode } = OrderFlow();
  const { setAddressPopupshow,currentDateTime,setInstruction ,AddressPopupshow} = useContext(CheckoutContext);
  const { theme } = useContext(ThemeContext);
  const HandleClick = () => {
    props.setShowPreorder(true);
  };
  const postcodeDetail = localStorage.getItem("postcodeDetail") || "";
  const loginAddress = localStorage.getItem("loginAddress") || "";
  const guestAddress = localStorage.getItem("guestAddress") || "";
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    let address = "";
    if (isLoggedIn === "true") {
      address = loginAddress ? JSON.parse(loginAddress) : "";
    } else {
      address = guestAddress ? JSON.parse(guestAddress) : "";
    }
    const parsedPostcode = postcodeDetail ? JSON.parse(postcodeDetail) : "";
    if (getOrderMode === "Delivery" && parsedPostcode && !address.postcode) {
      setAddressPopupshow(true);
    }
  }, [getOrderMode, postcodeDetail, loginAddress, guestAddress, isLoggedIn]);

  const HandleClickClose = () => {
    props.setShowPreorder(false);
  };
  // responsive script
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // responsive script
  const instructionToOptionMap = {
    "Need Double Bags": "doublebag",
    "Food is ready? Please Call me": "call",
    "Leave at door": "door",
    "Leave with guard": "guard",
  };

  const instruction = localStorage.getItem("instruction");
  const inst = instructionToOptionMap[instruction] || "other";

  const [selectedOption, setSelectedOption] = useState(inst);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const instructionsMap = {
      doublebag: "Need Double Bags",
      call: "Food is ready? Please Call me",
      door: "Leave at door",
      guard: "Leave with guard",
    };

    const instruction = instructionsMap[option];
    if (instruction) {
      localStorage.setItem("instruction", instruction);
    }
    setInstruction(instruction);
  };
  function otherInstruction(event) {
    const value = event.target.value;
    setInstruction(value);
    localStorage.setItem("instruction", value);
  }
  const orderTab = localStorage.getItem("orderType") || "";
  const tatTime = localStorage.getItem("tatTime") || "0 - 10";
 
  const preOrderTime=localStorage.getItem('preOrder');
  if(currentDateTime>getOrderTime || currentDateTime>preOrderTime){
    // if(!AddressPopupshow){
     
    //   props.setShowPreorder(true);
    // }
  }

  return (
    <>
      <ChangeOrder
        theme={theme}
        selectedOrderMode={getOrderMode}
        setSelectedOrderModeValue={setOrderMode}
        showPreorder={props.showPreorder}
        setShowPreorder={props.setShowPreorder}
        HandleClickClose={HandleClickClose}
      ></ChangeOrder>

      <h3 className="title">Review and place {getOrderMode} order</h3>
      <Accordion defaultActiveKey="0">
        <div className="address-div">
          <ContextAwareToggle eventKey="0">
            <MdOutlineKeyboardArrowDown />
          </ContextAwareToggle>

          <div className="header-content">
            <div className="order-data">
              <img
                src={getOrderMode === "Delivery" ? OrderTypeImg : CollectionImg}
                alt="Order Mode"
              />
              <p>
                {getOrderMode},{" "}
                {orderTab === "" || orderTab === "ASAP"
                  ? tatTime + " Mins"
                  : getOrderTime}
              </p>
            </div>
            <button onClick={HandleClick}>Amend</button>
          </div>
          {getOrderMode === "Delivery" ? (
            <>
              <DeliveryData
                theme={theme}
                width={width}
                breakpoint={breakpoint}
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
                otherInstruction={otherInstruction}
              ></DeliveryData>
            </>
          ) : (
            <>
              <CollectionData
                theme={theme}
                width={width}
                breakpoint={breakpoint}
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
                otherInstruction={otherInstruction}
              ></CollectionData>
            </>
          )}
        </div>
      </Accordion>
    </>
  );
};

const PaymentMethod = (params) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { theme } = useContext(ThemeContext);
  const {
    chargesdetail,
    stripepayment,
    paymentRequest,
    PlaceOrderJson,
    stripe,
    elements,
    placeOrderApiJson,
    payType,
    setPayType,
    paymentSva,
    setPaymentSva,
    paymentMId,
    setPaymentMId,
    paymentIntentId,
    setPaymentIntentId,
    paymentType,
    setPaymentType,
    setPaySubmit,
    paySubmit,
    clientSecret,
    setClientSecret,
    svclientSecret,
    setSvclientSecret,
    gpaySubmit,
    setSvpaySubmit,
    svpaySubmit,
    setApaySubmit,
    apaySubmit,
    placeorder,
    walletstatus,
    setWalletstatus,
    walletamount,
    setWalletamount,
    setCardErrorMessage,
    cardErrorMessage,
    finalTotalValue,
    setFinalTotalValue,
    setPaymentMethodId,
    updateJsonData,
    jsonData,
    selectedValue,
    setSelectedValue,
    paymentOptions,
    cardtype,
    setCardtype,
    applepaytype,
    setApplepaytype,
    googlepaytype,
    setGooglepaytype,
    footerBtn,
    setFooterBtn,
    sectionRef,
    buttonstatus,
    setButtonstatus,
    setPaymentModalShow,
    paymentModalShow,
    gpaydeviceInfo,
    appledeviceInfo,
    setPaySaveCard,
    handlesavecardPayment,
    CARD_OPTIONS1,
    containerStyle,
    setSaveCardError,
    cardStatus,setCardStatus,
    paySpinner
  } = useContext(CheckoutContext);
  const [activeKey, setActiveKey] = useState("add-card");
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedCardCCV, setSelectedCardCCV] = useState(""); // Add state to store CCV
  const [savecardPay, setSavecardPay] = useState(0); // Add state to store CCV
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // stripe style
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: theme === "dark" ? "#fff" : "#000",
        fontWeight: 300,
        border: "1px solid #ddd", // Add border style here
        fontFamily: "Source Code Pro, monospace",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: `${theme === "dark" ? "#fff" : "#000"}`, // Conditional color
          backgroundColor: `${theme === "dark" ? "#02111f" : "#fff"}`, // Conditional color
        },
        "::placeholder": { color: "#aab7c4" },
        backgroundColor: theme === "dark" ? "#02111f" : "#fff", // // Background color for the card input area
        padding: "10px", // Adjust padding as needed
        fontSize: "16px",// Padding for the card input area
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: theme === "dark" ? "red" : "#000",
        backgroundColor: theme === "dark" ? "#02111f" : "#fff", //Background color for invalid input
        padding: "10px", // Padding for the invalid input area
      },
    },
  };
 

  // stripe style
  // Function to update the JSON data with the new paymentMethodId

  const pmid = jsonData[0]["paymentDetail"]["paymentMethodId"];

  useEffect(() => {
    const pmid = jsonData[0]["paymentDetail"]["paymentMethodId"];
  }, [jsonData]);

  // Function to handle the change event
  const handleChange = async (event) => {
    const setpt = event?.target?.value;
    // Define a lookup table for payment types
    const paymentTypeMap = {
      cardimg: 1,
      "apple-pay": 7,
      "google-pay": 8,
      wallet: 9,
      "klarna": 10,
      "paypal": 11,
      "savedcard": 12
    };

    // Use the lookup table to set the payment type, defaulting to 1 if not found
    const paymentType = paymentTypeMap[setpt] || 1;

    setPaymentType(paymentType);
    console.log(event.target.value);
    setSelectedValue(event.target.value);
    console.log(selectedValue);
    // handlePaymentSelection(paymentType, setpt);
  };

  const handlePaymentSelection = async (paymentType, selectedValue) => {
    setPaymentType(paymentType);
    console.log(selectedValue);
    setSelectedValue(selectedValue);
    setPaymentModalShow(false)
  };

  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardaccordion, setcardAccordion] = useState(null);
  const [primary, setPrimary] = useState(true);
  const [fullscreen, setFullscreen] = useState("sm-down");
  const [showchildpopup, setshowchildpopup] = useState(false);

  const cardSelector = useSelector(
    (state) => state.placeorderStatusReducer?.placecard
  );

  useEffect(() => {
    setcardAccordion(cardSelector);
  }, [cardSelector]);
  // console.log(cardaccordion);

  const handlecardChange = (e) => {
    setSelectedCard(e.target.value);
    setPrimary(false);
    dispatch(postPlaceOrderStatus(true));
  };

  const handleSaveCardCheckboxClick = () => {
    setPaymentSva(paymentSva == 0 ? 1 : 0);
  };

  // console.log(paymentSva);

  useEffect(() => {
    // Check if stripepayment is available before updating state
    if (stripepayment) {
      const paymentStatus = stripepayment.message.paymentStatus;

      setCardtype(paymentStatus.card && 1);
      setApplepaytype(paymentStatus.applePay && 1);
      setGooglepaytype(paymentStatus.googlePay && 1);
    }
  }, [stripepayment]);

  useEffect(() => {
    if (stripepayment && !isNaN(finalTotalValue) && finalTotalValue > 0) {
      const oamount = finalTotalValue;
      const walletamount = stripepayment?.message?.wallet;

      if (walletamount !== undefined) {
        setWalletamount(walletamount);
        setWalletstatus(walletamount >= oamount ? 1 : 0);
      }
    }
  }, [stripepayment, finalTotalValue]);

  // console.log(svpaySubmit);

  // console.log(svclientSecret);

  useEffect(() => {
    // save card client secret id confirm payment
    if (svpaySubmit == 2) {
      // After set save card secret id i have changed svpaysubmit == 2
      const confirmPayment = async () => {
        const cardCvcElement = elements.getElement(CardCvcElement);

        try {
          const result = await stripe.confirmCardPayment(svclientSecret, {
            payment_method: paymentMId,
            payment_method_options: {
              card: {
                cvc: cardCvcElement,
              },
            },
          });

          if (result.error) {
            // Handle the error (e.g., display an error message)
            setSaveCardError(result.error.message);
            console.error(result.error.message);
          } else {
            // Payment was successful
            setSvpaySubmit(3);
            setPayType("paymentIntentId");
            setPaymentIntentId(result.paymentIntent.id);
            console.log("Payment confirmed:", result.paymentIntent);
          }
        } catch (error) {
          // Handle any unexpected errors
          console.error("Error confirming payment:", error);
        }
      };

      // Call the function to confirm payment
      confirmPayment();
    }

    // common confirm payment code
    if (paySubmit == 2) {
      // After set save card secret id i have changed svpaysubmit == 2
      const cardconfirmPayment = async () => {
        // console.log(clientSecret);
        // console.log(paymentMId);

        try {
          const result = await stripe
            .handleCardAction(clientSecret)
            .then(function (result) {
              if (result.error) {
                // Handle the error (e.g., display an error message)
                console.error(result.error.message);
              } else {
                setPaySubmit(3);
                setPayType("paymentIntentId");

                console.log("Payment confirmed:", result);
              }
            });
        } catch (error) {
          // Handle any unexpected errors
          console.error("Error confirming payment:", error);
        }
      };

      // Call the function to confirm payment
      cardconfirmPayment();
    }
  }, [svpaySubmit, svclientSecret, paymentMId, elements, stripe, paySubmit]);

  if (!stripepayment) {
    return <div>Loading...</div>;
  }

  const SavedCards = stripepayment?.message?.card?.cardDetail;

  if(SavedCards){
    setPaySaveCard(SavedCards);
  }

  // Assign to a separate variable
  // console.log(SavedCards);

 

  const handleToggle = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
    setSavecardPay(activeKey == "add-card" ? 1 : 0);
  };
  const handleCardChange = (e) => {
    setCardStatus(true);
    setCardErrorMessage(null);
    setFooterBtn(false);
    dispatch(postPlaceOrderStatus(false));
  };



  function handleShow() {
    setPaymentModalShow(true);
  }

  function handlechildshow() {
    setPaymentType(1);
    setSelectedValue("cardimg1");
    setshowchildpopup(true);
    setPaymentModalShow(false);
  }

  const handleClose = () => setPaymentModalShow(false);
  const handleClosechild = () => setshowchildpopup(false);

   if(paySpinner){
    <Loader/>
   }


  return (
    <>
      <div className="payment-method d-none d-md-block" ref={sectionRef}>
        <Accordion defaultActiveKey="0">
          <div className="header-content">
            <div className="order-data">
              <img
                src={theme === "dark" ? WalletIconwhite : WalletIcon}
                alt="Order Mode"
              />
              <p>Payment Method</p>
            </div>
          </div>
          <ContextAwareToggle eventKey="0">
            <MdOutlineKeyboardArrowDown />
          </ContextAwareToggle>
          <Accordion.Collapse eventKey="0">
            <>
              <div className="payment-tab">
                <form className="tabs-div">
                  {paymentOptions?.map(
                    ({ value, icon, darkicon, status, type, device }) => (
                      <>
                        {status == 1 ? (
                          <>
                            {device == 1 ? (
                              <label
                                className={
                                  type == 1 && type != 3
                                    ? "mobileview"
                                    : "desktopviews"
                                }
                                key={value}
                              >
                                <span
                                  className={
                                    selectedValue === value && "active"
                                  }
                                >
                                  {selectedValue === value && <MdDone />}
                                </span>
                                <img
                                  className={value}
                                  src={theme === "dark" ? darkicon : icon}
                                  alt=""
                                />

                                <input
                                  type="radio"
                                  value={value}
                                  name="payment"
                                  checked={selectedValue === value}
                                  onChange={handleChange}
                                />
                              </label>
                            ) : null}
                          </>
                        ) : null}
                      </>
                    )
                  )}
                </form>

                {selectedValue === "cardimg" ? (
                  <>
                    <div className="selected-tab">
                      <div className="card-tab">
                        <div className="header">
                          <h5>Credit Card or Debit Card</h5>
                        </div>
                        {/* New Accordion Start */}
                        <Accordion
                          className="selected-tab-accord"
                          activeKey={activeKey}
                          onSelect={handleToggle}
                        >
                          <Accordion.Item eventKey="add-card">
                            <Accordion.Header>
                              <span>
                                {activeKey === "add-card" ? (
                                  <BiMinus />
                                ) : (
                                  <BiPlus />
                                )}
                              </span>
                              Add Card
                            </Accordion.Header>
                            <Accordion.Body>
                              <form className="add-card-form">
                                <Row>
                                  <Col xxl={6} xl={6}>
                                    <Form.Label>Card Number</Form.Label>
                                    <div style={{ height: '40px' }}>
                                    <CardNumberElement
                                      options={CARD_OPTIONS}
                                      className="custom-card-element"
                                      onChange={handleCardChange}
                                      style={{ height: '300px' }}
                                    />
                                    <span
                                      className="card-error"
                                      style={{ color: "red" }}
                                    >
                                      {cardErrorMessage}{" "}
                                    </span>
                                    </div>
                                  </Col>
                                  <Col xxl={3} sm={6} xs={6} xl={3}>
                                    <Form.Label>Expires on</Form.Label>

                                    <CardExpiryElement
                                      options={CARD_OPTIONS}
                                      onChange={handleCardChange}
                                    />
                                  </Col>
                                  <Col xxl={3} sm={6} xs={6} xl={3}>
                                    <Form.Label>Security Code</Form.Label>
                                    {savecardPay == 0 && (
                                      <CardCvcElement
                                        options={CARD_OPTIONS}
                                        onChange={handleCardChange}
                                      />
                                    )}
                                  </Col>
                                  {isLoggedIn !== "false" ? (
                                    <>
                                      <Col xxl={12}>
                                        <Form.Check
                                          label=" Securely save this card future order"
                                          name="form-check"
                                          type="checkbox"
                                          id="form-check"
                                          onClick={() =>
                                            handleSaveCardCheckboxClick()
                                          }
                                        />
                                      </Col>
                                    </>
                                  ) : null}
                                </Row>
                              </form>
                            </Accordion.Body>
                          </Accordion.Item>
                          {userData && isLoggedIn === "true" ? (
                            <>
                          {!cardaccordion && isLoggedIn !== "false" && SavedCards ? (
                            <Accordion.Item eventKey="saved-card">
                              <Accordion.Header>
                                <span>
                                  {activeKey === "saved-card" ? (
                                    <BiMinus />
                                  ) : (
                                    <BiPlus />
                                  )}
                                </span>
                                Saved Cards
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="saved-cards">
                                  <div className="save-card-form">
                                    {SavedCards ? (
                                      <>
                                        {SavedCards.map((savedCard, index) => (
                                          <label key={index}>
                                            <div className="main-data">
                                              <span
                                                className={` tick
                                               ${selectedCard === savedCard.card && "active"}
                                              `}
                                                    >
                                                      {selectedCard ===
                                                        savedCard.card ? (
                                                        <>
                                                          <MdDone />
                                                        </>
                                                      ) : savedCard.primary ===
                                                        "1" && primary ? (
                                                        <>
                                                          <MdDone />
                                                        </>
                                                      ) : (
                                                        <></>
                                                      )}
                                                    </span>
                                                    <img
                                                      src={savedCard.brand}
                                                      alt=""
                                                    />
                                                    <div className="card-data">
                                                      <p>{savedCard.card}</p>
                                                      <span>
                                                        Expires on{" "}
                                                        {savedCard.expMonth}/
                                                        {savedCard.expYear %
                                                          100}
                                                      </span>
                                                    </div>
                                                    <input
                                                      type="radio"
                                                      value={savedCard.card}
                                                      name="savedcard"
                                                      checked={
                                                        selectedCard ===
                                                        savedCard.card
                                                      }
                                                      onChange={
                                                        handlecardChange
                                                      }
                                                    />
                                                  </div>
                                                  {selectedCard ===
                                                    savedCard.card ? (
                                                    <>
                                                      <div className="cvv-btn">
                                                        {savecardPay == 1 && (
                                                          <CardCvcElement
                                                            options={
                                                              CARD_OPTIONS
                                                            }
                                                          />
                                                        )}

                                                        <button
                                                          disabled={
                                                            buttonstatus
                                                              ? true
                                                              : false
                                                          }
                                                          onClick={() =>
                                                            handlesavecardPayment(
                                                              savedCard.paymentMethodId
                                                            )
                                                          }
                                                        >
                                                          {buttonstatus ? (
                                                            <Spinner
                                                              animation="border"
                                                              size="sm"
                                                              variant="success"
                                                            />
                                                          ) : (
                                                            "Pay"
                                                          )}
                                                        </button>
                                                      </div>
                                                    </>
                                                  ) : savedCard.primary ===
                                                    "1" && primary ? (
                                                    <>
                                                      <div className="cvv-btn">
                                                        {savecardPay == 1 && (
                                                          <CardCvcElement
                                                            options={
                                                              CARD_OPTIONS
                                                            }
                                                          />
                                                        )}

                                                        <button
                                                          disabled={
                                                            buttonstatus
                                                              ? true
                                                              : false
                                                          }
                                                          onClick={() =>
                                                            handlesavecardPayment(
                                                              savedCard.paymentMethodId
                                                            )
                                                          }
                                                        >
                                                          {buttonstatus ? (
                                                            <Spinner
                                                              animation="border"
                                                              size="sm"
                                                              variant="success"
                                                            />
                                                          ) : (
                                                            "Pay"
                                                          )}
                                                        </button>
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <></>
                                                  )}
                                                </label>
                                              )
                                            )}
                                          </>
                                        ) : null}
                                      </div>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              ) : (
                                <></>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </Accordion>
                        {/* New Accordion End */}
                      </div>
                    </div>
                  </>
                ) : selectedValue === "google-pay" ? (
                  <div className="selected-tab"></div>
                ) : selectedValue === "apple-pay" ? (
                  <div className="selected-tab"></div>
                ) : selectedValue === "wallet" ? (
                  <div className="selected-tab">
                    <div className="wallet-tab">
                      {walletstatus == 1 ? (
                        <>
                          <img
                            src={theme === "dark" ? CardIconDark : CardIcon}
                            alt=""
                          />

                          <h4>{walletamount}</h4>
                          <p>Available Balance</p>
                        </>
                      ) : (
                        <>
                          <img
                            src={theme === "dark" ? CardIconDark : CardIcon}
                            alt=""
                          />

                          <h4>{walletamount}</h4>
                          <p>Not placed Available Balance</p>
                        </>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          </Accordion.Collapse>
        </Accordion>
      </div>
      {/* mobile payment ui */}
      <div className="payment-method d-block d-sm-none" ref={sectionRef}>
        <Accordion defaultActiveKey="0">
          <div className="header-content">
            <div className="order-data">
              {/* <img
              src={theme === "dark" ? WalletIconwhite : WalletIcon}
              alt="Order Mode"
            /> */}
              <p>Try More ways to pay</p>
            </div>
            <div className="order-datap">
              <p>We support Fusion pay,Klarna, Paypal and 2+ more</p>
            </div>
          </div>
          <div className="checkoutimgs">
            <div className="checkoutimgschild">
              <img
                src={appledeviceInfo === 1 ? (theme === "dark" ? applepaydark : applepays) : Gpay}
                alt=""
              />
              <img src={CardImgWhite} alt="" />
              {/* <img src={appledeviceInfo === 1 ? applepays : (theme === "dark" ? applepaydark : Gpay)} alt="" /> */}
              {/* <img src={Paypallogo} alt="" />
              <img src={klarnapay} alt="" /> */}
              <img src={threeplus} alt="" />
            </div>
            <div>
              <IoIosArrowForward onClick={() => handleShow()} />
            </div>
          </div>
        </Accordion>
        <div>
          <Modal
            show={paymentModalShow}
            fullscreen={fullscreen}
            onHide={() => setPaymentModalShow(false)}
            id="checkoutcustomModal"
            className={theme === "dark" ? "dark-popup" : null}
            dialogClassName="bottom-modal"
          >
            {" "}
            <IoCloseSharp className="closeicon" onClick={handleClose} />
            <Modal.Header>
              <Modal.Title>Choose Payment Method</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="payment-options">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="checkoutpayUI">
                      <div className="checkoutpayUIchild">
                        <img
                          src={theme === "dark" ? CreditCardImg : CreditCardImg}
                          alt=""
                          onClick={handlechildshow}
                        />
                        <h5 onClick={handlechildshow}>Add debit / credit Card</h5>
                      </div>

                      <div>
                        {" "}
                        <span onClick={handlechildshow}>
                          <IoIosArrowForward />
                        </span>
                      </div>
                    </div>
                    <span className="badge badge-primary badge-pill">
                      <i className="fas fa-chevron-right"></i>{" "}
                      {/* Right arrow icon */}
                    </span>
                  </li>
                  <div className="creditcardparent">
                  {userData && isLoggedIn === "true" ? (
                  <>
                  {SavedCards ? (
                  <>
                    <h5>Saved Card Details</h5>
                    
                    
                    {SavedCards.map((savedCard, index) => (
                    <div key={index}>
                    {savedCard.primary ==="1"?(
                    <div className="creditcard" >
                     
                      <div className="creditcardui">
                       <img
                            src={savedCard.brand}
                            alt=""
                            style={{height:"40px"}}
                          />
                        <div className="creditcarduichild">
                          <p>{savedCard.card}</p>
                        </div>
                      </div>

                      <div>
                        <input name="gender" type="radio"
                          value={"savedcard"}
                          onClick={() => handlePaymentSelection(12, "savedcard")}
                        />
                      </div>
                    </div>):index===0?(
                      <div className="creditcard" >
                     
                      <div className="creditcardui">
                       <img
                            src={savedCard.brand}
                            alt=""
                            style={{height:"40px"}}
                          />
                        <div className="creditcarduichild">
                          <p>{savedCard.card}</p>
                        </div>
                      </div>

                      <div>
                        <input name="gender" type="radio"
                          value={"savedcard"}
                          onClick={() => handlePaymentSelection(12, "savedcard")}
                        />
                      </div>
                    </div>):null}
                    </div>
                    ))}
                    </>):null}
                  </>
                  ):(null)}
                  </div>
                  {appledeviceInfo === 1 ? (
                    <li
                      className="list-group-item"
                      value={"apple-pay"}
                      onClick={() => handlePaymentSelection(7, "apple-pay")}
                    >
                      <div className="checkoutpayUI">
                        <div className="checkoutpayUIchild">
                    <img  src={theme === "dark" ? applepaydark : applepays}  alt="" />
                      
                          {/* <img
                            src={applepays}
                            alt="GPay"
                            className="payment-logo"
                          /> */}
                          <h5>Pay</h5>
                        </div>

                        <div>
                          {" "}
                          <span>
                            <IoIosArrowForward />
                          </span>
                        </div>
                      </div>
                      <span className="badge badge-primary badge-pill">
                        <i className="fas fa-chevron-right"></i>{" "}
                        {/* Right arrow icon */}
                      </span>
                    </li>) : null}
                  {/*  */}
                  {gpaydeviceInfo === 1 ? (
                    <li
                      className="list-group-item"
                      value={"google-pay"}
                      onClick={() => handlePaymentSelection(8, "google-pay")}
                    >
                      <div className="checkoutpayUI">
                        <div className="checkoutpayUIchild">
                          <img
                            src={Gpay}
                            alt="google-pay"
                            className="payment-logo"
                            onClick={() => handlePaymentSelection(8, "google-pay")}
                          />
                          <h5 onClick={() => handlePaymentSelection(8, "google-pay")}>Google Pay</h5>
                        </div>

                        <div>
                          {" "}
                          <span>
                            <IoIosArrowForward />
                          </span>
                        </div>
                      </div>
                      <span className="badge badge-primary badge-pill">
                        <i className="fas fa-chevron-right"></i>{" "}
                        {/* Right arrow icon */}
                      </span>
                    </li>) : null}
                  {/* <li
                    className="list-group-item"
                    value={"klarna"}
                    onClick={() => handlePaymentSelection(10, "klarna")}
                  >
                    <div className="checkoutpayUI">
                      <div className="checkoutpayUIchild">
                        <img
                          src={klarnapay}
                          alt="klarnapay"
                          className="payment-logo"
                        />
                        <h5>klarna</h5>
                      </div>

                      <div>
                        {" "}
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                    </div>
                    <span className="badge badge-primary badge-pill">
                      <i className="fas fa-chevron-right"></i>{" "}
                     
                    </span>
                  </li> */}
                  {/* <li
                    className="list-group-item"
                    value={"paypal"}
                    onClick={() => handlePaymentSelection(11, "paypal")}
                  >
                    <div className="checkoutpayUI">
                      <div className="checkoutpayUIchild">
                        <img
                          src={Paypallogo}
                          alt="Paypal"
                          className="payment-logo"
                        />
                        <h5>Paypal</h5>
                      </div>

                      <div>
                        {" "}
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </div>
                    </div>
                    <span className="badge badge-primary badge-pill">
                      <i className="fas fa-chevron-right"></i>{" "}
                    </span>
                  </li> */}
                  <li
                    className="list-group-item"
                    value={"wallet"}
                    onClick={() => {
                      if (walletstatus=== 1) {
                      handlePaymentSelection(9, "wallet")
                      }
                    }
                  }
                  >
                    <div className="checkoutpayUI">
                      <div className="checkoutpayUIchild">
                        <img
                          src={theme === "dark" ? CardIconDark : CardIcon}
                          alt=""
                        />
                        <h5 className={walletstatus===1?"mobile-wallet":"mobile-wallet-disabled"}>Wallet</h5>
                      </div>

                      <div>
                        {" "}
                        <span className={walletstatus===1?"":"mobile-wallet-icon-disabled"}>
                          <IoIosArrowForward />
                        </span>
                      </div>
                    </div>
                    <span className="badge badge-primary badge-pill">
                      <i className="fas fa-chevron-right"></i>{" "}
                      {/* Right arrow icon */}
                    </span>
                    {walletstatus!==1 &&
                    <div  className="mobile-wallet-msg-disabled">
                    
                     <p className="mobile-wallet-msg-disabled-text">Insufficient Wallet Balance</p>
                    </div>
                    }
                  </li>
                </ul>
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            show={showchildpopup}
            fullscreen={fullscreen}
            onHide={() => setPaymentModalShow(false)}
            id="checkoutcustomModalchild"
            className={theme === "dark" ? "dark-popup" : null}
          >
            {" "}
            <IoCloseSharp className="closeicon" onClick={handleClosechild} />
            <Modal.Header>
              <Modal.Title>Add credit / debit card </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex align-items-center justify-content-center flex-column vh-50 checkOutMobile">
                <Form className="form-label mb-3">
                  <Row>
                    <Col xxl={6} xl={6} style={{ padding: "10px" }}>
                      <Form.Label>Card Number</Form.Label>
                      <div style={containerStyle}>
                      <CardNumberElement
                        options={CARD_OPTIONS1}
                        className="custom-card-element"
                        style={{ height: '300px' }}
                        onChange={handleCardChange}
                      />
                      </div>
                      <span
                        className="card-error"
                        style={{ color: "red" }}
                      >
                        {cardErrorMessage}{" "}
                      </span>
                    </Col>
                    <Col xxl={3} sm={6} xs={6} xl={3}>
                      <Form.Label>Expires on</Form.Label>
                      <div style={containerStyle}>
                      <CardExpiryElement
                        options={CARD_OPTIONS1}
                        onChange={handleCardChange}
                      />
                      </div>
                    </Col>
                    <Col xxl={3} sm={6} xs={6} xl={3}>
                      <Form.Label>Security Code</Form.Label>
                      {savecardPay == 0 && (
                         <div style={containerStyle}>
                        <CardCvcElement
                          options={CARD_OPTIONS1}
                          onChange={handleCardChange}
                        />
                        </div>
                      )}
                    </Col>
                    {isLoggedIn !== "false" ? (
                      <>
                        <div className="p-2">
                          <Col xxl={12}>
                            <Form.Check
                              label=" Securely save this card future order"
                              name="form-check"
                              type="checkbox"
                              id="form-check"
                              onClick={() =>
                                handleSaveCardCheckboxClick()
                              }
                            />
                          </Col>
                        </div>
                      </>
                    ) : null}
                  </Row>
                </Form>

              </div>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: cardStatus ? '#9ee86f' : '#ddd' }}>
              <OrderButton />
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};
function Loader() {
  return (
    <div class="loading">
      <Spinner animation="border" size="lg" variant="success" />
      <p>
        Please Wait while your Payment is being verified. you will be redirected
        automatically.
      </p>
    </div>
  );
}
// const BusyPopup = () => {
//   const { theme } = useContext(ThemeContext);

//   const [busyshow, setBusyShow] = useState(false);

//   const handleClose = () => setBusyShow(false);
//   const handlebusyShow = () => setBusyShow(true);

//   return (
//     <div>
//       <Button variant="primary" onClick={handlebusyShow}>
//         Busy
//       </Button>

//       <Modal show={busyshow} onHide={handleClose} id="busypopup" className={theme === "dark" ? "dark-popup" : null}>
//         <Modal.Body>
//           <div>
//             <div className="d-flex justify-content-between">
//               <h3>Delivery is busy right now!</h3>   <IoCloseSharp onClick={handleClose} />
//             </div>
//             <p>There’s high demand in your area and we are temporily pausing delivery.we expect to have delivery service restored shortly.
//             </p>
//           </div>

//           <div className="btnparent">
//             <Button variant="secondary" onClick={handleClose}>
//               Continue to menu
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Browse Restaurants
//             </Button>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   )
// }
// cancel popup 
const CancelPopup = () => {
  const { theme } = useContext(ThemeContext);

  const [cancelshow, setCancelShow] = useState(false);

  const handleClose = () => setCancelShow(false);
  const handlecancelShow = () => setCancelShow(true);

  return (
    <div>
      <Button variant="primary" className="d-none" onClick={handlecancelShow}>
        Order cancel Popup
      </Button>

      <Modal show={cancelshow} onHide={handleClose} id="cancelpopup" className={theme === "dark" ? "dark-popup" : null}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Are you sure you want to cancel  <br /> the transaction?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
// loader spinner




const AddTip = (params) => {
  const TipsList = [
    {
      Label: "0%",
    },
    {
      Label: "5%",
    },
    {
      Label: "10%",
    },
    {
      Label: "15%",
    },
  ];
  const [selectedTip, setSelectedTip] = useState("0%");
  const [customTipAmount, setCustomTipAmount] = useState("");
  const [showCustomTip, setShowCustomTip] = useState(false);
  const { setDriverTip, subTotal } = useContext(CheckoutContext);

  const setTipValue = (tipValue, setDriverTip) => {
    localStorage.setItem("driverTipValue", tipValue.toFixed(2));
    setDriverTip(tipValue.toFixed(2));
  };

  useEffect(() => {
    if (showCustomTip) {
      const customTipValue = parseFloat(customTipAmount) || 0;
      setTipValue(customTipValue, setDriverTip);
    } else {
      const tipPercentage = parseFloat(selectedTip) || 0;
      const tipValue = subTotal * (tipPercentage / 100) || 0;
      setTipValue(tipValue, setDriverTip);
    }
  }, [selectedTip, showCustomTip, customTipAmount, subTotal, setDriverTip]);

  const handleTipChange = (e) => {
    setSelectedTip(e.target.value);
  };

  const toggleCustomTip = () => {
    setShowCustomTip(!showCustomTip);
  };

  return (
    <>
      <div className="add-tip">
        <h3 className="tip-title">Add a Tip to say thanks</h3>
        <Accordion defaultActiveKey="0">
          <ContextAwareToggle eventKey="0">
            <MdOutlineKeyboardArrowDown />
          </ContextAwareToggle>
          <Accordion.Collapse eventKey="0">
            <>
              <form className="tips-form">
                {!showCustomTip ? (
                  <>
                    {TipsList.map((Tips, index) => (
                      <label
                        key={index}
                        className={selectedTip === Tips.Label && "active"}
                      >
                        <span>{Tips.Label}</span>
                        <input
                          type="radio"
                          value={Tips.Label}
                          name="tips"
                          checked={selectedTip === Tips.Label}
                          onChange={handleTipChange}
                        />
                      </label>
                    ))}
                  </>
                ) : (
                  <>
                    <label className="tip-label">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Tip"
                        autoFocus
                        value={customTipAmount}
                        onChange={(e) => setCustomTipAmount(e.target.value)}
                      />
                    </label>
                  </>
                )}
                <label className="label-btn" onClick={toggleCustomTip}>
                  {showCustomTip ? "Cancel" : "Custom Tip"}
                </label>
              </form>
            </>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </>
  );
};

const DonateChange = (params) => {
  const { setRoundedValue, driverTip, finalTotal } =
    useContext(CheckoutContext);

  const checkRoundEnable =
    JSON.parse(localStorage.getItem("checkRoundEnable")) || false;
  const [roundOff, setRoundOff] = useState(checkRoundEnable);
  const [checkFirstTime, setCheckFirstTime] = useState(true);

  const roundOffTotal = () => {
    const newRoundOff = !roundOff; // Toggle roundOff
    setRoundOff(newRoundOff);
  };

  useEffect(() => {
    const calculateRoundedValue = () => {
      const roundedValue = (Math.ceil(finalTotal) - finalTotal).toFixed(2);
      setRoundedValue(roundedValue);
      localStorage.setItem("roundOffPrice", roundedValue);
      localStorage.setItem("checkRoundEnable", true);
    };

    if (checkFirstTime) {
      calculateRoundedValue();
      setRoundOff(false);
      setCheckFirstTime(false);
    } else if (roundOff) {
      calculateRoundedValue();
    } else {
      localStorage.setItem("roundOffPrice", "0");
      localStorage.setItem("checkRoundEnable", false);
      setRoundedValue("0");
    }
  }, [checkFirstTime, driverTip, roundOff, finalTotal]);

  return (
    <>
      <div className="donate-change">
        <h3 className="donate-title">Donate the Change</h3>
        <Accordion defaultActiveKey="0">
          <ContextAwareToggle eventKey="0">
            <MdOutlineKeyboardArrowDown />
          </ContextAwareToggle>
          <Accordion.Collapse eventKey="0">
            <>
              <div className="content">
                <Form.Check
                  label=" you’re opted in to round up and donate to Fusion kitchen fund. By
            checking this box you agree to the donate the change"
                  name="Donate"
                  type="checkbox"
                  id="Donate"
                  checked={roundOff}
                  onClick={roundOffTotal}
                />
              </div>
              <Link to="/">Learn More</Link>
            </>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </>
  );
};

const EarnPoints = (params) => {
  const { getLoyalty } = useContext(CheckoutContext);
  return (
    <>
      <div className="earn-points">
        <div className="content">
          <img src={EarnIcon} alt="" />
          <p>By Placing this order earn {getLoyalty?.point} points </p>
        </div>
        <Link to="/">Learn More</Link>
      </div>
    </>
  );
};
const TermsText = (second) => {
  return (
    <>
      <div className="terms-text">
        <p>
          By placing your order, you agree to Fusion Kitchen’s{" "}
          <Link to="/general-terms">terms </Link>of use and{" "}
          <Link to="/privacy">privacy policy</Link>
        </p>
      </div>
    </>
  );
};

const mobileorderbtn = () => {
  return <div>hjsdhjksds</div>;
};

const OrderButton = (params) => {
  const dispatch = useDispatch();

  //status selector
  const placeOrder_status = useSelector(
    (state) => state.placeorderStatusReducer?.placeorder
  );
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(placeOrder_status);
  }, [placeOrder_status]);
  //end status selector
  // console.log(placeOrder_status);

  const {
    stripe,
    elements,
    setPaymentMId,
    setPayType,
    placeOrderApiJson,
    setPaySubmit,
    paymentType,
    paySubmit,
    walletstatus,
    setCardErrorMessage,
    setPaymentSuccessShow,
    setFaildShow,
    buttonstatus,
    setButtonstatus,
    placeorder,
    payType,
    setCardStatus
  } = useContext(CheckoutContext);

  const { getOrderMode } = OrderFlow();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginAddress = localStorage.getItem("loginAddress") || "";
  const guestAddress = localStorage.getItem("guestAddress") || "";
  const { setAddressPopupshow } = useContext(CheckoutContext);

  const PlacewalletOrder = async (event) => {
    event.preventDefault();
    setPaySubmit(9);
  };
  useEffect(() => {
    if (
      placeorder?.response_code === 400 &&
      !placeorder.status &&
      payType !== "saveCardPaymentIntent"
    ) {
      setPaymentSuccessShow(false);
      setCardErrorMessage(placeorder.message);
      setFaildShow(true);
      setButtonstatus(false);
      setCardStatus(false);
    }
  }, [placeorder]);
  const HandleClick = async (event) => {
    let addressData = null;

    if (isLoggedIn === "true") {
      addressData = loginAddress;
    } else {
      addressData = guestAddress;
    }

    if (!addressData) {
      setAddressPopupshow(true);
    } else {
      setButtonstatus(true);
      dispatch(PlaceCardStatus(true));
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      try {
        const { error: stripeError, paymentMethod } =
          await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(
              CardExpiryElement,
              CardNumberElement,
              CardCvcElement
            ),
          });
        try {
          if (stripeError) {
            console.log(stripeError);
            setButtonstatus(false);
            setCardErrorMessage(stripeError.message);
            setFaildShow(true);
            setButtonstatus(false);
            dispatch(PlaceCardStatus(false));
            setCardStatus(false);
            return;
          } else {
            dispatch(PlaceCardStatus(false));
          }

          setPaymentMId(paymentMethod.id);
          setPayType("paymentMethodId");
          setPaySubmit(1);
        } catch (stripeError) {
          setCardErrorMessage(
            placeorder.message ? placeorder.message : stripeError.message
          );
          setCardStatus(false);
          setFaildShow(true);
          setButtonstatus(false); // Set the error message in state
        }
      } catch (error) {
        if (
          error.code === "payment_intent_authentication_failure" ||
          error.code === "rate_limit"
        ) {
          setCardErrorMessage(
            "Your card was declined due to authentication failure or rate limit. Please try again later."
          );
          setButtonstatus(false);
          setCardStatus(false);
          setButtonstatus(false);
        } else {
          setCardErrorMessage("An error occurred. Please try again.");
          setCardStatus(false);
          setButtonstatus(false);
        }
        setCardErrorMessage("An error occurred. Please try again");
        setCardStatus(false);
        setButtonstatus(false);
      }
    }
  };

  return (
    <>
      <PaymentFaild />
      {!status ? (
        <div className="order-div">

          {paymentType == 1 ? (
            <>
              <button
                onClick={HandleClick}
                disabled={buttonstatus ? true : false}
              >
                {buttonstatus ? (
                  <Spinner animation="border" size="sm" variant="success" />
                ) : (
                  "Place your card " + getOrderMode + " order"
                )}
              </button>
            </>
          ) : paymentType == 9 ? (
            <>
              <button onClick={PlacewalletOrder} disabled={walletstatus == 0}>
                Place your wallet order
              </button>
            </>
          ) : (
            <>
              <button onClick={HandleClick}>
                Place your {getOrderMode} order
              </button>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

function AddressPopup(props) {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const path = localStorage.getItem("clientPath");
  const { AddressPopupshow, setAddressPopupshow, SuccessShow, setSuccessShow } =
    useContext(CheckoutContext);
  const { getOrderMode } = OrderFlow();
  const { theme } = useContext(ThemeContext);
  const [apiPostCode,setApiPostCode]=useState(null);

  const [Data, setData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    postcode: "",
    phone: "",
    email: "",
    door: "",
    street: "",
    city: "",
    orderMode: getOrderMode === "Delivery" ? "0" : "1",
    customerId: "",
    addressId: "",
  });
  
  useEffect(() => {
    console.log()
    const userData = JSON.parse(localStorage.getItem("userData"));
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    const postcode = localStorage.getItem("orderPostcode") || "";
    if (userData && isLoggedIn === true) {
      // Fetch and set newData
      const newData =
        props.getAddress.find(
          (data) => data.type === props.getDefaultAddress
        ) || "";
        console.log(newData);
      setData(newData);
      const LoginAddress = localStorage.getItem("loginAddress");
      if (LoginAddress) {
        const address = JSON.parse(LoginAddress);
        setFormData((prevFormData) => ({
          ...prevFormData,
          firstName: address.firstName || "",
          lastName: address.lastName || "",
          postcode: address.postcode || "",
          phone: address.phone || "",
          email: address.email || "",
          door: address.door || "",
          street: address.street || "",
          city: address.city || "",
          orderMode: address.orderMode,
          customerId: address.customerId || "",
          addressId: address.addressId || "",
        }));
      } else {
      googleAddress({ post_code: postcode })
      .then((response) => {
        console.log(response);
        if (response.status === false) {
          console.log(response.message);
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            postcode:postcode ,
            street: response.message.street,
            city: response.message.city,
            orderMode: getOrderMode === "Delivery" ? "0" : "1",
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
      }
     } else {
      // Fetch and set guest address data
      const guestAddress = localStorage.getItem("guestAddress");
      console.log(guestAddress);
      if (guestAddress) {
        const address = JSON.parse(guestAddress);
        setFormData((prevFormData) => ({
          ...prevFormData,
          firstName: address.firstName || "",
          lastName: address.lastName || "",
          postcode: address.postcode || "",
          phone: address.phone || "",
          email: address.email || "",
          door: address.door || "",
          street: address.street || "",
          city: address.city || "",
          orderMode: address.orderMode,
          customerId: address.customerId || "",
          addressId: address.addressId || "",
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          postcode: postcode,
          orderMode: getOrderMode === "Delivery" ? "0" : "1",
        }));
        googleAddress({ post_code: postcode })
          .then((response) => {
            console.log(response);
            if (response.status === false) {
              console.log(response.message);
            } else {
              setFormData((prevFormData) => ({
                ...prevFormData,
                postcode:postcode ,
                street: response.message.street,
                city: response.message.city,
                orderMode: getOrderMode === "Delivery" ? "0" : "1",
              }));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, []);
  // useEffect(()=>{
  //   console.log(Data);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     firstName: Data?.fname || "",
  //     lastName: Data?.lname || "",
  //     postcode: Data?.postcode || "",
  //     phone: Data?.phone || "",
  //     email: Data?.email || "",
  //     door: Data?.no || "",
  //     street: Data?.address1 || "",
  //     city: Data?.address2 || "",
  //     orderMode: getOrderMode === "Delivery" ? "0" : "1",
  //     customerId: Data?.cid || "",
  //     addressId: Data?.id || "",
  //   }));
  // },[Data]);




  const handleClose = () => setAddressPopupshow(false);
  const handleShow = () => setAddressPopupshow(true);
  const handleSuccessClose = () => setSuccessShow(false);

  const handleRadioChange = (type) => {
    props.setDefaultAddress(type);
    setFormErrors({});
    const newData =
      props.getAddress.find((data) => data.type === props.getDefaultAddress) ||
      {};
    console.log(newData);
    setData(newData);
    const updatedFormData = {
      firstName: newData.fname || "",
      lastName: newData.lname || "",
      postcode: newData.postcode || "",
      phone: newData.phone || "",
      email: newData.email || "",
      door: newData.no || "",
      street: newData.address1 || "",
      city: newData.address2 || "",
      customerId: newData.cid || "",
      addressId: newData.id || "",
    };
    setFormData((prevFormData) => ({ ...prevFormData, ...updatedFormData }));
  };

  const formatPostcode = (postcode) => {
    // Remove all non-alphanumeric characters from the postcode
    const alphanumericPostcode = postcode.replace(/\W/g, "");
    // Insert a space before the last three characters
    const formattedPostcode = alphanumericPostcode.replace(
      /^(.*)(\w{3})$/,
      "$1 $2"
    );
    // Convert the formatted postcode to uppercase
    return formattedPostcode.toUpperCase();
  };

  const [formErrors, setFormErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const handleInputChange = async(event) => {
    const { name, value } = event.target;

    // Define validation rules for each field
    const validationRules = {
      firstName: "First Name is required",
      lastName: "Last Name is required",
      phone: "Telephone is required",
      email: "Email is required",
      door: "Door Number is required",
      street: "Street is required",
      city: "City is required",
    };

    // Check if the field is required and update errors accordingly
    const errors = {
      ...formErrors,
      [name]: value.trim() === "" ? validationRules[name] : "",
    };

    if (name === "email") {
      if (!isValidEmail(value)) {
        errors.email = "Invalid email format";
      }
    }

    // Update form data
    setFormErrors(errors);
    setFormData({ ...formData, [name]: value });
    setIsButtonDisabled(false);
  };

  const getGoogleAddress = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setApiPostCode(value);
    setFormData({...formData,[name]:value});
    const validationRules = {
      postcode: "Post Code is required",
    };

    const errors = {
      ...formErrors,
      [name]: value.trim() === "" ? validationRules[name] : "",
    };
    const formattedPostcode =
      name === "postcode" ? formatPostcode(value) : formData.postcode;

    const postcodeAddress = {
      post_code: value,
    };
    console.log(postcodeAddress);
    googleAddress(postcodeAddress)
    .then((response) => {
      if (response.status === false) {
        console.log(response.message);
      } else {
        console.log(response);
        const updatedFormData = {
          ...formData,
          postcode: formattedPostcode,
          street: response.message.street,
          city: response.message.city,
        };
        console.log(updatedFormData);
        setFormData(updatedFormData);

        // Update form data
        // setFormData(updatedFormData);
       
      }
    })
    .catch((error) => {
      console.log(error);
    });

    // Update form data
    setFormErrors(errors);

  };

  const isValidEmail = (email) => {
    // Regular expression for a basic email format validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return Object.values(formErrors).every((error) => error === "");
  };

  const deliveryFormData = {
    client_path: path,
    order_mode: getOrderMode === "Delivery" ? "0" : "1",
    post_code: formData.postcode,
  };

  const SubmitForm = () => {
    setIsButtonDisabled(true);
    checkPostcode(deliveryFormData)
      .then((response) => {
        console.log(response);
        if (response.status === true) {
          localStorage.setItem(
            "postcodeDetail",
            JSON.stringify(response.message)
          );
          updateAddress(formData)
            .then((response) => {
              console.log(response);
              if (response.status === true) {
                formData.addressId = response.message.addressId;
                formData.customerId = response.message.customerId;
                props.setAddressField(formData);
                if (isLoggedIn !== true) {
                  localStorage.setItem(
                    "guestAddress",
                    JSON.stringify(formData)
                  );
                  localStorage.setItem("orderPostcode", formData.postcode);
                  localStorage.setItem("loginAddress", "");
                } else {
                  localStorage.setItem(
                    "loginAddress",
                    JSON.stringify(formData)
                  );
                  localStorage.setItem("guestAddress", "");
                }
                setAddressPopupshow(false);
                setSuccessShow(true);
                setIsButtonDisabled(false);
              } else {
                console.log(response);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setIsButtonDisabled(false);
          setFormErrors({
            postcode: "The restaurant doesn't deliver to " + formData.postcode,
          });
          console.log(response);
          localStorage.setItem("postcodeDetail", "");
        }
      })
      .catch((error) => {
        setFormErrors({
          postcode: "The restaurant doesn't deliver to " + formData.postcode,
        });
        localStorage.setItem("postcodeDetail", "");
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={handleShow}>{props.label}</Button>
      <Modal
        show={AddressPopupshow}
        onHide={handleClose}
        id="checkout-address"
        centered
        className={theme === "dark" ? "dark-popup" : null}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="header-div">
            <h3>
              {isLoggedIn === true
                ? `Change ${Data ? Data.type : ""} Address`
                : "Confirm Address"}
            </h3>
            <span className="close-btn" onClick={handleClose}>
              <MdOutlineCancel />
            </span>
          </div>
          <Form>
            <Row className="align-items-start">
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div first-input">
                  <Form.Control
                    name="customerId"
                    type="text"
                    placeholder="Customer Id"
                    value={formData.customerId}
                    style={{ display: "none" }}
                  />
                  <Form.Control
                    name="addressId"
                    type="text"
                    placeholder="Address Id"
                    value={formData.addressId}
                    style={{ display: "none" }}
                  />
                  <Form.Control
                    name="orderMode"
                    type="text"
                    placeholder="OrderMode"
                    value={formData.orderMode}
                    style={{ display: "none" }}
                  />
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.firstName}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div second-input">
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.lastName}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="phone"
                    type="text"
                    placeholder="Telephone"
                    value={formData.phone} // Corrected this line
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.phone}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="email"
                    value={formData.email} // Corrected this line
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.email}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="postcode"
                    type="text"
                    placeholder="Post Code"
                    value={formData.postcode}
                    onChange={getGoogleAddress}
                    isInvalid={!!formErrors.postcode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.postcode}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="door"
                    type="text"
                    placeholder="Door Number"
                    value={formData.door} // Corrected this line
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.door}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.door}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="street"
                    type="text"
                    placeholder="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.street}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.street}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="city"
                    type="text"
                    placeholder="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.city}
                  </Form.Control.Feedback>
                </div>
              </Col>
              {isLoggedIn === true ? (
                <>
                  <Col xxl={12} xs={12} md={12}>
                    <div className="radio-btn-group">
                      <label>
                        <input
                          name="selectaddtype"
                          type="radio"
                          label="Home"
                          id="Home"
                          checked={props.getDefaultAddress === "Home"}
                          onChange={() => handleRadioChange("Home")}
                        />
                        <span>Home</span>
                      </label>
                      <label>
                        <input
                          name="selectaddtype"
                          type="radio"
                          label="Office"
                          id="Office"
                          checked={props.getDefaultAddress === "Office"}
                          onChange={() => handleRadioChange("Office")}
                        />
                        <span>Office</span>
                      </label>
                      <label>
                        <input
                          name="selectaddtype"
                          type="radio"
                          label="Other"
                          id="Other"
                          checked={props.getDefaultAddress === "Other"}
                          onChange={() => handleRadioChange("Other")}
                        />
                        <span>Other</span>
                      </label>
                    </div>
                  </Col>
                </>
              ) : null}
              <Col xxl={12} xs={12} md={12}>
                <Button
                  className="submit-btn"
                  onClick={SubmitForm}
                  disabled={!isFormValid() || isButtonDisabled}
                >
                  Update Details
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        {/* Modal Footer */}
      </Modal>
      <Modal
        show={SuccessShow}
        onHide={handleSuccessClose}
        className={`address-success-popup  ${theme === "dark" ? "dark-theme" : ""
          }`}
        backdrop={true}
      >
        <Modal.Body>
          <div className="content">
            <p>Your address was updated successfully</p>
            <button onClick={handleSuccessClose}>
              <MdOutlineCancel />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

function ConfirmDetails(props) {
  const { theme } = useContext(ThemeContext);
  const [successShow, setSuccessShow] = useState(false);
  const { AddressPopupshow, setAddressPopupshow } = useContext(CheckoutContext);
  const { addressDetail } = useContext(CheckoutContext);
  const { getOrderMode } = OrderFlow();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    orderMode: getOrderMode === "Delivery" ? "0" : "1",
    customerId: "",
    addressId: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (userData && isLoggedIn === true) {
      // Fetch and set newData
      const newData =
        addressDetail?.data.find((data) => data.primary_address === 1) || "";
        console.log(newData);
      setFormData((prevFormData) => ({
        ...prevFormData,
        firstName: newData.fname || "",
        lastName: newData.lname || "",
        phone: newData.phone || "",
        email: newData.email || "",
        orderMode: getOrderMode === "Delivery" ? "0" : "1",
        customerId: newData.cid || "",
        addressId: newData.id || "",
      }));
    } else {
      // Fetch and set guest address data
      const guestAddress = localStorage.getItem("guestAddress");
      if (guestAddress) {
        const address = JSON.parse(guestAddress);
        setFormData((prevFormData) => ({
          ...prevFormData,
          firstName: address.firstName || "",
          lastName: address.lastName || "",
          phone: address.phone || "",
          email: address.email || "",
          orderMode: address.orderMode,
          customerId: address.customerId || "",
          addressId: address.addressId || "",
        }));
      }
    }
  }, [getOrderMode, setFormData, addressDetail]);

  const handleClose = () => setAddressPopupshow(false);
  const handleShow = () => setAddressPopupshow(true);
  const handleSuccessClose = () => setSuccessShow(false);

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Define validation rules for each field
    const validationRules = {
      firstName: "First Name is required",
      lastName: "Last Name is required",
      phone: "Telephone is required",
      email: "Email is required",
    };

    // Check if the field is required and update errors accordingly
    const errors = {
      ...formErrors,
      [name]: value.trim() === "" ? validationRules[name] : "",
    };

    if (name === "email") {
      if (!isValidEmail(value)) {
        errors.email = "Invalid email format";
      }
    }

    // Update form data
    setFormErrors(errors);
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    // Regular expression for a basic email format validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return Object.values(formErrors).every((error) => error === "");
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const SubmitForm = () => {
    setIsButtonDisabled(true);
    updateAddress(formData)
      .then((response) => {
        console.log(response);
        if (response.status === true) {
          formData.addressId = response.message.addressId;
          formData.customerId = response.message.customerId;
          if (isLoggedIn !== true) {
            localStorage.setItem("guestAddress", JSON.stringify(formData));
            localStorage.setItem("loginAddress", "");
          } else {
            localStorage.setItem("loginAddress", JSON.stringify(formData));
            localStorage.setItem("guestAddress", "");
          }
          setAddressPopupshow(false);
          setSuccessShow(true);
          setIsButtonDisabled(false);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={handleShow}>{props.label}</Button>
      <Modal
        show={AddressPopupshow}
        onHide={handleClose}
        id="checkout-address"
        centered
        className={theme === "dark" ? "dark-popup" : null}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="header-div">
            <h3>Confirm Details</h3>
            <span className="close-btn" onClick={handleClose}>
              <MdOutlineCancel />
            </span>
          </div>
          <Form>
            <Row className="align-items-start">
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div first-input">
                  <Form.Control
                    name="customerId"
                    type="text"
                    placeholder="Customer Id"
                    value={formData.customerId}
                    style={{ display: "none" }}
                  />
                  <Form.Control
                    name="addressId"
                    type="text"
                    placeholder="Address Id"
                    value={formData.addressId}
                    style={{ display: "none" }}
                  />
                  <Form.Control
                    name="orderMode"
                    type="text"
                    placeholder="OrderMode"
                    value={formData.orderMode}
                    style={{ display: "none" }}
                  />
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.FirstName}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div second-input">
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.LastName}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="phone"
                    type="text"
                    placeholder="Telephone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.TelePhone}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={6} xs={6} md={6}>
                <div className="input-div">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!formErrors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.Email}
                  </Form.Control.Feedback>
                </div>
              </Col>
              <Col xxl={12} xs={12} md={12}>
                <Button
                  className="submit-btn"
                  onClick={SubmitForm}
                  disabled={!isFormValid() || isButtonDisabled}
                >
                  Update Details
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        show={successShow}
        onHide={handleSuccessClose}
        className={`address-success-popup  ${theme === "dark" ? "dark-theme" : ""
          }`}
        backdrop={true}
      >
        <Modal.Body>
          <div className="content">
            <p>Your address was updated successfully</p>
            <button onClick={handleSuccessClose}>
              <MdOutlineCancel />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

const ClientNameHeader = () => {
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    // Retrieve data from localStorage for the key 'clientName'
    const storedClientName = localStorage.getItem("clientName");

    if (storedClientName) {
      setClientName(storedClientName);
    }
  }, []);
  // ! Scroll Header Start
  const [ScrollHeaer, setScrollHeaer] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrollHeaer(true);
      } else {
        setScrollHeaer(false);
      }
    });
  }, []);
  // ! Scroll Header End
  const navigate = useNavigate();
  const GoBackFunction = () => {
    navigate(-1);
  };
  return (
    <section
      className={`scroll-header ${ScrollHeaer && "scroll-header-visible"}`}
    >
      <Container>
        <Row>
          <Col md={12}>
            <div className="scroll-header-content">
              <button className="back" onClick={GoBackFunction}>
                <MdOutlineArrowBackIos />
              </button>
              <h3 className="resta-name">
                {clientName.length > 16
                  ? clientName.slice(0, 16) + "..."
                  : clientName}
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
