import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <main className="bg-void-black min-h-screen h-[300vh]">
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
    </main>
  );
}
