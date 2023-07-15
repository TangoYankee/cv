import { List, ListItem, Link, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Typography variant="h4" component="h1">
          Timothy Miller
        </Typography>
        <Typography paragraph={true}>
          Full stack development | GeoInformatics
        </Typography>
        <List>
          <ListItem>
            <Link
              href="https://github.com/tangoyankee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: code projects
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/timothy-m-miller/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked In: professional connections
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://dev.to/tangoyankee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev To: dev community blog
            </Link>
          </ListItem>
        </List>
      </Container>
    </main>
  );
}
