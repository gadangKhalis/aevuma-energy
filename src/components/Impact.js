export default function Impact() {
  return (
    <section className="bg-void-black py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Label */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
          <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
            Our Impact
          </span>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-4">
          {/* first Row */}
          <div className="relative border border-white/10 rounded-sm p-12 flex items-end justify-between min-h-[280px] overflow-hidden">
            {/* Bg Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/card3.jpg')" }}
            />
            <div className="absolute inset-0 bg-void-black opacity-70" />

            <div className="relative z-10 flex flex-col gap-4 max-w-xl">
              <h2 className="text-arctic-white text-6xl font-medium tracking-tight leading-none">
                2.4 Gigatons
              </h2>
              <p className="text-arctic-white text-base opacity-50 leading-relaxed">
                of CO₂ eliminated annually — equivalent to removing 520 million
                cars from the road, every single year.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-30">
                Carbon Eliminated
              </span>
              <span className="text-fusion-green text-xs tracking-widest uppercase opacity-60">
                ↓ Per Year
              </span>
            </div>
          </div>
        </div>

        {/* 2nd and 3rd Row */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="relative border border-white/10 rounded-sm p-8 flex flex-col justify-between min-h-[220px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/card1.jpg')" }}
            />
            <div className="absolute inset-0 bg-void-black opacity-75" />
            <span className="relative z-10 text-arctic-white text-xs tracking-widest uppercase opacity-30">
              Clean Energy Produced
            </span>
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-arctic-white text-5xl font-medium tracking-tight">
                847 TWh
              </span>
              <span className="text-arctic-white text-sm opacity-40 leading-relaxed">
                Terawatt-hours of clean energy delivered to national grids
                across 18 countries.
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-white/10 rounded-sm p-8 flex flex-col justify-between min-h-[220px]">
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-30">
              Lives Impacted
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-arctic-white text-5xl font-medium tracking-tight">
                1.2B
              </span>
              <span className="text-arctic-white text-sm opacity-40 leading-relaxed">
                People with access to reliable clean energy.
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative md:col-span-1 border border-white/10 rounded-sm p-8 flex flex-col justify-between min-h-[220px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/card2.jpg')" }}
            />
            <div className="absolute inset-0 bg-void-black opacity-75" />

            <span className="relative z-10 text-arctic-white text-xs tracking-widest uppercase opacity-30">
              Grid Reliability
            </span>
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-arctic-white text-5xl font-medium tracking-tight">
                99.97%
              </span>
              <span className="text-arctic-white text-sm opacity-40 leading-relaxed">
                Uptime across all planetary grid nodes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
