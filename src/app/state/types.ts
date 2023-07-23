import { Option } from "@/types";
import { PLACE_FILL_CATEGORIES } from "../types";

export enum GEO_ACTION_TYPE {
  UPDATE_ACTIVE_POINT_ID = "update_active_point_id",
  UPDATE_PLACE_FILL_CATEGORY = "update_place_fill_category",
}

export type ActivePointId = Option<Number>;

export interface GeoState {
  activePointId: ActivePointId;
  placeFillCategory: PLACE_FILL_CATEGORIES;
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
