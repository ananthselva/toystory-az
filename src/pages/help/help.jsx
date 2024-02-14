// *******~ Import ~******** //
// React
// Assets
// Components

// CSS
import "./help.scss";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

// Images
import orderimg from "./icons/question-1.svg";
import validimg from "./icons/valid-2.svg";
import guid from "./icons/guide.svg";
import gift from "./icons/gift.png";
import { useState,useEffect } from "react";
import EmptyPage from "./empty-error-page";
import fulllist from "./search-data.json";
import HelpError from "./help-error";
import FreshchatWidget from "./chat";
import { OrderFlow } from "../../App";
// Icons
// *******~ Import ~******** //
const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedTopics, setMatchedTopics] = useState([]);
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);  },[]);
  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Find all matching subtopics
    const matchingSubtopics = fulllist
      .flatMap((topic) => Object.values(topic)[0])
      .filter((subtopic) =>
        subtopic.title.toLowerCase().includes(newSearchTerm.toLowerCase())
      );

    setMatchedTopics(matchingSubtopics);
  };
  return (
    <section>
      <div className="help_back">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <h2 className="help_name">Having trouble? we're here to help</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-5 col-md-5"></div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="search_bar">
                  <input
                    type="text"
                    placeholder="Start typing your search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <span className="search_icon">
                    <AiOutlineSearch />
                  </span>
                </div>

                <h4 className="sub">Or choose an option below</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchTerm && matchedTopics.length === 0 ? (
        <>
          <HelpError />
        </>
      ) : null}
      {searchTerm && matchedTopics.length > 0 ? (
        <EmptyPage matchedTopics={matchedTopics} />
      ) : null}

      {(searchTerm && matchedTopics.length > 0) ||
      (searchTerm && matchedTopics.length === 0) ? null : (
        <>
          <div className="box_total">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <Link className="deco" to="/help-with-order">
                    <div className="order">
                      <img src={orderimg} alt="" />
                      <h5 className="box_name">Help with an order</h5>
                      <p className="box_sub">
                        Queries related to your orders <br /> can be solved here
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <Link className="deco" to="/account-options">
                    <div className="order_same">
                      <img src={validimg} alt="" />
                      <h5 className="box_name">Account and payment options</h5>
                      <p className="box_sub">
                        View more on the list of solutions <br /> for payment
                        based queries
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <Link className="deco" to="/guide-fusion">
                    <div className="order_two ">
                      <img src={guid} alt="" />
                      <h5 className="box_name">Guide to Fusion Kitchen</h5>
                      <p className="box_sub">
                        Click to explore more about <br /> Fusion Kitchen
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <Link className="deco" to="/offer-information">
                    <div className="order_two">
                      <img src={gift} alt="" />
                      <h5 className="box_name">Other information</h5>
                      <p className="box_sub">
                        In case any other pieces of <br /> information are
                        needed
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <FreshchatWidget />
    </section>
  );
};
export default Help;
