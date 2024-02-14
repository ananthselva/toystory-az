// *******~ Import ~******** //
// React
import React, { useState, useEffect, useContext, lazy, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProgressBar from "react-bootstrap/ProgressBar";
// Assets
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Modal, Image } from "react-bootstrap";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { BiPlus, BiMinus } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
// import { Swiper, SwiperSlide } from "swiper/react";
import PreOrder from "../preorder/preorder";
import { OrderFlow } from "../../App";
import { RestaurantContext } from "./menu-page";
import { ItemAddMinusContext } from "./menu";
import Table from "react-bootstrap/Table";
// import required modules
// import { Mousewheel } from "swiper";
// Import Swiper styles
import "swiper/css";

// Images Import
// import ItemImg1 from "./img/item1.jpg";
// import ItemImg2 from "./img/item2.jpg";
// import ItemImg3 from "./img/menu-item.png";
// import ItemImg4 from "./img/menu-item-pizza.jpg";
import OfferIcon from "./img/offer-icon.svg";
import GiftIcon from "./img/gift.svg";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { TiArrowBack, TiChevronRight } from "react-icons/ti";
// import required modules
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineCancel, MdDone } from "react-icons/md";
// import Loyalty from "./loyalty-popup";
// import FreeGift from "./gift";
// import OfferPopup from "./offer-popup";
// import ItemPopup from "./item-popup";

import { connect } from "react-redux";
import { getchargesDetail } from "../../actions/checkout/getChargesDetailActions";
import { postcodeDetailApi } from "../../api/menu/postcodeDetailApi";
import {
  cartStoreLocal,
  cartRemoveAllItem,
  cartRemoveItem,
  plusCartStore,
} from "../../actions/menu/cartAction";
import { ResetCart } from "./reset-cart";
import Loadable from "../../router/loadable";
// Lazy
const Loyalty = Loadable(lazy(() => import("./loyalty-popup")));
const FreeGift = Loadable(lazy(() => import("./gift")));
const OfferPopup = Loadable(lazy(() => import("./offer-popup")));
const ItemPopup = Loadable(lazy(() => import("./item-popup")));

