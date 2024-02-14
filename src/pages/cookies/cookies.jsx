import {lazy,useEffect} from 'react';
import { OrderFlow } from '../../App';
import { Container, Row, Col } from "react-bootstrap";
import data from "./cookiesdata.json";
import "./cookies.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link as ScrollLink } from "react-scroll";
import parse from "html-react-parser";

function Cookies() {
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  return (
    <>
      <div className="cookies-full">
        <Container>
          <Row>
            <Col md={3} xl={3}>
              <div className="intro ">
                <div className="sticky-condition">
                  <ScrollLink
                    className="name"
                    to="1"
                    smooth={true}
                    spy={true}
                    offset={-76}
                    duration={50}
                  >
                    <span className="number">1</span>Introduction
                  </ScrollLink>

                  <ScrollLink
                    className="name"
                    to="2"
                    smooth={true}
                    spy={true}
                    offset={-76}
                    duration={50}
                  >
                    <span className="number">2</span> Why do we use Cookies?
                  </ScrollLink>
                  <ScrollLink
                    className="name"
                    to="3"
                    smooth={true}
                    spy={true}
                    offset={-76}
                    duration={50}
                  >
                    <span className="number">3</span> Our Use of Cookies
                  </ScrollLink>
                </div>
              </div>
            </Col>
            <Col md={9} xl={9}>
              <div className="cookies-content-full">
                <div className="line">
                  <div className="cookies-headings">Cookie Policy</div>
                  <div className="line-line"></div>
                </div>
                <div className="cookies-desc">
                  Read the information about Fusion Kitchen Cookie Policies
                </div>
                {data.map((item, index) => (
                  <div className="main-content-cookies" key={index}>
                    <div className="cookies-heading" name={item.id}>
                      {item.title}
                    </div>
                    <ul>
                      {item.content.map((context, subIndex) => (
                        <li key={subIndex} className="cookies-content">
                          {parse(context.sub)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ////////////////////// mobile accordian ////////////////////////// */}
      <div className="mobile-accordian">
        <div className="line">
          <div className="cookies-headings">Cookie Policy</div>
          <div className="line-line"></div>
        </div>
        <div className="cookies-desc">
          Read the information about Fusion Kitchen Cookie Policies
        </div>

        <Accordion>
          {data.map((value, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                <div className="acc-title ">
                  <span className="number">{value.num}</span> {value.title}
                </div>
              </Accordion.Header>
              {value.content.map((cnt, subIndex) => (
                <Accordion.Body key={subIndex}>
                  <div className="acc-cnt">{parse(cnt.sub)}</div>
                </Accordion.Body>
              ))}
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default Cookies;
