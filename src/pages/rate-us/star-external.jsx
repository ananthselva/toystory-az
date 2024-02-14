import React, { useState,lazy } from "react";
// import Checkbox from "./checkbox";
// import Checkboxtwo from "./checkbox-two";
import { FeedbackPopupContext } from "./rate-us";
import Loadable from "../../router/loadable";
const Checkbox=Loadable(lazy(()=>import('./checkbox')));
const Checkboxtwo=Loadable(lazy(()=>import('./checkbox-two')));
const StarRating = () => {
  const feedback = FeedbackPopupContext();

  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  const handleStarClick = (selectedRating) => {
    feedback.setReason(selectedRating);
    feedback.setFeedback({ ...feedback.feedback, rating: selectedRating });
    setRating(selectedRating);
  };
  return (
    <form action="">
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              id={index <= hover ? "hover-on" : "hover-off"}
              onClick={() => handleStarClick(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
        {rating <= 3 && (
          <p>
            <Checkbox />
          </p>
        )}

        {rating >= 4 && (
          <p>
            <Checkboxtwo />
          </p>
        )}
      </div>
    </form>
  );
};

export default StarRating;
