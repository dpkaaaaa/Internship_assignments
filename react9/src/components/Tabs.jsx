import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  
  const clonedTabs = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeTab,
      onClick: () => setActiveTab(index),
    })
  );

  return (
    <div className="tabs-container">
      <div className="tab-headers">
        {clonedTabs.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-button ${index === activeTab ? "active" : ""}`}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{clonedTabs[activeTab]}</div>
    </div>
  );
};

export default Tabs;
