import { createContext } from "react";
import { initialGeoState } from "./reducer";
import { GeoCtxType } from "./types";

export const GeoCtx = createContext<GeoCtxType>({
  geoState: initialGeoState,
  geoActionsDispatch: {} as any,
});
