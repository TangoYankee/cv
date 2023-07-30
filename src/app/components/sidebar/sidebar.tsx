import { places, placeNames } from "@/app/data";
import { Drawer, Stack, ToggleButton, ToggleButtonGroup } from "../ui";
import React, { useContext } from "react";
import { GeoCtx } from "@/app/state/context";
import { ActivePointId } from "@/app/state/types";
import { PLACE_FILL_CATEGORY } from "@/app/types";
import { Option } from "@/types";

export function Sidebar() {
  const {
    geoState: { activePointId, placeFillCategory, isSidebarOpen },
    geoActionsDispatch: {
      updateActivePointId,
      updatePlaceFillCategory,
      closeSidebar,
    },
  } = useContext(GeoCtx);

  const handleUpdateActivePointId = (
    _event: React.MouseEvent<HTMLElement>,
    requestedActivePointId: ActivePointId,
  ) => {
    updateActivePointId(requestedActivePointId);
  };

  const handleUpdatePlaceFillCategory = (
    _event: React.MouseEvent<HTMLElement>,
    requestedPlaceFillCategory: Option<PLACE_FILL_CATEGORY>,
  ) => updatePlaceFillCategory(requestedPlaceFillCategory);

  return (
    <Drawer anchor="right" open={isSidebarOpen} onClick={closeSidebar}>
      <Stack direction="row">
        <ToggleButtonGroup
          value={activePointId}
          exclusive
          onChange={handleUpdateActivePointId}
        >
          {places.map((placeId) => (
            <ToggleButton key={placeId} value={placeId}>
              {placeNames[placeId]}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          value={placeFillCategory}
          exclusive
          onChange={handleUpdatePlaceFillCategory}
        >
          <ToggleButton value={PLACE_FILL_CATEGORY.PLACEMENT}>
            Placement
          </ToggleButton>
          <ToggleButton value={PLACE_FILL_CATEGORY.TYPE}>Type</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Drawer>
  );
}
