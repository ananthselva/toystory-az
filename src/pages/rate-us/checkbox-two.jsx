import React, { useState } from "react";
import "./rate-us.scss";
import { FeedbackPopupContext } from "./rate-us";

const Checkboxtwo = () => {
  const feedback = FeedbackPopupContext();
  const [isChecked, setIsChecked] = useState("Tasty food");

  const handleRadioChange = (params) => {
    setIsChecked(params);
    feedback.setRating(params);
    feedback.setFeedback({ ...feedback.feedback, reason: params });
  };

  return (
    <div className="one_three">
      <label className={isChecked === "Tasty food" ? "checked" : ""}>
        <input
          type="radio"
          value="Tasty food"
          name="high"
          checked={isChecked === "Tasty food"}
          onChange={() => handleRadioChange("Tasty food")}
        />
        Tasty food
      </label>

      <label className={isChecked === "Worth the price" ? "checked" : ""}>
        <input
          type="radio"
          value="Worth the price"
          name="high"
          checked={isChecked === "Worth the price"}
          onChange={() => handleRadioChange("Worth the price")}
        />
        Worth the price
      </label>

      <label className={isChecked === "Good Package" ? "checked" : ""}>
        <input
          type="radio"
          value="Good Package"
          name="high"
          checked={isChecked === "Good Package"}
          onChange={() => handleRadioChange("Good Package")}
        />
        Good Package
      </label>

      <label className={isChecked === "Well cooked" ? "checked" : ""}>
        <input
          type="radio"
          value="Well cooked"
          name="high"
          checked={isChecked === "Well cooked"}
          onChange={() => handleRadioChange("Well cooked")}
        />
        Well cooked
      </label>
    </div>
  );
};

export default Checkboxtwo;
