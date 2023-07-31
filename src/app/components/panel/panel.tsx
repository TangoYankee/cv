import { useContext } from "react";
import { Content, PortraitView } from ".";
import { GeoCtx } from "@/app/state/context";
import { Box } from "../ui";
import { PORTRAIT_VIEW } from "@/app/types";

export function Panel() {
  const {
    geoState: { isScreenLandscape, portraitView },
  } = useContext(GeoCtx);
  return (
    <>
      {isScreenLandscape ? (
        <Content />
      ) : (
        <Box>
          <PortraitView />
          <Box sx={{display: portraitView === PORTRAIT_VIEW.MAP ? 'none': 'inherit'}}>
            <Content />
          </Box>
        </Box>
      )}
    </>
  );
}
