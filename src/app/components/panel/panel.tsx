import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Content, PortraitView } from ".";
import { GeoCtx } from "@/app/state/context";
import { Box } from "../ui";
import { PORTRAIT_VIEW } from "@/app/types";
import { Option } from "@/types";
import { useScreenPortraitQuery } from "@/app/utils/hooks";
import { PanelCtx } from "./context";
import clamp from "lodash.clamp";

const standardizePanelHeight = (height: Option<number>): string =>
  height ? `${height}px` : "32vh";

// pixels
const minPanelHeight = 100;
const panelTopOffset = 100;

export function Panel() {
  const [isResizingPanel, setIsResizingPanel] = useState(false);
  const [panelHeight, setPanelHeight] = useState<Option<number>>(null);
  const portraitPanelRef = useRef<MutableRefObject<HTMLDivElement>>(null);
  const isScreenPortrait = useScreenPortraitQuery();
  const {
    geoState: { portraitView },
  } = useContext(GeoCtx);

  const startResizingPanel = () => setIsResizingPanel(true);
  const resetPanelHeight = () => setPanelHeight(null);

  useEffect(() => {
    const portraitPanel = portraitPanelRef.current as HTMLDivElement | null;
    const resizeElement =
      (
        element: HTMLDivElement | null,
        setElementHeight: Dispatch<SetStateAction<Option<number>>>,
      ) =>
      (e: PointerEvent) => {
        if (element === null) return;
        const contentContainer = document.getElementById(
          "content-container",
        ) as HTMLDivElement;

        const { height: containerHeight, bottom: containerBottom } =
          contentContainer.getBoundingClientRect();
        const { clientY: mouseYOffset } = e;

        const nextElementHeight = clamp(
          containerBottom - mouseYOffset,
          minPanelHeight,
          containerHeight - panelTopOffset,
        );
        setElementHeight(nextElementHeight);
      };

    const resizePanel = resizeElement(portraitPanel, setPanelHeight);

    const endResizingPanel = () => {
      setIsResizingPanel(false);
      document.removeEventListener("pointermove", resizePanel);
    };

    if (isResizingPanel) {
      document.addEventListener("pointermove", resizePanel);
      document.addEventListener("pointerup", endResizingPanel, { once: true });
    }
    return () => {
      if (isResizingPanel) {
        document.removeEventListener("pointerup", endResizingPanel);
        document.removeEventListener("pointermove", resizePanel);
      }
    };
  }, [isResizingPanel, setIsResizingPanel, portraitPanelRef]);

  return (
    <>
      <PanelCtx.Provider value={{ startResizingPanel, resetPanelHeight }}>
        {isScreenPortrait ? (
          <Box
            ref={portraitPanelRef}
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
