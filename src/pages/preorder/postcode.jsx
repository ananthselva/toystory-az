import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FaMapMarkerAlt } from "react-icons/fa";

const PostCode = ({
  isValidPostcode,
  setIsValidPostcode,
  warningpostcode,
  setWarningpostcode,
  setIsVisible,
  isVisible,
}) => {
  const orderPostcode = localStorage.getItem("orderPostcode") || "";
  let storePostcode = localStorage.getItem("storePostcode") || "";
  storePostcode =
    storePostcode === "undefined" || storePostcode === undefined
      ? ""
      : storePostcode;
  const postalCode = orderPostcode !== "" ? orderPostcode : storePostcode;

  // postcode validation start
  const [postcodeData, setPostcode] = useState({
    postcode: postalCode,
    isValid: true,
  });

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

  // Function to handle changes in the postcode input field
  const handlePostcodeChange = (event) => {
    const { name, value } = event.target;
    const formattedPostcode = formatPostcode(value);
    setPostcode({ ...postcodeData, [name]: formattedPostcode });
    // Regular expression to allow exactly 6 characters with only text or numbers (alphanumeric)
    const postcodeRegex = /^(.*)(\w{3})$/;
    setIsValidPostcode(postcodeRegex.test(value));
    if (
      typeof formattedPostcode !== "undefined" &&
      formattedPostcode !== "undefined"
    ) {
      localStorage.setItem("orderPostcode", formattedPostcode);
    } else {
      localStorage.setItem("orderPostcode", "");
    }
    setWarningpostcode(false);
    setIsVisible(false);
  };

  return (
    <>
      <div className="postcode-bar">
        <p className="form-label">Confirm your delivery address</p>
        <Form className={!isValidPostcode && "error-form"}>
          <FaMapMarkerAlt />
          <Form.Control
            type="text"
            placeholder="Enter Postcode"
            // defaultValue={postcodeData.postcode}
            value={
              postcodeData?.postcode !== "undefined" &&
              postcodeData?.postcode !== undefined
                ? postcodeData.postcode
                : ""
            }
            name="postcode"
            onChange={handlePostcodeChange}
            isInvalid={!isValidPostcode} // Add isInvalid prop to show validation error style
            autoComplete="off"
          />
        </Form>
        {warningpostcode && <p className="error-code">Please Enter Postcode</p>}
        {!isValidPostcode && <p className="error-code">Invalid postcode</p>}
        {isVisible && (
          <p className="error-code">
            Your location is outside the outlet's delivery area
          </p>
        )}
      </div>
    </>
  );
};

export default PostCode;
