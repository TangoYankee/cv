"use client";

import { useReducer } from "react";
import { geoReducer, initialGeoState } from "./state/reducer";
import { geoActions } from "./state/actions";
import { GeoCtx } from "./state/context";
import GeoMap from "./geoMap";
import { Panel } from "./components/panel";
import { Box, useMediaQuery } from "./components/ui";

export function Main() {
  const [geoState, geoDispatch] = useReducer(geoReducer, initialGeoState);
  const geoActionsDispatch = geoActions(geoDispatch);
  const isScreenLandscape = useMediaQuery("(orientation: landscape)");

  return (
    <main>
      <GeoCtx.Provider value={{ geoState, geoActionsDispatch }}>
        <Box
          display="flex"
          flexDirection={isScreenLandscape ? "row" : "column"}
          height="100%"
          width="100%"
        >
          <GeoMap />
          <Panel />
        </Box>
      </GeoCtx.Provider>
    </main>
  );
}
