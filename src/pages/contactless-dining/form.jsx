import axios from "axios";
import { contactlessdinning } from "../../actions/static/contactlessdinningAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

const Forms = ({ contactlessdinning, error, isLoading, response }) => {
  const [formData, setState] = useState({
    name: "",
    restaurant_name: "",
    email: "",
    phone: "",
    postcode: "",
    ip: "",
    agent: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    // if (form.checkValidity() === false) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      contactlessdinning(formData);
      console.log("formData", formData);
    }

    setValidated(true);
    // }
  };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;
        setState((prevFormData) => ({
          ...prevFormData,
          ip: ipAddress,
          agent: userAgent,
        }));
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });

    if (response) {
      setState((prevFormData) => ({
        ...prevFormData,
        name: "",
        restaurant_name: "",
        email: "",
        phone: "",
        postcode: "",
        ip: "",
        agent: "",
      }));
      setValidated(true);
    }
  }, [response]);

  return (
    <section>
      <div className="full_form">
        {error && <p>Error: {error}</p>}
        <Form
          method="post"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="form_heading">Join us to provide Safe Dining</div>
          <div className="form_sub">
            Complete this form and get more information on our Contactless
            dining feature.
          </div>

          <div className="lable_inputs">
            {/* <label>
              <input
                type="text"
                id="name"
                placeholder="Name*"
                className="name"
              />
            </label> */}
            <Form.Group controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                className="name"
                placeholder="Name*"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                value={formData.restaurant_name}
                name="restaurant_name"
                placeholder="Restaurant name*"
                className="restaurant_name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom03">
              <Form.Control
                type="text"
                value={formData.postcode}
                name="postcode"
                placeholder="Postal code*"
                className="code"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom04">
              <Form.Control
                required
                type="email"
                value={formData.email}
                name="email"
                placeholder="Email*"
                className="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="validationCustom05">
              <Form.Control
                required
                type="text"
                value={formData.phone}
                name="phone"
                minlength="10"
                maxlength="11"
                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                placeholder="Mobile Number*"
                className="number"
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" className="submit" disabled={isLoading}>
              {isLoading ? "Processing" : "Submit"}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.contactlessdinning.isLoading,
  response: state.contactlessdinning.response,
  error: state.contactlessdinning.error,
});

const mapDispatchToProps = {
  contactlessdinning,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
