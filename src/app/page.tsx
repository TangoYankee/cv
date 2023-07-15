"use client";

import { useReducer } from "react";
import GeoMap from "./geoMap";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { geoActions, geoReducer, initialGeoState } from "./reducers/geo";
import { GeoCtx } from "./context/geo";

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
        <AppBar sx={{ top: "auto", bottom: 0 }}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Link
              href="https://github.com/tangoyankee/"
              target="_blank"
              rel="noopener noreferrer"
              color="#ffffff"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/timothy-m-miller/"
              target="_blank"
              rel="noopener noreferrer"
              color="#ffffff"
            >
              Linked In
            </Link>
            <Link
              href="https://dev.to/tangoyankee"
              target="_blank"
              rel="noopener noreferrer"
              color="#ffffff"
            >
              Dev To
            </Link>
          </Toolbar>
        </AppBar>
      </GeoCtx.Provider>
    </main>
  );
}
