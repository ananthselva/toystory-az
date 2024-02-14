// *******~ Import ~******** //
// React
import React, { useContext, useState, useEffect } from "react";
// Assets
import Modal from "react-bootstrap/Modal";
import { MdOutlineCancel } from "react-icons/md";
// Components
import ThemeContext from "../../../../../common/theme/components/contexts/themecontexts";
import { ContextConsumer } from "./statusdetails";
// CSS
import "./css/order-received.scss";
// Images
// Icons
// Lottie
import { Player } from "@lottiefiles/react-lottie-player";
// json
import WaitingLottie from "./lottie/waiting.json";
// *******~ Import ~******** //

export default function ReceivedPopup(params) {
  const { currentStep } = ContextConsumer();
  const OrderData = params.OrderData;
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (currentStep === 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [currentStep]);
 
  const handleClose = () => setShow(false);

  return (
    <>
     {OrderData === null ||OrderData == '' ?(
          <></>
        ):(
        <>
         <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        centered
        id="order-received"
        className={theme === "dark" ? "dark-theme" : null}
      >
        <Modal.Body>
      
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
         
          <div className="lottie-animation">
            <Player autoplay loop src={WaitingLottie}></Player>
          </div>
          <div className="content">
            <h3>Order Placed!</h3>
            {/* <h5>Waiting confirmation from the restaurant</h5> */}
            {/* <p>
              {OrderData&&OrderData?.restaurantName} has received your order for{" "}
              {OrderData&&OrderData?.orderType?.toLowerCase()}. Awaiting confirmation from
              the restaurant. You will receive a mail regarding your{" "}
              {OrderData.orderType.toLowerCase()} order status soon.
            </p> */}
            <p>
            Your order is being confirmed; appreciate your patience, especially during peak demand.
            </p>
          </div>
        </Modal.Body>
         </Modal>
        </>
        )
      }
      
    </>
  );
}
