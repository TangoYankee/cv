import { PORTRAIT_VIEW } from "../types";
import { GEO_ACTION_TYPE, GeoAction, GeoState } from "./types";
import { locationsIndex, positions } from "../data";

export const initialGeoState: GeoState = {
  portraitView: PORTRAIT_VIEW.SPLIT,
  activeLocationId: null,
  activePositionId: null,
  highlightedLocationsIds: [],
  highlightedPositionsIds: [],
};

export function geoReducer(state: GeoState, action: GeoAction): GeoState {
  switch (action.type) {
    case GEO_ACTION_TYPE.UPDATE_ACTIVE_LOCATION_ID: {
      const { payload: requestedLocationId } = action;
      const { activeLocationId } = state;
      const nextLocationId =
        requestedLocationId !== activeLocationId ? requestedLocationId : null;

      let nextHighlightedLocationsIds: Array<number> = [];
      let nextHighlightedPositionsIds: Array<number> = [];
      if (nextLocationId !== null) {
        nextHighlightedLocationsIds.push(nextLocationId);
        const positionIdRecords = locationsIndex[nextLocationId];
        nextHighlightedPositionsIds =
          positionIdRecords === undefined ? [] : Array.from(positionIdRecords);
      }

      return {
        ...state,
        activeLocationId: nextLocationId,
        activePositionId: null,
        highlightedLocationsIds: nextHighlightedLocationsIds,
        highlightedPositionsIds: nextHighlightedPositionsIds,
      };
    }
    case GEO_ACTION_TYPE.UPDATE_ACTIVE_POSITION_ID: {
      const { payload: requestedPositionId } = action;
      const { activePositionId } = state;
      const nextPositionId =
        requestedPositionId !== activePositionId ? requestedPositionId : null;

      let nextHighlightedLocationsIds: Array<number> = [];
      let nextHighlightedPositionsIds: Array<number> = [];
      if (nextPositionId !== null) {
        positions[nextPositionId].locations.forEach(({ id }) => {
          nextHighlightedLocationsIds.push(id);
        });
        nextHighlightedPositionsIds.push(nextPositionId);
      }
      return {
        ...state,
        activeLocationId: null,
        activePositionId: nextPositionId,
        highlightedLocationsIds: nextHighlightedLocationsIds,
        highlightedPositionsIds: nextHighlightedPositionsIds,
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
