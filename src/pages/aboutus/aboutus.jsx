// *******~ Import ~******** //
// React
import {useEffect} from 'react';
// Assets
// Components
// CSS
import "./aboutus.scss";
import discusimg from './img/about-fk-1.png';
import teamimg from './img/e-team.png';
import bimg from './img/Zero-Commission.png';
import { OrderFlow } from '../../App';
// Images
// Icons
// *******~ Import ~******** //
const Aboutus = () => {
    const{setFooterLoading,footerLoading}=OrderFlow();
    useEffect(()=>{
     console.log(footerLoading);
     setFooterLoading(true);
    },[]);
  return (
    
    <section className="aboutus">
      <div className="header">
        <div className="opacity-mask">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-9">
                        <div className="headpara">
                        <h3>About Us  ⟶</h3>
                        <h1>What is Fusion Kitchen..?</h1>
                        <p className="about_para">Fusion kitchen is an online doorway with an extensive
                            selection of food channels within your local area. 
                            For our valuable customer we execute a superior 
                            friendly experience by giving them simple steps of 
                            process to order their food from the choices of hundreds
                            of restaurant and thousands of flavors.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    
        <div className="team">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3 col-md-5"></div>
                        <div className="col-xl-6 col-lg-6 col-md-7">
                            <div className="top-a">
                                <img src={discusimg} alt="" className="discussionimg"/>
                            </div>
                        </div>
                        
                        </div>
                </div>
                <div className="container">
                

         
            

         	<div class="row align-items-center" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
             <div class="col-xl-2 col-lg-2 col-md-2"></div>
         		<div class="col-xl-7 col-lg-9 col-md-12">
                 <div className="abt-s2">
               <img src={teamimg} class="teaming" alt="" width="100%"/>
            

            <div className="www-text">
               <h1 class="exec-team">Executive Team</h1>
               <p class="executive_team">Highly ranked employees who work to ensure the best product and
                productivity of Fusion Kitchen. Here our team gives the best support to the restaurant 
                owners by guiding them with highly versed techniques in the profit aspect.</p>
               
            </div>
            
            </div>
            
            

         	</div>
             
             </div>
         



      
      </div>

      <div className="bottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-7 col-lg-6 col-md-7">
                    <div className="bottom-text">
                        <h1>Commission Free</h1>
                        <h3>Spend 0% and Earn 100% in Fusion Kitchen.</h3>
                        <p>Spend 0% and Earn 100% in Fusion Kitchen.<br></br>
                            Fusion kitchen never asks to pay commission but instead of that Fusion Kitchen
                            makes a countless business into a successfull business in the food industry 
                            as they are very unenthusiastic to join other portals due to high amount of 
                            commission they charge. Our Fusion Kitchen partners believe that we are a 
                            faithful food portal among others as we don’t impose any commission.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-5">
                    <div className="bottom-img">
                        <img src={bimg} alt="" className="bimg"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
            
        </div>
    </section>
    
  );
};
export default Aboutus;
