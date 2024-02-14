import "./help.scss";
import error_image from "./error/help_no_data.svg";
import FooterHelp from "./help-footer";

const HelpError = () => {
  return (
    <>
      <section className="error_maessage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="error_total">
                <div className="error_image">
                  <img src={error_image} alt="" />
                </div>

                <h5 className="oh">Uh-Oh!</h5>
                <div className="oh_sub">
                  Looks like we didn't find a match <br /> for your search...
                </div>

                <div className="error_desc">
                  <FooterHelp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpError;
