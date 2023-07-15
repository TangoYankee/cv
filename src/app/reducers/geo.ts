import { Option } from "@/types";
import { Dispatch } from "react";

export enum GEO_ACTION_TYPE {
  UPDATE_ACTIVE_POINT_ID = "update_active_point_id",
}

export type ActivePointId = Option<Number>;

export interface GeoState {
  activePointId: ActivePointId;
}

export type GeoAction = {
  type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID;
  payload: ActivePointId;
};

export type GeoActionsDispatch = {
  updateActivePointId: (activePointId: ActivePointId) => void;
};

export const initialGeoState: GeoState = {
  activePointId: null,
};

export const geoActions = (dispatch: Dispatch<GeoAction>) => {
  return {
    updateActivePointId: (activePointId: ActivePointId) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID,
        payload: activePointId,
      }),
  };
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
