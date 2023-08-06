import { Box, Toolbar, Typography } from "../ui";
import style from "./header.module.css";

export function Header() {
  return (
    <header className={style.headerContainer}>
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
