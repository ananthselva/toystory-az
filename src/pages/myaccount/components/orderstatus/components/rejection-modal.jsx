// *******~ Import ~******** //
// React
import React, { useContext, useState, useEffect } from "react";
// Assets
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineCancel } from "react-icons/md";
// Components
import ThemeContext from "../../../../../common/theme/components/contexts/themecontexts";
import { getOrderAgain } from "../../../../../actions/myaccount/order/orderAgainActions";
import { ContextConsumer } from "./statusdetails";
// CSS
import "./css/order-rejection.scss";
// Images
// Icons
// Lottie
import { Player } from "@lottiefiles/react-lottie-player";
// json
import RejectLottie from "./lottie/rejected-button.json";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// *******~ Import ~******** //

export default function RejectedPopup(params) {
  // console.log(params.Othersdata.order_id, params.Othersdata.client_id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderAgainSelector = useSelector(
    (state) => state?.orderagain?.orderagain?.message?.item
  );
  const clientPath = localStorage.getItem("clientPath");
  useEffect(() => {
    // console.log(orderAgainSelector?.itemAvailability);
    const updatedOrderAgain = orderAgainSelector?.map((v, i) => {
      return {
        ...v,
        price: v.price * v.itemQty,
        loyalty: 0,
        gift: 0,
        count: v.itemQty,
      };
    });
    localStorage.setItem("cart", JSON.stringify(updatedOrderAgain));
    var cartQuantity = 0;
    var cartTotal = 0;
    updatedOrderAgain?.forEach((v, i) => {
      cartQuantity += v.count;
      cartTotal += v.price;
    });
    localStorage.setItem("cartQty", cartQuantity);
    localStorage.setItem("totalPrice", cartTotal);
    if (orderAgainSelector != null) {
      navigate(`../../${clientPath}/menu`);
    }
  }, [orderAgainSelector]);
  // console.log(orderAgainSelector);
  const { currentStep } = ContextConsumer();
  const OrderData = params.OrderData;
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (currentStep === 3 || currentStep === 5) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [currentStep]);
  const handleClose = () => setShow(false);

  

  return (
    <>
      <Modal
        show={show}
        centered
        id="order-rejected"
        className={theme === "dark" ? "dark-theme" : null}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
          <div className="lottie-animation">
            <Player autoplay loop src={RejectLottie}></Player>
          </div>
          <div className="content">
            <h5>Sorry! Unfortunately your order</h5>
            <h5>has been rejected by</h5>
            <h5>{OrderData.restaurantName} </h5>

            <p>
              If your order is paid, the amount will be refunded within the next
              3-5 working days. Please call the takeaway at{" "}
              <span className="resPhoneColor">{OrderData.restaurantPhone}</span>{" "}
              to know more..
            </p>
            <Button className="btn btn-danger">
              Go back
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
