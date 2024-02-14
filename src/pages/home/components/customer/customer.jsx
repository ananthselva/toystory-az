// *******~ Import ~******** //
// React
// Assets
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// Components
import Title from "../assets/title";
import { HiOutlineArrowSmRight } from "react-icons/hi";
// CSS
import "./customer.scss";
// Images
import TrackingImg from "./img/Tracking.svg";
// import DeliveryImg from "./img/Delivery.svg";
// Icons
// Lottie
import { Player } from "@lottiefiles/react-lottie-player";
import DeliveryAnimation from "./img/Delivery.json";
// *******~ Import ~******** //

export default function Customer(params) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className="customer-track">
        <Container>
          <Row className="justify-content-around align-items-center">
            <Col xxl={5} md={5}>
              <Title title={<>Discover Fusion Kitchen</>} />
              <p className="sub-content">
                Fusion Kitchen is your ultimate solution for finding and
                ordering great food anywhere. Just input your location, and we
                showcase nearby restaurants for delivery and pickup. Refine your
                search by cuisine, restaurant, or dish for tailored options.
                Order easily online or by phone at no extra cost.
              </p>
              <p className="sub-content">
                With Fusion Kitchen, enjoy more than just food - access
                exclusive reviews, special coupons, and exciting deals. Our 24/7
                customer care team ensures every order meets your expectations,
                guaranteeing a satisfying dining experience
              </p>
              {/* <HomeBtn name="Order Now" color="gray" /> */}
              <Button className="scroll-to-top-fk-order" onClick={scrollToTop}>
                Order Now <HiOutlineArrowSmRight />
              </Button>
            </Col>
            <Col xxl={6} md={7}>
              <div className="delivery-track">
                <div className="icon-box">
                  <div className="icon-div">
                    {/* <Image fluid src={DeliveryImg}></Image> */}
                    <Player autoplay loop src={DeliveryAnimation}></Player>
                  </div>
                  <div className="content-div">
                    <h5>Heading your way..</h5>
                    <p>
                      Not long now,your order <br /> is on its way
                    </p>
                  </div>
                </div>
                <Image src={TrackingImg} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
