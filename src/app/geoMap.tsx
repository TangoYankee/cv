"use client";

import Map from "react-map-gl/maplibre";
import DeckGL, { GeoJsonLayer } from "deck.gl/typed";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useContext } from "react";
import { updateActivePointId } from "./reducers/geo";
import { GeoCtx } from "./context/geo";

const point = {
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
  ],
};

export default function GeoMap() {
  const { geoDispatch } = useContext(GeoCtx);

  const updateActivePointIdAction = updateActivePointId(geoDispatch);

  const layers = [
    new GeoJsonLayer({
      id: "coding",
      data: point,
      pointRadiusMinPixels: 5,
      pickable: true,
      onClick: (info) => updateActivePointIdAction(info.object.properties.id),
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
