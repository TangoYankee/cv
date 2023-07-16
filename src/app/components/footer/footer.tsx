import { AppBar, Toolbar, FooterLink } from "../ui";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/tangoyankee/",
  },
  {
    title: "Linked In",
    href: "https://www.linkedin.com/in/timothy-m-miller/",
  },
  {
    title: "Dev To",
    href: "https://dev.to/tangoyankee",
  },
];

export function Footer() {
  return (
    <AppBar sx={{ top: "auto", bottom: 0 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {footerLinks.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.title}
          </FooterLink>
        ))}
      </Toolbar>
    </AppBar>
  );
}
