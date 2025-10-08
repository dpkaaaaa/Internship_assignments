import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme}-mode`}>
      <h2 className="logo"> MyWebpage</h2>

      <div className="nav-links">
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setCurrentPage("home")}>
            Home</button>
        <button
          className={currentPage === "about" ? "active" : ""}
          onClick={() => setCurrentPage("about")}>
            About
        </button>
        <button
          className={currentPage === "services" ? "active" : ""}
          onClick={() => setCurrentPage("services")}>
             Services
        </button>
      </div>

      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
