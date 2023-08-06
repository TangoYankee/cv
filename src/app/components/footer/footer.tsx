import { Toolbar, FooterLink } from "../ui";
import styles from "./footer.module.css";

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
    <footer className={styles.footerContainer}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "white",
        }}
      >
        {footerLinks.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.title}
          </FooterLink>
        ))}
      </Toolbar>
    </footer>
  );
}
