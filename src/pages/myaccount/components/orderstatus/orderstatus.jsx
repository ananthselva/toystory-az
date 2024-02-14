// *******~ Import ~******** //
// React
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
// handle loading

import Orderstatusskle from "..//orderstatus/Orderstatusskle";
// Assets
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
// Components
import { Help, MasterForm } from "./components/statusdetails";
// CSS
import "./orderstatus.scss";
// Images
// Icons
import { TiArrowBackOutline } from "react-icons/ti";
import no from "./img/no.svg";
// JSON
import { Player } from "@lottiefiles/react-lottie-player";
import NotfoundLottie from "./not-found.json";
// *******~ Import ~******** //

// Redux wallet history
import { connect } from "react-redux";
import { getOrderTracking } from "../../../../actions/myaccount/orderstatus/orderTrackingActions";
import { getMyAccountFeedback } from "../../../../actions/myaccount/orderstatus/postMyAccountFeedbackActions";
import { getProfile } from "../../../../actions/myaccount/profile/getProfileActions";
import { getOrderDetail } from "../../../../actions/myaccount/order/orderDetailActions";

const OrderStatus = ({
  getOrderTracking,
  getMyAccountFeedback,
  error,
  userData,
  profile,
  getProfile,
  myaccountfeedback,
  ordertracking,
  orderdetail, // Replace 'post' with your reducer name
  getOrderDetail,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [noStatus,setNoStatus]=useState(false);
  const [orderData,setOrderData]=useState(true);
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
  // Responsive Navigate
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.pathname.includes("/myaccount") && width > breakpoint) {
    navigate("/myaccount/orderstatus");
  }
  // Responsive Navigate

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const guestAddress = localStorage.getItem("guestAddress") || "";
  const address = guestAddress ? JSON.parse(guestAddress) : "";

  const customerIdToFetch =
    userData && isLoggedIn === "true"
      ? userData.customerId
      : address.customerId;

  // get profile data
  useEffect(() => {
    getProfile({ customer_id: customerIdToFetch });
  }, [customerIdToFetch]);

  const { clientId, orderId } = profile?.data?.lastOrder || {};
  const intervalRef = useRef(0);
  const Oid = location?.state?.GetOId || "";
  const Cid = location?.state?.GetCId || "";
  const OrderData = ordertracking?.message?.order;
  const OrderUserData = ordertracking?.message?.user;
  useEffect(() => {
    const fetchOrderTracking = () => {
      if (clientId && orderId) {
        getOrderTracking({
          client_id: Cid || clientId,
          order_id: Oid || orderId,
        });
      }
    };

    fetchOrderTracking(); // Call it immediately
    intervalRef.current = setInterval(fetchOrderTracking, 5000);

    return () => clearInterval(intervalRef.current); // Clear interval on unmount
  }, [intervalRef, clientId, orderId, Oid, Cid]);

  useEffect(() => {
    const params = {
      client_id: Cid || clientId,
      order_id: Oid || orderId,
    };

    getOrderDetail(params);
  }, [clientId, orderId, Cid, Oid]);



    // if (!orderdetail) {
    //   return <Orderstatusskle />;
    // }

 

  useEffect(()=>{
    if (!profile || !ordertracking || !orderdetail) {
      setTimeout(()=>{
        setNoStatus(true);
      },1000)
    }
  }, [profile, ordertracking, orderdetail]);

  useEffect(()=>{
    if(OrderData === null || OrderData == ""){
      setTimeout(()=>{
        setOrderData(false);
      },3000)
    }
  },[OrderData]);


  if (error) {
    return <div>Error: {error}</div>;
  }
  
    if (!orderdetail) {
      return <Orderstatusskle />;
    }

  if (!profile || !ordertracking || !orderdetail) {
    if(noStatus===true){
    return (
      <div>
        <NoOrderStatus />
      </div>
    );
    }
  }

 

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
      display:none;
    }
   @media only screen and (min-width: 320px) and (max-width: 767px){
 nav.main-header{
      display:none;
    }
   }
       
  `}</style>
      </Helmet>
      <section className="order-status">
        {orderData? (
          <>
            {width > breakpoint ? null : (
              <>
                <Container>
                  <Row>
                    <Col xxl={12}>
                      <div className="status-back">
                        <Link to={"/myaccount"}>
                          <TiArrowBackOutline /> Back to dashboard
                        </Link>
                        {OrderData && OrderData?.length === 0 ? null : (
                          <Help place="bottom-end" />
                        )}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </>
            )}

            <Container>
              {OrderData && OrderData?.length === 0 ? (
                <>
                  <NoOrderStatus />
                </>
              ) : (
                <>
                  <Row>
                    <Col xxl={12}>
                      <MasterForm
                        OrderData={OrderData}
                        OrderUserData={OrderUserData}
                        Otherdata={{
                          client_id: Cid || clientId,
                          order_id: Oid || orderId,
                          user_id:
                            isLoggedIn === "true"
                              ? userData?.customerId
                              : address?.customerId,
                        }}
                        orderdetail={orderdetail}
                      />
                    </Col>
                  </Row>
                </>
              )}
            </Container>
          </>
        ):(
          <>
            <p>not found</p>
          </>
        ) 
        }
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  ordertracking: state.ordertracking.ordertracking, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
  profile: state.profile.profile, // Replace 'post' with your reducer name
  myaccountfeedback: state.myaccountfeedback.myaccountfeedback,
  orderdetail: state.orderdetail.orderdetail, // Replace 'post' with your reducer name
});

const mapDispatchToProps = {
  getOrderTracking,
  getMyAccountFeedback,
  getProfile,
  getOrderDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);

const NoOrderStatus = (params) => {
  return (
    <>
      <Col xxl={12}>
        <div className="no-order-status">
          <div className="img-no">
            <img src={no} alt="" />
          </div>
          <h3>Looks like you not yet ordered anything...</h3>
          <Link to="/">
            <Button>Start Ordering</Button>
          </Link>
        </div>
      </Col>
    </>
  );
};
