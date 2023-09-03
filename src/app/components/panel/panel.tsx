import React, { MutableRefObject, useContext, useRef, useState } from "react";
import { Content, PortraitView } from ".";
import { GeoCtx } from "@/app/state/context";
import { Box } from "../ui";
import { PORTRAIT_VIEW } from "@/app/types";
import { Option } from "@/types";
import { useScreenPortraitQuery } from "@/app/utils/hooks";
import { PanelCtx } from "./context";

const standardizePanelHeight = (height: Option<number>): string =>
  height ? `${height}px` : "32vh";

export function Panel() {
  const [isMovingPanel, setIsMovingPanel] = useState(false);
  const [panelHeight, setPanelHeight] = useState<Option<number>>(null);
  const portraitPanelRef = useRef<MutableRefObject<HTMLDivElement>>(null);
  const isScreenPortrait = useScreenPortraitQuery();
  const {
    geoState: { portraitView },
  } = useContext(GeoCtx);

  const startMovingPanel = () => setIsMovingPanel(true);

  const endMovingPanel = () => setIsMovingPanel(false);

  const movePanel = (e: React.PointerEvent<HTMLDivElement>) => {
    const portraitPanel = portraitPanelRef.current as HTMLDivElement | null;
    if (isMovingPanel && portraitPanel) {
      const { height } = portraitPanel.getBoundingClientRect();
      const { movementY } = e;
      const nextPanelHeight = height - movementY;
      setPanelHeight(nextPanelHeight);
    }
  };

  return (
    <>
      <PanelCtx.Provider value={{ startResizingPanel: startMovingPanel }}>
        {isScreenPortrait ? (
          <Box
            ref={portraitPanelRef}
            onPointerMove={movePanel}
            onPointerUp={endMovingPanel}
            onPointerLeave={endMovingPanel}
            height={
              portraitView === PORTRAIT_VIEW.SPLIT
                ? standardizePanelHeight(panelHeight)
                : portraitView === PORTRAIT_VIEW.PANEL
                ? "100%"
                : "unset"
            }
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <PortraitView />
            <Box
              height="100%"
              overflow="scroll"
              sx={{
                display:
                  portraitView === PORTRAIT_VIEW.MAP ? "none" : "inherit",
              }}
            >
              <Content />
            </Box>
          </Box>
        ) : (
          <Box width="30%">
            <Content />
          </Box>
        )}
      </PanelCtx.Provider>
    </>
  );
}
