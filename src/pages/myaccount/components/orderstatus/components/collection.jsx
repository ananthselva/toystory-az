// React
import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import CollectionLottie from "./lottie/collection.json";
import CollectionMobLottie from "./lottie/man-eating.json";
import { ContextWidthConsumer } from "../../../myaccount-layout";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Icons
import { RiStarSFill } from "react-icons/ri";

import { connect } from "react-redux";
import { getMyAccountFeedback } from "../../../../../actions/myaccount/orderstatus/postMyAccountFeedbackActions";

const Collection = ({
  myaccountfeedback,
  getMyAccountFeedback,
  error,
  userData,
  ondata,
  OrderData,
  currentStep,
}) => {
  const { width, breakpoint } = ContextWidthConsumer();

  const [showFeedback, setShowFeedback] = useState(
    OrderData?.orderFeedback || false
  );

  if (currentStep !== 4 && currentStep !== 12) {
    return null;
  }

  const mobilefeedback = (addData) => {
    getMyAccountFeedback({
      clientId: ondata.client_id,
      orderId: ondata.order_id,
      customerId: ondata.user_id,
      foodQuality: addData.foodQuality, // Add this line
      rating: addData.rating, // Add this line
      comments: addData.comments,
    });
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const guestAddress = localStorage.getItem("guestAddress") || "";
  const address = guestAddress ? JSON.parse(guestAddress) : "";
  const customerFname =
    userData && isLoggedIn === "true" ? userData.fname : address.firstName;

  return (
    <>
      {width > breakpoint ? (
        <>
          <div className="delivered-div">
            <div className="lottie-ani">
              <Player autoplay loop src={CollectionLottie}></Player>
            </div>
            <div className="status-content">
              <h4>Your Order has been Collected</h4>
              <p>
                Enjoy your meal & tell us your experience. <br /> Happy
                Ordering, Happy Eating!
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {showFeedback === false ? (
            <>
              <CollectionMobile
                ondata={ondata}
                OrderData={OrderData}
                mobilefeedback={mobilefeedback}
                username={customerFname}
                setShowFeedback={setShowFeedback}
              />
            </>
          ) : null}
        </>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Collection);

export function CollectionMobile(props) {
  const ondata = props.ondata;
  const OrderData = props.OrderData;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.mobilefeedback(addData);
    props.setShowFeedback(true);
  };

  const setstarval = (index, type) => {
    const updatedAddData = {
      ...addData,
      [type]: index,
    };
    setAddData(updatedAddData);
  };
  const { width, breakpoint } = ContextWidthConsumer();
  return (
    <>
      <Helmet>
        <style type="text/css">{`
       .order-status .order-details-mob{
        background-color: #ffffff;
        padding-top: 10px;
        margin-top: 30px;
       }
    `}</style>
      </Helmet>
      <div className="collection-mob">
        <div className="collection-inside">
          <div className="lottie-ani">
            <Player autoplay loop src={CollectionMobLottie}></Player>
          </div>
          <div className="collection-content">
            <h4>Enjoy your order</h4>
            <p>Hi, {props.username}, how was your meal?</p>
            <span>Rate us now</span>
          </div>
        </div>
        <div className="review-rating">
          <Form onSubmit={handleSubmit}>
            <RatingStars
              setstarval={(index) => setstarval(index, "foodQuality")}
              label="How was the food quality"
              name="quality"
            />
            <RatingStars
              setstarval={(index) => setstarval(index, "rating")}
              label="Restaurant service"
              name="service"
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={4}
                onChange={(e) =>
                  handleInputAddChange("comments", e.target.value)
                }
                placeholder="Tell us more about your experience"
              />
            </Form.Group>

            <div className="submit-btn">
              <Button type="submit">Submit Review</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

const RatingStars = (props) => {
  const [gradeIndex, setGradeIndex] = useState();
  const GRADES = ["Poor", "Fair", "Good", "Very good", "Excellent"];
  const activeStar = {
    fill: "#ffb200",
  };

  const changeGradeIndex = (index) => {
    props.setstarval(index);
    setGradeIndex(index);
  };

  return (
    <div className="rating-group">
      <p className="rating-title">{props.label}</p>
      <div className="stars">
        {GRADES.map((grade, index) => (
          <Star
            name={props.name}
            index={index + 1}
            key={grade}
            changeGradeIndex={changeGradeIndex}
            style={gradeIndex > index ? activeStar : {}}
          />
        ))}
      </div>
    </div>
  );
};
const Star = (props) => {
  const changeGrade = (e) => {
    props.changeGradeIndex(e.target.value);
  };

  return (
    <label className="star">
      <input
        type="radio"
        name={props.name}
        id={props.grade}
        value={props.index}
        className="stars_radio-input"
        onClick={changeGrade}
      />
      <RiStarSFill style={props.style} />
    </label>
  );
};
