import { PLACE_FILL_CATEGORIES } from "../types";
import { GEO_ACTION_TYPE, GeoAction, GeoState } from "./types";

export const initialGeoState: GeoState = {
  activePointId: null,
  placeFillCategory: PLACE_FILL_CATEGORIES.PLACEMENT,
};

export function geoReducer(state: GeoState, action: GeoAction): GeoState {
  switch (action.type) {
    case GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID: {
      const { payload: requestedPointId } = action;
      const { activePointId } = state;
      const nextPointId =
        requestedPointId !== activePointId ? requestedPointId : null;
      return {
        ...state,
        activePointId: nextPointId,
      };
    }
    default:
      return state;
  }
}
