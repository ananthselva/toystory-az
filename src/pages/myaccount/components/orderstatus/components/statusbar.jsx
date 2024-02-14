import { useState,useEffect } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

import "react-step-progress-bar/styles.css";

import "./css/progress.scss";

import { ContextConsumer } from "./statusdetails";

import { GoPrimitiveDot } from "react-icons/go";
import { BiCheck } from "react-icons/bi";
const MultiStepProgressBar = ({ OrderData }) => {
  // var stepPercentage = 0;
  // var barWord = "";
  const [orderData,setOrderData]=useState(true);
  useEffect(()=>{
    if(OrderData === null || OrderData == ""){
        setOrderData(false);
    }
  },[OrderData]);
  const { currentStep, ordertypes, deliveryTypes } = ContextConsumer();

  // if (OrderData.isStuart) {
  //   if (currentStep === 1) {
  //     stepPercentage = 0;
  //   } else if (currentStep === 2 || currentStep === 6 || currentStep === 7) {
  //     stepPercentage = 34;
  //   } else if (
  //     currentStep === 3 ||
  //     currentStep === 8 ||
  //     currentStep === 9 ||
  //     currentStep === 10 ||
  //     currentStep === 11
  //   ) {
  //     stepPercentage = 67;
  //   } else if (currentStep === 4 || currentStep === 12) {
  //     stepPercentage = 100;
  //   } else {
  //     stepPercentage = 0;
  //   }
  //   if (stepPercentage <= 34) {
  //     barWord = "On It’s way";
  //   } else if (stepPercentage > 34) {
  //     if (currentStep === 6) {
  //       barWord = "Order Scheduled";
  //     } else if (currentStep === 7) {
  //       barWord = "Being Prepared";
  //     } else if (currentStep === 8) {
  //       barWord = "Picking Your Order";
  //     } else if (currentStep === 9) {
  //       barWord = "Waiting for pickup";
  //     } else if (currentStep === 10) {
  //       barWord = "Heading Your way";
  //     } else if (currentStep === 11) {
  //       barWord = "Order Nearby";
  //     } else if (currentStep === 12) {
  //       barWord = "Delivered";
  //     } else {
  //       barWord = "";
  //     }
  //   }
  // } else {
  //   if (currentStep === 1) {
  //     stepPercentage = 0;
  //   } else if (currentStep === 2 || currentStep === 7) {
  //     stepPercentage = 34;
  //   } else if (
  //     currentStep === 3 ||
  //     currentStep === 6 ||
  //     currentStep === 8 ||
  //     currentStep === 9 ||
  //     currentStep === 10 ||
  //     currentStep === 11
  //   ) {
  //     stepPercentage = 67;
  //   } else if (currentStep === 4 || currentStep === 12) {
  //     stepPercentage = 100;
  //   } else {
  //     stepPercentage = 0;
  //   }
  //   if (stepPercentage < 34) {
  //     barWord = "On It’s way";
  //   } else if (stepPercentage >= 34) {
  //     if (currentStep === 6) {
  //       barWord = "Order Scheduled";
  //     } else if (currentStep === 7) {
  //       barWord = "Being Prepared";
  //     } else if (currentStep === 8) {
  //       barWord = "Picking Your Order";
  //     } else if (currentStep === 9) {
  //       barWord = "Waiting for pickup";
  //     } else if (currentStep === 10) {
  //       barWord = "Heading Your way";
  //     } else if (currentStep === 11) {
  //       barWord = "Order Nearby";
  //     } else if (currentStep === 12) {
  //       barWord = "Delivered";
  //     } else {
  //       barWord = "";
  //     }
  //   }
  // }

  const getStepPercentage = (isStuart, step) => {
    if (isStuart) {
      if (step === 1) {
        return 0;
      } else if (step === 2 || step === 6 || step === 7) {
        return 34;
      } else if (
        step === 3 ||
        step === 8 ||
        step === 9 ||
        step === 10 ||
        step === 11
      ) {
        return 67;
      } else if (step === 4 || step === 12) {
        return 100;
      } else {
        return 0;
      }
    } else {
      if (step === 1) {
        return 0;
      } else if (step === 2 || step === 7) {
        return 34;
      } else if (
        step === 3 ||
        step === 6 ||
        step === 8 ||
        step === 9 ||
        step === 10 ||
        step === 11
      ) {
        return 67;
      } else if (step === 4 || step === 12) {
        return 100;
      } else {
        return 0;
      }
    }
  };

  const getBarWord = (isStuart, step, percentage) => {
    if (percentage <= 34) {
      return "On Its way";
    } else if (percentage >= 100) {
      return "Delivered";
    } else {
      switch (step) {
        case 6:
          return "Order Scheduled";
        case 7:
          return "Being Prepared";
        case 8:
          return "Picking Your Order";
        case 9:
          return "Waiting for pickup";
        case 10:
          return "Heading Your way";
        case 11:
          return "Order Nearby";
        default:
          return "";
      }
    }
  };

  const isStuart = OrderData?.isStuart || false;
  const stepPercentage = getStepPercentage(isStuart, currentStep);
  const barWord = getBarWord(isStuart, currentStep, stepPercentage);

  // console.log("stepPercentage");
  // console.log(stepPercentage);
  // console.log("currentStep");
  // console.log(currentStep);
  // console.log("barWord");
  // console.log(barWord);

  return (
        <>
          <ProgressBar percent={stepPercentage} direction="vertical">
            <Step>
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  } ${currentStep === 1 ? "animation" : null}`}
                >
                  {accomplished && currentStep > 1 ? (
                    <>
                      <BiCheck />
                      <span>Confirmed</span>
                    </>
                  ) : (
                    <>
                      <GoPrimitiveDot />
                      <span>Waiting</span>
                    </>
                  )}
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  } ${currentStep === 2 ? "animation" : null}`}
                >
                  {accomplished && currentStep > 2 ? (
                    <BiCheck />
                  ) : (
                    <GoPrimitiveDot />
                  )}
                  <span>
                    {currentStep === 6 ? "Order Scheduled" : "Being Prepared"}
                  </span>
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  } ${currentStep === 3 ? "animation" : null}`}
                >
                  {accomplished && currentStep > 3 ? (
                    <BiCheck />
                  ) : (
                    <GoPrimitiveDot />
                  )}

                  {ordertypes === "Collection" ? (
                    <span>Order Ready</span>
                  ) : ordertypes === "Delivery" &&
                    deliveryTypes == "Delivery" ? (
                    <span>On It’s way</span>
                  ) : ordertypes === "Delivery" && deliveryTypes == "Stuart" ? (
                    <span>{barWord}</span>
                  ) : (
                    <span>Undefine</span>
                  )}
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? "accomplished" : null
                  } ${currentStep === 4 ? "animation" : null}`}
                >
                  {accomplished && currentStep >= 4 ? (
                    <BiCheck />
                  ) : (
                    <GoPrimitiveDot />
                  )}
                  {ordertypes === "Collection" ? (
                    <>
                      <span>Order Collected</span>
                    </>
                  ) : ordertypes === "Delivery" || ordertypes === "Stuart" ? (
                    <>
                      <span>Order Delivered</span>
                    </>
                  ) : null}
                </div>
              )}
            </Step>
          </ProgressBar>
    </>
  );
};

export default MultiStepProgressBar;
