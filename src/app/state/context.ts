import { createContext } from "react";
import { createInitialGeoState } from "./reducer";
import { GeoCtxType } from "./types";

export const GeoCtx = createContext<GeoCtxType>({
  geoState: createInitialGeoState(true),
  geoActionsDispatch: {} as any,
});
