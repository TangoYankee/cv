import { Option } from "@/types";

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

export type GeoCtxType = {
  geoState: GeoState;
  geoActionsDispatch: GeoActionsDispatch;
};
