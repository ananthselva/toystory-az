import { Helmet } from "react-helmet";
import { Image } from "react-bootstrap";
import "./css/stuart-track.scss";
import { Help } from "./statusdetails";
import React, { useEffect } from "react";
import StuartDriver from "../img/driver.svg";

import { useNavigate } from "react-router-dom";

// Icons
import { HiArrowRight } from "react-icons/hi";

import { connect } from "react-redux";
import { getOrderTracking } from "../../../../../actions/myaccount/orderstatus/orderTrackingActions";
import { getOrderDetail } from "../../../../../actions/myaccount/order/orderDetailActions";

const StuartTrack = ({
  error,
  userData,
  profile,
  myaccountfeedback,
  getOrderTracking,
  getOrderDetail,
  ordertracking,
  orderdetail, // Replace 'post' with your reducer name
}) => {
  const { clientId, orderId } = profile?.data?.lastOrder || {};
  useEffect(() => {
    getOrderTracking({
      client_id: clientId,
      order_id: orderId,
    });
    getOrderDetail({
      client_id: clientId,
      order_id: orderId,
    });
  }, [clientId, orderId]);

  // Self Reference

  const OrderDetailURL = "../orderdetail";
  const navigate = useNavigate();
  const navigateToOrderDetail = (event) => {
    const GetOId = event.target.getAttribute("Oid");
    const GetCId = event.target.getAttribute("Cid");
    navigate(OrderDetailURL, { state: { GetOId, GetCId } });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile || !ordertracking || !orderdetail) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    navigate("/");
  }

  const OrderData = ordertracking.message.order;
  const orderdetailuser = orderdetail.message.user; // Assign to a separate variable

  return (
    <>
      <Helmet>
        <style type="text/css">{`
        .my-account aside{
            padding:0px ;
        }
    `}</style>
      </Helmet>

      <div className="stuart-tracking">
        {OrderData === null || OrderData == "" ? (
          <></>
        ) : (
          <>
            <div className="map-img">
              <iframe
                src={OrderData.tracking_url}
                width="100%" // Adjust the width and height as needed
                height="600px"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="driver-details">
              <div className="address">
                <h4>Delivery To:</h4>
                <p>
                  {orderdetailuser.dno}, &nbsp;{orderdetailuser.add1}, <br />
                  {orderdetailuser.add2}, &nbsp;{orderdetailuser.postcode}
                </p>
              </div>
              {OrderData.driver_name !== "" && OrderData.tracking_url !== "" ? (
                <div className="driver-info">
                  <Image src={StuartDriver} />
                  <h4>{OrderData.driver_name}</h4>
                  <a href={`tel:${OrderData.driver_number}`}>Call the Driver</a>
                </div>
              ) : null}
            </div>

            <div className="estimate-div-main-stuart">
              <div className="estimate-div-stuart">
                <div className="time">
                  <p>{OrderData.estimatedContent}</p>
                  <span>{OrderData.tatTime}</span>
                </div>
                <div className="help">
                  <Help place="bottom" />
                </div>
                <div className="total">
                  <p>Total &nbsp; £{OrderData.orderTotalAmount}</p>
                  <span
                    Oid={orderId}
                    Cid={clientId}
                    onClick={navigateToOrderDetail}
                  >
                    View Order Details <HiArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
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

const mapDispatchToProps = { getOrderDetail, getOrderTracking };

export default connect(mapStateToProps, mapDispatchToProps)(StuartTrack);
