import GeoMap from "./geoMap";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

export default function App() {
  return (
    <main>
      <AppBar>
        <Toolbar>
          <Box>
            <Typography variant="h6" component="h1">
              Timothy Miller (@tangoyankee)
            </Typography>
            <Typography paragraph={true}>
              Full stack development | GeoInformatics
            </Typography>
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
            GitHub: code projects
          </Link>
          <Link
            href="https://www.linkedin.com/in/timothy-m-miller/"
            target="_blank"
            rel="noopener noreferrer"
            color="#ffffff"
          >
            Linked In: professional connections
          </Link>
          <Link
            href="https://dev.to/tangoyankee"
            target="_blank"
            rel="noopener noreferrer"
            color="#ffffff"
          >
            Dev To: dev community blog
          </Link>
        </Toolbar>
      </AppBar>
    </main>
  );
}
