import React, { useState, useEffect, useContext, createContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { MdOutlineCancel } from "react-icons/md";
import "./css/loyalty-popup.scss";
import "./css/counter.scss";
import { TiPlus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { Button } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { OrderFlow } from "../../App";
import {
  cartStore,
  cartRemoveItem,
  cartRemoveAllItem,
} from "../../actions/menu/cartAction";

export const LoyaltyContext = createContext({});
export const LoyaltyData = () => useContext(LoyaltyContext);

function Loyalty({ loyalty, loyaltyPoint }) {
  const [show, setShow] = useState(false);
  const [balancePoint, setBalancePoint] = useState(loyaltyPoint);
  const [addedItem, setAddedItem] = useState([]);
  const cartJSON = localStorage.getItem("cart");
  const parsedCart = cartJSON ? JSON.parse(cartJSON) : "";

  useEffect(() => {
    // Filter the cart items with loyalty === 1 and add them to the addedItems array
    if (parsedCart && Array.isArray(parsedCart)) {
      const particularData = parsedCart.filter((cart) => cart.loyalty === 1);

      // Update the state with the filtered items
      setAddedItem(
        particularData.map((cart) => ({
          itemId: cart.itemId,
          count: cart.count,
        }))
      );
    }
  }, [parsedCart]);

  return (
    <>
      <LoyaltyContext.Provider
        value={{
          loyaltyPoint,
          loyalty,
          show,
          setShow,
          balancePoint,
          setBalancePoint,
          addedItem,
          setAddedItem,
        }}
      >
        <LoyaltyContent />
      </LoyaltyContext.Provider>
    </>
  );
}

export default Loyalty;

function LoyaltyContent() {
  const { getOrderMode, restaurant } = OrderFlow();
  const [showFirstImage, setShowFirstImage] = useState(true);

  const {
    loyaltyPoint,
    loyalty,
    show,
    setShow,
    balancePoint,
    setBalancePoint,
    addedItem,
    setAddedItem,
  } = LoyaltyData();

  const handleClose = () => {
    setShowFirstImage(true);
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstImage(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [showFirstImage]);

  async function addLoyaltyItems(params) {
    if (balancePoint >= 0) {
      try {
        await Promise.all([
          cartStore(params, restaurant.discount, getOrderMode),
        ]);
        addLoyalty(params);
      } catch (error) {
        // Handle any errors that occur during cartStore
        console.error(error);
      }
    }
  }

  function addLoyalty(cart) {
    setBalancePoint((prevBalance) => Number(prevBalance) - Number(cart.point));

    // Check if an item with the same itemId already exists in addedItem
    const updatedItems = addedItem.map((item) => {
      if (item.itemId === cart.itemId) {
        return {
          ...item,
          count: item.count + 1, // Increase the count for the existing item
        };
      }
      return item;
    });

    // If the item doesn't exist, add it to the array
    if (!updatedItems.some((item) => item.itemId === cart.itemId)) {
      updatedItems.push({
        itemId: cart.itemId,
        count: 1,
      });
    }
    setAddedItem(updatedItems);
  }

  async function minusLoyaltyItems(params) {
    if (loyaltyPoint > balancePoint) {
      params["loyalty"] = 1;
      params["gift"] = 0;
      params["addonName"] = "";

      for (const item of addedItem) {
        const cartJSON = localStorage.getItem("cart");
        const parsedCart = cartJSON ? JSON.parse(cartJSON) : "";
        const particularData = parsedCart.find(
          (cart) =>
            cart.itemId === item.itemId &&
            cart.itemId === params.itemId &&
            cart.loyalty === 1
        );
        try {
          if (particularData) {
            if (particularData.count === 1) {
              await Promise.all([
                cartRemoveAllItem(
                  particularData,
                  restaurant.discount,
                  getOrderMode
                ),
              ]);
            } else {
              await Promise.all([
                cartRemoveItem(
                  particularData,
                  restaurant.discount,
                  getOrderMode
                ),
              ]);
            }
          }
        } catch (error) {
          // Handle any errors that occur during cartRemoveAllItem or cartRemoveItem
          console.error(error);
        }
      }
      minusLoyalty(params);
    }
  }

  function minusLoyalty(cart) {
    setBalancePoint((prevBalance) => Number(prevBalance) + Number(cart.point));
    // Check if an item with the same itemId already exists in addedItem
    const updatedItems = addedItem.map((item) => {
      if (item.itemId === cart.itemId && item.count > 0) {
        return {
          ...item,
          count: item.count - 1, // Increase the count for the existing item
        };
      }
      return item;
    });

    // If the item doesn't exist, add it to the array
    if (!updatedItems.some((item) => item.itemId === cart.itemId)) {
      updatedItems.push({
        itemId: cart.itemId,
        count: 1,
      });
    }
    setAddedItem(updatedItems);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Collect
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="loyalty-popup"
      >
        <span className="close-btn" onClick={handleClose}>
          <MdOutlineCancel />
        </span>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="ponts">
            <div className="pop-title">Collect your Loyalty Points Rewards</div>
            <Container>
              <Row>
                <Col>
                  <div className="title-points">
                    <div className="pts">Your point is : {balancePoint}</div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <div className="title">
                    <div className="pts">Points</div>
                    <div className="pts">Item</div>
                    <div className="pts">Rewards</div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="flex-flex">
              <Container>
                <Row>
                  {loyalty.map((data, index) => (
                    <Col md={12} key={index}>
                      <div className="full">
                        {/* {showFirstImage ? (
                          <div className="burger-img">
                            <img src={offerGif} alt="" />
                          </div>
                        ) : ( */}
                        <div className="red-coupon">
                          {/* <img src={bgred} alt="" /> */}
                          <div className="values-values">{data.point} pts</div>
                        </div>
                        {/* )} */}
                        <div className="image">
                          <div className="gif">
                            <img src={data.image} alt="" />
                          </div>
                          <div className="pts">
                            <div className="item-name">{data.itemName}</div>
                            <div className="earned">
                              You earned {data.point} points
                            </div>
                          </div>
                        </div>
                        <div className="count-count">
                          {addedItem.some(
                            (item) => item.itemId === data.itemId
                          ) ? (
                            <>
                              <div
                                className="count-box"
                                onClick={() => minusLoyaltyItems(data)}
                              >
                                <MdDelete />
                              </div>
                              <p className="count-style">
                                {addedItem
                                  .filter((item) => item.itemId === data.itemId)
                                  .map((item, index) => item.count)}
                              </p>
                              {parseFloat(data.point) <=
                                parseFloat(balancePoint) && (
                                <div
                                  className="count-box"
                                  onClick={() => addLoyaltyItems(data)}
                                >
                                  <TiPlus />
                                </div>
                              )}
                            </>
                          ) : (
                            <Button onClick={() => addLoyaltyItems(data)}>
                              <div className="add-more">
                                <IoIosAddCircle />
                                <div className="free">Add Free</div>
                              </div>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
