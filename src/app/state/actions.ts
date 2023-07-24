import { Dispatch } from "react";
import { ActivePointId, GEO_ACTION_TYPE, GeoAction } from "./types";
import { PLACE_FILL_CATEGORY } from "../types";
import { Option } from "@/types";

export const geoActions = (dispatch: Dispatch<GeoAction>) => {
  return {
    updateActivePointId: (activePointId: ActivePointId) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID,
        payload: activePointId,
      }),
    updatePlaceFillCategory: (placeFillCategory: Option<PLACE_FILL_CATEGORY>) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_PLACE_FILL_CATEGORY,
        payload: placeFillCategory,
      }),
    openSidebar: () =>
      dispatch({
        type: GEO_ACTION_TYPE.OPEN_SIDEBAR,
      }),
    closeSidebar: () =>
      dispatch({
        type: GEO_ACTION_TYPE.CLOSE_SIDEBAR,
      }),
  };
};
