import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
// Assets
import Modal from "react-bootstrap/Modal";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import ClosedLottie from "./img/closed.json";
import AddFavLottie from "./img/add-fav.json";
import FavTagLottie from "./img/favorite-tag.json";
import { RestaurantContext } from "./menu-page";

import "./css/popup.scss";
// Closed Popup start
import { MdOutlineCancel } from "react-icons/md";
export const ClosedPopup = () => {
  const { closedPopup, setClosePopup } = useContext(RestaurantContext);
  const [show, setShow] = useState(closedPopup);
  const handleClose = () => setShow(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (closedPopup === true) {
      setShow(true);
      setClosePopup(false);
    }
  }, [closedPopup]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`closed-takeaway ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <div className="content">
            <div className="lottie-ani">
              <Player autoplay loop src={ClosedLottie}></Player>
            </div>
            <h3>Store is Closed</h3>
            <p>
              Sorry! This store is currently closed, <br /> Please check our
              working days
            </p>
            <div className="btn-div">
              <button className="brow-menu" onClick={handleClose}>
                Browse Menu
              </button>
              <Link to="/list" className="brow-takeaway">
                Browse Takeaway
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

// Closed Popup End

// add-favoutite Popup start

export function AddFavourite({ restaurant, Addfavshow, setAddfavshow }) {
  const handleClose = () => setAddfavshow(false);
  // const handleAddfavshow = () => setAddfavshow(true);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Modal
        show={Addfavshow}
        onHide={handleClose}
        centered
        className={`add-favoutite ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <div className="content">
            <div className="lottie-ani">
              <Player autoplay loop src={AddFavLottie}></Player>
            </div>
            <h3>Added to Favourite</h3>
            <p>
              <span>{restaurant.restaurantName}</span>&nbsp;now added to your
              favourite list
            </p>
            <div className="btn-div">
              <button className="start-order" onClick={handleClose}>
                Browse Menu
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function RemoveFavourite({
  restaurant,
  Removefavshow,
  setRemovefavshow,
}) {
  const handleClose = () => setRemovefavshow(false);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Modal
        show={Removefavshow}
        onHide={handleClose}
        className={`remove-favoutite  ${theme === "dark" ? "dark-theme" : ""}`}
        backdrop={true}
      >
        <Modal.Body>
          <div className="content">
            <p>
              <span>{restaurant.restaurantName}&nbsp;</span>
              now removed to your favourite list
            </p>
            <button onClick={handleClose}>
              <MdOutlineCancel />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Remove Favourite Popup End

// ResetCart Popup Start

export function EmptyFav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={`empty-fav ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <div className="content">
            <div className="lottie-ani">
              <Player autoplay loop src={FavTagLottie}></Player>
            </div>
            <h3>Empty Favourite List</h3>
            <p>
              You don’t have marked any <br /> Favourite Restaurant
            </p>
            <div className="btn-div">
              <Link to="/list" className="brow-takeaway">
                Browse Takeaway
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// ResetCart Popup End
