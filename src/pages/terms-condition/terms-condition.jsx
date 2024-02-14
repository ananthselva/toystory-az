
// *******~ Import ~******** //
// React
import {useEffect} from 'react';
import { Link as ScrollLink } from "react-scroll";
// Assets
import Accordion from 'react-bootstrap/Accordion';
// Components
// CSS
import "./terms-condition.scss";
// Images
// Icons
import { OrderFlow } from "../../App";
// *******~ Import ~******** //
const TermsCondition = () => {
  const{setFooterLoading,footerLoading}=OrderFlow();
  useEffect(()=>{
   console.log(footerLoading);
   setFooterLoading(true);
  },[]);
  return (
    <>
    <section className="terms_conditions">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3">

            <div className="tc_headings">

            

              <ScrollLink activeClass="active" to="intro_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">1</span>
                <span className="label">Introduction</span>
              </ScrollLink>

              <ScrollLink activeClass="active" to="access_id" spy={true} smooth={true} duration={0} delay={0} offset={-80} >
                <span className="number">2</span>
                <span className="label">Access to our website</span>
              </ScrollLink >

              <ScrollLink activeClass="active" to="allergy_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">3</span>
                <span className="label">Allergy</span>
              </ScrollLink>
           

            <ScrollLink activeClass="active" to="login_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">4</span>
                <span className="label">Login and Registration</span>
              </ScrollLink>
           
           
            <ScrollLink activeClass="active" to="discount_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">5</span>
                <span className="label">Online Discount</span>
              </ScrollLink>
           

            <ScrollLink activeClass="active" to="rating_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">6</span>
                <span className="label">Ratings and Reviews</span>
              </ScrollLink>
            
            
            <ScrollLink activeClass="active" to="alcohol_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">7</span>
                <span className="label">Alcohol & Tobacco Products</span>
              </ScrollLink>
           
            
            <ScrollLink activeClass="active" to="disc_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">8</span>
                <span className="label">Disclaimers</span>
            </ScrollLink>
            
              <ScrollLink activeClass="active" to="aup_id" spy={true} smooth={true} duration={0} delay={0} offset={-80}>
                <span className="number">9</span>
                <span className="label">Acceptable Use Policy (AUP)</span>
              </ScrollLink>
            

            </div>
            </div>
           

           {/* // heading ended // */}

            {/* // content starts // */}
           
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="tc_whole_cnt">
            <div className="tc_intro">
            <p className="main_heading">General T&C</p>
            <p className="main_sub_content">Fusion Kitchen</p>
            <p className="main_fk_heading">Fusion Kitchen - Terms and Conditions</p>
            <p>Fusion Kitchen is an online ordering portal with an extensive selection 
            of food channels within your local area.</p>
            <p>Fusion Kitchen is not a restaurant or food preparation entity. 
              The Restaurants available on our Platform operate independently 
              of Fusion Kitchen. Restaurants are required to comply with federal, 
              state, and local laws, rules, regulations, and standards pertaining 
              to the preparation, sale, and marketing of food, including, without 
              limitation, food preparation and safety and menu disclosure. Fusion 
              Kitchen is not liable or responsible for Restaurants' food preparation 
              or safety and does not verify their compliance with all applicable laws. 
              In addition, Fusion Kitchen does not guarantee the quality of what the 
              Restaurants sell, nor does it guarantee the services provided by them, 
              including, without limitation, in those cases where they provide the 
              delivery services or engage another third-party delivery service.</p>

              </div>

              {/* // introduction starts // */}

              <div className="introduction_starts " id="intro_id" name="intro_id">
              <p className="main_fk_heading">Introduction</p>
              <p className="sub_content">1.1. In these Website Terms of Use, 
              unless the context otherwise requires, the following expressions 
              have the following meanings:</p>

              <p>"Content" will include (but is not limited to) reviews, images, 
                photos, audio, video, location data, nearby places, and all other 
                forms of information or data.</p>

              <p>"Your content" or "User Content" means content that you upload,
                   share or transmit to, through or in connection with the Services, 
                   such as likes, ratings, reviews, images, photos, messages, profile 
                   information, and any other materials that you publicly display or
                    displayed in your account profile.</p>
              
              <p>"Fusion Kitchen Content" means content that Fusion Kitchen creates 
                and make available in connection with the Services including, but not 
                limited to, visual interfaces, interactive features, graphics, design, 
                compilation, computer code, products, software, aggregate ratings,
                reports and other usage-related data in connection with activities 
                associated with your account and all other elements and components of
                 the Services excluding Your Content and Third Party Content.</p>

              <p>"Third Party Content" means content that comes from parties other 
                than Fusion Kitchen or its users and is available on the Services.</p>

              <p>"We/Us/Our" means Fusion Kitchen.</p>

              <p>“Takeaway/ Restaurant” refers to the available food outlets in Fusion 
                Kitchen you wish to place your order with.</p>

              <p>“Website” means fusionkitchen.co.uk</p>

              <p>“App” means Fusion Kitchen mobile application that you can download to place food orders.</p>  

              <p><span className="sp_cnt">1.2. Product Orders:</span>We provide a way for you to communicate 
              your orders ("Orders") for products ("Products") to delivery or takeaway restaurants
               ("Restaurants") displayed on the Website. The legal contract for the supply
                and purchase of Products is between you and the Restaurant that you place 
                your Order with and we will conclude the sale of Products on behalf of, 
                and agent for the Restaurants in all cases.</p>
              </div>

                {/* // access to our website starts // */}


                <div className="website_starts" id="access_id" name="access_id">
                <p className="main_fk_heading">Access to our website</p>
                <p><span className="sp_cnt">2.1. Access to Site</span>Access to our Site 
                is free of charge. You may access some areas of the Website without 
                making an Order or registering your details with us.</p>
                
                <p><span className="sp_cnt">2.2. Responsibility:</span>You are confirming
                 that you have read and understand this consent, making all arrangements
                  necessary for you to have access to the Website, You are responsible for
                   ensuring that all persons who access the website through your Internet 
                   are aware of these Website Terms and that they comply with them.</p>
                  </div>

                   {/* // allergy starts // */}


                   <div className="allergy_starts" id="allergy_id" name="allergy_id">
                   <p className="main_fk_heading">Allergy</p>
                   <p><span className="sp_cnt">3.1. Allergy:</span>In case of you having
                    allergy in any specific food please contact the restaurant and 
                    check directly with them before placing the order.</p>
                   
                    <span className="sp_cnt">Process of the order</span>

                    <p><span className="sp_cnt">3.1. Allergy:</span>In case of you having
                    allergy in any specific food please contact the restaurant and 
                    check directly with them before placing the order.</p>

                    <p><span className="sp_cnt">4.1. Process of Order:</span>You can order
                     from the menu of your chosen Restaurant and provide the other necessary
                      information; you will proceed to the next step to place your order by 
                      selecting the "place my order" button. It is essential to check if the 
                      information you have given is correct and if it is not; please correct
                      it before selecting the place my order button once you complete the process
                       of ordering then you are into a contract with the restaurant.</p>

                    <p><span className="sp_cnt">4.2. Cancelling the Order:</span>If you wish 
                       to cancel your order paid by card, you can directly contact the takeaway 
                       for cancellation or refund request. You can also reach us via our live 
                       chat in case of any information required. Refund once initiated takes 2-3
                        working days to get reflected in your account.</p>   

                    <p><span className="sp_cnt">4.3. Delivery/Collection:</span>The delivery
                         and collection estimated time had been provided by the restaurant, 
                         however we do not guarantee that your order will be delivered or 
                         available for collection within the given time.</p> 
                        
                    <p><span className="sp_cnt">4.4. Payment methods:</span>Payment for 
                         Orders must be made by an accepted credit or debit card through the
                          Website or in cash to the Restaurant at the point of delivery to or
                           collection by you. You can also pay through Google Pay or Apple Pay.</p>

                    <p>Also, please be advised that your use 
                          of Google Pay or Apple Pay is subject to the
                           terms and conditions, including the privacy 
                           policies, of Google and Apple, respectively. 
                           By using Google Pay, you hereby accept the 
                           Google Pay API Terms of Service found 
                           here: https://payments.developers<br />.google.com/terms/sellertos</p> 

                    <p><span className="sp_cnt">4.5. Saved Card:</span>In order to make your 
                    credit/debit card save for payment over the phone or online payment options, 
                    you need to provide your card details submitted to our consent where it has 
                    been saved on your account with us.</p>    


                    <p>Payment for Fusion Kitchen through online payment over card can be 
                      made by a credit or debit card saved on your profile through our 
                      Service (Payment Method).</p>   


                    <p>You may edit/change your card details at any point of time by 
                      providing the required information on the previously saved 
                      card for authentication.</p>  


                    <p>By agreeing with all these terms, you are supposed to accept 
                      the amenities to save your card details for letting the process 
                      with ease consisting of your Cardholder name, Card number, and 
                      validity of the credit/debit card.</p>  

                    <p>In addition, if you are abiding by the data protection customs 
                      of your saved card details, kindly have a look here</p>  
                    

                      <p><span className="sp_cnt">4.6. Compensation:</span>If you are 
                      dissatisfied with the quality of any Products or the service provided
                      by a Restaurant and wish to seek a refund, a proportionate price 
                      reduction or any other compensation, you should contact the Restaurant
                      directly to lodge your complaint and, where appropriate, follow the
                      Restaurant's own complaint procedures. If you are unable to contact 
                      the Restaurant, or the Restaurant refuses to deal with your complaint,
                      you can contact our Customer Care Team as described above within 48 
                      hours of placing your Order and one of our Customer Care Advisers will
                      attempt to contact the Restaurant in order to request compensation on 
                      your behalf. Please note, however, that the legal contract for the supply 
                      and purchase of Products is between you and the Restaurant that you place 
                      your Order with. We have no control over Restaurants and the quality 
                      of the Products or service that they provide, and we are not able 
                      to provide, and have no responsibility or liability for providing, 
                      any compensation to you on behalf of any Restaurant.</p>
                      </div>

                      {/* // LOGIN STARTS // */}

                      <div className="login_starts" id="login_id" name="login_id">
                      <p className="main_fk_heading">Login and Registration</p> 

                      <p><span className="sp_cnt">5.1. Process of Order:</span>You can order 
                      from the menu of your chosen Restaurant and provided the other 
                      necessary information, you will proceed to the next step to place 
                      your order by selecting the "place my order" button. It essential 
                      to check the information you have given is correct are not if is not 
                      please correct it before selecting the place my order button once you 
                      complete the process of ordering then you are into a contract with the 
                      restaurant.</p>  


                      <p><span className="sp_cnt">5.2. Guest Login:</span>You can 
                      login as Guest to order your food online by entering your 
                      details such as name, contact number and delivery address. 
                      There would be no requirement to register and login. You can 
                      make the payment only by card while logging in as a guest.</p> 


                      <p><span className="sp_cnt">5.3. Password Reset:</span>You can 
                      reset your password by clicking on forgot password. By entering 
                      your email address on the page, you will receive a password reset
                       link to your email. You can enter your new password and login.</p> 


                       <span className="sp_cnt">5.4. We provide Visitors and Registered 
                       Users with access to the Services as described in this Agreement.</span> 

                       <p><span className="sp_cnt">Visitors:</span>No login is required for 
                       visitors to the Website (“Visitors”).</p>

                       <p>Visitors can (a) view all publicly-accessible content, (b) e-mail us, and (c) chat us.</p>  

                       
                       <p><span className="sp_cnt">Registered Users:</span>Login is required for 
                       all individuals who register to use the Services (“Registered Users”).</p>


                       <p>Registered Users can do all the things Visitors can do, and also</p>


                       <p>(a) place orders,</p>
                       <p>(b) search for restaurants based on location and cuisine,</p>
                       <p>(c) research a particular restaurant,</p>
                       <p>(d) sign up for offers and other notifications, and</p>
                       <p>(e) blog about your dining experience, including posting to your Facebook wall.</p>
                       </div>

                       {/* // online discount starts // */}


                       <div className="discount_starts" id="discount_id" name="discount_id">
                       <p className="main_fk_heading">Online Discount</p> 
                       <span className="sp_cnt">6.1. Coupon Code - Terms & Conditions</span>
                       <ul className="discount_list">
                        <li>Discount will apply to all the coupon codes issued by Fusion Kitchen.</li>
                        <li>Coupon codes are applicable only for online ordering.</li>
                        <li>Coupon codes can be redeemed only on orders placed through Fusion Kitchen’s Website or App.</li>
                        <li>Coupon code expiry date is published and no coupon code will be applicable after the expiration date.</li>
                        <li>Coupon codes vary based on each Restaurant/Takeaway.</li>
                        <li>Only one Coupon Code can be applied per order.</li>
                       </ul>

                       <span className="sp_cnt">6.2. Promo Code - Terms & Conditions</span>
                       <ul className="discount_list">
                        <li>Discount will apply to all promo codes issued by Fusion Kitchen.</li>
                        <li>Promo Code is applicable only on first order.</li>
                        <li>Promo Code is applicable only for online ordering.</li>
                        <li>Promo Code can be redeemed only on orders placed through Fusion Kitchen’s Website or App.</li>
                        <li>Discount not applicable in conjunction with other offers.</li>
                        <li>Discounts vary based on each restaurant/takeaway.</li>
                       </ul>


                       <span className="sp_cnt">6.3. Contest - Terms & Conditions</span>
                       <ul className="discount_list">
                        <li>The following terms and conditions will apply to all the offer 
                          contests issued by Fusion Kitchen in various platforms like social media.</li>
                        <li>Terms and conditions may vary based on specific contests issued by Fusion Kitchen.</li>
                        <li>Fusion Kitchen reserves the right, at its sole discretion; to refuse entry to this 
                          or future prize contests or refuse to award the prize to anyone in breach 
                          of these terms and/or any specific terms.
                          Contest is open to all UK residents only.</li>
                        <li>Winners are responsible for giving in all the correct details in order to avail the contest prize.</li>
                        <li>The prize of the winner is non-exchangeable, non-transferable and no cash alternative is offered.</li>
                        <li>Offer will be given as a coupon code and will be issued only on the next falling Friday.</li>
                        <li>Offer validity should be availed on the same day when the winners are announced. 
                          Prize Coupon code will not be applicable the next day.</li>
                        <li>Fusion Kitchen reserves the right to replace the prize with an alternative prize or equal or 
                          higher value if circumstances beyond Fusion Kitchen’s control make it necessary to do so.</li>
                        <li>Personal data that is supplied during the course of any Fusion Kitchen prize draw will be processed 
                          in accordance with Fusion Kitchen’s privacy policy 
                          which can be found at: https://www.fusionkitchen.co.uk/privacy.</li>
                        <li>We reserve the right to redraw a competition winner if the relevant 
                          prize is not accepted or claimed within the time period stated 
                          in the applicable Specific Competition Terms</li>

                       </ul>


                       <span className="sp_cnt">6.4. Our Service & Contract</span>
                       <p>We “Fusion Kitchen” are an online food ordering portal which provides 
                        a portal to the restaurant/ takeaway owners that can be changed accordingly.</p>

                        <p>When an order is placed and confirmed, we do not establish any 
                          contract with us and the customers. Although we take our customers’ 
                          satisfaction very seriously, if you have any problems with your food 
                          order, including any delivery services, please contact the restaurant 
                          directly.Your order is between you and the restaurant from which you 
                          order, and Fusion Kitchen is not an actual party to any such order. 
                          You can contact us to reach out to the restaurant for any doubts.</p>


                          <p><span className="sp_cnt">6.5. Images:</span>Any images of food 
                          displayed on the Website are provided as a design feature of the 
                          Website only and may not be either (a) an image of food prepared 
                          or produced by the Restaurant from which you choose to order; or (b) 
                          representative of the food you receive from a Restaurant.</p> 

                       </div>

                       {/* // online discount over //  */}

                       {/* // rating and review over // */}

                       <div className="rating_review" id="rating_id" name="rating_id" >
                       <p className="main_fk_heading">Ratings and Reviewst</p> 

                       <p>7.1. The Platform and other Interactive Areas may 
                        allow you to rate (each, a “Rating”) and post reviews 
                        (each, a “Review”) of Restaurants. Such Ratings and 
                        Reviews are considered Your Content and are governed
                         by the terms and conditions of this Agreement. Ratings 
                         and Reviews are not endorsed by Fusion Kitchen, and do 
                         not represent the views of Fusion Kitchen or of any 
                         affiliate or partner of Fusion Kitchen. Fusion Kitchen 
                         does not assume liability for Ratings and Reviews or 
                         for any claims, liabilities, or losses resulting from 
                         any Ratings and Reviews. We strive to maintain a high 
                         level of integrity with our Ratings and Reviews and 
                         other aspects of Your Content. Therefore, all Ratings 
                         and Reviews must comply with the following criteria: 
                         (1) before posting a Rating or Review, you must have 
                         had recent first-hand experience with the Restaurant; 
                         (2) you may not have a proprietary or other affiliation 
                         with either the Restaurant or any of its competitors; (3) 
                         you may not draw any legal conclusions regarding the 
                         Restaurants' products, services, or conduct; and (4) 
                         your review must otherwise comply with the terms of this 
                         Agreement as well as all applicable laws, rules, and 
                         regulations, including without limitation the Federal 
                         Trade Commission’s Guides Concerning the Use of Endorsements 
                         and Testimonials in Advertising. Any Rating and/or Review 
                         that we determine, in our sole discretion, could diminish 
                         the integrity of the Ratings and Reviews, the Materials and/or 
                         the Platform may be removed or excluded by us without notice.</p>

                       </div>

                       {/* // rating and rview over //  */}


                       <div className="alcohol" id="alcohol_id" name="alcohol_id">
                       <p className="main_fk_heading">Alcohol & Tobacco Products</p> 
                       <p>You hereby represent that you are an adult 
                        (18 years or older) and have the power and authority to enter into this 
                        Agreement and perform your obligations hereunder. You will be responsible for 
                        providing proper identification for the delivery of all tobacco and alcohol orders.</p>

                        <p>Purchasers of alcoholic beverages must be at least eighteen (18) years of age. 
                          You may not legally order any alcoholic beverages unless you are at least eighteen (18) 
                          years of age. Furthermore, you may not purchase alcoholic beverages for anyone who is under 
                          the age of eighteen (18). You must present identification and proof of age to receive
                          alcoholic beverages. We reserve the right to refuse service, terminate accounts, remove 
                          alcoholic beverages, or cancel orders at our sole discretion. Once you check out, you have 
                          affirmatively stated and certified that you are old enough to legally purchase alcohol 
                          and/or tobacco products and that you are purchasing such products for your own consumption 
                          and no other purpose. In the case of alcohol, you state and certify that you are 18 years of 
                          age or older. In the case of tobacco products, you state and certify that you are 18 years 
                          of age or older. You further certify that you will personally receive the alcoholic beverages 
                          and/or tobacco products and that you will have your identification available for inspection 
                          or you will fax your identification ahead of time where it will be kept on file for future 
                          orders.</p>

                          <p>IT IS A VIOLATION PUNISHABLE UNDER LAW FOR ANY PERSON UNDER THE AGE OF 
                            EIGHTEEN TO PRESENT ANY WRITTEN EVIDENCE OF AGE WHICH IS FALSE, FRAUDULENT, 
                            OR NOT ACTUALLY HIS/HER OWN FOR THE PURPOSE OF ATTEMPTING TO PURCHASE ANY 
                            ALCOHOLIC BEVERAGE.</p>

                          <p>Limited, non-exclusive, non-transferable, and royalty-free licence to use the 
                            Platform for the purposes of purchasing products including customer goods such as 
                            grocery products, alcohol, tobacco, and cigarettes(collectively, “Products”) from 
                            the Company sold on a business to consumer (B2C) basis;</p>  

                         <p>Tobacco and Alcoholic Products: The delivery of Tobacco and Alcoholic Products 
                          (“Tobacco and Alcohol-Related Products”) can only be made to You if You comply with 
                          the eligibility criteria prescribed under applicable law. The Company may request you 
                          to provide your identification documents to evidence compliance with the aforesaid, at 
                          the time of ordering and delivery of Tobacco and Alcoholic Products. Notwithstanding 
                          anything contained in these Terms, the riders shall deliver the ordered Tobacco and 
                          Alcoholic Products, only to the person who has ordered for such products on the Platform 
                          by furnishing their identification documents and subject to providing such documents for 
                          verification at the time of delivery. The rider may refuse the delivery of the ordered 
                          products in case of non – compliance with this requirement. By accessing the Tobacco and 
                          Alcoholic Products category on the Platform, (i) You represent that You comply with all 
                          eligibility criteria under applicable law including legal drinking age in your country of 
                          domicile and/ or where you are accessing the Platform and have not been previously 
                          suspended or prohibited from accessing or otherwise availing the Services of the 
                          Platform; (ii) You agree that any such Tobacco and Alcoholic Products ordered by you 
                          on the Platform is for your personal consumption and not for resale. You also agree that 
                          you will not provide the address of any public place, including but not limited to, 
                          educational institutions, hospitals, religious places as your delivery address for the 
                          order relating to Tobacco and Alcoholic Products. The Company and/or the riders reserves 
                          the right to refuse delivery of such order to you in case of any non – compliance by you 
                          with this condition.</p>

                       </div>
                            
                            {/* // alcohol over // */}


                            {/* // discamilar starts // */}


                     <div className="disclaimer" id="disc_id" name="disc_id">
                     <p className="main_fk_heading">Disclaimers</p> 

                     <p><span className="sp_cnt">Website information: </span>While we try to ensure that 
                     information on the Website is correct, we do not promise it is accurate or complete. 
                     We may make changes to the material on the Website, or to the functionality, Products 
                     and prices described on it, at any time without notice. The material on the Website may 
                     be out of date, and we make no commitment to update that material.</p> 
                    
                     <p>Allergy, dietary and other menu information: When a Restaurant signs up with us, they 
                      have to provide us with up-to-date menu information. We then include this on their dedicated 
                      page on the Website. Where this information includes allergy or other dietary information, 
                      we will do our best to republish this information on the website or app exactly as it appears 
                      on the restaurant's menu. If you have, or someone you are ordering for has, a concern about 
                      food allergies, intolerances or other dietary preferences, you should always contact the Restaurant 
                      directly before placing your order.</p>

                      <p>Restaurant actions and omissions: The legal contract for the supply and purchase of Products 
                        is between you and the Restaurant that you place your Order with. We have no control over the 
                        actions or omissions of any Restaurants. Without limiting the generality of the foregoing, you 
                        acknowledge and accept the following by using the Website.</p>

                      <p>We do not give any undertaking that the Products ordered from any Restaurant through the 
                        Website will be of satisfactory quality or suitable for your purpose and we disclaim any 
                        such warranties.</p>

                      <p>Estimated times for deliveries and collections are provided by the Restaurants and are only 
                        estimates. Neither we nor the Restaurants guarantee that Orders will be delivered or will 
                        be available for collection within the estimated times.</p>  


                      <p>We encourage all our Restaurants to accept all Orders and to communicate any rejection 
                        promptly, and we will notify you (generally by email) as soon as reasonably practicable 
                        if a Restaurant rejects your Order. However, we do not guarantee that Restaurants will accept 
                        and fulfil all Orders, and Restaurants have the discretion to reject Orders at any time because
                         they are too busy, if you fail to provide proof of age for purchases of alcohol, cigarettes or
                          other smoking products when required, due to weather conditions or for any other reason. 
                          Restaurants will not be obliged to deliver an Order to an address outside of their set 
                          delivery radius, which may change from time to time.</p>  

                      </div>  
                    {/* Acceptable Use Policy (AUP) */}
                      <div className="disclaimer" id="aup_id" name="aup_id">
                       <p className="main_fk_heading">Acceptable Use Policy (AUP)</p> 

                       <p><span className="sp_cnt"></span>This Acceptable Use Policy (AUP) outlines
                      the prohibited activities on our platform to ensure a secure and ethical environment for all users.
                       By using our services, you agree to comply with the following prohibited activities:
                      </p> 

                     <p><span className="sp_cnt">Development, Reselling, or Brokering: </span>
                     Users are prohibited from engaging in the development of a competing product,
                      reselling, or brokering our services to third parties without explicit authorization.
                      </p> 

                      <p><span className="sp_cnt">Harassment, Spamming, and Data Mining: </span>
                      Harassment, spamming, and the use of data mining techniques are strictly prohibited.
                       Users should refrain from engaging in activities that can cause harm or disruption
                       to individuals or businesses.
                      </p> 
                    
                      <p><span className="sp_cnt">Stalking, Harassment, and Impersonation: </span>
                      Stalking, harassment, spamming, or causing harm to an individual or business, 
                      as well as impersonating any person or entity, providing false personal information, 
                      or misrepresenting affiliations, are strictly forbidden.
                      </p> 

                      <p><span className="sp_cnt">Distribution of Malicious Code: </span>
                      Users must not engage in the distribution of viruses, worms, 
                      or any other malicious code that could harm or compromise the integrity 
                      of our platform or the data of other users.
                      </p> 

                      <p><span className="sp_cnt">Unauthorized Disclosure of Information: </span>
                      Disclosing information without appropriate authorization is prohibited. 
                      This includes but is not limited to unauthorized sharing of personal, 
                      financial, or sensitive information.
                      </p> 


                      

                      <p><span className="sp_cnt">Distribution of Malicious Code: </span>
                      Users must not engage in the distribution of viruses, worms, 
                      or any other malicious code that could harm or compromise the integrity 
                      of our platform or the data of other users.
                      </p> 

                      <p><span className="sp_cnt">Payment Card Industry Data: </span>
                       Users must not transmit or store Payment Card Industry (PCI) data,
                       such as credit card numbers, without using an authorized Fusions 
                       Kitchen payment integration.
                      </p> 

                      <p><span className="sp_cnt">Disclosure of Regulated Information: </span>
                      Users are prohibited from disclosing information specified in relevant privacy regulations.
                       This includes but is not limited to medical or health insurance information, educational information, 
                       employment details, credit or debit card information, driver's licence, or other government identification numbers.
                      </p> 

                      <p><span className="sp_cnt"> </span>
                      Violations of this AUP may result in the suspension or termination of your account,
                      legal action, or other appropriate measures.
                      </p>
                      <p><span className="sp_cnt"> </span>
                      We reserve the right to update and modify this AUP to reflect changes in our services or applicable laws. 
                      Users are encouraged to review this policy regularly.
                      </p>

                      <p><span className="sp_cnt"> </span>
                      If you have any questions or concerns regarding this AUP, please contact support@fusionkitchen.co.uk.
                      </p> 

                      

                     


                      </div>  


                      </div>
            </div>
          </div>
        </div>
        </section>
                   
                   {/* // accordions starts for mobile response // */}

          <section className="terms_conditions_mobile">
              <div className="container">
              <div className="row">
              <div className="col-xl-12 col-lg-12">
                    
              {/* // intro fixed starts // */}

            <div className="tc_intro">
            <p className="main_heading">General T&C</p>
            <p className="main_sub_content">Fusion Kitchen</p>
            <p className="main_fk_heading">Fusion Kitchen - Terms and Conditions</p>
            <p>Fusion Kitchen is an online ordering portal with an extensive selection 
            of food channels within your local area.</p>
            <p>Fusion Kitchen is not a restaurant or food preparation entity. 
              The Restaurants available on our Platform operate independently 
              of Fusion Kitchen. Restaurants are required to comply with federal, 
              state, and local laws, rules, regulations, and standards pertaining 
              to the preparation, sale, and marketing of food, including, without 
              limitation, food preparation and safety and menu disclosure. Fusion 
              Kitchen is not liable or responsible for Restaurants' food preparation 
              or safety and does not verify their compliance with all applicable laws. 
              In addition, Fusion Kitchen does not guarantee the quality of what the 
              Restaurants sell, nor does it guarantee the services provided by them, 
              including, without limitation, in those cases where they provide the 
              delivery services or engage another third-party delivery service.</p>

            </div>          
                    
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className="number">1</span>
        <span className="label">Introduction</span></Accordion.Header>
        <Accordion.Body>
        <div className="introduction_starts " id="intro_id">
        <p className="sub_content">1.1. In these Website Terms of Use, 
              unless the context otherwise requires, the following expressions 
              have the following meanings:</p>

              <p>"Content" will include (but is not limited to) reviews, images, 
                photos, audio, video, location data, nearby places, and all other 
                forms of information or data.</p>

              <p>"Your content" or "User Content" means content that you upload,
                   share or transmit to, through or in connection with the Services, 
                   such as likes, ratings, reviews, images, photos, messages, profile 
                   information, and any other materials that you publicly display or
                    displayed in your account profile.</p>
              
              <p>"Fusion Kitchen Content" means content that Fusion Kitchen creates 
                and make available in connection with the Services including, but not 
                limited to, visual interfaces, interactive features, graphics, design, 
                compilation, computer code, products, software, aggregate ratings,
                reports and other usage-related data in connection with activities 
                associated with your account and all other elements and components of
                 the Services excluding Your Content and Third Party Content.</p>

              <p>"Third Party Content" means content that comes from parties other 
                than Fusion Kitchen or its users and is available on the Services.</p>

              <p>"We/Us/Our" means Fusion Kitchen.</p>

              <p>“Takeaway/ Restaurant” refers to the available food outlets in Fusion 
                Kitchen you wish to place your order with.</p>

              <p>“Website” means fusionkitchen.co.uk</p>

              <p>“App” means Fusion Kitchen mobile application that you can download to place food orders.</p>  

              <p><span className="sp_cnt">1.2. Product Orders:</span>We provide a way for you to communicate 
              your orders ("Orders") for products ("Products") to delivery or takeaway restaurants
               ("Restaurants") displayed on the Website. The legal contract for the supply
                and purchase of Products is between you and the Restaurant that you place 
                your Order with and we will conclude the sale of Products on behalf of, 
                and agent for the Restaurants in all cases.</p>
        </div>
        </Accordion.Body>
      </Accordion.Item>


      {/* // second // */}


      <Accordion.Item eventKey="1">
        <Accordion.Header><span className="number">2</span>
        <span className="label">Access to our website</span></Accordion.Header>
        <Accordion.Body>
        <div className="website_starts" id="access_id">
                <p><span className="sp_cnt">2.1. Access to Site</span>Access to our Site 
                is free of charge. You may access some areas of the Website without 
                making an Order or registering your details with us.</p>
                
                <p><span className="sp_cnt">2.2. Responsibility:</span>You are confirming
                 that you have read and understand this consent, making all arrangements
                  necessary for you to have access to the Website, You are responsible for
                   ensuring that all persons who access the website through your Internet 
                   are aware of these Website Terms and that they comply with them.</p>
                  </div>
        </Accordion.Body>
      </Accordion.Item>


      {/* // third // */}



      <Accordion.Item eventKey="2">
        <Accordion.Header><span className="number">3</span>
        <span className="label">Allergy</span></Accordion.Header>
        <Accordion.Body>
        <div className="allergy_starts" id="allergy_id">
                   <p><span className="sp_cnt">3.1. Allergy:</span>In case of you having
                    allergy in any specific food please contact the restaurant and 
                    check directly with them before placing the order.</p>
                   
                    <span className="sp_cnt">Process of the order</span>

                    <p><span className="sp_cnt">3.1. Allergy:</span>In case of you having
                    allergy in any specific food please contact the restaurant and 
                    check directly with them before placing the order.</p>

                    <p><span className="sp_cnt">4.1. Process of Order:</span>You can order
                     from the menu of your chosen Restaurant and provide the other necessary
                      information; you will proceed to the next step to place your order by 
                      selecting the "place my order" button. It is essential to check if the 
                      information you have given is correct and if it is not; please correct
                      it before selecting the place my order button once you complete the process
                       of ordering then you are into a contract with the restaurant.</p>

                    <p><span className="sp_cnt">4.2. Cancelling the Order:</span>If you wish 
                       to cancel your order paid by card, you can directly contact the takeaway 
                       for cancellation or refund request. You can also reach us via our live 
                       chat in case of any information required. Refund once initiated takes 2-3
                        working days to get reflected in your account.</p>   

                    <p><span className="sp_cnt">4.3. Delivery/Collection:</span>The delivery
                         and collection estimated time had been provided by the restaurant, 
                         however we do not guarantee that your order will be delivered or 
                         available for collection within the given time.</p> 
                        
                    <p><span className="sp_cnt">4.4. Payment methods:</span>Payment for 
                         Orders must be made by an accepted credit or debit card through the
                          Website or in cash to the Restaurant at the point of delivery to or
                           collection by you. You can also pay through Google Pay or Apple Pay.</p>

                    <p>Also, please be advised that your use 
                          of Google Pay or Apple Pay is subject to the
                           terms and conditions, including the privacy 
                           policies, of Google and Apple, respectively. 
                           By using Google Pay, you hereby accept the 
                           Google Pay API Terms of Service found 
                           here: https://payments.developers<br />.google.com/terms/sellertos</p> 

                    <p><span className="sp_cnt">4.5. Saved Card:</span>In order to make your 
                    credit/debit card save for payment over the phone or online payment options, 
                    you need to provide your card details submitted to our consent where it has 
                    been saved on your account with us.</p>    


                    <p>Payment for Fusion Kitchen through online payment over card can be 
                      made by a credit or debit card saved on your profile through our 
                      Service (Payment Method).</p>   


                    <p>You may edit/change your card details at any point of time by 
                      providing the required information on the previously saved 
                      card for authentication.</p>  


                    <p>By agreeing with all these terms, you are supposed to accept 
                      the amenities to save your card details for letting the process 
                      with ease consisting of your Cardholder name, Card number, and 
                      validity of the credit/debit card.</p>  

                    <p>In addition, if you are abiding by the data protection customs 
                      of your saved card details, kindly have a look here</p>  
                    

                      <p><span className="sp_cnt">4.6. Compensation:</span>If you are 
                      dissatisfied with the quality of any Products or the service provided
                      by a Restaurant and wish to seek a refund, a proportionate price 
                      reduction or any other compensation, you should contact the Restaurant
                      directly to lodge your complaint and, where appropriate, follow the
                      Restaurant's own complaint procedures. If you are unable to contact 
                      the Restaurant, or the Restaurant refuses to deal with your complaint,
                      you can contact our Customer Care Team as described above within 48 
                      hours of placing your Order and one of our Customer Care Advisers will
                      attempt to contact the Restaurant in order to request compensation on 
                      your behalf. Please note, however, that the legal contract for the supply 
                      and purchase of Products is between you and the Restaurant that you place 
                      your Order with. We have no control over Restaurants and the quality 
                      of the Products or service that they provide, and we are not able 
                      to provide, and have no responsibility or liability for providing, 
                      any compensation to you on behalf of any Restaurant.</p>
                      </div> 
        </Accordion.Body>
      </Accordion.Item>


                  {/* // four starts // */}

        <Accordion.Item eventKey="3">
        <Accordion.Header><span className="number">4</span>
        <span className="label">Login and Registration</span></Accordion.Header>
        <Accordion.Body>
        <div className="login_starts" id="login_id">
                      <p><span className="sp_cnt">5.1. Process of Order:</span>You can order 
                      from the menu of your chosen Restaurant and provided the other 
                      necessary information, you will proceed to the next step to place 
                      your order by selecting the "place my order" button. It essential 
                      to check the information you have given is correct are not if is not 
                      please correct it before selecting the place my order button once you 
                      complete the process of ordering then you are into a contract with the 
                      restaurant.</p>  


                      <p><span className="sp_cnt">5.2. Guest Login:</span>You can 
                      login as Guest to order your food online by entering your 
                      details such as name, contact number and delivery address. 
                      There would be no requirement to register and login. You can 
                      make the payment only by card while logging in as a guest.</p> 


                      <p><span className="sp_cnt">5.3. Password Reset:</span>You can 
                      reset your password by clicking on forgot password. By entering 
                      your email address on the page, you will receive a password reset
                       link to your email. You can enter your new password and login.</p> 


                       <span className="sp_cnt">5.4. We provide Visitors and Registered 
                       Users with access to the Services as described in this Agreement.</span> 

                       <p><span className="sp_cnt">Visitors:</span>No login is required for 
                       visitors to the Website (“Visitors”).</p>

                       <p>Visitors can (a) view all publicly-accessible content, (b) e-mail us, and (c) chat us.</p>  

                       
                       <p><span className="sp_cnt">Registered Users:</span>Login is required for 
                       all individuals who register to use the Services (“Registered Users”).</p>


                       <p>Registered Users can do all the things Visitors can do, and also</p>


                       <p>(a) place orders,</p>
                       <p>(b) search for restaurants based on location and cuisine,</p>
                       <p>(c) research a particular restaurant,</p>
                       <p>(d) sign up for offers and other notifications, and</p>
                       <p>(e) blog about your dining experience, including posting to your Facebook wall.</p>
                       </div>
       
        </Accordion.Body>
      </Accordion.Item>
            

            {/* // five starts // */}
        

        <Accordion.Item eventKey="4">
        <Accordion.Header><span className="number">5</span>
        <span className="label">Online Discount</span></Accordion.Header>
        <Accordion.Body>
        <div className="discount_starts" id="discount_id">
                       <span className="sp_cnt">6.1. Coupon Code - Terms & Conditions</span>
                       <ul className="discount_list">
                        <li>Discount will apply to all the coupon codes issued by Fusion Kitchen.</li>
                        <li>Coupon codes are applicable only for online ordering.</li>
                        <li>Coupon codes can be redeemed only on orders placed through Fusion Kitchen’s Website or App.</li>
                        <li>Coupon code expiry date is published and no coupon code will be applicable after the expiration date.</li>
                        <li>Coupon codes vary based on each Restaurant/Takeaway.</li>
                        <li>Only one Coupon Code can be applied per order.</li>
                       </ul>

                       <span className="sp_cnt">6.2. Promo Code - Terms & Conditions</span>
                       <ul className="discount_list">
                        <li>Discount will apply to all promo codes issued by Fusion Kitchen.</li>
                        <li>Promo Code is applicable only on first order.</li>
                        <li>Promo Code is applicable only for online ordering.</li>
                        <li>Promo Code can be redeemed only on orders placed through Fusion Kitchen’s Website or App.</li>
                        <li>Discount not applicable in conjunction with other offers.</li>
                        <li>Discounts vary based on each restaurant/takeaway.</li>
                       </ul>


                       <span className="sp_cnt">6.3. Contest - Terms & Conditions</span>
                       <ul className="discount_list">
                        <li>The following terms and conditions will apply to all the offer 
                          contests issued by Fusion Kitchen in various platforms like social media.</li>
                        <li>Terms and conditions may vary based on specific contests issued by Fusion Kitchen.</li>
                        <li>Fusion Kitchen reserves the right, at its sole discretion; to refuse entry to this 
                          or future prize contests or refuse to award the prize to anyone in breach 
                          of these terms and/or any specific terms.
                          Contest is open to all UK residents only.</li>
                        <li>Winners are responsible for giving in all the correct details in order to avail the contest prize.</li>
                        <li>The prize of the winner is non-exchangeable, non-transferable and no cash alternative is offered.</li>
                        <li>Offer will be given as a coupon code and will be issued only on the next falling Friday.</li>
                        <li>Offer validity should be availed on the same day when the winners are announced. 
                          Prize Coupon code will not be applicable the next day.</li>
                        <li>Fusion Kitchen reserves the right to replace the prize with an alternative prize or equal or 
                          higher value if circumstances beyond Fusion Kitchen’s control make it necessary to do so.</li>
                        <li>Personal data that is supplied during the course of any Fusion Kitchen prize draw will be processed 
                          in accordance with Fusion Kitchen’s privacy policy 
                          which can be found at: https://www.fusionkitchen.co.uk/privacy.</li>
                        <li>We reserve the right to redraw a competition winner if the relevant 
                          prize is not accepted or claimed within the time period stated 
                          in the applicable Specific Competition Terms</li>

                       </ul>


                       <span className="sp_cnt">6.4. Our Service & Contract</span>
                       <p>We “Fusion Kitchen” are an online food ordering portal which provides 
                        a portal to the restaurant/ takeaway owners that can be changed accordingly.</p>

                        <p>When an order is placed and confirmed, we do not establish any 
                          contract with us and the customers. Although we take our customers’ 
                          satisfaction very seriously, if you have any problems with your food 
                          order, including any delivery services, please contact the restaurant 
                          directly.Your order is between you and the restaurant from which you 
                          order, and Fusion Kitchen is not an actual party to any such order. 
                          You can contact us to reach out to the restaurant for any doubts.</p>


                          <p><span className="sp_cnt">6.5. Images:</span>Any images of food 
                          displayed on the Website are provided as a design feature of the 
                          Website only and may not be either (a) an image of food prepared 
                          or produced by the Restaurant from which you choose to order; or (b) 
                          representative of the food you receive from a Restaurant.</p> 

                       </div>
        </Accordion.Body>
      </Accordion.Item>

         {/* // six starts // */}


         <Accordion.Item eventKey="5">
        <Accordion.Header><span className="number">6</span>
        <span className="label">Ratings and Reviews</span></Accordion.Header>
        <Accordion.Body><div className="rating_review" id="rating_id" >
                       <p>7.1. The Platform and other Interactive Areas may 
                        allow you to rate (each, a “Rating”) and post reviews 
                        (each, a “Review”) of Restaurants. Such Ratings and 
                        Reviews are considered Your Content and are governed
                         by the terms and conditions of this Agreement. Ratings 
                         and Reviews are not endorsed by Fusion Kitchen, and do 
                         not represent the views of Fusion Kitchen or of any 
                         affiliate or partner of Fusion Kitchen. Fusion Kitchen 
                         does not assume liability for Ratings and Reviews or 
                         for any claims, liabilities, or losses resulting from 
                         any Ratings and Reviews. We strive to maintain a high 
                         level of integrity with our Ratings and Reviews and 
                         other aspects of Your Content. Therefore, all Ratings 
                         and Reviews must comply with the following criteria: 
                         (1) before posting a Rating or Review, you must have 
                         had recent first-hand experience with the Restaurant; 
                         (2) you may not have a proprietary or other affiliation 
                         with either the Restaurant or any of its competitors; (3) 
                         you may not draw any legal conclusions regarding the 
                         Restaurants' products, services, or conduct; and (4) 
                         your review must otherwise comply with the terms of this 
                         Agreement as well as all applicable laws, rules, and 
                         regulations, including without limitation the Federal 
                         Trade Commission’s Guides Concerning the Use of Endorsements 
                         and Testimonials in Advertising. Any Rating and/or Review 
                         that we determine, in our sole discretion, could diminish 
                         the integrity of the Ratings and Reviews, the Materials and/or 
                         the Platform may be removed or excluded by us without notice.</p>

                       </div>

       
        </Accordion.Body>
      </Accordion.Item>


      {/* // seven starts // */}

      <Accordion.Item eventKey="6">
        <Accordion.Header><span className="number">7</span>
       <span className="label">Alcohol & Tobacco Products</span></Accordion.Header>
        <Accordion.Body>
        <div className="alcohol" id="alcohol_id">
                       <p>You hereby represent that you are an adult 
                        (18 years or older) and have the power and authority to enter into this 
                        Agreement and perform your obligations hereunder. You will be responsible for 
                        providing proper identification for the delivery of all tobacco and alcohol orders.</p>

                        <p>Purchasers of alcoholic beverages must be at least eighteen (18) years of age. 
                          You may not legally order any alcoholic beverages unless you are at least eighteen (18) 
                          years of age. Furthermore, you may not purchase alcoholic beverages for anyone who is under 
                          the age of eighteen (18). You must present identification and proof of age to receive
                          alcoholic beverages. We reserve the right to refuse service, terminate accounts, remove 
                          alcoholic beverages, or cancel orders at our sole discretion. Once you check out, you have 
                          affirmatively stated and certified that you are old enough to legally purchase alcohol 
                          and/or tobacco products and that you are purchasing such products for your own consumption 
                          and no other purpose. In the case of alcohol, you state and certify that you are 18 years of 
                          age or older. In the case of tobacco products, you state and certify that you are 18 years 
                          of age or older. You further certify that you will personally receive the alcoholic beverages 
                          and/or tobacco products and that you will have your identification available for inspection 
                          or you will fax your identification ahead of time where it will be kept on file for future 
                          orders.</p>

                          <p>IT IS A VIOLATION PUNISHABLE UNDER LAW FOR ANY PERSON UNDER THE AGE OF 
                            EIGHTEEN TO PRESENT ANY WRITTEN EVIDENCE OF AGE WHICH IS FALSE, FRAUDULENT, 
                            OR NOT ACTUALLY HIS/HER OWN FOR THE PURPOSE OF ATTEMPTING TO PURCHASE ANY 
                            ALCOHOLIC BEVERAGE.</p>

                          <p>Limited, non-exclusive, non-transferable, and royalty-free licence to use the 
                            Platform for the purposes of purchasing products including customer goods such as 
                            grocery products, alcohol, tobacco, and cigarettes(collectively, “Products”) from 
                            the Company sold on a business to consumer (B2C) basis;</p>  

                         <p>Tobacco and Alcoholic Products: The delivery of Tobacco and Alcoholic Products 
                          (“Tobacco and Alcohol-Related Products”) can only be made to You if You comply with 
                          the eligibility criteria prescribed under applicable law. The Company may request you 
                          to provide your identification documents to evidence compliance with the aforesaid, at 
                          the time of ordering and delivery of Tobacco and Alcoholic Products. Notwithstanding 
                          anything contained in these Terms, the riders shall deliver the ordered Tobacco and 
                          Alcoholic Products, only to the person who has ordered for such products on the Platform 
                          by furnishing their identification documents and subject to providing such documents for 
                          verification at the time of delivery. The rider may refuse the delivery of the ordered 
                          products in case of non – compliance with this requirement. By accessing the Tobacco and 
                          Alcoholic Products category on the Platform, (i) You represent that You comply with all 
                          eligibility criteria under applicable law including legal drinking age in your country of 
                          domicile and/ or where you are accessing the Platform and have not been previously 
                          suspended or prohibited from accessing or otherwise availing the Services of the 
                          Platform; (ii) You agree that any such Tobacco and Alcoholic Products ordered by you 
                          on the Platform is for your personal consumption and not for resale. You also agree that 
                          you will not provide the address of any public place, including but not limited to, 
                          educational institutions, hospitals, religious places as your delivery address for the 
                          order relating to Tobacco and Alcoholic Products. The Company and/or the riders reserves 
                          the right to refuse delivery of such order to you in case of any non – compliance by you 
                          with this condition.</p>

                       </div>
        </Accordion.Body>
      </Accordion.Item>


      {/* // seven starts // */}

      <Accordion.Item eventKey="7">
        <Accordion.Header><span className="number">8</span>
        <span className="label">Disclaimers</span></Accordion.Header>
        <Accordion.Body>
        <div className="disclaimer" id="disc_id">
                     <p><span className="sp_cnt">Website information: </span>While we try to ensure that 
                     information on the Website is correct, we do not promise it is accurate or complete. 
                     We may make changes to the material on the Website, or to the functionality, Products 
                     and prices described on it, at any time without notice. The material on the Website may 
                     be out of date, and we make no commitment to update that material.</p> 
                    
                     <p>Allergy, dietary and other menu information: When a Restaurant signs up with us, they 
                      have to provide us with up-to-date menu information. We then include this on their dedicated 
                      page on the Website. Where this information includes allergy or other dietary information, 
                      we will do our best to republish this information on the website or app exactly as it appears 
                      on the restaurant's menu. If you have, or someone you are ordering for has, a concern about 
                      food allergies, intolerances or other dietary preferences, you should always contact the Restaurant 
                      directly before placing your order.</p>

                      <p>Restaurant actions and omissions: The legal contract for the supply and purchase of Products 
                        is between you and the Restaurant that you place your Order with. We have no control over the 
                        actions or omissions of any Restaurants. Without limiting the generality of the foregoing, you 
                        acknowledge and accept the following by using the Website.</p>

                      <p>We do not give any undertaking that the Products ordered from any Restaurant through the 
                        Website will be of satisfactory quality or suitable for your purpose and we disclaim any 
                        such warranties.</p>

                      <p>Estimated times for deliveries and collections are provided by the Restaurants and are only 
                        estimates. Neither we nor the Restaurants guarantee that Orders will be delivered or will 
                        be available for collection within the estimated times.</p>  


                      <p>We encourage all our Restaurants to accept all Orders and to communicate any rejection 
                        promptly, and we will notify you (generally by email) as soon as reasonably practicable 
                        if a Restaurant rejects your Order. However, we do not guarantee that Restaurants will accept 
                        and fulfil all Orders, and Restaurants have the discretion to reject Orders at any time because
                         they are too busy, if you fail to provide proof of age for purchases of alcohol, cigarettes or
                          other smoking products when required, due to weather conditions or for any other reason. 
                          Restaurants will not be obliged to deliver an Order to an address outside of their set 
                          delivery radius, which may change from time to time.</p>  

                      </div>       
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="8">
        <Accordion.Header><span className="number">9</span>
        <span className="label">Acceptable Use Policy (AUP) - Prohibited Activities</span></Accordion.Header>
        <Accordion.Body>
        <div className="allergy_starts" id="aup_id">
                   <p><span className="sp_cnt"></span>This Acceptable Use Policy (AUP) outlines 
                   the prohibited activities on our platform to ensure a secure and ethical
                    environment for all users. By using our services, you agree to comply with 
                    the following prohibited activities:
                    </p>
                   


                    <p><span className="sp_cnt">Development, Reselling, or Brokering:</span>
                    Users are prohibited from engaging in the development of a competing product,
                     reselling, or brokering our services to third parties without explicit
                      authorization.
                    </p>

                    <p><span className="sp_cnt">Harassment, Spamming, and Data Mining:</span>
                    Harassment, spamming, and the use of data mining techniques are strictly prohibited.
                     Users should refrain from engaging in activities that can cause harm or disruption
                      to individuals or businesses.</p>

                    <p><span className="sp_cnt">Stalking, Harassment, and Impersonation:</span>
                    Stalking, harassment, spamming, or causing harm to an individual or business, 
                    as well as impersonating any person or entity, providing false personal information,
                    or misrepresenting affiliations, are strictly forbidden.
                   </p>   

                    <p><span className="sp_cnt">Distribution of Malicious Code:</span>
                    Users must not engage in the distribution of viruses, worms, or any other 
                    malicious code that could harm or compromise the integrity of our platform 
                    or the data of other users.</p> 
                        
                    <p><span className="sp_cnt">Unauthorized Disclosure of Information:</span>
                    Disclosing information without appropriate authorization is prohibited.
                    This includes but is not limited to unauthorized sharing of personal, 
                    financial, or sensitive information.</p>

                    <p><span className="sp_cnt">Payment Card Industry Data:</span>
                    Users must not transmit or store Payment Card Industry (PCI) data, 
                    such as credit card numbers, without using an authorized Fusions 
                    Kitchen payment integration.</p>    

                    <p><span className="sp_cnt">Disclosure of Regulated Information:</span>
                    Users are prohibited from disclosing information specified in relevant privacy regulations. 
                    This includes but is not limited to medical or health insurance information, educational information, 
                    employment details, credit or debit card information, driver's licence, or other government identification 
                    numbers.</p>

                    <p><span className="sp_cnt"></span>
                    Violations of this AUP may result in the suspension or termination of your account, 
                    legal action, or other appropriate measures.
                    </p>

                    <p><span className="sp_cnt"></span>
                    We reserve the right to update and modify this AUP to reflect changes in our services 
                    or applicable laws. Users are encouraged to review this policy regularly.
                    </p>

                    <p><span className="sp_cnt"></span>
                    If you have any questions or concerns regarding this AUP, please contact support@fusionkitchen.co.uk.

                    </p>



                    </div> 



        </Accordion.Body>
      </Accordion.Item>

        
    </Accordion>
    

      </div> 
    </div>
  </div>
 </section>
 
 </>
  );
};
export default TermsCondition;
