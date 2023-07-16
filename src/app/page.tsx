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

const places = [
  {
    id: 0,
    name: "Equitable",
  },
  {
    id: 1,
    name: "Battery",
  },
];

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
                {places.map((place) => (
                  <Button
                    key={place.id}
                    onClick={() =>
                      geoActionsDispatch.updateActivePointId(place.id)
                    }
                    color={
                      geoState.activePointId === place.id
                        ? "secondary"
                        : "primary"
                    }
                  >
                    {place.name}
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
