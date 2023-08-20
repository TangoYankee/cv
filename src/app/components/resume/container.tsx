import { positions } from "@/app/data";
import { Stack } from "../ui";
import { GeoCtx } from "@/app/state/context";
import React, { useContext } from "react";
import { ResumePosition } from "./position";

export function ResumeContainer() {
  const {
    geoState: { activePositionId, highlightedPositionsIds },
    geoActionsDispatch: { updateActivePositionId },
  } = useContext(GeoCtx);

  return (
    <Stack spacing={2}>
      {positions.map((position) => (
        <ResumePosition
          key={position.id}
          position={position}
          isHighlighted={
            position.id === activePositionId ||
            highlightedPositionsIds.includes(position.id)
          }
          updateActivePositionId={() => updateActivePositionId(position.id)}
        />
      ))}
    </Stack>
  );
}
