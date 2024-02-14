// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import "./faq.scss";
import faq_img from "./img/faq-right.svg";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { OrderFlow } from "../../App";
import { useEffect } from "react";
// Images
// Icons
// *******~ Import ~******** //
const Faq = () => {
  const{setFooterLoading,footerLoading}=OrderFlow();
   useEffect(()=>{
    console.log(footerLoading);
    setFooterLoading(true);
   },[]);
  return (
    /* faq head-content starts  */

    <section className="hero_single">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="left-content">
                  <h3 className="fk-title">Fusion Kitchen </h3>
                  <div className="left-content-arrows">
                    <MdKeyboardArrowRight />
                  </div>
                </div>
                <div className="left-content-faq">
                  <h2>FAQ</h2>
                  <div className="b-bottom"></div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="right-content">
                  <img src={faq_img} alt="" className="faq-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq head-content ends  */}
      <div className="bg_grey">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What Fusion Kitchen works for?
                  </Accordion.Header>
                  <Accordion.Body>
                    We have associated with best restaurants and takeaways
                    throughout the UK to order food online anywhere anytime.
                    Fusion Kitchen is a hassle-free and quickest way to order
                    your food for delivery or pickup from multiple ranges of
                    restaurants near you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How do I register at Fusion Kitchen?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can click on{" "}
                    {/* <a href="/" id="sign-up-fav">
                      "Sign Up"{" "}
                    </a> */}
                    <Link to="/" id="sign-up-fav">
                      Sign Up{" "}
                    </Link>
                    register with fusion kitchen.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How do I reset my password in my account?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can click on{" "}
                    {/* <a href="/" id="sign-up-fav">
                      "Sign Up"{" "}
                    </a> */}
                    <Link to="/" id="sign-up-fav">
                      Forget Password{" "}
                    </Link>
                    on the login page to reset your new password.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How do I save and edit my account details?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can click{" "}
                    {/* <a href="/" id="sign-up-fav">
                      "My Account"
                    </a>{" "} */}
                    <Link to={"/"}>"My Account" </Link> button after logging in
                    to change your account details like Name, Phone number,
                    Email ID, and address.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    What is the process of placing an order?
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Enter your postcode to find best restaurants near you
                      </li>
                      <li>Select a restaurant of your choice</li>
                      <li>Browse to see the food items</li>
                      <li>
                        Select items from the menu and add to cart and click
                        check out button
                      </li>
                      <li>
                        Choose your payment method and click “Place your order”
                      </li>
                      <li>You will receive an order confirmation mail</li>
                      <li>
                        Restaurant is ready to prepare your food &amp; your food
                        is ready!
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    If something went wrong with my order, what should I do?
                  </Accordion.Header>
                  <Accordion.Body>
                    Please contact our customer care team via live chat, or
                    email us at{" "}
                    <a
                      href="mailto:support@fusionkitchen.co.uk"
                      id="sign-up-fav"
                    >
                      support@fusionkitchen.co.uk
                    </a>{" "}
                    in case of any problem with your order. Keep your order
                    confirmation details with you as a reference for us to
                    examine.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Can I edit my order?</Accordion.Header>
                  <Accordion.Body>
                    Your order can be edited before the order is placed. You can
                    reach customer service by means of live chat. Whenever a
                    request is set and takeaway begins preparing up your food,
                    you may not edit its details.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    What is the minimum order value?
                  </Accordion.Header>
                  <Accordion.Body>
                    Minimum value order reset is in conductance in accordance
                    with the specific restaurants or Takeaways.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    Can I order from anywhere?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can order anywhere in the UK from restaurants listed in
                    the search results.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>Can I make a pre-order?</Accordion.Header>
                  <Accordion.Body>
                    We have the facility to pre-order on the scheduled dates and
                    even at times for your convenience.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    Can I change my address/phone number?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. You can change and edit your address/phone number at
                    any point of time.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    Can I view my past orders?
                  </Accordion.Header>
                  <Accordion.Body>
                    Login to your account and click on order history on your
                    account to view the bill.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    I want to partner my restaurant/Takeaway with Fusion Kitchen
                  </Accordion.Header>
                  <Accordion.Body>
                    <div class="card-body">
                      {/* <a href="/" class="partner">
                        Partner with us
                      </a> */}
                      <Link to={"/"}>Partner with us</Link>
                      <a
                        href="mailto:support@fusionkitchen.co.uk"
                        class="partner"
                      >
                        Send an Email
                      </a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    What is the Refund Policy?
                  </Accordion.Header>
                  <Accordion.Body>
                    If your order is canceled by online card payment, you can
                    contact us directly for a refund request. Also, you can
                    reach us if in case any information you require. Refund once
                    initiated takes 3-5 working days to get reflected into your
                    account.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    How long does it take for delivery?
                  </Accordion.Header>
                  <Accordion.Body>
                    Mostly, the delivery span of an order is estimated by the
                    restaurant you make an order, we do not guarantee the
                    delivery of any order with the given time.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>How do I place a review?</Accordion.Header>
                  <Accordion.Body>
                    Click on{" "}
                    {/* <a href="/" id="sign-up-fav">
                      “Reviews”
                    </a> */}
                    <Link to={"/"} id="sign-up-fav">
                      “Reviews”
                    </Link>{" "}
                    to submit your valuable feedback.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    What are the payment options?
                  </Accordion.Header>
                  <Accordion.Body>
                    There are various payment modes available listed with
                    credit/debit card through the website or in cash to the
                    Restaurant at the point of delivery to or collection by you.
                    You can also pay through Google Pay/Apple Pay.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    How does repeat order works?
                  </Accordion.Header>
                  <Accordion.Body>
                    There is an open option for re-order in the history of
                    orders you made before in earlier, make a click on the
                    re-order button, and automatically the order will be placed
                    in your cart for placing an order.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
