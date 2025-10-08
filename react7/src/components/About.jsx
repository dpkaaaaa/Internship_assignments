import React from "react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className={`page ${theme}-mode`}>
      <h1> About Page</h1>
      
    </div>
  );
};

export default About;
