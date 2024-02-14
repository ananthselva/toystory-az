// *******~ Import ~******** //
// React
import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  createContext,
  lazy,
} from "react";
import { useParams } from "react-router-dom";
// Assets
// import Placeholder from "react-bootstrap/Placeholder";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// import Placeholder from "react-bootstrap/Placeholder";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import StickyBox from "react-sticky-box";
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from "react-helmet";
// import ItemPopup from "./item-popup";
import { OrderFlow } from "../../App";
import { ClearBasket } from "./reset-cart";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { EighteenPlus, DOBPopup } from "./eighteen-plus";
import { ClosedPopup } from "./popup";
import "./css/eighteen-plus.scss";
// Components
import { RestaurantContext } from "./menu-page"; // Import the RestaurantContext

// CSS
import "./css/menu.scss";
import "./css/item-popup.scss";
import "./css/addon.scss";
// Images

// Icons
import {
  MdOutlineArrowForwardIos,
  MdRestaurantMenu,
  MdOutlineCancel,
} from "react-icons/md";
import { HiViewGridAdd, HiMinus, HiPlus } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";

// *******~ Import ~******** //

// Redux home page code
import { connect } from "react-redux";
import { getMenuDetail } from "../../actions/menu/menuAction";
import { postcodeDetailApi } from "../../api/menu/postcodeDetailApi";
import {
  // cartStore,
  cartRemoveItem,
  cartRemoveAllItem,
  addBulkCart,
} from "../../actions/menu/cartAction";
import { MenuLoadingData } from "./menuskeleton";
import Loadable from "../../router/loadable";
// Lazy
const ItemPopup = Loadable(lazy(() => import("./item-popup")));
const MenuCart = Loadable(lazy(() => import("./sidebar-cart")));
// import MenuCart from "./sidebar-cart";
const AllMenu = ({ getMenuDetail, isLoading, error, response }) => {
  const {
    getOrderMode,
    getOrderTime,
    restaurant,
    setFooterLoading,
    footerLoading,
  } = OrderFlow();
  useEffect(() => {
    setFooterLoading(true);
    if (footerLoading) {
      setTimeout(() => {
        setFooterLoading(true);
      }, 1000);
    }
  }, []);
  const { path } = useParams();
  const orderType = getOrderMode === "Collection" ? 1 : 0;
  const orderTime = getOrderTime;
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
    };
  }, [path, orderType, orderTime]);
  useEffect(() => {
    getMenuDetail(formData);
  }, [getMenuDetail, formData]);

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

  // scroll Fixed Top Start
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [SearchBaricon, setSearchBaricon] = useState(false);

  const handleSearchClick = () => {
    setSearchBaricon(!SearchBaricon);
  };

  useEffect(() => {
    const updateSidebarTop = () => {
      const chatEl = document.querySelector(".mobile-menu-cat");
      if (chatEl) setSidebarTop(chatEl.getBoundingClientRect().top);
    };

    updateSidebarTop();
    window.addEventListener("resize", updateSidebarTop);
    return () => {
      window.removeEventListener("resize", updateSidebarTop);
    };
  }, []);

  useEffect(() => {
    const isSticky = (e) => {
      const chatEl = document.querySelector(".mobile-menu-cat");
      const scrollTop = window.scrollY;
      if (chatEl)
        chatEl.classList.toggle("is-sticky", scrollTop >= sidebarTop - 103);
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);
  // scroll Fixed Top End

  const { searchQuery, setSearchQuery } = useContext(RestaurantContext);

  if (!response) {
    return <MenuLoadingData />;
  }

  if (restaurant.clientPath !== response.clientPath) {
    return <h3 className="text-center">Not Found</h3>;
  }

  // console.log(response);

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    :root {
      scroll-behavior: inherit;
    }
    
    footer{
      display:none;
    }
    
    .top-to-btm{
      display:none;
    }
    `}</style>
      </Helmet>
      {/* <MenuLoadingData /> */}
      {width < 768 && (
        <>
          <section className="mobile-menu-cat">
            <Container>
              <Row>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={2}>
                  <div className="vertical-menu">
                    <CategoryMenuBtn MenuAPI={response} />
                    {!SearchBaricon ? (
                      <div className="category-div">
                        {response.menuData.categoryList.map(
                          (category, index) => (
                            <>
                              <ScrollLink
                                key={index}
                                activeClass="active"
                                to={category.id}
                                spy={true}
                                offset={-165}
                                smooth={true}
                                delay={0}
                                duration={0}
                              >
                                {category.name}
                              </ScrollLink>
                            </>
                          )
                        )}
                      </div>
                    ) : (
                      <Form>
                        <Form.Control
                          type="text"
                          placeholder="Search for cuisine or a dish"
                          autoFocus
                          value={searchQuery}
                          onChange={(event) =>
                            setSearchQuery(event.target.value)
                          }
                        />
                      </Form>
                    )}

                    <span className="search-btn" onClick={handleSearchClick}>
                      {SearchBaricon ? <MdOutlineCancel /> : <BiSearchAlt2 />}
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
      <section className="menu-section">
        <Container>
          <Row className="justify-content-lg-center">
            <Col xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
              {width > breakpoint && (
                <>
                  <StickyBox
                    className="scrollsticky-menu "
                    offsetTop={138}
                    offsetBottom={20}
                  >
                    <Nav>
                      {/* <p>Notice</p> */}
                      {response.menuData.categoryList.map((category, index) => (
                        <ScrollLink
                          key={index}
                          activeClass="active"
                          to={category.id}
                          spy={true}
                          offset={-135}
                          smooth={true}
                          delay={0}
                          duration={0}
                        >
                          {category.name}
                        </ScrollLink>
                      ))}
                    </Nav>
                  </StickyBox>
                </>
              )}
            </Col>
            <Col xs={12} sm={12} md={8} lg={7} xl={10} xxl={10}>
              <MenuSection MenuAPI={response} width={width} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.getMenuDetail.isLoading,
  response: state.getMenuDetail.response,
  error: state.getMenuDetail.error,
});

const mapDispatchToProps = {
  getMenuDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMenu);

// Create a item add and minus context
export const ItemAddMinusContext = createContext(null);

const MenuSection = ({ MenuAPI, width }) => {
  const { theme } = useContext(ThemeContext);
  const { getOrderMode, restaurant } = OrderFlow();
  const {
    searchQuery,
    setShowPreorder,
    closedPopup,
    setClosePopup,
    setGiftMinimum,
  } = useContext(RestaurantContext);
  const [Addonshow, AddonsetShow] = useState(false);
  const [ItemIdtopass, ItemIdset] = useState("");
  const [AddonIdtopass, AddonIdset] = useState("");
  const [repeatItem, setRepeatItem] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  // const [ItemStock, SetItemStock] = useState(true);

  const cartJSON = localStorage.getItem("cart");
  let parsedCart;
  if (typeof cartJSON !== "undefined" && cartJSON !== "undefined") {
    parsedCart =
      typeof cartJSON !== "undefined" && cartJSON !== "undefined"
        ? cartJSON
          ? JSON?.parse(cartJSON)
          : ""
        : "";
  } else {
    parsedCart = "";
  }

  useEffect(() => {
    if (MenuAPI?.menuData?.freeItem !== false) {
      setGiftMinimum(MenuAPI.menuData.freeItem?.detail?.minAmount || "");
    } else {
      setGiftMinimum("");
    }
  }, []);

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

  const AddonhandleShow = (item, count) => {
    let checkAsap = "";
    if (getOrderMode === "Delivery") {
      checkAsap = restaurant.timing.Delivery.asap;
    } else {
      checkAsap = restaurant.timing.Collection.asap;
    }
    const orderType = localStorage.getItem("orderType") || "";
    if (
      restaurant.restaurantStatus.Delivery.status === "2" &&
      restaurant.restaurantStatus.Collection.status === "2"
    ) {
      setClosePopup(true);
    } else {
      if (checkAsap === "" && (orderType === "" || orderType === "ASAP")) {
        setShowPreorder(true);
      } else {
        if (getOrderMode === "Delivery") {
          handleDeliveryMode();
        }
        if (count !== "") {
          item["count"] = count + 1;
        }
        ItemIdset(item.itemId);
        if (item.addon === 0) {
          AddonsetShow(false);
          setRepeatItem(false);
          AddonIdset();
          item["addonName"] = "";
          // cartStore(item, restaurant.discount, getOrderMode);
          addBulkCart(item, restaurant.discount, getOrderMode);
          setItemAdded(true);
        } else {
          AddonIdset(item.addon);
          const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
          const itemExists = existingArray.some((itemCheck) => {
            return itemCheck.itemId === item.itemId;
          });

          if (itemExists) {
            setRepeatItem(item.itemId);
            // localStorage.setItem("checkRepeatAddon", "RepeatAddonAdd");
          } else {
            AddonsetShow(true);
            setRepeatItem(false);
            // localStorage.setItem("showAddonPopUp", "ShowAddon");
          }
        }
      }
    }
  };

  const handleMinusItemQty = (item) => {
    const particularData = parsedCart.find(
      (cart) => cart.itemId === item.itemId && cart.loyalty === 0
    );
    if (particularData.count === 1) {
      cartRemoveAllItem(particularData, restaurant.discount, getOrderMode);
    } else {
      cartRemoveItem(particularData, restaurant.discount, getOrderMode);
    }
  };
  const checkRepeatAddon = localStorage.getItem("checkRepeatAddon");
  useEffect(() => {
    if (checkRepeatAddon) {
      AddonsetShow(false);
    }
  }, [checkRepeatAddon]);
  let showAddonPopUp = localStorage.getItem("showAddonPopUp");
  useEffect(() => {
    if (showAddonPopUp) {
      localStorage.removeItem("showAddonPopUp");
      AddonsetShow(true);
    }
  }, [showAddonPopUp]);

  // const [ItemStock, SetItemStock] = useState(true);
  const [itemsFound, setItemsFound] = useState(true);
  const [cartItems, setcartItems] = useState([]);

  // Function to check if any items were found
  const localCart = localStorage.getItem("cart");
  useEffect(() => {
    let localStorageData;
    if (typeof localCart !== "undefined" && localCart !== "undefined") {
      localStorageData = JSON.parse(localCart);
      setcartItems(localStorageData);
    } else {
      localStorageData = "";
      setcartItems(localStorageData);
    }

    const anyItemsFound = MenuAPI?.menuData?.categoryList.some((category) => {
      const categoryData = MenuAPI?.menuData?.menuData.find(
        (cat) => cat.categoryId === category.id
      );
      const itemsInCategory = Object.values(categoryData.subCategory);
      const filteredItems = itemsInCategory.flatMap((subCategory) =>
        subCategory.item.filter(
          (item) =>
            item.itemName &&
            item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      return filteredItems.length > 0;
    });
    setItemsFound(anyItemsFound);
  }, [MenuAPI, searchQuery, cartItems, localCart]);

  return (
    <>
      {closedPopup === true && <ClosedPopup />}
      <ItemAddMinusContext.Provider
        value={{
          ItemIdtopass,
          ItemIdset,
          AddonIdtopass,
          AddonIdset,
          AddonsetShow,
          Addonshow,
          repeatItem,
          setRepeatItem,
          AddonhandleShow,
          handleMinusItemQty,
          itemAdded,
          setItemAdded,
        }}
      >
        <div
          className={`menu-list ${
            localStorage.getItem("cartQty") !== "0" && "item-added"
          }`}
        >
          <Accordion
            defaultActiveKey={Array.from(
              { length: Object.values(MenuAPI.menuData.menuData).length },
              (_, index) => index
            )}
            alwaysOpen
          >
            {MenuAPI?.menuData?.categoryList.map((category, index) => {
              const categoryData = MenuAPI?.menuData?.menuData.find(
                (cat) => cat.categoryId === category.id
              );
              const itemsInCategory = Object.values(categoryData.subCategory);
              const filteredItems = itemsInCategory.flatMap((subCategory) =>
                subCategory.item.filter(
                  (item) =>
                    item.itemName &&
                    item.itemName
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                )
              );

              // If no items in this category match the search query, don't display this category
              if (filteredItems.length === 0) return null;

              return (
                <Accordion.Item key={index} eventKey={index} name={category.id}>
                  <Accordion.Header>
                    {category.name}
                    <MdOutlineArrowForwardIos />
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="category-item">
                      {Object.values(categoryData.subCategory).map(
                        (subCategory) => {
                          if (
                            subCategory &&
                            subCategory.subCategoryName &&
                            subCategory.subCategoryId
                          ) {
                            const filteredItems = subCategory.item.flatMap(
                              (item) =>
                                item.itemName &&
                                item.itemName
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                                  ? [item] // include the item in the resulting array if it matches the search query
                                  : []
                            );

                            // If no items in this sub-category match the search query, don't display this sub-category
                            if (filteredItems.length === 0) return null;

                            return (
                              <div
                                key={subCategory.subCategoryId}
                                className="sub-category-item"
                              >
                                <div className="sub-category">
                                  <h4>{subCategory.subCategoryName}</h4>
                                  {subCategory.subCategoryDesc && (
                                    <p>{subCategory.subCategoryDesc}</p>
                                  )}
                                </div>
                                <div className="menu-item-div">
                                  <Row>
                                    {Object.values(subCategory.item).map(
                                      (item, index) => {
                                        if (
                                          item.itemId &&
                                          item.itemName &&
                                          item.itemName
                                            .toLowerCase()
                                            .includes(searchQuery.toLowerCase())
                                        ) {
                                          return (
                                            <Col
                                              xxl={6}
                                              xl={6}
                                              md={12}
                                              lg={12}
                                              key={item.itemId}
                                            >
                                              <div
                                                className={`menu-item ${
                                                  !item.itemImage &&
                                                  "no-img-item"
                                                }`}
                                              >
                                                <ItemPopup
                                                  item={item}
                                                  clsname={`content ${
                                                    (parsedCart &&
                                                      parsedCart.find(
                                                        (cart) =>
                                                          cart.itemId ===
                                                            item.itemId &&
                                                          cart.loyalty === 0 &&
                                                          cart.gift === 0
                                                      )) ||
                                                    item.available ||
                                                    item.itemImage
                                                      ? ""
                                                      : "full-width"
                                                  }`}
                                                  setcartItems={setcartItems}
                                                >
                                                  {item.bestSeller ||
                                                  item.mustTry ? (
                                                    <>
                                                      <div className="best-must-top">
                                                        {item.bestSeller && (
                                                          <span className="best-seller">
                                                            Best Seller
                                                          </span>
                                                        )}
                                                        {item.mustTry && (
                                                          <span className="must-try">
                                                            Must Try
                                                          </span>
                                                        )}
                                                      </div>
                                                    </>
                                                  ) : null}
                                                  <h5>{item.itemName}</h5>
                                                  <p>
                                                    {item.itemDesc.length > 85
                                                      ? item.itemDesc.slice(
                                                          0,
                                                          85
                                                        ) + "..."
                                                      : item.itemDesc}
                                                  </p>
                                                  {/* <span
                                                  className={`price ${
                                                    ItemStock &&
                                                    index === 1 &&
                                                    "no-stock"
                                                  }`}
                                                >
                                                  £{item.price}
                                                </span> */}
                                                  <span className={`price`}>
                                                    £{item.price}
                                                  </span>
                                                </ItemPopup>
                                                {item.itemImage && (
                                                  <ItemPopup
                                                    item={item}
                                                    clsname={`img-div ${
                                                      !item.itemImage &&
                                                      width < 768
                                                        ? "mob-img-div"
                                                        : ""
                                                    } ${
                                                      (parsedCart &&
                                                        parsedCart.find(
                                                          (cart) =>
                                                            cart.itemId ===
                                                              item.itemId &&
                                                            cart.loyalty ===
                                                              0 &&
                                                            cart.gift === 0
                                                        )) ||
                                                      item.available ||
                                                      item.itemImage
                                                        ? ""
                                                        : "no-width"
                                                    }`}
                                                    setcartItems={setcartItems}
                                                  >
                                                    {item.itemImage.length >
                                                    0 ? (
                                                      <div>
                                                        <Image
                                                          src={item.itemImage}
                                                        />
                                                        {/* <Image
                                                      className={ 
                                                        ItemStock &&
                                                        index === 1 &&
                                                        "no-stock"
                                                      }
                                                      src={item.itemImage}
                                                    /> */}
                                                      </div>
                                                    ) : null}
                                                    {item.available ? (
                                                      <>
                                                        <span
                                                          className={`avil-time ${
                                                            item.itemImage
                                                              ? "with-img"
                                                              : "without-img"
                                                          }`}
                                                        >
                                                          Available at <br />
                                                          {item.available}
                                                        </span>
                                                      </>
                                                    ) : (
                                                      <>
                                                        {/* {ItemStock &&
                                                    index === 1 ? (
                                                      <>
                                                        <span className="stock-tag">
                                                          Out of Stock
                                                        </span>
                                                      </>
                                                    ) : null} */}
                                                      </>
                                                    )}
                                                  </ItemPopup>
                                                )}
                                                {parsedCart &&
                                                parsedCart.find(
                                                  (cart) =>
                                                    cart.itemId ===
                                                      item.itemId &&
                                                    cart.loyalty === 0 &&
                                                    cart.gift === 0
                                                ) ? (
                                                  <>
                                                    <div className="group-btn-div">
                                                      {parsedCart.filter(
                                                        (cart) =>
                                                          cart.itemId ===
                                                            item.itemId &&
                                                          cart.loyalty === 0 &&
                                                          cart.gift === 0
                                                      ).length > "1" ? (
                                                        <>
                                                          <OverlayTrigger
                                                            overlay={
                                                              <Popover id="popover-basic">
                                                                <Popover.Body>
                                                                  This item has
                                                                  multiple
                                                                  customizations
                                                                  added. Remove
                                                                  the correct
                                                                  item from the{" "}
                                                                  <strong>
                                                                    cart
                                                                  </strong>
                                                                  .
                                                                </Popover.Body>
                                                              </Popover>
                                                            }
                                                          >
                                                            <Button>
                                                              <HiMinus />
                                                            </Button>
                                                          </OverlayTrigger>
                                                        </>
                                                      ) : (
                                                        <>
                                                          <Button
                                                            onClick={() =>
                                                              handleMinusItemQty(
                                                                item
                                                              )
                                                            }
                                                          >
                                                            <HiMinus />
                                                          </Button>
                                                        </>
                                                      )}
                                                      <Button className="count">
                                                        {parsedCart
                                                          .filter(
                                                            (cart) =>
                                                              cart.itemId ===
                                                                item.itemId &&
                                                              cart.loyalty ===
                                                                0 &&
                                                              cart.gift === 0
                                                          )
                                                          .reduce(
                                                            (total, cart) =>
                                                              total +
                                                              cart.count,
                                                            0
                                                          )}
                                                      </Button>
                                                      {parsedCart.filter(
                                                        (cart) =>
                                                          cart.itemId ===
                                                            item.itemId &&
                                                          cart.loyalty === 0 &&
                                                          cart.gift === 0 &&
                                                          cart.addon === 0
                                                      ).length >= "1" ? (
                                                        <>
                                                          <Button
                                                            onClick={() =>
                                                              AddonhandleShow(
                                                                item,
                                                                parsedCart
                                                                  .filter(
                                                                    (cart) =>
                                                                      cart.itemId ===
                                                                        item.itemId &&
                                                                      cart.loyalty ===
                                                                        0 &&
                                                                      cart.gift ===
                                                                        0
                                                                  )
                                                                  .reduce(
                                                                    (
                                                                      total,
                                                                      cart
                                                                    ) =>
                                                                      total +
                                                                      cart.count,
                                                                    0
                                                                  )
                                                              )
                                                            }
                                                          >
                                                            <HiPlus />
                                                          </Button>
                                                        </>
                                                      ) : (
                                                        <>
                                                          <ItemPopup
                                                            item={item}
                                                            clsname={"plus-btn"}
                                                            setcartItems={
                                                              setcartItems
                                                            }
                                                          >
                                                            <Button
                                                              onClick={() =>
                                                                AddonhandleShow(
                                                                  item,
                                                                  parsedCart
                                                                    .filter(
                                                                      (cart) =>
                                                                        cart.itemId ===
                                                                          item.itemId &&
                                                                        cart.loyalty ===
                                                                          0 &&
                                                                        cart.gift ===
                                                                          0
                                                                    )
                                                                    .reduce(
                                                                      (
                                                                        total,
                                                                        cart
                                                                      ) =>
                                                                        total +
                                                                        cart.count,
                                                                      0
                                                                    )
                                                                )
                                                              }
                                                            >
                                                              <HiPlus />
                                                            </Button>
                                                          </ItemPopup>
                                                        </>
                                                      )}
                                                    </div>
                                                  </>
                                                ) : null}
                                              </div>
                                            </Col>
                                          );
                                        }
                                        return null;
                                      }
                                    )}
                                  </Row>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }
                      )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
          <ClearBasket />
          <EighteenPlus />
          <DOBPopup />
        </div>
        {!itemsFound && (
          <p style={theme === "dark" ? { color: "#fff" } : { color: "#000" }}>
            No items found.
          </p>
        )}
        {cartItems && <MenuCart MenuAPI={MenuAPI} cartItems={cartItems} />}
      </ItemAddMinusContext.Provider>
    </>
  );
};

function CategoryMenuBtn({ MenuAPI }) {
  const { theme } = useContext(ThemeContext);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleScrollLinkClick = () => {
    setPopoverVisible(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setPopoverVisible(false);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="auto"
        placement="bottom-start"
        rootClose={true}
        rootCloseEvent={"click"}
        show={popoverVisible}
        onToggle={setPopoverVisible}
        overlay={
          <Popover
            id="category-menu-div"
            className={`${theme === "dark" ? "dark-theme" : ""}`}
          >
            <Popover.Header>
              <MdRestaurantMenu />
              <h3>Category List</h3>
            </Popover.Header>
            <Popover.Body>
              <div className="category-div">
                {MenuAPI.menuData.categoryList.map((category, index) => (
                  <>
                    <ScrollLink
                      key={index}
                      activeClass="active"
                      to={category.id}
                      spy={true}
                      offset={-165}
                      smooth={true}
                      delay={0}
                      duration={0}
                      onClick={handleScrollLinkClick}
                    >
                      {category.name}
                    </ScrollLink>
                  </>
                ))}
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <span>
          <HiViewGridAdd />
        </span>
      </OverlayTrigger>
    </>
  );
}
