// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import "./allarea.scss";
import loco_img from "./logo-locate/area.png";
// Images
// Icons
// *******~ Import ~******** //
const AreaNill = () => {
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-12 ">
            <div className="location_full">
              <div className="location_img">
                <img src={loco_img} alt="" />
              </div>
              <p>
                No Areas found, <br /> Please browse more..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AreaNill;
