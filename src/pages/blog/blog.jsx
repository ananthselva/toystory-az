// *******~ Import ~******** //
// React
// Assets
// Components
import { useEffect } from "react";
import { Link } from "react-router-dom";
// CSS
import "./blog.scss";
// import blog43img from "./img/blog43.jpg";
import blog44img from "./img/blog44.png";
import leftimg from "./img/blog42.jpg";
import leftimg2 from "./img/blog43.jpg";
import art1 from "./img/blog41.jpg";
import social1 from "./img/facebook-blog.png";
import social2 from "./img/instagram-blog.png";
import social3 from "./img/twitter-blog.png";
import art2 from "./img/blog40.jpg";
import art3 from "./img/blog39.jpg";
import art4 from "./img/blog38.jpg";
import art5 from "./img/blog37.jpg";
import art6 from "./img/blog36.jpg";
import art7 from "./img/blog35.jpg";
import art8 from "./img/blog34.jpg";
import art9 from "./img/blog33.jpg";
import art10 from "./img/blog32.jpg";
import art11 from "./img/blog31.jpg";
import art12 from "./img/blog30.jpg";
import art13 from "./img/blog29.jpg";
import art14 from "./img/Blog28.jpg";
import art15 from "./img/blog-1.png";
import art16 from "./img/blog-2.png";
import art17 from "./img/blog-3.png";
import art18 from "./img/blog-5.png";
import art19 from "./img/blog-4.png";
import art20 from "./img/Fk-Blog-22.jpg";
import art21 from "./img/Fk-Blog-21.jpg";
import art22 from "./img/blog-6.png";
import art23 from "./img/Vegan.jpg";
import art24 from "./img/blog18a.jpg";
import art25 from "./img/Blog-17.jpg";
import art26 from "./img/blog16.jpg";
import art27 from "./img/Blog15.jpg";
import art28 from "./img/blog12.jpg";
import art29 from "./img/blog11.jpg";
import art30 from "./img/blog10.jpg";
import art31 from "./img/blog9.jpg";
import art32 from "./img/blog7.jpg";
import art33 from "./img/blog8.jpg";
import art34 from "./img/blog6.jpg";
import art35 from "./img/blog5.jpg";
import art36 from "./img/blog4.jpg";
import art37 from "./img/blog3.jpg";
import art38 from "./img/blog2.jpg";
import art39 from "./img/blog1.jpg";
import blog45 from "./img/blog45.png";
import blog46 from "./img/Blog-46.png";
import blog47 from "./img/blog-47.jpg";

import { OrderFlow } from "../../App";

