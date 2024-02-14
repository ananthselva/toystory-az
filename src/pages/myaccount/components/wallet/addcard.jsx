// *******~ Import ~******** //
// React
import React, { useState, useContext, useEffect, useMemo } from "react";
// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useLocation } from "react-router-dom";
// Components
import ThemeContext from "../../../../common/theme/components/contexts/themecontexts";
import { GoBack } from "../backbtn";
// CSS
import "./css/addcard.scss";
import "./css/addpopup.scss";
// Images
import CardImg from "./img/Credit_Card.svg";
import AddPopupImg from "./img/addpopup.svg";
// Icons
import { BsFillPlusCircleFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
// *******~ Import ~******** //

// Stripe Code for import

import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

// Stripe Code for import

import { connect } from "react-redux";
import { addSaveCard } from "../../../../actions/myaccount/wallet/addSaveCardActions";

const CreatePaymentMethod = ({ addnewcard }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    // });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardExpiryElement, CardNumberElement),
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    addnewcard(paymentMethod.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="card-element-container">
        <CardElement options={{ style: cardElementStyle }} />
      </div> */}

      {/* <fieldset className='FormGroup'>
                <div className="FormRow">
                    <CardNumberElement  options={{ style: cardElementStyle }} />
                </div>
            </fieldset>
            <fieldset className='FormGroup'>
                <div className="FormRow">
                    <CardExpiryElement options={{ style: cardElementStyle }} />
                </div>
      </fieldset> */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Card Number</Form.Label>
        <CardNumberElement options={{ style: cardElementStyle }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Expires on</Form.Label>
        <CardExpiryElement options={{ style: cardElementStyle }} />
      </Form.Group>

      {/* <button type="submit" disabled={!stripe || !elements}>
        Create Payment Method
      </button> */}
      <div className="submit-btn">
        <Button variant="primary" type="submit" disabled={!stripe || !elements}>
          Add Card <BsFillPlusCircleFill />
        </Button>
      </div>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const AddCard = ({ error, userData, addSaveCard, adsavecard, paymentId }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [savecarderror, setSavecarderror] = useState(null);

  useEffect(() => {
    if (adsavecard && !error) {
      const SavecardStatus = adsavecard.status;
      const Savecardmessage = adsavecard.message;
      SavecardStatus
        ? setShow(SavecardStatus)
        : setSavecarderror(Savecardmessage);
    }
  }, [adsavecard, error]);

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
    navigateto("/myaccount/addcard");
  }
  // location change on responsive

  //const wallethistorydatas = wallethistory.data; // Assign to a separate variable

  const addnewcard = useMemo(
    () => async (paymentId) => {
      // Call the addSaveCard action with the customerId and paymentMethodId values
      await addSaveCard({
        customer_id: userData.customerId,
        payment_method_id: paymentId,
      });
      // Code to trigger after the payment method is created
      // ...
    },
    [addSaveCard, userData]
  );

  // stripe obejcte load
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const loadStripeObject = async () => {
      const stripeObject = await loadStripe(
        "pk_live_DIodJvzwckwG0omwLcjh3E2k00A880PBDB"
      );
      setStripe(stripeObject);
    };

    loadStripeObject();
  }, []);

  // stripe obejcte load

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle loading state

  if (!userData) {
    navigateto("/");
    // return <div>Loading...</div>;
  }

  return (
    <>
      <section className="add-card">
        {width > breakpoint ? (
          !location.pathname.includes("/myaccount") ? (
            <>
              <GoBack name="Back to Save Card" />
            </>
          ) : null
        ) : (
          <>
            <GoBack name="Back to Save Card" />
          </>
        )}
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xxl={12}>
              <h3 className="heading">Add a Card</h3>
            </Col>
            <Col xs={12} sm={10} md={12} lg={12} xl={12} xxl={12}>
              {stripe && (
                <Elements stripe={stripe}>
                  <CreatePaymentMethod addnewcard={addnewcard} />
                </Elements>
              )}

              <div> {savecarderror} </div>

              {/* <AddForm addnewcard={addnewcard} />
               */}
            </Col>
          </Row>
        </Container>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          id="add-card-popup"
          className={theme === "dark" ? "dark-popup" : null}
        >
          <Modal.Body>
            <Button className="cancel-btn" onClick={handleClose}>
              <ImCancelCircle />
            </Button>
            <Image src={AddPopupImg} fluid />
            <p>Your card details have been saved successfully!</p>
          </Modal.Body>
        </Modal>

        <Image className="card-img" src={CardImg} fluid />
      </section>
    </>
  );
};

const cardElementStyle = {
  base: {
    fontSize: "16px",
    fontFamily: "SegoeUI-SemiBold",
    color: "#204356",
    border: "1px solid #ddd", // Add border style here
  },

  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a",
  },
};

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: 500,
      border: "1px solid #ddd", // Add border style here
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "26px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "black" },
      "::placeholder": { color: "black" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "black",
    },
  },
};

function AddForm({ addnewcard }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="text" placeholder="1234 1234 1234 1234" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Expires on</Form.Label>
        <Form.Control type="text" placeholder="MM / YY" />
      </Form.Group>
      <div className="submit-btn">
        <AddCardPopup addnewcard={addnewcard} />
      </div>
    </Form>
  );
}

function AddCardPopup({ addnewcard }) {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => addnewcard("pm_1NOwjEHGEu8wlVR05v1EPh6r")}
      >
        Add Card <BsFillPlusCircleFill />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        id="add-card-popup"
        className={theme === "dark" ? "dark-popup" : null}
      >
        <Modal.Body>
          <Button className="cancel-btn" onClick={handleClose}>
            <ImCancelCircle />
          </Button>
          <Image src={AddPopupImg} fluid />
          <p>Your card details have been saved successfully!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  adsavecard: state.adsavecard.adsavecard, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
});

const mapDispatchToProps = {
  addSaveCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
