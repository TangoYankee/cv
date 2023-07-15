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

export const initialGeoState: GeoState = {
  activePointId: null,
};

export const updateActivePointId =
  (dispatch: Dispatch<GeoAction>) => (activePointId: ActivePointId) => {
    dispatch({
      type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID,
      payload: activePointId,
    });
  };

export function geoReducer(state: GeoState, action: GeoAction): GeoState {
  switch (action.type) {
    case GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID: {
      console.info("activePointId", action.payload);
      return {
        ...state,
        activePointId: action.payload,
      };
    }
    default:
      return state;
  }
}
