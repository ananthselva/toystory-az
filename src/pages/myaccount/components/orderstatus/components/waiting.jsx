import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import WaitingLottie from "./lottie/waiting.json";
import RejectLottie from "./lottie/rejected-button.json";
import { ContextWidthConsumer } from "../../../myaccount-layout";
import { ContextConsumer } from "./statusdetails";

import { Link } from "react-router-dom";

const Waiting = (props) => {
  const OrderData = props.OrderData;

  const { width, breakpoint } = ContextWidthConsumer();
  // if (props.currentStep !== 1 && props.currentStep !== 3) {
  //   return null;
  // }

  return (
    <>
      {width > breakpoint ? (
        <>
          {props.currentStep === 1 ? (
            <>
              <div className="waiting-div">
                <div className="lottie-ani">
                  <Player autoplay loop src={WaitingLottie}></Player>
                </div>
                <h4>Awaiting confirmation</h4>
                <p>
                Our delightful team is confirming your order. <br />Thanks for your patience! 
                </p>
              </div>
            </>
          ) : null}
        </>
      ) : props.currentStep === 3 || props.currentStep === 5 ? (
        <Rejected orderData={OrderData} />
      ) : props.currentStep === 1 ? (
        <WaitingMob orderData={OrderData} />
      ) : null}
    </>
  );
};

export default Waiting;

function WaitingMob(params) {
  const OrderData = params.orderData;

  const { deliveryTypes, ordertypes } = ContextConsumer();
  return (
    <>
      <div className="waiting-div-mob">
        <div className="waiting-content">
          <div className="lottie-ani">
            <Player autoplay loop src={WaitingLottie}></Player>
          </div>
          <div className="status-content">
            <h4>Order Placed!</h4>
            <p>
            Our delightful team is confirming your order. <br />Thanks for your patience!
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

function Rejected(params) {
  const OrderData = params.orderData;
  return (
    <>
      <div className="waiting-div-mob">
        <div className="waiting-content">
          <div className="lottie-ani-reject">
            <Player autoplay loop src={RejectLottie}></Player>
          </div>
          <div className="status-content reject">
            <h4>Order Rejected</h4>
            <p>
              We regret to inform you that <br /> your order has been rejected.
            </p>
          </div>
          <div className="estimate-time">
            <Link to="/">Ohh! OK</Link>
          </div>
        </div>
      </div>
    </>
  );
}
