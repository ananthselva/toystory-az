import {lazy,useEffect} from 'react';
import './contactless.scss';
// *******~ Import ~******** //
import { VscArrowRight } from "react-icons/vsc";
// React
// Assets
import less_menu_one from './img/container/QR-Code-Scanner.jpg'
import less_menu_two from './img/container/Menu.jpg'
import less_menu_three from './img/container/Payment.jpg'


import features_image from './img/features/Contacless-Dining.jpg'
import Loadable from '../../router/loadable';
import { OrderFlow } from '../../App';

// import Forms from './form'
//lazy
const Forms=Loadable(lazy(()=>import('./form')));
// Components
// CSS
// Images
// Icons
// *******~ Import ~******** //
const Contactless = () => {
    const{setFooterLoading,footerLoading}=OrderFlow();
    useEffect(()=>{
     console.log(footerLoading);
     setFooterLoading(true);
    },[]);
  return (
    <div className="contactless_dining">
        <section>
            <div className="signup_submit">
                <div className="dining_bg_color">
                  <div className="container">
                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                            <div className="over_cnt">
                            <h3 className="contactless_heading">GO CONTACTLESS WITH FUSION KITCHEN</h3>
                              <div className="contactless_cnt">
                              We at Fusion Kitchen, are proactively working to help the restaurants <br /> bounce back sooner by adopting our technology based dine-in solution <br /><span className='need_bold'> CONTACTLESS DINING</span>
                              </div>
                              <h4 className="box">Sign Up & Go Contactless in just 3 Days!</h4>
                              </div>

                        </div>

                       


                        <div className='col-xl-6 col-lg-6 col-md-6'>
                           <Forms/>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </section>


    <section>
        <div className="how_works">
            <div className="container">
                <div className="works">
                    <h3 className="works_heading">How contactless dining works?</h3>
                    <div className="works_sub">Fusion Kitchen enables your restaurant to offer Contactless Menu, Order & Payment to your dine-in customers.</div>
                </div>

                <div className="row">
                     <div className='col-xl-4 col-lg-4 col-md-4'>
                        <div className="contactless_menu">
                            <img src={less_menu_one} alt="" />
                            <h4 className="cnt_less_head">Contactless Menu</h4>
                             <div className="cnt_less_sub">QR code to be scanned by the customers that is kept on their table. Restaurant’s Menu will be displayed on their smartphone.</div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-4'>
                        <div className="contactless_menu">
                            <img src={less_menu_two} alt="" />
                            <h4 className="cnt_less_head">Contactless Ordering</h4>
                             <div className="cnt_less_sub">Food items to be selected from the digital menu for placing the order. The items can be added or modified at any time.</div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-4'>
                        <div className="contactless_menu">
                            <img src={less_menu_three} alt="" />
                            <h4 className="cnt_less_head">Contactless Payment</h4>
                             <div className="cnt_less_sub">Bill to be paid directly from the web link using the mobile wallet and later food can be reviewed by the customers.</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>  
    </section>


    <section>
        <div className="features_bebefits">
            <div className="container">
                <div className="row align-items-center">
                     <div className='col-xl-6 col-lg-6 col-md-6'>
                        <div className="features_image">
                            <img src={features_image} alt="" />
                        </div>
                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-6'>
                        <div className="features_content">
                            <div className="feature_benifits_name">OUR FEATURES & BENEFITS</div>

                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Increased Dine-in customers</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Higher Business Revenue</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same"> QR code stickers</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Digital Menu- Easy and simple to edit</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Contactless order & pay</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same"> Customer Feedback</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same"> Zero commission</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Free for 6 months</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Driver Tracking App</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Chef Screen</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">NO Setup Fee</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same">Free Unique online ordering Website</h6>
                            </div>
                            <div className="benefits_name">
                                <span><VscArrowRight/></span><h6 className="name_same"> Marketing Service</h6>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div className="social">
            <div className="green">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className='col-xl-10 col-lg-10 col-md-10'>
                        <div className="socl_full">
                        <h3 className="social_name">Minimising Human Contact & Maximising Social Distancing! </h3>
                          <button className='social_btn'>signup</button>
                          </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  );
};
export default Contactless;
