import { places } from "@/app/data";
import { Stack } from "../ui";
import { GeoCtx } from "@/app/state/context";
import React, { useContext } from "react";
import { ResumePosition } from "./position";

export function ResumeContainer() {
  const {
    geoState: { activePointId },
    geoActionsDispatch: { updateActivePointId },
  } = useContext(GeoCtx);

  return (
    <Stack spacing={2}>
      {places.map((placeId) => (
        <ResumePosition
          key={placeId}
          placeId={placeId}
          activePointId={activePointId}
          updateActivePointId={() => updateActivePointId(placeId)}
        />
      ))}
    </Stack>
  );
}
