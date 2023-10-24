import React from "react";
import "./Navbar.css";
function Navbar(params) {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/users">Users</a></li>
        <li><a href="/map">Map</a></li>
        </ul>
    </div>
  );
}

export default Navbar;
