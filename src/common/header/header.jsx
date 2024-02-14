// *******~ Import ~******** //
// React
import React, { useState, useEffect, useContext, lazy } from "react";
// Assets
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
// Components
import { ThemeSetterTwo } from "../theme/components/themeshetter";
import ThemeContext from "../theme/components/contexts/themecontexts";
import MenuBtn from "./menubtn/menubtn";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
// import SignIn from "../../pages/sign-in/sign-in";
// CSS
import "./css/header.scss";
// Images
// import LogoLight from "./img/FK-Half-White.svg";
import LogoDark from "./img/headerImage.png";
// Responsive Img
// import WalletImg from "./img/wallet.svg";
import HomeIcon from "./img/homeicon.svg";
import UpcomingOrders from "./img/upcoming-orders.svg";
import MyOrdersIcon from "./img/myorders.svg";
import MapIcon from "./img/maps.svg";
import ProfileIcon from "./img/profile.svg";
import FavoriteIcon from "./img/favorite.svg";
import WalletIcon from "./img/wallet-menu.svg";
import FKPlus from "./img/fkplus.svg";
import ReferIcon from "./img/refer.svg";
import PerksIcon from "./img/perks.svg";
import HelpIcon from "./img/help-web.svg";
import DeliveryIcon from "../../pages/listpage/img/delivery.svg";
import { FaAngleDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
// Icons
import { FaUserCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { setLoggedIn } from "../../actions/login/authssoActions";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";
import { GiShoppingBag } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from "react-helmet";
// *******~ Import ~******** //
import {
  autocompleteDataClear,
  autocompleteRequest,
} from "../../actions/autocomplete/getAutocompleteAction";
import InfiniteScroll from "react-infinite-scroll-component";

// login code
import { checkUserSession } from "../../utils/sessionUtils";
// redux api
import { connect } from "react-redux";
import { logout } from "../../actions/login/authActions";
import { restaurantDetailApi } from "../../api/menu/restaurantDetailApi";
import Loadable from "../../router/loadable";
import { useSelector } from "react-redux";

// lazy
import { OrderFlow } from "../../App"; // Update the path based on your project structure
import { PostcodeSearch } from "../../pages/listpage/sidebar";
import { ContextWidthConsumer } from "../../pages/listpage/listpage";
import { PostcodePopup } from "../../pages/listpage/sidebar";

const SignIn = Loadable(lazy(() => import("../../pages/sign-in/sign-in")));
const Header = ({
  isLoggedIn,
  userData,
  logout,
}) => {
  const location = useLocation();
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const {
    getOrderMode,
    getOrderTime,
    restaurant,
    handleclick,
    seFooterLoading,
    reslimit,
    setReslimit,
    restaurantData,setRestaurantData,
    hasFetchedData, updateHasFetchedData
  } = OrderFlow();
  const postCode =localStorage.getItem("storePostcode");
  const [postcode, setPostcode] = useState(
    localStorage.getItem("storePostcode") || ""
  );
   
  const [storedPostcode, setStoredPostcode] = useState("");
   
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "storePostcode") {
        setPostcode(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  const handleAutoComplete = (newValue) => {
    // Logic to update the postcode...
    localStorage.setItem("storePostcode", newValue); // Update localStorage
    setPostcode(newValue); // Update the state
  };

  useEffect(() => {
    if (
      userData &&
      userData.status &&
      userData.customerId &&
      (userData.login_type == 1 || userData.login_type == 2)
    ) {
      reduxDispatch(setLoggedIn());
      // navigate('/');
    }
  }, [userData]);
  const { pathname } = useLocation();
  const { theme } = useContext(ThemeContext);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 991;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const menus = [
    {
      name: "Help",
      url: "/help",
    },
    // {
    //   name: "Login",
    //   url: "/",
    // },
  ];
  useEffect(() => {
    // Function to handle changes in localStorage
    const handleStorageChange = (event) => {
      if (event.key === "storePostcode") {
        setStoredPostcode(event.newValue);
      }
    };

    // Retrieve initial value from localStorage
    const storedPostcodeValue = localStorage.getItem("storePostcode");
    if (storedPostcodeValue) {
      setStoredPostcode(storedPostcodeValue);
    }

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  });
  const handleLogout = () => {
    // Perform any additional logout logic here
    logout();
    if (location.pathname.includes("/checkout")) {
      navigate(-1);
    } else if (!location.pathname.includes("/menu")) {
      navigate("/");
    }
  };
  const handleclick1 = () => {
    seFooterLoading(false);
  };
  const orderTab = localStorage.getItem("orderType") || "";
  const tatTime = localStorage.getItem("tatTime") || "0 - 10";

  return (
    <>
      {pathname.endsWith("/menu") ||
      pathname.endsWith("/about") ||
      pathname.endsWith("/list") ||
      pathname.endsWith("/review") ||
      pathname.endsWith("/checkout") ? (
        <>
          <Helmet>
            <style type="text/css">{`
        @media only screen and (min-width: 320px) and (max-width: 767px) {
          nav.main-header .logo img{
             // visibility:hidden;
              display:none;
          }
          .logo .listiconbackparent{
            display:none;
          }
        }
    `}</style>
          </Helmet>
        </>
      ) : null}
      <Navbar collapseOnSelect expand="lg" sticky="top" className="main-header">
        <Container>
          <div className="logo">
            {theme === "light" ? (
              <>
                {pathname === "/list" && (
                  <>
                    <div className="d-block d-md-none">
                      <div className="listiconbackparent ">
                        <div className="listiconback">
                          <IoLocationOutline />
                        </div>
                        <div>
                          <p>
                            {getOrderMode}
                            <span>{getOrderTime}</span>{" "}
                          </p>
                          <span>
                            <h6>
                              {storedPostcode}
                              <span className="postcode-popup">
                                <PostcodePopup
                                  postCode={postCode}
                                  updateHasFetchedData={updateHasFetchedData}
                                  setReslimit={setReslimit}
                                  setRestaurantData={setRestaurantData}
                                >
                                  {/* <span className="post-code">{postCode}</span> */}
                                  <FaAngleDown className="downarrow" />
                                </PostcodePopup>
                              </span>
                            </h6>
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <Nav.Link as={Link} to={"/"} eventKey={0}>
                  <img src={LogoDark} alt="" />
                </Nav.Link>
              </>
            ) : (
              <>
                {pathname === "/list" && (
                  <>
                    <div className="d-block d-md-none">
                      <div className="listiconbackparent ">
                        <div className="listiconback">
                          <IoLocationOutline />
                        </div>
                        <div>
                          <p>
                            {getOrderMode}
                            <span>Tomorrow 01:00 - 01:30</span>{" "}
                          </p>

                          <span>
                            <h6>
                              {storedPostcode}
                              <span className="postcode-popup">
                                <PostcodePopup
                                  postCode={postCode}
                                  updateHasFetchedData={updateHasFetchedData}
                                  setReslimit={setReslimit}
                                  setRestaurantData={setRestaurantData}
                                >
                                  {/* <span className="post-code">{postCode}</span> */}
                                  <FaAngleDown className="downarrow" />
                                </PostcodePopup>
                              </span>
                            </h6>
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <Nav.Link as={Link} to={"/"} eventKey={0}>
                  <img src={LogoDark} alt="" />
                </Nav.Link>
              </>
            )}
          </div>
          {pathname.endsWith("/checkout") ? (
            <ScrollLink
              eventKey="0"
              className="cart-canva-btn-heading"
              activeClass="active"
              to="cart-canva-btn-heading"
              spy={true}
              offset={-75}
              smooth={true}
              delay={0}
              duration={0}
            >
              <span className="btn-data">
                <span className="count">{localStorage.getItem("cartQty")}</span>{" "}
                <GiShoppingBag />
              </span>
            </ScrollLink>
          ) : (
            <ThemeButton clsname="mobile-button-theme" />
          )}
          
          <MenuBtn />
          {width > breakpoint ? (
            <>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  {menus.map((menu, index) => (
                    <Nav.Link
                      as={Link}
                      key={index}
                      eventKey={index}
                      to={menu.url}
                      onClick={handleclick}
                    >
                      {menu.name}
                    </Nav.Link>
                  ))}
                  {/* <SignIn /> */}
                  {isLoggedIn ? (
                    <NavDropdown title={`Hi ${userData.fname}`}>
                      <NavDropdown.Item
                        as={Link}
                        eventKey="5"
                        to="/myaccount"
                        onClick={handleclick1}
                      >
                        <FaUserCircle /> My Account
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        eventKey="6"
                        as={Link}
                        to="/myaccount/wallet"
                      >
                        <MdAccountBalanceWallet /> Wallet
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        eventKey="6"
                        as={Link}
                        to="/myaccount/favourites"
                      >
                        <MdFavorite /> Favourite
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={handleLogout}
                        eventKey="6"
                        as={Link}
                        to={!location.pathname.includes("/menu") ? "/" : "#"}
                      >
                        <IoMdExit /> Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <SignIn isLoggedIn={isLoggedIn} />
                  )}
                </Nav>
              </Navbar.Collapse>
              <ThemeButton />
            </>
          ) :(
            
            <>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="mobile-header"
              >
                {isLoggedIn && (
                  <>
                    <p className="top-name">{`Hi ${userData.fname}`}</p>
                    <Nav>
                      {[
                        {
                          name: "Home",
                          img: HomeIcon,
                          url: "/",
                        },
                        {
                          name: "Upcoming Orders",
                          img: UpcomingOrders,
                          url: "/myorder",
                        },
                        {
                          name: "My Orders",
                          img: MyOrdersIcon,
                          url: "/myorder",
                        },
                        {
                          name: "Profile",
                          img: ProfileIcon,
                          url: "/profile",
                        },
                        {
                          name: "Favourite",
                          img: FavoriteIcon,
                          url: "/favourites",
                        },
                        {
                          name: "Address",
                          img: MapIcon,
                          url: "/addressbook",
                        },
                        {
                          name: "Wallet",
                          img: WalletIcon,
                          url: "/wallet",
                        },
                        {
                          name: "Help",
                          img: HelpIcon,
                          url: "/help",
                        },
                      ].map((data, index) => (
                        <Nav.Link
                          key={index}
                          eventKey={index}
                          as={Link}
                          to={data.url}
                          onClick={handleclick1}
                        >
                          <Image src={data.img} />
                          {data.name}
                        </Nav.Link>
                      ))}
                    </Nav>
                  </>
                )}

                {!isLoggedIn && (
                  <>
                    <Nav>
                      {[
                        {
                          name: "FK+",
                          img: FKPlus,
                          url: "/",
                        },
                        {
                          name: "Refere a Friend",
                          img: ReferIcon,
                          url: "/",
                        },
                        {
                          name: "Perks",
                          img: PerksIcon,
                          url: "/",
                        },
                        {
                          name: "Help",
                          img: HelpIcon,
                          url: "/help",
                        },
                      ].map((data, index) => (
                        <Nav.Link
                          key={index}
                          eventKey={index}
                          as={Link}
                          to={data.url}
                          onClick={handleclick1}
                        >
                          <Image src={data.img} />
                          {data.name}
                        </Nav.Link>
                      ))}
                    </Nav>
                  </>
                )}
                <div className="not-log">
                  {isLoggedIn ? (
                    <>
                      <p>
                        Not {userData.fname}? &nbsp;
                        <p onClick={handleLogout}>Logout</p>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Dont’ have a account? &nbsp; <SignIn />
                      </p>
                    </>
                  )}
                </div>
              </Navbar.Collapse>
            </>
                  
          )}
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userdata.isLoggedIn,
    userData: state.userdata.userData,
    postCode: state.postCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

//export default connect(mapStateToProps)(Header);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header;

function ThemeButton(props) {
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
        placement="bottom"
        rootClose={true}
        rootCloseEvent={"click"}
        show={popoverVisible}
        onToggle={setPopoverVisible}
        overlay={
          <Popover
            id="theme-head-pop"
            className={`theme-head ${theme === "dark" ? "dark-theme" : ""}`}
          >
            <Popover.Body>
              <div className="category-div" onClick={handleScrollLinkClick}>
                <ThemeSetterTwo />
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <span className={`header-theme-btn ${props.clsname}`}>
          {theme === "dark" ? <WiMoonAltWaningCrescent4 /> : <WiDaySunny />}
        </span>
      </OverlayTrigger>
    </>
  );
}
