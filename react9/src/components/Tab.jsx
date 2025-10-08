import React from "react";

const Tab = ({ children, isActive }) => {
  return (
    <div
      className={`tab-panel ${isActive ? "active" : "hidden"}`}
      style={{ padding: "30px" }}
    >
      {children}
    </div>
  );
};

export default Tab;
