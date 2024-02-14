// *******~ Import ~******** //
// React
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// Assets
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate, useLocation } from "react-router-dom";
// Components
import { GoBack } from "../backbtn";
// CSS
import "./css/history.scss";
// Images
// Icons
// *******~ Import ~******** //
// Redux wallet history 
import { connect } from 'react-redux';
import { getWalletHistory } from '../../../../actions/myaccount/wallet/walletHistoryActions';

  const WalletHistory = ({ wallethistory,error,userData ,getWalletHistory }) => {


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
  

  

  // location change on responsive
  const navigateto = useNavigate();
  const location = useLocation();
  if (!location.pathname.includes("/myaccount") && width > breakpoint) {
    navigateto("/myaccount/wallethistory");
  }
  // location change on responsive

  // get the data from API
 
   useEffect(() => {
    if (userData) {
      getWalletHistory({ customer_id: userData.customerId, body: 'Your body' });
    }
  }, [userData, getWalletHistory]);

  
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // Handle loading state
  // if (!wallethistory && !error) {
  //   return <div>Loading...</div>;
  // }

  // Handle loading state

  if (!userData) {
      navigateto("/");
   // return <div>Loading...</div>;
  }


  const wallethistorydatas = wallethistory?.data; // Assign to a separate variable
 


  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
      display:none;
    }
    
  `}</style>
      </Helmet>
      <section className="wallet-history">
        {width > breakpoint ? (
          !location.pathname.includes("/myaccount") ? (
            <>
              <GoBack name="Back to Wallet" />
            </>
          ) : null
        ) : (
          <>
            <GoBack name="Back to Wallet" />
          </>
        )}
        <Container>
          <Row>
            {width > breakpoint ? (
              <>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>History</th>
                        <th>Date</th>
                        <th>Order ID</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {wallethistorydatas?.map((HistoryData, index) => (
                          <>
                            <tr key={index}>
                              <td>{HistoryData?.History}</td>
                              <td>{HistoryData?.date}</td>
                              <td>#{HistoryData?.orderId}</td>
                              <td
                                className={
                                  HistoryData?.amount.charAt(0) === "-"
                                    ? "minus"
                                    : null
                                }
                              >
                                {HistoryData?.amount}
                              </td>
                            </tr>
                          </>
                        ))}
                      </>
                    </tbody>
                  </Table>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <>
                    {wallethistorydatas?.map((HistoryData, index) => (
                      <div className="wallet-his-box">
                        <div className="history-id">
                          <h6>{HistoryData?.History}</h6>
                          <h6>#{HistoryData?.orderId}</h6>
                        </div>
                        <div className="date-amount">
                          <p>{HistoryData?.date}</p>
                          <h6
                            className={
                              HistoryData?.amount?.charAt(0) === "-"
                                ? "minus"
                                : null
                            }
                          >
                            {HistoryData?.amount}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  wallethistory: state.wallethistory.wallethistory, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
});

const mapDispatchToProps = {
  getWalletHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletHistory);

