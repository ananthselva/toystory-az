// *******~ Import ~******** //
import { useNavigate } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

// React
// Assets
import { Container, Row, Col, Image } from "react-bootstrap";
// import Typewriter from "typewriter-effect";

// CSS
import "./slider.scss";
import CommonLoadable from "../../../../router/commonloadable";
import { connect } from "react-redux";
import FontFaceObserver  from 'fontfaceobserver';
// Images
// *******~ Import ~******** //

// Redux home page code
// import { FormComponent } from "./FormComponent";
const FormComponent=CommonLoadable(lazy(()=>import('./FormComponent')));
const Slider=({response})=> {
  let bannerSetting = "";
  let bannerList = "";
  let itemImage = "";
  if (response) {
    bannerSetting = response?.data?.banner_setting;
    bannerList = response?.data?.banner_list;
    itemImage = response?.data?.item_image;
  }
  const sloganWordColor = bannerSetting?.slogan_word_color;
  const textWordColor = bannerSetting?.postcode_text_color;
  const bannerImage = itemImage?.file_name;
  const backGroundType = bannerList?.type;
  const backGroundImage = bannerList?.file_name;
  const backGroundColor = bannerList?.color_code;
  const searchBoxColor = bannerSetting?.search_box_color;
  const searchBoxBackGroundShadow = `0 0 0 30px ${bannerSetting?.search_box_background} inset`;
  const searchBoxBackGroundColor = bannerSetting?.search_box_background;
  const searchBoxButtonColor = bannerSetting?.postcode_button_color;
  const postcodeTextStatus = bannerSetting?.postcode_text_1_status;
  const postcodeText = bannerSetting?.postcode_text_1;
  const postcodeTextColor = bannerSetting?.postcode_text_1_color;
  const temp3Image = bannerSetting?.temp_3_item_image;
  const sessionClassName = `home-slider slider${bannerSetting?.postcode_position}`;
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const observer = new FontFaceObserver('Segoe-UI-Semibold-700');

    observer.load().then(() => {
      setFontsLoaded(true);
    });
  }, []);
  let backGround;
  if (backGroundType === 1) {
    backGround = {
      "--background-img": `url(${backGroundImage})`,
      "--background-col": "",
      "--background-type": backGroundType,
    };
  } else {
    backGround = {
      "--background-img": `url()`,
      "--background-col": backGroundColor,
      "--background-type": backGroundType,
    };
  }

  const sloganStyle = {
    color: sloganWordColor,
  };

  const textStyle = {
    "--slider-txt-color": textWordColor,
  };

  const postcodeInput = {
    "--input-txt-color": searchBoxColor,
    "--input-bg-shadow": searchBoxBackGroundShadow,
    "--input-bg-color": searchBoxBackGroundColor,
  };

  const postcodeButton = {
    "--button-bg-color": searchBoxButtonColor,
  };

  const postcodeContent = {
    "--postcode-txt-color": postcodeTextColor,
  };
  // banner setting end
  const mergedStyle = { ...textStyle };
  return (
    <>
      <section className={sessionClassName} style={backGround}>
        <Container>
          <Row>
            <Col xxl={6} md={6} className="slider-inside">
             
            {fontsLoaded ?(<> 
              <h3 className="sliderSlogan" style={mergedStyle}>
           
                {bannerSetting?.postcode_text} <br />
                <span className="type-text" style={sloganStyle}>
                  {bannerSetting?
                  (<Typewriter
                    words={[bannerSetting?.slogan_text]}
                    loop={true}
                    cursor
                    cursorStyle='|' 
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />):null}
                </span>
               
              </h3></>):null}
              {postcodeTextStatus === 1 ? (
                <p className="postcodeContent" style={postcodeContent}>
                  {postcodeText}{" "}
                </p>
              ) : null}
              <FormComponent
                postcodeInput={postcodeInput}
                postcodeButton={postcodeButton}
                useNavigate={useNavigate}
              />
            </Col>
            <Col
              xxl={6}
              md={6}
              className={
                bannerSetting?.postcode_position === "3" ? "no-img" : null
              }
            >
              {bannerSetting?.postcode_position === "3" ? (
                <Image src={temp3Image} fluid />
              ) : (
                <Image src={bannerImage} fluid className="slide-img" />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  response: state.homepage.response,
});
export default connect(mapStateToProps)(Slider);

