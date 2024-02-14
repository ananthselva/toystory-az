// *******~ Import ~******** //
// React
import React, { useState, createContext, useEffect, useContext } from "react";
// Assets
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Image } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// Components
import ThemeContext from "../../../../../common/theme/components/contexts/themecontexts";
import ReceivedPopup from "./received-modal";
import RejectedPopup from "./rejection-modal";
import FeedbackPopup from "./feedback";
import Waiting from "./waiting";
import Prepared from "./prepared";
import PreparedStuartMob from "./prepared-stuart";
import Ready from "./ready";
import Delivery from "./delivery";
import StatusBar from "./statusbar";
import DeliveryTrack from "./delivery-track";
import DeliveryStuart from "./delivery-stuart";
import Collection from "./collection";
import { ContextWidthConsumer } from "../../../myaccount-layout";
// CSS
// Images
// Icons
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
// *******~ Import ~******** //

const ContextProvider = createContext({});
export const ContextConsumer = () => useContext(ContextProvider);

export const MasterForm = (params) => {
  const { width, breakpoint } = ContextWidthConsumer();
  const [show, setShow] = useState(false);
  const OrderData = params && params.OrderData ? params.OrderData : "";
  const OrderUserData = params.OrderUserData || "";
  const Othersdata = params.Otherdata;
  const orderdetail = params.orderdetail;

  const [currentStep, setCurrentStep] = useState("0");
  const ordertypes =
    OrderData && OrderData.orderType ? OrderData.orderType : "";
  const deliveryTypes = OrderData && OrderData.isStuart ? "Stuart" : "Delivery";

  useEffect(() => {
    setCurrentStep(OrderData.orderStatusId + 1);
  }, [OrderData]);

  const OrderDetailURL = "../orderdetail";
  const navigate = useNavigate();
  const navigateToOrderDetail = (event) => {
    const GetOId = event.target.getAttribute("Oid");
    const GetCId = event.target.getAttribute("Cid");
    navigate(OrderDetailURL, { state: { GetOId, GetCId } });
  };

  const orderdetailitemdata = orderdetail?.message?.item; // Assign to a separate variable
  const orderdetaildata = orderdetail?.message?.order; // Assign to a separate variable
  // const orderdetailuser = orderdetail?.message?.user; // Assign to a separate variable
  const orderdetailrestaurant = orderdetail?.message?.restaurant; // Assign to a separate variable

  // console.log("ordertypes");
  // console.log(ordertypes);
  // console.log("deliveryTypes");
  // console.log(deliveryTypes);
  // console.log("currentStep");
  // console.log(currentStep);
  // console.log("OrderData");
  // console.log(OrderData);

  return (
    <>
      {width > breakpoint ? (
        <>
          <div className="statusbar">
            <ContextProvider.Provider
              value={{
                currentStep,
                ordertypes,
                deliveryTypes,
                show,
                setShow,
              }}
            >
              <StatusBar OrderData={OrderData} />
              <ReceivedPopup OrderData={OrderData} />
              <RejectedPopup OrderData={OrderData} Othersdata={Othersdata} />
              <FeedbackPopup ondata={Othersdata} OrderData={OrderData} />
            </ContextProvider.Provider>
          </div>
        </>
      ) : 
      <>
      <div className="statusbar">
            <ContextProvider.Provider
              value={{
                currentStep,
                ordertypes,
                deliveryTypes,
                show,
                setShow,
              }}
            >
            <FeedbackPopup ondata={Othersdata} OrderData={OrderData} />
            </ContextProvider.Provider>
          </div>
          </>
      }

      <ContextProvider.Provider value={{ ordertypes, deliveryTypes }}>
        <div className="status-details">
          <Waiting currentStep={currentStep} OrderData={OrderData} />
          {width > breakpoint ? (
            <Prepared currentStep={currentStep} OrderData={OrderData} />
          ) : (
            <>
              {ordertypes === "Collection" ? (
                <Prepared currentStep={currentStep} OrderData={OrderData} />
              ) : ordertypes === "Delivery" ? (
                deliveryTypes === "Stuart" && OrderData.tracking_url !== "" ? (
                  <PreparedStuartMob
                    currentStep={currentStep}
                    OrderData={OrderData}
                  />
                ) : deliveryTypes === "Delivery" ||
                  (deliveryTypes === "Stuart" &&
                    OrderData.tracking_url === "") ? (
                  <Prepared currentStep={currentStep} OrderData={OrderData} />
                ) : null
              ) : null}
            </>
          )}

          {ordertypes === "Collection" ? (
            <Ready currentStep={currentStep} OrderData={OrderData} />
          ) : ordertypes === "Delivery" ? (
            deliveryTypes === "Stuart" && OrderData.tracking_url !== "" ? (
              <DeliveryStuart currentStep={currentStep} OrderData={OrderData} />
            ) : deliveryTypes === "Delivery" ||
              (deliveryTypes === "Stuart" && OrderData.tracking_url === "") ? (
              <DeliveryTrack currentStep={currentStep} OrderData={OrderData} />
            ) : null
          ) : null}

          {/* if Order is finished, below section will work current step status  4 or 12 , both collection & delivery */}

          {ordertypes === "Collection" ? (
            <Collection
              currentStep={currentStep}
              ondata={Othersdata}
              OrderData={OrderData}
            />
          ) : ordertypes === "Delivery" ? (
            <Delivery
              currentStep={currentStep}
              ondata={Othersdata}
              OrderData={OrderData}
            />
          ) : null}
        </div>
        {/*  Order help & Total order section , Estimated time section bottom section */}
      </ContextProvider.Provider>

      {OrderData === null || OrderData === "" ? (
        <></>
      ) : (
        <>
          {width > breakpoint ? (
            <>
              {" "}
              <div className="estimate-div-main">
                <div className="estimate-div">
                  <div className="time">
                    <p>{OrderData.estimatedContent}</p>
                    <span>{OrderData.tatTime}</span>
                  </div>
                  <div className="help">
                    <Help place="top" />
                  </div>
                  <div className="total">
                    <p>Total &nbsp; £{OrderData.orderTotalAmount}</p>
                    <span
                      Oid={Othersdata.order_id}
                      Cid={Othersdata.client_id}
                      onClick={navigateToOrderDetail}
                      style={{
                        cursor: "pointer",
                        color: "var(--bs-link-color)",
                        fontWeight: "600", // Set the font weight to bold
                        fontSize: "13px",
                      }}
                    >
                      View Order Details <HiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="order-details-mob">
                <h4>Your order from</h4>
                <div className="order-from">
                  <Image src={OrderData.logo} alt="client Logo" />
                  <div className="from-address">
                    <span>{orderdetailrestaurant?.takeaway_name}</span>
                    <p>
                      {" "}
                      {orderdetailrestaurant?.takeaway_name},
                      {orderdetailrestaurant?.b_hno},{" "}
                      {orderdetailrestaurant?.b_city},{" "}
                      {orderdetailrestaurant?.b_postcode}
                    </p>
                  </div>
                </div>
                <div className="collection-details">
                  <h4>
                    {ordertypes === "Collection"
                      ? "Collection"
                      : ordertypes === "Delivery"
                      ? deliveryTypes === "Stuart" ||
                        deliveryTypes === "Delivery"
                        ? "Delivery"
                        : null
                      : null}{" "}
                    Details
                  </h4>
                  <p>
                    <FaMapMarkerAlt />
                    {ordertypes === "Delivery" && (
                      <>
                        {OrderUserData.fname} {OrderUserData.lname},
                        <br />
                        {OrderUserData.dno}, {OrderUserData.add1},
                        {OrderUserData.add2}, {OrderUserData.postcode}
                        <br />
                        <a href={`tel:${OrderUserData.phone}`}>
                          {OrderUserData.phone}
                        </a>
                      </>
                    )}
                    {ordertypes === "Collection" && (
                      <>
                        {OrderUserData.fname} {OrderUserData.lname}, &nbsp;
                        <a href={`tel:${OrderUserData.phone}`}>
                          {OrderUserData.phone}
                        </a>
                      </>
                    )}
                  </p>
                </div>
                <div className="order-list">
                  <h4 className="table-title">Order Details</h4>
                  <Table responsive className="orders-table-mob">
                    <tbody>
                      {orderdetailitemdata.map((Detail, index) => (
                        <tr key={index}>
                          <td>
                            <p>{Detail.item_qty}</p>
                          </td>
                          <td>
                            <p>{Detail.item_name}</p>
                            <span>{Detail.addonList}</span>
                          </td>
                          <td>
                            <p> £ {Detail.total}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {orderdetaildata.orderSubtotalAmount && (
                    <div className="sub-total">
                      <span>Sub Total</span>
                      <span>£ {orderdetaildata.orderSubtotalAmount}</span>
                    </div>
                  )}
                  {orderdetaildata.promo && (
                    <div className="sub-total">
                      <span>Discount</span>
                      <span>£ {orderdetaildata.promo}</span>
                    </div>
                  )}
                  {orderdetaildata.voucherDiscount && (
                    <div className="sub-total">
                      <span>Voucher</span>
                      <span>£ {orderdetaildata.voucherDiscount}</span>
                    </div>
                  )}
                  {orderdetaildata.discount && (
                    <div className="sub-total">
                      <span>Discount</span>
                      <span>£ {orderdetaildata.discount}</span>
                    </div>
                  )}
                  {orderdetaildata.deliveryCharge && (
                    <div className="sub-total">
                      <span>Delivery Charge</span>
                      <span>£ {orderdetaildata.deliveryCharge}</span>
                    </div>
                  )}
                  {orderdetaildata.serviceCharge && (
                    <div className="sub-total">
                      <span>Service Charge</span>
                      <span>£ {orderdetaildata.serviceCharge}</span>
                    </div>
                  )}
                  {orderdetaildata.baggage && (
                    <div className="sub-total">
                      <span>Bag Surcharge</span>
                      <span>£ {orderdetaildata.baggage}</span>
                    </div>
                  )}
                  {orderdetaildata.driverTip && (
                    <div className="sub-total">
                      <span>Driver Tip</span>
                      <span>£ {orderdetaildata.driverTip}</span>
                    </div>
                  )}
                  {orderdetaildata.donation && (
                    <div className="sub-total">
                      <span>Donation</span>
                      <span>£ {orderdetaildata.donation}</span>
                    </div>
                  )}
                  {orderdetaildata.extraDonation && (
                    <div className="sub-total">
                      <span>Extra Donation</span>
                      <span>£ {orderdetaildata.extraDonation}</span>
                    </div>
                  )}
                  {orderdetaildata.roundAmount && (
                    <div className="sub-total">
                      <span>Roundup</span>
                      <span>£ {orderdetaildata.roundAmount}</span>
                    </div>
                  )}
                  <div className="total">
                    <span>Total</span>
                    <span>£{orderdetaildata.orderTotalAmount}</span>
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
export default MasterForm;

export function Help(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement={props.place}
        rootClose={true}
        overlay={
          <Popover
            id="popover-help"
            className={theme === "dark" ? "dark-theme" : null}
          >
            <Popover.Body>
              <ul>
                {[
                  { title: "Call Takeaway" },
                  { title: "Cancel Order" },
                  { title: "Collection Update" },
                  { title: "Amend Order" },
                ].map((data, index) => (
                  <>
                    <li>
                      <Button to="/">
                        {data.title} <MdOutlineArrowForwardIos />
                      </Button>
                    </li>
                  </>
                ))}
              </ul>
            </Popover.Body>
          </Popover>
        }
      >
        <Button>
          <AiOutlineQuestionCircle /> Order Help
        </Button>
      </OverlayTrigger>
    </>
  );
}
