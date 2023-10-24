import React, { useContext, useState } from "react";

import "./MapMenu.css";
import { MapContext } from "../MapContext";

function MapChooser() {
  const { selectedMap, setSelectedMap } = useContext(MapContext);

  return (
    <div className="sub-menu">
      <div className="title">Mapa</div>
      <form>
        <input
          type="radio"
          id="html"
          name="map-provider"
          value="OSM"
          checked={selectedMap === "OSM"}
          onChange={() => setSelectedMap("OSM")}
        />
        <label htmlFor="html">OSM</label> <br />
        <input
          type="radio"
          id="html"
          name="map-provider"
          value="DARK"
          checked={selectedMap === "DARK"}
          onChange={() => setSelectedMap("DARK")}
        />
        <label htmlFor="html">Dark OSM</label> <br />
      </form>
    </div>
  );
}
export default MapChooser;
