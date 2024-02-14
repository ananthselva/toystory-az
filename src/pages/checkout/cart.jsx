import React, { useState, useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import "./css/cart-pages.scss";
import OfferIceon from "./img/offer.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import FKplus from "./img/fkplus.svg";
import FKplusBG from "./img/plus.svg";
import Select from "react-select";
import { Link } from "react-router-dom";
import { CheckoutData } from "./checkout";
import { OrderFlow } from "../../App";
import { removeDiscount } from "../../actions/menu/offerAction";
import { PlaceCardStatus } from "../../actions/checkout/placeorderStatusAction";
import { useSelector, useDispatch } from "react-redux";
import Paypallogo from "./img/paypal2.svg";
import applepaydark from './img/apple-dark.png'
import applepays from "./img/applecheckout.svg";
import klarnapay from "./img/klarnacheckout.png";
import CardIcon from "./img/card.png";
import CardIconDark from "./img/card-dark.png";
import googlepay from "./img/gpay-new-small.png"
import WalletIcon from "./img/wallet.png";
import Gpay from "./img/Google__G__logo.svg.png"
import CardImgWhite from "./img/cardimgwhite.png";

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
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { CheckoutContext } from "./checkout";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentSuccess } from "./popup";
import { GoPlus } from "react-icons/go";
import { BsNutFill } from "react-icons/bs";
const stripePromise = loadStripe('pk_live_DIodJvzwckwG0omwLcjh3E2k00A880PBDB');

