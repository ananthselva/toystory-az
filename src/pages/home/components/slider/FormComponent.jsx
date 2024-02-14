// *******~ Import ~******** //
import React, { useState } from "react";
// React
// Assets
import { Image, Form } from "react-bootstrap";

// CSS
import "./slider.scss";
// Images
import LocationIcon from "./img/location.svg";
// Icons
import { HiOutlineArrowSmRight } from "react-icons/hi";

// *******~ Import ~******** //
import {
  autocompleteRequest,
  autocompleteDataClear,
} from "../../../../actions/autocomplete/getAutocompleteAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { OrderFlow } from "../../../../App";
const FormComponent = ({
  postcodeInput,
  postcodeButton,
  useNavigate,
}) => {
  const {setFooterLoading}=OrderFlow();
  const navigate = useNavigate();

  const choices = useSelector(
    (state) => state?.AutocompleteReducer?.autocompletedetail
  );
  const dispatch = useDispatch();
  const [postcodedata, setPostcodedata] = useState([]);
  const initialValue = 0;
  const [pagelimit, setPagelimit] = useState(initialValue);
  const [postcode, setPostcode] = useState(null);
  const hasMoreData = true;
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);

  // postcode validation start
  const [formData, setState] = useState({
    postcode: "",
    isValid: true,
  });

  useEffect(() => {
    setPostcodedata(choices);
    setLoading(false);
  }, [choices]);

  // useEffect(()=>{
  //   setPagelimit(0);
  //   console.log(pagelimit);
  //  },[postcode]);

  // useEffect(() => {
  //  setPagelimit(pagelimit);
  //  console.log(pagelimit);
  // }, [pagelimit]);

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
  const handleChange = async (event) => {
    setPostcodedata([]);
    dispatch(autocompleteDataClear());
    const { name, value } = event.target;
    const data = value?.replace(/\s/g, "");
    setPostcode(data);
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
      // list_group.style.display = "none";
      setShowList(false);
      setPostcodedata([]);
    }
    const formattedPostcode = formatPostcode(value);
    setState({ ...formData, [name]: formattedPostcode, isValid: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Define the regular expression pattern for postcode validation
    const postcodeRegex =
      /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}|\d[A-Z]{1,2}\s?\d[A-Z]{2})$/i;
    const postcode_data = formData?.postcode?.split(",");
    const postcode_form_data =
      postcode_data?.length > 2
        ? formData?.postcode?.split(",")[2].trim()
        : formData?.postcode;

    if (postcodeRegex.test(postcode_form_data)) {
      setState({
        postcode: postcode_form_data,
        isValid: true,
      });
      localStorage.setItem("storePostcode", postcode_form_data);
      navigate("/list");
      setFooterLoading(false);
    } else {
      console.log("Invalid postcode:", postcode_form_data);
      setState({
        postcode: postcode_form_data,
        isValid: false,
      });
    }
  };

  // postcode validation end
  const handleAutocomplete = (value) => {
    // list_group.style.display = "none";
    setShowList(false);
    const postCodeValue =
      value.street + "," + value.town + "," + value.postcode;
    setState({ ...formData, postcode: postCodeValue });
    handleautoSubmit(postCodeValue);
  };
  const handleautoSubmit = (v) => {
    const postcode_data = v?.split(",");
    const postcode_form_data =
      postcode_data?.length > 2 ? v?.split(",")[2]?.trim() : v;
    const postcodeRegex =
      /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}|\d[A-Z]{1,2}\s?\d[A-Z]{2})$/i;
    if (postcodeRegex.test(postcode_form_data)) {
      setState({
        postcode: postcode_form_data,
        isValid: true,
      });
      localStorage.setItem("storePostcode", postcode_form_data);
      navigate("/list");
      setFooterLoading(false);
    } else {
      console.log("Invalid postcode:", postcode_form_data);
      setState({
        postcode: postcode_form_data,
        isValid: false,
      });
    }
  };

  const fetchMoreData =  () => {
    setLoading(true);
    setPagelimit((prevLimit) => prevLimit + 1);
    dispatch(
      autocompleteRequest({
        postcode: postcode,
        limit: pagelimit + 1,
      })
    );
  };
  return (
    <>
      <Form style={postcodeInput} onSubmit={handleSubmit}>
        <Form.Group className="search-form-group">
          <Form.Control
            style={postcodeInput}
            type="text"
            placeholder="Enter your postcode"
            onFocus={(event) => {
              event.target.placeholder = "";
            }}
            onBlur={(event) => {
              event.target.placeholder = "Enter your postcode";
            }}
            name="postcode"
            required
            value={formData.postcode}
            onChange={handleChange}
            autoComplete="off"
          />
          <Image src={LocationIcon}></Image>
        </Form.Group>

        <button style={postcodeButton} type="submit">
          <HiOutlineArrowSmRight />
        </button>
      </Form>
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
            {postcodedata && postcodedata.length > 0 ? (
              <>
                {postcodedata?.map((v, i) => (
                  <div key={i}>
                    <li onClick={() => handleAutocomplete(v)}>
                      {`${v.street},${v.town},${v.postcode}`}
                    </li>
                  </div>
                ))}
              </>
            ) : (
              <li className="not-found-postcode">Postcode Not Found</li>
            )}
          </InfiniteScroll>
        </div>
      )}
     
      {!formData.isValid && (
        <p style={postcodeButton} className="errorContent">
          Please enter a valid postcode.
        </p>
      )}
    </>
  );
};
export default FormComponent;
