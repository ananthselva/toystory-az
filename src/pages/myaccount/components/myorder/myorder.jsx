// *******~ Import ~******** //
// React
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// Assets
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
// Components
import OrderDetailJson from "./orderdetails.json";
import BackBtn from "../backbtn";
// CSS
import "./css/myorder.scss";
// Images
// Icons
// *******~ Import ~******** //

// Redux wallet history
import { connect } from "react-redux";
import { getOrderHistory } from "../../../../actions/myaccount/order/orderHistoryActions";
import { getOrderAgain } from "../../../../actions/myaccount/order/orderAgainActions";

const MyOrder = ({
  orderhistory,
  orderagain,
  error,
  userData,
  getOrderHistory,
  getOrderAgain,
  fetchOrderAgain
}) => {
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

  const OrderDetails = OrderDetailJson && OrderDetailJson;

  const OrderDetailURL = "../orderdetail";
  const navigate = useNavigate();
  const navigateToOrderDetail = async (event) => {
    const GetOId = event.target.getAttribute("Oid");
    const GetCId = event.target.getAttribute("Cid");
    navigate(OrderDetailURL, { state: { GetOId, GetCId } });
  };

  const OrderStatusURL = "../orderstatus";
  const navigateToOrderStatus = (event) => {
    const GetOId = event.target.getAttribute("Oid");
    const GetCId = event.target.getAttribute("Cid");
    navigate(OrderStatusURL, { state: { GetOId, GetCId } });
  };

  // Responsive Navigate
  const navigateto = useNavigate();
  const location = useLocation();
  if (!location.pathname.includes("/myaccount") && width > breakpoint) {
    navigateto("/myaccount/myorder");
  }
  // else if(location.pathname.includes("/myaccount/myorder") && width > breakpoint){

  // }
  // Responsive Navigate

  // get the data from API
  useEffect(() => {
    getOrderHistory({ customer_id: userData.customerId, body: "Your body" });
  }, []);
  useEffect(()=>{
    console.log(fetchOrderAgain);
    if(fetchOrderAgain && fetchOrderAgain!='' && fetchOrderAgain?.orderagain!=null){
      const orderagainData=fetchOrderAgain && fetchOrderAgain && fetchOrderAgain.orderagain?.message?.item?JSON.stringify(fetchOrderAgain.orderagain?.message?.item):[];
      localStorage.setItem("cart",orderagainData);
      let reStore=fetchOrderAgain.orderagain?.message?.item;
      console.log(reStore.length);
      if(reStore.length===1){
        console.log(reStore[0],reStore);
        localStorage.setItem("cartQty", reStore[0].count);
        localStorage.setItem("totalPrice",reStore[0].price);
        navigate('/');
      }
      else{
      const newTotalCount = reStore?.reduce(
        (countAccumulator, currentItem) => {
          return countAccumulator + currentItem.count;
        },
        0
      );
      const newTotal = reStore?.reduce(
        (countAccumulator, currentItem) => {
          return countAccumulator + currentItem.price;
        },
        0
      );

      localStorage.setItem("cartQty", newTotalCount);
      localStorage.setItem("totalPrice", newTotal);
      }
      navigate('/');
    }
  },[fetchOrderAgain]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  // console.log(orderhistory);

  // Handle loading state
  // if (!orderhistory && !error) {
  //   return <div>Loading...</div>;
  // }

  // const orderhistorydatas = orderhistory.message.totalAppliedDiscount; // Assign to a separate variable
  const orderhistorydatas = orderhistory?.message; // Assign to a separate variable

  // console.log(orderhistorydatas);
 

  const handleOrderAgain = (orderId, client_id) => {
    getOrderAgain({
      client_id: client_id,
      order_id: orderId,
    });
  };

  //   if (orderagain) {
  //     // Perform any necessary actions here based on orderagain
  //     // Then, trigger navigation to another page
  //     //navigateto("/another-page"); // Replace with your desired route
  //   }

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
      display:none;
    }
    
  `}</style>
      </Helmet>
      <section className="my-order">
        {width > breakpoint ? null : <BackBtn />}
        <Container>
          {width > breakpoint ? (
            <>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Table responsive className="my-order-table">
                    <thead>
                      <tr>
                        <th>Takeaway</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {orderhistorydatas?.map((OrderDetail, index) => (
                          <>
                            <tr key={index}>
                              <td>{OrderDetail?.takeawayName}</td>
                              <td>{OrderDetail?.orderedDate}</td>
                              <td> £ {OrderDetail?.orderTotalAmount}</td>
                              <td>
                                <div className="btn-div">
                                  <Button
                                    Oid={OrderDetail?.orderId}
                                    Cid={OrderDetail?.clientId}
                                    onClick={navigateToOrderDetail}
                                    className="view-bill-btn"
                                  >
                                    View Bill
                                  </Button>
                                  {OrderDetail.orderStatus == "reorder" ? (
                                    <>
                                      <Button
                                        className="reorder-btn"
                                        // to={OrderDetail.ViewStatus}
                                        onClick={() =>
                                          handleOrderAgain(
                                            OrderDetail.orderId,
                                            OrderDetail.clientId
                                          )
                                        }
                                      >
                                        Reorder
                                      </Button> 
                                    </>
                                  ) : (
                                    <>
                                      <Button
                                        className="view-status-btn btn"
                                        Oid={OrderDetail.orderId}
                                        Cid={OrderDetail.clientId}
                                        onClick={navigateToOrderStatus}
                                      >
                                        View Status
                                      </Button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          </>
                        ))}
                      </>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <div className="my-order-mob">
                    <div className="order-heading">
                      <p>Takeaway</p>
                      <p>Date</p>
                      <p>Total</p>
                    </div>

                    <>
                      {orderhistorydatas?.map((OrderDetail, index) => (
                        <div className="order-list">
                          <div className="detail-caption">
                            <p>{OrderDetail?.takeawayName}</p>
                            <p>{OrderDetail?.orderedDate}</p>
                            <p>{OrderDetail?.orderTotalAmount}</p>
                          </div>
                          <div className="btn-div">
                            <Button
                              Oid={OrderDetail?.orderId}
                              Cid={OrderDetail?.clientId}
                              onClick={navigateToOrderDetail}
                              className="view-bill-btn"
                            >
                              View Bill
                            </Button>
                            {OrderDetail.orderStatus == "reorder" ? (
                              <>
                                 <Button
                                   className="reorder-btn"
                                        // to={OrderDetail.ViewStatus}
                                        onClick={() =>
                                          handleOrderAgain(
                                            OrderDetail.orderId,
                                            OrderDetail.clientId
                                          )
                                        }
                                    >
                                        Reorder
                              </Button> 
                              </>
                            ) : (
                              <>
                                <Button
                                  className="view-status-btn"
                                  Oid={OrderDetail.orderId}
                                  Cid={OrderDetail.clientId}
                                  onClick={navigateToOrderStatus}
                                >
                                  View Status
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  orderhistory: state.orderhistory.orderhistory, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
  orderagain: state.orderagain.orderagain,
  fetchOrderAgain: state.orderagain
  ,
});

const mapDispatchToProps = {
  getOrderHistory,
  getOrderAgain,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
