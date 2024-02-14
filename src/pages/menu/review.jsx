// *******~ Import ~******** //
// React
import React, { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
// Assets
import { Container, Row, Col } from "react-bootstrap";
// Components

import { OrderFlow } from "../../App";
// CSS
import "./css/review.scss";
// Images
// Icons

import { ImStarFull, ImStarHalf } from "react-icons/im";

// *******~ Import ~******** //

// Redux home page code
import { connect } from "react-redux";
import { getReviewDetail } from "../../actions/menu/reviewAction";
import { ReviewLoading } from "./menuskeleton";

const MenuReview = ({ getReviewDetail, isLoading, error, response }) => {
  const { path } = useParams();
  const formData = useMemo(() => {
    return {
      client_path: path,
    };
  }, [path]);

  useEffect(() => {
    getReviewDetail(formData);
  }, [getReviewDetail, formData]);

  const { restaurant } = OrderFlow();

  if (!response) {
    return <ReviewLoading />;
  }

  if (restaurant.clientPath !== response.clientPath) {
    return <h3 className="text-center">Not Found</h3>;
  }

  return (
    <>
      <div className="rating-all">
        <div className="rating-star">
          {[...Array(Math.floor(restaurant.rating.rate))].map((data, index) => (
            <span className="fill">
              <ImStarFull />
            </span>
          ))}
          {restaurant.rating.rate % 1 !== 0 && (
            <span className="half-fill">
              <ImStarHalf />
            </span>
          )}
          {[...Array(Math.floor(5 - restaurant.rating.rate))].map(
            (data, index) => (
              <span className="not-fill">
                <ImStarFull />
              </span>
            )
          )}
        </div>
        <div className="rating-text">
          <p>{restaurant.rating.rate}</p>
          <span>{restaurant.rating.count} reviews</span>
        </div>
      </div>
      <section className="review-section">
        <Container>
          {response.review.length === 0 ? (
            <>
              <Row>
                <Col xxl={12}>
                  <div className="no-review">
                    <h4>Uh- oh! No Reviews Yet</h4>
                    <p>
                      It’s like a empty here! <br /> No reviews have been
                      submitted yet.
                    </p>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                {response.review.map((ClientReview, index) => (
                  <>
                    <Col xxl={4} md={6} xl={4}>
                      <div className="review-box">
                        <div className="star-date">
                          <span className="star-group">
                            {[...Array(Number(ClientReview.rate))].map(
                              (data, index) => (
                                <span className="fill">
                                  <ImStarFull />
                                </span>
                              )
                            )}
                            {[...Array(Number(5 - ClientReview.rate))].map(
                              (data, index) => (
                                <span className="not-fill">
                                  <ImStarFull />
                                </span>
                              )
                            )}
                          </span>
                          <span>{ClientReview.date}</span>
                        </div>
                        <h4> {ClientReview.name}</h4>
                        <p>{ClientReview.comment}</p>
                      </div>
                    </Col>
                  </>
                ))}
              </Row>
            </>
          )}
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.getReviewDetail.isLoading,
  response: state.getReviewDetail.response,
  error: state.getReviewDetail.error,
});

const mapDispatchToProps = {
  getReviewDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuReview);
