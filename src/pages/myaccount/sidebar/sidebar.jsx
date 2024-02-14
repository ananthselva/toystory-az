// *******~ Import ~******** //
// React
import { useEffect, useState } from "react";
// Assets
import { Image, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";

// Components
import { ContextWidthConsumer } from "../myaccount-layout";
// CSS
import "./sidebar.scss";
// Images
import ProfileImg from "./img/profile.svg";
import UserImg from "./img/user_active.svg";
import StatusImg from "./img/order-status.svg";
import MyorderImg from "./img/my-orders.svg";
import AdBookImg from "./img/address-book.svg";
import WalletImg from "./img/wallet.svg";
import WallettcImg from "./img/wallet-tc.svg";
// Icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// *******~ Import ~******** //

// Redux wallet history
import { connect } from "react-redux";
import { logout } from "../../../actions/login/authActions";

const Sidebar = ({ userData, logout }) => {
  const { width, breakpoint } = ContextWidthConsumer();

  const navigate = useNavigate();

  // Handle loading state

  const guestAddress = localStorage.getItem("guestAddress") || "";
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [guest, setGuest] = useState([]);
  useEffect(() => {
    if (isLoggedIn !== "true") {
      const parsedUserData = guestAddress ? JSON.parse(guestAddress) : "";
      if (parsedUserData) {
        setGuest(parsedUserData);
      } else {
        navigate("/");
      }
    }
  }, [isLoggedIn, userData, navigate, guestAddress]);

  const handleLogout = () => {
    // Perform any additional logout logic here
    logout();
    navigate("/");
  };

  const SideMenus = [
    {
      name: "My Account",
      img: UserImg,
      url: "/myaccount",
      subpaths: [
        {
          name: "Order Status",
          img: StatusImg,
          url: "/orderstatus",
        },
        {
          name: "My Order",
          img: MyorderImg,
          url: "/myorder",
        },
        {
          name: "Address Book",
          img: AdBookImg,
          url: "/addressbook",
        },
        {
          name: "Wallet",
          img: WalletImg,
          url: "/wallet",
        },
        {
          name: "Wallet T&C",
          img: WallettcImg,
          url: "/wallet-tc",
        },
      ],
    },
  ];

  const SideMenuMobile = [
    {
      name: "My Accounts",
      img: UserImg,
      url: "/profile",
    },
    {
      name: "Order Status",
      img: StatusImg,
      url: "/orderstatus",
    },
    {
      name: "My Order",
      img: MyorderImg,
      url: "/myorder",
    },
    {
      name: "Address Book",
      img: AdBookImg,
      url: "/addressbook",
    },
    {
      name: "Wallet",
      img: WalletImg,
      url: "/wallet",
    },
    {
      name: "Wallet T&C",
      img: WallettcImg,
      url: "/wallet-tc",
    },
  ];
  return (
    <>
      <Navbar className="myaccount-sidebar-div">
        <div className="user-data">
          <Image src={ProfileImg} fluid />
          <div className="name-log">
            {userData && isLoggedIn === "true" ? (
              <>
                <p>{userData.fname && userData.fname}</p>
              </>
            ) : (
              <>
                <p>
                  {guest?.firstName} {guest?.lastName}
                </p>
              </>
            )}
            {isLoggedIn === "true" ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : null}
          </div>
        </div>
        <div className="myaccount-sidebar">
          {width > breakpoint ? (
            <>
              <Nav>
                {SideMenus.map((SideMenu, index) => (
                  <>
                    {isLoggedIn === "true" ? (
                      <>
                        {index === 5 ? (
                          <>
                            <hr />
                          </>
                        ) : null}
                      </>
                    ) : null}
                    {isLoggedIn !== "true" &&
                    SideMenu.name !== "Order Status" ? null : (
                      <>
                        <NavLink
                          eventKey={index}
                          to={SideMenu.url}
                          key={index}
                          id={SideMenu.length}
                          className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                          }
                          end
                        >
                          <div className="side-menu">
                            <Image src={SideMenu.img} />
                            <p> {SideMenu.name}</p>
                          </div>
                        </NavLink>
                        {SideMenu.subpaths.map((v, i) => (
                          <>
                            {i === 4 ? (
                              <>
                                <hr />
                              </>
                            ) : null}
                            <NavLink
                              key={i}
                              to={`${SideMenu.url}${v.url}`}
                              id={v.length}
                              className={({ isActive }) =>
                                isActive ? "active" : "inactive"
                              }
                              end
                            >
                              <div className="side-menu">
                                <Image src={v.img} />
                                <p> {v.name}</p>
                              </div>
                            </NavLink>
                          </>
                        ))}
                      </>
                    )}
                  </>
                ))}
              </Nav>
            </>
          ) : (
            <>
              <Nav>
                {SideMenuMobile.map((SideMenuMob, index) => (
                  <>
                    {index === 5 ? (
                      <>
                        <hr />
                      </>
                    ) : null}
                    <Nav.Link
                      as={Link}
                      eventKey={index}
                      to={SideMenuMob.url}
                      key={index}
                      id={SideMenuMob.length}
                    >
                      <div className="side-menu">
                        <Image src={SideMenuMob.img} />
                        <p> {SideMenuMob.name}</p>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </Nav.Link>
                  </>
                ))}
              </Nav>
            </>
          )}
        </div>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userdata.userData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
