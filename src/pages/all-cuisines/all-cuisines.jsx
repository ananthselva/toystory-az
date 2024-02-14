// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import {lazy,useEffect} from 'react';
import Loadable from "../../router/loadable";
import "./all-cuisines.scss";
import { OrderFlow } from '../../App';
// import CuisinesTabs from "./cuisines-tab";
//lazy
const CuisinesTabs=Loadable(lazy(()=>import('./cuisines-tab')));
// Images
// Icons
// *******~ Import ~******** //
const AllCuisines = () => {
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
              <div className="area_heading">VIEW ALL CUISINES</div>
              <div className="tab_content">
                <CuisinesTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllCuisines;
