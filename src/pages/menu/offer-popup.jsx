import React, { useState, useEffect,useRef  } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Modal from "react-bootstrap/Modal";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
// import box from "./gif/offer.gif";
// import plus from "./gif/fi_1828925.png";
// import red from "./gif/offer.png";
import "./css/offer-popup.scss";
// import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { TbDiscount2 } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { applyDiscount, removeDiscount } from "../../actions/menu/offerAction";
import { OrderFlow } from "../../App";

function OfferPopup({ getOrderMode, restaurant, setCheckOfferAmount, status ,setOnlineOffer,onlineOffer,setUseCodeStatus,setCoupons,coupons}) {
  const { loginPopupShow,setLoginPopupShow } = OrderFlow();
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFirstImage, setShowFirstImage] = useState(true);
  const cartQty=localStorage?.getItem("cartQty");
  const [currentTotal,setCurrentTotal]=useState(cartQty);
  const [prevTotal,setPrevTotal]=useState(0);
  const prevValueRef = useRef('');

  const common = restaurant?.common;
  const promo = restaurant?.promo;
  const seasonalOnline = restaurant?.seasonal_online;
  const online = restaurant?.online;
  const orderMode = getOrderMode;
  const orderType = orderMode === "Collection" ? 1 : 0;

  const [offerData, setOfferData] = useState({
    offer: "",
    data: "",
    isValid: true,
    discountKey: "",
  });
  const [validDiscount, setValidDiscount] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const convertOffers = Object.entries({
      promo,
      common,
      online,
    }).reduce(
      (result, [key, value]) =>
        result.concat(
          value.map((offer) => ({
            ...offer,
            discountContent: key,
          }))
        ),
      []
    );

    const updatedOfferData = convertOffers.map((offer) => {
      if (offer.code.toUpperCase() === value.toUpperCase()) {
        return {
          [name]: offer.code,
          isValid: true,
          data: offer,
          discountKey: offer.discountContent,
        };
      } else {
        return {
          [name]: value,
          isValid: false,
          data: "",
          discountKey: "",
        };
      }
    });

    setOfferData(updatedOfferData);
    setValidDiscount(true);
  };

  function textOffer() {
    if (Array.isArray(offerData)) {
      const validOffers = offerData.filter((offer) => offer.isValid);
      if (validOffers.length > 0) {
        validOffers.forEach((validOffer) => {
          setValidDiscount(true);
          const discountType = validOffer.discountKey + "Offer";
          console.log(validOffers);
          if (validOffer.discountKey === "common") {
            if (online && online.length > 0) {
              const getMaxOnlineDiscounts = online
                .filter(
                  (offer) =>
                    offer.orderType === 2 || offer.orderType === orderType
                )
                .map((offer) => Number(offer.discount));
              const getMaxValue = Math.max(...getMaxOnlineDiscounts);
              const offerWithMaxDiscount =
                online.find(
                  (offer) => Number(offer.discount) === getMaxValue && (offer.orderType === orderType || offer.orderType === 2)
                ) || null;
              // console.log(offerWithMaxDiscount);
              if (offerWithMaxDiscount) {
                const commonOfferData = {
                  ...validOffer.data,
                  onlineDiscount: offerWithMaxDiscount.discount,
                  onlineDiscountType: offerWithMaxDiscount.discountType,
                  onlineMinorder: offerWithMaxDiscount.minOrder,
                };
                console.log("yes");
                commonOffer(commonOfferData);
              }
            }
          } else {
            if (validOffer.discountKey !== "common") {
              console.log("sdfewre");
              applyDiscount(validOffer.data, orderMode, discountType);
            }
          }

          AppliedhandleShow();
        });
      } else {
        setValidDiscount(false);
      }
    } else {
      setValidDiscount(false);
    }
  }

  const handleClose = () => {
    setShowFirstImage(true);
    setShow(false);
    setCoupons(false);
  };
  const handleClose1=()=>{
    setIsModalOpen(false);
  }

  const handleShow = () => {
    setShow(true);
    setShowFirstImage(true);
  };
  
  const [Applied, setApplied] = useState(false);

  const AppliedhandleClose = () => {
    setApplied(false);
  };
  const AppliedhandleShow = () => {
    setApplied(true);
    setShow(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstImage(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [showFirstImage]);

  function commonOffer(data) {
    const totalValue = localStorage.getItem("totalPrice");
    if (parseFloat(totalValue) >= parseFloat(data.onlineMinorder)) {
      data.discount = data.onlineDiscount ?? data.discount;
      data.discountType = data.onlineDiscountType ?? data.discountType;
      applyDiscount(data, orderMode, "commonOffer");
      setCheckOfferAmount("remove");
      AppliedhandleShow();
    }
  }

  // useEffect(() => {
  //   const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  //   const sessionalOfferStatus=localStorage.getItem("sessionalOffer")||0;
  //   if(userLoggedIn && (sessionalOfferStatus === 1 || sessionalOfferStatus === '1')){
  //     localStorage.removeItem('sessionalOffer');
  //     setShow(true);
  //   }
  // }, [localStorage.getItem("isLoggedIn")]);

  function promoOffer(data) {
    if(data.sessionalOffer===1){
      const isLoggedIn = localStorage.getItem("isLoggedIn") || "";
      if (isLoggedIn === "false" || isLoggedIn === false || isLoggedIn === "") {
        setShow(false);
        setLoginPopupShow(true);
        localStorage.setItem('sessionalOffer',1);
      }
      else{
        const mergedData = {
          ...data,
          seasonalOnline: seasonalOnline,
        };
        applyDiscount(mergedData, orderMode, "promoOffer");
        setCheckOfferAmount("remove");
        AppliedhandleShow();
        localStorage.setItem('sessionalOffer',1);
      }
    }
    else{
      applyDiscount(data, orderMode, "promoOffer");
      setCheckOfferAmount("remove");
      AppliedhandleShow();
    }
  }

  const onlineOffer1=async(data)=>{
    setOnlineOffer(data);
    applyDiscount(data, orderMode, "onlineOffer");
    setCheckOfferAmount("remove");
    AppliedhandleShow();
    setUseCodeStatus(true);
  }

  function removeOffer() {
    removeDiscount();
    setCheckOfferAmount("remove");
    localStorage.removeItem('sessionalOffer');
    localStorage.removeItem('seasonalDiscount');
  }

  const { theme } = useContext(ThemeContext);
  const total = Math.floor(localStorage.getItem("totalPrice"));

  const minOrder=online[0]?.minOrder;
  useEffect(()=>{
      
  },[currentTotal]);
  useEffect(()=>{
    console.log(currentTotal);
    console.log(cartQty);
    setPrevTotal(currentTotal);
    setCurrentTotal(cartQty);
  },[cartQty]);


  useEffect(()=>{
    if(total>minOrder){
      console.log(cartQty>prevTotal);
      if(cartQty>prevTotal){
      console.log(currentTotal,prevTotal);
      setCoupons(true);
      if(status==="viewAll"){
      setShow(true);
      setIsModalOpen(true);
      }
      }
      else{
        setShow(false);
      }
    }
    else{
      setCoupons(false);
      setShow(false);
    }
  },[prevTotal])

  return (
    <>

      {status === "" ? (
        <Button onClick={removeOffer}>Remove</Button>
      ) :(
        <Button variant="primary" onClick={handleShow}>
          {status === "viewAll" ? (
            <>
              View all Coupons
              <span className="prc-right-btn">
                <MdOutlineKeyboardArrowRight />
              </span>
           </>
          ) : (
            "View Coupon"
          )}
        </Button>
      )}
     
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`offerpopup-new ${theme === "dark" && "dark-theme"}`}
        fullscreen="md-down"
      >
        <Modal.Body>
          <div className="top-heading">
            <div className="header-content">
              <span className="close-btn" onClick={handleClose}>
                <IoIosArrowBack />
              </span>
              <p>Coupons for you</p>
            </div>
            <Form>
              <Form.Control
                type="text"
                placeholder="Enter your code"
                value={offerData.offer}
                onChange={handleChange}
                name="offer"
                isInvalid={!validDiscount}
              />
              <Button onClick={() => textOffer()}>Apply</Button>
            </Form>
            <h3 className="offer-title">Best offers for you</h3>
          </div>
          <div className="offer-content">
            {promo ? (
              <PromoOffers
                promo={promo}
                orderType={orderType}
                orderMode={orderMode}
                promoOffer={promoOffer}
                seasonalOnline={seasonalOnline}
              />
            ) : null}
            {common ? (
              <CommonOffers
                common={common}
                online={online}
                orderType={orderType}
                orderMode={orderMode}
                commonOffer={commonOffer}
              />
            ) : null}
            {online ? (
              <OnlineOffers
                online={online}
                orderType={orderType}
                orderMode={orderMode}
                onlineOffer1={onlineOffer1}
              />
            ) : null}
          </div>
        </Modal.Body>
      </Modal>
     
      <SuccessPopup
        AppliedhandleClose={AppliedhandleClose}
        Applied={Applied}
        theme={theme}
      />
    </>
  );
}

