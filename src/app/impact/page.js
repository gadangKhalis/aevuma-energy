import Navbar from "@/components/Navbar";

const countries = [
  "United States",
  "Germany",
  "France",
  "United Kingdom",
  "Japan",
  "South Korea",
  "Australia",
  "Saudi Arabia",
  "UAE",
  "India",
  "Brazil",
  "South Africa",
  "Indonesia",
  "Canada",
  "Netherlands",
  "Norway",
  "Sweden",
  "Singapore",
  "New Zealand",
  "Chile",
];

const impactTimeline = [
  {
    year: "2021",
    people: "12M",
    co2: "0.02 Gt",
    countries: 2,
    energy: "4 TWh",
  },
  {
    year: "2022",
    people: "80M",
    co2: "0.12 Gt",
    countries: 6,
    energy: "28 TWh",
  },
  {
    year: "2023",
    people: "200M",
    co2: "0.4 Gt",
    countries: 10,
    energy: "84 TWh",
  },
  {
    year: "2024",
    people: "1.2B",
    co2: "1.1 Gt",
    countries: 18,
    energy: "320 TWh",
  },
  {
    year: "2025",
    people: "1.8B",
    co2: "1.8 Gt",
    countries: 18,
    energy: "580 TWh",
  },
  {
    year: "2026",
    people: "2.1B",
    co2: "2.4 Gt",
    countries: 18,
    energy: "847 TWh",
  },
];

export default function ImpactPage() {
  return (
    <main className="bg-void-black">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-fusion-green opacity-5 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Our Impact
            </span>
          </div>
          <h1 className="text-arctic-white text-7xl font-medium tracking-tight leading-none mb-6 max-w-4xl">
            Numbers that <br />
            <span className="text-fusion-green">change the world.</span>
          </h1>
          <p className="text-arctic-white text-lg opacity-50 leading-relaxed max-w-xl">
            Every metric below represents real people, real communities, and
            real change — measured, verified, and published annually by
            independent third-party auditors.
          </p>
        </div>
      </section>

      {/* ──  Grid ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Live Metrics · Updated Q2 2026
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {/* Row 1 — 2  */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative border border-white/10 rounded-sm p-12 flex flex-col justify-between min-h-[280px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/card3.jpg')" }}
                />
                <div className="absolute inset-0 bg-void-black opacity-75" />
                <span className="relative z-10 text-arctic-white text-xs tracking-widest uppercase opacity-30">
                  CO₂ Eliminated
                </span>
                <div className="relative z-10 flex flex-col gap-2">
                  <span className="text-arctic-white text-6xl font-medium tracking-tight leading-none">
                    2.4 Gt
                  </span>
                  <span className="text-arctic-white text-sm opacity-40 leading-relaxed">
                    Gigatons of CO₂ eliminated annually — equivalent to removing
                    520 million cars from the road every year.
                  </span>
                </div>
              </div>

              <div className="relative border border-white/10 rounded-sm p-12 flex flex-col justify-between min-h-[280px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/card1.jpg')" }}
                />
                <div className="absolute inset-0 bg-void-black opacity-75" />
                <span className="relative z-10 text-arctic-white text-xs tracking-widest uppercase opacity-30">
                  People Reached
                </span>
                <div className="relative z-10 flex flex-col gap-2">
                  <span className="text-arctic-white text-6xl font-medium tracking-tight leading-none">
                    2.1B
                  </span>
                  <span className="text-arctic-white text-sm opacity-40 leading-relaxed">
                    People with access to reliable, affordable clean energy
                    across 18 countries and 6 continents.
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2 — 3 */}
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "1fr 1fr 2fr" }}
            >
              <div className="border border-white/10 rounded-sm p-8 flex flex-col justify-between min-h-[200px]">
                <span className="text-arctic-white text-xs tracking-widest uppercase opacity-30">
                  Clean Energy
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-arctic-white text-4xl font-medium tracking-tight">
                    847 TWh
                  </span>
                  <span className="text-arctic-white text-xs opacity-40">
                    Produced annually
                  </span>
                </div>
              </div>

              <div className="border border-white/10 rounded-sm p-8 flex flex-col justify-between min-h-[200px]">
                <span className="text-arctic-white text-xs tracking-widest uppercase opacity-30">
                  Grid Uptime
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-arctic-white text-4xl font-medium tracking-tight">
                    99.97%
                  </span>
                  <span className="text-arctic-white text-xs opacity-40">
                    All nodes combined
                  </span>
                </div>
              </div>

              <div className="relative border border-white/10 rounded-sm p-8 flex flex-col justify-between min-h-[200px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/card2.jpg')" }}
                />
                <div className="absolute inset-0 bg-void-black opacity-80" />
                <span className="relative z-10 text-arctic-white text-xs tracking-widest uppercase opacity-30">
                  Countries Served
                </span>
                <div className="relative z-10 flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-arctic-white text-4xl font-medium tracking-tight">
                      18
                    </span>
                    <span className="text-arctic-white text-xs opacity-40">
                      Nations with active AEVUMA infrastructure
                    </span>
                  </div>
                  <span className="text-fusion-green text-xs opacity-60 tracking-widest uppercase">
                    6 Continents
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Countries ── */}
      <section className="border-t border-white/10 py-24 bg-deep-navy">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Where We Operate
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight mb-16">
            18 countries. 6 continents. Growing.
          </h2>
          <div className="flex flex-wrap gap-3">
            {countries.map((country) => (
              <div
                key={country}
                className="border border-white/10 rounded-sm px-4 py-2 flex items-center gap-2 hover:border-white/20 transition-all duration-200"
              >
                <div className="w-1 h-1 rounded-full bg-fusion-green opacity-60" />
                <span className="text-arctic-white text-sm opacity-60">
                  {country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Impact Over Time
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight mb-16">
            From 12 million to 2.1 billion — in five years.
          </h2>

          {/* Header table */}
          <div
            className="grid gap-8 pb-4 border-b border-white/10 mb-2"
            style={{ gridTemplateColumns: "80px 1fr 1fr 1fr 1fr" }}
          >
            {[
              "Year",
              "People Reached",
              "CO₂ Eliminated",
              "Countries",
              "Energy Produced",
            ].map((h) => (
              <span
                key={h}
                className="text-arctic-white text-xs tracking-widest uppercase opacity-30"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {impactTimeline.map((row) => (
            <div
              key={row.year}
              className="grid gap-8 py-6 border-b border-white/10 hover:bg-white/2 transition-all duration-200"
              style={{ gridTemplateColumns: "80px 1fr 1fr 1fr 1fr" }}
            >
              <span className="text-arctic-white font-mono text-sm font-medium">
                {row.year}
              </span>
              <span className="text-arctic-white text-sm opacity-60">
                {row.people}
              </span>
              <span className="text-arctic-white text-sm opacity-60">
                {row.co2}
              </span>
              <span className="text-arctic-white text-sm opacity-60">
                {row.countries} nations
              </span>
              <span className="text-arctic-white text-sm opacity-60">
                {row.energy}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8 flex items-end justify-between">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                Go Deeper
              </span>
            </div>
            <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight">
              Read our full Impact Report.
            </h2>
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
              Our annual Impact Report covers verified emissions data, energy
              delivery metrics, community outcomes, and our roadmap to 4 billion
              people by 2045.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="#"
              className="bg-solar-blue text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              Download Report 2026
            </a>
            <a
              href="/contact"
              className="text-arctic-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide border border-white/20 hover:border-white/50 transition-all duration-200"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
