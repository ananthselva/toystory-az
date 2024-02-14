// *******~ Import ~******** //
// React
import React, {
  useEffect,
  useState,
  createContext,
  useMemo,
  useContext,
} from "react";
import {
  useParams,
  useNavigate,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

// Assets
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { MdOutlineCancel } from "react-icons/md";
import { Helmet } from "react-helmet";
// Components
import MenuHeaderLoadingData from "./menuskeleton";
import PreOrder from "../preorder/preorder";
import { OrderFlow } from "../../App";
import SharePopup, { GroupOrderLink } from "./share-popup";
import { ClosedPopup, AddFavourite, RemoveFavourite, EmptyFav } from "./popup";
// CSS
import "./css/menu-page.scss";
import "./css/cart-canva.scss";
import "./css/delete-popover.scss";
import "./css/menuheaderskeleton.scss";
// Images
import MinorderIcon from "./img/minorder.svg";
import MilesIcon from "./img/miles.svg";
import AllergyIcon from "./img/allergy.svg";
import DeliveryIcon from "./img/delivery-bike.svg";
import DiscountIcon from "./img/discount.svg";
import DininImg from "./img/dine-in.svg";
// import FKplus from "./img/fkplus.svg";
import groupOrder from "./img/group.svg";
// Icons
import { BiTimeFive } from "react-icons/bi";
import { RiStarFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Mousewheel, Autoplay } from "swiper";

// *******~ Import ~******** //

// Redux menu page code
import { connect } from "react-redux";
import { getRestaurantDetail } from "../../actions/menu/restaurantDetailAction";
// Redux update favourite code
import { updateFavouriteApi } from "../../api/menu/updateFavourite";
import { postcodeDetailApi } from "../../api/menu/postcodeDetailApi";

// Create a new context
export const RestaurantContext = createContext(null);

const MenuPage = ({
  getRestaurantDetail,
  isLoading,
  error,
  response,
  userData,
}) => {
  const {
    getOrderMode,
    getOrderTime,
    setOrderTime,
    setStuartStatus,
    restaurant,
    setRestaurant,
  } = OrderFlow();
  const [showPreorder, setShowPreorder] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [giftMinimum, setGiftMinimum] = useState("");
  const { path } = useParams();
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  const orderTime = getOrderTime || "";
  const customerId = userData ? userData.customerId : "";
  const postcode = localStorage.getItem("storePostcode");

  const formData = useMemo(() => {
    // with and without time fields
    let dateParts = "";
    let timePart = "";
    if (orderTime) {
      const inputDate = orderTime;
      dateParts = inputDate.split(" ")[0].split("/"); // Split the date into parts
      timePart = inputDate.split(" ")[1]; // Get the time part
    } else {
      const currentTime = new Date().toLocaleString("en-GB", {
        timeZone: "Europe/London",
      });
      const [datePart, timeParts] = currentTime.split(", ");
      const [hours, minutes] = timeParts.split(":");
      dateParts = datePart.split(" ")[0].split("/"); // Split the date into parts
      timePart = `${hours}:${minutes}`; // Get the time part
      localStorage.setItem("orderTime", `${datePart} ${timePart}`);
      setOrderTime(`${datePart} ${timePart}`);
    }

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
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

    return {
      client_path: path,
      order_mode: orderType,
      order_time: formattedDate,
      customer_id: customerId,
      post_code: postcode,
    };
  }, [path, orderType, orderTime, customerId, postcode, setOrderTime]);

  useEffect(() => {
    getRestaurantDetail(formData);
  }, [getRestaurantDetail, formData]);

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

  const [closedPopup, setClosePopup] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setRestaurant(response);
      setStuartStatus(response?.stuart || false);
    };
    fetchData();
  }, [response]);

  if (!restaurant) {
    return <MenuHeaderLoadingData />;
  }

  localStorage.setItem("clientId", restaurant.clientId);
  try {
    const checkClientPath = localStorage.getItem("clientPath") || "";
    if (checkClientPath && checkClientPath !== restaurant.clientPath) {
      localStorage.removeItem("orderPostcode");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
  localStorage.setItem("clientPath", restaurant.clientPath);
  localStorage.setItem("clientName", restaurant.restaurantName);

  return (
    <>
      {/* <MenuHeaderLoadingData /> */}
      <Helmet>
        <style type="text/css">{`
        @media only screen and (min-width: 320px) and (max-width: 767px) {
          nav.main-header .logo img{
            visibility:hidden;
          }
        }
    `}</style>
      </Helmet>
      <RestaurantContext.Provider
        value={{
          searchQuery,
          setSearchQuery,
          showPreorder,
          setShowPreorder,
          closedPopup,
          setClosePopup,
          giftMinimum,
          setGiftMinimum,
        }}
      >
        <section className="menu-page">
          {width > breakpoint ? (
            <MenuHeader restaurant={restaurant} userData={userData} />
          ) : (
            <MobileHeader
              restaurant={restaurant}
              userData={userData}
              width={width}
            />
          )}
          <MainPage width={width} />
        </section>
      </RestaurantContext.Provider>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.getRestaurantDetail.isLoading,
  response: state.getRestaurantDetail.response,
  error: state.getRestaurantDetail.error,
  userData: state.userdata.userData,
});

const mapDispatchToProps = {
  getRestaurantDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);

export const updateFavouriteDetail = async (formData) => {
  try {
    const response = await updateFavouriteApi(formData);
    return response.data; // Assuming the response has a 'data' property
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export function MenuHeader({ restaurant, userData }) {
  const {
    setLoginPopupShow,
    getOrderMode,
    getCollectionTab,
    getDeliveryTab,
    setCollectionTab,
    setDeliveryTab,
    getOrderTime,
    setOrderTime,
  } = OrderFlow();
  // takeaway closed
  const isDeliveryClosed =
    restaurant.timing.Delivery.asap === "" &&
    restaurant.timing.Delivery.later === "" &&
    restaurant.timing.Delivery.today === "";
  const isCollectionClosed =
    restaurant.timing.Collection.asap === "" &&
    restaurant.timing.Collection.later === "" &&
    restaurant.timing.Collection.today === "";
  const shouldShowClosedPopup = isDeliveryClosed && isCollectionClosed;
  const [closed, setClosedPopup] = useState(shouldShowClosedPopup);
  const {
    searchQuery,
    setSearchQuery,
    showPreorder,
    setShowPreorder,
    setClosePopup,
    giftMinimum,
  } = useContext(RestaurantContext);
  useEffect(() => {
    setClosedPopup(shouldShowClosedPopup);
    if (isDeliveryClosed) {
      setDeliveryTab(false);
    }
    if (isCollectionClosed) {
      setCollectionTab(false);
    }
  }, [
    setDeliveryTab,
    setCollectionTab,
    shouldShowClosedPopup,
    isDeliveryClosed,
    isCollectionClosed,
  ]);

  useEffect(() => {
    setClosePopup(closed);
  }, [closed]);

  const navigate = useNavigate();
  const GoBackFunction = () => {
    navigate(-1);
  };
  const initialOrderType = getOrderMode;
  const [selectedOrderMode, setSelectedOrderModeValue] =
    useState(initialOrderType);

  const handleOrderModeChange = (e) => {
    if (
      restaurant.restaurantStatus.Delivery.status === "2" &&
      restaurant.restaurantStatus.Collection.status === "2"
    ) {
      setClosePopup(true);
      setShowPreorder(false);
    } else {
      setSelectedOrderModeValue(e.target.value);
      // setOrderMode(e.target.value);
      localStorage.setItem("orderMode", e.target.value);
      setShowPreorder(true);
    }
  };
  const PopupClick = () => {
    if (
      restaurant.restaurantStatus.Delivery.status === "2" &&
      restaurant.restaurantStatus.Collection.status === "2"
    ) {
      setClosePopup(true);
      setShowPreorder(false);
    } else {
      setShowPreorder(true);
    }
  };
  const [Addfavshow, setAddfavshow] = useState(false);
  const [Removefavshow, setRemovefavshow] = useState(false);
  const [Favourite, setFavourite] = useState(restaurant.favourite);

  const clientId = localStorage.getItem("clientId");
  const path = localStorage.getItem("clientPath");
  const customerId = userData ? userData.customerId : "";
  const favouriteData = useMemo(() => {
    return {
      client_id: clientId,
      path: path,
      customer_id: customerId,
    };
  }, [clientId, customerId, path]);
  const handleClick = () => {
    if (customerId !== "") {
      updateFavouriteDetail(favouriteData)
        .then((response) => {
          if (response.status === true) {
            if (response.data === "Delete to favourite successfully") {
              setFavourite(false);
              setRemovefavshow(true);
              setTimeout(() => {
                setRemovefavshow(false);
              }, 3000);
            } else if (response.data === "Add to favourite successfully") {
              setFavourite(true);
              setAddfavshow(true);
            }
            console.log(response.data);
          } else {
            // Handle the case where response.status is false
            console.log(response);
          }
        })
        .catch((error) => {
          // Handle the case where response.status is false
          console.log("Error: " + error);
        });
    } else {
      setLoginPopupShow(true);
    }
  };
  const handleClose = () => setShowPreorder(false);
  const { theme } = useContext(ThemeContext);

  // delivery & collection Open Status
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [collectionStatus, setCollectionStatus] = useState(null);
  useEffect(() => {
    if (
      restaurant.timing.Delivery.asap === "" &&
      restaurant.timing.Delivery.today === "" &&
      restaurant.timing.Delivery.later === ""
    ) {
      setDeliveryStatus("Closed");
    } else if (restaurant.timing.Delivery.asap !== "") {
      const tat =
        restaurant.deliveryCookingTimeStart +
        " - " +
        restaurant.deliveryCookingTimeEnd +
        "Mins";
      setDeliveryStatus(tat);
    } else if (
      restaurant.timing.Delivery.today !== "" &&
      restaurant.timing.Delivery.today !== "No Pre-order"
    ) {
      setDeliveryStatus("Pre Order");
    } else if (
      restaurant.timing.Delivery.later !== "" &&
      restaurant.timing.Delivery.later !== "No Pre-order later"
    ) {
      setDeliveryStatus("Pre Order");
    }
    if (
      restaurant.timing.Collection.asap === "" &&
      restaurant.timing.Collection.today === "" &&
      restaurant.timing.Collection.later === ""
    ) {
      setCollectionStatus("Closed");
    } else if (restaurant.timing.Collection.asap !== "") {
      const tat =
        restaurant.collectionCookingTimeStart +
        " - " +
        restaurant.collectionCookingTimeEnd +
        "Mins";
      setCollectionStatus(tat);
    } else if (
      restaurant.timing.Collection.today !== "" &&
      restaurant.timing.Collection.today !== "No Pre-order"
    ) {
      setCollectionStatus("Pre Order");
    } else if (
      restaurant.timing.Collection.later !== "" &&
      restaurant.timing.Collection.later !== "No Pre-order later"
    ) {
      setCollectionStatus("Pre Order");
    }
  }, [restaurant]);

  useEffect(() => {
    const collectionTiming = restaurant?.timing?.Collection?.asap;
    const deliveryTiming = restaurant?.timing?.Delivery?.asap;
    const collectionTatTiming =
      restaurant?.collectionCookingTimeStart +
      " - " +
      restaurant?.collectionCookingTimeEnd;
    const deliveryTatTiming =
      restaurant?.deliveryCookingTimeStart +
      " - " +
      restaurant?.deliveryCookingTimeEnd;
    const tatTime =
      getOrderMode === "Delivery" ? deliveryTatTiming : collectionTatTiming;
    localStorage.setItem("tatTime", tatTime);

    const orderType = localStorage.getItem("orderType") || "";
    if (
      collectionTiming === "" &&
      deliveryTiming === "" &&
      (orderType === "" || orderType === "ASAP")
    ) {
      // console.log("first");
      setShowPreorder(true);
    }
    const handleDeliveryMode = async () => {
      const orderPostcode = localStorage.getItem("orderPostcode") || "";
      const storePostcode = localStorage.getItem("storePostcode") || "";
      const postalCode = orderPostcode !== "" ? orderPostcode : storePostcode;
      const path = localStorage.getItem("clientPath") || "";
      const orderType = getOrderMode === "Collection" ? 1 : 0;

      const formData = {
        client_path: path,
        order_mode: orderType,
        post_code: postalCode,
      };

      try {
        const apiResponse = await postcodeDetailApi(formData);
        if (apiResponse) {
          if (apiResponse.data) {
            if (apiResponse.data.status === false) {
              // console.log("warningpostcode");
              setShowPreorder(true);
            } else {
              // console.log("elseWarningpostcode");
              localStorage.setItem("orderPostcode", formData.post_code);
              localStorage.setItem(
                "postcodeDetail",
                JSON.stringify(apiResponse?.data?.message || "")
              );
            }
          }
        }
      } catch (error) {
        console.log(error);
        setShowPreorder(true);
      }
    };

    if (getOrderMode === "Delivery") {
      handleDeliveryMode();
    }
  }, []);

  // default preorder tab
  const [defaultCollectionTabStatus, setDefaultCollectionTabStatus] =
    useState(null);
  const [defaultDeliveryTabStatus, setDefaultDeliveryTabStatus] =
    useState(null);

  const { promo, common, online, autoDiscount } = restaurant.discount;

  return (
    <>
      <section className="menu-header">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="header-img">
                <div className="overlay"></div>
                <Image src={restaurant.backgroundImage} fluid />
                <div className="back-fav-btn">
                  <Container>
                    <Row>
                      <Col xxl={12}>
                        <div className="btn-div">
                          <span className="back" onClick={GoBackFunction}>
                            <MdOutlineArrowBackIos />
                          </span>
                          <span className="fav" onClick={handleClick}>
                            {Favourite ? <AiFillHeart /> : <AiOutlineHeart />}
                          </span>
                          <SharePopup restaurant={restaurant} />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="header-content">
          <Container>
            <Row>
              <Col xs={6} sm={6} md={7} lg={6} xl={6} xxl={6}>
                <h3 className="resta-name">{restaurant.restaurantName}</h3>
                <p className="cuisine-row">
                  <span className="cuisine-list">
                    {restaurant.cuisine.slice(0, 4).map((cusinename, index) => (
                      <>
                        <span className="cuisine-name">{cusinename.name}</span>
                        {index !== 3 && ", "}
                      </>
                    ))}
                  </span>
                  {selectedOrderMode === "Delivery" ? (
                    <GetStatusAndMessageComponent
                      status={restaurant.restaurantStatus.Delivery.status}
                      msg={restaurant.restaurantStatus.Delivery.msg}
                      iconText="Delivery"
                    />
                  ) : selectedOrderMode === "Collection" ? (
                    <GetStatusAndMessageComponent
                      status={restaurant.restaurantStatus.Collection.status}
                      msg={restaurant.restaurantStatus.Collection.msg}
                      iconText="Collection"
                    />
                  ) : null}
                </p>
                <p className="res-detail-row">
                  <span>
                    <RiStarFill />
                    {restaurant.rating.rate}
                  </span>
                  <span>
                    <Image src={MinorderIcon} /> Min.Order £
                    {restaurant.minOrder}
                  </span>
                  <span>
                    <Image src={MilesIcon} />
                    {restaurant.miles}
                  </span>
                  <span>
                    <Image src={AllergyIcon} />
                    Allergy
                  </span>
                </p>
                <div className="offer-slide">
                  <Swiper
                    modules={[Navigation, Mousewheel]}
                    className="offer-slide-swiper"
                    mousewheel={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={true}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      768: {
                        spaceBetween: 10,
                      },
                      992: {
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {common.map((offer, index) => (
                      <>
                        <SwiperSlide id={index}>
                          <div className="offer-box">
                            <Image
                              src={
                                getOrderMode === "Collection"
                                  ? DiscountIcon
                                  : DeliveryIcon
                              }
                            />
                            <div className="content">
                              <h3>
                                Upto {offer.discount} {offer.discountType} Off
                              </h3>
                              <p>
                                Use Code <span>{offer.code}</span> | T&C Apply
                                {/* {offer.minOrder &&
                                offer.minOrder !== "0" &&
                                offer.minOrder !== "undefined"
                                  ? `above £${offer.minOrder}`
                                  : ""} */}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                    {online.map((offer, index) => (
                      <>
                        <SwiperSlide id={index}>
                          <div className="offer-box">
                            <Image
                              src={
                                getOrderMode === "Collection"
                                  ? DiscountIcon
                                  : DeliveryIcon
                              }
                            />
                            <div className="content">
                              <h3>
                                Flat {offer.discount} {offer.discountType} Off
                              </h3>
                              <p>
                                Use Code <span>{offer.code}</span> |{" "}
                                {offer.minOrder &&
                                offer.minOrder !== "0" &&
                                offer.minOrder !== "undefined"
                                  ? `above £${offer.minOrder}`
                                  : "No minimum"}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                    {autoDiscount.map((offer, index) => (
                      <SwiperSlide>
                        <div className="offer-box">
                          <Image
                            src={
                              getOrderMode === "Collection"
                                ? DiscountIcon
                                : DeliveryIcon
                            }
                          />
                          <div className="content">
                            <h3>
                              {offer.discount} {offer.discountType}{" "}
                              {getOrderMode} Off
                            </h3>
                            <p>
                              {offer.minOrder
                                ? `When you spend above £${offer.minOrder}`
                                : "No Minimum"}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    {giftMinimum !== "" && (
                      <>
                        <SwiperSlide>
                          <div className="offer-box">
                            <Image src={DiscountIcon} />
                            <div className="content">
                              <h3>Get Free Gift!</h3>
                              <p>When you spend above £{giftMinimum}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    )}
                    <SwiperSlide>
                      <div className="offer-box">
                        <Image src={DiscountIcon} />
                        <div className="content">
                          <h3>No extra charges!</h3>
                          <p>
                            Enjoy In-Store Prices from the Comfort of Your Home
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
              <Col xs={6} sm={6} md={5} lg={6} xl={6} xxl={6}>
                <div className="search-logo-div">
                  <Form>
                    <BsSearch />
                    <Form.Control
                      type="text"
                      placeholder="Search for cuisine or a dish"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                    />
                  </Form>
                  <Image className="restaurant-logo" src={restaurant.logo} />
                </div>
                <div className="order-type-btn">
                  <Modal
                    show={showPreorder}
                    onHide={handleClose}
                    centered
                    className={`preorder-popup ${
                      theme === "dark" ? "dark-theme" : ""
                    }`}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Body>
                      {localStorage.getItem("orderMode") === getOrderMode && (
                        <span className="close-btn" onClick={handleClose}>
                          <MdOutlineCancel />
                        </span>
                      )}
                      <PreOrder
                        selectedOrderMode={selectedOrderMode}
                        setSelectedOrderModeValue={setSelectedOrderModeValue}
                        showPreorder={showPreorder}
                        setShowPreorder={setShowPreorder}
                        defaultCollectionTabStatus={defaultCollectionTabStatus}
                        setDefaultCollectionTabStatus={
                          setDefaultCollectionTabStatus
                        }
                        defaultDeliveryTabStatus={defaultDeliveryTabStatus}
                        setDefaultDeliveryTabStatus={
                          setDefaultDeliveryTabStatus
                        }
                        setClosedPopup={setClosedPopup}
                        deliveryStatus={isDeliveryClosed}
                        collectionStatus={isCollectionClosed}
                      />
                    </Modal.Body>
                  </Modal>
                  <Button className="dinein-btn">
                    <Image src={DininImg} /> Dine In
                  </Button>
                  <div className="toggle-btn">
                    <div className="switches-container">
                      <input
                        type="radio"
                        id="switchDelivery"
                        name="switchPlan"
                        value="Delivery"
                        onChange={handleOrderModeChange}
                        checked={selectedOrderMode === "Delivery"}
                        disabled={!getDeliveryTab}
                      />
                      <input
                        type="radio"
                        id="switchCollection"
                        name="switchPlan"
                        value="Collection"
                        onChange={handleOrderModeChange}
                        checked={selectedOrderMode === "Collection"}
                        disabled={!getCollectionTab}
                      />
                      <label htmlFor="switchDelivery">
                        <p>Delivery</p>
                        <span> {deliveryStatus} </span>
                      </label>
                      <label htmlFor="switchCollection">
                        <p>Collection</p>
                        <span> {collectionStatus} </span>
                      </label>
                      <div className="switch-wrapper" onClick={PopupClick}>
                        <div className="switch">
                          <div>
                            <p>Delivery</p>
                            <span> {deliveryStatus} </span>
                          </div>
                          <div>
                            <p>Collection</p>
                            <span> {collectionStatus} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fk-plus-div">
                  {/* <div className="fk-plus">
                    <Image src={FKplus} />
                    <p>
                      £1.40 Delivery Fee <span>Get Free Delivery</span>
                    </p>
                  </div> */}
                  <GroupOrderLink>
                    <Image src={groupOrder}></Image>
                    <p>Start group order</p>
                  </GroupOrderLink>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <ClosedPopup />
      <AddFavourite
        restaurant={restaurant}
        Addfavshow={Addfavshow}
        setAddfavshow={setAddfavshow}
      />
      <RemoveFavourite
        restaurant={restaurant}
        Removefavshow={Removefavshow}
        setRemovefavshow={setRemovefavshow}
      />
      <EmptyFav />
    </>
  );
}

const GetStatusAndMessageComponent = ({ status, msg, iconText }) => {
  let statusClassName = "";
  let secondStatusClassName = "";
  let statusText = "";
  let secondStatusText = "";

  switch (status) {
    case "0":
      statusClassName = "open";
      secondStatusClassName = "preorder";
      statusText = "Open now";
      secondStatusText = msg;
      break;
    case "1":
      statusClassName = "preorder";
      secondStatusClassName = "preorder";
      // statusText = "Closed";
      statusText = msg;
      secondStatusText = msg;
      break;
    case "2":
      statusClassName = "close";
      secondStatusClassName = "close";
      statusText = "Closed";
      secondStatusText = "Closed";
      break;
    case "3":
      statusClassName = "close";
      secondStatusClassName = "close";
      statusText = msg;
      secondStatusText = msg;
      break;
    default:
      return "";
  }

  return (
    <>
      {/* {status === "0" || status === "1" ? ( */}
      <>
        <span className={`res-status ${statusClassName}`}>
          <BiTimeFive /> {statusText}
        </span>{" "}
      </>
      {/* ) : null} */}
      {/* {status === "2" || status === "3" ? null : `|`}{" "}
      <span className={`res-msg ${secondStatusClassName}`}>
        {secondStatusText}
      </span> */}
    </>
  );
};

const MainPage = ({ width }) => {
  const { pathname } = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(RestaurantContext);
  // scroll Fixed Top Start
  const [sidebarTop, setSidebarTop] = useState(undefined);
  useEffect(() => {
    const updateSidebarTop = () => {
      const chatEl = document.querySelector(".menu-navbar-section");
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
      const chatEl = document.querySelector(".menu-navbar-section");
      const scrollTop = window.scrollY;
      chatEl.classList.toggle("is-sticky", scrollTop >= sidebarTop - 65);
      setShowSearch(scrollTop >= sidebarTop - 65);
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);
  // scroll Fixed Top End
  return (
    <>
      <section className="main-page">
        {width > 319 && (
          <>
            <section className="menu-navbar-section">
              <Container>
                <Row className="align-items-center">
                  <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <div className="menu-navbar">
                      <Link
                        className={pathname.endsWith("/about") ? "active" : ""}
                        to="about"
                      >
                        Overview
                      </Link>
                      <Link
                        className={pathname.endsWith("/menu") ? "active" : ""}
                        to="menu"
                      >
                        Order Online
                      </Link>
                      <Link
                        className={pathname.endsWith("/review") ? "active" : ""}
                        to="review"
                      >
                        Reviews
                      </Link>
                    </div>
                  </Col>
                  {width > 767 && showSearch && (
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                      <Form className="menu-navbar-search">
                        <BsSearch />
                        <Form.Control
                          type="text"
                          placeholder="Search for cuisine or a dish"
                          value={searchQuery}
                          onChange={(event) =>
                            setSearchQuery(event.target.value)
                          }
                        />
                      </Form>
                    </Col>
                  )}
                </Row>
              </Container>
            </section>
          </>
        )}

        <main className="outlet-section">
          <Outlet />
        </main>
      </section>
    </>
  );
};

function MobHeaderBanner(props) {
  return (
    <div className="header-img">
      <div className="overlay"></div>
      <Image src={props.restaurant.backgroundImage} fluid />
      <div className="back-fav-btn">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="btn-div">
                <span className="back" onClick={props.GoBackFunction}>
                  <MdOutlineArrowBackIos />
                </span>
                <span className="fav" onClick={props.handleClick}>
                  {props.Favourite ? <AiFillHeart /> : <AiOutlineHeart />}
                </span>
                <SharePopup restaurant={props.restaurant} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

const MobileHeader = ({ restaurant, userData, width }) => {
  const {
    setLoginPopupShow,
    getOrderMode,
    getCollectionTab,
    getDeliveryTab,
    setCollectionTab,
    setDeliveryTab,
  } = OrderFlow();
  // takeaway closed
  const isDeliveryClosed =
    restaurant.timing.Delivery.asap === "" &&
    restaurant.timing.Delivery.later === "" &&
    restaurant.timing.Delivery.today === "";
  const isCollectionClosed =
    restaurant.timing.Collection.asap === "" &&
    restaurant.timing.Collection.later === "" &&
    restaurant.timing.Collection.today === "";
  const shouldShowClosedPopup = isDeliveryClosed && isCollectionClosed;
  const [closed, setClosedPopup] = useState(shouldShowClosedPopup);
  const { showPreorder, setShowPreorder, setClosePopup, giftMinimum } =
    useContext(RestaurantContext);
  useEffect(() => {
    setClosedPopup(shouldShowClosedPopup);
    if (isDeliveryClosed) {
      setDeliveryTab(false);
    }
    if (isCollectionClosed) {
      setCollectionTab(false);
    }
  }, [
    setDeliveryTab,
    setCollectionTab,
    shouldShowClosedPopup,
    isDeliveryClosed,
    isCollectionClosed,
  ]);

  useEffect(() => {
    setClosePopup(closed);
  }, [closed]);

  const navigate = useNavigate();
  const GoBackFunction = () => {
    navigate(-1);
  };
  const initialOrderType = getOrderMode;
  const [selectedOrderMode, setSelectedOrderModeValue] =
    useState(initialOrderType);
  const handleOrderModeChange = (e) => {
    if (
      restaurant.restaurantStatus.Delivery.status === "2" &&
      restaurant.restaurantStatus.Collection.status === "2"
    ) {
      setClosePopup(true);
      setShowPreorder(false);
    } else {
      setSelectedOrderModeValue(e.target.value);
      // setOrderMode(e.target.value);
      localStorage.setItem("orderMode", e.target.value);
      setShowPreorder(true);
    }
  };
  const PopupClick = () => {
    if (
      restaurant.restaurantStatus.Delivery.status === "2" &&
      restaurant.restaurantStatus.Collection.status === "2"
    ) {
      setShowPreorder(false);
    } else {
      setShowPreorder(true);
    }
  };
  const [Addfavshow, setAddfavshow] = useState(false);
  const [Removefavshow, setRemovefavshow] = useState(false);
  const [Favourite, setFavourite] = useState(restaurant.favourite);

  const clientId = localStorage.getItem("clientId");
  const path = localStorage.getItem("clientPath");
  const customerId = userData ? userData.customerId : "";
  const favouriteData = useMemo(() => {
    return {
      client_id: clientId,
      path: path,
      customer_id: customerId,
    };
  }, [clientId, customerId, path]);
  const handleClick = () => {
    if (customerId !== "") {
      updateFavouriteDetail(favouriteData)
        .then((response) => {
          if (response.status === true) {
            if (response.data === "Delete to favourite successfully") {
              setFavourite(false);
              setRemovefavshow(true);
              setTimeout(() => {
                setRemovefavshow(false);
              }, 3000);
            } else if (response.data === "Add to favourite successfully") {
              setFavourite(true);
              setAddfavshow(true);
            }
            console.log(response.data);
          } else {
            // Handle the case where response.status is false
            console.log(response);
          }
        })
        .catch((error) => {
          // Handle the case where response.status is false
          console.log("Error: " + error);
        });
    } else {
      setLoginPopupShow(true);
    }
  };
  const handleClose = () => setShowPreorder(false);
  const { theme } = useContext(ThemeContext);
  // ! Scroll Header Start
  const [ScrollHeader, setScrollHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    });
  }, []);
  // ! Scroll Header End
  // delivery & collection Open Status
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [collectionStatus, setCollectionStatus] = useState(null);
  useEffect(() => {
    if (
      restaurant.timing.Delivery.asap === "" &&
      restaurant.timing.Delivery.today === "" &&
      restaurant.timing.Delivery.later === ""
    ) {
      setDeliveryStatus("Closed");
    } else if (restaurant.timing.Delivery.asap !== "") {
      const tat =
        restaurant.deliveryCookingTimeStart +
        " - " +
        restaurant.deliveryCookingTimeEnd +
        "Mins";
      setDeliveryStatus(tat);
    } else if (
      restaurant.timing.Delivery.today !== "" &&
      restaurant.timing.Delivery.today !== "No Pre-order"
    ) {
      setDeliveryStatus("Pre Order");
    } else if (
      restaurant.timing.Delivery.later !== "" &&
      restaurant.timing.Delivery.later !== "No Pre-order later"
    ) {
      setDeliveryStatus("Pre Order");
    }
    if (
      restaurant.timing.Collection.asap === "" &&
      restaurant.timing.Collection.today === "" &&
      restaurant.timing.Collection.later === ""
    ) {
      setCollectionStatus("Closed");
    } else if (restaurant.timing.Collection.asap !== "") {
      const tat =
        restaurant.collectionCookingTimeStart +
        " - " +
        restaurant.collectionCookingTimeEnd +
        "Mins";
      setCollectionStatus(tat);
    } else if (
      restaurant.timing.Collection.today !== "" &&
      restaurant.timing.Collection.today !== "No Pre-order"
    ) {
      setCollectionStatus("Pre Order");
    } else if (
      restaurant.timing.Collection.later !== "" &&
      restaurant.timing.Collection.later !== "No Pre-order later"
    ) {
      setCollectionStatus("Pre Order");
    }
  }, [restaurant]);

  useEffect(() => {
    const collectionTiming = restaurant?.timing?.Collection?.asap;
    const deliveryTiming = restaurant?.timing?.Delivery?.asap;
    const collectionTatTiming =
      restaurant?.collectionCookingTimeStart +
      " - " +
      restaurant?.collectionCookingTimeEnd;
    const deliveryTatTiming =
      restaurant?.deliveryCookingTimeStart +
      " - " +
      restaurant?.deliveryCookingTimeEnd;
    const tatTime =
      getOrderMode === "Delivery" ? deliveryTatTiming : collectionTatTiming;
    localStorage.setItem("tatTime", tatTime);

    const orderType = localStorage.getItem("orderType") || "";
    if (
      collectionTiming === "" &&
      deliveryTiming === "" &&
      (orderType === "" || orderType === "ASAP")
    ) {
      setShowPreorder(true);
    }

    const handleDeliveryMode = async () => {
      const orderPostcode = localStorage.getItem("orderPostcode") || "";
      const storePostcode = localStorage.getItem("storePostcode") || "";
      const postalCode = orderPostcode !== "" ? orderPostcode : storePostcode;
      const path = localStorage.getItem("clientPath") || "";
      const orderType = getOrderMode === "Collection" ? 1 : 0;

      const formData = {
        client_path: path,
        order_mode: orderType,
        post_code: postalCode,
      };

      try {
        const apiResponse = await postcodeDetailApi(formData);
        if (apiResponse) {
          if (apiResponse.data) {
            if (apiResponse.data.status === false) {
              // console.log("warningpostcode");
              setShowPreorder(true);
            } else {
              // console.log("elseWarningpostcode");
              localStorage.setItem("orderPostcode", formData.post_code);
              localStorage.setItem(
                "postcodeDetail",
                JSON.stringify(apiResponse?.data?.message || "")
              );
            }
          }
        }
      } catch (error) {
        console.log(error);
        setShowPreorder(true);
      }
    };

    if (getOrderMode === "Delivery") {
      handleDeliveryMode();
    }
  }, []);

  // default preorder tab
  const [defaultCollectionTabStatus, setDefaultCollectionTabStatus] =
    useState(null);
  const [defaultDeliveryTabStatus, setDefaultDeliveryTabStatus] =
    useState(null);

  const { promo, common, online, autoDiscount } = restaurant.discount;

  const cuisineList = restaurant.cuisine
    .slice(0, 4)
    .map((cusinename) => cusinename.name)
    .join(", ");

  return (
    <>
      <section className="menu-header-mobile">
        <Container>
          <Row>
            <Col xxl={12}>
              <MobHeaderBanner
                GoBackFunction={GoBackFunction}
                Favourite={Favourite}
                handleClick={handleClick}
                restaurant={restaurant}
              ></MobHeaderBanner>
            </Col>
          </Row>
        </Container>

        <div className="header-content">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="header-title">
                  {/* <h3 className="resta-name">{restaurant.restaurantName}</h3> */}
                  <span>
                    <Image className="restaurant-logo" src={restaurant.logo} />
                    {/* <span>
                      <RiStarFill />
                      {restaurant.rating.rate}
                    </span> */}
                  </span>
                </div>
                <div className="cuisine-row">
                  {/* <p>
                    {restaurant.cuisine.slice(0, 4).map((cusinename, index) => (
                      <>
                        <span className="cuisine-name">
                          {cusinename.name}
                          {index === 3 ? ",..." : ", "}
                        </span>
                      </>
                    ))}
                  </p> */}
                  <p>
                    <span className="cuisine-name">
                      {cuisineList.length > 40
                        ? cuisineList.slice(0, 40) + "..."
                        : cuisineList}
                    </span>
                  </p>
                </div>
                <p className="res-detail-row">
                  <span>
                    {restaurant.minOrder
                      ? `Min.Order £${restaurant.minOrder}`
                      : "No minimum"}
                  </span>
                  |<span>{restaurant.miles}</span>|<span>Allergy</span>
                  <span className="rating-span">
                    <RiStarFill />
                    {restaurant.rating.rate}
                  </span>
                </p>
                <div className="offer-slide">
                  <Swiper
                    navigation={false}
                    modules={[Navigation, Mousewheel, Autoplay]}
                    className="offer-slide-swiper"
                    mousewheel={true}
                    slidesPerView={1.2}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      400: {
                        slidesPerView: 1,
                      },
                      501: {
                        slidesPerView: 1.2,
                      },
                    }}
                  >
                    {common.map((offer, index) => (
                      <>
                        <SwiperSlide id={index}>
                          <div className="offer-box">
                            <Image
                              src={
                                getOrderMode === "Collection"
                                  ? DiscountIcon
                                  : DeliveryIcon
                              }
                            />
                            <div className="content">
                              <h3>
                                Upto {offer.discount} {offer.discountType} Off
                              </h3>
                              <p>
                                Use Code <span>{offer.code}</span> | T&C Apply
                                {/* {offer.minOrder &&
                                offer.minOrder !== "0" &&
                                offer.minOrder !== "undefined"
                                  ? `above £${offer.minOrder}`
                                  : ""} */}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                    {online.map((offer, index) => (
                      <>
                        <SwiperSlide id={index}>
                          <div className="offer-box">
                            <Image
                              src={
                                getOrderMode === "Collection"
                                  ? DiscountIcon
                                  : DeliveryIcon
                              }
                            />
                            <div className="content">
                              <h3>
                                Flat {offer.discount} {offer.discountType} Off
                              </h3>
                              <p>
                                Use Code <span>{offer.code}</span> |{" "}
                                {offer.minOrder &&
                                offer.minOrder !== "0" &&
                                offer.minOrder !== "undefined"
                                  ? `above £${offer.minOrder}`
                                  : "No minimum"}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                    {autoDiscount.map((offer, index) => (
                      <SwiperSlide>
                        <div className="offer-box">
                          <Image
                            src={
                              getOrderMode === "Collection"
                                ? DiscountIcon
                                : DeliveryIcon
                            }
                          />
                          <div className="content">
                            <h3>
                              {offer.discount} {offer.discountType}{" "}
                              {getOrderMode} Off
                            </h3>
                            <p>
                              {offer.minOrder
                                ? `When you spend above £${offer.minOrder}`
                                : "No Minimum"}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    {giftMinimum !== "" && (
                      <>
                        <SwiperSlide>
                          <div className="offer-box">
                            <Image src={DiscountIcon} />
                            <div className="content">
                              <h3>Get Free Gift!</h3>
                              <p>When you spend above £{giftMinimum}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    )}
                    <SwiperSlide>
                      <div className="offer-box">
                        <Image src={DiscountIcon} />
                        <div className="content">
                          <h3>No extra charges!</h3>
                          <p>
                            Enjoy <span>In-Store Prices</span> from the Comfort
                            of Your Home
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="res-detail-group-link">
                  <p className="res-details">
                    {selectedOrderMode === "Delivery" ? (
                      <GetStatusAndMessageComponent
                        status={restaurant.restaurantStatus.Delivery.status}
                        msg={restaurant.restaurantStatus.Delivery.msg}
                        iconText="Delivery"
                      />
                    ) : selectedOrderMode === "Collection" ? (
                      <GetStatusAndMessageComponent
                        status={restaurant.restaurantStatus.Collection.status}
                        msg={restaurant.restaurantStatus.Collection.msg}
                        iconText="Collection"
                      />
                    ) : null}
                  </p>
                  <span className="break-span">|</span>
                  <GroupOrderLink>
                    <Image src={groupOrder}></Image>
                    <p>Start group order</p>
                  </GroupOrderLink>
                </div>

                <div className="order-type-btn">
                  <Modal
                    show={showPreorder}
                    onHide={handleClose}
                    centered
                    className={`preorder-popup ${
                      theme === "dark" ? "dark-theme" : ""
                    }`}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Body>
                      {localStorage.getItem("orderMode") === getOrderMode && (
                        <span className="close-btn" onClick={handleClose}>
                          <MdOutlineCancel />
                        </span>
                      )}
                      <PreOrder
                        selectedOrderMode={selectedOrderMode}
                        setSelectedOrderModeValue={setSelectedOrderModeValue}
                        showPreorder={showPreorder}
                        setShowPreorder={setShowPreorder}
                        defaultCollectionTabStatus={defaultCollectionTabStatus}
                        setDefaultCollectionTabStatus={
                          setDefaultCollectionTabStatus
                        }
                        defaultDeliveryTabStatus={defaultDeliveryTabStatus}
                        setDefaultDeliveryTabStatus={
                          setDefaultDeliveryTabStatus
                        }
                        setClosedPopup={setClosedPopup}
                        deliveryStatus={isDeliveryClosed}
                        collectionStatus={isCollectionClosed}
                      />
                    </Modal.Body>
                  </Modal>
                  <div className="toggle-btn">
                    <div className="switches-container">
                      <input
                        type="radio"
                        id="switchDelivery"
                        name="switchPlan"
                        value="Delivery"
                        onChange={handleOrderModeChange}
                        checked={selectedOrderMode === "Delivery"}
                        disabled={!getDeliveryTab}
                      />
                      <input
                        type="radio"
                        id="switchCollection"
                        name="switchPlan"
                        value="Collection"
                        onChange={handleOrderModeChange}
                        checked={selectedOrderMode === "Collection"}
                        disabled={!getCollectionTab}
                      />
                      <label htmlFor="switchDelivery">
                        <p>Delivery</p>
                        <span> {deliveryStatus} </span>
                      </label>
                      <label htmlFor="switchCollection">
                        <p>Collection</p>
                        <span> {collectionStatus} </span>
                      </label>
                      <div className="switch-wrapper" onClick={PopupClick}>
                        <div className="switch">
                          <div>
                            <p>Delivery</p>
                            <span> {deliveryStatus} </span>
                          </div>
                          <div>
                            <p>Collection</p>
                            <span> {collectionStatus} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="dinein-btn">
                    <Image src={DininImg} /> Dine In
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <section
            className={`scroll-header ${
              ScrollHeader && "scroll-header-visible"
            }`}
          >
            <Container>
              <Row>
                <Col md={12}>
                  <div className="scroll-header-content">
                    <button className="back" onClick={GoBackFunction}>
                      <MdOutlineArrowBackIos />
                    </button>
                    <h3 className="resta-name">
                      {restaurant.restaurantName.length > 16
                        ? restaurant.restaurantName.slice(0, 16) + "..."
                        : restaurant.restaurantName}
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </section>
      <ClosedPopup />
      <AddFavourite
        restaurant={restaurant}
        Addfavshow={Addfavshow}
        setAddfavshow={setAddfavshow}
      />
      <RemoveFavourite
        restaurant={restaurant}
        Removefavshow={Removefavshow}
        setRemovefavshow={setRemovefavshow}
      />
      <EmptyFav />
    </>
  );
};
