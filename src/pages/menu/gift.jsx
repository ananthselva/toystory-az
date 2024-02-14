import { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
// import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
// import box from "./gif/gift-opens 2 .gif";
// import plus from "./gif/fi_1828925.png";
import GiftBag from "./img/gift.gif";
import { IoMdClose } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import "./css/gift.scss";
import { OrderFlow } from "../../App";
import { cartStore, cartRemoveAllItem } from "../../actions/menu/cartAction";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";

function FreeGift({ gift,setFreeGifts,setFreeGiftsDetails,setFreeGiftStatus,handleGiftShow,
  handleGiftClose,show,setShow}) {
  const selectedGift = localStorage.getItem("gift");
  const { getOrderMode, restaurant } = OrderFlow();
  const [getGift, setGift] = useState(selectedGift || "");
  const [collect,setCollect]=useState(false);
  const { theme } = useContext(ThemeContext);
  

  const total = Math.floor(localStorage.getItem("totalPrice"));
  const minOrder = gift.detail.minAmount ? Math.floor(gift.detail.minAmount) : '';
  const giftTotal=Math.floor(total);
  const giftMinOrder=Math.floor(minOrder);
  console.log(total>=minOrder);
  console.log(minOrder<total)

  const [selectedItem, setSelectedItem] = useState(null);

  const handleRadioChange = (index) => {
    setSelectedItem(index);
  };

  const handleAddToOrder = () => {
    if (selectedItem !== null) {
      const selectedGifts = gift.item[selectedItem];
      const giftItem=gift.detail;
      console.log(gift.detail);
      console.log(selectedGifts);
      addGift(selectedGifts);
      setShow(false);
      //order gift progressbar
      setFreeGifts(selectedGifts);
      setFreeGiftsDetails(giftItem)
      setFreeGiftStatus(true);
    }
  };

  async function addGift(params) {
    params["loyalty"] = 0;
    params["gift"] = 1;
    if (getGift) {
      const particularData = gift.item.find(
        (cart) => cart.itemName === getGift
      );
      particularData["loyalty"] = 0;
      particularData["gift"] = 1;
      particularData["addonName"] = "";
      particularData["count"] = 1;
      if (particularData) {
        await Promise.all([
          cartRemoveAllItem(particularData, restaurant.discount, getOrderMode),
        ]);
      }
    }
    await Promise.all([cartStore(params, restaurant.discount, getOrderMode)]);
    setGift(params.itemName);
    localStorage.setItem("gift", params.itemName);
  }

  return (
    <>
    {total>minOrder?(<>
    <Button variant="primary"   onClick={handleGiftShow}>
        Collect
      </Button>
      </>):null}
    
      <Modal
        show={show}
        onHide={handleGiftClose}
        centered
        className={`newgift-popup ${theme === "dark" && "dark-theme"}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleGiftShow}>
            <IoMdClose />
          </span>
          <div className="top-heading">
            <div className="head-content">
              <img src={GiftBag} alt="" />
              <h4>
                Nice! You get this Free with your <br /> Order
              </h4>
              <p className="desc">We’ll apply the discount at </p>
            </div>

            <div className="item-header">
              <h5>Choose One Item</h5>
              <p>Required</p>
            </div>
          </div>
          <div className="gift-item-div">
            {gift.item.map((data, index) => (
              <>
                <label className="input-div" key={index}>
                  <input
                    type="radio"
                    id="gift-item"
                    name="gift-item"
                    defaultChecked={getGift === data.itemName}
                    disabled={parseFloat(data.minPrice) > parseFloat(total)}
                    onChange={() => handleRadioChange(index)}
                  />
                  <p className="gift-name">{data.itemName}</p>
                  {parseFloat(data.minPrice) > parseFloat(total) && (
                    <span className="min-order-alert">
                      Add Items worth £
                      {(parseFloat(data.minPrice) - parseFloat(total)).toFixed(
                        2
                      )}{" "}
                      more to unlock
                    </span>
                  )}
                </label>
              </>
            ))}
          </div>
          <div className="button-div">
            <button onClick={handleAddToOrder}>
              <span>
                <BiPlus />
              </span>{" "}
              Add to Order
            </button>
            <p onClick={handleGiftClose}>No ,thanks</p>
          </div>
        </Modal.Body>
      </Modal>
    </>

    // <div className="only-button">
    //   <Button variant="primary" onClick={handleShow}>
    //     Collect
    //   </Button>

    //   <Modal
    //     show={show}
    //     onHide={handleClose}
    //     centered
    //     className="collect-rewards"
    //   >
    //     <span className="close-btn" onClick={handleClose}>
    //       <MdOutlineCancel />
    //     </span>
    //     <Modal.Body>
    //       <div className="rewards">
    //         <div className="pop-title">Collect your Gift Rewards</div>
    //         <Container>
    //           <Row>
    //             <Col>
    //               <div className="title">
    //                 <div className="pts">Gifts</div>
    //                 <div className="pts">Item</div>
    //                 <div className="pts">Rewards</div>
    //               </div>
    //             </Col>
    //           </Row>
    //         </Container>
    //         <div className="flex-flex">
    //           <Container>
    //             <Row>
    //               {gift.item.map((data, index) => (
    //                 <Col md={12} key={index}>
    //                   <div className="box">
    //                     <div className="gif">
    //                       <img src={box} alt="" />
    //                     </div>
    //                     <div className="image-cnt">
    //                       <img src={data.image} alt="" />
    //                       <div className="cnt">
    //                         <div className="name">{data.itemName}</div>
    //                       </div>
    //                     </div>
    //                     {parseFloat(minOrder) > parseFloat(total) ? (
    //                       <Button disabled>
    //                         <div className="free-free">
    //                           Need more £
    //                           {parseFloat(minOrder) - parseFloat(total)}
    //                         </div>
    //                       </Button>
    //                     ) : (
    //                       <GiftButton
    //                         data={data}
    //                         total={total}
    //                         minOrder={minOrder}
    //                         getGift={getGift}
    //                         addGift={addGift}
    //                       />
    //                     )}
    //                   </div>
    //                 </Col>
    //               ))}
    //             </Row>
    //           </Container>
    //         </div>
    //       </div>
    //     </Modal.Body>
    //     <Modal.Footer></Modal.Footer>
    //   </Modal>
    // </div>
  );
}

// function GiftButton({ data, total, minOrder, getGift, addGift }) {
//   const needMoreAmount =
//     parseFloat(minOrder) > parseFloat(total)
//       ? parseFloat(minOrder) - parseFloat(total)
//       : parseFloat(data.minPrice) - parseFloat(total);

//   return (
//     <Button disabled={parseFloat(data.minPrice) > parseFloat(total)}>
//       {needMoreAmount > 0 ? (
//         <div className="free-free">Need more £{needMoreAmount}</div>
//       ) : getGift === data.itemName ? (
//         <>
//           <div className="free-applied">Added</div>
//         </>
//       ) : (
//         <>
//           <img src={plus} alt="" />
//           <div className="free" onClick={() => addGift(data)}>
//             Add Free
//           </div>
//         </>
//       )}
//     </Button>
//   );
// }

export default FreeGift;
