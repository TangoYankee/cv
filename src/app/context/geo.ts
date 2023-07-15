import { Dispatch, createContext } from "react";
import { GeoAction, GeoState, initialGeoState } from "../reducers/geo";

export type GeoCtxType = {
  geoState: GeoState;
  geoDispatch: Dispatch<GeoAction>;
};

export const GeoCtx = createContext<GeoCtxType>({
  geoState: initialGeoState,
  geoDispatch: () => {},
});
