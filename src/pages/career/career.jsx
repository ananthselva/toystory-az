// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import Popup from "./popup";

import "./career.scss";
import { useEffect } from "react";
import { careerAction } from "../../actions/static/careerAction";
import missimg1 from "./img/mission.png";
import vissimg1 from "./img/vission.png";
import { useState } from "react";
import "./popup.scss";

import { connect } from "react-redux";
import axios from "axios";
import { OrderFlow } from '../../App';
import careerdata from "./careerpopup.json";
// import fourthimg from './img/career_upload.png';
// Images
// Icons
// *******~ Import ~******** //
const Career = ({ response, error }) => {
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  const [, setState] = useState({});

  useEffect(() => {
    const userAgent = navigator.userAgent;
    // const position = navigator.position;
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;

        setState((prevFormData) => ({
          ...prevFormData,
          ip: ipAddress,
          agent: userAgent,
        }));
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });

    if (response) {
    }
  }, [response]);

  console.log(response);
  console.log(error);

  return (
    <section className="career">
      <div className="heros_single">
        <div className="opacity-mask" data-opacity-mask="rgb(0 0 0 / 22%)">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10 col-md-12">
                <h1>
                  <span className="f_letter">Reimagine at </span>
                  <br></br>FUSION KITCHEN
                  <div className="border_line"></div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="missionvission">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="mission">
                <img src={missimg1} alt="" className="miss-img1" />
                <h3>Mission</h3>
                <p>
                  Hold your passionate hands with Fusion Kitchen and always
                  welcome emanate talents into our business. We perpetuate our
                  people with our growth at all times. Fusion kitchen likes to
                  share their victory with everyone. We develop the capacity of
                  our associates to become leaders of their platform.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="vission">
                <img src={vissimg1} alt="" className="viss-img1" />
                <h3>Vision</h3>
                <p>
                  Fusion Kitchen focuses on giving an incentive support to our
                  developing team, to certify the superior service to our
                  customers and Restaurant partners. Utility of Fusion Kitchen
                  represents the determined work of each and every one of us who
                  stand besides of Fusion Kitchen growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opening">
        <div className="title">
          <h2>Current Openings</h2>
        </div>
        <div className="container">
          <div className="row">
            {careerdata.map((data, index) => (
              <>
                <div key={index} className="col-xl-4 col-lg-4 col-md-4">
                  <Popup apply={data.position}>
                    <div className="title">
                      <p>
                        {data.position}
                        <span class="f-time">{data.shifttime}</span>
                      </p>
                    </div>
                    <p className="location"></p>

                    <p className="view">view </p>
                  </Popup>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* mobile starts */}

      <div className="opening-mobileview">
        <div className="mtitle">
          <h2>Current Openings</h2>
        </div>
        <div className="container">
          <div className="row">
            {careerdata.map((data, index) => (
              <>
                <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                  <Popup apply={data.position}>
                    <div className="mtitle">
                      <p>
                        {data.position}
                        <span class="mf-time">{data.shifttime}</span>
                      </p>
                    </div>
                    <p className="mlocation"></p>
                    <p className="mview">view</p>
                  </Popup>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* mobile ends */}
    </section>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.career.isLoading,
  response: state.career.response,
  error: state.career.error,
});

const mapDispatchToProps = {
  careerAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Career);

// popup starts

// popup ends
