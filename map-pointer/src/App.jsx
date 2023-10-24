import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MapPointer from "./MapPointer";

const App = () => (
  <MapPointer></MapPointer>
);
ReactDOM.render(<App />, document.getElementById("app"));
