// *******~ Import ~******** //
// React
import {useEffect}from 'react';
// Assets
// Components
// CSS
import "./our-brand.scss";
// Images
import lg_one from "./img/logo/Overview__x-0.svg";
import lg_two from "./img/logo/Overview__x-1.svg";
import lg_three from "./img/logo/Overview__x-2.svg";
import lg_four from "./img/logo/Overview__x-3.svg";

// over view images //

import logo_over from "./img/over/logo-design1.png";
import font_suit from "./img/over/font.svg";
import color_pallet from "./img/over/color-palette.svg";
import usage_guid from "./img/over/guideline.svg";

// primary //

import prm_one from "./img/primary/Layer_1.svg";
import prm_two from "./img/primary/Layer_1 (1).svg";
import prm_three from "./img/primary/Layer_1 (2).svg";

// secondary images //

import sec_one from "./img/primary/Layer_1.svg";
import sec_two from "./img/secondary - Copy/Layer_1 (4).svg";
import sec_three from "./img/secondary - Copy/Group 1000006000.svg";
import sec_four from "./img/primary/Layer_1 (1).svg";
import sec_five from "./img/secondary - Copy/Layer_1 (2).svg";
import sec_six from "./img/secondary - Copy/Layer_1 (3).svg";
import sec_seven from "./img/primary/Layer_1 (2).svg";
import sec_eight from "./img/secondary - Copy/Group 1000005977.svg";
import sec_nine from "./img/secondary - Copy/Group 1000005994.svg";

// clear image //

import clear_image_one from "./img/clear/Layer 8 (1) 2 (1).svg";
import clear_image_two from "./img/clear/Layer 9 2.svg";

// font //

import font_image from "./img/font/Group 16425.svg";

// usage //

import usage_img_one from "./img/group/Group 1000006010.svg";
import usage_img_two from "./img/group/Group 17080.svg";

// correct //

import correct_one from "./img/correct/Mask group.svg";
import correct_two from "./img/correct/Mask group (1).svg";
import correct_three from "./img/correct/Mask group (2).svg";
import correct_four from "./img/correct/Group 1000006009.svg";

// qr code //

import image_green from "./img/qr/1.svg";
import image_black from "./img/qr/2.svg";

// wrong usage //

import wrong_img from "./img/wrong/Group 1000005962.svg";