export default OfferPopup;

const SuccessPopup = ({ AppliedhandleClose, Applied, theme }) => {
  const discountJSON = localStorage.getItem("discount");
  const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : "";
  const isSmallScreen = window.innerWidth >= 320 && window.innerWidth <= 575;
  return (
    <>
      {parsedDiscount ? (
        <>
          <Modal
            show={Applied}
            onHide={AppliedhandleClose}
            centered
            fullscreen={isSmallScreen ? "sm-down" : undefined}
            className={`couponapply-new ${theme === "dark" && "dark-theme"}`}
          >
            <Modal.Body>
              <div className="content-div">
                <span>
                  <MdDone />
                  <div class="pulse">
                    <FaDotCircle />
                  </div>
                </span>
                <p>“{parsedDiscount.discount}” Applied</p>
                <h4>You Saved £{parsedDiscount.appliedDiscount}</h4>
                <h5>with this coupon code.</h5>
                <button onClick={AppliedhandleClose}>Continue</button>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ) : null}
    </>
  );
};


const PromoOffers = (params) => {
  const total = localStorage.getItem("totalPrice");
  return (
    <>
      {params.promo.map((data, index) => (
        <>
          {data.orderType === params.orderType || data.orderType === 2 ? (
            <>
              <Accordion defaultActiveKey="1" key={index}>
                <div className="offer-box">
                  <div className="offer-header">
                    <div className="icon-div">
                      <span>
                        <TbDiscount2 />
                      </span>
                    </div>
                    <div className="content-div">
                      <h2>
                        Get{" "}
                        {data.discountType === "%"
                          ? `${data.discount}${data.discountType}`
                          : `${data.discountType}${data.discount}`}{" "}
                        OFF
                      </h2>
                      
                      {data?.sessionalOffer && parseFloat(data?.minOrder)  > parseFloat(total) ? (
                        <p>
                          Add Items worth £
                          {(
                            parseFloat(data?.minOrder) -
                            parseFloat(total).toFixed(2)
                          ).toFixed(2)}{" "}
                          more to unlock
                        </p>
                      ) : (
                        <p></p>
                      )}
                      <div className="offer-code">
                        <Button>{data.code}</Button>
                        <ContextAwareToggle eventKey="0" />
                      </div>
                    </div>
                  </div>
                  <Accordion.Collapse eventKey="0">
                    <div className="t-and-c">
                      <p>Terms & Conditions</p>
                      <ul>
                        <li>{data?.sessionalOffer ?( "Sessional" ) :("Promo") } Code applicable on all orders.</li>
                        <li>
                          Offer will be applicable on your {data?.sessionalOffer ?( "five" ) :("first") } order only.
                        </li>
                        <li>
                          Offer is valid only for this particular
                          takeaway/restaurant.
                        </li>
                        <li>No maximum limit to apply the coupon code.</li>
                        <li>
                          This coupon code is applicable only for{" "}
                          {data.orderType === 2 ? "All" : params.orderMode}{" "}
                          orders.
                        </li>
                      </ul>
                    </div>
                  </Accordion.Collapse>
                  <div className="apply-div">
                    <Button
                      className="apply-btn"
                      onClick={() => data.sessionalOffer === 1 ? params.promoOffer(data) : params.promoOffer(data) }
                    >
                      Tap to Apply
                    </Button>
                  </div>
                </div>
              </Accordion>
            </>
          ) : null}
        </>
      ))}
    </>
  );
};

