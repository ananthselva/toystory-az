// *******~ Import ~******** //
// React
import { useState } from "react";
// Assets
import { Row, Col, Button } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import DeliveryLottie from "./img/Delivery.json";
import Form from "react-bootstrap/Form";
// Components
// CSS
// Images
// Icons
// *******~ Import ~******** //

// Redux home page code
import { connect } from "react-redux";
import { suggestRestaurant } from "../../actions/restaurant/suggestAction";

const SuggestTakeaway = ({
  suggestRestaurant,
  isLoading,
  error,
  response,
  postCode,
}) => {
  const [validated, setValidated] = useState(false);
  const userAgent = navigator.userAgent;
  const [formData, setState] = useState({
    name: "",
    email: "",
    restaurant_name: "",
    restaurant_phone: "",
    postcode: postCode,
    ip: userAgent,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    suggestRestaurant(formData);
  };

  return (
    <>
      <section className="suggest-takeaway-form">
        <>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={12} xl={5} xxl={5}>
              <div className="lottie-ani">
                <Player autoplay loop src={DeliveryLottie}></Player>
                <p>
                  We currently don’t <br /> serve at <span>{postCode}</span>
                </p>
              </div>
            </Col>
            <Col xxl={7} xs={12} sm={12} md={12} lg={12} xl={7}>
              <div className="sign-up-form">
                <h5>
                  Suggest your favourite takeaway in your area <br />
                  and help us get them listed soon!
                </h5>
                <p>
                  Please enter your email ID and we shall notify you when we are
                  there.
                </p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col xxl={12}>
                      <h3>Your Details</h3>
                    </Col>
                    <Col xxl={6} lg={6} md={6}>
                      <Form.Control
                        placeholder="Your name"
                        required
                        name="name"
                        autoComplete="off"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xxl={6} lg={6} md={6}>
                      <Form.Control
                        type="email"
                        placeholder="Email Id"
                        required
                        name="email"
                        autoComplete="off"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xxl={12}>
                      <h3>Restaurant Details</h3>
                    </Col>
                    <Col xxl={6} lg={6} md={6}>
                      <Form.Control
                        placeholder="Restaurant Name"
                        required
                        name="restaurant_name"
                        autoComplete="off"
                        value={formData.restaurant_name}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xxl={6} lg={6} md={6}>
                      <Form.Control
                        placeholder="Phone Number"
                        type="text"
                        minLength={10}
                        maxLength={11}
                        onKeyPress={(event) => {
                          const charCode = event.which || event.keyCode;
                          if (charCode < 48 || charCode > 57) {
                            event.preventDefault();
                          }
                        }}
                        onFocus={(event) => {
                          event.target.placeholder = "";
                        }}
                        onBlur={(event) => {
                          event.target.placeholder = "Phone Number";
                        }}
                        required
                        name="restaurant_phone"
                        autoComplete="off"
                        value={formData.restaurant_phone}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xxl={6} lg={6} md={6}>
                      <Button type="submit">Submit</Button>
                    </Col>
                    <Col xxl={12}>
                      <p>
                        If you are a Restaurant / Takeaway owner.
                        <span> SIGN UP!</span>
                      </p>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.suggestRestaurant.isLoading,
  response: state.suggestRestaurant.response,
  error: state.suggestRestaurant.error,
});

const mapDispatchToProps = {
  suggestRestaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestTakeaway);
