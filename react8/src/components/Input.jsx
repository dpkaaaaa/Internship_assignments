import React from "react";

const Input = ({ label, name, type = "text", placeholder, value, onChange, error }) => (
  <div className="input-group">
    {label && <label for={name}>{label}</label>}
    <div style={{ flex: 1 }}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  </div>
);

export default Input;
