// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import "./errorpage.scss";
import img from "./img/404.gif";
import result from "./img/back-result.svg";
// Images
// Icons
// *******~ Import ~******** //
const Errorpage = () => {
  return (
    <section className="error">
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ textAlign: "center" }}
        >
          <div className="col-xl-7 col-lg-9">
            <div className="content">
              <div className="img">
                <img src={img} alt="" className="errorimg" />
              </div>
              <h4>Page Not Found</h4>
              <p>
                Sorry , We can’t find this page! Don't worry <br></br> though,
                everything is STILL AWESOME!{" "}
              </p>
              <span className="b-results">
                <a class="b-results-1" href="https://www.fusionkitchen.co.uk">
                  <img src={result} alt="" className="backresultimg" />
                  Back to Home
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Errorpage;
