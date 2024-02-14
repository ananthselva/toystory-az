// *******~ Import ~******** //
// React
import { useState, useContext, useEffect,useRef } from "react";
// Assets
import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
// Components
import SuggestTakeaway from "./suggest-takeaway";
import { FilterAll } from "./sidebar";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Mousewheel, Navigation, Autoplay } from "swiper";
// CSS
import "./css/filterlist.scss";
import "./css/canva.scss";

// banner
import RestaurantPlace from "./img/restaurant-place.svg";
import RestaurantStar from "./img/star.svg";

// Icons
import { MdCancel } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { useSelector } from "react-redux";



// Lottie
import { Player } from "@lottiefiles/react-lottie-player";
import NotFoundLottie from "./img/not-found.json";
// *******~ Import ~******** //

// context start
import { ContextWidthConsumer } from "./listpage";
// context end
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";
//lazy image
//lazy image
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { OrderFlow } from "../../App";
import { attributesToProps } from "html-react-parser";
import ListSkeleton from "./listskeleton";
export default function FilterList({
  restaurantStatus,
  hygiene,
  offerBanners,
  offerFilters,
  dietaryFilter,
  postCode,
  apiCall,
}) {
  const {
    OrderType,
    selectedFilter,
    selectedSort,
    selectedOffers,
    selectedDietary,
    selectedCategories,
    selectedHygiene,
    TextSearchData,
    cuisinefilter,
  } = ContextWidthConsumer();
  const { handleClick,setFooterLoading,restaurantData,
    setRestaurantData,mobileref} = OrderFlow();
  const [showTakeaway,setShowTakeaway]=useState(false);
  const [listLoad,setListLoad]=useState(true);
  const [prevOffer,setPrevOffer]=useState(null);
  const [offerData,setOfferData]=useState(null);
  const [currentOffer,setCurrentOffer]=useState(null);
  const [noOffer,setNoOffer]=useState(false);
  let sortedRestaurants = [];
  let sortedRestaurants1=[];

  const response=useSelector(state=>state?.getListpage);
  const responseCuisines=useSelector(state=>state?.listCusinesReducer);
  const restaurantDetail = response?.response?.restaurantList || "";
  const cuisines = responseCuisines?.response || "";
  useEffect(()=>{
    if(response===null){
      const timeoutId = setTimeout(() => {
        setShowTakeaway(true);
      }, 2000);
      // Clear the timeout when the component unmounts
      return () => {
        clearTimeout(timeoutId);
      };
    }
    if(response.error==="Empty client List"){
      setListLoad(false);
    }
    // else if(response.error==="Network Error"){
    //   setShowTakeaway(true);
    // }
    console.log(response);
    if(response?.response?.restaurantList){
      // const combinedData = Array.from(new Set([...restaurantData, ...restaurantDetail]));
      const combinedData = [...new Set([...restaurantData, ...restaurantDetail].map(JSON.stringify))]
        .map(JSON.parse);
      setRestaurantData(combinedData);
    }
  },[response])
 useEffect(()=>{
 },[restaurantData])
  if (restaurantData?.length === 0) {
    return (
      <>
        <section className="filter-list">
          <TextSearch
            restaurantStatus={restaurantStatus}
            hygiene={hygiene}
            cuisines={cuisines}
            offerBanners={offerBanners}
            offerFilters={offerFilters}
            dietaryFilter={dietaryFilter}
          />
          <CuisineFilters  apiCall={apiCall}/>
          {showTakeaway&&
          <SuggestTakeaway postCode={postCode} />
          }
        </section>
      </>
    );
  } else {
   
    const filteredList = restaurantData?.filter((restaurant) => {
      // Check if restaurant name matches the text search Start
      if (
        TextSearchData &&
        TextSearchData !== "" &&
        !(
          restaurant.name
            .toLowerCase()
            .includes(TextSearchData.toLowerCase()) ||
          restaurant.offers
            .join(", ")
            .toLowerCase()
            .includes(TextSearchData.toLowerCase()) ||
          restaurant.cuisineName
            .join(", ")
            .toLowerCase()
            .includes(TextSearchData.toLowerCase()) ||
          restaurant.dietary
            .join(", ")
            .toLowerCase()
            .includes(TextSearchData.toLowerCase())
        )
      ) {
        return false;
      }
      // Check if restaurant name matches the text search End

      // Check if restaurant meets selected order type
      if (
        OrderType &&
        OrderType !== "all" &&
        restaurant.orderMode !== OrderType
      ) {
        return false;
      }

      // Check if restaurant meets selected filter
      if (
        selectedFilter &&
        restaurant.restaurantStatus.status !== selectedFilter
      ) {
        return false;
      }

      // Check if restaurant meets selected Offers
      if (
        selectedOffers.length > 0 &&
        !selectedOffers.every((offers) =>
          restaurant.offers.includes(offers)
        )
      ) {
        return false;
      }
      // Check if restaurant hygiene Ratings
      if (
        selectedHygiene &&
        restaurant.hygieneRating !== selectedHygiene
      ) {
        return false;
      }

      // Check if restaurant meets selected dietary requirements
      if (
        selectedDietary.length > 0 &&
        !selectedDietary.every((dietary) =>
          restaurant.dietary.includes(dietary)
        )
      ) {
        return false;
      }
      // Check if restaurant belongs to selected categories
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.every((cuisine) =>
          restaurant.cuisineName.includes(cuisine)
        )
      ) {
        return false;
      }
      if (
        cuisinefilter.length > 0 &&
        !cuisinefilter.every(
          (cuisine) =>
            restaurant.cuisineName.includes(cuisine) ||
            restaurant.offers.includes(cuisine) ||
            restaurant.dietary.includes(cuisine)
        )
      ) {
        return false;
      }

      // If the restaurant doesn't match any filter conditions, return false
      return true;
    });
  
    // Sorting logic here
    sortedRestaurants = filteredList?.sort((a, b) => {
      // Sorting criteria based on selectedSort
      // Replace with your specific sorting logic
      if (selectedSort === "Top Rated") {
        return (
          parseFloat(b.rating.rate) -
          parseFloat(a.rating.rate)
        );
      } else if (selectedSort === "Hygiene Ratings") {
        return (
          parseFloat(b.hygieneRating) -
          parseFloat(a.hygieneRating)
        );
      } else if (selectedSort === "Quickest Delivery") {
        return parseFloat(a.miles) - parseFloat(b.miles);
      } else if (selectedSort === "Reviews") {
        return (
          parseFloat(b.rating.rate) -
          parseFloat(a.rating.rate)
        );
      }
      // Default sorting (no sorting)
      return 0;
    });
    //Open Now Only
    const openNow=sortedRestaurants.filter((v,i)=>{
      if(v?.restaurantStatus?.status==="0"){
        sortedRestaurants1.push(v);
      }
    });
    //preOrder Current
   const PreOrder=sortedRestaurants.filter((v,i)=>{
      if(v.restaurantStatus.status==="1"){
        sortedRestaurants1.push(v);
      }
    });
    //delivery Close (or) Collection Close
    const AnyClosed=sortedRestaurants.filter((v,i)=>{
      if(v.restaurantStatus.status==="3"){
        sortedRestaurants1.push(v);
      }
    });
    //closed
    const Closed=sortedRestaurants.filter((v,i)=>{
      if(v.restaurantStatus.status==="2"){
        sortedRestaurants1.push(v);
      }
    });
  }

  const fetchMoreData=()=>{
    let dataMode="restaurant";
    apiCall(dataMode);
    // getListpage(formData);
    }
    const handleClick1=()=>{
      setFooterLoading(false);
      mobileref.current.click();
    }
    const handleOffer=async(e)=>{
      var attribute = e?.target?.attributes?.getNamedItem('data-attr')?.value;
      if(prevOffer!=''||prevOffer!==null){
        let removeClass=prevOffer?.replace(' ','');
        var element = document.getElementById(removeClass);
        element?.classList?.remove("active");
      }
      setCurrentOffer(attribute);
      setPrevOffer(attribute);
      e?.target?.classList.add('active');
      let offerAddClass=attribute?.replace(' ','');
      e?.target?.setAttribute("id",offerAddClass);
      let offerList = restaurantData?.filter((restaurant) => {
        const hasAttributeOffer = restaurant?.offers?.some((offer) => {
          return offer === attribute; // Modify this condition based on your comparison logic
        });
        return hasAttributeOffer;
      });
      if(offerList.length>0){
       setOfferData(restaurantData);
       setRestaurantData(offerList);
      }
      else{
        if(attribute){
        setNoOffer(true);
        }
      }
    }
    const handleremoveOffer=()=>{
      if(currentOffer!=''||currentOffer!==null){
        let removeClass=currentOffer?.replace(' ','');
        var element = document.getElementById(removeClass);
        element?.classList?.remove("active");
        setCurrentOffer(null);
        setNoOffer(false);
      }

      if(offerData.length>0){
        setRestaurantData(offerData);
      }
    }
  return (
    <>
      {/* {filteredList ? "true" : "false"} */}
      <section className="filter-list" >
        <>
          <TextSearch
            restaurantStatus={restaurantStatus}
            hygiene={hygiene}
            cuisines={cuisines}
            offerBanners={offerBanners}
            offerFilters={offerFilters}
            dietaryFilter={dietaryFilter}
          />
          <CuisineFilters  apiCall={apiCall}/>
          <FilterKey />

          {sortedRestaurants.length === 0 ? null : (
            <>
              <OfferBanners offerBanners={offerBanners} handleOffer={handleOffer} currentOffer={currentOffer} 
              handleremoveOffer={handleremoveOffer}
             />
            </>
          )}
        </>
        <section className="restaurant-listing" id="scrollList1">
         
          <>
                 <InfiniteScroll
                  dataLength={restaurantData&&restaurantData?.length}
                  next={fetchMoreData}
                  hasMore={true}
                  loader={ <div style={{ textAlign: 'center', padding: '20px' }}>
                  {listLoad&&<Spinner animation="border" size="sm" variant="success" />}
                  </div>}
                 >
            <Row>
              {sortedRestaurants.length === 0 ? null : (
                <>
                  <Col xxl={12}>
                    <h3 className="main-title">
                    {currentOffer?
                    currentOffer=="Free Delivery"?"Free Delivery":
                    "Special Offer"
                    :
                    "Top Rated Restaurants"
                    }</h3>
                  </Col>
                </>
              )}


             
              {sortedRestaurants1.length>0 && !noOffer?sortedRestaurants1.map((restaurant, index) => (
                <>
                  <Col xxl={4} xl={4} lg={6} md={6} sm={6} key={index}>
                    <div className="restaurant-box" onClick={handleClick1}>
                      <div className="img-box"  onClick={handleClick1}>
                        <Link
                          to={`/${restaurant.path}/menu`}
                          className="resta-path"
                          onClick={handleClick1}
                        >
                          <div className="image-container">
                          <LazyLoadImage
                            src={restaurant.backgroundImage}
                            effect="blur"
                            alt={restaurant.backgroundImage}
                            onClick={handleClick1}
                          />
                         </div>
                          {(() => {
                            switch (
                              restaurant.restaurantStatus.status
                            ) {
                              case "0":
                                return (
                                  <>
                                    <span className="pre-order-time">
                                      ASAP{" "}
                                      <strong>
                                        {restaurant.cookingTimeStart}{" "}
                                        - {restaurant.cookingTimeEnd}{" "}
                                        Mins
                                      </strong>
                                    </span>
                                  </>
                                );
                              case "1":
                                return (
                                  <>
                                    <span className="pre-order-time">
                                      Pre Order Available
                                    </span>
                                  </>
                                );
                              case "2":
                                return (
                                  <>
                                    <div className="overlay"></div>
                                    <span className="close-takeaway">
                                      Closed for Now
                                    </span>
                                  </>
                                );
                              case "3":
                                return (
                                  <>
                                    <div className="overlay"></div>
                                    <span className="close-takeaway">
                                      {
                                        restaurant.restaurantStatus
                                          .msg
                                      }
                                    </span>
                                  </>
                                );
                              default:
                                return "No Data Found";
                            }
                          })()}
                          {restaurant.restaurantStatus.status ===
                            "2" ||
                          restaurant.restaurantStatus.status ===
                            "3" ? (
                            <></>
                          ) : (
                            <>
                              {restaurant.offers &&
                                restaurant.offers.length > 0 && (
                                  <span className="offer-tag">
                                  {restaurant.offers[0]=="Use Code"?(
                                   <>{restaurant?.discount?(<>{restaurant?.discount?.discount}{restaurant?.discount?.discountType} OFF</>): null}
                                   </>
                                  ):(<>
                                    {restaurant.offers.slice(0, 1)}
                                    </>
                                  )
                                  }
                                  </span>
                                )}
                              <span className="fav-icon">
                                {restaurant.favourite ? (
                                  <AiFillHeart />
                                ) : (
                                  <AiOutlineHeart />
                                )}
                              </span>
                            </>
                          )}
                        </Link>
                      </div>
                      <Link
                        to={
                          restaurant.restaurantStatus.status === "2"
                            ? ""
                            : `/${restaurant.path}/menu`
                        }
                        className="resta-path"
                        onClick={handleClick1}
                      >
                        <div
                          className={`content ${
                            restaurant.restaurantStatus.status ===
                            "2"
                              ? "no-link"
                              : ""
                          }`}
                        >
                          <h4
                            style={{
                              display: "inline-block",
                              maxWidth: "-webkit-fill-available",
                              width: "100%",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {" "}
                            {restaurant.name}
                          </h4>
                          <p>
                            {restaurant.cuisineName.length > 4
                              ? restaurant.cuisineName
                                  .slice(0, 4)
                                  .join(", ") + "..."
                              : restaurant.cuisineName.join(", ") +
                                "."}
                          </p>
                          <div className="miles-rating">
                            <span>
                              <Image src={RestaurantPlace} />
                              {restaurant.miles} Miles away
                            </span>
                            {restaurant.rating.rate > 4.0 ? (
                              <>
                                <span>
                                  <Image src={RestaurantStar} />
                                  {restaurant.rating.rate}
                                  {restaurant.rating.rate >= 4.5 ? (
                                    <> Excellent </>
                                  ) : restaurant.rating.rate >=
                                      4.3 &&
                                    restaurant.rating.rate < 4.5 ? (
                                    <> Very Good </>
                                  ) : restaurant.rating.rate >=
                                      4.0 &&
                                    restaurant.rating.rate < 4.3 ? (
                                    <> Good </>
                                  ) : (
                                    <></>
                                  )}
                                  ({restaurant.rating.count}+)
                                </span>
                              </>
                            ) : (
                              <>
                                <span></span>
                              </>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Col>
                </>
              )):(<>
               <ListSkeleton/>
              </>)}
            </Row>
           
          </InfiniteScroll>
          </>
         
        </section>
      </section>
    </>
  );
}

const FilterKey = (params) => {
  const {
    OrderType,
    setOrderType,
    selectedFilter,
    setselectedFilter,
    selectedSort,
    setSelectedSort,
    selectedOffers,
    setSelectedOffers,
    selectedDietary,
    setSelectedDietary,
    selectedCategories,
    setSelectedCategories,
    selectedHygiene,
    setSelectedHygiene,
  } = ContextWidthConsumer();

  return (
    <>
      {!OrderType &&
      !selectedFilter &&
      !selectedSort &&
      !selectedOffers.length &&
      !selectedDietary.length &&
      !selectedCategories.length &&
      !selectedHygiene ? null : (
        <>
          <Row>
            <Col xxl={12}>
              <div className="filter-key">
                <ul>
                  {OrderType === null ? null : (
                    <li>
                      {OrderType}
                      <span onClick={() => setOrderType(null)}>
                        <MdCancel />
                      </span>
                    </li>
                  )}
                  {selectedFilter === null ? null : (
                    <li>
                      {selectedFilter === "0"
                        ? "Open Now"
                        : selectedFilter === "1"
                        ? "Pre Order"
                        : selectedFilter === "2"
                        ? "Closed"
                        : null}
                      <span onClick={() => setselectedFilter(null)}>
                        <MdCancel />
                      </span>
                    </li>
                  )}
                  {selectedSort === null ? null : (
                    <li>
                      {selectedSort}
                      <span onClick={() => setSelectedSort(null)}>
                        <MdCancel />
                      </span>
                    </li>
                  )}

                  {selectedOffers.map((Offers) => (
                    <li>
                      {Offers}
                      <span
                        onClick={() =>
                          setSelectedOffers(
                            selectedOffers.filter((o) => o !== Offers)
                          )
                        }
                      >
                        <MdCancel />
                      </span>
                    </li>
                  ))}
                  {selectedDietary.map((Dietary) => (
                    <li>
                      {Dietary}
                      <span
                        onClick={() =>
                          setSelectedDietary(
                            selectedDietary.filter((o) => o !== Dietary)
                          )
                        }
                      >
                        <MdCancel />
                      </span>
                    </li>
                  ))}
                  {selectedHygiene === null ? null : (
                    <li>
                      Hygiene Rating: {selectedHygiene}
                      <span onClick={() => setSelectedHygiene(null)}>
                        <MdCancel />
                      </span>
                    </li>
                  )}

                  {selectedCategories.map((Categories) => (
                    <li>
                      {Categories}
                      <span
                        onClick={() =>
                          setSelectedCategories(
                            selectedCategories.filter((o) => o !== Categories)
                          )
                        }
                      >
                        <MdCancel />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

const TextSearch = ({
  restaurantStatus,
  hygiene,
  offerBanners,
  offerFilters,
  dietaryFilter,
  cuisines
}) => {
  const { TextSearchData, setTextSearchData } = ContextWidthConsumer();
  const handleTextChange = (event) => {
    setTextSearchData(event.target.value);
  };

  // scroll Fixed Top Start
  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const updateSidebarTop = () => {
      const chatEl = document.querySelector(".sidebar-text-search");
      setSidebarTop(chatEl.getBoundingClientRect().top);
    };

    updateSidebarTop();
    window.addEventListener("resize", updateSidebarTop);
    return () => {
      window.removeEventListener("resize", updateSidebarTop);
    };
  }, []);

  useEffect(() => {
    const isSticky = (e) => {
      const chatEl = document.querySelector(".sidebar-text-search");
      const scrollTop = window.scrollY;
      chatEl.classList.toggle("is-sticky", scrollTop >= sidebarTop - 100);
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);
  // scroll Fixed Top End

  // Responsive Js
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // Responsive Js End

  return (
    <>
      <Row className="sidebar-text-search">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="mobile-filter">
            <div className="text-search">
              <Form>
                <BsSearch />
                <Form.Control
                  type="text"
                  placeholder="Search for restaurant, cuisine or a dish"
                  value={TextSearchData}
                  onChange={handleTextChange}
                />
              </Form>
            </div>
            {width > breakpoint ? null : (
              <>
                <div className="mobile-filter">
                  <MobileFilterCanva
                    restaurantStatus={restaurantStatus}
                    hygiene={hygiene}
                    cuisines={cuisines}
                    offerBanners={offerBanners}
                    offerFilters={offerFilters}
                    dietaryFilter={dietaryFilter}
                  />
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
const ResetBtn = ({ OrderType }) => {
  const {
    setOrderType,
    setselectedFilter,
    setSelectedSort,
    setSelectedOffers,
    setSelectedDietary,
    setSelectedCategories,
    setSelectedHygiene,
    setTextSearchData,
    setCuisineFilter,
  } = ContextWidthConsumer();
  const handleResetClick = () => {
    setOrderType(OrderType);
    setselectedFilter(null);
    setSelectedSort(null);
    setSelectedOffers([]);
    setSelectedDietary([]);
    setSelectedCategories([]);
    setSelectedHygiene(null);
    setTextSearchData("");
    setCuisineFilter([]);
  };
  return (
    <>
      <Button onClick={handleResetClick}>Clear all Filters</Button>
    </>
  );
};

// Cuisine Filter
const CuisineFilters=({apiCall})=> {
    const swiperRef=useRef();
    const [swiper, setSwiper] = useState(null);
    const [cuisinesData,setCuisinesData]=useState([]);
    const responseCuisines=useSelector(state=>state?.listCusinesReducer);
    const cuisines = responseCuisines?.response || "";
    const cuisinesArray = cuisines;
    useEffect(()=>{
      if(responseCuisines?.response){
        // const combinedData = Array.from([...new Set([...cuisinesData, ...cuisinesArray])]);
        const combinedData = [...new Set([...cuisinesData, ...cuisinesArray].map(JSON.stringify))]
        .map(JSON.parse);
        console.log(combinedData);
        setCuisinesData(combinedData);
      }
    },[responseCuisines]);
    useEffect(()=>{
    },[cuisinesData]);
    const handleReachEnd = async () => {
      try {
        let dataMode = 'cuisines'; // Your data mode or parameter for the API call
        await apiCall(dataMode); 
        // Handle appending new data to the existing data
      } catch (error) {
        console.error('Error fetching more data:', error);
      }
    };
  
    const { cuisinefilter, setCuisineFilter } = ContextWidthConsumer();
    const handleCheckboxChange = (event) => {
      const filter = event.target.value;
      if (event.target.checked) {
        setCuisineFilter([...cuisinefilter, filter]);
      } else {
        setCuisineFilter(cuisinefilter.filter((f) => f !== filter));
      }
    };
    const handleNextClick = async() => {
      if (swiper) {
       if(swiper.slideNext())
        // Fetch new data when reaching the last slide
      {
         let dataMode="cuisines";
         apiCall(dataMode);
        }
      }
    };
    return (
      <>
        {cuisinesData ? (
          <Row>
            <Col xxl={12}>
              <Swiper
               ref={swiperRef}
               onSwiper={setSwiper}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation, Mousewheel]}
                mousewheel={true}
                // speed={300}
                slidesPerView={10}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                  },
                  421: {
                    slidesPerView: 4,
                    centeredSlides: false,
                  },
                  501: {
                    slidesPerView: 5,
                  },
                  576: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 7,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 9,
                  },
                }}
                onReachEnd={handleReachEnd}
                className="cuisine-swiper"
              >
                {Array.isArray(cuisinesData) &&
                  cuisinesData
                    .sort((b, a) => a.client.length - b.client.length)
                    .map((data, index) => (
                      <>
                        <SwiperSlide key={index}>
                          <div className="cuisine-box">
                            <input
                              type="checkbox"
                              id={data.name + "cuisine"}
                              value={data.name}
                              checked={cuisinefilter.includes(data.name)}
                              onChange={handleCheckboxChange}
                            />
                            <label htmlFor={data.name + "cuisine"}>
                              {cuisinefilter.includes(data.name) ? (
                                <MdCancel />
                              ) : null}
                            </label>
                            <label
                              htmlFor={
                                cuisinefilter.includes(data.name)
                                  ? null
                                  : data.name + "cuisine"
                              }
                              className={
                                cuisinefilter.includes(data.name)
                                  ? "selected"
                                  : null
                              }
                            >
                              <LazyLoadImage src={data.url + data.image}  effect="blur"/>
                              <span>
                                {data.name.length > 7
                                  ? data.name.slice(0, 7) + "..."
                                  : data.name}
                              </span>
                            </label>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                     <button className="swiper-button-prev cuisines-prev"  onClick={handleNextClick}></button>
                     <button className="swiper-button-next cuisines-next" onClick={handleNextClick}></button>
              </Swiper>
            </Col>
          </Row>
        ) : null}
      </>
    );
  }

// Offer Banners Start

function OfferBanners({ offerBanners,handleOffer,currentOffer,handleremoveOffer, }) {
  const offerBannerArray = offerBanners;
  const offerBannerName=Object.keys(offerBannerArray);

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Swiper
            navigation={true}
            modules={[Navigation, Mousewheel, Autoplay]}
            speed={300}
            loop={false}
            mousewheel={false}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              421: {
                slidesPerView: 1,
              },
              501: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 1.2,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            className="offer-banner-swiper"
          >
            <>
              {offerBannerArray.BOGOF ? (
                <SwiperSlide>
                   {currentOffer ==="Buy One Offer"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.BOGOF} onClick={(e)=>handleOffer(e)} data-attr={offerBannerArray.BOGOF?"Buy One Offer":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.mealDeal ? (
                <SwiperSlide>
                   {currentOffer ==="Meal Deal"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.mealDeal} onClick={(e)=>handleOffer(e)} data-attr={offerBannerArray.mealDeal?"Meal Deal":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.freeGift ? (
                <SwiperSlide>
                   {currentOffer ==="Free Gift"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.freeGift} onClick={(e)=>handleOffer(e)} data-attr={offerBannerArray.freeGift?"Free Gift":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.freeDelivery ?  (
                <SwiperSlide>
                  {currentOffer ==="Free Delivery"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.freeDelivery} onClick={(e)=>handleOffer(e)} data-attr={offerBannerArray.freeDelivery?"Free Delivery":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.useCode ? (
                <SwiperSlide>
                  {currentOffer ==="Use Code"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.useCode} onClick={(e)=>handleOffer(e)} data-attr={offerBannerArray.useCode?"Use Code":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.noCode ? (
                <SwiperSlide>
                  {currentOffer ==="No Code"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.noCode} onClick={(e)=>handleOffer(e)}  data-attr={offerBannerArray.freeDelivery?"No Code":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.loyalty ? (
                <SwiperSlide>
                   {currentOffer ==="Loyalty"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.loyalty} onClick={(e)=>handleOffer(e)}  data-attr={offerBannerArray.useCode?"Loyalty":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.voucher ? (
                <SwiperSlide>
                   {currentOffer ==="Voucher Code"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.voucher} onClick={(e)=>handleOffer(e)}  data-attr={offerBannerArray.freeDelivery?"Voucher Code":''} fluid />
                </SwiperSlide>
              ) : null}
              {offerBannerArray.promo ? (
                <SwiperSlide>
                   {currentOffer ==="Promo Code"&&
                  <span onClick={handleremoveOffer}>
                    <MdCancel />
                  </span>
                  }
                  <Image src={offerBannerArray.promo} onClick={(e)=>handleOffer(e)}  data-attr={offerBannerArray.promo?"Promo Code":''} fluid />
                </SwiperSlide>
              ) : null}
            </>
          </Swiper>
        </Col>
      </Row>
    </>
  );
}
// Offer Banners End

function MobileFilterCanva({
  restaurantStatus,
  hygiene,
  cuisines,
  offerBanners,
  offerFilters,
  dietaryFilter,
}) {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <RiListSettingsFill />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        id="sidebar-filter-canva"
        className={theme === "dark" ? "theme--dark" : null}
      >
        <Offcanvas.Body>
          <Button className="close-canva-btn" onClick={handleClose}>
            <IoIosArrowDropright />
          </Button>
          <section className="list-sidebar">
            <FilterAll
              restaurantStatus={restaurantStatus}
              hygiene={hygiene}
              cuisines={cuisines}
              offerBanners={offerBanners}
              offerFilters={offerFilters}
              dietaryFilter={dietaryFilter}
            />
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
