import { lazy } from "react";
import "./rate-us.scss";
// *******~ Import ~******** //
// React
import React, {
  useMemo,
  useEffect,
  createContext,
  useContext,
  useState,
} from "react";
import { useParams, Link } from "react-router-dom";

// Assets
import rate_img from "./img/layer_1.png";
// import StarRating from "./star-external";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img2 from "./img/stars.png";
// Components

// CSS
// Images
// Icons
// *******~ Import ~******** //

// Redux menu page code
import { connect } from "react-redux";
import { getFeedbackStatusDetail } from "../../actions/feedback/feedbackStatusAction";
import { createClientFeedbackDetail } from "../../actions/feedback/createClientFeedbackAction";
import Loadable from "../../router/loadable";
// lazy
const StarRating=Loadable(lazy(()=>import('./star-external')));
export const feedbackProvider = createContext({});
export const FeedbackPopupContext = () => useContext(feedbackProvider);

const Rateus = ({
  getFeedbackStatusDetail,
  createClientFeedbackDetail,
  isLoading,
  error,
  response,
  createIsLoading,
  createResponse,
  createError,
}) => {
  const { path, orderId } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState("");

  const [reason, setReason] = useState("5");
  const [rating, setRating] = useState("Tasty food");

  const formData = useMemo(() => {
    return {
      path: path,
      orderId: orderId,
    };
  }, [path, orderId]);

  useEffect(() => {
    getFeedbackStatusDetail(formData);
  }, [getFeedbackStatusDetail, formData]);

  const [feedback, setFeedback] = useState({
    clientPath: path,
    orderId: orderId,
    reason: reason,
    rating: rating,
    comment: "",
    agent: navigator.userAgent,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback({ ...feedback, [name]: value });
  };

  function SubmitForm() {
    if (feedback.comment !== "") {
      createClientFeedbackDetail(feedback);
      setIsSuccess(true);
    } else {
      setFormErrors("Comments is Required");
    }
  }

  useEffect(() => {
    if (response) {
      if (response.feedback === true) {
        setIsSuccess(true);
      }
    }
  }, [response, setIsSuccess]);

  if (!response) {
    return <FeedbackLoader />;
  }

  return (
    <>
      <div className="rate_us">
        <section className="rate_image">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <img src={rate_img} alt="" />
              </div>
            </div>
          </div>
        </section>
        {isSuccess === true ? (
          <>
            <SuccessPage path={path} />
          </>
        ) : (
          <>
            <section className="feed_green">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <h4 className="feed_text">Give us your feedback</h4>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="demo_two">
                      <h3 className="demo_cnt">
                        How was {response.restaurantName} ?
                      </h3>
                      <div className="star_flow">
                        <feedbackProvider.Provider
                          value={{
                            setReason,
                            setRating,
                            setFeedback,
                            feedback,
                          }}
                        >
                          <StarRating />
                        </feedbackProvider.Provider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <Form>
                <div className="comments_please">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-10 col-lg-10 col-md-10">
                        <h4 className="comment_heading">
                          May we have your comments please*?
                        </h4>
                        <Form.Control
                          name="reason"
                          type="text"
                          placeholder="reason"
                          value={reason}
                          style={{ display: "none" }}
                        />
                        <Form.Control
                          name="rating"
                          type="text"
                          placeholder="rating"
                          value={rating}
                          style={{ display: "none" }}
                        />
                        <Form.Control
                          as="textarea"
                          className="empty_space"
                          name="comment"
                          rows="6"
                          placeholder="Your comments"
                          value={feedback.comment}
                          onChange={handleInputChange}
                          isInvalid={!!formErrors}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors}
                        </Form.Control.Feedback>
                        <Button className="sub_btn" onClick={SubmitForm}>
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </section>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.feedbackStatus.isLoading,
  response: state.feedbackStatus.response,
  error: state.feedbackStatus.error,
  createIsLoading: state.createClientFeedback.isLoading,
  createResponse: state.createClientFeedback.response,
  createError: state.createClientFeedback.error,
});

const mapDispatchToProps = {
  getFeedbackStatusDetail,
  createClientFeedbackDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rateus);

const SuccessPage = (params) => {
  return (
    <section className="rateussuccess text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12"></div>
          <div className="ratingpart">
            <h2>Feedback Posted!</h2>
            <div className="secondimg">
              <img src={img2} alt="" className="img2" />
            </div>
            <h3>Thank you</h3>
            <p>Your Feedback has been successfully submitted.</p>
            <p>
              <Link
                to={`https://www.fusionkitchen.co.uk/${params.path}/menu`}
                className="linkto"
              >
                Place new order
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeedbackLoader = () => {
  return "Loading...";
};
