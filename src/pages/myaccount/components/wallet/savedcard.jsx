// *******~ Import ~******** //
// React
import React, { useState, useEffect } from "react";
// Assets
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
// Components
// import BackBtn from "../backbtn";
import { GoBack } from "../backbtn";
// CSS
import "./css/savedcard.scss";
// Images
import CardLogo from "./img/savecard.webp";
import DeletesvgImg from "./img/delete-red.svg";
// Icons
import { BsFillPlusCircleFill } from "react-icons/bs";
// Json
import SaveCardsData from "./savedcards.json";
// *******~ Import ~******** //

// Redux wallet history
import { connect } from "react-redux";
import { getSaveCard } from "../../../../actions/myaccount/wallet/getSaveCardActions";
import { deleteSaveCard } from "../../../../actions/myaccount/wallet/deleteSaveCardActions";
import { updatePrimarySaveCard } from "../../../../actions/myaccount/wallet/updatePrimarySaveCardActions";

const SavedCards = ({
  savecard,
  dsavecard,
  error,
  userData,
  getSaveCard,
  deleteSaveCard,
  upsavecard,
  updatePrimarySaveCard,
}) => {
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
    navigateto("/myaccount/savedcards");
  }
  // location change on responsive

  useEffect(() => {
    if (userData) {
      getSaveCard({ customer_id: userData.customerId, body: "Your body" });

      if (dsavecard && dsavecard.status === true) {
        getSaveCard({ customer_id: userData.customerId, body: "Your body" });
      }

      if (upsavecard && upsavecard.status === true) {
        getSaveCard({ customer_id: userData.customerId, body: "Your body" });
      }
    }
  }, [
    userData,
    getSaveCard,
    dsavecard,
    deleteSaveCard,
    upsavecard,
    updatePrimarySaveCard,
  ]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle loading state
  // if (!savecard && !error) {
  //   return <div>Loading...</div>;
  // }

  const handleDelete = (customerId, paymentMethodId) => {
    // Call the deleteCard action with the customerId and paymentMethodId values
    deleteSaveCard({
      customer_id: customerId,
      payment_method_id: paymentMethodId,
    });
  };

  const setPrimary = (fingerPrint) => {
    // Call the deleteCard action with the customerId and paymentMethodId values
    updatePrimarySaveCard({
      customer_id: userData.customerId,
      finger_print: fingerPrint,
    });
  };

  const savecarddatas = savecard?.data?.cardDetail; // Assign to a separate variable
  //const savecardcounts = savecard.data.saveCardCount; // Assign to a separate variable

  return (
    <>
      <section className="save-cards">
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
            <Col xxl={12}>
              <div className="cards">
                {savecarddatas &&
                  savecarddatas?.map((SaveCardsDatas, index) => (
                    <div className="card-list">
                      <div className="img-number">
                        <Image src={SaveCardsDatas?.brand} />
                        <div className="number-exp">
                          <p>{SaveCardsDatas.card}</p>
                          <span>Expires on {SaveCardsDatas?.expYear}</span>
                        </div>
                      </div>
                      <div className="del-prime">
                        <Button
                          className="delet-btn"
                          onClick={() =>
                            handleDelete(
                              userData.customerId,
                              SaveCardsDatas?.paymentMethodId
                            )
                          }
                        >
                          <Image src={DeletesvgImg} />
                        </Button>
                        <Button
                          className={
                            "setas-btn " +
                            (SaveCardsDatas?.primary == 1 ? "active" : null)
                          }
                          onClick={() => setPrimary(SaveCardsDatas?.fingerPrint)}
                        >
                          {SaveCardsDatas?.primary == 1
                            ? "Primary"
                            : "Set as Primary"}
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </Col>

            <Col xxl={12}>
              <div className="add-btn">
                <Link to="../addcard">
                  Add New <BsFillPlusCircleFill />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  savecard: state.savecard.savecard, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
  dsavecard: state.dsavecard.dsavecard, // delete save card variable
  upsavecard: state.upsavecard.upsavecard, // update save card variable
});

const mapDispatchToProps = {
  getSaveCard,
  deleteSaveCard,
  updatePrimarySaveCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedCards);
