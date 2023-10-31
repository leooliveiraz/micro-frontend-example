import React, { Suspense, lazy, useEffect, useState } from "react";
import "./MapMenu.css";
import MapChooser from "./MapChooser";
const MapPointer = lazy(() => import("map_pointer/MapPointer"));

function MapMenu(props) {
  const [showMapChooser, setShowMapChooser] = useState(false);
  const [showMapPointer, setShowMapPointer] = useState(false);

  function openUsers() {
    const popup = window.open(
      "http://localhost:3006/",
      "",
      "width=660, height=510, top=100, left=699, scrollbars=yes, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no"
    );
  }
  return (
    <>
      <div className="map-menu">
        <img
          className="icon"
          src="./treasure-map.png"
          onClick={() => setShowMapChooser(!showMapChooser)}
        ></img>
        <br></br>

        <img
          className="icon"
          src="./pino-mapa.png"
          onClick={() => setShowMapPointer(!showMapPointer)}
        ></img>
        <img
          className="icon"
          src="./dashboard.png"
          onClick={() => {
            openUsers();
          }}
        ></img>
      </div>
      {showMapChooser && <MapChooser />}
      {showMapPointer && (
        <Suspense>
          <MapPointer />
        </Suspense>
      )}
    </>
  );
}
export default MapMenu;
