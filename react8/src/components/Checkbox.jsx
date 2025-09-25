import React from "react";

const Checkbox = ({ name, checked, onChange, label, error }) => (
  <div className="input-group">
    <div className="checkbox-group">
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          style={{ marginRight: "5px" }}
        />
        {label}
      </label>
      {error && <div className="error">{error}</div>}
    </div>
  </div>
);

export default Checkbox;
