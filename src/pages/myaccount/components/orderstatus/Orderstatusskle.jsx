import React from 'react'
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import "./Orderskele.scss";
const Orderstatusskle = () => {
  return (
    <section className="order-skle">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="hole"
              style={{
                // borderBottom: "1px solid #f3f5f7",
                display: "flex",

                overflow: "hidden",
                margin: 0,
                padding: 0,
              }}
            >
              <div className="one" style={{ flex: "1" }}>
                <div>
                  <Placeholder
                    as={Card.Title}
                    animation="glow"
                    className="checkplace"
                  >
                    <Placeholder
                      className="two"
                      xs={1}
                      style={{
                        width: "1.6em",
                        borderRadius: "100%",
                        minHeight: "1.6em",
                        marginRight: "0",
                      }}
                    />{" "}
                    <Placeholder
                      className="two"
                      xs={3}
                      style={{ marginLeft: "-7px", minHeight: "0.6em" }}
                    />{" "}
                    <Placeholder
                      className="two"
                      xs={1}
                      style={{
                        width: "1.6em",
                        borderRadius: "100%",
                        minHeight: "1.6em",
                        marginLeft: "-6px",
                      }}
                    />{" "}
                    <Placeholder
                      className="two"
                      xs={3}
                      style={{ marginLeft: "-6px", minHeight: "0.6em" }}
                    />{" "}
                    <Placeholder
                      className="two"
                      xs={1}
                      style={{
                        width: "1.6em",
                        borderRadius: "100%",
                        minHeight: "1.6em",
                        marginLeft: "-5px",
                      }}
                    />{" "}
                    <Placeholder
                      className="two"
                      xs={3}
                      style={{ marginLeft: "-6px", minHeight: "0.6em" }}
                    />{" "}
                    <Placeholder
                      className="two"
                      xs={1}
                      style={{
                        width: "1.6em",
                        borderRadius: "100%",
                        minHeight: "1.6em",
                        marginLeft: "-6px",
                      }}
                    />{" "}
                  </Placeholder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orderstatusskle
