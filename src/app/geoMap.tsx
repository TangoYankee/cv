"use client";

import Map from "react-map-gl/maplibre";
import DeckGL, { GeoJsonLayer } from "deck.gl/typed";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useContext } from "react";
import { GeoCtx } from "./state/context";

const points = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 0,
      },
      geometry: {
        coordinates: [-74.0105, 40.7082],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        id: 1,
      },
      geometry: {
        coordinates: [-74.0163, 40.7032],
        type: "Point",
      },
    },
  ],
};

export default function GeoMap() {
  const {
    geoState: { activePointId },
    geoActionsDispatch: { updateActivePointId },
  } = useContext(GeoCtx);

  const layers = [
    new GeoJsonLayer({
      id: "coding",
      data: points,
      pointRadiusMinPixels: 5,
      pickable: true,
      onClick: (info) => updateActivePointId(info.object.properties.id),
      getFillColor: (d) =>
        d && d.properties && d.properties.id === activePointId
          ? [123, 31, 162]
          : [25, 118, 210],
      updateTriggers: {
        getFillColor: [activePointId],
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