const Blog = () => {
  const { setFooterLoading, footerLoading } = OrderFlow();
  
  useEffect(() => {
    console.log(footerLoading);
    setFooterLoading(true);
  }, []);
  return (
    <>
      <section className="blog">
        <div className="topblog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="row align-items-center">
                  <div className="col-md-7 col-sm-7 col-lg-7 col-xl-7">
                    <div className="top-leftcontent">
                      <img
                        src="https://fusionbucket.co.uk/FK Blog Images/fk-blog-jan29.png"
                        alt=""
                        className="leftimg"
                      />
                    </div>
                  </div>
                  <div class="col-md-5 col-sm-5 col-lg-5 col-xl-4 blog-c">
                    <div className="top-rightcontent">
                      <small>Jan 29th 2024</small>
                      <span className="new-blog">New</span>
                      <h1 className="t-title">
                        <Link
                          to={
                            "/blog/Revolutionfor-Small-Scale-RestaurantOwners"
                          }
                        >
                          Daily Payout' Revolution for Small-Scale Restaurant
                          Owners
                        </Link>
                      </h1>
                      <p class="content_p">
                        In the fast-paced world of small-scale restaurant
                        ownership, the concept of 'Daily Payout' is transforming
                        the financial landscape. In this blog post, we'll
                        explore the essence of 'Daily Payout,' unravel its
                        significance, and delve into the key features that make
                        it a game-changer for entrepreneurs in the restaurant
                        industry.
                      </p>
                      <Link
                        to={"/blog/Revolutionfor-Small-Scale-RestaurantOwners"}
                        className="c-read"
                      >
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="blog">
        <div className="topblog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="row align-items-center">
                  <div className="col-md-7 col-sm-7 col-lg-7 col-xl-7">
                    <div className="top-leftcontent">
                      <img
                        src="https://fusionbucket.co.uk/FK Blog Images/fk (2).jpg"
                        alt=""
                        className="leftimg"
                      />
                    </div>
                  </div>
                  <div class="col-md-5 col-sm-5 col-lg-5 col-xl-4 blog-c">
                    <div className="top-rightcontent">
                      <small>Jan 24th 2024</small>
                      <span className="new-blog">New</span>
                      <h1 className="t-title">
                        <Link to={"/blog/the-fusion-kitchen-advantage"}>
                          Discovering Excellence through Fusion Kitchen
                          Partnerships
                        </Link>
                      </h1>
                      <p class="content_p">
                        In the ever-evolving world of culinary excellence,
                        Fusion Kitchen is leading the charge, inviting visionary
                        restaurateurs to join forces and take their
                        establishments to unprecedented heights. Our partnership
                        program isn't just a collaboration; it's a game-changer
                        for those seeking a transformative edge in the
                        competitive restaurant landscape.
                      </p>
                      <Link
                        to={"/blog/the-fusion-kitchen-advantage"}
                        className="c-read"
                      >
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="blogsecond">
        <div className="bloglink">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/the-fusion-kitchen-advantage"}
                    >
                      <div className="img">
                        <img
                          src="https://fusionbucket.co.uk/FK Blog Images/fk (2).jpg"
                          className="images"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Jan 24th 2024</small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/the-fusion-kitchen-advantage"}>
                          Discovering Excellence through Fusion Kitchen
                          Partnerships
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/the-fusion-kitchen-advantage"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/5-Ways-Online-Ordering-Apps"}
                    >
                      <div className="img">
                        <img
                          src="https://fusionbucket.co.uk/FK Blog Images/5 Ways Online Ordering Apps.jpg"
                          className="images"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Jan 18th 2024</small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/5-Ways-Online-Ordering-Apps"}>
                          5 Ways Online Ordering Apps Simplify Your Foodie
                          Lifestyle{" "}
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/5-Ways-Online-Ordering-Apps"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/Fusion-Delivery-Partners"}
                    >
                      <div className="img">
                        <img
                          src="https://fusionbucket.co.uk/FK Blog Images/FK_blog-secondweek.png"
                          className="images"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Jan 12th 2024</small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/Fusion-Delivery-Partners"}>
                          Fusion Delivery Partners: Enhancing Your Delivery
                          Management in the UK{" "}
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/Fusion-Delivery-Partners"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* three */}
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link className="help" to={"/blog/Top-5-Restaurant-Trends"}>
                      <div className="img">
                        <img src={blog47} className="images" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Jan 4th 2024</small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/Top-5-Restaurant-Trends"}>
                          Embracing the Culinary Future: Top 5 Restaurant Trends
                          of 2024{" "}
                        </Link>
                      </h2>
                    </div>
                    <Link to={"/blog/Top-5-Restaurant-Trends"} class="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/Ways-to-IncreaseFood-Orders"}
                    >
                      <div className="img">
                        <img
                          src="https://fusionbucket.co.uk/FK Blog Images/fk-blog-dec26.png"
                          className="images"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 26th 2024</small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/Ways-to-IncreaseFood-Orders"}>
                          Ways to Increase Food Orders Through Your Online
                          Channels
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/Ways-to-IncreaseFood-Orders"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/Delicious-Destinations-2023"}
                    >
                      <div className="img">
                        <img src={blog46} className="images" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>December 22th 2023 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/Delicious-Destinations-2023"}>
                          Delicious Destinations: 2023's Top 5 Global Flavors
                          Await!{" "}
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/Delicious-Destinations-2023"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* six */}
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={
                        "/blog/FeastMode-Unwrapping-Delightful-DiningExperiences"
                      }
                    >
                      <div className="img">
                        <img src={blog45} className="images" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>December 18th 2023 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/FeastMode-Unwrapping-Delightful-DiningExperiences"
                          }
                        >
                          Unwrapping Delightful Dining Experiences with Our
                          Christmas Food Ordering Wonderland{" "}
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/FeastMode-Unwrapping-Delightful-DiningExperiences"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={
                        "/blog/TechTales-Revolutionizing-Your-EateryExperience"
                      }
                    >
                      <div className="img">
                        <img src={blog44img} className="images" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>December 14th 2023 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/TechTales-Revolutionizing-Your-EateryExperience"
                          }
                        >
                          Tech Tales: Revolutionizing Your Eatery Experience
                          with Fusion Kitchen
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/TechTales-Revolutionizing-Your-EateryExperience"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/revolutionize-your-restaurant-business"}
                    >
                      <div className="img">
                        <img src={leftimg2} className="images" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>April 04th 2023 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={"/blog/revolutionize-your-restaurant-business"}
                        >
                          Revolutionize Your Restaurant Business with Fusion
                          Kitchen's Commission-Free Online Ordering System
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/revolutionize-your-restaurant-business"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* seven */}
            </div>

            <div className="row">
              {/* nine */}
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/top-5-food-trends-in-spring-season"}
                    >
                      <div className="img">
                        <img src={leftimg} className="images" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>April 04th 2023 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/top-5-food-trends-in-spring-season"}>
                          Top 5 Food Trends for Restaurants this Spring Season
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/top-5-food-trends-in-spring-season"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      className="help"
                      to={"/blog/support-local-restaurants"}
                    >
                      <div className="img">
                        <img src={art1} className="images" alt="" />
                      </div>
                    </Link>
                  </div>

                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Jan 19th 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/support-local-restaurants"}>
                          Support Local Restaurants and Give Back to the
                          Community
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/support-local-restaurants"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/explore-coupon-codes"}>
                      <div className="img">
                        <img src={art2} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 19th 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/explore-coupon-codes"}>
                          Explore Coupon Codes to Club up Savings on Online
                          Orders
                        </Link>
                      </h2>
                    </div>
                    <Link to={"/blog/explore-coupon-codes"} class="readmore">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="row">
              {/* televe */}
  <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/season-special-dishes-to-try"}>
                      <div className="img">
                        <img src={art3} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 19th 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/season-special-dishes-to-try"}>
                          This Season Special Dishes to Try
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/season-special-dishes-to-try"}
                      class="read-season"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/uk-no-1-food-ordering-portal"}>
                      <div className="img">
                        <img src={art4} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Nov 5th 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/uk-no-1-food-ordering-portal"}>
                          Help us to Support your Local Food Business Community
                          by
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/uk-no-1-food-ordering-portal"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/7-tips-for-restaurants-to-boost-sales"}>
                      <div className="img">
                        <img src={art5} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Sep 3rd 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={"/blog/7-tips-for-restaurants-to-boost-sales"}
                        >
                          7 Tips for Restaurants to Optimize Your Online
                          Offerings and Boost Sales
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/7-tips-for-restaurants-to-boost-sales"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 15 */}
  <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/6-worlds-delicious-dishes-you-want-to-try-in-2022"
                      }
                    >
                      <div className="img">
                        <img src={art6} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Aug 18th 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/6-worlds-delicious-dishes-you-want-to-try-in-2022"
                          }
                        >
                          6 World’s Delicious Dishes You Want To Try in 2022
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/6-worlds-delicious-dishes-you-want-to-try-in-2022"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/online-food-ordering-experience"}>
                      <div className="img">
                        <img src={art7} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>June 23rd 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/online-food-ordering-experience"}>
                          Enjoy a Seamless Online Food Ordering Experience with
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/online-food-ordering-experience"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={"/blog/fast-and-reliable-food-delivery-experience"}
                    >
                      <div className="img">
                        <img src={art8} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>June 23rd 2022 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/fast-and-reliable-food-delivery-experience"
                          }
                        >
                          Fusion Kitchen Partners with Stuart to Ensure a Fast
                          and
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/fast-and-reliable-food-delivery-experience"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 18 */}

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/billion-smiles-ordered-and-delivered"}>
                      <div className="img">
                        <img src={art9} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Nov 10, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/billion-smiles-ordered-and-delivered"}>
                          A Billion Smiles Ordered and Delivered
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/billion-smiles-ordered-and-delivered"}
                      class="readmore-bismiles"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/fusion-kitchen-how-does-it-work"}>
                      <div className="img">
                        <img src={art10} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Aug 07, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/fusion-kitchen-how-does-it-work"}>
                          Fusion Kitchen- How Does it Work?
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/fusion-kitchen-how-does-it-work"}
                      class="readmore-bismiles"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/make-your-next-baby-shower-fun-with-fusion-kitchen"
                      }
                    >
                      <div className="img">
                        <img src={art11} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>July 14, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/make-your-next-baby-shower-fun-with-fusion-kitchen"
                          }
                        >
                          Make Your Next Baby Shower Fun with Fusion Kitchen
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/make-your-next-baby-shower-fun-with-fusion-kitchen"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 21 */}
                   <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/new-feature-contactless-ine-in"}>
                      <div className="img">
                        <img src={art12} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>July 05, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/new-feature-contactless-ine-in"}>
                          A New Feature in Fusion Kitchen - Contactless Dine-in!
                          Know More About it
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/new-feature-contactless-ine-in"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/why-do-people-prefer-online-food-ordering-rather-than-eating-out"
                      }
                    >
                      <div className="img">
                        <img src={art13} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>June 02, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/why-do-people-prefer-online-food-ordering-rather-than-eating-out"
                          }
                        >
                          Why Do People Prefer Online Food Ordering Rather Than
                          Eating Out?
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/why-do-people-prefer-online-food-ordering-rather-than-eating-out"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/margherita-pizza-is-named-after-a-queen"}>
                      <div className="img">
                        <img src={art14} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>May 05, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={"/blog/margherita-pizza-is-named-after-a-queen"}
                        >
                          Margherita Pizza is named after a Queen
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/margherita-pizza-is-named-after-a-queen"}
                      class="readmore-bismiles"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

          
            </div>
            <div className="row">
              {/* 24 */}
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/how-pre-ordering-can-benefit-the-restaurants-and-customers"
                      }
                    >
                      <div className="img">
                        <img src={art15} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Apr 05, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/how-pre-ordering-can-benefit-the-restaurants-and-customers"
                          }
                        >
                          How Pre-Ordering Can Benefit the Restaurants &
                          Customers
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/how-pre-ordering-can-benefit-the-restaurants-and-customers"
                      }
                      class="readmore-benefits"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/top-5-features-customers-look-for-while-ordering-food-online"
                      }
                    >
                      <div className="img">
                        <img src={art16} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Mar 18, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/top-5-features-customers-look-for-while-ordering-food-online"
                          }
                        >
                          Top 5 features Customers Look For While Ordering Food
                          Online
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/top-5-features-customers-look-for-while-ordering-food-online"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/online-food-ordering-with-fusion-kitchen"}>
                      <div className="img">
                        <img src={art17} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Mar 01, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={"/blog/online-food-ordering-with-fusion-kitchen"}
                        >
                          Online Food Ordering with Fusion Kitchen
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/online-food-ordering-with-fusion-kitchen"}
                      class="readmore-foodorder"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 27 */}
  <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/6-ways-in-which-online-food-ordering-has-made-our-lives-easier"
                      }
                    >
                      <div className="img">
                        <img src={art18} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Feb 09, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/6-ways-in-which-online-food-ordering-has-made-our-lives-easier"
                          }
                        >
                          6 Ways In Which Online Food Ordering Has Made Our
                          Lives Easier
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/6-ways-in-which-online-food-ordering-has-made-our-lives-easier"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/best-meals-to-order-this-winter-from-fusion-kitchen"
                      }
                    >
                      <div className="img">
                        <img src={art19} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Jan 27, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/best-meals-to-order-this-winter-from-fusion-kitchen"
                          }
                        >
                          Best Meals To Order This Winter From Fusion Kitchen
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/best-meals-to-order-this-winter-from-fusion-kitchen"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/why-fusion-kitchen-is-the-choice"}>
                      <div className="img">
                        <img src={art20} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Jan 07, 2021 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/why-fusion-kitchen-is-the-choice"}>
                          In a World Full Of Food Portals, Why Fusion Kitchen Is
                          The Best Choice To Increase Your Profits?
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/why-fusion-kitchen-is-the-choice"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 30 */}
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/how-restaurants-can-take-advantage-of-food-ordering-portals"
                      }
                    >
                      <div className="img">
                        <img src={art21} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 25, 2020 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/how-restaurants-can-take-advantage-of-food-ordering-portals"
                          }
                        >
                          How Restaurants Can Take Advantage of Food Ordering
                          Portals?
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/how-restaurants-can-take-advantage-of-food-ordering-portals"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/tips-and-tricks-for-instagramming-your-takeaway-food"
                      }
                    >
                      <div className="img">
                        <img src={art22} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 01, 2020 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/tips-and-tricks-for-instagramming-your-takeaway-food"
                          }
                        >
                          Tips & Tricks For Instagramming Your Takeaway Food
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/tips-and-tricks-for-instagramming-your-takeaway-food"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={"/blog/top-8-vegan-friendly-restaurants-in-the-uk"}
                    >
                      <div className="img">
                        <img src={art23} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Nov 16, 2020 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/top-8-vegan-friendly-restaurants-in-the-uk"
                          }
                        >
                          Top 8 Vegan-Friendly Restaurants in the UK
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/top-8-vegan-friendly-restaurants-in-the-uk"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* 32 */}
 <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/the-future-of-the-food-industry-after-the-pandemic"
                      }
                    >
                      <div className="img">
                        <img src={art24} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Oct 30, 2020 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/the-future-of-the-food-industry-after-the-pandemic"
                          }
                        >
                          The Future of the Food Industry After the Pandemic
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/the-future-of-the-food-industry-after-the-pandemic"
                      }
                      class="readmore-future"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/top-5-restaurant-trends-that-you-should-know-about-in-2020"
                      }
                    >
                      <div className="img">
                        <img src={art25} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Oct 20, 2020 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/top-5-restaurant-trends-that-you-should-know-about-in-2020"
                          }
                        >
                          Top 5 Restaurant Trends That You Should Know About in
                          2020
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/top-5-restaurant-trends-that-you-should-know-about-in-2020"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/virtual-kitchen-in-the-digital-era"}>
                      <div className="img">
                        <img src={art26} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Sep 16, 2020 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/virtual-kitchen-in-the-digital-era"}>
                          Virtual Kitchen in the Digital Era
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/virtual-kitchen-in-the-digital-era"}
                      class="read-virtual"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              {/* 33 */}
            </div>
            <div className="row">
              {/* 36 */}
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/the-future-of-the-food-delivery-industry-in-2020-beyond"
                      }
                    >
                      <div className="img">
                        <img src={art27} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>June 10, 2020 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/the-future-of-the-food-delivery-industry-in-2020-beyond"
                          }
                        >
                          The Future of The Food Delivery Industry In 2020 &
                          Beyond
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/the-future-of-the-food-delivery-industry-in-2020-beyond"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/top_50_takeaways_in_berkshire"}>
                      <div className="img">
                        <img src={art28} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 16, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/top_50_takeaways_in_berkshire"}>
                          Top 5 Takeaways In Berkshire
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/top_50_takeaways_in_berkshire"}
                      class="readmore-berk"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/50_most_popular_dishes_ordered_around_the_world_in_2019"
                      }
                    >
                      <div className="img">
                        <img src={art29} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 13, 2019</small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/50_most_popular_dishes_ordered_around_the_world_in_2019"
                          }
                        >
                          50 Most Popular Dishes Ordered Around The World In
                          2019
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/50_most_popular_dishes_ordered_around_the_world_in_2019"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
                   <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/top_5_takeaways_in_bristol"}>
                      <div className="img">
                        <img src={art30} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 12, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/top_5_takeaways_in_bristol"}>
                          TOP 5 TAKEAWAYS IN BRISTOL
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/top_5_takeaways_in_bristol"}
                      class="read-bristol"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/top_5_takeaways_in_buckinghamshire"}>
                      <div className="img">
                        <img src={art31} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 11, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/top_5_takeaways_in_buckinghamshire"}>
                          TOP 5 TAKEAWAYS IN BUCKINGHAMSHIRE
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/top_5_takeaways_in_buckinghamshire"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/top-5-takeaways-in-bedfordshire"}>
                      <div className="img">
                        <img src={art32} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 10, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/top-5-takeaways-in-bedfordshire"}>
                          Top 5 takeaways in Bedfordshire
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/top-5-takeaways-in-bedfordshire"}
                      class="read-bedford"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/top-5-takeaways-in-cambridgeshire"}>
                      <div className="img">
                        <img src={art33} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 09, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/top-5-takeaways-in-cambridgeshire"}>
                          TOP 5 TAKEAWAYS IN CAMBRIDGESHIRE
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/top-5-takeaways-in-cambridgeshire"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/easy-and-quick-microwave-recipes-for-you-to-enjoy"
                      }
                    >
                      <div className="img">
                        <img src={art34} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 07, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/easy-and-quick-microwave-recipes-for-you-to-enjoy"
                          }
                        >
                          Easy and quick Microwave Recipes for You to Enjoy!
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/easy-and-quick-microwave-recipes-for-you-to-enjoy"
                      }
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={"/blog/different-kinds-of-pizza-straight-from-itally"}
                    >
                      <div className="img">
                        <img src={art35} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 04, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/different-kinds-of-pizza-straight-from-itally"
                          }
                        >
                          Different Kinds of Pizza, Straight from ITALY
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/different-kinds-of-pizza-straight-from-itally"}
                      class="readmore"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link to={"/blog/take-out-food-options"}>
                      <div className="img">
                        <img src={art36} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Dec 03, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link to={"/blog/take-out-food-options"}>
                          Take Out Food Options!
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={"/blog/take-out-food-options"}
                      class="readmore-take"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/avocado-breakfast-options-are-not-boring-at-all"
                      }
                    >
                      <div className="img">
                        <img src={art37} className="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Nov 29, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/avocado-breakfast-options-are-not-boring-at-all"
                          }
                        >
                          Avocado Breakfast Options are NOT Boring AT ALL
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/avocado-breakfast-options-are-not-boring-at-all"
                      }
                      class="read-avacado"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog">
                  <div className="figure">
                    <Link
                      to={
                        "/blog/love-tater-tots-now-try-them-with-different-fillings"
                      }
                    >
                      <div className="img">
                        <img src={art39} class="images" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div class="post_info">
                    <div className="why">
                      <p>
                        <small>Nov 26, 2019 </small>
                        <span class="social-icon">
                          <a
                            target="_black"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://fusionkitchen.co.uk/blog/support-local-restaurants"
                          >
                            <img src={social1} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://www.instagram.com/fusionkitchenuk/"
                          >
                            <img src={social2} alt="" className="social1" />
                          </a>
                          <a
                            target="_black"
                            href="https://twitter.com/FusionKitchenU1"
                          >
                            <img src={social3} alt="" className="social1" />
                          </a>
                        </span>
                      </p>
                      <h2>
                        <Link
                          to={
                            "/blog/love-tater-tots-now-try-them-with-different-fillings"
                          }
                        >
                          Love Tater Tots? Now Try Them with Different Fillings!
                        </Link>
                      </h2>
                    </div>
                    <Link
                      to={
                        "/blog/love-tater-tots-now-try-them-with-different-fillings"
                      }
                      class="readmore-filling"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* 41 */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
