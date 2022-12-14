import React from "react";
import "./FilterButtons.scss";

// onChange prop -> function -> run when the Filter button changes
// selected -> whether it has been selected or not
// options -> an array of options
// label -> string

const FilterButtons = ({ onChange, selected, options, label }) => {
  return (
    <div className="Filter-buttons">
      <p>{label}</p>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalized =
          optionLower[0].toUpperCase() + optionLower.slice(1);
        return (
          <div key={"filter-button" + option + index}>
            <input
              type="checkbox"
              name="filters"
              value={optionLower}
              checked={optionLower === selected.toLowerCase()}
              onChange={onChange}
            />
            <label className="filter-buttons__label" htmlFor={optionLower}>
              {optionCapitalized}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterButtons;
