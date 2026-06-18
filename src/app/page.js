import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Investors from "@/components/Investors";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-void-black min-h-screen h-[300vh]">
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Investors />
      <Impact />
      <CTA />
      <Footer />
    </main>
  );
}
