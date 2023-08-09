import { useContext } from "react";
import { Content, PortraitView } from ".";
import { GeoCtx } from "@/app/state/context";
import { Box } from "../ui";
import { PORTRAIT_VIEW } from "@/app/types";
import { useScreenPortraitQuery } from "@/app/utils/hooks";

export function Panel() {
  const isScreenPortrait = useScreenPortraitQuery();
  const {
    geoState: { portraitView },
  } = useContext(GeoCtx);
  return (
    <>
      {isScreenPortrait ? (
        <Box
          height={portraitView === PORTRAIT_VIEW.SPLIT ? "40%" : "unset"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <PortraitView />
          <Box
            height="100%"
            overflow="scroll"
            sx={{
              display: portraitView === PORTRAIT_VIEW.MAP ? "none" : "inherit",
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
    </>
  );
}
