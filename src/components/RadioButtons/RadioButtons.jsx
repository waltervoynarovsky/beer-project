import React from "react";
import "./RadioButtons.scss";

// onChange prop -> function -> run when the radio button changes
// selected -> whether it has been selected or not
// options -> an array of options
// label -> string

const RadioButtons = ({ onChange, selected, options, label }) => {
  return (
    <div className="radio-buttons">
      <p>{label}</p>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalized =
          optionLower[0].toUpperCase() + optionLower.slice(1);
        return (
          <div key={"radio-button" + option + index}>
            <input
              type="checkbox"
              name="filters"
              value={optionLower}
              checked={optionLower === selected.toLowerCase()}
              onChange={onChange}
            />
            <label className="radio-buttons__label" htmlFor={optionLower}>
              {optionCapitalized}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
