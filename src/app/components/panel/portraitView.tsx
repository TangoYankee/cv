import React from "react";
import { Stack } from "../ui";
import { MapViewBtn, PanelViewBtn, SplitViewBtn } from "./panelButtons";

export function PortraitView() {
  return (
    <Stack direction="row" spacing={10} justifyContent="center">
      <MapViewBtn />
      <SplitViewBtn />
      <PanelViewBtn />
    </Stack>
  );
}
