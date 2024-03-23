import type { Metadata } from "next";
import "./globals.css";

import { Navbar, Sidebar } from "@/components";
import { inter } from "@/config/fonts";
import { Providers } from "@/store/Providers";
import { DataInitializer } from "@/components/data-initializer.tsx/DataInitializer";

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
        <Providers>
          <DataInitializer/>
          <Navbar />
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
