import React, { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";

import "./css/listskeleton.scss";

import { Container, Row, Col } from "react-bootstrap";

const ListSkeleton = (second) => {
  const [width, setWidth] = useState(window.innerWidth);
  //   const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <>
      <section className="listpage skeleton-section">
        <Container>

          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={3} xxl={3}>
              <section className="list-sidebar">
                <MySkeleton height={45} />
                <div className="order-type">
                  {[...Array(3)].map((data, index) => (
                    <>
                      <MySkeleton clsnme="type" height={75} />
                    </>
                  ))}
                </div>

                {width > 767 && (
                  <>
                    <MySkeleton height={45} />
                    <div className="filter-data">
                      <div className="data-div">
                        <div className="title">
                          <MySkeleton clsnme="typea" height={18} />
                        </div>
                        <div className="list">
                          {[...Array(2)].map((data, index) => (
                            <>
                              <div className="list-item">
                                <MySkeleton
                                  clsnme="typeb"
                                  circle={true}
                                  radius={0}
                                  height={15}
                                />
                                <MySkeleton clsnme="typea" height={15} />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                      <div className="data-div">
                        <div className="title">
                          <MySkeleton clsnme="typea" height={18} />
                        </div>
                        <div className="list">
                          {[...Array(3)].map((data, index) => (
                            <>
                              <div className="list-item">
                                <MySkeleton
                                  clsnme="typeb"
                                  circle={true}
                                  radius={0}
                                  height={15}
                                />
                                <MySkeleton clsnme="typea" height={15} />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                      <div className="data-div">
                        <div className="title">
                          <MySkeleton clsnme="typea" height={18} />
                        </div>
                        <div className="list">
                          {[...Array(4)].map((data, index) => (
                            <>
                              <div className="list-item">
                                <MySkeleton
                                  clsnme="typeb"
                                  circle={true}
                                  radius={0}
                                  height={15}
                                />
                                <MySkeleton clsnme="typea" height={15} />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                      <div className="data-div">
                        <div className="title">
                          <MySkeleton clsnme="typea" height={18} />
                        </div>
                        <div className="list">
                          {[...Array(5)].map((data, index) => (
                            <>
                              <div className="list-item">
                                <MySkeleton
                                  clsnme="typeb"
                                  circle={true}
                                  radius={0}
                                  height={15}
                                />
                                <label>
                                  <MySkeleton
                                    count={5}
                                    div={StarWrapper}
                                    height="100%"
                                    clsnme="type-star"
                                  />
                                </label>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                      <div className="data-div">
                        <div className="title">
                          <MySkeleton clsnme="typea" height={18} />
                        </div>
                        <div className="list">
                          {[...Array(8)].map((data, index) => (
                            <>
                              <div className="list-item">
                                <MySkeleton
                                  clsnme="typeb"
                                  circle={true}
                                  radius={0}
                                  height={15}
                                />
                                <MySkeleton clsnme="typea" height={15} />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </section>
            </Col>
            
            <Col xs={12} sm={12} md={8} lg={8} xl={9} xxl={9}>
              <MySkeleton height={45} />
              <div className="cuisine-row">
                {[...Array(width > 767 ? 9 : 4)].map((data, index) => (
                  <>
                    <MySkeleton
                      clsnme="cuisine"
                      height={width > 767 ? 75 : 50}
                    />
                  </>
                ))}
              </div>
              <div className="filter-row">
                {[...Array(width > 767 ? 5 : 3)].map((data, index) => (
                  <>
                    <MySkeleton
                      clsnme="filter-list"
                      height={width > 767 ? 45 : 30}
                    />
                  </>
                ))}
              </div>
              <section className="restaurant-listing">
                <Row>
                  <Col xxl={12}>
                    <h3 className="main-title">
                      <MySkeleton
                        clsnme="title"
                        height={25}
                        width={`${width > 767 ? "40%" : "55%"}`}
                      />
                    </h3>
                  </Col>
                </Row>{" "}
                <Row className="restaurant-listing">
                  {[...Array(7)].map((data, index) => (
                    <>
                      <Col xxl={4} xl={4} lg={6} md={6} sm={6}>
                        <div className="restaurant-box">
                          <div className="img-box">
                            <MySkeleton clsnme="title" height={150} />
                          </div>
                          <div className="content">
                            
                            <MySkeleton
                              clsnme="title"
                              height={20}
                              width="50%"
                            />
                            <MySkeleton
                              clsnme="desc"
                              height={10}
                              width="100%"
                            />
                            <MySkeleton
                              clsnme="desc"
                              height={10}
                              width="100%"
                            />
                            <div className="footer">
                              <MySkeleton
                                clsnme="desc"
                                height={13}
                                width="100%"
                              />
                              <MySkeleton
                                clsnme="desc"
                                height={13}
                                width="100%"
                              />
                            </div>
                          </div>
                        </div>
                      </Col>
                    </>
                  ))}
                </Row>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const MySkeleton = (props) => {
  const { theme } = useContext(ThemeContext);
  const BaseColor = theme === "dark" ? "#02111f" : "#ebebeb";
  const AnimationColor = theme === "dark" ? "#001e3c" : "#f5f5f5";
  return (
    <>
      <Skeleton
        baseColor={BaseColor}
        highlightColor={AnimationColor}
        height={props.height}
        duration={1.5}
        width={props.width}
        count={props.count}
        wrapper={props.div}
        containerClassName={props.clsnme}
        circle={props.circle}
        borderRadius={props.radius}
      />
    </>
  );
};
function StarWrapper({ children }) {
  const starWrapperStyle = {
    display: "inline-block",
    clipPath:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    width: "20px",
    height: "20px",
  };

  return <div style={starWrapperStyle}>{children}</div>;
}

export default ListSkeleton;
