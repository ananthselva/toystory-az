import { useEffect } from "react";
import "./becomepartner.scss";
import { Container, Row, Col } from "react-bootstrap";

import Popups from "./popup";
// *******~ Import ~******** //
// React
// Assets

// Components
// CSS
// Images
import line from "./img/Line 38.png";
import rest from "./img/rest.png";
import grocery from "./img/market.png";
import fireupimage from "./img/fireup.png";
import ellips from "./img/round.png";
import fk from "./img/image 3.png";
import system from "./img/Group 74343 (1).png";
import green from "./img/Ellipse 57.png";
import Slider from "./swiper-style";
import { OrderFlow } from "../../App";
// Icons
// *******~ Import ~******** //
const Becomepartner = () => {
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  return (
    <div className="become_partner_full">
      <div className="become-partner-banner">
        <Container>
          <Row>
            <Col md={12}>
              <div className="banner-image">
                <div className="title">
                  The
                  <span className="orange-color"> all-in-one</span>
                  <br />
                  Platform built for <br /> Restaurant & Grocery.
                  <span className="orange-image">
                    <img src={line} alt="line-orange" />
                  </span>
                </div>
                <div className="simplifies">
                  <p>
                    Fusion Kitchen simplifies commerce for restaurant <br />
                    Takeaway. we help businesses get started online,
                    <br /> streamline ordering, and nuture customer
                    relationships.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mobile-back-image">
        <Container>
          <Row>
            <Col>
              <div className="title-title">
                The <span></span>
                <span className="orange-color-mobile">
                  all-in-one
                  <span className="orange-image-mobile">
                    <img src={line} alt="line-orange-mobile" />
                  </span>
                </span>
                <br />
                Platform built for <br /> Restaurant & <br /> Grocery.
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="learn-about">
        <Container>
          <Row>
            <Col md={12}></Col>
            <div className="learn">
              <p>Learn about our services for businesses like yours</p>
            </div>
          </Row>
          <Row>
            <Col md={6}>
              <div className="resturants">
                <img src={rest} alt="resturants" />
                <div className="back-yard">
                  <div className="title">Restaurants</div>
                  <p>
                    Delight in Every Dish: Where Quality and Creativity Meet
                    Daily.
                  </p>
                  <Popups name="Create free account" clsname="free_trail" />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="resturants">
                <img src={grocery} alt="resturants" />
                <div className="back-yard">
                  <div className="title">Grocery</div>
                  <p>
                    Discover local growth, amplify business with our marketing.
                  </p>
                  <Popups name="Create free account" clsname="free_trail" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="how-it-works">
        <Container>
          <Row>
            <Col md={12}>
              <div className="fusion-work">
                <div className="title">
                  How fusion kitchen works for restaurant Partners
                </div>
                <p>Quick and Easy Steps to Spice Up Your Fusion Cuisine.</p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between">
            <Col md={6}>
              <div className="fireup-img">
                <img src={fireupimage} alt="" />
              </div>
            </Col>
            <Col md={5}>
              <div className="progreess-icon">
                <ul className="progress-one">
                  <img src={ellips} alt="" />
                  <li className="content">
                    <div className="title">Sign up</div>
                    <div className="sub-new-design">
                      Embark on Our Partnership - Starting With Your Business’s
                      FSA Rating.
                    </div>
                  </li>
                </ul>
                <ul className="progress-two">
                  <img src={ellips} alt="" />
                  <li className="content">
                    <div className="title">Setup</div>
                    <div className="sub-new-design">
                      Contribute Your Menu and Declare Your Store Timings
                    </div>
                  </li>
                </ul>
                <ul className="progress-one-last">
                  <img src={fk} alt="" />
                  <li className="content-last">
                    <div className="title">Sell</div>
                    <div className="sub-new-design">
                      Track Your Orders in Real-Time with FK Restaurant Platform
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="ways-to-grow">
        <Container>
          <Row>
            <Col md={12}>
              <div className="title">
                Ways to grow and support your business
              </div>
              <p>
                Products, Services and information for your success as a fusion
                Partner
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Slider />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="last-section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={6} lg={5} xl={5} xxl={5} className="desktop-only-only">
              <div className="last">
                <img src={system} alt="" />
              </div>
            </Col>
            <Col md={6} lg={6} xl={6} xxl={6}>
              <div className="last-cnt">
                <span className="green">
                  <img src={green} alt="" />
                </span>
                <div className="title">
                  Prioritizing Your Business's Profitability and Growth.
                  <p className="cnt">
                    Begin the customer journey with a visually enchanting,
                    interactive menu. Our toolkit is designed to help you make
                    this visual statement.
                  </p>
                </div>
              </div>
              <div className="last-cnt">
                <span className="green">
                  <img src={green} alt="" />
                </span>
                <div className="title">
                  Effortless technology integration.
                  <p className="cnt">
                    Technology seamlessly integrates, enhancing functionality
                    with effortless compatibility and user-friendly design.
                  </p>
                </div>
              </div>
              <div className="last-cnt">
                <span className="green">
                  <img src={green} alt="" />
                </span>
                <div className="title">
                  Launch free, Pick a plane later
                  <p className="cnt">
                    Set Up Your Digital Menu, No Immediate Credit Card
                    Requirement.
                  </p>
                  <Popups name="Create free account" clsname="free_trail" />
                </div>
              </div>
            </Col>
            <Col md={6} lg={5} xl={5} xxl={5} className="mobile-only-only">
              <div className="last">
                <img src={system} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Becomepartner;
