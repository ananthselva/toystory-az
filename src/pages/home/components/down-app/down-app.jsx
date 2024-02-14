// *******~ Import ~******** //
import React, { useEffect, useState } from "react";
// React
// Assets
import { Container, Row, Col, Image, Form, InputGroup } from "react-bootstrap";
// Components
import Title from "../assets/title";
// CSS
import "./down-app.scss";
// Images
import MobileScreen from "./img/discount-highlight.png";
import GooglePlay from "./img/gplay.svg";
import AppleStore from "./img/apple.svg";
// Icons
// *******~ Import ~******** //

// Redux home page code
import { connect } from "react-redux";
import { sendAppLink } from "../../../../actions/home/sendAppLinkAction";

const AppLink = ({ sendAppLink, isLoading, error, response }) => {
  const [formData, setState] = useState({
    phone_number: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendAppLink(formData);
  };

  useEffect(() => {
    if (response) {
      setState({
        phone_number: "",
      });
    }
  }, [response]);

  return (
    <>
      <section className="down-app">
        <Container>
          <Row className="justify-content-around align-items-center">
            <Col xxl={4} xs={10} sm={8} md={6} lg={5} xl={5}>
              <Image src={MobileScreen} fluid />
            </Col>
            <Col xxl={4} xs={12} sm={12} md={6} lg={5} xl={5}>
              <Title
                title={
                  <>
                    Find, Order and track in <br /> the app.
                  </>
                }
              />
              <p>
                No more waiting in lines or for your order to be cooked. Just
                select your preferred eatery, place your order, and we'll notify
                you the moment it's ready to be picked up. Enjoy the best of
                your city's culinary delights with time to spare!
              </p>

              {error && <p>Error: {error}</p>}

              <Form method="post" onSubmit={handleSubmit}>
                <InputGroup className="app-form-group">
                  <InputGroup.Text id="basic-addon1">+44</InputGroup.Text>
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
                    name="phone_number"
                    required
                    value={formData.phone_number}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </InputGroup>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Processing" : "Receive"}
                </button>
              </Form>
              <ul>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.fusionkitchen">
                    <Image src={GooglePlay} fluid />
                  </a>
                </li>
                <li>
                  <a href="https://apps.apple.com/in/app/fusion-kitchen/id1485360740">
                    <Image src={AppleStore} fluid />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.sendAppLink.isLoading,
  response: state.sendAppLink.response,
  error: state.sendAppLink.error,
});

const mapDispatchToProps = {
  sendAppLink,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLink);
