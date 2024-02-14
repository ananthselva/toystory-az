import { Player } from "@lottiefiles/react-lottie-player";
import ReadyLottie from "./lottie/ready.json";
import { Helmet } from "react-helmet";
import { ContextWidthConsumer } from "../../../myaccount-layout";
import { ContextConsumer } from "./statusdetails";
const OrderReady = (props) => {
  const { width, breakpoint } = ContextWidthConsumer();
  if (
    props.currentStep === 1 ||
    props.currentStep === 2 ||
    props.currentStep === 4 
  ) {
    return null;
  }
  const OrderData = props.OrderData;

  return (
    <>
      {width > breakpoint ? (
        <>
          {" "}
          <div className="ready-div">
            <div className="lottie-ani">
              <Player autoplay loop src={ReadyLottie}></Player>
            </div>
            <div className="status-content">
              <h4>Your Order is Ready!</h4>
              <p>
                Your Order Is Ready & Can Be <br /> Collected Now!
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {props.currentStep !== 3 && props.currentStep !== 5 && (
            <>
              <Helmet>
                <style type="text/css">{`
       .order-status .order-details-mob{
        background-color: #ffffff;
        padding-top: 10px;
        margin-top: 30px;
       }
    `}</style>
              </Helmet>
              <div className="prepared-div-mobile">
                <div className="lottie-ani">
                  <Player autoplay loop src={ReadyLottie}></Player>
                </div>
                <div className="status-content">
                  <h4>Order is ready!</h4>
                  <p>
                    Your Order Is Ready & Can Be <br /> Collected Now!
                  </p>
                  <div className="estimate-time">
                    <p>
                      {OrderData.estimatedContent}
                    </p>
                    <span>{OrderData.tatTime}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default OrderReady;
