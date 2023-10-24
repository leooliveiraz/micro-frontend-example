import React, { lazy } from "react";
import Loading from "../components/Loading";
const WorldMap = lazy(() => import("map/WorldMap"));

function Map(props) {
  const query = new URLSearchParams(props.location.search);
  const fundo = query.get("fundo");
  return (
    <React.Suspense fallback={<Loading />}>
      <WorldMap mapName={fundo}></WorldMap>
    </React.Suspense>
  );
}
export default Map;
