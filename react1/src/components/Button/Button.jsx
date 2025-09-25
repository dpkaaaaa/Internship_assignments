import React from "react";
import "./Button.css";

export default function Button({ buttonText, variant = "primary", ...props }) {
  return (
    <button className={`btn ${variant}`} {...props}>
      {buttonText}
    </button>
  );
}