const CommonOffers = (params) => {
  const total = localStorage.getItem("totalPrice");
  const maxDiscounts = params.online.filter(
    (offer) =>
      offer.orderType === 2 || offer.orderType === params.orderType
  ).map((offer) => offer.discount);
  const maxValue = Math.max(...maxDiscounts);
  const offerWithMaxDiscount =
    params.online.find((offer) => offer.discount == maxValue && (offer.orderType === params.orderType || offer.orderType === 2) ) || 0;
  
  // console.log(offerWithMaxDiscount);  
  
    return (
    <>
      {params.common.map((data, index) => (
        <>
          {data.orderType === params.orderType || data.orderType === 2 ? (
            <>
              <Accordion defaultActiveKey="1" key={index}>
                <div className="offer-box">
                  <div className="offer-header">
                    <div className="icon-div">
                      <span>
                        <TbDiscount2 />
                      </span>
                    </div>
                    <div className="content-div">
                      <h2>
                        Get{" "}
                        {data.discountType === "%"
                          ? `${data.discount}${data.discountType}`
                          : `${data.discountType}${data.discount}`}{" "}
                        OFF
                      </h2>
                      {parseFloat(offerWithMaxDiscount.minOrder) > parseFloat(total) ? (
                        <p>
                          Add Items worth £
                          {(
                            parseFloat(offerWithMaxDiscount.minOrder) -
                            parseFloat(total).toFixed(2)
                          ).toFixed(2)}{" "}
                          more to unlock
                        </p>
                      ) : (
                        <p></p>
                      )}
                      <div className="offer-code">
                        <Button>{data.code}</Button>
                        <ContextAwareToggle eventKey="0" />
                      </div>
                    </div>
                  </div>
                  <Accordion.Collapse eventKey="0">
                    <div className="t-and-c">
                      <p>Terms & Conditions</p>
                      <ul>
                        <li>
                          Coupon code applicable only on orders above £
                          {data.minOrder}
                          {/* {data.discountType === "%"
                            ? `${data.discount}${data.discountType}`
                            : `${data.discountType}${data.discount}`}{" "} */}
                          .
                        </li>
                        <li>
                          Offer is valid only for this particular
                          takeaway/restaurant.
                        </li>
                        <li>No maximum limit to apply the coupon code.</li>
                        <li>Offer valid only till {data.to}.</li>
                        <li>
                          This coupon code is applicable only for{" "}
                          {data.orderType === 2 ? "All" : params.orderMode}{" "}
                          orders.
                        </li>
                      </ul>
                    </div>
                  </Accordion.Collapse>
                  <div className="apply-div">
                    <Button
                      className="apply-btn"
                      onClick={() => {
                        const customizedData = {
                          ...data,
                          onlineDiscount: offerWithMaxDiscount.discount,
                          onlineDiscountType: offerWithMaxDiscount.discountType,
                          onlineMinorder: offerWithMaxDiscount.minOrder,
                        };
                        params.commonOffer(customizedData);
                      }}
                      // onClick={() => params.commonOffer(data)}
                      disabled={parseFloat(data.minOrder) > parseFloat(total)}
                    >
                      Tap to Apply
                    </Button>
                  </div>
                </div>
              </Accordion>
            </>
          ) : null}
        </>
      ))}
    </>
  );
};

