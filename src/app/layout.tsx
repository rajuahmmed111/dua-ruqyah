import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dua Page",
  description: "Learn and explore Islamic duas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#EBEEF2",
          minHeight: "100vh",
        }}
        className={inter.className}
      >
        <div className="flex min-h-screen">{children}</div>
      </body>
    </html>
  );
}
