import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SuccessLottie from "./img/payment-success.json";
import FaildLottie from "./img/payment-faild.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { MdOutlineCancel } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { CheckoutContext } from "./checkout";
import Spinner from "react-bootstrap/Spinner";

export function PaymentSuccess() {
  const { theme } = useContext(ThemeContext);
  const {paymentSuccessShow, setPaymentSuccessShow,paymentSuccessMsg, setPaymentSuccessMsg}=useContext(CheckoutContext);
  //   const [Successshow, setSuccessShow] = useState(false);

  const handleClose = () => setPaymentSuccessShow(false);
  //   const handleShow = () => setSuccessShow(true);

  return (
    <>
      <Modal
        show={paymentSuccessShow}
        centered
        className={`payment-success ${theme === "dark" ? "dark-popup" : null}`}
      >
        <Modal.Body>
          {/* <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span> */}
          <div className="content">
            <div className="lottie-ani">
              {paymentSuccessMsg==="success"?(<>
              <Player autoplay loop src={SuccessLottie}></Player>
                </>):(
                  <>
                  <div className="d-flex justify-content-center">
                   <Spinner animation="border"  variant="success" />
                  
                  </div>
                  </>
                )
              }
            </div>
            {paymentSuccessMsg==="success"?(<>
              <h3>Success</h3>
              <p>
              we are delighted to inform you <br /> that we received your
              payment
              </p>
            </>):(<>
              <p>Please wait while your payment is being verified.you will be redirected automatically</p></>)
            }
          </div>
          <div className="footer-btn-group">
            {/* <Button className="track-btn" onClick={handleClose}>
              Track Order
            </Button> */}
          </div>
          {paymentSuccessMsg==="success"?(<>
          <div class="pulse">
          <FaDotCircle />
          </div></>):null}
        </Modal.Body>
      </Modal>
    </>
  );
}
export function PaymentFaild({}) {
  const { theme } = useContext(ThemeContext);
  const {faildshow,setFaildShow,cardErrorMessage}=useContext(CheckoutContext);
  //   const [Faildshow, setFaildShow] = useState(true);

  const handleClose = () => setFaildShow(false);
  //   const handleShow = () => setFaildShow(true);

  return (
    <>
      <Modal
        show={faildshow}
        onHide={handleClose}
        centered
        className={`payment-faild ${theme === "dark" ? "dark-popup" : null}`}
      >
        <Modal.Body>
          <span className="close-btn" onClick={handleClose}>
            <MdOutlineCancel />
          </span>
          <div className="content">
            <div className="lottie-ani">
              <Player autoplay loop src={FaildLottie}></Player>
            </div>
            <h3>Payment Failed</h3>
            <p>
              {cardErrorMessage?cardErrorMessage:<>Unfortunately we have an issue with <br /> your payment, try again
              later</>}
            </p>
          </div>
          <div className="footer-btn-group">
            <Button className="change-pay-btn" onClick={handleClose}>
              Change Payment
            </Button>
            <Button className="track-btn" onClick={handleClose}>
              Try Again
            </Button>
          </div>
          <div class="pulse faild">
            <FaDotCircle />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
