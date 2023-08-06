"use client";

import Map from "react-map-gl/maplibre";
import DeckGL, { GeoJsonLayer } from "deck.gl/typed";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useContext } from "react";
import { GeoCtx } from "./state/context";
import { placePoints } from "./data";
import { getPointOutlineColor } from "./geoStyles";
import "./geoMap.css";
import { Box } from "./components/ui";
import { useScreenPortraitQuery } from "./utils/hooks";
import { PORTRAIT_VIEW } from "./types";

export default function GeoMap() {
  const isScreenPortrait = useScreenPortraitQuery();

  const {
    geoState: { activePointId, portraitView },
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
      updateTriggers: {
        getLineColor: [activePointId],
      },
    }),
  ];

  return (
    <Box
      height={
        isScreenPortrait && portraitView === PORTRAIT_VIEW.PANEL
          ? "0.1%"
          : "100%"
      }
      width="100%"
    >
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
    </Box>
  );
}
