import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { data } from "./allarea-content";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./allarea.scss";

function AreaTabs() {
  const [key] = useState("0");

  return (
    <div className="area_maping">
      <Tabs defaultActiveKey={key} id="fill-tab-example" className="mb-3" fill>
        {data.map((tablist, tabIndex) => (
          <Tab
            key={tabIndex}
            eventKey={tabIndex.toString()}
            title={tablist.title}
          >
            <Container>
              <Row className="justify-content-center">
                {tablist.content.map((rowContent, rowIndex) => (
                  <Col key={rowIndex} xl={3}>
                    {Object.values(rowContent)[0].length === 1 ? (
                      <ul className="remove_dot">
                        {Object.values(rowContent)[0].map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </Col>
                ))}
              </Row>
            </Container>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default AreaTabs;
