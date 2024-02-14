import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import "./sign-in.scss";
import google_svg from "./svg/Google__G__Logo.svg";
import apple_svg from "./svg/apple.svg";
import facebook_svg from "./svg/Facebook-f_Logo-Blue-Logo.wine.svg";
import path_svg from "./svg/Path 17008.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import lotti_anmi from "./lottifile/mobile-otp-approved.json";
import rejected_anmi from "./lottifile/mobile-otp-rejected.json";
import { useContext } from "react";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import Login from "../../components/sso-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import FacebookLogin from "../../components/facebookLogin";
import AppleLogin from "../../components/appleLogin";
import { login, setLoggedIn } from "../../actions/login/authActions";
import { connect, useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { OrderFlow } from "../../App";

import "../../pages/myaccount/components/profile/otp-screen.scss";

function SignIn({ login, setLoggedIn, userData, loginFailure,isLoggedIn}) {
  const { theme } = useContext(ThemeContext);
  const { loginPopupShow, setLoginPopupShow } = OrderFlow();

  const handleClose = () => setLoginPopupShow(false);

  const location = useLocation();
  const clientIden=location?.search;
  if(!isLoggedIn){
  if(clientIden === "?singup=1"){
    setLoginPopupShow(true);
  }
 }
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  // const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [valid, setValid] = useState("");
  const [buttonstatus, setButtonstatus] = useState(false);
  const [currentPage, setCurrentPage] = useState("signIn"); // "signIn" or "otp"

  const [timer, setTimer] = useState(30);
  const [loginError, setLoginError] = useState(null);
  const [loginBtn,setLoginBtn]=useState(true);

  const handleShow = () => {
    setCurrentPage("signIn");
    setLoginPopupShow(true);
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }

    if (timer <= 0) {
    }
  }, [timer]);

  useEffect(() => {
    setLoginError(loginFailure?.message);
    setButtonstatus(false);
  }, [loginFailure]);

  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError(null);

    var mailFormat =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{11})+$/;
    if (username === "") {
      setValid(" Please enter your Email or Phone Number  ");
      setLoginBtn(true);
    } else if (!mailFormat.test(username)) {
      setLoginBtn(true)
      setValid("EmailAddress/PhoneNumber is not valid.");
      return false;
    } else {
      setButtonstatus(true);
      console.log("scfsf");
      login({ user_name: username, country_code: "GB" });
      setTimer(30);
    }
  };

  const handleOtpSubmit = (e) => {
    console.log("otp submit");

    e.preventDefault();
    let newotp = otp?.toString()?.replace(/,/g, "");
    if (newotp === userData.otp.toString()) {
      handleClose();
      setOtpError(false);
      reduxDispatch(setLoggedIn());
      // navigate("/myaccount");
      setOtp(["", "", "", ""]);
    } else {
      setOtpError(true);
      setOtp(["", "", "", ""]);
      setOtpError("Invalid OTP");
      setResendEnabled(true);
    }
  };

  useEffect(() => {
    if (
      userData &&
      userData.status &&
      userData.otp &&
      userData.customerId &&
      userData.userId
    ) {
      setButtonstatus(false);
      setCurrentPage("otp");
      setResendEnabled(false);
      const timer = setTimeout(() => {
        setResendEnabled(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [userData]);

  const handleResendOtp = () => {
    setTimer(30);
    setResendEnabled(false);
    setOtpError(false);
    login({ user_name: username, country_code: "GB" });
    // Code to resend OTP
    // You can dispatch an action or call an API to resend the OTP
    // After successful OTP resend, you can enable the resend option again
    // setTimeout(() => {
    //   setResendEnabled(true);
    // }, 30000);
  };

  //////// for otp /////////////

  const clientId =
    "818058364680-6d3u6vo52bkqb50r6bg6ph31tis44ibg.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  useEffect(()=>{
  console.log(username);
  },[username])

  const handleChange =async (e) => {
    setLoginBtn(false);
    setUsername(e.target.value);
    setValid("");
    setLoginError("");
  };

  function handleContinueGuest() {
    if (location.pathname.includes("/menu")) {
      const path = localStorage.getItem("clientPath");
      navigate(`/${path}/checkout`);
      handleClose();
    } else {
      handleClose();
    }
  }
  const handleBackPage=()=>{
    setLoginBtn(true);
    setCurrentPage("signIn");
  }

  return (
    <>
      <div className="signin_btn_popup">
        <button onClick={handleShow}>Login</button>
      </div>
      <Modal
        centered
        show={loginPopupShow}
        onHide={handleClose}
        className={`sign_full ${theme === "dark" ? "dark-theme" : ""}`}
        backdrop="static"
        keyboard={false}
        id="loginpopups"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            {currentPage === "signIn" && (
              <div className="full_content">
                <span className="close-btn" onClick={handleClose}>
                  <IoMdCloseCircle />
                </span>
                <div className="main_screen">
                  <p className="sign_heading"> Sign Up or Sign In </p>
                  <div className="email_btns">
                    <form onSubmit={handleSubmit}>
                      <div className="email_input">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          onChange={(e) => handleChange(e)}
                          placeholder="Enter your email/phone number"
                        />
                        {valid || loginError ? (
                          <>
                            <p className="error-code">
                              {valid ? valid : loginError}
                            </p>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="green_btn">
                        <button disabled={loginBtn?true:false}>
                          {" "}
                          {buttonstatus ? (
                            <Spinner
                              animation="border"
                              size="sm"
                              variant="success"
                            />
                          ) : (
                            "Log In"
                          )}
                        </button>
                      </div>
                    </form>
                    <div className="lines-lines">
                      <div className="lines">
                        <div className="or">or</div>
                      </div>
                    </div>

                    <div className="google_btn" id="signInButton">
                      <Login onClosePopup={handleClose} />
                    </div>
                    <div className="apple_btn">
                      <AppleLogin onClosePopup={handleClose} />
                    </div>
                    <div className="facebook_btn">
                      {/* <img src={facebook_svg} alt="" /> */}
                      <FacebookLogin onClosePopup={handleClose} />
                    </div>

                    <div className="guest_btn">
                      <button onClick={handleContinueGuest}>
                        <img src={path_svg} alt="" />
                        Continue as Guest
                      </button>
                    </div>

                    <div className="tc">
                      <div className="grey">
                        By continuing you agree to our{" "}
                        <Link to={"/general-terms"}>
                          <span className="red" onClick={handleClose}>
                            T&C
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="otp_screen"></div>
              </div>
            )}
            {currentPage === "otp" && (
              <div className="sign_otp_full">
                <div className="arrow_back_key">
                  <div
                    className="arrow_back_key"
                    onClick={handleBackPage}
                  >
                    <AiOutlineLeftCircle />
                  </div>
                  <div className="lotti_file">
                    {otpError ? (
                      <>
                        <Player autoplay loop src={rejected_anmi}></Player>
                      </>
                    ) : (
                      <>
                        <Player autoplay loop src={lotti_anmi}></Player>
                      </>
                    )}
                  </div>
                </div>
                <p className="otp_heading">Sign Up</p>
                <p className="subject_otp">
                  Enter the OTP received to your email
                </p>
                <form onSubmit={handleOtpSubmit}>
                  <div className="otp_input_fields">
                    <OTPInput
                      otp={otp}
                      setOtp={setOtp}
                      otpError={otpError}
                      setOtpError={setOtpError}
                    />
                  </div>
                  <div className="sign_grey">
                    <button type="submit">Sign In</button>
                  </div>
                </form>
                <p className="time_otp">00:{timer}</p>
                {resendEnabled ? (
                  <p className="time_otp">
                    Please enter the valid OTP or
                    <span className="red" onClick={handleResendOtp}>
                      {" "}
                      RESEND OTP
                    </span>
                  </p>
                ) : (
                  <></>
                )}

                <p
                  className="other_login"
                  onClick={() => setCurrentPage("login_google")}
                >
                  Try other Login
                </p>
              </div>
            )}

            {currentPage === "login" && (
              <div className="sign_otp_full">
                <div className="arrow_back_key">
                  <div
                    className="arrow_back_key"
                    onClick={() => setCurrentPage("otp")}
                  >
                    <AiOutlineLeftCircle />
                  </div>
                  <div className="lotti_file">
                    <Player autoplay loop src={rejected_anmi}></Player>
                  </div>
                </div>
                <p className="otp_heading">Sign Up</p>
                <p className="subject_otp">
                  Enter the OTP received to your email
                </p>
                <div className="otp_input_fields">
                  <input type="text" placeholder="" />
                  <input type="text" placeholder="" />
                  <input type="text" placeholder="" />
                  <input type="text" placeholder="" />
                </div>
                <div className="sign_grey">
                  <button id="border_red">Sign In</button>
                </div>

                <p className="time_otp">
                  Please enter the valid OTP or
                  <span className="red"> RESEND OTP</span>
                </p>

                <p
                  className="other_login"
                  onClick={() => setCurrentPage("login_google")}
                >
                  Try other Login
                </p>
              </div>
            )}
            {currentPage === "login_google" && (
              <>
                <div className="arrow_back_key">
                  <div
                    className="arrow_back_key"
                    onClick={() => setCurrentPage("signIn")}
                  >
                    <AiOutlineLeftCircle />
                  </div>
                </div>
                <div className="multi_log">
                  <div className="google_btn">
                    <button>
                      <img src={google_svg} alt="" />
                      Continue with Google
                    </button>
                  </div>
                  <div className="apple_btn">
                    <button>
                      <img src={apple_svg} alt="" />
                      Continue with Apple
                    </button>
                  </div>
                  <div className="facebook_btn">
                    <button>
                      <img src={facebook_svg} alt="" />
                      Continue with Facebook
                    </button>
                  </div>
                  <div className="guest_btn">
                    <button onClick={handleContinueGuest}>
                      <img src={path_svg} alt="" />
                      Continue as Guest
                    </button>
                  </div>

                  <div className="tc">
                    <div className="grey">
                      By continuing you agree to our{" "}
                      <span className="red" onClick={handleClose}>
                        <Link to={"/general-terms"}>T&C</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

//otp input
const OTPInput = ({ otp, setOtp, otpError, setOtpError }) => {
  const handleOTPChange = (e, index) => {
    setOtpError(false);
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
        {otp?.map((digit, index) => (
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
            className={otpError ? "error" : ""}
          />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userdata.isLoggedIn,
    userData: state.userdata.userData,
    loginFailure: state.userdata.error,
  };
};

const mapDispatchToProps = {
  login,
  setLoggedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// export default SignIn;
