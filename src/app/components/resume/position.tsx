import { placeNames } from "@/app/data";
import { Card, CardContent, CardActionArea, purple } from "../ui";
import React from "react";
import { ActivePointId } from "@/app/state/types";

export interface ResumePositionProps {
  placeId: number;
  activePointId: ActivePointId;
  updateActivePointId: () => void;
}

export function ResumePosition({
  placeId,
  activePointId,
  updateActivePointId,
}: ResumePositionProps) {
  return (
    <Card
      sx={{
        backgroundColor: placeId === activePointId ? purple[100] : "",
        position: placeId === activePointId ? "sticky" : "",
        top: placeId === activePointId ? "0" : "",
        zIndex: placeId === activePointId ? "1" : "",
      }}
    >
      <CardActionArea onClick={updateActivePointId}>
        <CardContent>{placeNames[placeId]}</CardContent>
      </CardActionArea>
    </Card>
  );
}
