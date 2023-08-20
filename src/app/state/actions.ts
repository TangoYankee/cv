import { Dispatch } from "react";
import { ActiveEntityId, GEO_ACTION_TYPE, GeoAction } from "./types";
import { PORTRAIT_VIEW } from "../types";
import { Option } from "@/types";

export const geoActions = (dispatch: Dispatch<GeoAction>) => {
  return {
    updatePortraitView: (portraitView: Option<PORTRAIT_VIEW>) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_PORTRAIT_VIEW,
        payload: portraitView,
      }),
    updateActiveLocationId: (locationId: ActiveEntityId) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_ACTIVE_LOCATION_ID,
        payload: locationId,
      }),
    updateActivePositionId: (positionId: ActiveEntityId) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POSITION_ID,
        payload: positionId,
      }),
  };
};
