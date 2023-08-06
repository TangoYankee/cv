import { places, placeNames } from "@/app/data";
import { Box, Stack, ToggleButton, ToggleButtonGroup } from "../ui";
import { GeoCtx } from "@/app/state/context";
import { ActivePointId } from "@/app/state/types";
import React, { useContext } from "react";

export function Content() {
  const {
    geoState: { activePointId },
    geoActionsDispatch: { updateActivePointId },
  } = useContext(GeoCtx);

  const handleUpdateActivePointId = (
    _event: React.MouseEvent<HTMLElement>,
    requestedActivePointId: ActivePointId,
  ) => {
    updateActivePointId(requestedActivePointId);
  };

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
    </Box>
  );
}