const OnlineOffers = (params) => {
  const total = localStorage.getItem("totalPrice");
  return (
    <>
      {params.online.map((data, index) => (
        <>
          {data.orderType === params.orderType || data.orderType === 2 ? (
            <>
              <Accordion defaultActiveKey="1" key={index}>
                <div className="offer-box">
                  <div className="offer-header">
                    <div className="icon-div">
                      <span>
                        <TbDiscount2 />
                      </span>
                    </div>
                    <div className="content-div">
                      <h2>
                        Get{" "}
                        {data.discountType === "%"
                          ? `${data.discount}${data.discountType}`
                          : `${data.discountType}${data.discount}`}{" "}
                        OFF
                      </h2>
                      {parseFloat(data.minOrder) > parseFloat(total) ? (
                        <p>
                          Add Items worth £
                          {(
                            parseFloat(data.minOrder) -
                            parseFloat(total).toFixed(2)
                          ).toFixed(2)}{" "}
                          more to unlock
                        </p>
                      ) : (
                        <p></p>
                      )}
                      <div className="offer-code">
                        <Button>{data.code}</Button>
                        <ContextAwareToggle eventKey="0" />
                      </div>
                    </div>
                  </div>
                  <Accordion.Collapse eventKey="0">
                    <div className="t-and-c">
                      <p>Terms & Conditions</p>
                      <ul>
                        <li>
                          Coupon code applicable only on orders above £
                          {data.minOrder}
                          {/* {data.discountType === "%"
                            ? `${data.discount}${data.discountType}`
                            : `${data.discountType}${data.discount}`}{" "} */}
                          .
                        </li>
                        <li>
                          Offer is valid only for this particular
                          takeaway/restaurant.
                        </li>
                        <li>No maximum limit to apply the coupon code.</li>
                        <li>Offer valid only till {data.to}.</li>
                        <li>
                          This coupon code is applicable only for{" "}
                          {data.orderType === 2 ? "All" : params.orderMode}{" "}
                          orders.
                        </li>
                      </ul>
                    </div>
                  </Accordion.Collapse>
                  <div className="apply-div">
                    <Button
                      className="apply-btn"
                      onClick={() => params.onlineOffer1(data)}
                      disabled={parseFloat(data.minOrder) > parseFloat(total)}
                    >
                      Tap to Apply
                    </Button>
                  </div>
                </div>
              </Accordion>
            </>
          ) : null}
        </>
      ))}
    </>
  );
};

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button onClick={decoratedOnClick}>
      {isCurrentEventKey ? "Hide Details" : "Show Details"}
    </button>
  );
}
