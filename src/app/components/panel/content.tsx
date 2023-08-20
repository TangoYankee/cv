import { Box } from "../ui";
import React from "react";
import { ResumeContainer } from "../resume";

export function Content() {
  return (
    <Box height="100%" width="100%" overflow="scroll">
      <ResumeContainer />
    </Box>
  );
}
