import type { Metadata } from "next";
import "./globals.css";

import { Navbar, Sidebar } from "@/components";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Home",
  description: "Marketfy: A simulated e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
