import { Dispatch } from "react";
import { ActivePointId, GEO_ACTION_TYPE, GeoAction } from "./types";
import { PORTRAIT_VIEW } from "../types";
import { Option } from "@/types";

export const geoActions = (dispatch: Dispatch<GeoAction>) => {
  return {
    updateActivePointId: (activePointId: ActivePointId) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_ACTIVE_POINT_ID,
        payload: activePointId,
      }),
    updatePortraitView: (portraitView: Option<PORTRAIT_VIEW>) =>
      dispatch({
        type: GEO_ACTION_TYPE.UPDATE_PORTRAIT_VIEW,
        payload: portraitView,
      }),
  };
};
