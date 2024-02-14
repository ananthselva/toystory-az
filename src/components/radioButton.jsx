import React from 'react';


function RadioAnimation() {
    return (
      <div className="cbx">
        <div className="flip">
          <div className="front"></div>
          <div className="back">
            <svg width="16" height="14" viewBox="0 0 16 14">
              <path d="M2 8.5L6 12.5L14 1.5"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  
const RadioButton = ({ id, name, value, onChange, label, price, addonLimit, handleRadioButtonClick, addonSkipContinue }) => {
  return (
    <label className="input-div">
      <input
        type={addonLimit === 1 ? 'radio' : 'checkbox'}
        id={id}
        name={name}
        value={value}
        onChange={() =>
          addonLimit === 1
            ? handleRadioButtonClick(id, addonLimit, addonLimit)
            : addonSkipContinue(id, addonLimit, addonLimit)
        }
      />
      {addonLimit !== 1 && <RadioAnimation />}
      <p>{label}</p>
      <span> {price}</span>
    </label>
  );
};

export default RadioButton;
