import React, { useState, useContext, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
// Assets
import Modal from "react-bootstrap/Modal";
import RepeatLottie from "./img/repeat.json";
import "./css/reset-cart.scss";
import { MdOutlineCancel } from "react-icons/md";
//  Repeat Custom Popup Start
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { cartStore } from "../../actions/menu/cartAction";
import { OrderFlow } from "../../App";
import { RestaurantContext } from "./menu-page";

export function RepeatCustom(itemId) {
  const [show, setShow] = useState(false);
  const [checkRepeat, setCheckRepeat] = useState(false);
  const [itemName, setItemName] = useState("");
  const { getOrderMode, restaurant } = OrderFlow();

  const handleClose = () => {
    localStorage.setItem("showAddonPopUp", "ChooseAddon");
    setShow(false);
  };

  const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
  const itemExists = existingArray.some(
    (item) => item.itemId === itemId.itemid
  );

  const repeatItemAdd = () => {
    const existingItemIndex = existingArray.findIndex(
      (item) => item.itemId === itemId.itemid
    );
    cartStore(
      existingArray[existingItemIndex],
      restaurant.discount,
      getOrderMode
    );
    setCheckRepeat(false); // Reset checkRepeat after adding the item
    setShow(false);
  };

  useEffect(() => {
    const existingItemIndex = existingArray.findIndex(
      (item) => item.itemId === itemId.itemid
    );
    if (
      itemExists &&
      existingArray[existingItemIndex] &&
      existingArray[existingItemIndex].addon !== ""
    ) {
      setItemName(existingArray[existingItemIndex].itemName);
      setShow(true);
      // localStorage.setItem("checkRepeatAddon",'RepeatAddonToAdd');
    }
  }, [itemExists, checkRepeat, itemId.itemid]);

  const checkRepeatAddon = localStorage.getItem("checkRepeatAddon");

  useEffect(() => {
    const existingItemIndex = existingArray.findIndex(
      (item) => item.itemId === itemId.itemid
    );
    // let checkRepeatAddon = localStorage.getItem("checkRepeatAddon");
    if (
      checkRepeatAddon &&
      existingArray[existingItemIndex] &&
      existingArray[existingItemIndex].addon !== ""
    ) {
      setShow(true);
      localStorage.setItem("checkRepeatAddon", "ShowAddonPopup");
    }
  }, [checkRepeatAddon]);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* <Modal
        show={show && itemExists && !checkRepeat} // Show the modal when itemExists and checkRepeat is false
        onHide={handleClose}
        centered
        className={`repeat-custom ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <div className="content">
            <div className="lottie-ani">
              <Player autoplay loop src={RepeatLottie}></Player>
            </div>
            <h3>Repeat the customization?</h3>
            <p>{itemName}</p>
            <div className="btn-div">
              <button className="brow-menu" onClick={repeatItemAdd}>
                Repeat Last
              </button>
              <button className="ill-choose" onClick={handleClose}>
                I’ll Choose
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

// Repeat Custom Popup End

//  Repeat Custom Popup Start

export function ClearBasket() {
  const { setShowPreorder } = useContext(RestaurantContext);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("cartQty");
    localStorage.removeItem("discount");
    localStorage.removeItem("gift");
  };

  useEffect(() => {
    if(show===true){
      setShowPreorder(false);
    }
  }, [show]);

  let existingCartName = "";
  let existingCart = localStorage.getItem("cart");

  useEffect(() => {
    if (existingCart === "undefined") {
      localStorage.setItem("cart", "[]");
      existingCart = localStorage.getItem("cart");
    }
    if (existingCart) {
      const parsedCart = JSON.parse(existingCart) || [];
      // Parse the JSON string
      const clientId = localStorage.getItem("clientId");

      if (parsedCart.length > 0 && clientId !== null) {
        // Check if clientId exists and the parsedCart is an array
        const existingCartIndex = parseFloat(parsedCart[0]["clientId"]);
        existingCartName = parsedCart[0]["clientName"];

        if (parseFloat(clientId) !== existingCartIndex) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }
  }, [existingCart]);
  const handleHide = () => {
    setShow(false);
  };

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`clear-basket ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleHide}>
            <MdOutlineCancel />
          </span>
          <div className="content">
            <h3>Clear basket?</h3>
            <p>
              This will clear your existing basket with {existingCartName},{" "}
              <br /> and start a new basket with{" "}
              {localStorage.getItem("clientName")}
            </p>
            <div className="btn-div">
              <button className="cancel" onClick={handleHide}>
                Cancel
              </button>
              <button className="c-basket" onClick={handleClose}>
                Clear Basket
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Repeat Custom Popup End
//  Repeat Custom Popup Start

export function ResetCart() {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };

  const handleResetCart = () => {
    setShow(false);
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("cartQty");
    localStorage.removeItem("discount");
    localStorage.removeItem("gift");
  };

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`reset-cart ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
          <div className="content">
            <h3>Reset Cart?</h3>
            <p>
              Some of the items on the menu cannot be <br /> picked up. Do you
              really want to restart?
            </p>
            <div className="btn-div">
              <button className="reset-cart" onClick={handleResetCart}>
                Reset
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Repeat Custom Popup End
