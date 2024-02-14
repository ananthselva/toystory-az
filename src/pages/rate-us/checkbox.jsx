import React, { useState } from "react";
import "./rate-us.scss";
import { FeedbackPopupContext } from "./rate-us";

const Checkbox = () => {
  const feedback = FeedbackPopupContext();
  const [isChecked, setIsChecked] = useState("");

  const handleRadioChange = (params) => {
    setIsChecked(params);
    feedback.setRating(params);
    feedback.setFeedback({ ...feedback.feedback, reason: params });
  };

  return (
    <div className="one_three">
      <label className={isChecked === "Missed Notes" ? "checked" : ""}>
        <input
          type="radio"
          value="Missed Notes"
          name="low"
          checked={isChecked === "Missed Notes"}
          onChange={() => handleRadioChange("Missed Notes")}
        />
        Missed Notes
      </label>

      <label className={isChecked === "Poorly Packed" ? "checked" : ""}>
        <input
          type="radio"
          value="Poorly Packed"
          name="low"
          checked={isChecked === "Poorly Packed"}
          onChange={() => handleRadioChange("Poorly Packed")}
        />
        Poorly Packed
      </label>

      <label className={isChecked === "Not to Tasty" ? "checked" : ""}>
        <input
          type="radio"
          value="Not to Tasty"
          name="low"
          checked={isChecked === "Not to Tasty"}
          onChange={() => handleRadioChange("Not to Tasty")}
        />
        Not to Tasty
      </label>

      <label className={isChecked === "Not worthy the price" ? "checked" : ""}>
        <input
          type="radio"
          value="Not worthy the price"
          name="low"
          checked={isChecked === "Not worthy the price"}
          onChange={() => handleRadioChange("Not worthy the price")}
        />
        Not worthy the price
      </label>
    </div>
  );
};

export default Checkbox;
