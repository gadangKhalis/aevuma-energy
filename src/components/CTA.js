export default function CTA() {
  return (
    <section className="bg-solar-blue py-32">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">
        {/* Kiri — Label + Headline */}
        <div className="flex flex-col gap-6 max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
            <span className="text-white text-xs tracking-widest uppercase opacity-60">
              Investor Relations
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-white text-4xl lg:text-6xl font-medium tracking-tight leading-tight">
            Ready to invest in the future of energy?
          </h2>

          {/* Subtext */}
          <p className="text-white text-base opacity-70 leading-relaxed max-w-lg">
            AEVUMA is currently in its Series E funding round. Join the
            institutions shaping the next century of clean, abundant energy —
            and the returns that come with it.
          </p>
        </div>

        {/* Kanan — Stats + Buttons */}
        <div className="flex flex-col items-start lg:items-end gap-8 w-full lg:w-auto shrink-0">
          {/* Stats */}
          <div className="flex flex-col items-start lg:items-end gap-3">
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

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full lg:w-64">
            <a
              href="#"
              className="bg-white text-solar-blue text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 transition-opacity duration-200 text-center"
            >
              Request Investor Deck
            </a>
            <a
              href="#"
              className="text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide border border-white/30 hover:border-white/70 transition-all duration-200 text-center"
            >
              Schedule a Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
