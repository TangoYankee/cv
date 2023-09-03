import type { Metadata } from "next";
import React from "react";

import styles from "./layout.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "CV: Timothy Miller",
  description: "Curriculum Vitae for Timothy Miller",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.appBody}>{children}</body>
    </html>
  );
}
