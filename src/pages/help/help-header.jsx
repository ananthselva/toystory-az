import { BiChevronRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import "./help.scss";

const HelpHeader = ({ children, ...props }) => {
  return (
    <section>
      <div className="header_fixed">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <h4 className="help_header_name">
                Fusion Kitchen <BiChevronRight />
              </h4>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h3 className="header_name">{props.title}</h3>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="search_bar">
                {children}
                <span className="search_icon">
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpHeader;
