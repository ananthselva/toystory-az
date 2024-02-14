// *******~ Import ~******** //
// React
// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
// Components
// CSS
import "./client-logo.scss";
// Icons
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";
// *******~ Import ~******** //
const Popular=({ response })=> {
let mostPopular = "";
if (response) {
  mostPopular = response?.data?.most_popular;
}
  return (
    <>
      <section className="client-logo">
        <Container fluid>
          <Row>
            <Col xxl={12}>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={12}
                spaceBetween={0}
                // grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                speed={2000}
                className="client-logo-slider"
                breakpoints={{
                  0: {
                    slidesPerView: 4,
                  },
                  421: {
                    slidesPerView: 5,
                  },
                  576: {
                    slidesPerView: 6,
                  },
                  768: {
                    slidesPerView: 7,
                  },
                  992: {
                    slidesPerView: 8,
                  },
                  1200: {
                    slidesPerView: 10,
                  },
                  1400: {
                    slidesPerView: 11,
                  },
                  1600: {
                    slidesPerView: 12,
                  },
                  1800: {
                    slidesPerView: 14,
                  },
                  2000: {
                    slidesPerView: "auto",
                  },
                }}
              >
                {[...Array(10)].map((client, outerIndex) => (
                  <>
                    {mostPopular&&mostPopular?.map((data, innerIndex) => (
                      <SwiperSlide key={`${outerIndex}-${innerIndex}`}>
                        <div className="logo-box">
                          <Image src={data.fileName} fluid />
                        </div>
                      </SwiperSlide>
                    ))}
                  </>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  response: state.homepage.response,
});
export default connect(mapStateToProps)(Popular);
