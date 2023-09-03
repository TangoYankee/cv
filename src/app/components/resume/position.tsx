import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  purple,
  List,
  ListItem,
  Typography,
} from "../ui";
import React from "react";
import { Position } from "@/app/data/types";
import { oxfordCommas } from "@/app/utils";

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
            <Typography variant="h4" component="h4">
              {position.title}
            </Typography>
            <Typography variant="h5" component="h5">
              {position.organization}
            </Typography>
            <Typography paragraph={true}>
              {`${position.startDate.getMonth()}/${position.startDate.getFullYear()} - ${position.endDate?.getMonth()}/${position.endDate?.getFullYear()}`}
            </Typography>
            <Box>
              <Typography variant="h5" component="h5">
                Locations:
              </Typography>
              <Typography paragraph={true}>
                {oxfordCommas(
                  position.locations.map((location) => location.city),
                )}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" component="h5">
                Tools:
              </Typography>
              <Typography paragraph={true}>
                {oxfordCommas(position.softwareTools)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" component="h5">
                Achievements
              </Typography>
              <List>
                {position.achievements.map((achievement, index) => (
                  <ListItem key={index}>
                    <Typography paragraph={true}>{achievement}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
