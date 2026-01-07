import type { Metadata } from "next";
import "./globals.css";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "FA Design System",
  description: "Design System Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}

