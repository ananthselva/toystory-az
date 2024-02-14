// *******~ Import ~******** //
// React
// Assets
import React, { useContext, useEffect,useState } from "react";
import { Col, Container, Row, Accordion, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// Components
import ThemeContext from "../theme/components/contexts/themecontexts";
// CSS
import "./css/footer.scss";
// Images

import FooterLogo from "./img/footerImage.png";
// import FooterLogo from "./img/XmasFooter.svg";
// import FacebookIcon from "./img/facebook.svg";
// import InstaIcon from "./img/instagram.svg";
// import TwitterIcon from "./img/twitter.svg";
// import CardImg from "./img/Card_1_.svg";
import CardImg from "./img/Card_1.png";
import CardImgWhite from "./img/Card_1-white.png";

// Icons
import {
  SlSocialLinkedin,
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { OrderFlow } from "../../App";
// *******~ Import ~******** //

const Footer = (params) => {
  const { handleclick} = OrderFlow();
  const FooterLinks = [
    {
      LinkTitle: "QUICK LINKS",
      SubLinks: [
        {
          LinkName: "FAQ",
          url: "/faq",
        },
        // {
        //   LinkName: "Stripe",
        //   url: "/teststripe",
        // },
        // {
        //   LinkName: "USEC",
        //   url: "/testusec",
        // },
        {
          LinkName: "Help",
          url: "/help",
        },
        {
          LinkName: "Blog",
          url: "/blog",
        },
        {
          LinkName: "My Account",
          url: "/myaccount",
        },
      ],
    },
    {
      LinkTitle: "LEARN MORE",
      SubLinks: [
        {
          LinkName: "General T&C",
          url: "/general-terms",
        },
        {
          LinkName: "Partner T&C",
          url: "/partner-terms",
        },
        {
          LinkName: "All Area",
          url: "/area",
        },
        {
          LinkName: "All Cuisines",
          url: "/cuisines",
        },
        {
          LinkName: "Branding",
          url: "/our-brand",
        },
        {
          LinkName: "Stuart T&C",
          url: "/stuart-delivery",
        },
      ],
    },
    {
      LinkTitle: "JOIN WITH US",
      SubLinks: [
        {
          LinkName: "Reseller Partner",
          url: "/reseller",
        },
        {
          LinkName: "Become a Partner",
          url: "/partner",
        },
        {
          LinkName: "Contactless Dining",
          url: "/contactlessdinning",
        },
      ],
    },
    {
      LinkTitle: "ABOUT",
      SubLinks: [
        {
          LinkName: "About Us",
          url: "/about",
        },
        {
          LinkName: "Allergy ",
          url: "/allergy",
        },
        {
          LinkName: "Careers",
          url: "/career",
        },
      ],
    },
    {
      LinkTitle: "POLICY",
      SubLinks: [
        {
          LinkName: "General Policy",
          url: "/general-terms",
        },
        {
          LinkName: "Cookie Policy",
          url: "/cookies",
        },
        {
          LinkName: "Privacy Policy-GDPR",
          url: "/privacy",
        },
      ],
    },
  ];

  const Socials = [
    {
      name: "facebook",
      icon: <SlSocialFacebook />,
      link: "https://www.facebook.com/fusionkitchen.co.uk",
    },
    {
      name: "insta",
      icon: <SlSocialInstagram />,
      link: "https://www.instagram.com/fusionkitchenuk/",
    },
    {
      name: "twitter",
      icon: <SlSocialTwitter />,
      link: "https://twitter.com/FusionKitchenU1",
    },
    {
      name: "youtube",
      icon: <SlSocialYoutube />,
      link: "https://twitter.com/FusionKitchenU1",
    },
    {
      name: "linkedin",
      icon: <SlSocialLinkedin />,
      link: "https://twitter.com/FusionKitchenU1",
    },
  ];
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col xl={12} md={12} sm={12} lg={12}>
              <Accordion>
                <Row
                  className="footer-row"
                  style={{ justifyContent: "space-between" }}
                >
                  <Col
                    className="footer-logo-col"
                    xxl={"auto"}
                    md={"auto"}
                    lg={"auto"}
                    xl={"auto"}
                  >
                    <div className="footer-logo">
                      <Link to={"/"}>
                        <img
                          src={FooterLogo}
                          alt="Fusion Kitchen"
                          title="Fusion Kitchen"
                        />
                      </Link>
                    </div>
                  </Col>
                  {FooterLinks.map((FooterLink, index) => (
                    <Col
                      key={index}
                      xxl={"auto"}
                      md={"auto"}
                      lg={"auto"}
                      xl={"auto"}
                    >
                      <Accordion.Item eventKey={index}>
                        <div className="menu-div">
                          <h4>{FooterLink.LinkTitle}</h4>
                          <Accordion.Header>
                            {FooterLink.LinkTitle} <MdOutlineArrowForwardIos />
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              {FooterLink.SubLinks.map((SubLink, index) => (
                                <li key={index} onClick={handleclick}>
                                  <Link to={SubLink.url}>
                                    {SubLink.LinkName}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </div>
                      </Accordion.Item>
                    </Col>
                  ))}
                  <Col xxl={"auto"} md={"auto"} lg={"auto"} xl={"auto"}>
                    <div className="footer-logo">
                      <h3>PAYMENT METHOD</h3>
                      <Link to={"/"}>
                        <Image
                          src={theme === "dark" ? CardImgWhite : CardImg}
                          className="card-img"
                          alt="Fusion Kitchen"
                          title="Fusion Kitchen"
                        />
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col xxl={12} md={12} lg={12} xl={12}>
              <div className="copyright-social">
                <div className="copy-text">
                  <p>&copy; Fusion Kitchen {new Date().getFullYear()}</p>
                </div>
                {/* <Image src={CardImg} className="card-img" fluid /> */}
                <ul className="social-link">
                  {Socials.map((Social, index) => (
                    <li key={index}>
                      <a href={Social.link} target="_blank" rel="noreferrer">
                        {Social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
