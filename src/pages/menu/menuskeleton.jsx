import React, { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import Table from "react-bootstrap/Table";
// import "./css/listskeleton.scss";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// !

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
    width: "22px",
    height: "22x",
    lineHeight: "normal",
  };

  return <div style={starWrapperStyle}>{children}</div>;
}

const MenuHeaderLoadingData = () => {
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
  const { pathname } = useLocation();
  return (
    <>
      <section className="menu-header-loading">
        {/* slider */}
        <section className="menu-header-slider">
          <Container>
            <Row>
              <Col xxl={12}>
                <MySkeleton height={width > 767 ? 250 : 125} />
              </Col>
            </Row>
          </Container>
        </section>
        {/* slider */}
        {/* slider */}
        <section className="menu-header-content">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div className="div-title">
                  <MySkeleton
                    height={30}
                    radius={0}
                    width="65%"
                    clsnme="menu-title"
                  />
                </div>
                <p className="data-list list-1">
                  {[...Array(5)].map((data, index) => (
                    <>
                      <MySkeleton height={15} clsnme="type" radius={0} />
                    </>
                  ))}
                </p>
                <p className="data-list list-2">
                  {[...Array(5)].map((data, index) => (
                    <>
                      <MySkeleton height={15} clsnme="type1" radius={0} />
                    </>
                  ))}
                </p>
                <p className="data-list">
                  {[...Array(2)].map((data, index) => (
                    <>
                      <MySkeleton
                        height={width > 767 ? 85 : 55}
                        clsnme="offer-slider"
                        radius={5}
                      />
                    </>
                  ))}
                </p>
                {width > 767 ? null : (
                  <>
                    <p className="data-list list-3">
                      {[...Array(5)].map((data, index) => (
                        <>
                          <MySkeleton height={15} clsnme="type" radius={0} />
                        </>
                      ))}
                    </p>
                  </>
                )}
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                {width > 767 ? (
                  <>
                    <div className="search-logo">
                      <MySkeleton height={45} clsnme="search" />
                      <MySkeleton height={85} circle={false} clsnme="logo" />
                    </div>
                  </>
                ) : null}

                <div className="order-mode mode-1">
                  <MySkeleton height={50} radius={50} clsnme="mode" />
                </div>
                <div className="order-mode">
                  <MySkeleton height={15} radius={0} clsnme="text" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* slider */}
        <section className="header-menu">
          <Container>
            <Row>
              <Col xxl={12}>
                <div className="data-list">
                  {[...Array(3)].map((data, index) => (
                    <>
                      <MySkeleton height={40} radius={0} clsnme="menu-text" />
                    </>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
      {pathname.endsWith("/about") ? (
        <AboutLoading clsname="before-loading" />
      ) : pathname.endsWith("/review") ? (
        <ReviewLoading clsname="before-loading" />
      ) : (
        <MenuLoadingData clsname="before-loading" />
      )}
    </>
  );
};
export default MenuHeaderLoadingData;

export const MenuLoadingData = (props) => {
  return (
    <>
      <section className={`menu-section-loading ${props.clsname}`}>
        <Container>
          <Row className="justify-content-lg-center">
            <Col xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
              <div className="slidebar-loading">
                {[...Array(19)].map((data, index) => (
                  <>
                    <MySkeleton height={18} radius={5} clsnme="menu-text" />
                  </>
                ))}
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={9} xl={10} xxl={10}>
              {[...Array(2)].map((data, index) => (
                <>
                  <div className="all-menu-item">
                    <h1 className="categ-name">
                      <MySkeleton height={25} radius={5} clsnme="item-name" />
                    </h1>
                    <p className="categ-desc">
                      <MySkeleton height={15} radius={5} clsnme="item-desc" />
                    </p>
                    <Row>
                      {[...Array(4)].map((data, index) => (
                        <>
                          <Col xxl={6} xl={6} md={12} lg={6}>
                            <div className="single-item-div">
                              <div className="content">
                                <h2>
                                  <MySkeleton
                                    height={18}
                                    radius={0}
                                    clsnme="menu-name"
                                  />
                                </h2>
                                <p>
                                  <MySkeleton
                                    height={11}
                                    radius={0}
                                    clsnme="menu-desc"
                                  />
                                </p>
                                <p>
                                  <MySkeleton
                                    height={11}
                                    radius={0}
                                    clsnme="menu-desc line2"
                                  />
                                </p>
                                <p>
                                  <MySkeleton
                                    height={11}
                                    radius={0}
                                    clsnme="menu-desc line3"
                                  />
                                </p>
                                <div className="price-must">
                                  <MySkeleton
                                    height={15}
                                    radius={0}
                                    clsnme="menu-price"
                                  />
                                  <MySkeleton
                                    height={20}
                                    radius={50}
                                    clsnme="menu-must"
                                  />
                                </div>
                              </div>
                              <div className="img-div">
                                <MySkeleton
                                  height={100}
                                  width={100}
                                  radius={5}
                                  clsnme="menu-must"
                                />
                              </div>
                            </div>
                          </Col>
                        </>
                      ))}
                    </Row>
                  </div>
                </>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export const AboutLoading = (props) => {
  return (
    <section className={`about-section-loading ${props.clsname}`}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
            <div className="about-content">
              <h4 className="abt-title">
                <MySkeleton height={22} radius={0} clsnme="title" />
              </h4>
              <p className="abt-desc">
                {[...Array(4)].map((data, index) => (
                  <>
                    <MySkeleton height={12} radius={0} clsnme="desc" />
                  </>
                ))}
              </p>
            </div>
            <div className="google-map">
              <h4 className="map-title">
                <MySkeleton height={22} radius={0} clsnme="title" />
              </h4>
              <p className="map-desc">
                <MySkeleton height={200} radius={5} clsnme="desc" />
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={5}>
            <div className="opening-hours-loading">
              <h4 className="abt-title">
                <MySkeleton height={22} radius={0} clsnme="title" />
              </h4>
              <Table className="opening-time-head">
                <thead>
                  <tr>
                    {[...Array(3)].map((data, index) => (
                      <>
                        <th>
                          <MySkeleton height={20} radius={0} clsnme="title" />
                        </th>
                      </>
                    ))}
                  </tr>
                </thead>
              </Table>
              <Table className="opening-time-data">
                <tbody>
                  {[...Array(7)].map((data, index) => (
                    <>
                      <tr key={index}>
                        {[...Array(3)].map((data, index) => (
                          <>
                            <td>
                              <MySkeleton
                                height={17}
                                radius={0}
                                clsnme="desc"
                              />
                            </td>
                          </>
                        ))}
                      </tr>
                    </>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={3}>
            <Row>
              <Col xxl={12} xl={12} md={6}>
                <div className="food-hygine-loading">
                  <h4 className="abt-title">
                    <MySkeleton height={22} radius={0} clsnme="title" />
                  </h4>
                  <p className="abt-desc">
                    {[...Array(4)].map((data, index) => (
                      <>
                        <MySkeleton height={12} radius={0} clsnme="desc" />
                      </>
                    ))}
                  </p>
                  <MySkeleton height={65} radius={5} clsnme="title" />
                </div>
              </Col>
              <Col xxl={12} xl={12} md={6}>
                <div className="allergen-loading">
                  <h4 className="abt-title">
                    <MySkeleton height={22} radius={0} clsnme="title" />
                  </h4>
                  <div className="content-img">
                    <p className="abt-desc">
                      {[...Array(4)].map((data, index) => (
                        <>
                          <MySkeleton height={12} radius={0} clsnme="desc" />
                        </>
                      ))}
                    </p>
                    <MySkeleton height={80} circle clsnme="circle-img" />
                  </div>

                  <MySkeleton height={30} radius={0} clsnme="title" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const ReviewLoading = (props) => {
  return (
    <section className={`review-loading ${props.clsname}`}>
      <Container>
        <Row className="row-gap">
          {[...Array(11)].map((data, index) => (
            <>
              <Col xxl={4} md={6} lg={6} xl={4} key={index}>
                <div className="data-div">
                  <div className="heading">
                    <div className="start-item">
                      <MySkeleton
                        count={5}
                        div={StarWrapper}
                        height={22}
                        clsnme="type-star"
                      />
                    </div>
                    <p className="date">
                      <MySkeleton height={15} radius={3} clsnme="title" />
                    </p>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <MySkeleton height={22} radius={0} clsnme="name-title" />
                    </h4>
                    <p className="desc">
                      {[...Array(5)].map((data, index) => (
                        <>
                          <MySkeleton height={10} radius={0} clsnme="desc" />
                        </>
                      ))}
                    </p>
                  </div>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </section>
  );
};
