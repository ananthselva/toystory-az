import {useEffect} from 'react';
import "./stuart.scss";
import { Accordion } from "react-bootstrap";


import { Link as ScrollLink } from "react-scroll";
import { OrderFlow } from "../../App";
const Stuart = () => {
    const{setFooterLoading,footerLoading}=OrderFlow();
    useEffect(()=>{
     console.log(footerLoading);
     setFooterLoading(true);
    },[]);
  return (
    <>
    <section className="stuart">
        
       <div className="container">
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="left-content">
                <div className="widget sidebar-item">
                    <div className="make-me-sticky">
                    <ul className="list_one">
                    <ScrollLink activeClass="active" to="one" spy={true} smooth={true} offset={-70} duration={0}><span>1</span> Introduction</ScrollLink>
                    <ScrollLink activeClass="active" to="two" spy={true} smooth={true} offset={-70} duration={0}><span>2</span> Use of Delivery Services</ScrollLink>
                    <ScrollLink activeClass="active" to="three" spy={true} smooth={true} offset={-70} duration={0}><span>3</span> Delivery Partnership T&C</ScrollLink>
    
                    <ScrollLink activeClass="active" to="four" spy={true} smooth={true} offset={-70} duration={0}><span>4</span> General Terms - Clients & Customers  </ScrollLink>
                    <ScrollLink activeClass="active" to="five" spy={true} smooth={true} offset={-70} duration={0}><span>5</span> Communication  </ScrollLink>
                    <ScrollLink activeClass="active" to="six" spy={true} smooth={true} offset={-70} duration={0}><span>6</span> Confirmation  </ScrollLink>
                    <ScrollLink activeClass="active" to="seven" spy={true} smooth={true} offset={-70} duration={0}><span>7</span> Acceptance  </ScrollLink>
                    <ScrollLink activeClass="active" to="eight" spy={true} smooth={true} offset={-70} duration={0}><span>8</span> Processes  </ScrollLink>
                    <ScrollLink activeClass="active" to="nine" spy={true} smooth={true} offset={-70} duration={0}><span>9</span> Payment  </ScrollLink>
                    <ScrollLink activeClass="active" to="ten" spy={true} smooth={true} offset={-70} duration={0}><span className="one">10</span> General Principles  </ScrollLink>
                    <ScrollLink activeClass="active" to="eleven" spy={true} smooth={true} offset={-70} duration={0}><span className="one">11</span> Cancellation  </ScrollLink>
                    <ScrollLink activeClass="active" to="twelve" spy={true} smooth={true} offset={-70} duration={0}><span className="one">12</span> return  </ScrollLink>
      

     
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9">
                <div className="right-content">
                    <div className="right-title" id="one" name= "one">
                        <h1>Delivery Partnership Terms and Conditions</h1>
                        <div class="h-line"></div>
                        </div>
                    <h6 className="s-title">Read the information about Fusion Kitchen Delivery Partnership Terms and Conditions</h6>
                    <p>This Delivery Service Agreement (The “Terms”) sets forth relevant terms and conditions governing the provision of Delivery Services for items received via Fusion Kitchen, and your relationship with Fusion Kitchen where you request it to provide Delivery Services as described below. You can contact us by using the Help Section on the Fusion Kitchen page.
                        <br></br>
                        <br></br>
                       In order to request Delivery Services in the UK for the first time, all Fusion Kitchen users must accept these terms and conditions. By requesting Delivery Services, you confirm that you accept these terms. These terms will apply to all subsequent orders you receive for Delivery Services.
                       <br></br>
                       <br></br>
                       When accessing or using the Delivery Services, you consent to be bound by the terms, as amended, at the time you use the Delivery Services.
                       <br></br>
                       <br></br>
                       These terms are additional to terms you have entered into in relation to your use of Fusion Kitchen website services. For the purpose of Fusion Kitchen terms, the Fusion Kitchen entity you have contracted with for Fusion Kitchen delivery is Stuart.</p>
                       <br></br>
                       <div className="deli_serv" id="two" name= "two">
                        <h2>Use of Delivery Services</h2>
                        <ol>
                                <li>Once you have been provided access to the Fusion Kitchen, you may receive orders. Please note that the orders received on your website are based on the information supplied by the relevant customers. </li> 
                                <li>Stuart delivery partner will deliver the orders you receive.</li> 
                                <li>In the case of Stuart delivery, you will contract with Fusion Kitchen and be charged by Fusion Kitchen for the Delivery Services. Fusion Kitchen will request Stuart to collect items from you and deliver such items to your customers on Fusion Kitchen’s behalf. </li> 
                                <li>In other cases, such as a Pickup order, you may deliver items which do not require the use of Delivery Services.</li> 
                                <li>Fusion Kitchen Delivery is a Stuart Delivery, Fusion Kitchen and Stuart together will endeavour to ensure that your orders received will be delivered to your customers as reasonably possible. We will give you an estimated range of how long the delivery will take after you receive the order. Unfortunately, the independent factors such as traffic and weather, as well as the actions or inactions yourself may cause delays in the provision of Delivery Services.</li> 
                                <li>Fusion Kitchen doesn’t guarantee the Delivery Services as it’s the integration of Stuart for the delivery partnership.</li> 
                                <li>You and Fusion Kitchen may terminate these Terms or the Delivery Services if the other party violates the provisions of these Terms. Subject to clause 2.10, you can terminate these Terms by writing to us or by no longer requesting Delivery Services. Fusion Kitchen may suspend all or part of the Delivery Services, and otherwise, operate or discontinue the Delivery Services.</li> 
                                <li>You may reject your orders received if you can’t deliver them to your customers. </li> 
                                <li>If the delivery fails for reasons attributed to the customers, for example, your customers were not available during the delivery, you may charge full price for the items and delivery services. </li> 
                                <li>If Stuart cancels the Delivery services for any reason not attributed to your customers, they will be entitled to a refund for any if paid.</li>                        
                                </ol>
                       </div>
                       <div className="deli_part" id="three" name= "three">
                        <h2>Delivery Partnership Terms and Conditions - For Customers</h2>
                       <p> Thank you for choosing Fusion Kitchen

                        This Delivery Service Agreement (The “Terms”) sets forth relevant terms and conditions governing the provision of Delivery Services for items ordered via Fusion Kitchen, and your relationship with Fusion Kitchen where you request it to provide Delivery Services as described below. You can contact us by using the Help Section of the Fusion Kitchen page.

                        In order to request Delivery Services in the UK for the first time, all Fusion Kitchen users must accept these terms and conditions. By requesting Delivery Services, you confirm that you accept these terms. These terms will apply to all subsequent orders you place for Delivery Services.

                        When accessing or using the Delivery Services, you consent to be bound by the terms, as amended, at the time you use the Delivery Services.

                        These terms are additional to terms you have entered into in relation to your use of Fusion Kitchen website services. For the purpose of Fusion Kitchen terms, the Fusion Kitchen entity you have contracted with for Fusion Kitchen delivery is Stuart.</p>
                       </div>
                       <div className="gen_terms" id="four" name= "four">
                        <h2>General Terms</h2>
                        <h5>Delivery Requirements</h5>
                        <ol>
                                    <li>The delivery driver undertakes to the customer that it will comply with the minimum standards set out below and that it will also comply with any additional requests that may be made by the user or any other requirements set by the customer from time to time, whether directly through the application or via Fusion Kitchen. The Delivery partners agree to procure that their employees, workers, contractors, agents or representatives will also comply with these standards and requests. </li>
                                    <li>If the delivery order requires specific conditions, on the order of the customer in terms of hygiene, temperature or equipment, for example for chilled items, fragile items, etc. or other conditions required to meet applicable legislation, the delivery driver must ensure, prior to its acceptance, that its method of transport and equipment meets these specifications.</li>
                                    <li>The delivery driver will ensure that it has the equipment required to meet the customer's needs for delivery capacity and quality as outlined and as updated by Fusion Kitchen from time to time. </li>
                                    <li>The delivery driver can use unbranded equipment where the branded equipment is purchased from or supplied by Stuart. The terms of conditions for the purchase of equipment will be presented to the delivery drivers upon request. Fusion Kitchen reserves the right to undertake checks to ensure that delivery drivers have the equipment that they have reported to Fusion Kitchen that they are using. Fusion Kitchen may suspend or terminate the account of any delivery driver that does not have the equipment that they have reported to the Fusion Kitchen.</li>
                                    <li>In addition, the delivery driver shall comply with the following customer requirements:</li>
                                    <li>Act with professionalism and carry out the deliveries of orders diligently, demonstrating the highest level of care;</li>
                                    <li>Act responsibly with the orders, ie., to ensure they are not damaged, destroyed, tampered with, stolen or lost, and act responsibly in the driving of its method of transport;</li>
                                    <li>Do not carry out or be engaged in any conduct prejudicial to the customer, including any discrimination, harassment, threatening behaviour, criminal activity or any fraudulent action (as determined by Fusion Kitchen, acting reasonably, as constituting fraudulent action);</li>
                                    <li>Maintain a professional, clean and tidy appearance;</li>
                                    <li>Maintain personal hygiene standards appropriate to the serving of food;</li>
                                    <li>Make every effort not to disturb the operation of any business at the collection or destination address;</li>
                                    <li>Undertake an age-verified delivery policy or other appropriate training in order to be able to undertake deliveries of alcohol products, energy drinks or any other age-restricted items;</li>
                                    <li>Comply with age-verified delivery policy requirements, proceed with all necessary checks at pick up and drop off and apply any mandatory requirements imposed by the regulation;</li>
                                    <li>Undertake any induction that may be requested by the customer;</li>
                                    <li>Execute deliveries of orders in accordance with the estimated delivery times provided via the application and any requested time limits or deadlines indicated by the customer;</li>
                                    <li>Have a good standard of spoken English;</li>
                                    <li>Ensure that it has the appropriate method of transport and equipment for the delivery of orders requested by the customer and that these are clean and appropriately maintained in good roadworthy condition; and</li>
                                    <li>Comply with any operating standards for that customer that may be communicated to it from time to time. This includes compliance with pick up procedures(for example, checking in when arriving at a restaurant, using appropriate entry points and ensuring that the delivery driver identifies himself), delivery procedures (for example, ensuring that certain deliveries are not re-routed), parking requirements and other requirements regarding premises (such as a requirement not to sit at tables).</li>
                                    <li>Once the delivery order is accepted by the delivery driver, the orders should be collected and delivered in a timely manner and without delay. If a delay is experienced in the collection, the delivery driver should contact the customer and Fusion Kitchen in order to clear the particular delivery of orders from the application and allow Fusion Kitchen to reassign an appropriate delivery driver.</li>
                                    <li>If a specific process or waiting time is required by a customer, this will be communicated to the delivery driver by Fusion Kitchen from time to time. </li>

                                </ol>
                       </div>
                       <div className="communication" id="five" name= "five">
                        <h2>Communication between the customer, the delivery driver, the takeaway and Fusion Kitchen</h2>
                        <p>The delivery driver may need to contact the customer by telephone after acceptance of the delivery orders. The customer must be contactable on the number indicated by it in its account in order to answer the delivery driver’s questions.

                            The delivery driver may also need to contact the takeaway and/or Fusion Kitchen, if not the customer, by telephone at the time of delivery of orders.

                            In this respect, the customer who has entered the telephone numbers of Fusion Kitchen and/or the takeaway, so they can be contacted by the delivery driver within the framework of the delivery of orders, represents and warrants that it has obtained their agreement to do so.

                            The telephone details entered are only kept by Fusion Kitchen for the time of delivery of orders and are encrypted. This means that the delivery driver can contact the customer and/or the takeaway and/or Fusion Kitchen, via the application, without being able to see the telephone numbers.</p>
                       </div>
                       <div className="confirmation" id="six" name= "six">
                        <h2>Confirmation of the delivery orders</h2>
                        <p>Irrespective of the method of transport used or the package size selected by the customer, if the delivery driver accepts the delivery of an order, it undertakes to the customer to give effect to the delivery of orders as contemplated by the GCU.</p>
                       </div>
                       <div className="acceptance" id="seven" name= "seven">
                        <h2>Acceptance by the delivery driver of the order</h2>
                        <p>Acceptance of the delivery driver of an order via the application binds the delivery driver to undertake the said delivery of orders, pursuant to the provisions of the GCU. Fusion Kitchen cannot require or force a delivery driver to accept a delivery order and the delivery driver makes any such acceptance entirely at its own discretion.</p>
                       </div>
                       <div className="process" id="eight" name= "eight">
                        <h2>Processes relative to the delivery of orders</h2>
                        <h5>Request for delivery of orders by the customer</h5>
                        <p>Acceptance of the delivery driver of an order via the application binds the delivery driver to undertake the said delivery of orders, pursuant to the provisions of the GCU. Fusion Kitchen cannot require or force a delivery driver to accept a delivery order and the delivery driver makes any such acceptance entirely at its own discretion.

                            The customer acknowledges and agrees that this is essential information for the delivery of orders on the basis of which the delivery driver is bound.

                            The Customer represents and warrants to the Fusion Kitchen and the delivery driver that it shall;

                            Request the delivery of orders to a named individual;

                            Have the prior permission of the takeaway and the Fusion Kitchen to communicate to the Fusion Kitchen and the delivery driver the information entered concerning them, which may be a surname, forename, postal address, and telephone number, to enable the delivery of orders;

                            Specify the details, obvious or otherwise, of the orders when they may have repercussions on the progress of the delivery by the delivery driver, in particular, if they do not correspond to the order size selected by the customer or they may affect the method of transport;

                            Not request delivery of orders to a customer who is inaccessible or which would require unreasonable efforts by the delivery driver, such as customers who may be incarcerated or whose address is inaccessible by land and/or close to the marked road;

                            Only use the service and the delivery orders for legal purposes.

                            Subject to the foregoing, a fixed and final price, as deemed to have been agreed between the customer and the delivery driver shall then be communicated to the customer for the delivery of orders.

                            An estimate of the time for delivery of orders (including the approach time initially, then collection until delivery secondly) shall also be communicated to the customer. Any timeframes specified shall be indicative only and shall not be binding on the delivery driver (nor on the Fusion Kitchen, which, in accordance with the GCU, is not a party to the contract for the delivery of orders)</p>
                       </div>
                       <div className="payment" id="nine" name= "nine">
                        <h2>Payment for the Delivery Services</h2>
                        <ol>
                                            <li>The price of the Delivery Services will be determined based on the radius of the delivery to be made to your customers. All charges are in pounds sterling and include VAT.</li>
                                            <li>You shall receive any charges for Delivery Services via Fusion Kitchen.</li>
                                            <li>The price is dependent on geography and order count. For the avoidance of doubt, the price is always inclusive of the delivery fee. </li>
                                            <li>Prices are determined by the delivery of orders and are calculated automatically by the application. The distance to be travelled between the Takeaway Address and Delivery Address.</li>
                                        </ol>
                       </div>
                       <div className="general" id="ten" name= "ten">
                        <h2>General principles</h2>
                        <p>Pursuant to the GCU, and as stated elsewhere in the GCU, the delivery of orders is not executed by the Fusion Kitchen but by the Delivery Partners (Stuart) only.</p>
                       </div>
                       <div className="damage">
                        <h2>Damage of orders</h2>
                        <p>If a customer refuses the delivery of orders due to the alleged destruction of the order or their damage, spoiling, or leakage, then the price of the service will be debited from the customer and it shall be the user’s responsibility to demonstrate to the Fusion Kitchen, that the alleged damage has indeed occurred, in which case a refund of the price of the service may be issued to the customer.</p>
                       </div>
                       <div className="other">
                        <h2>Other causes</h2>
                        <p>No suspension nor reimbursement of the price owed by the customer shall be made in any circumstances, including without limitation, the refusal of the Goods by the Recipient, or its refusal to receive them. If the customer refuses to accept the orders for any reason, the Delivery driver shall return the order through delivery of the order and the customer will be billed for such a return, or the customer can instruct the delivery driver to bin the order. For the avoidance of doubt, the delivery driver should not dispose of any orders unless expressly instructed to do so by the customer or the Fusion Kitchen. Any unauthorised disposal will be subject to loss of order. The customer acknowledges and agrees that the delivery driver is not responsible for any non-conformity of the orders or delay in delivery of orders in relation to the estimated time frame indicated and that these do not constitute a valid and admissible reason for refusing to accept the orders.

                           In the event of a dispute, it shall be the customer’s responsibility to contact the delivery driver to obtain any compensation and to inform the company of any such dispute.</p>
                       </div>
                       <div className="cancellation" id="eleven" name= "eleven">
                        <h2>Cancellation:</h2>
                        <h5>Cancellation by the customer</h5>
                        <p>The customer may cancel the order delivery, without cost, up to two (2) minutes before the delivery confirmation via the Application, provided that the orders have not been collected from the delivery driver.

                           After this time, the customer may cancel the delivery of the order before the order has been collected by the delivery driver from the takeaway. Should the customer cancel after the initial two (2) minutes have passed, the customer will be charged the cancellation fee. The cancellation fee is such other charges as Fusion Kitchen may determine and communicate to the takeaways on time.

                           Apart from the handover of orders to the delivery driver by the takeaways which have been confirmed on the application, then it's no longer possible for the customer to cancel the delivery of orders. However, at any time thereafter the customer can request a new ‘reverse’ delivery of orders, via the application, in order to return the orders to the takeaways or to any other customer. Any such request will be subject to the usual price set out.

                           For the avoidance of doubt, Fusion Kitchen shall play no part in the decision by a customer to cancel the delivery of an order but may need to give effect to the cancellation via the application if so requested by the customer.</p>
                       </div>
                       <div className="delivery_driver">
                        <h2>Cancellation by the delivery driver</h2>
                        <p>The delivery driver may cancel the delivery of orders for any reason, whether through the application or by requesting the cancellation from Fusion Kitchen. If so requested, the Fusion Kitchen will give effect to the cancellation via the application on the delivery driver’s behalf. If the delivery driver cancels any delivery of orders for any reason, Fusion Kitchen will reassign an appropriate delivery driver.

                           If the delivery driver has waited for the collection of orders at the relevant collection address for a period in excess of the waiting time, the delivery driver may request cancellation of the delivery of orders. Should delivery of orders be cancelled following the request of the delivery driver in these circumstances, the customer will be charged the cancellation charges. This provision shall only be applicable once Fusion Kitchen has communicated in writing to the delivery driver the launch to wait at pick up in the delivery driver’s specific region.

                           For the avoidance of doubt, Fusion Kitchen shall play no part in the decision by the delivery driver to cancel an order delivery.</p>
                       </div>
                       <div className="return" id="twelve" name= "twelve">
                        <h2>Return of orders by the delivery driver</h2>
                        <p>If the delivery driver is unable to contact the customer and /or the takeaway and/or the customer, the delivery driver may, at its discretion, automatically terminate the delivery of orders.

                           If the delivery driver is unable to give effect to the delivery of orders to the customer and terminates the delivery of orders pursuant, the delivery driver must return the order to the customer or the takeaway, as appropriate. For the avoidance of doubt, the delivery driver should not dispose of any orders unless expressly instructed to do so by the customer or Fusion Kitchen.

                           In order to give effect to the return, the delivery driver shall make contact with Fusion Kitchen in order to organise the delivery of orders to the collection address (reverse process) so that the delivery driver can return the orders to the takeaway or the customer. The cost of this delivery of the order shall be identical to that of the outward delivery.</p>
                        </div>                       
                </div>
            </div>
        
        </div>
      </div>
    </section>


<section className="stuart-mobileview">
    <div className="container">
        <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="right-title">
                        <h1>Delivery Partnership Terms and Conditions</h1>
                        <div class="h-line"></div>
                        </div>
                        <p className="s-title">Read the information about Fusion Kitchen Delivery Partnership Terms and Conditions</p>
        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Delivery Partnership Terms and Conditions</Accordion.Header>
                                <Accordion.Body>
                                <p>This Delivery Service Agreement (The “Terms”) sets forth relevant terms and conditions governing the provision of Delivery Services for items received via Fusion Kitchen, and your relationship with Fusion Kitchen where you request it to provide Delivery Services as described below. You can contact us by using the Help Section on the Fusion Kitchen page.
                                <br></br>
                                <br></br>
                                 In order to request Delivery Services in the UK for the first time, all Fusion Kitchen users must accept these terms and conditions. By requesting Delivery Services, you confirm that you accept these terms. These terms will apply to all subsequent orders you receive for Delivery Services.
                                <br></br>
                                <br></br>
                                 When accessing or using the Delivery Services, you consent to be bound by the terms, as amended, at the time you use the Delivery Services.
                                <br></br>
                                <br></br>
                                 These terms are additional to terms you have entered into in relation to your use of Fusion Kitchen website services. For the purpose of Fusion Kitchen terms, the Fusion Kitchen entity you have contracted with for Fusion Kitchen delivery is Stuart.</p>
                                <br></br>
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Use of Delivery Services</Accordion.Header>
                                <Accordion.Body>
                                <ol>
                                <li>Once you have been provided access to the Fusion Kitchen, you may receive orders. Please note that the orders received on your website are based on the information supplied by the relevant customers. </li> 
                                <li>Stuart delivery partner will deliver the orders you receive.</li> 
                                <li>In the case of Stuart delivery, you will contract with Fusion Kitchen and be charged by Fusion Kitchen for the Delivery Services. Fusion Kitchen will request Stuart to collect items from you and deliver such items to your customers on Fusion Kitchen’s behalf. </li> 
                                <li>In other cases, such as a Pickup order, you may deliver items which do not require the use of Delivery Services.</li> 
                                <li>Fusion Kitchen Delivery is a Stuart Delivery, Fusion Kitchen and Stuart together will endeavour to ensure that your orders received will be delivered to your customers as reasonably possible. We will give you an estimated range of how long the delivery will take after you receive the order. Unfortunately, the independent factors such as traffic and weather, as well as the actions or inactions yourself may cause delays in the provision of Delivery Services.</li> 
                                <li>Fusion Kitchen doesn’t guarantee the Delivery Services as it’s the integration of Stuart for the delivery partnership.</li> 
                                <li>You and Fusion Kitchen may terminate these Terms or the Delivery Services if the other party violates the provisions of these Terms. Subject to clause 2.10, you can terminate these Terms by writing to us or by no longer requesting Delivery Services. Fusion Kitchen may suspend all or part of the Delivery Services, and otherwise, operate or discontinue the Delivery Services.</li> 
                                <li>You may reject your orders received if you can’t deliver them to your customers. </li> 
                                <li>If the delivery fails for reasons attributed to the customers, for example, your customers were not available during the delivery, you may charge full price for the items and delivery services. </li> 
                                <li>If Stuart cancels the Delivery services for any reason not attributed to your customers, they will be entitled to a refund for any if paid.</li>                        
                                </ol>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="2">
                            <Accordion.Header>Delivery Partnership Terms and Conditions - For Customers</Accordion.Header>
                                <Accordion.Body>
                                <p> Thank you for choosing Fusion Kitchen

                                    This Delivery Service Agreement (The “Terms”) sets forth relevant terms and conditions governing the provision of Delivery Services for items ordered via Fusion Kitchen, and your relationship with Fusion Kitchen where you request it to provide Delivery Services as described below. You can contact us by using the Help Section of the Fusion Kitchen page.

                                    In order to request Delivery Services in the UK for the first time, all Fusion Kitchen users must accept these terms and conditions. By requesting Delivery Services, you confirm that you accept these terms. These terms will apply to all subsequent orders you place for Delivery Services.

                                    When accessing or using the Delivery Services, you consent to be bound by the terms, as amended, at the time you use the Delivery Services.

                                    These terms are additional to terms you have entered into in relation to your use of Fusion Kitchen website services. For the purpose of Fusion Kitchen terms, the Fusion Kitchen entity you have contracted with for Fusion Kitchen delivery is Stuart.</p>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="3">
                            <Accordion.Header>General Terms</Accordion.Header>
                                <Accordion.Body>
                                <h5>Delivery Requirements</h5>
                        <ol>
                                    <li>The delivery driver undertakes to the customer that it will comply with the minimum standards set out below and that it will also comply with any additional requests that may be made by the user or any other requirements set by the customer from time to time, whether directly through the application or via Fusion Kitchen. The Delivery partners agree to procure that their employees, workers, contractors, agents or representatives will also comply with these standards and requests. </li>
                                    <li>If the delivery order requires specific conditions, on the order of the customer in terms of hygiene, temperature or equipment, for example for chilled items, fragile items, etc. or other conditions required to meet applicable legislation, the delivery driver must ensure, prior to its acceptance, that its method of transport and equipment meets these specifications.</li>
                                    <li>The delivery driver will ensure that it has the equipment required to meet the customer's needs for delivery capacity and quality as outlined and as updated by Fusion Kitchen from time to time. </li>
                                    <li>The delivery driver can use unbranded equipment where the branded equipment is purchased from or supplied by Stuart. The terms of conditions for the purchase of equipment will be presented to the delivery drivers upon request. Fusion Kitchen reserves the right to undertake checks to ensure that delivery drivers have the equipment that they have reported to Fusion Kitchen that they are using. Fusion Kitchen may suspend or terminate the account of any delivery driver that does not have the equipment that they have reported to the Fusion Kitchen.</li>
                                    <li>In addition, the delivery driver shall comply with the following customer requirements:</li>
                                    <li>Act with professionalism and carry out the deliveries of orders diligently, demonstrating the highest level of care;</li>
                                    <li>Act responsibly with the orders, ie., to ensure they are not damaged, destroyed, tampered with, stolen or lost, and act responsibly in the driving of its method of transport;</li>
                                    <li>Do not carry out or be engaged in any conduct prejudicial to the customer, including any discrimination, harassment, threatening behaviour, criminal activity or any fraudulent action (as determined by Fusion Kitchen, acting reasonably, as constituting fraudulent action);</li>
                                    <li>Maintain a professional, clean and tidy appearance;</li>
                                    <li>Maintain personal hygiene standards appropriate to the serving of food;</li>
                                    <li>Make every effort not to disturb the operation of any business at the collection or destination address;</li>
                                    <li>Undertake an age-verified delivery policy or other appropriate training in order to be able to undertake deliveries of alcohol products, energy drinks or any other age-restricted items;</li>
                                    <li>Comply with age-verified delivery policy requirements, proceed with all necessary checks at pick up and drop off and apply any mandatory requirements imposed by the regulation;</li>
                                    <li>Undertake any induction that may be requested by the customer;</li>
                                    <li>Execute deliveries of orders in accordance with the estimated delivery times provided via the application and any requested time limits or deadlines indicated by the customer;</li>
                                    <li>Have a good standard of spoken English;</li>
                                    <li>Ensure that it has the appropriate method of transport and equipment for the delivery of orders requested by the customer and that these are clean and appropriately maintained in good roadworthy condition; and</li>
                                    <li>Comply with any operating standards for that customer that may be communicated to it from time to time. This includes compliance with pick up procedures(for example, checking in when arriving at a restaurant, using appropriate entry points and ensuring that the delivery driver identifies himself), delivery procedures (for example, ensuring that certain deliveries are not re-routed), parking requirements and other requirements regarding premises (such as a requirement not to sit at tables).</li>
                                    <li>Once the delivery order is accepted by the delivery driver, the orders should be collected and delivered in a timely manner and without delay. If a delay is experienced in the collection, the delivery driver should contact the customer and Fusion Kitchen in order to clear the particular delivery of orders from the application and allow Fusion Kitchen to reassign an appropriate delivery driver.</li>
                                    <li>If a specific process or waiting time is required by a customer, this will be communicated to the delivery driver by Fusion Kitchen from time to time. </li>

                                </ol>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="4">
                            <Accordion.Header>Communication between the customer, the delivery driver, the takeaway and Fusion Kitchen</Accordion.Header>
                                <Accordion.Body>
                                <p>The delivery driver may need to contact the customer by telephone after acceptance of the delivery orders. The customer must be contactable on the number indicated by it in its account in order to answer the delivery driver’s questions.

                            The delivery driver may also need to contact the takeaway and/or Fusion Kitchen, if not the customer, by telephone at the time of delivery of orders.

                            In this respect, the customer who has entered the telephone numbers of Fusion Kitchen and/or the takeaway, so they can be contacted by the delivery driver within the framework of the delivery of orders, represents and warrants that it has obtained their agreement to do so.

                            The telephone details entered are only kept by Fusion Kitchen for the time of delivery of orders and are encrypted. This means that the delivery driver can contact the customer and/or the takeaway and/or Fusion Kitchen, via the application, without being able to see the telephone numbers.</p>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="5">
                            <Accordion.Header>Confirmation of the delivery orders</Accordion.Header>
                                <Accordion.Body>
                        <p>Irrespective of the method of transport used or the package size selected by the customer, if the delivery driver accepts the delivery of an order, it undertakes to the customer to give effect to the delivery of orders as contemplated by the GCU.</p>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="6">
                            <Accordion.Header>Acceptance by the delivery driver of the order</Accordion.Header>
                                <Accordion.Body>
                        <p>Acceptance of the delivery driver of an order via the application binds the delivery driver to undertake the said delivery of orders, pursuant to the provisions of the GCU. Fusion Kitchen cannot require or force a delivery driver to accept a delivery order and the delivery driver makes any such acceptance entirely at its own discretion.</p>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="7">
                            <Accordion.Header>Processes relative to the delivery of orders</Accordion.Header>
                                <Accordion.Body>
                                <h5>Request for delivery of orders by the customer</h5>
                        <p>Acceptance of the delivery driver of an order via the application binds the delivery driver to undertake the said delivery of orders, pursuant to the provisions of the GCU. Fusion Kitchen cannot require or force a delivery driver to accept a delivery order and the delivery driver makes any such acceptance entirely at its own discretion.

                            The customer acknowledges and agrees that this is essential information for the delivery of orders on the basis of which the delivery driver is bound.

                            The Customer represents and warrants to the Fusion Kitchen and the delivery driver that it shall;

                            Request the delivery of orders to a named individual;

                            Have the prior permission of the takeaway and the Fusion Kitchen to communicate to the Fusion Kitchen and the delivery driver the information entered concerning them, which may be a surname, forename, postal address, and telephone number, to enable the delivery of orders;

                            Specify the details, obvious or otherwise, of the orders when they may have repercussions on the progress of the delivery by the delivery driver, in particular, if they do not correspond to the order size selected by the customer or they may affect the method of transport;

                            Not request delivery of orders to a customer who is inaccessible or which would require unreasonable efforts by the delivery driver, such as customers who may be incarcerated or whose address is inaccessible by land and/or close to the marked road;

                            Only use the service and the delivery orders for legal purposes.

                            Subject to the foregoing, a fixed and final price, as deemed to have been agreed between the customer and the delivery driver shall then be communicated to the customer for the delivery of orders.

                            An estimate of the time for delivery of orders (including the approach time initially, then collection until delivery secondly) shall also be communicated to the customer. Any timeframes specified shall be indicative only and shall not be binding on the delivery driver (nor on the Fusion Kitchen, which, in accordance with the GCU, is not a party to the contract for the delivery of orders)</p>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="8">
                            <Accordion.Header>Payment for the Delivery Services</Accordion.Header>
                                <Accordion.Body>
                        <ol>
                                            <li>The price of the Delivery Services will be determined based on the radius of the delivery to be made to your customers. All charges are in pounds sterling and include VAT.</li>
                                            <li>You shall receive any charges for Delivery Services via Fusion Kitchen.</li>
                                            <li>The price is dependent on geography and order count. For the avoidance of doubt, the price is always inclusive of the delivery fee. </li>
                                            <li>Prices are determined by the delivery of orders and are calculated automatically by the application. The distance to be travelled between the Takeaway Address and Delivery Address.</li>
                                        </ol>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="9">
                            <Accordion.Header>General principles</Accordion.Header>
                                <Accordion.Body>
                                <p>Pursuant to the GCU, and as stated elsewhere in the GCU, the delivery of orders is not executed by the Fusion Kitchen but by the Delivery Partners (Stuart) only.</p>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="10">
                            <Accordion.Header>Cancellation</Accordion.Header>
                                <Accordion.Body>
                                <h5>Cancellation by the customer</h5>
                        <p>The customer may cancel the order delivery, without cost, up to two (2) minutes before the delivery confirmation via the Application, provided that the orders have not been collected from the delivery driver.

                           After this time, the customer may cancel the delivery of the order before the order has been collected by the delivery driver from the takeaway. Should the customer cancel after the initial two (2) minutes have passed, the customer will be charged the cancellation fee. The cancellation fee is such other charges as Fusion Kitchen may determine and communicate to the takeaways on time.

                           Apart from the handover of orders to the delivery driver by the takeaways which have been confirmed on the application, then it's no longer possible for the customer to cancel the delivery of orders. However, at any time thereafter the customer can request a new ‘reverse’ delivery of orders, via the application, in order to return the orders to the takeaways or to any other customer. Any such request will be subject to the usual price set out.

                           For the avoidance of doubt, Fusion Kitchen shall play no part in the decision by a customer to cancel the delivery of an order but may need to give effect to the cancellation via the application if so requested by the customer.</p>
                                </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="11">
                            <Accordion.Header>Return of orders by the delivery driver</Accordion.Header>
                                <Accordion.Body>
                                <p>If the delivery driver is unable to contact the customer and /or the takeaway and/or the customer, the delivery driver may, at its discretion, automatically terminate the delivery of orders.

                                   If the delivery driver is unable to give effect to the delivery of orders to the customer and terminates the delivery of orders pursuant, the delivery driver must return the order to the customer or the takeaway, as appropriate. For the avoidance of doubt, the delivery driver should not dispose of any orders unless expressly instructed to do so by the customer or Fusion Kitchen.

                                   In order to give effect to the return, the delivery driver shall make contact with Fusion Kitchen in order to organise the delivery of orders to the collection address (reverse process) so that the delivery driver can return the orders to the takeaway or the customer. The cost of this delivery of the order shall be identical to that of the outward delivery.</p>
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
export default Stuart;
