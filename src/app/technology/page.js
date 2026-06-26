import Navbar from "@/components/Navbar";

export default function TechPage() {
  return (
    <main className="bg-void-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden pt-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-solar-blue opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Our Technology
            </span>
          </div>

          <h1 className="text-arctic-white text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-none mb-6 max-w-4xl">
            Three technologies. <br />
            <span className="text-solar-blue">One Mission.</span>
          </h1>

          <p className="text-arctic-white text-lg opacity-50 leading-relaxed max-w-xl ">
            AEVUMA's energy stack combines fusion power, orbital solar
            harvesting, and planetary-scale storage — engineered to work
            together as a single, unified system.
          </p>
        </div>
      </section>

      {/* Tech Detail */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div
          className="grid gap-16 items-center mb-32"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                01 · Fusion Energy
              </span>
            </div>
            <h2 className="text-arctic-white text-5xl font-medium tracking-tight leading-tight">
              Fusion Reactor
            </h2>
            <p className="text-arctic-white text-base opacity-50 leading-relaxed">
              Our tokamak-based reactors produce net-positive energy at
              commercial scale — clean, safe, and available 24/7 regardless of
              weather or geography. Each reactor produces enough energy to power
              a city of 2 million people.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Output
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  2.4 GW
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Per reactor unit
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Efficiency
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  94.7%
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Energy conversion rate
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Fuel
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  Deuterium
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Extracted from seawater
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Uptime
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  99.97%
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Annual availability
                </span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-[500px] rounded-sm overflow-hidden border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-void-black opacity-40" />
          </div>
        </div>

        <div className="w-full h-px bg-white opacity-10 mb-32" />

        {/* Tech 2 */}
        <div
          className="grid gap-16 items-center mb-32"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="relative h-[500px] rounded-sm overflow-hidden border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/card1.jpg')" }}
            />
            <div className="absolute inset-0 bg-void-black opacity-40" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                02 · Orbital Solar
              </span>
            </div>
            <h2 className="text-arctic-white text-5xl font-medium tracking-tight leading-tight">
              Orbital SOlar Arrays
            </h2>
            <p className="text-arctic-white text-base opacity-50 leading-relaxed">
              Solar arrays positioned in geostationary orbit collect unfiltered
              sunlight 24 hours a day — then beam it wirelessly to ground
              stations across six continents via microwave transmission at
              near-zero loss.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Altitude
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  35,786 km
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Geostationary orbit
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Array Size
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  4.2 km²
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Per orbital unit
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Transmission
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  98.2%
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Efficiency rate
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Coverage
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  6 Continents
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Ground stations active
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white opacity-10 mb-32" />

        {/* Tech 3 */}
        <div
          className="grid gap-16 items-center"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <dic className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                03 · Planetary Grid
              </span>
            </div>
            <h2 className="text-arctic-white text-5xl font-medium tracking-tight leading-tight">
              Planetary Grid Storage
            </h2>
            <p className="text-arctic-white text-base opacity-50 leading-relaxed">
              A planetary-scale battery storage network that stabilizes energy
              supply across regions — eliminating blackouts, reducing
              transmission losses by 60%, and ensuring every node on the grid
              stays powered at all times.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Capacity
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  847 TWh
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Total storage capacity
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Nodes
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  12,400+
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Active grid nodes
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Loss Reduction
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  60%
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Transmission loss saved
                </span>
              </div>
              <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                <span className="text-arctic-white text-xs opacity-30 tracking-widest uppercase">
                  Response
                </span>
                <span className="text-arctic-white text-2xl font-medium">
                  0.3ms
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  Grid response time
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-sm overflow-hidden border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/card2.jpg')" }}
            />
            <div className="absolute inset-0 bg-void-black opacity-40" />
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                Get Started
              </span>
            </div>
            <h2 className="text-arctic-white text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
              Want to see our Technology in action?
            </h2>
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
              Schedule a technical briefing with our engineering team — we'll
              walk you through the full AEVUMA energy stack, live performance
              data, and deployment roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="/contact"
              className="w-full sm:w-auto text-center bg-solar-blue text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              Schedule a Briefing
            </a>
            <a
              href="#"
              className="w-full sm:w-auto text-center text-arctic-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide border border-white/20 hover:border-white/50 transition-all duration-200"
            >
              Download Whitepaper →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
