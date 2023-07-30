import { Box, Toolbar, Typography } from "../ui";

export function Header() {
  return (
    <header>
      <Toolbar>
        <Box>
          <Typography variant="h6" component="h1">
            Timothy Miller
          </Typography>
        </Box>
      </Toolbar>
    </header>
  );
}
