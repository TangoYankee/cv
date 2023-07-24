import { Option } from "@/types";
import { PLACE_FILL_CATEGORY } from "../types";

export enum GEO_ACTION_TYPE {
  UPDATE_ACTIVE_POINT_ID = "update_active_point_id",
  UPDATE_PLACE_FILL_CATEGORY = "update_place_fill_category",
  OPEN_SIDEBAR = "open_sidebar",
  CLOSE_SIDEBAR = "close_sidebar",
}

export type ActivePointId = Option<Number>;

export interface GeoState {
  activePointId: ActivePointId;
  placeFillCategory: PLACE_FILL_CATEGORY;
  isSidebarOpen: boolean;
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
      type: GEO_ACTION_TYPE.OPEN_SIDEBAR;
    }
  | {
      type: GEO_ACTION_TYPE.CLOSE_SIDEBAR;
    };

export type GeoActionsDispatch = {
  updateActivePointId: (activePointId: ActivePointId) => void;
  updatePlaceFillCategory: (
    placeFillCategory: Option<PLACE_FILL_CATEGORY>,
  ) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export type GeoCtxType = {
  geoState: GeoState;
  geoActionsDispatch: GeoActionsDispatch;
};
