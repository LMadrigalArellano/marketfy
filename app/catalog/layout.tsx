import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Catalog",
  description: "Products catalog",
};


export default function CatalogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen shadow-white">
      { children }
    </main>
  );
}