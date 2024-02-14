// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import { lazy,useEffect } from 'react';
import Loadable from "../../router/loadable";
import "./allarea.scss";
import { OrderFlow } from '../../App';
// import AreaTabs from "./areatab";
//lazy
const AreaTabs=Loadable(lazy(()=>import('./areatab')));
// Images
// Icons
// *******~ Import ~******** //
const AllArea = () => {
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  return (
    <section>
      <div className="all_area_full">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 ">
              <div className="area_heading">VIEW ALL AREAS</div>
              <div className="tab_content">
                <AreaTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllArea;
