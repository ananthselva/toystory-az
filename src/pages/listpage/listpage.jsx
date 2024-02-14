// *******~ Import ~******** //
// React
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
// Assets

import { Container, Row, Col } from "react-bootstrap";
// Components
// import ListSkeleton from "./listskeleton";
// import Sidebar from "./sidebar";
// import FilterList from "./filterlist";
import { OrderFlow } from "../../App";
// CSS
import "./css/listpage.scss";
// Images
// Icons

// Redux home page code
import { connect,useDispatch } from "react-redux";
import { getListpage } from "../../actions/restaurant/listpageActions";
import { getCuisines,getCuisinesClear } from "../../actions/restaurant/listcuisinesAction";
import { lazy } from "react";
import Loadable from "../../router/loadable";
import { getFilter,getFilterClear } from "../../actions/restaurant/listfilterAction";
import { getListPageClear } from "../../actions/restaurant/listpageActions";
//Lazy
const ListSkeleton = Loadable(lazy(() => import("./listskeleton")));
const Sidebar = Loadable(lazy(() => import("./sidebar")));
const FilterList = Loadable(lazy(() => import("./filterlist")));

// *******~ Import ~******** //
export const ContextWidthProvider = createContext({});
export const ContextWidthConsumer = () => useContext(ContextWidthProvider);

