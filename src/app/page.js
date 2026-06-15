import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-void-black min-h-screen h-[300vh]">
      <Navbar />
      <Hero />
      <Stats />
    </main>
  );
}
