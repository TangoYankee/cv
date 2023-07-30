"use client";

import Map from "react-map-gl/maplibre";
import DeckGL, { GeoJsonLayer } from "deck.gl/typed";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useContext } from "react";
import { GeoCtx } from "./state/context";
import { placePoints } from "./data";
import { PLACE_FILL_OPERATION, getPointOutlineColor } from "./geoStyles";
import "./geoMap.css";

export default function GeoMap() {
  const {
    geoState: { activePointId, placeFillCategory },
    geoActionsDispatch: { updateActivePointId },
  } = useContext(GeoCtx);

  const layers = [
    new GeoJsonLayer({
      id: "coding",
      data: placePoints,
      pointRadiusMinPixels: 5,
      lineWidthMinPixels: 2,
      pickable: true,
      onClick: (info) => updateActivePointId(info.object.properties.id),
      getLineColor: (d) =>
        getPointOutlineColor(d?.properties?.id, activePointId),
      getFillColor: (d) =>
        PLACE_FILL_OPERATION[placeFillCategory](d?.properties?.id),
      updateTriggers: {
        getLineColor: [activePointId],
        getFillColor: [placeFillCategory],
      },
    }),
  ];

  return (
    <DeckGL
      layers={layers}
      initialViewState={{
        longitude: -74.0008,
        latitude: 40.7018,
        zoom: 9.7,
      }}
      controller={true}
    >
      <Map
        mapLib={maplibregl}
        mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPLIBRE_ACCESS_TOKEN}`}
      />
    </DeckGL>
  );
}
