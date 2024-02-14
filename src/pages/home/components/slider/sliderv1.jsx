// *******~ Import ~******** //
// React
// Assets
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
// Swiper
// Components
// CSS
import "./sliderv1.scss";
// Images
import LocationIcon from "./img/location.svg";
// Icons
import { HiOutlineArrowSmRight } from "react-icons/hi";
// *******~ Import ~******** //
export default function SliderV1(second) {
  return (
    <>
      <section className="home-slider-v1">
        <>
          <Swiper
            spaceBetween={0}
            pagination={{
              dynamicBullets: true,
            }}
            effect={"fade"}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            speed={500}
            modules={[EffectFade, Pagination, Autoplay]}
            className="sliderv1-swiper"
          >
            {[
              { id: "0", position: "center" },
              { id: "1", position: "start" },
              { id: "2", position: "end" },
            ].map((data, index) => (
              <>
                <SwiperSlide key={index} id={`bg-${data.id}`}>
                  <Container>
                    <Row className={`justify-content-${data.position}`}>
                      <Col xxl={6} xl={6} md={7} lg={6}>
                        <ContentSect />
                      </Col>
                    </Row>
                  </Container>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </>
      </section>
    </>
  );
}

const SearchForm = (params) => {
  return (
    <>
      <Form>
        <Form.Group className="search-form-group">
          <Form.Control type="text" placeholder="SK11 6TJ" />
          <Image src={LocationIcon}></Image>
        </Form.Group>
        <Button variant="primary" type="submit">
          <HiOutlineArrowSmRight />
        </Button>
      </Form>
    </>
  );
};

const ContentSect = (params) => {
  return (
    <>
      <div className="content-sect">
        <h3>
          Get food and groceries you love, <br />
          <span className="type-text">
            <Typewriter
              options={{
                strings: ["delivered."],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <SearchForm />
      </div>
    </>
  );
};
