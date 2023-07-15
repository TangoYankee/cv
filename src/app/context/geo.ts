import { createContext } from "react";
import { GeoActionsDispatch, GeoState, initialGeoState } from "../reducers/geo";

export type GeoCtxType = {
  geoState: GeoState;
  geoActionsDispatch: GeoActionsDispatch;
};

export const GeoCtx = createContext<GeoCtxType>({
  geoState: initialGeoState,
  geoActionsDispatch: {} as any,
});
