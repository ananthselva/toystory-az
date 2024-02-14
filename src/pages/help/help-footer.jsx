import { useEffect } from "react";
import "./help.scss";
import { useState } from "react";
import { useSelector } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import Login from "../../components/sso-login";
import FacebookLogin from "../../components/facebookLogin";
import AppleLogin from "../../components/appleLogin";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import path_svg from "../../pages/sign-in/svg/Path 17008.svg";
import { GrFormClose } from "react-icons/gr";
import { login, setLoggedIn } from "../../actions/login/authActions";
import { useDispatch } from 'react-redux';
import { AiOutlineLeftCircle } from "react-icons/ai";
import { Player } from "@lottiefiles/react-lottie-player";
import lotti_anmi from "../../pages/sign-in/lottifile/mobile-otp-rejected.json";
import { useNavigate } from "react-router-dom";
import FreshchatWidget from "../../pages/help/chat";
const FooterHelp = () => {
  const { theme } = useContext(ThemeContext);
 
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [loginPopupShow,setloginPopupShow]=useState(false);
  const status = useSelector((state) => state.userdata.isLoggedIn);
  const user_data = useSelector((state) => state.userdata.userData);
  
  console.log(user_data);
  const [isLoggedIn,setIsLoggedIn]=useState(status);
  const [username, setUsername] = useState("");
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState("");




  useEffect(() => {
    setIsLoggedIn(status);
    
    if(!status){
      window?.fcWidget?.init({
        token: "6434b669-39fd-4c91-a798-ea8bca0edef3",
        host: "https://wchat.in.freshchat.com",
      });
      window?.fcWidget?.hide();
    }
    if(status){
      window?.fcWidget?.init({
        token: "6434b669-39fd-4c91-a798-ea8bca0edef3",
        host: "https://wchat.in.freshchat.com",
      });
      window?.fcWidget?.show();
    }
    console.log("hii");
     },[status])
   useEffect(() => {
    if (
      user_data &&
      user_data.status &&
      user_data.otp &&
      user_data.customerId &&
      user_data.userId
    ) {
      setCurrentPage("otp");
     
      const timer = setTimeout(() => {
     
      }, 30000);
      return () => clearTimeout(timer);
    }
     },[user_data])

  const [currentPage, setCurrentPage] = useState("help"); 

  const handleLogin=()=>{
    setloginPopupShow(true)
  }
  const handleClose=()=>{
    setloginPopupShow(false)
  }

//form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ user_name: username, country_code: "GB" }));
    setTimer(30);
    // setUsername('');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    console.log(user_data.otp);

    if (otp === user_data.otp) {
      handleClose();
 
      dispatch(setLoggedIn());
      navigate("/myaccount");
    } else {
    
    }
  };
  const handleFresh=()=>{
    window?.fcWidget?.init({
      token: "6434b669-39fd-4c91-a798-ea8bca0edef3",
      host: "https://wchat.in.freshchat.com",
    });
    window?.fcWidget?.open();
    window?.fcWidget?.show();
  }

  return (
    <section className="footer_fixed">
      <h5 className="footer_cnt">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <h5 className="footer_sub">
                Our Customer Care team is staffed around the clock and ready to
                help. You can use the <br />
                
                  {" "}
                    {isLoggedIn?
                    <><span className="blue is_Login" onClick={()=>handleFresh()}>chat on the websitechat on the website</span></>
                    :<><span className="blue"  onClick={()=>handleLogin()}>chat on the websitechat on the website</span></>
                    }
                  {" "}
                
                 
                for further assistance or call us at{" "}
                <a href="tel:03301225960" className="blue">
                  0330 122 5960
                </a>
              </h5>
            </div>
          </div>
        </div>
      </h5>

    {isLoggedIn?(<FreshchatWidget />):(<></>)}
  
      <Modal
        centered
        show={loginPopupShow}
        onHide={handleClose}
        className={`sign_full ${theme === "dark" ? "dark-theme" : ""}`}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          {currentPage === "help" && (
              <div className="full_content">
                <span className="close-btn" onClick={handleClose}>
                  <GrFormClose />
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
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter your email/phone number"
                        />
                      </div>
                      <div className="green_btn">
                        <button>Log In</button>
                      </div>
                    </form>
                    <div className="lines">
                      <div className="line_one"></div>
                      <div className="or_option">
                        <p>or</p>
                      </div>
                      <div className="line_two"></div>
                    </div>
                    <div className="google_btn" id="signInButton">
                      {/* <button> */}
                      {/* <img src={google_svg} alt="" /> */}
                      <Login onClosePopup={handleClose} />
                      {/* </button> */}
                    </div>
                    <div className="apple_btn">
                      <button>
                        <AppleLogin onClosePopup={handleClose} />
                      </button>
                    </div>
                    <div className="facebook_btn single-line-button">
                      <button>
                        {/* <img src={facebook_svg} alt="" /> */}
                        <FacebookLogin onClosePopup={handleClose} />
                      </button>
                    </div>

                    <div className="guest_btn">
                      <button onClick={handleClose}>
                        <img src={path_svg} alt="" />
                        Continue as Guest
                      </button>
                    </div>

                    <div className="tc">
                      <div className="grey">
                        By continuing you agree to our{" "}
                        <span className="red">T&C</span>
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
                    onClick={() => setCurrentPage("help")}
                  >
                    <AiOutlineLeftCircle />
                  </div>
                  <div className="lotti_file">
                    <Player autoplay loop src={lotti_anmi}></Player>
                  </div>
                </div>
                <p className="otp_heading">Sign Up</p>
                <p className="subject_otp">
                  Enter the OTP received to your email
                </p>
                <form onSubmit={handleOtpSubmit}>
                  <div className="otp_input_fields">
                    <input
                      type="text"
                      placeholder="OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      style={{ padding: "8px 12px", fontSize: "16px" }}
                    />
                  </div>
                  <div className="sign_grey">
                    <button>Sign In</button>
                  </div>
                </form>
                <p className="time_otp">00:{timer}</p>
                <p
                  className="other_login"
                  onClick={() => setCurrentPage("login_google")}
                >
                  Try other Login
                </p>
              </div>
            )}
          </>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    
    </section>
    

    
 
  );
};
export default FooterHelp;
