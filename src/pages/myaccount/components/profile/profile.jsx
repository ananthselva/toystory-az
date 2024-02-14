// *******~ Import ~******** //
// React
import React, { useState, useContext, useEffect } from "react";
// Assets
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ThemeContext from "../../../../common/theme/components/contexts/themecontexts";
// Components
import BackBtn from "../backbtn";
// CSS
import "./profile.scss";
import "./savemodal.scss";
// Images
import CouponImg from "./img/balloons.svg";
// Icons
// *******~ Import ~******** //

// Redux wallet history
import { connect } from "react-redux";
import { getProfile } from "../../../../actions/myaccount/profile/getProfileActions";
import { saveProfile } from "../../../../actions/myaccount/profile/saveProfileActions";
import { sendProfileOtp } from "../../../../actions/myaccount/profile/sendProfileOtpActions";
import { Player } from "@lottiefiles/react-lottie-player";
import KeyLottie from "./img/key.json";
import SuccessLottie from "./img/success.json";
import FalidLottie from "./img/failed.json";
import "./otp-screen.scss";
import { FormControl } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Profile = ({
  profile,
  error,
  userData,
  getProfile,
  saveProfile,
  sendProfileOtp,
  sendotpprofile,
  saveprofile,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
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
  if (location.pathname.includes("/profile") && width > breakpoint) {
    navigate("/myaccount");
  }
  // location.pathname.includes("/profile") && width > breakpoint
  //   ? navigate("/myaccount")
  //   :
  const [userotp, setUserotp] = useState("");
  const [successshow, setSuccessshow] = useState(false);
  const [failureshow, setFailureshow] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const profiledatas = profile?.data?.profile;
  const initialstate = {
    customer_id: userData.customerId,
    first_name: profiledatas?.fname ? profiledatas.fname : "",
    last_name: profiledatas?.lname ? profiledatas.lname : "",
    email: profiledatas?.email ? profiledatas.email : "",
    phone: profiledatas?.phone ? profiledatas.phone : "",
  };
  const [addData, setAddData] = useState(initialstate);
  const [profilesuccess, setProfilesuccess] = useState(false);

  // get the data from API
  useEffect(() => {
    if (userData) {
      getProfile({ customer_id: userData.customerId, body: "Your body" });
    }
  }, [userData, getProfile]);

  const submitotp = (otp) => {
    let newotp = otp?.toString()?.replace(/,/g, "");
    if (userotp == newotp) {
      console.log(addData);
      saveProfile(addData);
    } else {
      if (newotp.length > 3) {
        setFailureshow(true);
      }
    }
  };

  useEffect(() => {
    if (sendotpprofile && sendotpprofile.status) {
      setUserotp(sendotpprofile.data);
    }
  }, [sendotpprofile]);

  useEffect(() => {
    if (saveprofile && saveprofile.status) {
      if (profiledatas.phone != addData.phone) {
        setSuccessshow(true);
      } else {
        setProfilesuccess(true);
      }
      getProfile({ customer_id: userData.customerId, body: "Your body" });
    }
  }, [saveprofile]);

  const handleInputAddChange = (field, value) => {
    setAddData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    console.log(addData);

    field == "phone" && setHasChanges(true);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // if (!profile && !error) {
  //   return <div>Loading...</div>;
  // }

  // Assign to a separate variable

  const sendotp = () => {
    sendProfileOtp({ otp_data: profiledatas.email });
  };

  return (
    <>
      <Helmet>
        <style type="text/css">{`
    footer{
    display:none;
   }
    `}</style>
      </Helmet>
      <section className="account-profile">
        <BackBtn />
        {/* {location.pathname.includes("/profile") ? "true" : "false"} */}
        <Container>
          <Form>
            <Row className="justify-content-center">
              <Col xxl={6} xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    defaultValue={
                      profiledatas && profiledatas.fname
                        ? profiledatas.fname
                        : ""
                    }
                    name="first_name"
                    onChange={(e) =>
                      handleInputAddChange("first_name", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    defaultValue={
                      profiledatas && profiledatas.lname
                        ? profiledatas.lname
                        : ""
                    }
                    name="last_name"
                    onChange={(e) =>
                      handleInputAddChange("last_name", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col xxl={6} xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Phone nubmer</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>+44</InputGroup.Text>
                    <Form.Control
                      placeholder="Phone nubmer"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      defaultValue={
                        profiledatas && profiledatas.phone
                          ? profiledatas.phone
                          : ""
                      }
                      name="phone"
                      onChange={(e) =>
                        handleInputAddChange("phone", e.target.value)
                      }
                      onSelect={(e) =>
                        handleInputAddChange("phone", e.target.value)
                      }
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col xxl={6} xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email ID"
                    disabled
                    readOnly
                    defaultValue={
                      profiledatas && profiledatas.email
                        ? profiledatas.email
                        : ""
                    }
                    name="email"
                  />
                </Form.Group>
              </Col>
              <Col xxl={6}>
                <center>
                  <SaveModal
                    sendotp={sendotp}
                    successshow={successshow}
                    setSuccessshow={setSuccessshow}
                    submitotp={submitotp}
                    addData={addData}
                    profiledatas={profiledatas}
                    hasChanges={hasChanges}
                    failureshow={failureshow}
                    setFailureshow={setFailureshow}
                    saveProfile={saveProfile}
                    profilesuccess={profilesuccess}
                    setProfilesuccess={setProfilesuccess}
                  />
                </center>
              </Col>
            </Row>
          </Form>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col xxl={6} xl={7}>
              <div className="coupon-box">
                <Image src={CouponImg} fluid />
                <p>
                  You have placed total of{" "}
                  <span>
                    {profile && profile?.data?.totalOrderCount
                      ? profile.data.totalOrderCount
                      : ""}
                  </span>{" "}
                  Orders Saved{" "}
                  <span>
                    £{" "}
                    {profile && profile?.data?.totalAppliedDiscount
                      ? profile.data.totalAppliedDiscount
                      : ""}
                  </span>{" "}
                  Using the Coupon Code
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

function SaveModal(props) {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [saveshow, setSaveshow] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const [closesuccesspopup, setClosesuccesspopup] = useState(true);

  const handleClose = () => setShow(false);
  const profileClose = () => props.setProfilesuccess(false);
  const handleShow = () => {
    setShow(true);
  };
  const handlesuccessclose = () => {
    props.setSuccessshow(false);
    setClosesuccesspopup(false);
    setSaveshow(false);
    setOtp(["", "", "", ""]);
  };
  const handlefailureclose = () => {
    props.setFailureshow(false);
    setOtp(["", "", "", ""]);
  };

  const handleOtpshow = () => {
    if (props.hasChanges) {
      if (props.profiledatas.phone == props.addData.phone) {
        handleClose();
        props.saveProfile(props.addData);
      } else {
        handleClose(); // Close the first modal
        setSaveshow(true); // Show the second modal
        props.sendotp();
      }
    } else {
      handleClose();
      props.saveProfile(props.addData);
    }
  };

  const handleResendOtp = () => {
    setSaveshow(true); // Show the second modal
    props.sendotp();
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    props.submitotp(otp);
    handleOtpclose();
    setOtp(["", "", "", ""]);
  };

  const handleOtpclose = () => setSaveshow(false);

  //mask phone number
  var str = props?.addData?.phone;
  str = str.replace(/(?<=\d\d)\d(?=\d{2})/g, "*");
  const allEmpty = otp.some((digit) => digit === "");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Save
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        id="profile-save"
        className={theme === "dark" ? "dark-profile-save" : null}
      >
        <Modal.Body>
          <h3>Save Changes?</h3>
          <p>
            Are you sure want to <br /> save the changes
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancel-btn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="save-btn" onClick={handleOtpshow}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={props.successshow}
        onHide={handlesuccessclose}
        backdrop="static"
        keyboard={false}
        centered
        className={`otp-screen ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <>
            <div className="content">
              <div className="lottie-ani">
                <Player autoplay loop src={SuccessLottie}></Player>
              </div>
              <h3 className="done">OTP Verified Successfully</h3>

              <button onClick={handlesuccessclose} className="verify-btn done">
                Done
              </button>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={props.profilesuccess}
        backdrop="static"
        onHide={profileClose}
        keyboard={false}
        centered
        className={`otp-screen ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <>
            <div className="content">
              <div className="lottie-ani">
                <Player autoplay loop src={SuccessLottie}></Player>
              </div>
              <h3 className="done">Profile Updated Successfully</h3>

              <button onClick={profileClose} className="verify-btn done">
                Done
              </button>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        show={saveshow}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
        className={`otp-screen ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <>
            <form onSubmit={handleOtpSubmit}>
              <div className="content">
                <div className="lottie-ani">
                  <Player autoplay loop src={KeyLottie}></Player>
                </div>
                <h3>OTP Verification</h3>
                <p>
                  Enter OTP Code send to <span>+{str}</span>
                </p>
                <OTPInput otp={otp} setOtp={setOtp} />
                <span className="invalid-msg"></span>
                <p>Don’t received OTP Code?</p>
                <button className="resend-btn" onClick={handleResendOtp}>
                  Resend Code
                </button>
                <Button
                  className="verify-btn verify"
                  disabled={allEmpty}
                  type="submit"
                >
                  Verify & Proceed
                </Button>
              </div>
            </form>
          </>
        </Modal.Body>
      </Modal>

      <Modal
        show={props.failureshow}
        centered
        backdrop="static"
        keyboard={false}
        className={`otp-screen ${theme === "dark" ? "dark-theme" : ""}`}
      >
        <Modal.Body>
          <>
            <div className="content">
              <div className="lottie-ani">
                <Player autoplay loop src={FalidLottie}></Player>
              </div>
              <h3 className="retry">OTP Verified Failed</h3>
              <button className="verify-btn retry" onClick={handlefailureclose}>
                Retry
              </button>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}

//otp input
const OTPInput = ({ otp, setOtp, OTPValid }) => {
  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOtp(newOTP);
      if (index < 3 && value.length === 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <>
      <div className="input-box">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            style={{
              textAlign: "center",
            }}
            onChange={(e) => handleOTPChange(e, index)}
            className={OTPValid === false && "error"}
          />
        ))}
      </div>
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
  sendotpprofile: state.sendotpprofile.sendotpprofile,
  saveprofile: state.saveprofile.saveprofile,
});

const mapDispatchToProps = {
  getProfile,
  sendProfileOtp,
  saveProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
