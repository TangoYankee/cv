import { Option } from "@/types";
import { PORTRAIT_VIEW } from "../types";

export enum GEO_ACTION_TYPE {
  UPDATE_ACTIVE_POINT_ID = "update_active_point_id",
  UPDATE_PLACE_FILL_CATEGORY = "update_place_fill_category",
  UPDATE_PORTRAIT_VIEW = "update_portrait_view",
  UPDATE_ACTIVE_LOCATION_ID = "update_active_location_id",
  UPDATE_ACTIVE_POSITION_ID = "update_active_position_id",
}

export type ActiveEntityId = Option<number>;

export interface GeoState {
  portraitView: PORTRAIT_VIEW;
  activeLocationId: ActiveEntityId;
  activePositionId: ActiveEntityId;
  highlightedLocationsIds: Array<number>;
  highlightedPositionsIds: Array<number>;
}

export type GeoAction =
  | {
      type: GEO_ACTION_TYPE.UPDATE_PORTRAIT_VIEW;
      payload: Option<PORTRAIT_VIEW>;
    }
  | {
      type: GEO_ACTION_TYPE.UPDATE_ACTIVE_LOCATION_ID;
      payload: ActiveEntityId;
    }
  | {
      type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POSITION_ID;
      payload: ActiveEntityId;
    };

export type GeoActionsDispatch = {
  updatePortraitView: (portraitView: Option<PORTRAIT_VIEW>) => void;
  updateActiveLocationId: (locationId: ActiveEntityId) => void;
  updateActivePositionId: (positionId: ActiveEntityId) => void;
};

export type GeoCtxType = {
  geoState: GeoState;
  geoActionsDispatch: GeoActionsDispatch;
};
