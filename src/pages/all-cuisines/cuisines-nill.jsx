// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import "./all-cuisines.scss";
import box_img from "./img/cuisines.png";
// Images
// Icons
// *******~ Import ~******** //
const CuisinesNill = () => {
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-12 ">
            <div className="location_full">
              <div className="location_img">
                <img src={box_img} alt="" />
              </div>
              <p>
                No Cuisines Availabe, <br /> Please browse more..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CuisinesNill;
