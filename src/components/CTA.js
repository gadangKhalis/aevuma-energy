export default function CTA() {
  return (
    <section className="bg-solar-blue py-32">
      <div className="max-w-7xl mx-auto px-8 flex items-end justify-between">
        {/* Main Teks */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Investor Relation
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-white text-6xl font-medium tracking-tight leading-tight">
            Ready to invest in the future of energy?
          </h2>

          <p className="text-white text-base opacity-70 leading-relaxed max-w-lg">
            AEVUMA is currently in its Series E funding round. Join the
            institutions shaping the next century of clean, abundant energy —
            and the returns that come with it.
          </p>
        </div>

        <div className="flex flex-col items-end gap-8 shrink-0">
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-3">
              <span className="text-white text-xs opacity-50 tracking-wide">
                Current Valuation
              </span>
              <span className="text-white text-sm font-medium">$48B</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-xs opacity-50 tracking-wide">
                Round Size
              </span>
              <span className="text-white text-sm font-medium">$2.4B</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-xs opacity-50 tracking-wide">
                Closing Date
              </span>
              <span className="text-white text-sm font-medium">Q4 2026</span>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-3 w-full">
            <a
              href="#"
              className="bg-white text-solar-blue text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 tranasition-opacity duration-200 text-center"
            >
              Request Investor Deck
            </a>
            <a
              href="#"
              className="text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide border border-white/30 hover:border-white/70 tranasition-all duration-200 text-center"
            >
              Schedule Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
