import { PORTRAIT_VIEW } from "../types";
import { GEO_ACTION_TYPE, GeoAction, GeoState } from "./types";

export const initialGeoState: GeoState = {
  activePointId: null,
  portraitView: PORTRAIT_VIEW.SPLIT,
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