const Cart = () => {
  const { getOrderMode } = OrderFlow();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const {
    stripepayment,
    deliveryCharge,
    bagCharge,
    serviceCharge,
    setFinalTotal,
    finalTotal,
    clientSecret,
  } = CheckoutData();
  const {
    setPaymentMId,
    setPayType,
    placeOrderApiJson,
    setPaySubmit,
    paymentType,
    paySubmit,
    walletstatus,
    setCardErrorMessage,
    setFaildShow,
    buttonstatus,
    setButtonstatus,
    finalTotalValue,
    setFinalTotalValue,
    paymentRequest,
    applepayGpayBtnStatus,
    setApplepayGpayBtnStatus,
    updateJsonData,
    setPaymentMethodId,
    setPaymentRequest,
    setGpaySubmit,
    setPaymentType,
    footerBtn,
    setFooterBtn,
    scrollToSection,
    paymentSuccessShow,
    selectedValue,
    setSelectedValue,
    setPaymentSuccessShow,
    handleShow,
    paymentModalShow,
    setPaymentModalShow,
    setPaySaveCard,
    paysaveCard,
    handlesavecardPayment,
    CARD_OPTIONS1,
    containerStyle,
    saveCardError,
    setSaveCardError,
    setCardStatus,
    walletamount,
  } = useContext(CheckoutContext);
  const { theme } = useContext(ThemeContext);

  const [parsedDiscount, setParsedDiscount] = useState("");
  const [discountStatus, setDiscountStatus] = useState("");
  const [paymentLoad, setPaymentLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const subTotal = localStorage.getItem("totalPrice");
  const roundedValue = localStorage.getItem("roundOffPrice");
  const driverTipValue = localStorage.getItem("driverTipValue");

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginAddress = localStorage.getItem("loginAddress") || "";
  const guestAddress = localStorage.getItem("guestAddress") || "";
  const { setAddressPopupshow } = useContext(CheckoutContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const finalAmt = localStorage?.getItem("finalTotalValue") || 0;
    const finalAmtCheck = Math?.round(finalAmt * 100);
    if (stripe) {
     
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "gbp",
        total: {
          label: "FK",
          amount: finalAmtCheck,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
      // Check the availability of the Payment Request API first.
      try{
   
      pr.canMakePayment().then((result) => {
        console.log(result);
          if (result) {
            setPaymentRequest(pr);
            console.log(pr);
            pr.on("paymentmethod", async (ev) => {
              console.log(ev.paymentMethod.id);
              setPaymentMId(ev.paymentMethod.id);
              setPayType("applePayGooglePayPaymentMethodId");
              setGpaySubmit(1);
              setPaymentType(8); // payment type 1,8,7,9
              // Confirm the PaymentIntent without handling potential next actions (yet).
              try {
                const { paymentIntent, error: confirmError } =
                  await stripe.confirmCardPayment(
                    clientSecret,
                    { payment_method: ev.paymentMethod.id },
                    { handleActions: false }
                  );
                if (confirmError) {
                  // Report to the browser that the payment failed, prompting it to
                  // re-show the payment interface, or show an error message and close
                  // the payment interface.
                  setPaymentStatus("Payment confirmation error");
                  ev.complete("fail");
                  return;
                }
                // Report to the browser that the confirmation was successful, prompting
                // it to close the browser payment method collection interface.

                // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
                // handle the flow. If using an API version older than "2019-02-11"
                // instead check for: `paymentIntent.status === "requires_source_action"`.
                if (paymentIntent.status === "requires_action") {
                  // Let Stripe.js handle the rest of the payment flow.
                  const { error: actionError } =
                    await stripe.confirmCardPayment(clientSecret);
                  if (actionError) {
                    ev.complete("fail");
                    setPaymentStatus("Payment actionError error");
                    return;
                    // The payment failed -- ask your customer for a new payment method.
                  } else {
                    paymentSuccessShow(true);
                    setPaymentStatus("Payment succeeded");
                    navigate("/orderstatus");
                    ev.complete("success");
                    // The payment has succeeded -- show a success message to your customer.
                  }
                }
                if (paymentIntent.status === "succeeded") {
                  paymentSuccessShow(true);
                  setPaymentStatus("Payment succeeded");
                  navigate("/orderstatus");
                  // Payment succeeded without any further actions
                  ev.complete("success");
                }
              } catch (error) {
                ev.complete("fail");
              }
            });
            // return () => {
            //   paymentRequest.off("paymentmethod", onPaymentMethod);
            // };
            setApplepayGpayBtnStatus(1);
          }
          else{
            console.log("Payment cannot be made.");
          }
        })
        .catch((error) => {
          alert(error);
        });

      } catch (error) {
        console.error('Error checking if payment can be made:', error);
      }
    }
  }, [ stripe, elements,finalTotalValue]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch final amount from your API or other source
  //     const finalAmt = localStorage?.getItem("finalTotalValue") || 0;

  //     // Convert amount to cents (Stripe expects amounts in cents)
  //     const finalAmtCheck = Math.round(finalAmt * 100);

  //     if (stripe && elements && finalAmtCheck) {
  //       try {
  //         // Create a Payment Request
  //         const pr = stripe.paymentRequest({
  //           country: 'US',
  //           currency: 'usd',
  //           total: {
  //             label: 'Demo total',
  //             amount: 10,
  //           },
  //           requestPayerName: true,
  //           requestPayerEmail: true,
  //         });
  //         console.log('Payment Request Object:', pr);

  //         // Check if the browser supports the Payment Request API
  //         const result = await pr.canMakePayment();

  //         console.log(result);
  //         if (result) {
  //           setPaymentRequest(pr);

  //           // Listen for the paymentmethod event
  //           pr.on("paymentmethod", async (ev) => {
  //             try {
  //               // Confirm the PaymentIntent without handling potential next actions (yet).
  //               const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
  //                 clientSecret,
  //                 { payment_method: ev.paymentMethod.id },
  //                 { handleActions: false }
  //               );

  //               if (confirmError) {
  //                 // Handle payment confirmation error
  //                 console.error("Payment confirmation error:", confirmError);
  //                 ev.complete("fail");
  //               } else if (paymentIntent.status === "requires_action") {
  //                 // Let Stripe.js handle the rest of the payment flow
  //                 const { error: actionError } = await stripe.confirmCardPayment(clientSecret);
  //                 if (actionError) {
  //                   console.error("Payment actionError error:", actionError);
  //                   ev.complete("fail");
  //                 } else {
  //                   // Payment succeeded with additional actions
  //                   console.log("Payment succeeded with additional actions");
  //                   ev.complete("success");
  //                 }
  //               } else if (paymentIntent.status === "succeeded") {
  //                 // Payment succeeded without additional actions
  //                 console.log("Payment succeeded");
  //                 ev.complete("success");
  //               }
  //             } catch (error) {
  //               // Handle other errors
  //               console.error("Error during payment processing:", error);
  //               ev.complete("fail");
  //             }
  //           });

  //           // Set up the Payment Request button or other UI elements
  //           setApplepayGpayBtnStatus(1);
  //         } else {
  //           console.log("Payment cannot be made.");
  //         }
  //       } catch (error) {
  //         // Handle errors during Payment Request setup
  //         console.error("Error setting up Payment Request:", error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [finalTotalValue, stripe, elements]);
  useEffect(() => {
    setPaymentLoad(true);
  }, []);
  useEffect(() => {
    let timer;
    if (!paymentRequest) {
      // Show the spinner for a maximum of 3 second
      setPaymentLoad(true);

      // After 1 second, hide the spinner if payment request is still not available
      timer = setTimeout(() => {
        setPaymentLoad(false);
      }, 3000);
    } else {
      // If payment request arrives before 1 second, clear the timer and hide the spinner immediately
      clearTimeout(timer);
      setPaymentLoad(false);
    }

    // Clean up the timer when component unmounts or payment request changes
    return () => {
      clearTimeout(timer);
    };
  }, [paymentRequest]);

  useEffect(() => {
    const discountJSON = localStorage.getItem("discount");
    const discount = discountJSON ? JSON.parse(discountJSON) : "";
    setParsedDiscount(discount);
  }, [discountStatus]);

  useEffect(() => {
    const discountJSON = localStorage.getItem("discount");
    const discount = discountJSON ? JSON.parse(discountJSON) : "";
    let finalTotalValue =
      parseFloat(subTotal) +
      parseFloat(deliveryCharge) +
      parseFloat(bagCharge) +
      parseFloat(serviceCharge) +
      parseFloat(driverTipValue);

    if (discount?.appliedDiscount) {
      finalTotalValue -= parseFloat(discount.appliedDiscount);
    }

    localStorage.setItem("finalTotal", finalTotalValue.toFixed(2));
    setFinalTotal(finalTotalValue.toFixed(2));
    setFinalTotalValue(
      (parseFloat(finalTotalValue) + parseFloat(roundedValue)).toFixed(2)
    );
    localStorage.setItem(
      "finalTotalValue",
      (parseFloat(finalTotalValue) + parseFloat(roundedValue)).toFixed(2)
    );
  }, [
    subTotal,
    parsedDiscount,
    deliveryCharge,
    bagCharge,
    serviceCharge,
    driverTipValue,
    roundedValue,
  ]);
  // scroll Fixed Top Start
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [cartItemsData, setcartItems] = useState([]);

  useEffect(() => {
    const updateSidebarTop = () => {
      const chatEl = document.querySelector(".cart-page");
      setSidebarTop(chatEl.getBoundingClientRect().top);
    };

    updateSidebarTop();
    window.addEventListener("resize", updateSidebarTop);
    return () => {
      window.removeEventListener("resize", updateSidebarTop);
    };
  }, []);

  useEffect(() => {
    const isSticky = (e) => {
      const chatEl = document.querySelector(".cart-page");
      const scrollTop = window.scrollY;
      chatEl.classList.toggle("is-sticky", scrollTop >= sidebarTop - 96);
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);
  // scroll Fixed Top End

  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("cart"));
    setcartItems(localStorageData);
  }, [localStorage.getItem("cart")]);

  //status selector
  const placeOrder_status = useSelector(
    (state) => state.placeorderStatusReducer.placeorder
  );
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(placeOrder_status);
  }, [placeOrder_status]);

  const PlacewalletOrder = async (event) => {
    event.preventDefault();
    setPaySubmit(9);
  };

  const GoBackFunction = () => {
    navigate(-1);
  };
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

  const HandleClick = async () => {
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

      if (!stripe || !elements) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(
          CardExpiryElement,
          CardNumberElement,
          CardCvcElement
        ),
      });

      if (error) {
        scrollToSection();
        setFooterBtn(true);
        console.log(error);
        setCardErrorMessage(error.message);
        dispatch(PlaceCardStatus(false));
        setButtonstatus(false);

        return;
      } else {
      }

      setPaymentMId(paymentMethod.id);
      setPayType("paymentMethodId");
      setPaySubmit(1);
    }
  };
  // update total payment value
  const handlePayment = async () => {
    try {
      // Use the updated payment request to start the payment flow
      if (paymentRequest) {
        const paymentResult = await paymentRequest.show();
        // Handle payment result as needed
      }
    } catch (error) {
      // Handle errors
    }
  };
  const buttonStyles = {
    paymentRequestButton: {
      height: "200px",
      /* Other styles */
    },
  };

  // add style google & apply pay button
  const options = {
    paymentRequest,
    style: {
      paymentRequestButton: {
        type: "default",
        // One of 'default', 'book', 'buy', or 'donate'
        // Defaults to 'default'
        theme: "dark",
        // One of 'dark', 'light', or 'light-outline'
        // Defaults to 'dark'
        height: "40px",
        borderRadius: "32px",
        margin: "25px",
        // Defaults to '40px'. The width is always '100%'.
      },
    },
  };

  const handlePopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleClickToShow = () => {
    setPaymentModalShow(true);
  };
  const handleCVCchange=()=>{
    if(saveCardError){
      setSaveCardError(null);
    }
    if(buttonstatus){
      setButtonstatus(false);
    }
  }

  return (
    <>
      <div className="cart-page" name="cart-canva-btn-heading">
        <div className="header">
          <h3>Your order from</h3>
          <h4 className="res-name">
            {stripepayment?.message?.clientDetail?.name}
          </h4>
        </div>
        {!status ? (
          <>
            {paymentType == 1 ? (
              <>
                <button
                  className="order-btn"
                  disabled={buttonstatus ? true : false}
                  onClick={HandleClick}
                >
                  {buttonstatus ? (
                    <Spinner animation="border" size="sm" variant="success" />
                  ) : (
                    "Place your " + getOrderMode + " order"
                  )}
                </button>
              </>
            ) : paymentType == 9 ? (
              <>
                <button
                  className="order-btn"
                  onClick={PlacewalletOrder}
                  disabled={walletstatus == 0}
                >
                  Place your wallet order
                </button>
              </>
              
            ) : (
              <>
                <button className="order-btn" onClick={HandleClick}>
                  Place your {getOrderMode} order
                </button>
              </>
            )}
          </>
        ) : (
          <></>
        )}
        <div className="order-details">
          <div className="order-table">
            <Table>
              <tbody>
                <>
                  {cartItemsData &&
                    cartItemsData.map((ListItem, index) => (
                      <>
                        <tr key={index}>
                          <td className="count">{ListItem.count}</td>
                          <td className="itemname">{ListItem.itemName}</td>
                          <td className="price">£{ListItem.price}</td>
                        </tr>
                      </>
                    ))}
                </>
              </tbody>
            </Table>
          </div>
          <div className="sub-total">
            <p>
              <span colSpan={2}>Items Subtotal</span>
              <span>£{subTotal}</span>
            </p>
          </div>

          <OfferCode
            setParsedDiscount={setParsedDiscount}
            parsedDiscount={parsedDiscount}
            setDiscountStatus={setDiscountStatus}
          />
          {/* {width > 767 && <FKPlus />} */}

          <div className="total-details">
            {parsedDiscount ? (
              <>
                <p>
                  <span className="label discount">Discount</span>{" "}
                  <span className="price discount">
                    -£{parsedDiscount.appliedDiscount}
                  </span>
                </p>
              </>
            ) : null}
            <p>
              <span className="label">Bag Charge</span>{" "}
              <span className="price">£{bagCharge}</span>
            </p>
            <p>
              <span className="label">Service Charge</span>{" "}
              <span className="price">£{serviceCharge}</span>
            </p>
            {getOrderMode === "Delivery" && (
              <>
                <p>
                  <span className="label">Delivery Charge</span>{" "}
                  <span className="price">£{deliveryCharge}</span>
                </p>
              </>
            )}
            {roundedValue !== "0" && roundedValue !== "0.00" && (
              <>
                <p>
                  <span className="label">Round Up</span>{" "}
                  <span className="price">£{roundedValue}</span>
                </p>
              </>
            )}
            {driverTipValue !== "0" && driverTipValue !== "0.00" && (
              <>
                <p>
                  <span className="label">
                    {getOrderMode === "Delivery" ? "Driver Tip" : "Donation"}
                  </span>
                  <span className="price">£{driverTipValue}</span>
                </p>
              </>
            )}
          </div>
          <div className="total-price">
            <span>Total</span>
            <span>£{finalTotalValue}</span>
          </div>
        </div>
        <div className="back-to-menu">
          <button onClick={GoBackFunction}>
            <MdArrowBackIosNew /> Back to menu
          </button>
        </div>
        <div className="order-place">
          {width <= 767 && !status ? (
            <>
              <div className="total-price mb-2">
                <span>Total</span>
                <span>£{finalTotalValue}</span>
              </div>
              <hr className="totalline" />
              <div className="total-price mt-2">
                {selectedValue === "google-pay" ? (
                  <div className="selected-tab d-flex justify-content-center align-items-center gap-2">
                    <img src={Gpay} alt="" style={{ height: "30px" }} />  <p className="paytype">pay</p>
                  </div>
                ) : selectedValue === "apple-pay" ? (
                  <div className="selected-tab d-flex justify-content-center align-items-center gap-2">
                    <img  src={theme === "dark" ? applepaydark : applepays}  style={{ height: "31px" }}  alt="" /> <p className="paytype">pay</p>
                  </div>
                ) : selectedValue === "wallet" ? (
                  <div className="selected-tab d-flex justify-content-center align-items-center gap-2">
                    <img src={WalletIcon} alt="" style={{ height: "30px" }} />
                    <p className="paytype">Pay with Wallet</p>
                  </div>
                ) : selectedValue === "paypal" ? (
                  <div className="selected-tab d-flex justify-content-center align-items-center gap-2">
                    <img src={Paypallogo} alt="" />
                    <p className="paytype">Pay with PayPal</p>
                  </div>
                ) : selectedValue === "klarna" ? (
                  <div className="selected-tab d-flex justify-content-center align-items-center gap-2">
                    <img src={klarnapay} alt="" />
                    <p className="paytype">Pay with Klarna</p>
                  </div>
                ) :  selectedValue === "cardimg1"  ? (
                  <>
                  <div className="selected-tab d-flex justify-content-center align-items-center gap-2">
                    <img src={CardImgWhite} alt="" style={{ height: "30px" }}/>
                    <p className="paytype">Pay with Card</p>
                  </div>
                 
                  </>
                ) :
                selectedValue === "savedcard" && paysaveCard ? (
                 <>
                      {paysaveCard? (
                                      <>
                        {paysaveCard.map((savedCard, index) => (

                          <div key={index} style={{width: "100%"}}>
                          <div className="selected-tab  gap-2">
                          <div>
                            <div className="elementDiv d-flex" >
                              <div className="creditcardui   gap-2">
                                <img
                                  src={savedCard.brand}
                                  alt=""
                                  style={{height:"40px"}}
                                />
                              </div>
                            
                              <div className="creditcarduichild" style={{width:"50%",marginLeft: "15px"}}>
                                <p style={{margin:"0px"}}>{savedCard.card}</p>
                                 <div className="mt-3">
                                      <div style={containerStyle}>
                                         <CardCvcElement
                                          options={
                                            CARD_OPTIONS1
                                          }
                                          onChange={handleCVCchange}
                                         />
                                       </div>
                                </div>
                              </div>
                            </div>

                         {saveCardError?(<><span style={{ color: "red" }}>{saveCardError}</span></>):BsNutFill}
                          <p onClick={handleClickToShow} className="change" style={{padding:"10px"}}>Change</p>
                          
                         </div>
                         </div>
                         <button className="col-sm-12"
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
                                                          {buttonstatus && !saveCardError ? (
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
                         ))}
                         </>):null}
                  </>
                ) : <p onClick={handleClickToShow} className="change">Select Payment method</p>}
                 {selectedValue !== "savedcard"?( <span style={{ color: "#ccc" }}>£{finalTotalValue}</span>):null}
              </div>

              {paymentType == 1 && selectedValue !== "savedcard" && selectedValue !== "wallet" ? (
                <>
                 <div className="total-pricechild">
                    
                    <p onClick={handleClickToShow}>Change</p>
                    
                  </div>
                  <button
                    disabled={footerBtn ? true : buttonstatus ? true : false}
                    onClick={HandleClick}
                  >
                    {buttonstatus ? (
                      <Spinner animation="border" size="sm" variant="success" />
                    ) : (
                      "Place your " + getOrderMode + " order"
                    )}
                  </button>
                </>
              ) : paymentType == 9 ? (
                <>
                    <p className="mt-2" style={{paddingLeft: "30px"}}>{walletstatus == 1 ? (<>Available Balance:  {walletamount}</>):(<>Insufficient Balance in Your Wallet:{walletamount}</>)}</p>
                    <div className="total-pricechild">
                    
                    <p onClick={handleClickToShow}>Change</p>
                    
                  </div>
                  
                  <button
                    onClick={PlacewalletOrder}
                    disabled={walletstatus == 0}
                  >
                    Place your wallet order
                  </button>
                </>
              ) : paymentType == 8 || paymentType == 7 ? (
                <>
                  <div className="total-pricechild d-block d-sm-none">
                                  <p onClick={handleClickToShow}>Change</p>
                  </div>
                  <div className="payment-btn">
                    {paymentRequest ? (
                      <>
                        <PaymentRequestButtonElement
                          options={options}
                          onClick={handlePayment}
                        />
                        {/* <p>Payment link: {paymentMId}</p>

                        <p>{paymentMId}</p>
                        <p>{gpaySubmit}</p> */}
                      </>
                    ) : (
                      <>
                        {paymentLoad ? (
                          <>
                            <div
                              className="spinner-container"
                              style={{ alignItems: "center" }}
                            >
                              <Spinner
                                animation="border"
                                size="sm"
                                variant="success"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            {paymentType === 8  ? (
                              <>
                                <p>
                                  Sorry, Google Pay is not available on your
                                  device
                                </p>
                              
                              </>
                            ) : paymentType === 7? (
                              <>
                                <p>
                                  Sorry, Apple Pay is not available on your
                                  device
                                </p>
                              </>
                            ) : (
                              <>
                                <p>Something Went Wrong</p>
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </>
              )
               : paymentType == 9 ? (
                <>
                  <button
                    className="order-btn"
                    onClick={PlacewalletOrder}
                    disabled={walletstatus == 0}
                  >
                    Place your wallet order
                  </button>
                </>
                
              ): (
                <>
                  {/* <div className="total-pricechild d-block d-sm-none">
                    <p onClick={handleClickToShow}> Change</p>
                  </div>
                  <button onClick={HandleClick}>
                    Place your {getOrderMode} order
                  </button> */}

                </>
              )}
            </>
          ) 
          : (
            <></>
          )}

          <div className="terms-text">
            <p>
              Agree to our <Link to="/privacy">policies</Link> by placing orders
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;

const OfferCode = (props) => {
  function removeOffer() {
    removeDiscount();
    props.setDiscountStatus(1);
  }

  return (
    <>
      {props.parsedDiscount ? (
        <>
          <div className="offer-code">
            <img src={OfferIceon} alt="" />
            <p>
              “<span>{props.parsedDiscount.discount}</span> applied”
            </p>
            <button onClick={removeOffer}>Remove</button>
          </div>
        </>
      ) : null}
    </>
  );
};

export const FKPlus = (props) => {
  const options = [
    { value: "Buy 1 Month Plan", label: "Buy 1 Month Plan" },
    { value: "Buy 3 Month Plan", label: "Buy 3 Month Plan" },
    { value: "Buy 6 Month Plan", label: "Buy 6 Month Plan" },
    { value: "Buy 1 Year Plan", label: "Buy 1 Year Plan" },
  ];
  return (
    <>
      <div className="fk-plus">
        <div className="plus-header">
          <div className="plus-icon">
            <img src={FKplusBG} alt="" />
          </div>
          <p>
            free Delivery on all orders with{" "}
            <span>
              <img src={FKplus} alt="" />
            </span>
          </p>
        </div>
        <div className="content">
          <h3>
            you can save <span>£3.59</span> extra on <br /> this order!
          </h3>
          <hr />
          <div className="footer-box">
            <Select
              options={options}
              isClearable
              classNamePrefix="plan"
              className="fk-plan"
              placeholder="Choose...."
              defaultValue={options[0]}
              isSearchable={false}
            />
            <button>Try Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
