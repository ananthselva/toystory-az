import { Player } from "@lottiefiles/react-lottie-player";
import PreparedLottie from "./lottie/prepared.json";
import PreparedMobLottie from "./lottie/prepare-mob.json";
import { ContextWidthConsumer } from "../../../myaccount-layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Prepared = (props) => {
  const { width, breakpoint } = ContextWidthConsumer();
  const OrderData = props.OrderData;
  if (
    props.currentStep !== 2 &&
    props.currentStep !== 6 &&
    props.currentStep !== 7
  ) {
    return null;
  }

  if (props.currentStep === 6 && OrderData.isStuart === false) {
    return null;
  }

  // console.log("OrderData");
  // console.log(OrderData);

  return (
    <>
      {width > breakpoint ? (
        <>
          <div className="prepared-div">
            <div className="lottie-ani">
              <Player autoplay loop src={PreparedLottie}></Player>
            </div>
            <div className="status-content">
              <h4>{OrderData.restaurantName} is preparing your food</h4>
              <p>
                Your food is being prepared cv & can be <br /> picked up soon!
              </p>
            </div>
            {OrderData.tracking_url && OrderData.tracking_url !== "" ? (
              <div className="track-btn">
                <Link to="../stuarttrack">Track Driver</Link>
              </div>
            ) : null}
          </div>
        </>
      ) : (
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
              <Player autoplay loop src={PreparedMobLottie}></Player>
            </div>
            <div className="status-content">
              <h4>Cooking Up Delight: Pickup Soon!</h4>
              <br />
              <div className="estimate-time">
                <p>{OrderData.estimatedContent}</p>
                <span>{OrderData.tatTime}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Prepared;
