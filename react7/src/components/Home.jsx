import React from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className={`page ${theme}-mode`}>
      <h1> Home Page</h1>
      
    </div>
  );
};

export default Home;