// Icons
import { OrderFlow } from "../../App";
// *******~ Import ~******** //
const Brand = () => {
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  return (
    <div className="branding">
      <section>
        <div className="background">
          <div className="bg">
            <div className="bg_name">
              <h3 className="brand_name">OUR BRAND PERSONALITY</h3>
              <p className="brand_cnt">
                Determined and skilled, our outgoing, brave personality
                <br />
                attracts customers that are looking for inspiration.
                <br />
                We’re courageous, relentlessly associated with
                <br />
                efficiency and quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // background area ends // */}

      <section>
        <div className="cnt_float">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="float">
                  <div className="image_one">
                    <img src={lg_one} alt="" />
                  </div>

                  <div className="image_two">
                    <img src={lg_two} alt="" />
                  </div>

                  <div className="image_three">
                    <img src={lg_three} alt="" />
                  </div>

                  <div className="image_four">
                    <img src={lg_four} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //              over view starts here            //            */}

      <section>
        <div className="over_view">
          <div className="container">
            <div className="over_heading" style={{ display: "flex" }}>
              <h3 className="over_name">Overview</h3>
              <div className="over_line"></div>
            </div>

            <p className="over_cnt">
              This document covers the identity for the brand Fusion <br />
              Kitchen. We will cover the following{" "}
            </p>

            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="logo_text">
                  <img src={logo_over} alt="" />
                  <p className="logo_text_name">Logo</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="font_suit">
                  <img src={font_suit} alt="" />
                  <p className="logo_text_name">Font Suite</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="colour_palette">
                  <img src={color_pallet} alt="" />
                  <p className="logo_text_name">Colour Palette</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="usage_guidelines">
                  <img src={usage_guid} alt="" />
                  <p className="logo_text_name">Usage Guidelines</p>
                </div>
              </div>

              <p className="over_subject">
                A brand is built and not just created - it means sustained
                efforts and initiatives over a period of time is what
                establishes a brand and its characteristics. A certain
                familiarity, consistent look and feel, uniform messaging, and
                above all, delivering on the promise is what builds the brand.
                Generally, ‘creative fatigue’ will set in for brand owners. They
                will seem to have a saturation point for their own brands, in
                terms of the colours, fonts, imagery, and layouts, and thus the
                craving for doing ‘something new’ might set in. This needs to be
                avoided. We have to remember that our customers or target
                audience would not be exposed to even a fraction of what we are
                exposed to.{" "}
              </p>

              <p className="over_subject">
                The elements of branding are sacrosanct and should never be
                compromised. Hence, in case of any second thoughts, it should be
                done at the very beginning. Once you start the journey of
                branding, never veer, never second guess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* //                   primary logs start                      // */}

      <section>
        <div className="primary_logs">
          <div className="container">
            <div className="primary_line">
              <h3 className="primary_name">Primary Logos</h3>
              <div className="primary_line_blue"></div>
            </div>

            <div className="row  align-items-center justify-content-center">
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="prm_images" style={{ display: "flex" }}>
                  <img src={prm_one} alt="" height={"50px"} />
                  <div className="single_line"></div>
                  <img src={prm_two} alt="" height={"120px"}/>
                  <div className="single_line"></div>
                  <img src={prm_three} alt=""  height={"130px"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sec_logos">
          <div className="secondary">
            <div className="container">
              <div className="sec_line">
                <h3 className="sec_name">Secondary Logos</h3>
                <div className="secondary_over_line"></div>
              </div>
              <div className="sec_list_one">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_one} alt="" />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_two} alt="" />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_three} alt="" />
                  </div>
                </div>
              </div>

              <div className="sec_list_two">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_four} alt="" height={"130px"}/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_five} alt="" height={"150px"} />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_six} alt="" height={"130px"} />
                  </div>
                </div>
              </div>
              <div className="sec_list_two">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_seven} alt="" height={"140px"} />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_eight} alt="" height={"160px"} />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <img src={sec_nine} alt="" height={"140px"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // clear space starts here // */}

      <section>
        <div className="clear_space_size">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="clear_space">
                  <div className="clear_line">
                    <h3 className="clear_name">Clear Space & Sizings</h3>
                    <div className="clear_line_cnt"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="img_clear_one">
                  <img src={clear_image_one} alt="" />
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="img_clear_two">
                  <img src={clear_image_two} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // font family // */}

      <section>
        <div className="primary_family_total">
          <div className="container">
            <div className="font_family">
              <div className="font_line">
                <h3 className="font_name">Primary Font Family</h3>
                <div className="primary_family_line"></div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="font_img">
                    <img src={font_image} alt="" />
                  </div>
                  <div className="font_subject">Remissis Semibold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //  Colour Palette  // */}

      <section>
        <div className="color_full">
          <div className="container">
            <div className="color">
              <h3 className="colo_name">Colour Palette</h3>
              <div className="color_line"></div>
            </div>
            <div className="color_div">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="jade" style={{ display: "flex" }}>
                    <div className="jade_color"></div>
                    <div className="color_cnt">
                      <div className="jade_name">lime Green</div>
                      <div className="colo_code">#9FE870</div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="jade" style={{ display: "flex" }}>
                    <div className="Blue_Dianne"></div>
                    <div className="color_cnt">
                      <div className="jade_name">deep forest green</div>
                      <div className="colo_code">#173303</div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="jade" style={{ display: "flex" }}>
                    <div className="Green_Pea"></div>
                    <div className="color_cnt">
                      <div className="jade_name">kelly green</div>
                      <div className="colo_code">#28BE21</div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="jade" style={{ display: "flex" }}>
                    <div className="Genoa"></div>
                    <div className="color_cnt">
                      <div className="jade_name">seashell</div>
                      <div className="colo_code">#F0F1EF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // usage starts here // */}

      <section>
        <div className="usage_full">
          <div className="container">
            <div className="usage">
              <h3 className="usage_name">Usage Guideliness</h3>
              <div className="usage_line"></div>
            </div>

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="fk_green">
                  <div className="fk_cnt">
                    Fusion Kitchen is not a single word and if <br />
                    using as a logo it should be Fusion Kitchen
                  </div>
                </div>
                <div className="fk_image_green">
                  <img src={usage_img_one} alt="" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="fk_green">
                  <div className="fk_cnt">
                    Never Join Fusion Kitchen into single words <br />
                    and always use the correct capitalisation
                  </div>
                </div>
                <div className="fk_image_green">
                  <img src={usage_img_two} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="correct_usage">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="correct_line">
                  <h3 className="correct_name">Correct Usages</h3>
                  <div className="correct_usage_line"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="boiled_chicken">
                  <img src={correct_one} alt="" />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="boiled_chicken">
                  <img src={correct_two} alt="" />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="boiled_chicken">
                  <img src={correct_three} alt="" />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="boiled_chicken">
                  <img src={correct_four} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // qr starts here // */}

      <section>
        <div className="qr_code">
          <div className="container">
            <div className="code_line">
              <h3 className="code_name">QR Code Usage</h3>
              <div className="qr_code_line"></div>
            </div>

            <div className="code_subject">
              Use the below QR code while we referring to download <br />
              Fusion Kitchen app using QR scanner.
            </div>

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="code_green">
                  <img src={image_green} alt="" className="" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="code_green">
                  <img src={image_black} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // wrong usage starts here // */}

      <section>
        <div className="wrng_usage_full">
          <div className="container">
            <div className="usage_line">
              <h3 className="code_name">Wrong Usages</h3>
              <div className="wrng_usage_line"></div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="code_green">
                  <img src={wrong_img} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Brand;
