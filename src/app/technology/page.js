import Navbar from "@/components/Navbar";

export default function TechPage() {
  return (
    <main className="bg-void-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-solar-blue opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Our Technology
            </span>
          </div>

          <h1 className="text-arctic-white text-7xl font-medium tracking-tight leading-none mb-6 max-w-4xl">
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

            <div className="grid grid-cols-2 gap-4 mt-4">
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
              style={{ backgroundImage: "url('/images/hero-bg.jpg" }}
            />
            <div className="absolute inset-0 bg-void-black opacity-40" />
          </div>
        </div>

        <div className="w-full h-px bg-white opacity-10 mb-32" />

        {/* Tech 2 */}
      </section>
    </main>
  );
}
