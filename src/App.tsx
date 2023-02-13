import React from "react";
import { Routes } from "react-router-dom";
import Counter from "./components/Counter";
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <Routes path={'/about'}>

      </Routes>
    </div>
  );
};

export default App;
