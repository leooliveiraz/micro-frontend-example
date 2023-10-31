import React, { useEffect, useState } from "react";
import "./world-map.css";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import { CRS, Icon } from "leaflet";
import MapMenu from "./components/MapMenu";
import { MapContext } from "./MapContext";

function WorldMap(props) {
  const [selectedMap, setSelectedMap] = useState("OSM");
  const [listMarker, setListMarker] = useState([]);

  function createMarker(lat, lon) {
    listMarker.push({ lat: parseFloat(lat), lon: parseFloat(lon) });
    setListMarker([...listMarker]);
  }

  function ouvir(e){
    if (e.origin.indexOf("3002") === -1) console.log(e);
  }

  useEffect(() => {

    window.addEventListener("NEW_POINT", (e) => {
      const point = e.detail;
      createMarker(point.lat, point.lon);
    });

    if (window.addEventListener) {
      window.addEventListener("message", ouvir, false);
    } else {
      window.attachEvent("onmessage", ouvir);
    }
  }, []);

  let icone = new Icon({
    iconUrl: "./pino-de-localizacao.png",
    iconSize: [30, 30],
    iconAnchor: [15, 33],
    popupAnchor: [0, -25],
  });
  return (
    <MapContext.Provider
      value={{
        selectedMap,
        setSelectedMap,
        createMarker,
        listMarker,
        setListMarker,
      }}
    >
      <MapContainer
        style={{ height: "93vh", width: "100%" }}
        center={[-23.26516, -45.906239]}
        zoom={7}
        scrollWheelZoom={true}
      >
        {selectedMap === "OSM" && (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        )}

        {selectedMap === "DARK" && (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        )}
        {listMarker.map((m, i) => (
          <Marker key={"m" + i} position={[m.lat, m.lon]} icon={icone} />
        ))}
      </MapContainer>
      <MapMenu></MapMenu>
    </MapContext.Provider>
  );
}
export default WorldMap;
