// *******~ Import ~******** //
// React
// Assets
import { Helmet } from "react-helmet";
import { Player } from "@lottiefiles/react-lottie-player";
// Components
import { ContextConsumer } from "./statusdetails";
// CSS
// Images
// Icons

import PreparedMobLottie from "./lottie/prepare-mob.json";
// JSON
// *******~ Import ~******** //

const PreparedStuartMob = (props) => {
  const { deliveryTypes, ordertypes } = ContextConsumer();
  if (props.currentStep !== 2) {
    return null;
  }

  // console.log(props.currentStep);
  // console.log("stuart");
  // console.log(props.OrderData);

  if (!props.OrderData) {
    return <div>Loading...</div>;
  }

  // console.log(props.currentStep);
  // console.log(props.currentStep);

  const OrderData = props.OrderData;

  return (
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
      <div className="stuart-prepare">
        <iframe
          src={OrderData.tracking_url}
          width="100%" // Adjust the width and height as needed
          height="600px"
          frameborder="0"
          allowfullscreen
        />

        <div className="prepared-div-mobile">
          <div className="lottie-ani">
            <Player autoplay loop src={PreparedMobLottie}></Player>
          </div>
          <div className="status-content">
            <h4>Preparing your order..</h4>
            <p>Order from {OrderData.restaurantName}</p>
            <div className="estimate-time">
              <p>{OrderData.estimatedContent}</p>
              <span>{OrderData.tatTime}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreparedStuartMob;
