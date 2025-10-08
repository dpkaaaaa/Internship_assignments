import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <ThemeProvider>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" ? <Home /> : <About />}
    </ThemeProvider>
  );
}

export default App;
