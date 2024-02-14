// *******~ Import ~******** //
// React
import React, { useState, useEffect, useContext, lazy } from "react";
// Assets
import { Button, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
// Components
// import PreOrderListPage from "../preorder/preorderlistpage";
import ThemeContext from "../../common/theme/components/contexts/themecontexts";
import { OrderFlow } from "../../App";
// CSS
import "./css/sidebar.scss";
// Images
import DeliveryIcon from "./img/delivery.svg";
import CollectionIcon from "./img/collection.svg";
// Icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
// *******~ Import ~******** //
// context start
import { ContextWidthConsumer } from "./listpage";
// context end
import {
  autocompleteDataClear,
  autocompleteRequest,
} from "../../actions/autocomplete/getAutocompleteAction";
// import {
//   autocompleteRequest,
//   autocompleteDataClear,
// } from "../../../../actions/autocomplete/getAutocompleteAction";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loadable from "../../router/loadable";
import { getCuisinesClear } from "../../actions/restaurant/listcuisinesAction";
// Lazy
const PreOrderListPage = Loadable(
  lazy(() => import("../preorder/preorderlistpage"))
);

export default function Sidebar({
  restaurantStatus,
  hygiene,
  cuisines,
  offerBanners,
  offerFilters,
  dietaryFilter,
  postCode,
  setCuisinesLimit
}) {
  const { setRestaurantData,setReslimit,updateHasFetchedData } = OrderFlow();
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

  return (
    <>
      <section className="list-sidebar">
        <div className="">
          {/* <PostcodeSearch
            postCode={postCode}
            updateHasFetchedData={updateHasFetchedData}
            setReslimit={setReslimit}
            setRestaurantData={setRestaurantData}
          /> */}
        </div>
        <div class="d-none d-md-block">
        <PostcodeSearch
          postCode={postCode}
          updateHasFetchedData={updateHasFetchedData}
          setReslimit={setReslimit}
          setRestaurantData={setRestaurantData}
        />
        </div>
        <OrderTypeTab updateHasFetchedData={updateHasFetchedData} setCuisinesLimit={setCuisinesLimit}/>
        {/* <PreOrderInput updateHasFetchedData={updateHasFetchedData} /> */}
        <div className="d-none d-md-block">
          <PreOrderInput updateHasFetchedData={updateHasFetchedData} />
        </div>
        {width > breakpoint ? (
          <FilterAll
            restaurantStatus={restaurantStatus}
            hygiene={hygiene}
            cuisines={cuisines}
            offerBanners={offerBanners}
            offerFilters={offerFilters}
            dietaryFilter={dietaryFilter}
          />
        ) : null}
      </section>
    </>
  );
}
// Postcode Search
const PostcodeSearch = ({ postCode, updateHasFetchedData,setReslimit ,setRestaurantData}) => {
  return (
    <>
      <PostcodePopup
        postCode={postCode}
        updateHasFetchedData={updateHasFetchedData}
        setReslimit={setReslimit}
        setRestaurantData={setRestaurantData}
      >
        <FaMapMarkerAlt />
        <span className="post-code">{postCode}</span>
        <span className="arrow">
          <TiArrowSortedUp />
        </span>
      </PostcodePopup>
    </>
  );
};

const PreOrderInput = ({ updateHasFetchedData }) => {
  const { getOrderTime } = OrderFlow();
  const { OrderType, setOrderType } = ContextWidthConsumer();
  const [allData, setAllData] = useState("");

  //current Date
  const dateZone = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/London",
  };

  let formatToday = new Date()
    ?.toLocaleString("en-GB", dateZone)
    .replace(",", "");

  if (getOrderTime < formatToday) {
    localStorage.setItem("orderTime", formatToday);
  }
  return (
    <>
      <PreOrderListPage
        clsname="preorder-input"
        OrderType={OrderType}
        setOrderType={setOrderType}
        allData={allData}
        setAllData={setAllData}
        updateHasFetchedData={updateHasFetchedData}
      >
        <FaRegCalendarCheck />
        <span className="label">
          {getOrderTime === null
            ? "Schedule"
            : getOrderTime < formatToday
            ? formatToday
            : getOrderTime}
        </span>
        <span className="arrow">
          <TiArrowSortedUp />
        </span>
      </PreOrderListPage>
    </>
  );
};

