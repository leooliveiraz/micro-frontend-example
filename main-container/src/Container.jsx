import React from "react";
import Navbar from "navbar/Navbar";
import Map from "./apps/Map";
import UserList from "./apps/UserList";
import { Router, Link } from "@reach/router";

export default function Container() {

  return (
    <div className="container">
      <Navbar />
      <Router>
        <UserList path="/" />
        <UserList path="/users" />
        <Map path="/map" />
      </Router>
    </div>
  );
}
