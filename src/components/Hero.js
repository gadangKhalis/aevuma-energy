export default function Hero() {
  return (
    <section className="relative min-h-screen bg-void-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg" }}
      />
      <div className="absolute inset-0 bg-void-black opacity-60" />

      {/* Overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void-black to-transparent" />
      <div className="absolute bottom-0 letf-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-solar-blue opacity-10 blur-[120px] rounded-full pointer-events-none" />

      {/* COntent */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-5x1 mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
          <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
            Series E · Pre-IPO · Est. 2019{" "}
          </span>
        </div>

        <h1 className="text-arctic-white text-6x1 font-medium tracking-tight leading-tight mb-6">
          Energy Without <br />
          <span className="text-solar-blue">Limits.</span>
        </h1>

        <p className="text-arctic-white text-lg opacity-60 max-w-2x1 leading-relaxed mb-10">
          AEVUMA builds the energy infrastructure for the next century — fusion
          reactors, orbital solar arrays, and planetary-scale battery storage.{" "}
          <br />
          Powering 4 billion people by 2045.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-solar-blue text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
          >
            Explore Our Technology
          </a>
          <a
            href="#"
            className="text-arctic-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide border border-white/20 hover:border-white/50 transition-border duration-200"
          >
            Investor Relations →
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-arctic-white text-xs tracking-widest uppercase opacity-40">
          Scroll
        </span>
        <div className="w-px h-12 bg-white opacity-20" />
      </div>
    </section>
  );
}
