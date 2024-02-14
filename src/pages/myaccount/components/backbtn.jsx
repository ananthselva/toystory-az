// React
import { useNavigate } from "react-router-dom";
// import { TiChevronLeft } from "react-icons/ti";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
// This function is used to navigate to the home page
// It will be called when the button is clicked
// Icons

export function GoBack(props) {
  const navigate = useNavigate();
  const GoBackFunction = () => {
    navigate(-1);
  };
  return (
    <>
      <Container>
        <Row>
          <Col xxl={12}>
            <div className="go-back-btn">
              <span onClick={GoBackFunction}>
                <TiArrowBackOutline /> {props.name}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const BackBtn = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xxl={12}>
            <div className="myaccount-back">
              <Link to={"/myaccount"}>
                <TiArrowBackOutline /> Back to Dashboard
              </Link>
              {/* <Help place="bottom-end" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default BackBtn;
