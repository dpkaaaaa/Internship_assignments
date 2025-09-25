import React from "react";

const RadioButton = ({ label, name, options, value, onChange, error }) => (
  <div className="input-group">
    {label && <label>{label}</label>}
    <div className="radio-group">
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
          />{" "}
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
      {error && <div className="error">{error}</div>}
    </div>
  </div>
);

export default RadioButton;
