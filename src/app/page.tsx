"use client";

import { useReducer } from "react";
import GeoMap from "./geoMap";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "./components/ui";
import { geoReducer, initialGeoState } from "./state/reducer";
import { geoActions } from "./state/actions";
import { GeoCtx } from "./state/context";
import { Footer } from "./components/footer";
import { places, placeNames } from "./data";

export default function App() {
  const [geoState, geoDispatch] = useReducer(geoReducer, initialGeoState);
  const geoActionsDispatch = geoActions(geoDispatch);

  return (
    <main>
      <GeoCtx.Provider value={{ geoState, geoActionsDispatch }}>
        <AppBar>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" component="h1">
                Timothy Miller
              </Typography>
            </Box>
            <Box>
              <ButtonGroup variant="contained">
                {places.map((placeId) => (
                  <Button
                    key={placeId}
                    onClick={() =>
                      geoActionsDispatch.updateActivePointId(placeId)
                    }
                    color={
                      geoState.activePointId === placeId
                        ? "secondary"
                        : "primary"
                    }
                  >
                    {placeNames[placeId]}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>
        <GeoMap />
        <Footer />
      </GeoCtx.Provider>
    </main>
  );
}
