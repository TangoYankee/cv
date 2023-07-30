"use client";

import { useEffect, useReducer } from "react";
import { createInitialGeoState, geoReducer } from "./state/reducer";
import { geoActions } from "./state/actions";
import { GeoCtx } from "./state/context";
import GeoMap from "./geoMap";
import { Panel } from "./components/panel";
import { Box, useMediaQuery } from "./components/ui";
import { SIMPLE_SCREEN_ORIENTATION } from "./types";

export function Main() {
  const isScreenLandscape = useMediaQuery(
    `(orientation: ${SIMPLE_SCREEN_ORIENTATION.LANDSCAPE})`,
  );
  const [geoState, geoDispatch] = useReducer(
    geoReducer,
    isScreenLandscape,
    createInitialGeoState,
  );
  const geoActionsDispatch = geoActions(geoDispatch);
  const { updateIsScreenLandscape } = geoActionsDispatch;

  useEffect(() => {
    updateIsScreenLandscape(isScreenLandscape);
  }, [updateIsScreenLandscape, isScreenLandscape]);

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
