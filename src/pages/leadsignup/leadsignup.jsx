// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import "./leadsignup.scss";
import React, { useState, useEffect } from "react";
import reg from "./img/FK-Register-img-res.jpg";
import reg1 from "./img/FK-Register-img.png";

import Form from "react-bootstrap/Form";
import user from "./img/user.svg";
import mail from "./img/mail.svg";
import phone from "./img/phone.svg";
import Button from "react-bootstrap/Button";
import google from "./img/google.png";
import facebook from "./img/facebook.png";
import { RiMenuAddLine } from "react-icons/ri";
import { connect } from "react-redux";
import axios from "axios";

import { leadSignUp } from "../../actions/static/leadsignupAction";
// Images
// Icons
// *******~ Import ~******** //

const Leadsignup = ({ leadSignUp, error, isLoading, response }) => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    phone: "",
    banner_type: "",
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
      leadSignUp(formData);
      console.log("formData", formData);
    }

    setValidated(true);
    // }
  };
  useEffect(() => {
    const userAgent = navigator.userAgent;
    setState((prevFormData) => ({ ...prevFormData, agent: userAgent }));

    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;
        setState((prevFormData) => ({
          ...prevFormData,
          ip: ipAddress,
        }));
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });

    if (response) {
      setState((prevFormData) => ({
        ...prevFormData,
        name: "",
        email: "",
        phone: "",
        banner_type: "",
        ip: "",
        agent: userAgent,
      }));
      setValidated(true);
    }
  }, [response]);

  return (
    <section className="leadsignup">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-7 col-sm-10 col-md-10  col-lg-6 reg-img-res-div">
            <img src={reg} alt="" className="cooking1" />
          </div>
          {error && <p>Error: {error}</p>}
          <div className="col-xl-5 col-sm-10 col-md-10 col-lg-6">
            <div className="form">
              <Form
                method="post"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <h3>Interested?</h3>
                <p>Complete this form and get more information</p>

                <div className="mb-2">
                  <div className="box-img">
                    <Form.Group controlId="validationCustom01">
                      <div className="img">
                        <img src={user} alt="" className="userimg" />
                      </div>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>

                  <br></br>

                  <div className="box-img">
                    <Form.Group controlId="validationCustom02">
                      <img src={mail} alt="" className="mailimg" />
                      <Form.Control
                        required
                        type="email"
                        value={formData.email}
                        placeholder="Email Id"
                        name="email"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <br></br>
                  <div className="box-img">
                    <Form.Group
                      controlId="validationCustom03"
                      className="formphone"
                    >
                      <img src={phone} alt="" className="phoneimg" />
                      <Form.Control
                        required
                        type="text"
                        value={formData.phone}
                        placeholder="Phone"
                        name="phone"
                        minlength="10"
                        maxlength="11"
                        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <h4>How did you find us?</h4>

                  <div className="radio-with-Icon">
                    <p className="radioOption-Item">
                      <input
                        type="radio"
                        name="BannerTypes"
                        id="1"
                        value="1"
                        className="empty"
                        onClick={() =>
                          handleChange({
                            target: { name: "banner_type", value: "1" },
                          })
                        }
                      ></input>
                      <label htmlFor="1" className="BannerType1">
                        <img src={google} alt="" className="google" />
                        <span>Google</span>
                      </label>
                    </p>
                    <p class="radioOption-Item">
                      <input
                        type="radio"
                        name="BannerTypes"
                        id="2"
                        value="2"
                        className="empty"
                        onClick={() =>
                          handleChange({
                            target: { name: "banner_type", value: "2" },
                          })
                        }
                      ></input>
                      <label htmlFor="2" className="BannerType1">
                        <img src={facebook} alt="" className="facebook" />
                        <span>Facebook</span>
                      </label>
                    </p>
                    <p class="radioOption-Item">
                      <input
                        type="radio"
                        name="BannerTypes"
                        id="3"
                        value="3"
                        className="empty"
                        onClick={() =>
                          handleChange({
                            target: { name: "banner_type", value: "3" },
                          })
                        }
                      ></input>
                      <label htmlFor="3" className="BannerType1">
                        <RiMenuAddLine className="others" />
                        <span>Others</span>
                      </label>
                    </p>
                  </div>
                </div>
                <div className="submit-form-buttom">
                  <Button type="submit" className="submit" disabled={isLoading}>
                    {isLoading ? "Processing" : "Submit"}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-xl-7  col-sm-10 col-md-10  col-lg-6">
            <div className="left-img">
              <img src={reg1} alt="" className="cooking2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.leadSignuReducer.isLoading,
  response: state.leadSignuReducer.response,
  error: state.leadSignuReducer.error,
});

const mapDispatchToProps = {
  leadSignUp,
};
export default connect(mapStateToProps, mapDispatchToProps)(Leadsignup);
