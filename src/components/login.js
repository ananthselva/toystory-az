import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  setLoggedIn,
} from "../actions/login/authActions";

const Login = ({ login, setLoggedIn, userData }) => {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [resendEnabled, setResendEnabled] = useState(false);

  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ user_name: username, country_code: "GB" });
    // setUsername('');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    if (otp == userData.otp) {
      setOtpError("success");
      reduxDispatch(setLoggedIn());
      navigate("/myaccount");
    } else {
      setOtpError("Invalid OTP");
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
      setShowOtpModal(true);
      setResendEnabled(false);
      const timer = setTimeout(() => {
        setResendEnabled(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [userData]);

  const handleResendOtp = () => {
    setResendEnabled(false);

    login({ user_name: username, country_code: "GB" });

    // Code to resend OTP
    // You can dispatch an action or call an API to resend the OTP
    // After successful OTP resend, you can enable the resend option again
    setTimeout(() => {
      setResendEnabled(true);
    }, 30000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        backgroundImage: "url(/path/to/background-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "20px",
      }}
    >
      {showOtpModal ? (
        <>
          {otpError && <p style={{ color: "red" }}>{otpError}</p>}
          <form onSubmit={handleOtpSubmit} style={{ marginTop: "20px" }}>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ padding: "8px 12px", fontSize: "16px" }}
            />
            <br />
            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Submit OTP
            </button>
          </form>
          {resendEnabled && (
            <p style={{ marginTop: "20px" }}>
              Didn't receive the OTP?{" "}
              <button
                onClick={handleResendOtp}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginTop: "10px",
                  padding: "3px 8px",
                  fontSize: "16px",
                  backgroundColor: "#224457",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Resend OTP
              </button>
            </p>
          )}
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email / Mobile Number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: "8px 12px", fontSize: "16px" }}
            />
            <br />
            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userdata.isLoggedIn,
    userData: state.userdata.userData,
  };
};

const mapDispatchToProps = {
  login,
  setLoggedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
