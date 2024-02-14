import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "./css/checkoutskele.scss";


import Alert from "react-bootstrap/Alert";

import Offcanvas from "react-bootstrap/Offcanvas";



function Checkoutpageskeleton() {
  return (
    <section className="checkout-page">
      <div className="container">
        <div className="row" id="checkoutskeleton">
          <div
            className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-8"
            id="first"
            style={{
              maxHeight: "100vh",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <h3>
              <Placeholder
                as={Card.Title}
                animation="glow"  
                className="checkplace"
              >
                <Placeholder xs={4} style={{ minHeight: "1.4em" }} />
              </Placeholder>
            </h3>
            {/* first */}
            <Card className="cardclass">
              <Card.Body className="cardbg">
                <div
                  className="hole"
                  // style={{
                  //   borderBottom: "1px solid #f3f5f7",
                  //   display: "flex",

                  //   overflow: "hidden",
                  // }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={2} style={{ minHeight: "1.2em" }} />{" "}
                      <Placeholder xs={6} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                {/* two */}

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={1} style={{ width: "5%" }} />{" "}
                    <Placeholder xs={2} />{" "}
                  </Placeholder>
                </div>

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={1} />
                  </Placeholder>
                </div>

                <div
                  className="hole"
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={2} /> <Placeholder xs={2} />{" "}
                      <Placeholder xs={2} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={2} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                {/* <div>
                  <div>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={1} /> <Placeholder xs={1} />{" "}
                      <Placeholder xs={1} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={1} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div> */}

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={8} style={{ minHeight: "2.5em" }} />
                  </Placeholder>
                </div>

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={3} />
                  </Placeholder>
                </div>

                <div className="mt-2">
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={2} style={{ minHeight: "3em" }} />{" "}
                    <Placeholder xs={2} style={{ minHeight: "3em" }} />{" "}
                  </Placeholder>
                </div>
              </Card.Body>
            </Card>

            {/* first */}

            {/* second */}
            <Card className="cardclass mt-3">
              <Card.Body className="cardbg">
                <div
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                  }}
                >
                  <div>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={1} style={{ minHeight: "1.2em" }} />{" "}
                      <Placeholder xs={3} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>
                </div>

                {/* two */}

                <div className="mt-2">
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={2} style={{ minHeight: "3.2em" }} />{" "}
                    <Placeholder xs={2} style={{ minHeight: "3.2em" }} />{" "}
                  </Placeholder>
                </div>

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={3} />
                  </Placeholder>

                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={12} style={{ minHeight: "1.4em" }} />
                  </Placeholder>
                </div>

                <div
                  className="hole"
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1", textAlign: "left" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={5} style={{ minHeight: "1em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="three"
                    style={{ flex: "1", textAlign: "middle" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={5} style={{ minHeight: "1em" }} />
                    </Placeholder>
                  </div>
                </div>

                <div
                  className="hole"
                  style={{
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1", textAlign: "left" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={11} style={{ minHeight: "1.5em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="three"
                    style={{ flex: "1", textAlign: "middle" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={9} style={{ minHeight: "1.5em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={9} style={{ minHeight: "1.5em" }} />
                    </Placeholder>
                  </div>
                </div>

                <Placeholder
                  as={Card.Title}
                 animation="glow"
                  className="checkplace"
                >
                  <Placeholder
                    xs={1}
                    style={{ minHeight: "1em", width: "3%" }}
                  />{" "}
                  <Placeholder xs={7} style={{ minHeight: "0.8em" }} />{" "}
                </Placeholder>

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={12} style={{ minHeight: "1.5em" }} />
                  </Placeholder>
                </div>
              </Card.Body>
            </Card>
            {/* second */}
            {/* three */}

            {/* <Card className="mt-3">
              <Card.Body>
                <div>
                  <div
                    style={{
                      borderBottom: "1px solid #f3f5f7",
                    }}
                  >
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder
                        xs={1}
                        style={{ minHeight: "1.6em", width: "5%" }}
                      />{" "}
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>
                  <div className='mt-3 mb-5'>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={2} style={{ minHeight: "3.3em" }} />{" "}
                      <Placeholder xs={2} style={{ minHeight: "3.3em" }} />{" "}
                      <Placeholder xs={2} style={{ minHeight: "3.3em" }} />{" "}
                    </Placeholder>
                  </div>
                </div>
              </Card.Body>
            </Card> */}

            {/* three */}

            {/* four */}
            <Card className="cardclass mt-3">
              <Card.Body className="cardbg">
                <div
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                  }}
                >
                  <div>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={5} style={{ minHeight: "0.9em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder
                        xs={7}
                        style={{ minHeight: "1.6em", borderRadius: "20px" }}
                      />
                    </Placeholder>
                  </div>
                </div>
              </Card.Body>
            </Card>
            {/* four */}

            {/* five*/}
            <Card className="cardclass mt-3">
              <Card.Body className="cardbg">
                <div
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                  }}
                >
                  <div>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={3} style={{ minHeight: "0.9em" }} />{" "}
                    </Placeholder>
                  </div>

                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder
                      xs={1}
                      style={{ minHeight: "1em", width: "3%" }}
                    />{" "}
                    <Placeholder xs={11} style={{ minHeight: "1.8em" }} />{" "}
                  </Placeholder>

                  <div
                    className="hole"
                    style={{
                      display: "flex",

                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="two"
                      style={{ flex: "1", textAlign: "right" }}
                    >
                      <Placeholder
                        as={Card.Title}
                       animation="glow"
                        className="checkplace"
                      >
                        <Placeholder xs={2} style={{ minHeight: "1.5em" }} />
                      </Placeholder>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* five */}

            {/* six */}

            <div className="finall-list" style={{ textAlign: "center" }}>
              <div className="mt-4" id="cen">
                <Placeholder
                  as={Card.Title}
                 animation="glow"
                  className="checkplace"
                >
                  <Placeholder
                    xs={12}
                    style={{ minHeight: "1.4em", borderRadius: "30px" }}
                  />
                </Placeholder>
                <div className="mt-2" id="cen1">
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={7} style={{ minHeight: "0.9em" }} />
                  </Placeholder>
                </div>
              </div>
            </div>

            {/* six */}
          </div>

          <div
            className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-4"
            id="second"
          >
            <Card
              className="cardclass"
             
            >
              <Card.Body className="cardbg">
                <div style={{ position: "static" }}>
                  <div>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={7} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={3} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                {/* two */}

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder
                      xs={12}
                      style={{ minHeight: "1.5em", borderRadius: "20px" }}
                    />{" "}
                  </Placeholder>
                </div>

                <div
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={2} style={{ minHeight: "1.2em" }} />{" "}
                      <Placeholder xs={7} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                <div
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={2} style={{ minHeight: "1.2em" }} />{" "}
                      <Placeholder xs={7} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                {/* <div
                  style={{
                    borderBottom: "1px solid #f3f5f7",
                  }}
                >
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={3} style={{ minHeight: "1.5em" }} />{" "}
                    <Placeholder xs={3} style={{ minHeight: "1.5em" }} />{" "}
                    <Placeholder xs={3} style={{ minHeight: "1.5em" }} />{" "}
                  </Placeholder>
                </div> */}

                <div
                  style={{
                    // borderBottom: "1px solid #f3f5f7",
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={2} style={{ minHeight: "1.2em" }} />{" "}
                      <Placeholder xs={7} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={8} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={8} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={8} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",

                    overflow: "hidden",
                  }}
                >
                  <div className="one" style={{ flex: "1" }}>
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={8} style={{ minHeight: "1.2em" }} />{" "}
                    </Placeholder>
                  </div>

                  <div
                    className="two"
                    style={{ flex: "1", textAlign: "right" }}
                  >
                    <Placeholder
                      as={Card.Title}
                     animation="glow"
                      className="checkplace"
                    >
                      <Placeholder xs={4} style={{ minHeight: "1.2em" }} />
                    </Placeholder>
                  </div>
                </div>

                <div>
                  <Placeholder
                    as={Card.Title}
                   animation="glow"
                    className="checkplace"
                  >
                    <Placeholder xs={12} style={{ minHeight: "1.5em" }} />
                  </Placeholder>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* again */}
      </div>
    </section>
  );
}

export default Checkoutpageskeleton;