const ListPage = ({ getListpage, isLoading, error, response, userData,getCuisines,listCusinesReducer,getListPageClear,getCuisinesClear,getFilterClear}) => {
  const { getOrderMode,
    getOrderTime, 
    setOrderTime,
    setFooterLoading ,
    footerLoading,
    reslimit,
    setReslimit,
    restaurantData,setRestaurantData,
    hasFetchedData, updateHasFetchedData,
  } = OrderFlow();
  const [OrderType, setOrderType] = useState(getOrderMode);
  const [selectedFilter, setselectedFilter] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cuisinefilter, setCuisineFilter] = useState([]);
  const [selectedHygiene, setSelectedHygiene] = useState(null);
  const [TextSearchData, setTextSearchData] = useState(null);
  const [cuisinesLimit,setCuisinesLimit]=useState(1);
  
  let orderTypeForApi = "0";
  if (OrderType === "Delivery") {
    orderTypeForApi = "0";
  } else if (OrderType === "Collection") {
    orderTypeForApi = "1";
  } else if (OrderType === "Dine In") {
    orderTypeForApi = "2";
  }
  const postCode = localStorage.getItem("storePostcode");
  const navigate = useNavigate();
  if (postCode === "" || postCode === null) {
    navigate("/");
  }
  
  useEffect(() => {
    if (getOrderTime === null || getOrderTime === "") {
      const currentTime = new Date().toLocaleString("en-GB", {
        timeZone: "Europe/London",
      });
      const [datePart, timePart] = currentTime.split(", ");
      const [hours, minutes] = timePart.split(":");
      const formattedTime = `${hours}:${minutes}`;
      localStorage.setItem("orderTime", `${datePart} ${formattedTime}`);
      setOrderTime(`${datePart} ${formattedTime}`);
    }
  }, [setOrderTime, getOrderTime]);

  const now = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const orderTime = now.toLocaleString("en-GB", options).replace(",", "");

  let customerId = "";
  if (userData) {
    customerId = userData.customerId;
  }
  useEffect(()=>{
    console.log(restaurantData);
   if(reslimit===0){
    getListPageClear();
    getCuisinesClear();
    getFilterClear();
    setRestaurantData([]);
    setReslimit(1);
   }  
  },[reslimit]);
  const handleFooter=()=>{
  console.log(footerLoading);
  setFooterLoading(false);
  }
  useEffect(()=>{
   handleFooter();
  },[]);
  useEffect(()=>{
   if(footerLoading===false){
    setTimeout(() => {
      setFooterLoading(true);
    }, 2000);
   }
  },[footerLoading])
  const formData = useMemo(() => {
    const inputDate = orderTime; // Your input date string
    const dateParts = inputDate.split(" ")[0].split("/"); // Split the date into parts
    const timePart = inputDate.split(" ")[1]; // Get the time part

    // Create a Date object with the parts
    const dateObject = new Date(
      `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timePart}`
    );

    // Format the date in the desired format
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hour = String(dateObject.getHours()).padStart(2, "0");
    const minute = String(dateObject.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

    return {
      post_code: postCode,
      order_mode: orderTypeForApi,
      order_time: formattedDate,
      customer_id: customerId,
      favourite: false,
      limit:reslimit===0?1:reslimit
    };
  }, [postCode, orderTypeForApi, orderTime, customerId,]);

  
  const dispatch=useDispatch();
  useEffect(() => {
    if (!hasFetchedData) {
      const newFormData = { ...formData };
      delete newFormData.limit;
      console.log(newFormData);
      
      dispatch(getFilter(newFormData));
      getListpage(formData);
      getCuisines(formData);
      updateHasFetchedData(true);
    }
  }, [ formData, orderTime, hasFetchedData]);

  const onSkeleton=()=>{
  if (isLoading) {
    return <ListSkeleton />;
  }
  }
  useEffect(()=>{
    onSkeleton();
  },[]);
 
  const apiCall=async(dataMode)=>{
    const inputDate = orderTime; // Your input date string
    const dateParts = inputDate.split(" ")[0].split("/"); // Split the date into parts
    const timePart = inputDate.split(" ")[1]; // Get the time part

    // Create a Date object with the parts
    const dateObject = new Date(
      `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timePart}`
    );

    // Format the date in the desired format
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hour = String(dateObject.getHours()).padStart(2, "0");
    const minute = String(dateObject.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;
     
    if(dataMode==="restaurant"){
    let form_data= {
      post_code: postCode,
      order_mode: orderTypeForApi,
      order_time: formattedDate,
      customer_id: customerId,
      favourite: false,
      limit:reslimit+1
    };
    setReslimit(prev=>prev+1);
    getListpage(form_data);
   }
   else{
    let cuisines_data= {
      post_code: postCode,
      order_mode: orderTypeForApi,
      order_time: formattedDate,
      customer_id: customerId,
      favourite: false,
      limit:cuisinesLimit+1
    };
    setCuisinesLimit(prev=>prev+1);
    getCuisines(cuisines_data);
   }
  }
  

  const restaurantStatus = response?.response?.restaurantFilter || "";
  const hygiene = response?.response?.hygieneRatingFilter || "";
  const offerBanners = response?.response?.offerBanners || "";
  const offerFilters = response?.response?.offerFilters || "";
  const dietaryFilter = response?.response?.dietaryFilter || "";
  const cuisines =listCusinesReducer?.response||" ";


  return (
    <>
      {/* <ListSkeleton /> */}
      <section className="listpage" id="scrollList">
   
        <Container>
          <Row>
            <ContextWidthProvider.Provider
              value={{
                selectedOffers,
                setSelectedOffers,
                selectedSort,
                setSelectedSort,
                OrderType,
                setOrderType,
                selectedFilter,
                setselectedFilter,
                selectedDietary,
                setSelectedDietary,
                selectedCategories,
                setSelectedCategories,
                selectedHygiene,
                setSelectedHygiene,
                TextSearchData,
                setTextSearchData,
                cuisinefilter,
                setCuisineFilter,
              }}
            >
              <Col xs={12} sm={12} md={4} lg={4} xl={3} xxl={3}>
                <Sidebar
                  restaurantStatus={restaurantStatus}
                  hygiene={hygiene}
                  cuisines={cuisines}
                  offerBanners={offerBanners}
                  offerFilters={offerFilters}
                  dietaryFilter={dietaryFilter}
                  updateHasFetchedData={updateHasFetchedData}
                  postCode={postCode}
                  setReslimit={setReslimit}
                  setCuisinesLimit={setCuisinesLimit}
                />
              </Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={9} xxl={9}>
                <FilterList
                  restaurantStatus={restaurantStatus}
                  hygiene={hygiene}
                  offerBanners={offerBanners}
                  offerFilters={offerFilters}
                  dietaryFilter={dietaryFilter}
                  postCode={postCode}
                  apiCall={apiCall}
                />
              </Col>
            </ContextWidthProvider.Provider>
          </Row>
        </Container>
      
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state?.getListpage?.isLoading,
  response: state?.listFilterReducer,
  listCusinesReducer:state?.listCusinesReducer,
  error: state?.getListpage?.error,
  userData: state?.userdata?.userData,
});

const mapDispatchToProps = {
  getListpage,
  getCuisines,
  getListPageClear,
  getCuisinesClear,
  getFilterClear
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
