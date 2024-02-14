// *******~ Import ~******** //
// React
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
// Components
import BackBtn from "../backbtn";
// CSS
import "./css/wallet.scss";
// Images
import WalletImg from "./img/savecard.png";
import SaveCardImg from "./img/1_Saved Cards.svg";
import CardHisImg from "./img/wallethistory.svg";
// Icons
import { HiArrowSmRight } from "react-icons/hi";
// *******~ Import ~******** //

import { connect } from "react-redux";
import { getWalletDashboard } from "../../../../actions/myaccount/wallet/walletDashboardActions";

const WalletPage = ({
  walletdashboard,
  error,
  userData,
  getWalletDashboard,
}) => {
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
  // const navigate = useNavigate();
  // location change on responsive
  const navigateto = useNavigate();
  const location = useLocation();
  if (!location.pathname.includes("/myaccount") && width > breakpoint) {
    navigateto("/myaccount/wallet");
  }
  // location change on responsive

  // get the data from API

  useEffect(() => {
    if (userData) {
      getWalletDashboard({
        customer_id: userData.customerId,
        body: "Your body",
      });
    }
  }, [userData, getWalletDashboard]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle loading state
  // if (!walletdashboard && !error) {
  //   return <div>Loading...</div>;
  // }

  const walletdashboardamount = walletdashboard?.data; // Assign to a separate variable

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
      display:none;
    }
    
  `}</style>
      </Helmet>
      <section className="wallet-page">
        {width > breakpoint ? null : <BackBtn />}
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="img-pound">
                <Image className="wallet-img" src={WalletImg} fluid />
                <h4>£ {walletdashboard?.status ? walletdashboardamount : 0}</h4>
                <p>Available Balance</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-around wallet-row">
            {[
              {
                title: "Saved Cards",
                subtitle: (
                  <>
                    Add Or Edit Card details <br /> Here.
                  </>
                ),
                img: SaveCardImg,
                urlname: "View Cards",
                mobileurl: "/savedcards",
                deskurl: "../savedcards",
              },
              {
                title: "Wallet History",
                subtitle: (
                  <>
                    View your list of Transaction <br /> details.
                  </>
                ),
                img: CardHisImg,
                urlname: "View History",
                mobileurl: "/wallethistory",
                deskurl: "../wallethistory",
              },
            ].map((data, index) => (
              <>
                <Col xxl={5} key={index} xs={12} sm={10} md={11} lg={8} xl={6}>
                  <Link
                    to={width > breakpoint ? data.deskurl : data.mobileurl}
                    className="card-view-box"
                  >
                    <div className="assets">
                      <Image src={data.img} fluid />
                      <div className="content">
                        <h4>{data.title}</h4>
                        <p>{data.subtitle}</p>
                      </div>
                    </div>
                    <Link
                      to={width > breakpoint ? data.deskurl : data.mobileurl}
                    >
                      {data.urlname}
                      <HiArrowSmRight />
                    </Link>
                  </Link>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  walletdashboard: state.walletdashboard.walletdashboard, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
});

const mapDispatchToProps = {
  getWalletDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletPage);
