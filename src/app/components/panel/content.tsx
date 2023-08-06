import { places, placeNames } from "@/app/data";
import { Box, Stack, Card, CardContent, CardActionArea, purple } from "../ui";
import { GeoCtx } from "@/app/state/context";
import React, { useContext } from "react";

export function Content() {
  const {
    geoState: { activePointId },
    geoActionsDispatch: { updateActivePointId },
  } = useContext(GeoCtx);

  return (
    <Box height="100%" width="100%" overflow="scroll">
      <Stack spacing={2}>
        {places.map((placeId) => (
          <Card
            key={placeId}
            sx={{
              backgroundColor: placeId === activePointId ? purple[100] : "",
              position: placeId === activePointId ? "sticky" : "",
              top: placeId === activePointId ? "0" : "",
              zIndex: placeId === activePointId ? "1" : "",
            }}
          >
            <CardActionArea onClick={() => updateActivePointId(placeId)}>
              <CardContent>{placeNames[placeId]}</CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
