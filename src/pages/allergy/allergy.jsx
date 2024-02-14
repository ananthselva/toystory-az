import React, { useState,useEffect } from "react";
import "./allergy.scss";
import { items } from "./item";
import Accordion from "react-bootstrap/Accordion";
import { Link as ScrollLink } from "react-scroll";
import { OrderFlow } from '../../App';
function Allergy() {
  const [active, setActive] = useState(null);

  const handleClick = (key) => {
    setActive(key);
  };
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  return (
    <div className="total allergy-page">
      <section className="desktop">
        <div className="container">
          <div className="row">
            <aside className="col-xl-3 col-lg-3 col-md-4" id="aside1">
              <div className="listitem">
                {items.map((item, key) => {
                  return (
                    <ScrollLink
                      key={key}
                      activeClass="active-scroll"
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={0}
                    >
                      <ul className="unorder">
                        <a
                          href={`#${item.id}`}
                          id="href"
                          className={`actmenu ${
                            active === key ? "active" : ""
                          }`}
                          onClick={() => handleClick(key)}
                        >
                          <li id={key}>
                            <span className="round">{key + 1}</span>
                            {item.text}
                          </li>
                        </a>
                      </ul>
                    </ScrollLink>
                  );
                })}
              </div>
            </aside>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="row">
                <div className="column">
                  <div className="main-head">
                    <h1 id="allergy_head">Allergy</h1>
                    <div id="empty"></div>
                  </div>
                  <div id="info">
                    <p>
                      Read the information about Fusion Kitchen Allergy Policies
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="pl-20 pt-20 pr-20">
                  <div className="item">
                    {items.map((item) => {
                      return (
                        <div id={item.id} name={item.id}>
                          <h2 className="heading">{item.text}</h2>
                          <p>{item.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="main-head">
                <h1 id="allergy_head">Allergy</h1>
                <div id="empty"></div>
              </div>
              <div id="info">
                <p>
                  Read the information about Fusion Kitchen Allergy Policies
                </p>
              </div>

              <Accordion defaultActiveKey="0">
                {items.map((item, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>
                        <div className="content-head">{item.text}</div>
                      </Accordion.Header>
                      <Accordion.Body>{item.value}</Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Allergy;
