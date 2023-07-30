import { Option } from "@/types";
import { PLACE_FILL_CATEGORY } from "../types";

export enum GEO_ACTION_TYPE {
  UPDATE_ACTIVE_POINT_ID = "update_active_point_id",
  UPDATE_PLACE_FILL_CATEGORY = "update_place_fill_category",
  UPDATE_IS_SCREEN_LANDSCAPE = "update_is_screen_landscape",
}

export type ActivePointId = Option<Number>;

export interface GeoState {
  activePointId: ActivePointId;
  placeFillCategory: PLACE_FILL_CATEGORY;
  isScreenLandscape: boolean;
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
      type: GEO_ACTION_TYPE.UPDATE_IS_SCREEN_LANDSCAPE;
      payload: boolean;
    };

export type GeoActionsDispatch = {
  updateActivePointId: (activePointId: ActivePointId) => void;
  updatePlaceFillCategory: (
    placeFillCategory: Option<PLACE_FILL_CATEGORY>,
  ) => void;
  updateIsScreenLandscape: (isScreenLandscape: boolean) => void;
};

export type GeoCtxType = {
  geoState: GeoState;
  geoActionsDispatch: GeoActionsDispatch;
};
