// *******~ Import ~******** //
// React
// Assets
// Components
// CSS
import { useEffect } from "react";
import "./reseller.scss";
// Images
import leftimg from "./img/Reseller-top.png";
import one from "./img/online-ordering-website.png";
import two from "./img/seamless-mobile-app.png";
import three from "./img/free-listing.png";
import four from "./img/Driver-App.png";
import five from "./img/customer-service.svg";
import six from "./img/digital-marketing.png";
import seven from "./img/contactless-dining.png";
import eight from "./img/card-terminal-pdq.png";
import nine from "./img/accepts-card-payment.png";
import ten from "./img/point-of-sale.png";
import eleven from "./img/d-marketing.png";
import twelve from "./img/it-spl.png";
import thirteen from "./img/food-wholesale.png";
import fourteen from "./img/Solicit-delivery.png";
import fifteen from "./img/Food-waste-collection.png";
import sixteen from "./img/Paper-bags.png";
import seventeen from "./img/Oil-recycling.png";
import eighteen from "./img/Food-Hygiene.png";
import nineteen from "./img/Food-Delivery-Bag.png";
import twenty from "./img/Leaflet-Distribution.png";
import arrow from "./img/Icon-arrow-right.svg";
import growone from "./img/money-bag.svg";
import growtwo from "./img/Your-Brand.png";
import growthree from "./img/on-boarding.png";
import StepForm from "./step";
import { OrderFlow } from "../../App";
import { Link } from "react-scroll";

// *******~ Import ~******** //

