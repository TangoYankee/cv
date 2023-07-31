import { Option } from "@/types";
import { PLACE_FILL_CATEGORY, PORTRAIT_VIEW } from "../types";

export enum GEO_ACTION_TYPE {
  UPDATE_ACTIVE_POINT_ID = "update_active_point_id",
  UPDATE_PLACE_FILL_CATEGORY = "update_place_fill_category",
  UPDATE_PORTRAIT_VIEW = "update_portrait_view",
}

export type ActivePointId = Option<Number>;

export interface GeoState {
  activePointId: ActivePointId;
  placeFillCategory: PLACE_FILL_CATEGORY;
  portraitView: PORTRAIT_VIEW;
}

export type GeoAction =
  | {
      type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID;
      payload: ActivePointId;
    }
  | {
      type: GEO_ACTION_TYPE.UPDATE_PLACE_FILL_CATEGORY;
      payload: Option<PLACE_FILL_CATEGORY>;
    }
  | {
      type: GEO_ACTION_TYPE.UPDATE_PORTRAIT_VIEW;
      payload: Option<PORTRAIT_VIEW>;
    };

export type GeoActionsDispatch = {
  updateActivePointId: (activePointId: ActivePointId) => void;
  updatePlaceFillCategory: (
    placeFillCategory: Option<PLACE_FILL_CATEGORY>,
  ) => void;
  updatePortraitView: (portraitView: Option<PORTRAIT_VIEW>) => void;
};

export type GeoCtxType = {
  geoState: GeoState;
  geoActionsDispatch: GeoActionsDispatch;
};