// Filtering All
export const FilterAll = ({
  restaurantStatus,
  hygiene,
  cuisines,
  offerFilters,
  dietaryFilter,
}) => {
  return (
    <>
      <div className="filtering-all">
        <Accordion defaultActiveKey={["0", "1", "2", "3", "4", "5"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Filter
              <MdOutlineArrowForwardIos />
            </Accordion.Header>
            <Accordion.Body>
              <SidebarFilter restaurantStatus={restaurantStatus} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Sort
              <MdOutlineArrowForwardIos />
            </Accordion.Header>
            <Accordion.Body>
              <SidebarSort />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Offers
              <MdOutlineArrowForwardIos />
            </Accordion.Header>
            <Accordion.Body>
              <SidebarOffers offerFilters={offerFilters} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Dietary
              <MdOutlineArrowForwardIos />
            </Accordion.Header>
            <Accordion.Body>
              <SidebarDietary dietaryFilter={dietaryFilter} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Hygiene rating
              <MdOutlineArrowForwardIos />
            </Accordion.Header>
            <Accordion.Body>
              <SidebarHygiene hygiene={hygiene} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Categories
              <MdOutlineArrowForwardIos />
            </Accordion.Header>
            <Accordion.Body>
              <SidebarCategories cuisines={cuisines} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

// Order Type
const OrderTypeTab = ({ updateHasFetchedData,setCuisinesLimit }) => {
  const { OrderType, setOrderType } = ContextWidthConsumer();
  const { setOrderMode,setReslimit } = OrderFlow();
  const dispatch=useDispatch();

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setOrderMode(event.target.value);
    setOrderType(event.target.value);
    localStorage.setItem("orderMode", event.target.value);
    updateHasFetchedData(false);
    dispatch(getCuisinesClear());
    setCuisinesLimit(1);
    setReslimit(1);
  };

  return (
    <>
      <div className="order-type">
        {[
          { label: "Delivery", icon: DeliveryIcon },
          { label: "Collection", icon: CollectionIcon },
          // { label: "Dine In", icon: DeliveryIcon },
        ]?.map((option, index) => (
          <div
            className={`input-box ${
              OrderType === option.label ? "active" : ""
            }`}
            key={index}
          >
            <input
              type="radio"
              id={option.label + "type"}
              name="OrderType"
              value={option.label}
              checked={OrderType === option.label}
              onChange={handleOptionChange}
              disabled={option.label === "Dine In"}
            />
            <label htmlFor={option.label + "type"}>
              <Image src={option.icon} /> {option.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
// Filter
const SidebarFilter = ({ restaurantStatus }) => {
  const convertedArray = Object.entries(restaurantStatus)?.map(
    ([key, value]) => {
      let type = "";
      let count = 0;
      let status = 1;
      if (key === "openNow") {
        type = "Open Now";
        if (value !== "") count = value.split(",").length;
        status = 0;
      } else if (key === "preOrder") {
        type = "Pre Order";
        if (value !== "") count = value.split(",").length;
        status = 1;
      }
      return { type, value: status, count };
    }
  );
  const { selectedFilter, setselectedFilter } = ContextWidthConsumer();

  const handleOptionChange = (event) => {
    setselectedFilter(event.target.value);
  };
  return (
    <>
      <div className="filter-box">
        {convertedArray?.map((data, index) => (
          <>
            <div className="filter-input" key={index}>
              <input
                type="radio"
                id={data.type + "filter"}
                name="OrderTypeFilter"
                value={data.value}
                checked={selectedFilter === index.toString()}
                onChange={handleOptionChange}
              />
              <label htmlFor={data.type + "filter"}>
                <span>{data.type}</span>&nbsp;<span>({data.count})</span>
              </label>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
const SidebarSort = () => {
  const { selectedSort, setSelectedSort } = ContextWidthConsumer();
  const handleOptionChange = (event) => {
    setSelectedSort(event.target.value);
  };
  return (
    <>
      <div className="filter-box">
        {[
          { type: "Top Rated" },
          { type: "Hygiene Ratings" },
          { type: "Quickest Delivery" },
          { type: "Reviews" },
        ]?.map((data, index) => (
          <>
            <div className="filter-input" key={index}>
              <input
                type="radio"
                id={data.type + "filter"}
                name="SortFilter"
                value={data.type}
                checked={selectedSort === data.type.toString()}
                onChange={handleOptionChange}
              />
              <label htmlFor={data.type + "filter"}>
                <span>{data.type}</span>&nbsp;
              </label>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

function SidebarOffers({ offerFilters }) {
  const offerFiltersArray = offerFilters;
  const transformedArray = Object.keys(offerFiltersArray)?.map((key, index) => ({
    type: key,
    count: offerFiltersArray[key].split(",").filter(Boolean).length,
  }));
  const { selectedOffers, setSelectedOffers } = ContextWidthConsumer();
  const handleCheckboxChange = (event) => {
    const filter = event.target.value;
    if (event.target.checked) {
      setSelectedOffers([...selectedOffers, filter]);
    } else {
      setSelectedOffers(selectedOffers.filter((f) => f !== filter));
    }
  };

  return (
    <>
      <div className="filter-box">
        {transformedArray?.map((data, index) => (
          <div className="filter-input" key={data.type}>
            <input
              type="checkbox"
              id={data.type + "filter"}
              value={data.type}
              checked={selectedOffers.includes(data.type)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={data.type + "filter"}>
              <span>{data.type}</span>&nbsp;<span>({data.count})</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
function SidebarDietary({ dietaryFilter }) {
  const dietaryArray = dietaryFilter;
  const transformedArray = Object.keys(dietaryArray)?.map((key, index) => ({
    type: key,
    count: dietaryArray[key].split(",").filter(Boolean).length,
  }));
  const { selectedDietary, setSelectedDietary } = ContextWidthConsumer();
  const handleCheckboxChange = (event) => {
    const filter = event.target.value;
    if (event.target.checked) {
      setSelectedDietary([...selectedDietary, filter]);
    } else {
      setSelectedDietary(selectedDietary.filter((f) => f !== filter));
    }
  };

  return (
    <>
      <div className="filter-box">
        {transformedArray.map((data, index) => (
          <div className="filter-input" key={index}>
            <input
              type="checkbox"
              id={data.type + "filter"}
              value={data.type}
              checked={selectedDietary.includes(data.type)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={data.type + "filter"}>
              <span>{data.type}</span>&nbsp;
              <span>({data.count})</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
function SidebarHygiene({ hygiene }) {
  const hygieneArray = hygiene;
  const transformedArray = Object.keys(hygieneArray).map((key, index) => ({
    rating: (index + 1).toString(),
    count: hygieneArray[key].split(",").filter(Boolean).length,
  }));
  const { selectedHygiene, setSelectedHygiene } = ContextWidthConsumer();
  const handleOptionChange = (event) => {
    setSelectedHygiene(event.target.value);
  };

  return (
    <>
      <div className="filter-box">
        {transformedArray.reverse().map((data, index) => (
          <>
            <div className="filter-input" key={index}>
              <input
                type="radio"
                id={data.rating + "filter"}
                name="HRating"
                checked={selectedHygiene === data.rating.toString()}
                value={data.rating}
                onChange={handleOptionChange}
              />
              <label htmlFor={data.rating + "filter"}>
                <span>
                  {[...Array(Number(data.rating))].map((data, index) => (
                    <>
                      <AiFillStar />
                    </>
                  ))}
                  {[...Array(Number(5 - data.rating))].map((data, index) => (
                    <>
                      <AiOutlineStar />
                    </>
                  ))}
                </span>
                &nbsp;
                <span>({data.count})</span>
              </label>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
const SidebarCategories = ({ cuisines }) => {
  const cuisinesArray = cuisines;
  const { selectedCategories, setSelectedCategories } = ContextWidthConsumer();
  const handleCheckboxChange = (event) => {
    const filter = event.target.value;
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, filter]);
    } else {
      setSelectedCategories(selectedCategories.filter((f) => f !== filter));
    }
  };

  return (
    <>
      <div className="filter-box cuisines-listing">
        {Array.isArray(cuisinesArray) &&
          cuisinesArray
            .sort((b, a) => a.client.length - b.client.length)
            .map((data, index) => (
              <div className="filter-input" key={index}>
                <input
                  type="checkbox"
                  id={data.name + "filter"}
                  value={data.name}
                  checked={selectedCategories.includes(data.name)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={data.name + "filter"}>
                  <span>{data.name}</span>&nbsp;
                  {data.client ? (
                    <span>({data.client.split(",").length})</span>
                  ) : (
                    <span>({0})</span>
                  )}
                </label>
              </div>
            ))}
      </div>
    </>
  );
};

export function PostcodePopup({ postCode, updateHasFetchedData, children ,setReslimit,setRestaurantData}) {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  // An array of recent postcodes
  // const recentPostcodes = [
  //   { value: "SK11 6TJ", label: "SK11 6TJ" },
  //   { value: "SK11 7UZ", label: "SK11 7UZ" },
  //   { value: "SK10 5LP", label: "SK10 5LP" },
  // ];
  const [show, setShow] = useState(false);
  const [postcodedata, setPostcodedata] = useState([]);
  const [autcode, setAutcode] = useState(null);
  const initialValue = 0;
  const [pagelimit, setPagelimit] = useState(initialValue);
  const hasMoreData = true;
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // postcode validation start
  const [formData, setPostcode] = useState({
    postcode: postCode,
    isValid: true,
  });

  const [valid, setInvalid] = useState(false);

  const choices = useSelector(
    (state) => state?.AutocompleteReducer?.autocompletedetail
  );

  useEffect(() => {
    setPostcodedata(choices);
    setLoading(false);
  }, [choices]);

  const formatPostcode = (postcode) => {
    // Remove all non-alphanumeric characters from the postcode
    const alphanumericPostcode = postcode.replace(/\W/g, "");
    // Insert a space before the last three characters
    const formattedPostcode = alphanumericPostcode.replace(
      /^(.*)(\w{3})$/,
      "$1 $2"
    );
    // Convert the formatted postcode to uppercase
    return formattedPostcode.toUpperCase();
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const data = value?.replace(/\s/g, "");
    setPostcodedata([]);
    dispatch(autocompleteDataClear());
    setAutcode(data);
    if (data) {
      dispatch(
        autocompleteRequest({
          postcode: data,
          limit: 1,
        })
      );
      setPagelimit(1);
      setShowList(true);
    } else {
      setShowList(false);
      setAutcode([]);
    }

    const formattedPostcode = formatPostcode(value);
    setPostcode({ ...formData, [name]: formattedPostcode });
    setInvalid(false);
  };

  // const handleRecentPostcodeChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(value);
  //   console.log(name);
  //   const formattedPostcode  = formatPostcode(value);
  //   setPostcode({...formData, [name]: formattedPostcode });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Define the regular expression pattern for postcode validation
    const postcodeRegex =
      /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}|\d[A-Z]{1,2}\s?\d[A-Z]{2})$/i;
    if (postcodeRegex.test(formData.postcode)) {
      console.log("Valid postcode:", formData.postcode);
      setPostcode({
        postcode: formData.postcode,
        isValid: true,
      });
      localStorage.setItem("storePostcode", formData.postcode);
      updateHasFetchedData(false);
      setShow(false);
    } else {
      console.log("Invalid postcode:", formData.postcode);
      setPostcode({
        postcode: formData.postcode,
        isValid: false,
      });
      setInvalid(true);
    }
  };

  // postcode validation end
  const handleAutocomplete = (value) => {
    setShowList(false);
    const postCodeValue =
      value.street + "," + value.town + "," + value.postcode;
    setPostcode({ ...formData, postcode: postCodeValue });
    handleautoSubmit(postCodeValue);
  };
  const handleautoSubmit = (v) => {
    const postcode_data = v?.split(",");
    const postcode_form_data =
      postcode_data?.length > 2 ? v?.split(",")[2]?.trim() : v;
    const postcodeRegex =
      /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}|\d[A-Z]{1,2}\s?\d[A-Z]{2})$/i;
    if (postcodeRegex.test(postcode_form_data)) {
      setReslimit(0);
      setRestaurantData([]);
      setPostcode({
        postcode: postcode_form_data,
        isValid: true,
      });
      localStorage.setItem("storePostcode", postcode_form_data);
      updateHasFetchedData(false);
      setRestaurantData([]);
      setShow(false);
    } else {
      console.log("Invalid postcode:", postcode_form_data);
      setPostcode({
        postcode: postcode_form_data,
        isValid: false,
      });
    }
  };

  const fetchMoreData = async (v) => {
    setLoading(true);
    setPagelimit((prevLimit) => prevLimit + 1);
    dispatch(
      autocompleteRequest({
        postcode: autcode,
        limit: pagelimit + 1,
      })
    );
  };

  return (
    <>
      <Button className="postcode-search" onClick={handleShow}>
        {children}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className={`postcode-popup ${theme === "dark" ? "dark-theme" : ""}`}
        centered
      >
        <Modal.Body>
          <div className="content">
            <div className="search-box">
              <Form onSubmit={handleSubmit}>
                <Form.Label>
                  <span className="location-mark">
                    <FaMapMarkerAlt />
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={postCode}
                  value={formData.postcode}
                  name="postcode"
                  required
                  onChange={handleInputChange}
                />
                {valid ? <p>Invalid Postcode.</p> : <></>}
                <Button variant="primary" type="submit">
                  Search <TiArrowSortedUp />
                </Button>
              </Form>
            </div>
            {postcodedata && postcodedata.length > 0 && (
              <div
                class={`list-group ${showList ? "show-list" : "hide-list"}`}
                id="scrollableDiv"
                style={{ height: 300, overflow: "auto" }}
              >
                <InfiniteScroll
                  dataLength={postcodedata ? postcodedata.length : 0}
                  next={fetchMoreData}
                  hasMore={hasMoreData}
                  loader={loading ? <h4>Loading...</h4> : ""}
                  scrollableTarget="scrollableDiv"
                >
                  {postcodedata && postcodedata.length > 0 && (
                    <>
                      {postcodedata?.map((v, i) => (
                        <div key={i}>
                          <li onClick={() => handleAutocomplete(v)}>
                            {`${v.street},${v.town},${v.postcode}`}
                          </li>
                        </div>
                      ))}
                    </>
                  )}
                </InfiniteScroll>
              </div>
            )}

            {/* <div className="recent-search">
              <p>Or select a recent postcodes</p>
              <div className="recent-code">
                {recentPostcodes.map((postcodeOption) => (
                  <div className="input-box" key={postcodeOption.value}>
                    <input
                      type="radio"
                      id={`code-${postcodeOption.value}`}
                      name="postcode"
                      value={postcodeOption.value}
                      checked={formData.postcode === postcodeOption.value}
                      onChange={handleRecentPostcodeChange}
                    />
                    <label htmlFor={`code-${postcodeOption.value}`}>
                      <FaMapMarkerAlt /> <span>{postcodeOption.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
