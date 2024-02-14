import { Player } from "@lottiefiles/react-lottie-player";
import PreparedMobLottie from "./lottie/prepare-mob.json";
import WayLottie from "./lottie/way.json";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
import StuartDriver from "../img/driver.svg";
import StuartCall from "../img/call.svg";
import WayMobLottie from "./lottie/way-mob.json";
import { ContextWidthConsumer } from "../../../myaccount-layout";

const DeliveryStuart = (props) => {
  const { width, breakpoint } = ContextWidthConsumer();

  if (
    props.currentStep === 0 ||
    props.currentStep === 1 ||
    props.currentStep === 2 ||
    props.currentStep === 3 ||
    props.currentStep === 5 ||
    props.currentStep === 12
  ) {
    return null;
  }

  // console.log("props.currentStep");
  // console.log(props.currentStep);

  // if (
  //   props.currentStep !== 8 &&
  //   props.currentStep !== 9 &&
  //   props.currentStep !== 10 &&
  //   props.currentStep !== 11
  // ) {
  //   return null;
  // }

  if (!props.OrderData) {
    return <div>Loading...</div>;
  }

  const OrderData = props.OrderData;

  return (
    <>
      {width > breakpoint ? (
        <>
          {props.currentStep === 6 || props.currentStep === 7 ? null : (
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
                  {props.OrderData.tracking_url !== "" ? (
                    <div className="track-btn">
                      <Link to="../stuarttrack">Track Driver</Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          )}
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
          <div className={props.OrderData.tracking_url && "stuart-prepare"}>
            {props.OrderData.tracking_url !== "" ? (
              <iframe
                src={OrderData.tracking_url}
                width="100%" // Adjust the width and height as needed
                height="600px"
                frameborder="0"
                allowfullscreen
              />
            ) : null}
            <div className="prepared-div-mobile">
              <div className="lottie-ani">
                {props.currentStep === 6 || props.currentStep === 7 ? (
                  <Player autoplay loop src={PreparedMobLottie}></Player>
                ) : (
                  <Player autoplay loop src={WayMobLottie}></Player>
                )}
              </div>
              <div className="status-content">
                {props.currentStep === 6 || props.currentStep === 7 ? (
                  <>
                    <h4>Preparing your order..</h4>
                    <p>
                      Your food is being prepared <br /> & can be picked up
                      soon!
                    </p>
                  </>
                ) : (
                  <>
                    <h4>{OrderData.orderStatusName}</h4>
                    <p>
                      Driver ready to pick up your <br /> order from{" "}
                      {OrderData.restaurantName}
                    </p>
                  </>
                )}
                <div className="estimate-time">
                  <p>{OrderData.estimatedContent}</p>
                  <span>{OrderData.tatTime}</span>
                </div>
              </div>
            </div>
            {props.OrderData.driver_name !== "" &&
            props.OrderData.tracking_url != "" ? (
              <div className="driver-details">
                <div className="profile">
                  <Image src={StuartDriver} />
                  <div className="name">
                    <p>{OrderData.driver_name}</p>
                    <span>Your rider</span>
                  </div>
                </div>
                <a href={`tel:${OrderData.driver_number}`}>
                  <Image src={StuartCall} />
                </a>
              </div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default DeliveryStuart;
