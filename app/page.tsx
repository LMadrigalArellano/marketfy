import { titleFont } from "@/config/fonts";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className={`${titleFont.className} text-5xl font-bold`}>Home Page</h1>
    </main>
  );
}
