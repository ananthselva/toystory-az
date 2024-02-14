// *******~ Import ~******** //
// React
import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
// Components
import { OrderFlow } from "../../App";
// CSS
import "./css/about.scss";
// Images
import AllergenImg from "./img/allergen.svg";
// Icons
// *******~ Import ~******** //

// Redux home page code
import { connect } from "react-redux";
import { getAboutDetail } from "../../actions/menu/aboutAction";
import { AboutLoading } from "./menuskeleton";

const MenuAbout = ({ getAboutDetail, isLoading, error, response }) => {
  const { path } = useParams();
  const {
    restaurant
  } = OrderFlow();
  const formData = useMemo(() => {
    return {
      client_path: path,
    };
  }, [path]);

  useEffect(() => {
    getAboutDetail(formData);
  }, [getAboutDetail, formData]);

  console.log(response);

  if (!response) {
    return <AboutLoading />;
  }

  if (restaurant.clientPath !== response.clientPath) {
    return <h3 className="text-center">Not Found</h3>;
  }

  return (
    <>
      <section className="about-section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
              <AboutContent AboutAPI={response} />
              <GoogleMap AboutAPI={response} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={5}>
              <OpeningHours AboutAPI={response} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}>
              <FoodHygine AboutAPI={response} />
              <Allergen />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.getAboutDetail.isLoading,
  response: state.getAboutDetail.response,
  error: state.getAboutDetail.error,
});

const mapDispatchToProps = {
  getAboutDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAbout);

const OpeningHours = ({ AboutAPI }) => {
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentWeekday = weekdays[currentDate.getDay()];

    setWeekday(currentWeekday);
  }, []);

  const convertedData = AboutAPI.about.day.map((dayObject) => {
    const dayName = Object.keys(dayObject)[0];
    const collectionTimes = dayObject[dayName].collection.join("\n");
    const deliveryTimes = dayObject[dayName].delivery.join("\n");

    return {
      day: dayName,
      collection: collectionTimes,
      delivery: deliveryTimes,
    };
  });

  return (
    <>
      <div className="opening-hours">
        <h4 className="abt-title">Opening Hours</h4>
        <Table className="opening-time-head">
          <thead>
            <tr>
              <th>Day</th>
              <th>Collection</th>
              <th>Delivery</th>
            </tr>
          </thead>
        </Table>
        <Table className="opening-time-data">
          <tbody>
            {convertedData.map((data, index) => (
              <>
                <tr
                  key={index}
                  className={`${data.day === weekday ? "active" : ""}`}
                >
                  <td>{data.day}</td>
                  <td>
                    {data.collection.length === 0 ? "Closed" : data.collection}
                  </td>
                  <td>
                    {data.delivery.length === 0 ? "Closed" : data.delivery}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

const AboutContent = ({ AboutAPI }) => {
  return (
    <>
      <div className="about-content">
        <h4 className="abt-title">About Us</h4>
        <p>{AboutAPI.about.aboutAs.about}</p>
      </div>
    </>
  );
};
const GoogleMap = ({ AboutAPI }) => {
  return (
    <>
      <div className="google-map">
        <h4 className="abt-title">Location</h4>
        <iframe
          id="map"
          class="map_frame"
          frameborder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDMeETPBVNDipWi5uFeeF9NijSXEowgtnw
    &q=${AboutAPI.about.client.name}, ${AboutAPI.about.client.address1}, ${AboutAPI.about.client.address2}, ${AboutAPI.about.client.city}, ${AboutAPI.about.client.state}, ${AboutAPI.about.client.pincode}`}
          title="map"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

const Allergen = () => {
  return (
    <>
      <div className="allergen">
        <h4 className="abt-title">Allergens</h4>
        <div className="content-img">
          <p>
            See more information about the <br /> allergens present in the
            product <br />
            offered by this restaurant
          </p>
          <Image src={AllergenImg} />
        </div>

        <div className="view-info">View allergen information</div>
      </div>
    </>
  );
};
const FoodHygine = ({ AboutAPI }) => {
  return (
    <>
      <div className="food-hygine">
        <h4 className="abt-title">Food Hygiene Rating</h4>
        <p>
          Rating by the Food Standards Agency and your local authority. This
          rating may have changed.
        </p>
        <Image src={AboutAPI.about.food_rate_img} />
        {/* <a href="/" className="more-info">
          For more information
        </a> */}
        {/* <span>Last inspection 30/06/2022</span> */}
      </div>
    </>
  );
};
