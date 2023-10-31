import React, { useState } from "react";
function Popup() {
  const [lat, setLat] = useState(-22);
  const [lon, setLon] = useState(-40);
  const [raio, setRaio] = useState(50);

  function addPoint(e) {
    e.preventDefault();
    const newPointEvent = new CustomEvent("NEW_CIRCLE", {
      detail: { lat: lat, lon: lon, raio: raio },
    });
    window.postMessage("teste", window.origin)
    alert('enviado mensagem')
  }

  return (
    <div className="sub-menu">
      <h1>Circulo</h1>
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
        <label htmlFor="raio">Raio</label> <br />
        <input
          type="text"
          id="raio"
          name="raio"
          value={raio}
          onChange={(e) => setRaio(e.target.value)}
        />
        <br />
        <button>Adicionar</button>
      </form>
    </div>
  );
}
export default Popup;
