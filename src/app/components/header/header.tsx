import { useContext } from "react";
import { AppBar, Box, Button, ButtonGroup, Toolbar, Typography } from "../ui";
import { GeoCtx } from "@/app/state/context";

export function Header() {
  const {
    geoActionsDispatch: { openSidebar },
  } = useContext(GeoCtx);
  return (
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
  );
}
