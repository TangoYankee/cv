import { PLACE_FILL_CATEGORY } from "../types";
import { GEO_ACTION_TYPE, GeoAction, GeoState } from "./types";

export function createInitialGeoState(isScreenLandscape: boolean): GeoState {
  return {
    activePointId: null,
    placeFillCategory: PLACE_FILL_CATEGORY.PLACEMENT,
    isScreenLandscape,
  };
}

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
    case GEO_ACTION_TYPE.UPDATE_PLACE_FILL_CATEGORY: {
      const { payload: requestedPlaceFillCategory } = action;
      const { placeFillCategory } = state;
      const nextPlaceFillCategory =
        requestedPlaceFillCategory !== null
          ? requestedPlaceFillCategory
          : placeFillCategory;
      return {
        ...state,
        placeFillCategory: nextPlaceFillCategory,
      };
    }
    case GEO_ACTION_TYPE.UPDATE_IS_SCREEN_LANDSCAPE: {
      const { payload: isScreenLandscape } = action;
      return {
        ...state,
        isScreenLandscape,
      };
    }
    default:
      return state;
  }
}
