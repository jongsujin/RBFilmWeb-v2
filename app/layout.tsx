import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import TanstackQueryProvider from "../components/Provider/Provider";

export const metadata: Metadata = {
  title: "RBFilm",
  description:
    "RBFilm offers top-tier video production services, specializing in creative filmmaking, corporate videos, commercials, and more. Transform your vision into a captivating visual story with RBFilm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
