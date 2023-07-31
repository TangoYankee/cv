import { Dispatch } from "react";
import { ActivePointId, GEO_ACTION_TYPE, GeoAction } from "./types";
import { PLACE_FILL_CATEGORY, PORTRAIT_VIEW } from "../types";
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
    updateIsScreenLandscape: (isScreenLandscape: boolean) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_IS_SCREEN_LANDSCAPE,
        payload: isScreenLandscape,
      }),
    updatePortraitView: (portraitView: Option<PORTRAIT_VIEW>) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_PORTRAIT_VIEW,
        payload: portraitView,
      })
  };
};
