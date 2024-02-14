import React, { useState, useEffect } from "react";
import "./step.scss";
import { getreseller } from "../../actions/static/resellerAction";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

const StepForm = ({ getreseller, response, isLoading, error }) => {
  const [step, setStep] = useState(1);
  const [formData, setState] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    business_vertical: "",
    postcode: "",
    ip: "",
    agent: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getreseller(formData);
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
      setState({
        name: "",
        email: "",
        phone: "",
        business_name: "",
        business_vertical: "",
        postcode: "",
        ip: "",
        agent: "",
      });
    }
  }, [response]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const formatPostcode = (postcode) => {
    const alphanumericPostcode = postcode.replace(/\W/g, "");
    const formattedPostcode = alphanumericPostcode.replace(
      /^(.*)(\w{3})$/,
      "$1 $2"
    );
    return formattedPostcode.toUpperCase();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const formattedPostcode = formatPostcode(value);
    setState({ ...formData, [name]: formattedPostcode });
  };

  return (
    <div className="multi-step-form">
      <div className="progressbar">
        <div
          className="progress"
          id="progress"
          style={{ width: `${(step - 1) * 50}%` }}
        ></div>
        <div
          className="progress-step progress-step-active"
          data-title="Personal Details"
        ></div>
        <div
          className="progress-step  progress-step-active"
          data-title="Business Details"
        ></div>
        <div
          className="progress-step progress-step-active"
          data-title="Finish"
        ></div>
      </div>
      {error && <p>Error: {error}</p>}
      <Form method="post" onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="step">
            <label>Your Name</label>
            <input
              type="text"
              autoComplete="on"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
            />

            <label>Your Email</label>
            <input
              type="email"
              autoComplete="on"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />

            <label>Your Phone Number</label>
            <input
              type="text"
              autoComplete="on"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="next-button">
              <button
                onClick={handleNextStep}
                disabled={!formData.name || !formData.email || !formData.phone}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="step">
            <label>Business Name</label>
            <input
              type="text"
              name="business_name"
              autoComplete="on"
              value={formData.business_name}
              required
              onChange={handleChange}
            />

            <label>Business Vertical</label>
            <input
              type="text"
              name="business_vertical"
              autoComplete="on"
              value={formData.business_vertical}
              required
              onChange={handleChange}
            />

            <label>Postcode</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              autoComplete="on"
              required
              onChange={handleInputChange}
            />

            <div className="buttons_two">
              <div className="prev-button">
                <button className="prevbutton" onClick={handlePrevStep}>
                  Previous
                </button>
              </div>
              <div className="next-button">
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Processing" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="step">
            <h1>Thank You</h1>
            <button onClick={handlePrevStep}>Previous</button>
          </div>
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.getreseller.isLoading,
  response: state.getreseller.response,
  error: state.getreseller.error,
});

const mapDispatchToProps = {
  getreseller,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);
