// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import grow from "./img/grow.png";
import Popups from "./popup";
import "./becomepartner.scss";
import marketing from "./img/Group 74341.png";
import delivery from "./img/Group 74342.png";
import point from "./img/1.png";
import online from "./img/2.png";
import qr from "./img/3.png";
import { Container, Row, Col } from "react-bootstrap";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 200000000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="slider_swipe"
        id="aws"
      >
        <Container>
          <Row>
            <Col>
              <SwiperSlide>
                <div className="resturants">
                  <img src={grow} alt="resturants" />
                  <div className="back-yard">
                    <div className="title">Delivery</div>
                    <p>Improve customer experience with convenient delivery.</p>
                    <Popups name="Create free account" clsname="free_trail" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="resturants">
                  <img src={marketing} alt="resturants" />
                  <div className="back-yard">
                    <div className="title">Payments</div>
                    <p>
                      Streamlined payment experiences: Speed, security, and
                      multiple options...
                    </p>
                    <Popups name="Create free account" clsname="free_trail" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="resturants">
                  <img src={delivery} alt="resturants" />
                  <div className="back-yard">
                    <div className="title">
                      Marketplace <br /> Integrations
                    </div>
                    <p>
                      Take your business further by leveraging the power of
                      marketplace integrations
                    </p>
                    <Popups name="Create free account" clsname="free_trail" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="resturants">
                  <img src={point} alt="resturants" />
                  <div className="back-yard">
                    <div className="title">Point Of Sale</div>
                    <p>
                      Streamline your in-store and online business with the
                      industry's most advanced Point of Sale platform
                    </p>
                    <Popups name="Create free account" clsname="free_trail" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="resturants">
                  <img src={online} alt="resturants" />
                  <div className="back-yard">
                    <div className="title">Online Store</div>
                    <p>
                      Fast-track your journey into the online world with a
                      personalized e-commerce
                    </p>
                    <Popups name="Create free account" clsname="free_trail" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="resturants">
                  <img src={qr} alt="resturants" />
                  <div className="back-yard">
                    <div className="title">QR Solutions</div>
                    <p>
                      Unlock a touch-free shopping experience: Use your store's
                      QR code...
                    </p>
                    <Popups name="Create free account" clsname="free_trail" />
                  </div>
                </div>
              </SwiperSlide>
            </Col>
          </Row>
        </Container>
      </Swiper>
    </>
  );
}
