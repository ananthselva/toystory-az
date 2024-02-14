import React, { useState, useContext, useEffect } from "react";
// import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ContextConsumer } from "./statusdetails";
import ThemeContext from "../../../../../common/theme/components/contexts/themecontexts";

// images
// import ConcernImg from "../img/concern.svg";
// import SuggestionImg from "../img/suggestion.svg";
// import QueryImg from "../img/query.svg";

import "./css/order-feedback.scss";

import { connect } from "react-redux";
import { getMyAccountFeedback } from "../../../../../actions/myaccount/orderstatus/postMyAccountFeedbackActions";
// Icons
import { RiStarSFill } from "react-icons/ri";

import "../../../../rate-us/rate-us.scss";

const Feedback = ({
  myaccountfeedback,
  getMyAccountFeedback,
  error,
  userData,
  ondata,
  OrderData,
}) => {
  const { theme } = useContext(ThemeContext);
  const { show, setShow, currentStep } = ContextConsumer();

  const [feedbackerror, setFeedbackerror] = useState(null);
  const [feedbackstatus, setFeedbackstatus] = useState(
    OrderData?.orderFeedback
  );

  const handleClose = () => setShow(false);

  const [addData, setAddData] = useState({
    comments: "",
    rating: "",
    foodQuality: "",
  });

  const handleInputAddChange = (field, value) => {
    setAddData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (!feedbackstatus) {
      setShow(true);
    }
  }, [feedbackstatus,OrderData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMyAccountFeedback({
      clientId: ondata.client_id,
      orderId: ondata.order_id,
      customerId: ondata.user_id,
      foodQuality: addData.foodQuality, // Add this line
      rating: addData.rating, // Add this line
      comments: addData.comments,
    });
  };

  const FormClose = () => {
    setFeedbackstatus(true);
    setShow(null);
    feedbackstatus && setShow(false);
  };

  useEffect(() => {
    if (myaccountfeedback && !myaccountfeedback.status) {
      setShow(true);
      setFeedbackerror(myaccountfeedback.message);
    }
  }, [myaccountfeedback, setShow]);

  if (myaccountfeedback) {
    if (!myaccountfeedback.status) {
      setShow(true);
    } else if (myaccountfeedback.status || !OrderData.orderFeedback) {
      setShow(null);
    }
  }

  const setstarval = (index, type) => {
    const updatedAddData = {
      ...addData,
      [type]: index,
    };
    setAddData(updatedAddData);
  };

  return (
    <>
      {currentStep === 1 || currentStep === 3 || currentStep === 5
        ? setShow(null)
        : null}
      {OrderData ? (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
            keyboard={false}
            id="order-feedback"
            className={theme === "dark" ? "dark-theme" : null}
          >
            <Modal.Body>
              <div className="content">
                <h3>Awesome, your order confirmed</h3>
                <p>
                  Your word makes Fusion Kitchen a better <br /> place for other
                  foodies
                </p>
              </div>
              <Form onSubmit={handleSubmit}>
                <RatingStars
                  setstarval={(index) => setstarval(index, "foodQuality")}
                  label="How was the food quality"
                  name="quality"
                  type="1"
                />
                <RatingStars
                  setstarval={(index) => setstarval(index, "rating")}
                  label="Restaurant service"
                  name="service"
                  type="2"
                />

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ex. I appreciate the way you serve..,"
                    onChange={(e) =>
                      handleInputAddChange("comments", e.target.value)
                    }
                  />
                  <span className="error-message">{feedbackerror}</span>
                </Form.Group>

                <div className="submit-btn">
                  <Button className="skip-btn" onClick={FormClose}>
                    Skip
                  </Button>
                  <Button className="send-btn" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  myaccountfeedback: state.myaccountfeedback.myaccountfeedback, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
});

const mapDispatchToProps = {
  getMyAccountFeedback,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

const RatingStars = (props) => {
  const [gradeIndex, setGradeIndex] = useState(null);

  const changeGradeIndex = (index) => {
    setGradeIndex(index);
    props.setstarval(index, props.type);
  };

  return (
    <div className="rating-group">
      <p className="rating-title">{props.label}</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            name={props.name}
            index={index}
            changeGradeIndex={() => changeGradeIndex(index)}
            isSelected={gradeIndex >= index}
          />
        ))}
      </div>
    </div>
  );
};

const Star = (props) => {
  return (
    <label className={`star ${props.isSelected ? 'selected' : ''}`} onClick={props.changeGradeIndex}>
      <input
        type="radio"
        name={props.name}
        value={props.index}
        className="stars_radio-input"
      />
      <RiStarSFill style={{ fill: props.isSelected ? '#ffb200' : '#ccc' }} />
    </label>
  );
};



