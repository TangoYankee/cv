"use client";

import { useReducer } from "react";
import { initialGeoState, geoReducer } from "./state/reducer";
import { geoActions } from "./state/actions";
import { GeoCtx } from "./state/context";
import GeoMap from "./geoMap";
import { Panel } from "./components/panel";
import { Box } from "./components/ui";
import { useScreenLandscapeQuery } from "./utils/hooks";

export function Main() {
  const isScreenLandscape = useScreenLandscapeQuery();
  const [geoState, geoDispatch] = useReducer(geoReducer, initialGeoState);
  const geoActionsDispatch = geoActions(geoDispatch);

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
