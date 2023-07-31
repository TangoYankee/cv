import React, { useContext } from "react";
import { ToggleButton, ToggleButtonGroup } from "../ui";
import { GeoCtx } from "@/app/state/context";
import { PORTRAIT_VIEW } from "@/app/types";

export function PortraitView() {
  const {
    geoState: { portraitView },
    geoActionsDispatch: { updatePortraitView },
  } = useContext(GeoCtx);

  const handleUpdatePortraitView = (
    _event: React.MouseEvent<HTMLElement>,
    requestedPortraitView: PORTRAIT_VIEW,
  ) => updatePortraitView(requestedPortraitView);
  return (
    <ToggleButtonGroup
      value={portraitView}
      exclusive
      onChange={handleUpdatePortraitView}
      size="small"
      sx={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <ToggleButton value={PORTRAIT_VIEW.MAP}>Map</ToggleButton>
      <ToggleButton value={PORTRAIT_VIEW.SPLIT}>Split</ToggleButton>
      <ToggleButton value={PORTRAIT_VIEW.PANEL}>Panel</ToggleButton>
    </ToggleButtonGroup>
  );
}
