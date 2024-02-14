// *******~ Import ~******** //
// React
// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
// Components
import Title from "../assets/title";
import HomeBtn from "../assets/home-btn/home-btn";
// CSS
import "./zerocommission.scss";
// Images
import ZeroCommImg from "./img/zero-commission.svg";
// Icons
// *******~ Import ~******** //

export default function ZeroCommission(params) {
  const ZeroCommissionData = {
    title: "Your website with 0% Commission",
    discription: (
      <>
        Start selling your food online with all the features required to <br />
        launch your food delivery service. We don’t charge commissions <br /> or
        monthly fees. We’ve built Fusion Kitchen to help restaurants & <br />
        Takeaway owners make it through this difficult period.
      </>
    ),
    image: ZeroCommImg,
  };
  return (
    <>
      <section className="zero-commission">
        <Container>
          <Row className=" justify-content-sm-center  justify-content-md-between align-items-center">
            <Col xxl={4} xl={4} sm={10} md={6} className="text-center">
              <Image src={ZeroCommissionData.image} fluid />
            </Col>
            <Col xxl={6} xl={6} md={6}>
              <Title title={ZeroCommissionData.title} />
              <p>{ZeroCommissionData.discription}</p>
              <HomeBtn name="Become a Partner" color="white" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
