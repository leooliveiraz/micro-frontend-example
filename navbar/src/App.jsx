import React from "react";
import ReactDOM from "react-dom";

import "./Navbar.css";
import Navbar from "./Navbar";

const App = () => (
  <Navbar></Navbar>
);
ReactDOM.render(<App />, document.getElementById("app"));
