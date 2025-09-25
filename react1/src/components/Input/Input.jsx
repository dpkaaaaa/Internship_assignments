import React from "react";
import "./Input.css";

export default function Input({ label, placeholder, ...props }) {
  const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="input-container">
      {label && <label for={id}>{label}</label>}
      <input id={id} placeholder={placeholder} {...props} />
    </div>
  );
}
