// *******~ Import ~******** //
// React
import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
// Assets
// Components
// CSS
import "./partners-terms.scss";
import { data } from "./partners-terms-data";
import Accordion from "react-bootstrap/Accordion";
import { OrderFlow } from "../../App";
// Images
// Icons
// *******~ Import ~******** //
const Partners = () => {
  const { setFooterLoading ,footerLoading} = OrderFlow();
  const handleFooter=()=>{
    console.log(footerLoading);
    setFooterLoading(false);
    }
    useEffect(()=>{
     handleFooter();
    },[]);
    useEffect(()=>{
     if(footerLoading===false){
      setTimeout(() => {
        setFooterLoading(true);
      }, 2000);
     }
    },[footerLoading]);
  return (
    <>
      <section className="partners">
        {/* // heading portion starts //   */}

        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="fixed_heading">
                {data.map((items, index) => {
                  return (
                    <ScrollLink
                      activeClass="active"
                      to={index + "-data"}
                      spy={true}
                      smooth={true}
                      duration={0}
                      delay={0}
                      offset={-80}
                    >
                      <h6 className="clm_heading">
                        <span>{index + 1}</span> {items.heading}
                      </h6>
                    </ScrollLink>
                  );
                })}
              </div>
            </div>
            {/* // heading portion ends //   */}

            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="fixed_content">
                <div className="line">
                  <div className="part_name">For Partners</div>
                  <div className="line_line"></div>
                </div>
                <div className="main_subject">Fusion Kitchen</div>
                <h3 className="heading_name">
                  Terms and Conditions - For Takeaway Partners
                </h3>
                <div className="partners_tc">
                  <p>
                    These terms apply to your access and use of Fusion Kitchen's
                    Service through www.fusionkitchen.co.uk and our mobile app
                    (The Platform). Fusion Kitchen provides this service.
                  </p>
                  <p>
                    This forms a contract between you and Fusion Kitchen, which
                    commences on the later date of your acceptance and the date
                    on which you have completed Fusion Kitchen's onboarding
                    checks from time to time to Fusion Kitchen's satisfaction.
                    You should save a copy of these terms for your records.
                  </p>
                </div>
              </div>

              {/* // maping starts // */}

              <>
                {data.map((items, index) => {
                  return (
                    <div id={items.id} name={index + "-data"}>
                      <h3 className="cnt_heading">{items.heading}</h3>

                      {items.Desc.map((descri, index) => (
                        <p key={index}>{descri}</p>
                      ))}

                      {items.SubData.map((subject, index) => (
                        <>
                          <h5 className="sub_heading" key={index}>
                            {subject.Subtitle}
                          </h5>

                          {subject.SubDesc.map((SubDescrip, index) => (
                            <>
                              {" "}
                              {SubDescrip && <p key={index}>{SubDescrip}</p>}
                            </>
                          ))}
                        </>
                      ))}
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        </div>
      </section>

      {/* // accordions starts for mobile response // */}

      <section className="partners_conditions_mobile">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 ">
              {/* // intro fixed starts // */}

              <div className="fixed_content">
                <div className="line">
                  <div className="part_name">For Partners</div>
                  <div className="line_line"></div>
                </div>
                <div className="main_subject">Fusion Kitchen</div>
                <h3 className="heading_name">
                  Terms and Conditions - For Takeaway Partners
                </h3>
                <div className="partners_tc">
                  <p>
                    These terms apply to your access and use of Fusion Kitchen's
                    Service through www.fusionkitchen.co.uk and our mobile app
                    (The Platform). Fusion Kitchen provides this service.
                  </p>
                  <p>
                    This forms a contract between you and Fusion Kitchen, which
                    commences on the later date of your acceptance and the date
                    on which you have completed Fusion Kitchen's onboarding
                    checks from time to time to Fusion Kitchen's satisfaction.
                    You should save a copy of these terms for your records.
                  </p>
                </div>

                <Accordion>
                  {data.map((items, index) => (
                    <>
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>{items.heading}</Accordion.Header>

                        <Accordion.Body>
                          {items.Desc.map((descri, index) => (
                            <p key={index}>{descri}</p>
                          ))}

                          {items.SubData.map((subject, index) => (
                            <>
                              <h5 className="sub_heading" key={index}>
                                {subject.Subtitle}
                              </h5>

                              {subject.SubDesc.map((SubDescrip, index) => (
                                <>
                                  {" "}
                                  {SubDescrip && (
                                    <p key={index}>{SubDescrip}</p>
                                  )}
                                </>
                              ))}
                            </>
                          ))}
                        </Accordion.Body>
                      </Accordion.Item>
                    </>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Partners;
