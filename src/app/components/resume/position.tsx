import { Card, CardContent, CardActionArea, purple } from "../ui";
import React from "react";
import { Position } from "@/app/data/types";

export interface ResumePositionProps {
  position: Position;
  isHighlighted: boolean;
  updateActivePositionId: () => void;
}

export function ResumePosition({
  position,
  isHighlighted,
  updateActivePositionId,
}: ResumePositionProps) {
  return (
    <Card
      sx={{
        backgroundColor: isHighlighted ? purple[100] : "",
      }}
    >
      <CardActionArea onClick={updateActivePositionId}>
        <CardContent>{position.title}</CardContent>
      </CardActionArea>
    </Card>
  );
}
