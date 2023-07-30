import { Link } from ".";
import { ReactNode } from "react";

export interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </Link>
  );
}
