import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  purple,
  List,
  ListItem,
} from "../ui";
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
        <CardContent>
          <Box display="flex" flexDirection="column">
            <Box>
              {position.title}{" "}
              {`${position.startDate.getMonth()}/${position.startDate.getFullYear()}`}
            </Box>
            <List>
              {position.locations.map(({ id: locationId, city }) => (
                <ListItem key={`${position.id}-${locationId}`}>{city}</ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
