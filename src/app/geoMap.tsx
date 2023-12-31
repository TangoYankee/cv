"use client";

import Map from "react-map-gl/maplibre";
import DeckGL, { GeoJsonLayer } from "deck.gl/typed";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useContext } from "react";
import { GeoCtx } from "./state/context";
import { locationPoints } from "./data";
import { getPointOutlineColor } from "./geoStyles";
import "./geoMap.css";
import { Box } from "./components/ui";
import { useScreenPortraitQuery } from "./utils/hooks";
import { PORTRAIT_VIEW } from "./types";

export default function GeoMap() {
  const isScreenPortrait = useScreenPortraitQuery();

  const {
    geoState: { activeLocationId, highlightedLocationsIds, portraitView },
    geoActionsDispatch: { updateActiveLocationId },
  } = useContext(GeoCtx);

  const layers = [
    new GeoJsonLayer({
      id: "coding",
      data: locationPoints,
      pointRadiusMinPixels: 5,
      lineWidthMinPixels: 2,
      pickable: true,
      onClick: (info) => updateActiveLocationId(info.object.properties.id),
      getLineColor: (d) =>
        getPointOutlineColor(
          d?.properties?.id,
          activeLocationId,
          highlightedLocationsIds,
        ),
      updateTriggers: {
        getLineColor: [activeLocationId, highlightedLocationsIds],
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
          longitude: -94.5792,
          latitude: 39.0543,
          zoom: 2,
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
