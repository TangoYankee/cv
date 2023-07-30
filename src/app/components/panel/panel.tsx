import { places, placeNames } from "@/app/data";
import { PLACE_FILL_CATEGORY } from "@/app/types";
import { Box, Stack, ToggleButton, ToggleButtonGroup } from "../ui";
import { GeoCtx } from "@/app/state/context";
import { ActivePointId } from "@/app/state/types";
import React, { useContext } from "react";
import { Option } from "@/types";

export function Panel() {
  const {
    geoState: { activePointId, placeFillCategory },
    geoActionsDispatch: { updateActivePointId, updatePlaceFillCategory },
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
    <Box>
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
    </Box>
  );
}
