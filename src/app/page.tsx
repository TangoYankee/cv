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
import { Sidebar } from "./components/sidebar";

export default function App() {
  const [geoState, geoDispatch] = useReducer(geoReducer, initialGeoState);
  const geoActionsDispatch = geoActions(geoDispatch);
  const { openSidebar } = geoActionsDispatch;

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
                <Button onClick={openSidebar}>Style Sidebar</Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <GeoMap />
        <Footer />
      </GeoCtx.Provider>
    </main>
  );
}
