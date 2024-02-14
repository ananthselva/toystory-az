import { Player } from "@lottiefiles/react-lottie-player";
import WayLottie from "./lottie/way.json";
import WayMobLottie from "./lottie/way-mob.json";
import { Helmet } from "react-helmet";
import { ContextWidthConsumer } from "../../../myaccount-layout";

const DeliveryTrack = (props) => {
  const { width, breakpoint } = ContextWidthConsumer();
  const OrderData = props.OrderData;
  if (
    (props.currentStep === 1 ||
      props.currentStep === 2 ||
      props.currentStep === 6 ||
      props.currentStep === 7 ||
      props.currentStep === 12) &&
    OrderData.isStuart === true
  ) {
    return null;
  }

  if (
    (props.currentStep === 1 ||
      props.currentStep === 2 ||
      props.currentStep === 4) &&
    OrderData.isStuart === false
  ) {
    return null;
  }

  if (!props.OrderData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {width > breakpoint ? (
        <>
          <>
            <div className="ready-div">
              <div className="lottie-ani">
                <Player autoplay loop src={WayLottie}></Player>
              </div>
              <div className="status-content">
                <h4>Your Order is on it’s way</h4>
                <p>
                  Your Order Is Ready & <br /> Yummy Food Is On It’s way!
                </p>
              </div>
            </div>
          </>
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
                  <Player autoplay loop src={WayMobLottie}></Player>
                </div>
                <div className="status-content">
                  <h4>{OrderData.orderStatusName}</h4>
                  <p>
                    Not long now, your order <br /> is on its way
                  </p>
                  <div className="estimate-time">
                    <p>{OrderData.estimatedContent}</p>
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

export default DeliveryTrack;