const Reseller = () => {
  const { setFooterLoading ,footerLoading} = OrderFlow();
  const handleFooter=()=>{
    console.log(footerLoading);
    setFooterLoading(false);
    }
    useEffect(()=>{
     setFooterLoading(false);
     handleFooter();
    },[]);
    useEffect(()=>{
     if(footerLoading===false){
      setTimeout(() => {
        setFooterLoading(true);
      }, 2000);
     }
    },[footerLoading]);
  return (
    <>
      <section className="reseller">
        <div className="banner">
          <div className="banner_bg">
            <div className="banner_text">
              <h1>Become a Partner</h1>
              <p id="multi-step-call">
                We provide our partners Boundless support and<br></br>{" "}
                opportunities to grow their businesses
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="form">
        <div className="class">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div>
                  <img src={leftimg} alt="" className="form_img" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <StepForm />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3"></div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="form_text">
                  <p>
                    Fusion Kitchen is committed to provide the best online food
                    ordering solution to our partners in the United Kingdom with
                    a simple way to increase their revenue and grow your
                    restaurant business in this competitive world. Start
                    receiving orders now on your free website and take your
                    restaurant / takeaway to the next level.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Benefits We Offer</h2>
        <div className="benefits_cont">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box1">
                  <img src={one} alt="" className="img_one" />
                  <h3>
                    Online Ordering <br></br> Website
                  </h3>

                  <p>
                    Simple and convenient online ordering website designed for
                    your customers to order food online.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box2">
                  <img src={two} alt="" className="img_two" />
                  <h3>
                    Seamless <br></br>Mobile App
                  </h3>

                  <p>
                    The new favorite of your customers and that is the final
                    verdict for food ordering.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box3">
                  <img src={three} alt="" className="img_three" />
                  <h3>
                    Free Listing <br></br>on Fusion Kitchen
                  </h3>

                  <p>
                    Get highlighted among your competitors and get infinity
                    orders by listing your takeaway on Fusion Kitchen
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box4">
                  <img src={four} alt="" className="img_four" />
                  <h3>
                    Driver Tracking<br></br> Management
                  </h3>

                  <p>
                    This feature helps you organize and manage the drivers,
                    Keeping track of the driver’s driving patterns, their
                    consistency and time management.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box5">
                  <img src={five} alt="" className="img_five" />
                  <h3>24/7 Support Service</h3>

                  <p>
                    Fusion Kitchen Support Team toil hard to solve your queries
                    instantly, You’ll have happy customers.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box6">
                  <img src={six} alt="" className="img_six" />
                  <h3>Digital Marketing Strategies</h3>

                  <p>
                    Our Marketing Experts analyse your business and get your
                    brand social and effective online advertising.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box7">
                  <img src={seven} alt="" className="img_seven" />
                  <h3>Contactless Dining</h3>

                  <p>
                    Our Contactless Dining feature will enable your restaurant
                    with contactless menu, orders & payments.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="box8">
                  <img src={eight} alt="" className="img_eight" />
                  <h3>Card Terminal PDQ</h3>

                  <p>
                    PDQ machine can help your business take advantage of more
                    customers turning to cards to make payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2"></div>
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="sign_cont">
                <h2>Why Partner with Fusion Kitchen?</h2>
                <p>
                  We have numerous partners, a marketplace of over 2000+ vendor
                  partners, delivering their food customers across the UK. So
                  many providers across the UK charge hefty commissions from
                  their clients, but FusionPOS provides all services with 0%
                  commission. Also we charge them only weekly rentals and help
                  to increase the enormous count of orders and revenues in
                  return.
                </p>
                <Link to="multi-step-call" className="button">
                  <button className="button-41">Sign Up Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="types">
        <div className="typ_title">
          <h2>The Types of Partners We are Looking For</h2>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img1">
                  <img src={nine} alt="" className="one" />
                  <h3>
                    Sole Trading<br></br> Sales Partners
                  </h3>
                  <p>
                    Are you a food business retailer<br></br> who seeks to
                    connect with<br></br> Fusion Kitchen?
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img2">
                  <img src={ten} alt="" className="one" />
                  <h3>
                    Point of Sale Expertise<br></br> and Resellers
                  </h3>
                  <p>
                    We’re there to widen your client<br></br> base into a
                    massive progress.<br></br> Get engaged to find more.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img3">
                  <img src={eleven} alt="" className="one" />
                  <h3>
                    Digital Marketing<br></br> professionals and Experts
                  </h3>
                  <p>
                    Are you an expert who uses digital<br></br> channels to
                    reach customers, and<br></br> promote products and services?
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img4">
                  <img src={twelve} alt="" className="one" />
                  <h3>IT Specialists</h3>
                  <p>
                    Help clients assess different<br></br> technological
                    strategies and, in doing<br></br> so, align their technology
                    strategies<br></br> with their business.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img5">
                  <img src={thirteen} alt="" className="one" />
                  <h3>Food Wholesalers</h3>
                  <p>
                    Are you a chain for food distribution<br></br> across other
                    businesses? We help you<br></br> gain more orders and
                    generate<br></br> revenues for your clients.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img6">
                  <img src={fourteen} alt="" className="one" />
                  <h3>Solicit delivery</h3>
                  <p>
                    We reliably keep up in the on demand<br></br> delivery
                    market and fulfill online<br></br> orders on time. Provide
                    your clients a<br></br> delivery solution with our
                    technology
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img7">
                  <img src={fifteen} alt="" className="one" />
                  <h3>Surplus Food waste collection</h3>
                  <p>
                    Excess food should be distributed to<br></br> needy people
                    with love. Said No to<br></br> Food Waste and join hands
                    with us!
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img8">
                  <img src={sixteen} alt="" className="one" />
                  <h3>
                    Paper bags<br></br> for delivery
                  </h3>
                  <p>
                    Restaurants and Takeaways use<br></br> paper bags for
                    parcels and home<br></br> deliveries, that note we are
                    partnered.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img9">
                  <img src={seventeen} alt="" className="one" />
                  <h3>
                    Oil recycling<br></br> collection partners
                  </h3>
                  <p>
                    It is no surprise that restaurants use<br></br> endless
                    amounts of cooking oil each<br></br> year and it’s essential
                    for recycling.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img10">
                  <img src={eighteen} alt="" className="one" />
                  <h3>
                    Food Hygiene and<br></br> Rating Consultants
                  </h3>
                  <p>
                    Consultants providing food hygiene,<br></br> health and
                    safety consultancy,<br></br> including food hygiene audits.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img11">
                  <img src={nineteen} alt="" className="one" />
                  <h3>
                    Delivery Back<br></br> bags
                  </h3>
                  <p>
                    Serve your customers their order with<br></br> the same Hot
                    and Cold! We provide all<br></br> needs for you.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img12">
                  <img src={twenty} alt="" className="one" />
                  <h3>
                    Leaflet Distribution<br></br> Partners
                  </h3>
                  <p>
                    Target your customers by distributing<br></br> leaflets with
                    effective reach and<br></br> improve your marketing
                    strategies.
                  </p>
                  <Link to="multi-step-call" className="details">
                    View details
                    <img src={arrow} alt="" className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="growth">
        <div className="grow_content">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img">
                  <img src={growone} alt="" className="two" />
                  <h3>
                    Client Growth &<br></br> Retention Strategies
                  </h3>
                  <p>
                    We assure you extract more value from your existing customer
                    base.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img">
                  <img src={growtwo} alt="" className="two" />
                  <h3>
                    Your Brand<br></br> Your Customers
                  </h3>
                  <p>
                    You know your business and customers more. Make use of our
                    technology, Grow your brand, and serve your customers.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="img">
                  <img src={growthree} alt="" className="two" />
                  <h3>
                    Ensuring Quick<br></br> On-Boarding Plan
                  </h3>
                  <p>
                    We build the process readily accessible for you as a
                    partner. Move seamlessly through the process within 24 hours
                    and provide 24/7 technical and customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Reseller;