function MenuCart({
  MenuAPI,
  cartItems,
  cartStoreLocal,
  cartData,
  userData,
  getchargesDetail,
  chargesdetail,
}) {
  const { getOrderMode, getOrderTime, restaurant, loginPopupShow } =
    OrderFlow();
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  const [selectedOrderMode, setSelectedOrderModeValue] = useState(getOrderMode);
  const [showPreorder, setShowPreorder] = useState(false);
  const [onlineOffer, setOnlineOffer] = useState(null);
  const [useCodeOffer, setUseCodeOffer] = useState(null);
  const [freeGifts, setFreeGifts] = useState(null);
  const [freeGiftsDetails, setFreeGiftsDetails] = useState(null);
  const [freeGiftStatus, setFreeGiftStatus] = useState(false);
  const [useCodeStatus, setUseCodeStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [progressClassName, setProgressClassName] = useState(null);
  const [innerHeight, setInnerHeight] = useState(0);
  const [coupons, setCoupons] = useState(false);
  const offCanvaRef = useRef();
  const handleGiftClose = () => {
    setShow(false);
  };
  const handleGiftShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setShowPreorder(true);
  };
  const [cartItemsData, setcartItems] = useState([]);
  const { path } = useParams();
  // const navigate = useNavigate();

  // const handlePlusItemQty = (cartItems) => {
  //   cartStore(cartItems, restaurant.discount, getOrderMode);
  //   cartStoreLocal();
  // };

  //mobile back navigate stop

  const handleRefreshCart = () => {
    cartStoreLocal();
  };

  useEffect(() => {
    if (cartData || cartItems) {
      const storedCart = localStorage.getItem("cart");
      let localStorageData = JSON.parse(storedCart) || [];
      setcartItems(localStorageData);
      cartStoreLocal();
    }
  }, [cartData, cartItems]);

  useEffect(() => {
    getchargesDetail({
      client_path: path,
    });
  }, [path]);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow, { passive: true });
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const [MenuCartshow, setMenuCartShow] = useState(false);
  const [windowScroll, setWindowScroll] = useState(false);
  const handleClose = () => {
    if (width < breakpoint) {
      setProgressClassName("tall-height");
    }
    setMenuCartShow(false);
  };
  const handlePreOrderClose = () => setShowPreorder(false);
  // const handleShow = () => setMenuCartShow(true);

  useEffect(() => {
    if (MenuCartshow) {
      // push to history when modal opens
      window.history.pushState(null, "", window.location.href);
      // close modal on 'back'
      window.onpopstate = () => {
        window.onpopstate = () => {};
        // window.history.back()
        setMenuCartShow(false);
      };
    }
    if (width < breakpoint) {
      if (MenuCartshow) {
        setProgressClassName("tall-height");
      }
    } else {
      setProgressClassName(null);
    }
  }, [MenuCartshow]);
  // const cartStorageData = JSON.parse(localStorage.getItem("cart")) || '';
  useEffect(() => {
    const handleResizeWindow = () => {
      if (width > breakpoint) {
        let localStorageData = JSON.parse(localStorage.getItem("cart")) || "";
        let localclientId = JSON.parse(localStorage.getItem("clientId")) || "";
        if (localStorageData?.length > 0 && !showPreorder && !loginPopupShow) {
          if (
            parseInt(localclientId) === parseInt(localStorageData[0].clientId)
          ) {
            setMenuCartShow(true);
            setcartItems(localStorageData);
          }
        }
      }
    };
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [localStorage.getItem("cart")]);

  const handleShow = () => {
    setMenuCartShow(true);
    let localStorageData = JSON.parse(localStorage.getItem("cart"));
    setcartItems(localStorageData);
  };

  const { theme } = useContext(ThemeContext);

  // default preorder tab
  const [defaultCollectionTabStatus, setDefaultCollectionTabStatus] =
    useState(null);
  const [defaultDeliveryTabStatus, setDefaultDeliveryTabStatus] =
    useState(null);

  // discount offer function
  const [checkOfferAmount, setCheckOfferAmount] = useState("0");
  const discountJSON = localStorage.getItem("discount");
  const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : 0;
  let appliedDiscount = 0;
  if (orderType === parsedDiscount.orderType) {
    appliedDiscount = parsedDiscount.appliedDiscount
      ? parsedDiscount.appliedDiscount
      : 0;
  }

  const [showResetCart, setShowResetCart] = useState(false);
  const ClearCart = () => {
    setShowResetCart(!showResetCart);
  };
  const { itemAdded, setItemAdded } = useContext(ItemAddMinusContext);
  const [itemadd, setItemAdd] = useState(false);

  useEffect(() => {
    const toggleItemAdd = () => {
      if (itemAdded !== false) {
        setItemAdd((prevState) => !prevState);
        setItemAdded(false);
      } else {
        setItemAdd(false);
      }
    };
    if (itemAdded !== false) {
      setItemAdd((prevState) => !prevState);
      setItemAdded(false);
    }

    const intervalId = setInterval(toggleItemAdd, 1000);

    return () => clearInterval(intervalId);
  }, [itemAdded]);

  // total value calculation
  const bagCharge = chargesdetail?.message?.baggageCharge || 0;

  console.log("bagCharge");
  console.log(bagCharge);
  const serviceCharge = chargesdetail?.message?.serviceCharge || 0;
  const subTotal = localStorage.getItem("totalPrice");
  const totalValues = (
    parseFloat(subTotal) +
    parseFloat(bagCharge) +
    parseFloat(serviceCharge) -
    parseFloat(appliedDiscount)
  ).toFixed(2);

  //stop over lap color
  useEffect(() => {
    setInnerHeight(window.innerHeight);
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run on initial mount

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll event handling logic here
      setWindowScroll(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   if(MenuCartshow){
  //   const offCan=document.getElementsByClassName("offcanvas-body");
  //   console.log(offCan);
  //   const handleScroll = () => {
  //        const clientHeight=window.innerHeight;
  //        console.log(clientHeight);
  //       setInnerHeight(clientHeight);

  //   };
  //   if (offCan) {
  //     console.log("hii");
  //       offCan.addEventListener('scroll', handleScroll);
  //   }
  //   return () => {
  //     if (offCan) {
  //       offCan.removeEventListener('scroll', handleScroll);
  //     }

  //   };
  // }

  const orderTab = localStorage.getItem("orderType") || "";
  const tatTime = localStorage.getItem("tatTime") || "0 - 10";

  return (
    <>
      {showResetCart && <ResetCart />}
      {localStorage.getItem("cartQty") !== "0" ? (
        <>
          {width > breakpoint ? (
            <>
              <Button onClick={handleShow} className="cart-canva-btn">
                <span className="btn-data">
                  <span className="count">
                    {localStorage.getItem("cartQty")}
                  </span>
                  <GiShoppingBag />
                </span>
                <span className="btn-name-order">View Order</span>
                <span className="btn-order-price">
                  £{localStorage.getItem("totalPrice")}
                </span>
              </Button>
            </>
          ) : (
            <>
              <div className="mob-cart-btn-div">
                <Container>
                  <Row>
                    <Col xxl={12} xl={12} lg={12} md={12}>
                      <OfferApply
                        MenuAPI={MenuAPI}
                        setOnlineOffer={setOnlineOffer}
                        onlineOffer={onlineOffer}
                        useCodeOffer={useCodeOffer}
                        setUseCodeOffer={setUseCodeOffer}
                        freeGifts={freeGifts}
                        freeGiftsDetails={freeGiftsDetails}
                        freeGiftStatus={freeGiftStatus}
                        setFreeGiftStatus={setFreeGiftStatus}
                        restaurant={restaurant.discount}
                        useCodeStatus={useCodeStatus}
                        setUseCodeStatus={setUseCodeStatus}
                        progressClassName={null}
                        handleGiftShow={handleGiftShow}
                        handleGiftClose={handleGiftClose}
                        setShow={setShow}
                      />

                      <button
                        disabled={itemadd}
                        onClick={handleShow}
                        className={`mob-cart-btn  ${
                          itemadd ? "add-item-active" : null
                        }`}
                      >
                        <div class="flip-div">
                          <div className="front cart-btn-div">
                            <span className="count">
                              {localStorage.getItem("cartQty")}
                            </span>
                            <span className="cart-text">View Order</span>
                            <span className="total-price">
                              £{localStorage.getItem("totalPrice")}
                            </span>
                          </div>
                          <div className="back add-success">
                            <span className="count">
                              <MdDone />
                            </span>
                            <p>Tasty item in Cart!</p>
                          </div>
                        </div>
                      </button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          )}
        </>
      ) : null}

      <Modal
        show={showPreorder}
        onHide={handlePreOrderClose}
        centered
        className={`preorder-popup ${theme === "dark" ? "dark-theme" : ""}`}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handlePreOrderClose}>
            <MdOutlineCancel />
          </span>
          <PreOrder
            selectedOrderMode={selectedOrderMode}
            setSelectedOrderModeValue={setSelectedOrderModeValue}
            showPreorder={showPreorder}
            setShowPreorder={setShowPreorder}
            defaultCollectionTabStatus={defaultCollectionTabStatus}
            setDefaultCollectionTabStatus={setDefaultCollectionTabStatus}
            defaultDeliveryTabStatus={defaultDeliveryTabStatus}
            setDefaultDeliveryTabStatus={setDefaultDeliveryTabStatus}
          />
        </Modal.Body>
      </Modal>
      <Offcanvas
        show={MenuCartshow}
        onHide={handleClose}
        placement={width > 500 ? "end" : "bottom"}
        id="cart-canva"
        ref={offCanvaRef}
        className={theme === "dark" && "dark-theme"}
      >
        <Offcanvas.Body>
          {/* <Button onClick={handleClose}>Close</Button> */}
          <div className="header-div">
            {width > breakpoint ? (
              <>
                <div className="header-top">
                  <h3>Your Order</h3>
                  {/* <h3>
                    <span> £{appliedDiscount}</span>
                  </h3> */}
                  <button onClick={handleClose}>
                    <TiArrowBack /> Add more items
                  </button>
                  {/* <Link to={`/${MenuAPI.clientPath}/checkout`}>Checkout</Link> */}
                  {/* <h3>£34.40</h3> */}
                </div>

                <div className="preorder-text">
                  <p>
                    <span>{getOrderMode}</span>
                    <span>
                      {orderTab === "" || orderTab === "ASAP"
                        ? tatTime + " Mins"
                        : getOrderTime}
                    </span>
                  </p>
                  <p>
                    <span onClick={handleChange}>Change</span>{" "}
                    <span onClick={ClearCart}>Clear Basket</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="header-top">
                  <h3>Your Order</h3>
                  {/* <h3>
                    <span> £{appliedDiscount}</span>
                  </h3> */}
                  <button onClick={handleClose}>
                    <TiArrowBack /> Add more items
                  </button>
                  {/* <h3>
                    <span> £{appliedDiscount}</span>
                  </h3> */}
                </div>
                <div className="preorder-text">
                  <p>
                    <span>{getOrderMode}</span>
                    <span>
                      {orderTab === "" || orderTab === "ASAP"
                        ? tatTime + " Mins"
                        : getOrderTime}
                    </span>
                  </p>
                  <p>
                    <span onClick={handleChange}>Change</span>{" "}
                    <span onClick={ClearCart}>Clear Basket</span>
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="inside-div" id="inside-canva">
            <div className="menu-item-box">
              <Table className="menu-item-tabel">
                <tbody>
                  {cartItemsData
                    ? cartItemsData.map((menuitem, index) => (
                        <>
                          <tr>
                            <td>
                              <span className="count">{menuitem.count}</span>
                            </td>
                            <td>
                              <ItemPopup
                                item={{
                                  ...menuitem,
                                  price: parseFloat(
                                    menuitem.actual_price
                                  ).toFixed(2),
                                  addon: menuitem.addonFirstId
                                    ? menuitem.addonFirstId
                                    : 0,
                                }}
                                clsname="content"
                                setcartItems={setcartItems}
                              >
                                <p>{menuitem.itemName}</p>
                                {menuitem.addonName && (
                                  <span className="item-desc">
                                    {menuitem.addonName &&
                                    menuitem.addonName.length > 80
                                      ? menuitem.addonName.slice(0, 100) + "..."
                                      : menuitem.addonName}
                                  </span>
                                )}
                              </ItemPopup>
                            </td>
                            <td>£{menuitem.price}</td>
                            {menuitem.loyalty === 0 && menuitem.gift === 0 ? (
                              <td>
                                <>
                                  {width > 1199 ? (
                                    <>
                                      <DeletePopover
                                        menuitem={menuitem}
                                        handleRefreshCart={handleRefreshCart}
                                        getOrderMode={getOrderMode}
                                        restaurant={restaurant}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <DeleteItem
                                        menuitem={menuitem}
                                        handleRefreshCart={handleRefreshCart}
                                        getOrderMode={getOrderMode}
                                        restaurant={restaurant}
                                      />
                                    </>
                                  )}
                                </>
                              </td>
                            ) : null}
                          </tr>
                        </>
                      ))
                    : null}
                </tbody>
              </Table>
            </div>
            {/* <PeopleAdd /> */}
            <NeedCutlery />
            <OfferCode
              restaurant={restaurant.discount}
              checkOfferAmount={checkOfferAmount}
              setCheckOfferAmount={setCheckOfferAmount}
              MenuAPI={MenuAPI}
              onlineOffer={onlineOffer}
              setOnlineOffer={setOnlineOffer}
              useCodeOffer={useCodeOffer}
              setUseCodeOffer={setUseCodeOffer}
              freeGifts={freeGifts}
              setFreeGifts={setFreeGifts}
              freeGiftsDetails={freeGiftsDetails}
              setFreeGiftsDetails={setFreeGiftsDetails}
              setFreeGiftStatus={setFreeGiftStatus}
              useCodeStatus={useCodeStatus}
              setUseCodeStatus={setUseCodeStatus}
              handleGiftShow={handleGiftShow}
              handleGiftClose={handleGiftClose}
              show={show}
              setShow={setShow}
              setCoupons={setCoupons}
              coupons={coupons}
            />
            {userData &&
            userData.loyalty !== 0 &&
            MenuAPI?.menuData?.loyaltyItem !== false ? (
              <>
                <div className="offer-code loyalty">
                  <div className="inside">
                    <Image src={GiftIcon} alt="" />
                    <p>“Loyalty Points Rewards”</p>
                    <Loyalty
                      loyalty={MenuAPI?.menuData?.loyaltyItem}
                      loyaltyPoint={userData.loyalty}
                    />
                  </div>
                </div>
              </>
            ) : null}
            {/* {MenuAPI?.menuData?.freeItem !== false ? (
                <>
                  <FreeGift gift={MenuAPI?.menuData?.freeItem} />
                </>
              ) : null} */}
            <Surcharge
              bagCharge={bagCharge}
              serviceCharge={serviceCharge}
              appliedDiscount={appliedDiscount}
              totalValues={totalValues}
            />
          </div>

          <CheckoutBtnMob
            MenuAPI={MenuAPI}
            minOrder={restaurant.minOrder}
            getOrderMode={getOrderMode}
            setShowPreorder={setShowPreorder}
            totalValues={totalValues}
            setOnlineOffer={setOnlineOffer}
            useCodeOffer={useCodeOffer}
            setUseCodeOffer={setUseCodeOffer}
            freeGiftsDetails={freeGiftsDetails}
            freeGiftStatus={freeGiftStatus}
            setFreeGiftStatus={setFreeGiftStatus}
            restaurant={restaurant.discount}
            useCodeStatus={useCodeStatus}
            setUseCodeStatus={setUseCodeStatus}
            progressClassName={progressClassName}
            handleGiftShow={handleGiftShow}
            handleGiftClose={handleGiftClose}
            setShow={setShow}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function DeletePopover({
  menuitem,
  handleRefreshCart,
  getOrderMode,
  restaurant,
}) {
  const [countValue, setCountValue] = useState(menuitem.count);
  const [priceValue, setPriceValue] = useState(menuitem.price);

  // useEffect(() => {
  //   setCountValue(menuitem.count);
  //   setPriceValue(menuitem.price);
  // }, [menuitem.count, menuitem.price]);

  const fetchLatestData = () => {
    const storedCart = localStorage.getItem("cart");
    const localStorageCart = JSON.parse(storedCart) || [];
    const matchingCartItem = localStorageCart.find(
      (item) => item.itemId === menuitem.itemId
    );
    setCountValue(matchingCartItem?.count);
    setPriceValue(parseFloat(matchingCartItem?.price).toFixed(2));
  };
  useEffect(() => {
    fetchLatestData();
  }, [menuitem, handleRefreshCart]);

  const handlePlusItemQty = (cartItems) => {
    cartStoreLocal();
    const isMatchingAddon = cartItems.addonName === menuitem.addonName;
    const newCount = isMatchingAddon ? countValue + 1 : countValue;
    const newPrice = isMatchingAddon
      ? parseFloat(priceValue) + parseFloat(cartItems.actual_price)
      : priceValue;
    setCountValue(newCount);
    setPriceValue(newPrice.toFixed(2));
    cartItems["count"] = newCount;
    cartItems["price"] = newPrice;
    plusCartStore(cartItems, restaurant.discount, getOrderMode);
    handleRefreshCart();
  };

  const handleMinusItemQty = (cartItems) => {
    if (countValue > 1) {
      const newCount = countValue - 1;
      const newPrice =
        parseFloat(priceValue) - parseFloat(cartItems.actual_price);
      setCountValue(newCount);
      setPriceValue(newPrice.toFixed(2));
      cartRemoveItem(cartItems, restaurant.discount, getOrderMode);
      cartStoreLocal();
      handleRefreshCart();
    }
  };

  const [Deleteallshow, setDeleteallshow] = useState(false);
  const handleShow = () => setDeleteallshow(true);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <OverlayTrigger
        trigger={"click"}
        placement="left"
        rootCloseEvent="click"
        rootClose="true"
        delay={{ show: 0, hide: 0 }}
        overlay={
          <Popover
            id="popover-delete"
            className={theme === "dark" && "dark-theme"}
          >
            <Popover.Body>
              <div className="menu-item">
                <p className="item-name">{menuitem.itemName}</p>
                {menuitem.addonName && (
                  <span className="item-desc">{menuitem.addonName}</span>
                )}
                <div className="footer-div">
                  <div className="action">
                    <Button onClick={() => handleMinusItemQty(menuitem)}>
                      <BiMinus />
                    </Button>
                    <span className="count">{countValue}</span>
                    <Button onClick={() => handlePlusItemQty(menuitem)}>
                      <BiPlus />
                    </Button>
                  </div>
                  <p className="price">£{priceValue}</p>
                </div>
                <div className="delete-btns">
                  {/* <button className="delete-all"></button> */}
                  <Button onClick={handleShow} className="delete-all">
                    Delete All
                  </Button>

                  {/* <button className="delete">Delete</button> */}
                </div>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <Button>
          <TbTrash />
        </Button>
      </OverlayTrigger>
      <DeleteAll
        menuitem={menuitem}
        Deleteallshow={Deleteallshow}
        setDeleteallshow={setDeleteallshow}
        handleRefreshCart={handleRefreshCart}
        getOrderMode={getOrderMode}
        restaurant={restaurant}
      />
    </>
  );
}

function DeleteAll({
  menuitem,
  setDeletItemshow,
  Deleteallshow,
  setDeleteallshow,
  handleRefreshCart,
  getOrderMode,
  restaurant,
}) {
  const { theme } = useContext(ThemeContext);
  const handleClose = () => {
    setDeleteallshow(false);
    setDeletItemshow(true);
  };
  const handleConfirm = (menuitem, handleRefreshCart) => {
    cartRemoveAllItem(menuitem, restaurant?.discount, getOrderMode);
    setDeleteallshow(false);
    handleRefreshCart();
  };

  return (
    <>
      {/* <Button onClick={handleShow} className={props.clsname}>
        {props.name}
      </Button> */}

      <Modal
        show={Deleteallshow}
        onHide={handleClose}
        id="item-delete-popup"
        centered={true}
        className={theme === "dark" && "dark-theme"}
      >
        <Modal.Body>
          <div className="content">
            <h3>Confirm Delete</h3>
            <p>
              Are you sure you want to delete the <span>{menuitem.count}</span>{" "}
              Items of <span>“{menuitem.itemName}”.</span>
            </p>
            <div className="confirm-btns">
              <button onClick={handleClose} className="cancel">
                Cancel
              </button>
              <button
                onClick={() => handleConfirm(menuitem, handleRefreshCart)}
                className="confirm"
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// const PeopleAdd = () => {
//   return (
//     <>
//       <div className="people-add">
//         <h3>People also added</h3>
//         <Swiper
//           className="people-add-swiper"
//           modules={[Mousewheel]}
//           mousewheel={true}
//           slidesPerView={1.3}
//           spaceBetween={20}
//           loop={true}
//         >
//           {[
//             { img: ItemImg4 },
//             { img: ItemImg2 },
//             { img: ItemImg3 },
//             { img: ItemImg1 },
//           ].map((data, index) => (
//             <>
//               <SwiperSlide key={index}>
//                 <div className="menu-box">
//                   <div className="img-box">
//                     <Image src={data.img} />
//                   </div>
//                   <div className="content">
//                     <p>Vegan Hazelnut Cookie Dough</p>
//                     <div className="bottom-div">
//                       <span>£23.00</span>
//                       <button>
//                         <BiPlus />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

const NeedCutlery = (params) => {
  const localCutlery = localStorage.getItem("cutlery");
  const [cutlery, setCutlery] = useState(localCutlery);

  function changeCutlery(event) {
    localStorage.setItem("cutlery", event);
    setCutlery(event);
  }

  return (
    <>
      <div className="need-cutlery">
        <div className="title-btn">
          <h3>Do you really need cutlery?</h3>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              checked={cutlery === "true" ? "isChecked" : null}
              onChange={(event) => {
                const isChecked = event.target.checked;
                changeCutlery(isChecked);
              }}
            />
          </Form>
        </div>
        <p>Consider using your own cutlery to reduce plastic use</p>
      </div>
    </>
  );
};

const OfferCode = ({
  MenuAPI,
  useCodeOffer,
  setUseCodeOffer,
  setOnlineOffer,
  onlineOffer,
  freeGifts,
  setFreeGifts,
  freeGiftsDetails,
  setFreeGiftsDetails,
  setFreeGiftStatus,
  useCodeStatus,
  handleGiftShow,
  handleGiftClose,
  show,
  setShow,
  setUseCodeStatus,
  coupons,
  setCoupons,
  ...props
}) => {
  const { getOrderMode } = OrderFlow();
  const [discount, setDiscount] = useState("");
  const discountJSON = localStorage.getItem("discount");
  const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : "";
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  const { promo, common, online, autoDiscount } = props.restaurant;

  useEffect(() => {
    if (discount === "") {
      setUseCodeStatus(false);
    }
  }, [discount]);
  useEffect(() => {
    if (props.checkOfferAmount !== parsedDiscount?.appliedDiscount) {
      props.setCheckOfferAmount(parsedDiscount.appliedDiscount);
      setDiscount(parsedDiscount);
    } else {
      setDiscount(parsedDiscount);
    }
  }, [parsedDiscount, props]);

  const selectedGift = localStorage.getItem("gift") || "";
  const total = Math.floor(localStorage.getItem("totalPrice"));
  const minOrder = MenuAPI?.menuData?.freeItem?.detail?.minAmount
    ? Math.floor(MenuAPI?.menuData?.freeItem?.detail?.minAmount)
    : "";

  return (
    <>
      {promo.length === 0 &&
      common.length === 0 &&
      online.length === 0 &&
      autoDiscount.length === 0 ? null : (
        <>
          <div className="offer-code">
            <div className="inside">
              <Image src={OfferIcon} alt="" />
              {discount !== "" && parsedDiscount.orderType === orderType ? (
                <>
                  <p>
                    “<span>{discount.discount}</span> applied”
                  </p>
                  <OfferPopup
                    getOrderMode={getOrderMode}
                    restaurant={props.restaurant}
                    setCheckOfferAmount={props.setCheckOfferAmount}
                    status={""}
                    setOnlineOffer={setOnlineOffer}
                    useCodeOffer={useCodeOffer}
                    setUseCodeOffer={setUseCodeOffer}
                    onlineOffer={onlineOffer}
                    useCodeStatus={useCodeStatus}
                    setUseCodeStatus={setUseCodeStatus}
                    setCoupons={setCoupons}
                    coupons={coupons}
                  />
                </>
              ) : (
                <>
                  <p>“Select a Coupon Code”</p>
                  <OfferPopup
                    getOrderMode={getOrderMode}
                    restaurant={props.restaurant}
                    setCheckOfferAmount={props.setCheckOfferAmount}
                    status={"single"}
                    onlineOffer={onlineOffer}
                    setOnlineOffer={setOnlineOffer}
                    useCodeOffer={useCodeOffer}
                    setUseCodeOffer={setUseCodeOffer}
                    useCodeStatus={useCodeStatus}
                    setUseCodeStatus={setUseCodeStatus}
                    setCoupons={setCoupons}
                    coupons={coupons}
                  />
                </>
              )}
            </div>
            <div className="view-all">
              <OfferPopup
                getOrderMode={getOrderMode}
                restaurant={props.restaurant}
                setCheckOfferAmount={props.setCheckOfferAmount}
                status={"viewAll"}
                onlineOffer={onlineOffer}
                setOnlineOffer={setOnlineOffer}
                useCodeOffer={useCodeOffer}
                setUseCodeOffer={setUseCodeOffer}
                useCodeStatus={useCodeStatus}
                setUseCodeStatus={setUseCodeStatus}
                setCoupons={setCoupons}
                coupons={coupons}
              />
            </div>
          </div>
        </>
      )}

      {MenuAPI?.menuData?.freeItem !== false ? (
        <div className="offer-code">
          <div className="inside">
            <Image src={GiftIcon} alt="" />
            {selectedGift && minOrder < total ? (
              <p>“{selectedGift}” Added</p>
            ) : (
              <p>“Collect your Gift Rewards”</p>
            )}
            <FreeGift
              gift={MenuAPI?.menuData?.freeItem}
              freeGifts={freeGifts}
              setFreeGifts={setFreeGifts}
              setFreeGiftsDetails={setFreeGiftsDetails}
              setFreeGiftStatus={setFreeGiftStatus}
              handleGiftShow={handleGiftShow}
              handleGiftClose={handleGiftClose}
              show={show}
              setShow={setShow}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

const OfferApply = ({ useCodeOffer, setUseCodeOffer, ...props }) => {
  const [onlineDiscounts, setOnlineDiscounts] = useState(null);
  const { getOrderMode, restaurant } = OrderFlow();
  const [selectedGift, setSelectedGift] = useState(null);
  const [freeprogress, setFreeprogress] = useState(0);
  const [freeGiftDiscount, setFreeGiftDiscount] = useState(null);
  const [useCodeOfferData, setUseCodeOfferData] = useState(null);
  useEffect(() => {
    setSelectedGift(props.MenuAPI?.menuData?.freeItem);
    console.log(props?.progressClassName);
  }, []);
  let onlineDiscountOffer = [];
  useEffect(() => {
    onlineDiscountOffer = props?.onlineOffer?.minOrder;
    console.log(onlineDiscountOffer);
    setOnlineDiscounts(props?.onlineOffer);
  }, [props.onlineOffer]);
  useEffect(() => {
    setFreeGiftDiscount(props?.freeGiftsDetails?.minAmount);
  }, [props?.freeGifts, props?.freeGiftsDetails]);
  const discountJSON = localStorage.getItem("discount");
  const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : 0;

  const autoDiscount = restaurant.discount.autoDiscount;
  const onlineDiscount = restaurant.discount.online;
  const orderType = getOrderMode === "Collection" ? 1 : 0;

  const currentOffer = autoDiscount?.find(
    (data) => data.orderType === orderType
  );
  const total = localStorage.getItem("totalPrice");
  const minOrder = currentOffer?.minOrder;
  const percentage = Math.min((total / minOrder) * 100, 100);
  //free gift progress bar percentage
  const freePercentage = (
    (total / Math.floor(selectedGift?.detail?.minAmount)) *
    100
  ).toFixed(2);

  const onFreeGift = () => {
    if (freePercentage > 99) {
      props.setShow(true);
      return (
        <FreeGift
          gift={props.MenuAPI?.menuData?.freeItem}
          freeGifts={props.freeGifts}
          setFreeGifts={props.setFreeGifts}
          setFreeGiftsDetails={props.setFreeGiftsDetails}
          setFreeGiftStatus={props.setFreeGiftStatus}
          show={props.show}
          setShow={props.setShow}
        />
      );
    }
  };
  useEffect(() => {
    if (freePercentage !== "undefined") {
      if (freePercentage < 100) {
        setFreeprogress(freePercentage);
      } else if (freePercentage > 99) {
        onFreeGift();
      }
    }
  }, [freePercentage]);

  //free gift progress bar percentage
  //useCode progress bar progress
  const useCodeOfferLength = props?.restaurant?.online;
  const useCodeOfferSort = useCodeOfferLength.sort(
    (a, b) => a.minOrder - b.minOrder
  );
  const sortData = useCodeOfferSort[0];
  const useCodePercentage = (
    (total / Math.floor(sortData?.minOrder)) *
    100
  ).toFixed(2);
  useEffect(() => {
    if (useCodeOfferSort) {
      localStorage.setItem("useCode", JSON.stringify(sortData));
      setUseCodeOfferData(sortData);
    }
  }, []);

  const [discount, setDiscount] = useState("");
  const [getSubTotal, setSubTotal] = useState("");

  useEffect(() => {
    const subTotal = localStorage.getItem("totalPrice");
    if (props.checkOfferAmount !== parsedDiscount?.appliedDiscount) {
      setDiscount(parsedDiscount);
      setSubTotal(subTotal);
    } else {
      setDiscount(parsedDiscount);
      setSubTotal(subTotal);
    }
  }, [parsedDiscount, props]);

  let appliedDiscount = 0;
  if (orderType === parsedDiscount.orderType) {
    appliedDiscount = parsedDiscount.appliedDiscount
      ? parsedDiscount.appliedDiscount
      : 0;
  }

  return (
    <>
      {parsedDiscount === 0 ||
      parsedDiscount?.source === "autoDiscount" ||
      parsedDiscount?.source === "onlineDiscount" ? (
        <>
          {currentOffer ? (
            <>
              <div className="applied">
                <div
                  className={
                    props?.progressClassName === null
                      ? "content"
                      : props?.progressClassName
                  }
                >
                  <span>
                    {" "}
                    <TbDiscount2 />
                  </span>
                  <div className="text-progress">
                    {discount !== "" &&
                    parsedDiscount.orderType === orderType ? (
                      <p>
                        You got
                        {currentOffer.discountType === "%"
                          ? ` ${currentOffer.discount}${currentOffer.discountType}`
                          : ` ${currentOffer.discountType}${currentOffer.discount}`}{" "}
                        Off (-£{appliedDiscount})
                      </p>
                    ) : (
                      <p>
                        Add £{(currentOffer.minOrder - getSubTotal).toFixed(2)}{" "}
                        to get
                        {currentOffer.discountType === "%"
                          ? ` ${currentOffer.discount}${currentOffer.discountType}`
                          : ` ${currentOffer.discountType}${currentOffer.discount}`}{" "}
                        Off
                      </p>
                    )}
                    <ProgressBar animated now={percentage} />
                  </div>
                </div>
              </div>
            </>
          ) : useCodeOfferData ? (
            <>
              <div className="applied">
                <div
                  className={
                    props?.progressClassName === null
                      ? "content"
                      : props?.progressClassName
                  }
                >
                  <span>
                    {" "}
                    <TbDiscount2 />
                  </span>
                  <div className="text-progress">
                    {useCodePercentage < 99 ? (
                      <p>
                        Add £
                        {(useCodeOfferData?.minOrder - getSubTotal).toFixed(2)}{" "}
                        to get
                        {useCodeOfferData?.discountType === "%"
                          ? ` ${useCodeOfferData?.discount}${useCodeOfferData?.discountType}`
                          : ` ${useCodeOfferData?.discountType}${useCodeOfferData?.discount}`}{" "}
                        Off
                      </p>
                    ) : props?.useCodeStatus ? (
                      <p>
                        {props?.useCodeStatus || parsedDiscount?.discount ? (
                          <>{parsedDiscount?.discount} Offer Applied</>
                        ) : (
                          <>
                            You can apply{" "}
                            {useCodeOfferData?.code?.toString()?.toUpperCase()}{" "}
                            to get {useCodeOfferData.discount}% off
                          </>
                        )}
                      </p>
                    ) : (
                      <p>
                        {parsedDiscount?.discount ? (
                          <>{parsedDiscount?.discount} Offer Applied</>
                        ) : (
                          <>
                            You can apply{" "}
                            {useCodeOfferData?.code?.toString()?.toUpperCase()}{" "}
                            to get {useCodeOfferData.discount}% off
                          </>
                        )}
                      </p>
                    )}
                    <ProgressBar
                      animated
                      now={useCodePercentage < 99 ? useCodePercentage : 100}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : selectedGift ? (
            <>
              <div className="applied">
                <div
                  className={
                    props?.progressClassName === null
                      ? "content"
                      : props?.progressClassName
                  }
                >
                  <span>
                    {" "}
                    <TbDiscount2 />
                  </span>
                  <div className="text-progress">
                    {total < selectedGift?.detail?.minAmount ? (
                      <p>
                        Spend ${selectedGift.detail.minAmount} Add Free Item
                      </p>
                    ) : (
                      <p>
                        {props.freeGiftStatus ? (
                          "Free Item Available"
                        ) : (
                          <>
                            Spend ${selectedGift.detail.minAmount} Add Free Item
                          </>
                        )}
                      </p>
                    )}
                    <ProgressBar
                      animated
                      now={freePercentage < 99 ? freePercentage : 100}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

function DeleteItem({ menuitem, handleRefreshCart, getOrderMode, restaurant }) {
  const { theme } = useContext(ThemeContext);
  const [DeletItemshow, setDeletItemshow] = useState(false);
  const [Deleteallshow, setDeleteallshow] = useState(false);
  const handleClose = () => setDeletItemshow(false);
  const handleShow = () => setDeletItemshow(true);
  const handleDeleteAll = () => {
    setDeletItemshow(false);
    setDeleteallshow(true);
  };

  const [countValue, setCountValue] = useState(menuitem.count);
  const [priceValue, setPriceValue] = useState(menuitem.price);

  const fetchLatestData = () => {
    const storedCart = localStorage.getItem("cart");
    let localStorageCart = JSON.parse(storedCart) || [];
    const matchingCartItem = localStorageCart.find(
      (item) => item.itemId === menuitem.itemId
    );
    setCountValue(matchingCartItem?.count);
    setPriceValue(parseFloat(matchingCartItem?.price).toFixed(2));
  };
  useEffect(() => {
    fetchLatestData(); // Fetch the latest data when the component mounts
  }, [menuitem, handleRefreshCart]);

  const handlePlusItemQty = (cartItems) => {
    cartStoreLocal();
    const isMatchingAddon = cartItems.addonName === menuitem.addonName;
    const newCount = isMatchingAddon ? countValue + 1 : countValue;
    const newPrice = isMatchingAddon
      ? parseFloat(priceValue) + parseFloat(cartItems.actual_price)
      : priceValue;
    setCountValue(newCount);
    setPriceValue(newPrice.toFixed(2));
    cartItems["count"] = newCount;
    cartItems["price"] = newPrice;
    plusCartStore(cartItems, restaurant.discount, getOrderMode);
    handleRefreshCart();
  };

  const handleMinusItemQty = (cartItems) => {
    if (countValue > 1) {
      const newCount = countValue - 1;
      const newPrice =
        parseFloat(priceValue) - parseFloat(cartItems.actual_price);
      setCountValue(newCount);
      setPriceValue(newPrice.toFixed(2));
      cartRemoveItem(cartItems, restaurant.discount, getOrderMode);
      cartStoreLocal();
      handleRefreshCart();
    }
  };

  return (
    <>
      <Button onClick={handleShow}>
        <TbTrash />
      </Button>

      <Modal
        show={DeletItemshow}
        onHide={handleClose}
        className={`item-delete-popup ${theme === "dark" && "dark-theme"}`}
        centered={true}
      >
        <Modal.Body>
          <div className="menu-item">
            <p className="item-name">{menuitem.itemName}</p>
            {menuitem.addonName && (
              <span className="item-desc">{menuitem.addonName}</span>
            )}
            <div className="footer-div">
              <div className="action">
                <Button onClick={() => handleMinusItemQty(menuitem)}>
                  <BiMinus />
                </Button>
                <span className="count">{countValue}</span>
                <Button onClick={() => handlePlusItemQty(menuitem)}>
                  <BiPlus />
                </Button>
              </div>
              <p className="price">£{priceValue}</p>
            </div>
            <div className="delete-btns">
              <button onClick={handleClose} className="cancel">
                Cancel
              </button>
              <Button onClick={handleDeleteAll} className="delete-all">
                Delete All
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <DeleteAll
        menuitem={menuitem}
        setDeletItemshow={setDeletItemshow}
        Deleteallshow={Deleteallshow}
        setDeleteallshow={setDeleteallshow}
        handleRefreshCart={handleRefreshCart}
        getOrderMode={getOrderMode}
        restaurant={restaurant}
      />
    </>
  );
}

const CheckoutBtnMob = ({
  MenuAPI,
  minOrder,
  getOrderMode,
  setShowPreorder,
  totalValues,
  setOnlineOffer,
  onlineOffer,
  useCodeOffer,
  setUseCodeOffer,
  freeGifts,
  freeGiftsDetails,
  freeGiftStatus,
  setFreeGiftStatus,
  useCodeStatus,
  setUseCodeStatus,
  handleGiftShow,
  handleGiftClose,
  setShow,
  progressClassName,
}) => {
  const total = localStorage.getItem("totalPrice");
  const [deliveryMinOrder, setDeliveryMinOrder] = useState(0);
  const [minimumAmount, setMinimumAmount] = useState(0);
  const navigate = useNavigate();
  const { setMoveToCheck, setLoginPopupShow, restaurant, getOrderTime } =
    OrderFlow();

  useEffect(() => {
    if (getOrderMode === "Delivery") {
      const deliveryJSON = localStorage.getItem("postcodeDetail");
      const delivery = deliveryJSON ? JSON.parse(deliveryJSON) : "";
      if (delivery) {
        setDeliveryMinOrder(delivery.minAmount);
      }
    }
    const max = Math.max(minOrder, deliveryMinOrder);
    setMinimumAmount(max);
  }, [getOrderMode, minOrder, deliveryMinOrder]);

  const { setClosePopup } = useContext(RestaurantContext);
  const handleClick = async (e) => {
    e.preventDefault();
    const orderPostcode = localStorage.getItem("orderPostcode") || "";
    const storePostcode = localStorage.getItem("storePostcode") || "";
    const postalCode = orderPostcode !== "" ? orderPostcode : storePostcode;
    const path = localStorage.getItem("clientPath") || "";
    const orderType = getOrderMode === "Collection" ? 1 : 0;
    const timing = restaurant.restaurantStatus;

    const formData = {
      client_path: path,
      order_mode: orderType,
      post_code: postalCode,
    };

    if (getOrderMode === "Delivery") {
      try {
        const apiResponse = await postcodeDetailApi(formData);
        if (apiResponse) {
          if (apiResponse.data) {
            if (apiResponse.data.status === false) {
              // console.log("warningpostcode");
              setShowPreorder(true);
              setMoveToCheck(true);
            } else {
              // console.log("elseWarningpostcode");
              localStorage.setItem("orderPostcode", formData.post_code);
              localStorage.setItem(
                "postcodeDetail",
                JSON.stringify(apiResponse?.data?.message || "")
              );
              if (
                timing.Delivery.status === "2" &&
                timing.Collection.status === "2"
              ) {
                setClosePopup(true);
              } else {
                checkLogin();
              }
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      if (timing.Delivery.status === "2" && timing.Collection.status === "2") {
        setClosePopup(true);
      } else {
        checkLogin();
      }
    }
  };

  function checkLogin() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || "";
    if (isLoggedIn === "false" || isLoggedIn === false || isLoggedIn === "") {
      setLoginPopupShow(true);
    } else {
      navigate(`/${MenuAPI.clientPath}/checkout`);
    }
  }

  return (
    <>
      <div className="checkout-btn-div">
        <OfferApply
          MenuAPI={MenuAPI}
          setOnlineOffer={setOnlineOffer}
          onlineOffer={onlineOffer}
          useCodeOffer={useCodeOffer}
          setUseCodeOffer={setUseCodeOffer}
          freeGifts={freeGifts}
          freeGiftsDetails={freeGiftsDetails}
          freeGiftStatus={freeGiftStatus}
          setFreeGiftStatus={setFreeGiftStatus}
          restaurant={restaurant.discount}
          useCodeStatus={useCodeStatus}
          setUseCodeStatus={setUseCodeStatus}
          progressClassName={progressClassName}
          handleGiftShow={handleGiftShow}
          handleGiftClose={handleGiftClose}
          setShow={setShow}
        />
        {minimumAmount > total ? (
          <>
            <Link to={`#`} disabled="true" className="check-btn-disabled">
              Need More £
              {(parseFloat(minimumAmount) - parseFloat(total)).toFixed(2)}{" "}
              {/* <span>
                <TiChevronRight />
              </span> */}
            </Link>
          </>
        ) : (
          <>
            <Button onClick={handleClick}>
              Proceed Checkout <span>£ {totalValues}</span>
            </Button>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.cartStore.isLoading,
  cartData: state.cartStore.cartData,
  error: state.cartStore.error,
  userData: state.userdata.userData,
  chargesdetail: state.chargesdetail.chargesdetail,
});

const mapDispatchToProps = {
  cartStoreLocal,
  getchargesDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuCart);

const Surcharge = ({
  bagCharge,
  serviceCharge,
  appliedDiscount,
  totalValues,
}) => {
  const subTotal = localStorage.getItem("totalPrice");
  return (
    <div className="surcharge-div">
      <p>
        <span>Items Subtotal</span>
        <span>£{subTotal}</span>
      </p>
      {bagCharge !== 0 && bagCharge !== "0.00" && (
        <p>
          <span>Bag Charge</span>
          <span>£{bagCharge}</span>
        </p>
      )}
      {serviceCharge !== 0 && serviceCharge !== "0.00" && (
        <p>
          <span>Service Charge</span>
          <span>£{serviceCharge}</span>
        </p>
      )}
      {appliedDiscount !== 0 && (
        <>
          <p className="discount">
            <span>Discount</span>
            <span>-£{appliedDiscount}</span>
          </p>
        </>
      )}
      <p className="total">
        <span>Total</span>
        <span>£{totalValues}</span>
      </p>
    </div>
  );
};
