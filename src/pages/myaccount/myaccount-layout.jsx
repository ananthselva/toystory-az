// *******~ Import ~******** //
// React
import React, { useState, useEffect, createContext, useContext } from "react";
import { Helmet } from "react-helmet";
// Assets
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// Components
import Sidebar from "./sidebar/sidebar";

// CSS
import "./myaccount-layout.scss";
// Images
// Icons
// *******~ Import ~******** //
const ContextWidthProvider = createContext({});
export const ContextWidthConsumer = () => useContext(ContextWidthProvider);

export default function MyAccount(params) {
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
  const location = useLocation();
  const navigateto = useNavigate();
  if (location.pathname.includes("/myaccount/myorder") && width < 768) {
    navigateto("/myorder");
  } else if (
    location.pathname.includes("/myaccount/addressbook") &&
    width < 768
  ) {
    navigateto("/addressbook");
  } else if (
    location.pathname.includes("/myaccount/wallethistory") &&
    width < 768
  ) {
    navigateto("/wallethistory");
  } else if (
    location.pathname.includes("/myaccount/wallet-tc") &&
    width < 768
  ) {
    navigateto("/wallet-tc");
  } else if (location.pathname.includes("/myaccount/wallet") && width < 768) {
    navigateto("/wallet");
  } else if (
    location.pathname.includes("/myaccount/savedcards") &&
    width < 768
  ) {
    navigateto("/savedcards");
  } else if (location.pathname.includes("/myaccount/addcard") && width < 768) {
    navigateto("/addcard");
  } else if (
    location.pathname.includes("/myaccount/orderstatus") &&
    width < 768
  ) {
    navigateto("/orderstatus");
  } else if (
    location.pathname.includes("/myaccount/stuarttrack") &&
    width < 768
  ) {
    navigateto("/orderstatus");
  } else if (
    location.pathname.includes("/myaccount/orderdetail") &&
    width < 768
  ) {
    navigateto("/myorder");
  }

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
      display:none;
    }
    
  `}</style>
      </Helmet>
      <ContextWidthProvider.Provider value={{ width, breakpoint }}>
        <main className="my-account">
          <Container>
            <Row>
              <Col xxl={3} md={4} xl={3}>
                <Sidebar />
              </Col>
              {width > breakpoint ? (
                <>
                  <Col xxl={9} md={8} xl={9}>
                    <aside>
                      <Outlet />
                    </aside>
                  </Col>
                </>
              ) : null}
            </Row>
          </Container>
        </main>
      </ContextWidthProvider.Provider>
    </>
  );
}
