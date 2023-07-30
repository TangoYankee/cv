"use client";

import { useReducer } from "react";
import { geoReducer, initialGeoState } from "./state/reducer";
import { geoActions } from "./state/actions";
import { GeoCtx } from "./state/context";
import GeoMap from "./geoMap";

export function Main() {
  const [geoState, geoDispatch] = useReducer(geoReducer, initialGeoState);
  const geoActionsDispatch = geoActions(geoDispatch);

  return (
    <main>
      <GeoCtx.Provider value={{ geoState, geoActionsDispatch }}>
        <GeoMap />
      </GeoCtx.Provider>
    </main>
  );
}
