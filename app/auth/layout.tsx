import { Title } from "@/components";

export default async function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {

  return (
    <main className="flex justify-center">
      <div className="w-full">
        { children }
      </div>
    </main>
  );
}