import { PLACE_FILL_CATEGORY, PORTRAIT_VIEW } from "../types";
import { GEO_ACTION_TYPE, GeoAction, GeoState } from "./types";

export const initialGeoState: GeoState = {
  activePointId: null,
  portraitView: PORTRAIT_VIEW.SPLIT,
  placeFillCategory: PLACE_FILL_CATEGORY.PLACEMENT,
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
    case GEO_ACTION_TYPE.UPDATE_PORTRAIT_VIEW: {
      const { payload: requestedPortraitView } = action;
      const { portraitView } = state;
      const nextPortraitView =
        requestedPortraitView !== null ? requestedPortraitView : portraitView;
      return {
        ...state,
        portraitView: nextPortraitView,
      };
    }
    default:
      return state;
  }
}
