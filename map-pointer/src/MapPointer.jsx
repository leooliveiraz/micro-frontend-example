import React, { useState } from "react";

function MapPointer(props) {
  const [lat, setLat] = useState(-22);
  const [lon, setLon] = useState(-40);
  const [listMarker, setListMarker] = useState([{lat:-25, lon:-42}])

  function addPoint(e) {
    e.preventDefault();
    const newPointEvent = new CustomEvent("NEW_POINT", {
      detail: { lat: lat, lon: lon },
    });
    window.dispatchEvent(newPointEvent);
  }

  return (
    <div className="sub-menu">
      <div className="title">Adicionar ponto.</div>
      <form onSubmit={(e) => addPoint(e)}>
        <label htmlFor="latitude">Latitude</label> <br />
        <input
          type="text"
          id="latitude"
          name="latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <br />
        <label htmlFor="longitude">Longitude</label> <br />
        <input
          type="text"
          id="longitude"
          name="longitude"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
        <br />
        <button>Adicionar</button>
      </form>
    </div>
  );
}
export default MapPointer;
