// *******~ Import ~******** //
// React
// Assets
// Components
import { Container, Row, Col, Image } from "react-bootstrap";
// CSS
import "./fkflow.scss";
// Images
import MealImg1 from "./img/meals-1.png";
import MealImg2 from "./img/meals-2.png";
import MealImg3 from "./img/meals-3.png";
import MealImg4 from "./img/meals-4.png";
// Icons
// *******~ Import ~******** //
import parse from "html-react-parser";

export default function FKflow(params) {
  return (
    <>
      <section className="fk-flow">
        <Container>
          <Row className="justify-content-center">
            {[
              {
                title: "A Bit of Everything <br/> for Everyone",
                sub: "From Breakfast to Bedtime: Meals, Snacks, Drinks, Desserts, and Everyday Essentials!",
                img: MealImg1,
              },
              {
                title: "Delivery, Collection <br/> and Dining",
                sub: "Ease into Comfort: Choose Delivery, Quick Pickup, or Reserve Your Table for a Delightful Dine-In Experience.",
                img: MealImg2,
              },
              {
                title: "Craft Your Meal, <br/> Order in a Click",
                sub: "Personalize your dining experience with effortless online ordering – your perfect meal, just a click away!",
                img: MealImg3,
              },
              {
                title: "Delivered Fresh, <br/>Enjoy Every Bite",
                sub: "Enjoy the perfect blend of freshness and flavor in every bite, delivered straight to you.",
                img: MealImg4,
              },
            ].map((meal, index) => (
              <>
                <Col xxl={3} sm={10} md={6} lg={3} key={index}>
                  <div className="meals-box">
                    <Image src={meal.img} fluid />
                    <div className="content">
                      <h5>{parse(meal.title)}</h5>
                      <p>{meal.sub}</p>
                    </div>
                  </div>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
