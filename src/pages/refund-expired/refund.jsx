// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import "./refund.scss";
import refund_img from './img/refund.svg'
// Images
// Icons
// *******~ Import ~******** //
const Refund = () => {
  return (
    
    <div className="refund_expired">
        <section>
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="refund_img">
                <img src={refund_img} alt="" />
                </div>
                </div>
                </div>
                <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="refund_cnt">
                <h4>Oh no ... Refund Already Processed!</h4>
                </div>
                </div>
                </div>    
                <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="refund_sub">
                <p>Your refund request has been put in record
                 Please wait for the process to get finished</p>
                </div>
                </div>
                </div>  
                <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="refund_btn">
                <button>Go Home</button>
                </div>
                </div>
                </div>       
            </div>
        </section>
    </div>
  );
};
export default Refund;
