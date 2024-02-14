import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { OrderFlow } from "../../App";

import { postcodeDetailApi } from "../../api/menu/postcodeDetailApi";
const SubmitButton = ({
  selectedTab,
  timing,
  isValidPostcode,
  selectedTime,
  setShow,
  startDate,
  selectedDate,
  selectedOrderMode,
  setWarningpostcode,
  setIsVisible,
}) => {
  const {
    restaurant,
    setOrderTime,
    getOrderMode,
    setOrderMode,
    moveToCheck,
    setMoveToCheck,
  } = OrderFlow();
  const navigate = useNavigate();
  useEffect(()=>{
   console.log(selectedTime);
  },[]);
  useEffect(()=>{
   console.log(selectedTime,11);
  },[selectedTime])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderPostcode = localStorage.getItem("orderPostcode");
    const storePostcode = localStorage.getItem("storePostcode");
    const postalCode =
      orderPostcode !== null && orderPostcode !== ""
        ? orderPostcode
        : storePostcode;
    const orderType =
      localStorage.getItem("orderMode") === "Collection" ? 1 : 0;

    const collectionTatTiming =
      restaurant?.collectionCookingTimeStart +
      " - " +
      restaurant?.collectionCookingTimeEnd;
    const deliveryTatTiming =
      restaurant?.deliveryCookingTimeStart +
      " - " +
      restaurant?.deliveryCookingTimeEnd;
    const tatTime =
      getOrderMode === "Delivery" ? deliveryTatTiming : collectionTatTiming;

    if (postalCode === null && selectedOrderMode==="Delivery") {
      setWarningpostcode(true);
    } else {
      if (selectedOrderMode === "Delivery") {
        const path = localStorage.getItem("clientPath");

        const formData = {
          client_path: path,
          order_mode: orderType,
          post_code: postalCode,
        };
        try {
          const apiResponse = await postcodeDetailApi(formData);
          checkPostcode(apiResponse.data, orderType, formData.post_code);
          // Assuming the response has a 'data' property
          if (moveToCheck) {
            setMoveToCheck(false);
            const path = localStorage.getItem("clientPath");
            navigate(`/${path}/checkout`);
          }
        } catch (error) {
          setIsVisible(true);
          localStorage.setItem("postcodeDetail", "");
        }
      } else {
        if (moveToCheck) {
          const total = localStorage.getItem("totalPrice");
          const discountJSON = localStorage.getItem("discount");
          const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : 0;
          let appliedDiscount = 0;
          if (orderType === parsedDiscount.orderType) {
            appliedDiscount = parsedDiscount.appliedDiscount
              ? parsedDiscount.appliedDiscount
              : 0;
          }
          if (restaurant.minAmount < total - appliedDiscount) {
            console.log("Not satisfied");
          } else {
            setShow(false);
            console.log("Satisfied");
            setMoveToCheck(false);
            const path = localStorage.getItem("clientPath");
            navigate(`/${path}/checkout`);
          }
        } else {
          setShow(false);
        }
        updateTiming(selectedTab);
      }
      localStorage.setItem("tatTime", tatTime);
    }
    // Do something with the selected option and selected tab
  };

  const updateTiming = () => {
    let date =
      selectedTab === "Later"
        ? startDate.toLocaleDateString("en-GB")
        : selectedDate;
    setOrderTime(date + " " + selectedTime);
    setOrderMode(selectedOrderMode);
    localStorage.setItem("orderTime", date + " " + selectedTime);
    localStorage.setItem("orderType", selectedTab);
    if (selectedTab === "ASAP") {
      localStorage.setItem("preOrder", "0");
    } else {
      localStorage.setItem("preOrder", date + " " + selectedTime);
    }
  };

  const checkPostcode = (response, orderType, postcode) => {
    if (response?.message?.status === false) {
      setIsVisible(true);
      localStorage.setItem("postcodeDetail", "");
    } else {
      localStorage.setItem("orderPostcode", postcode);
      localStorage.setItem("postcodeDetail", JSON.stringify(response?.message));
      setIsVisible(false);
      setShow(false);
      if (moveToCheck) {
        const total = localStorage.getItem("totalPrice");
        const discountJSON = localStorage.getItem("discount");
        const parsedDiscount = discountJSON ? JSON.parse(discountJSON) : 0;
        let appliedDiscount = 0;
        if (orderType === parsedDiscount.orderType) {
          appliedDiscount = parsedDiscount.appliedDiscount
            ? parsedDiscount.appliedDiscount
            : 0;
        }
        if (response?.message?.minAmount < total - appliedDiscount) {
          console.log("Not satisfied");
        } else {
          console.log("Satisfied");
          setMoveToCheck(false);
          const path = localStorage.getItem("clientPath");
          navigate(`/${path}/checkout`);
        }
      }
      updateTiming(selectedTab);
    }
  };

  return (
    <>
      <div className="footer-div">
        <div className="status">
          <p>
            Your Order Scheduled at{" "}
            {selectedTab === "ASAP" &&
              `(${timing[selectedOrderMode].asap.tatTime}m)`}
          </p>
        </div>
        {selectedTab === "ASAP" || selectedTime?
        (<><Button
          className="preorder-btn"
          disabled={!isValidPostcode ? true : false}
          onClick={handleSubmit}
          type="button"
        >
          {selectedTab === "Later"
            ? startDate
              ? startDate.toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : null
            : selectedTab === "ASAP"
            ? null
            : selectedTab}
          &nbsp;
          {selectedTab === "ASAP" ? "Start Ordering" : <>({selectedTime?selectedTime:null})</>}
        </Button></>):null}
      </div>
    </>
  );
};

export default SubmitButton;
