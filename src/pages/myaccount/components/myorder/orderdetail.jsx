// *******~ Import ~******** //
// React
import React, { useState, useEffect } from "react";
// Assets
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
// Components
// import BackBtn from "../backbtn";
import { GoBack } from "../backbtn";
// CSS
import "./css/orderdetail.scss";
// Images
import ScooterIcon from "./img/scooter.svg";

// Icons
// *******~ Import ~******** //

// Redux wallet history
import { connect } from "react-redux";
import { getOrderDetail } from "../../../../actions/myaccount/order/orderDetailActions";

const OrderDetailPage = ({ orderdetail, error, userData, getOrderDetail }) => {
  const navigate = useNavigate();
  // responsive
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const location = useLocation();

  const Oid = location.state.GetOId;
  const Cid = location.state.GetCId;

  // console.log("Oid");
  // console.log(location);
  // console.log(Oid);
  // console.log(Oid);

  // get the data from API
  useEffect(() => {
    getOrderDetail({ order_id: Oid, client_id: Cid });
  }, [getOrderDetail, Oid, Cid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!orderdetail) {
    return <div>Loading: {orderdetail}</div>;
  }

  const OrderStatusURL = "../orderstatus";

  const navigateToOrderStatus = () => {
    // let FindData = OrderDetails.find((e) => e.Id === GetId);
    navigate(OrderStatusURL);
  };
  const orderDetailItemData = orderdetail.message.item; // Assign to a separate variable
  const orderdetaildata = orderdetail.message.order; // Assign to a separate variable
  const orderdetailuser = orderdetail.message.user; // Assign to a separate variable
  const orderdetailrestaurant = orderdetail.message.restaurant; // Assign to a separate variable

  return (
    <>
      <section
        className="order-detail"
        id={
          width > breakpoint && !location.pathname.includes("/myaccount")
            ? "no-sidebar"
            : null
        }
      >
        {width > breakpoint ? (
          !location.pathname.includes("/myaccount") ? (
            <>
              <GoBack name="Back to My Order" />
            </>
          ) : null
        ) : (
          <>
            <GoBack name="Back to My Order" />
          </>
        )}

        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <div className="orders">
                <h3 className="table-title">Order Details</h3>
                <Table responsive className="orders-table">
                  <tbody>
                    {orderDetailItemData &&
                      orderDetailItemData?.map((Detail, index) => (
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
              </div>
              <div className="details">
                <Table responsive className="details-table">
                  <tbody>
                    {orderdetaildata?.orderSubtotalAmount && (
                      <tr>
                        <td>
                          <p>Sub Total</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.orderSubtotalAmount}</p>
                        </td>
                      </tr>
                    )}

                    {orderdetaildata?.promo && (
                      <tr>
                        <td>
                          <p>Promo</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.promo}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.voucherDiscount && (
                      <tr>
                        <td>
                          <p>Voucher</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.voucherDiscount}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.discount && (
                      <tr>
                        <td>
                          <p>Discount</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.discount}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.deliveryCharge && (
                      <tr>
                        <td>
                          <p>Delivery Charge</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.deliveryCharge}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.serviceCharge && (
                      <tr>
                        <td>
                          <p>Service Charge</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.serviceCharge}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.baggage && (
                      <tr>
                        <td>
                          <p>Bag Surcharge</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.baggage}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.driverTip && (
                      <tr>
                        <td>
                          <p>Driver Tip</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.driverTip}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.donation && (
                      <tr>
                        <td>
                          <p>Donation </p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.donation}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.extraDonation && (
                      <tr>
                        <td>
                          <p>Extra Donation </p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.extraDonation}</p>
                        </td>
                      </tr>
                    )}
                    {orderdetaildata?.roundAmount && (
                      <tr>
                        <td>
                          <p>Roundup</p>
                        </td>
                        <td>
                          <p>{orderdetaildata?.roundAmount}</p>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td>
                        <span>Total</span>
                      </td>
                      <td>
                        <span>{orderdetaildata?.orderTotalAmount}</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                {orderdetaildata?.orderStatus === "reorder" && (
                  <div className="reorder-btn">
                    <Button>Reorder</Button>
                  </div>
                )}

                {orderdetaildata?.orderStatus === "tracking" && (
                  <div className="tracking-btn">
                    <Button onClick={() => navigateToOrderStatus()}>
                      Tracking
                    </Button>
                  </div>
                )}
                {orderdetaildata?.orderType === "Delivery" && (
                  <div className="delivery-to">
                    <Image src={ScooterIcon} />
                    <span> Delivered to: </span>
                    <p>
                      {orderdetailuser.dno}, {orderdetailuser.add1},{" "}
                      {orderdetailuser.add2}, {orderdetailuser.postcode}
                    </p>
                  </div>
                )}

                {orderdetaildata?.orderType === "Collection" && (
                  <div className="delivery-to">
                    <Image src={ScooterIcon} />
                    <span> Collection From: </span>
                    <p>
                      {" "}
                      {orderdetailrestaurant.takeaway_name},
                      {orderdetailrestaurant.b_hno},{" "}
                      {orderdetailrestaurant.b_city},{" "}
                      {orderdetailrestaurant.b_postcode}
                    </p>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  orderdetail: state.orderdetail.orderdetail, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
});

const mapDispatchToProps = {
  getOrderDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailPage);
