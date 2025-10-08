import React from "react";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Tab Component using React cloneElement</h1>

      <Tabs>
        <Tab title="Home">Welcome to the Home.</Tab>
        <Tab title="Profile"> This is your Profile.</Tab>
        <Tab title="Settings"> This is Settings.</Tab>
      </Tabs>
    </div>
  );
};

export default App;
