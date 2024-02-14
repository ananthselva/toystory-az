// *******~ Import ~******** //
// React
// Assets
import { Container, Row, Col } from "react-bootstrap";
// Components
import Title from "../assets/title";
// CSS
import "./feedback.scss";
// Images
import { connect } from "react-redux";
// Icons
import { GrStar } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
import moment from "moment";
// *******~ Import ~******** //

const Popular=({ response })=> {
  let feedbackData = "";
  if (response) {
    feedbackData = response?.data?.feedback;
  }

  return (
    <>
      <section className="feedback-slider">
        <Container>
          <Row>
            <Col xxl={12} className="text-center">
              <Title title="Customer Feedback" />
            </Col>
            <Col xxl={12}>
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                speed={1000}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                className="feedback-slider-swiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {feedbackData&&feedbackData?.map((feedback, index) => (
                  <SwiperSlide key={index}>
                    <div className="review-box text-center">
                      <ul>
                        {Array.from(
                          { length: feedback.rate },
                          (_, starindex) => (
                            <>
                              <li key={starindex} id={starindex}>
                                <GrStar />
                              </li>
                            </>
                          )
                        )}
                      </ul>
                      <p>{feedback.comments}</p>
                      <h5> {feedback.name}</h5>
                      <span>
                        {" "}
                        {moment(feedback.reg_date).format("DD/MM/YYYY")}{" "}
                      </span>
                    </div>
                  </SwiperSlide>
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
