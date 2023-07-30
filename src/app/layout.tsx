import styles from "./layout.module.css";
import type { Metadata } from "next";
import React from "react";

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
