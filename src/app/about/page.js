import Navbar from "@/components/Navbar";

const leadership = [
  {
    name: "Dr. Marcus Vael",
    role: "Chief Executive Officer",
    bio: "Former Director of Energy Research at CERN. Led the first commercial fusion breakthrough in 2021.",
    row: 1,
  },
  {
    name: "Dr. Yuki Tanaka",
    role: "Chief Technology Officer",
    bio: "Ex-NASA propulsion engineer. Pioneer of orbital solar transmission technology.",
    row: 1,
  },
  {
    name: "Sarah Okonkwo",
    role: "Chief Financial Officer",
    bio: "Former Managing Director at Goldman Sachs Energy Division. Led three $10B+ energy IPOs.",
    row: 1,
  },
  // Baris 2 — 4 orang
  {
    name: "Dr. Liam Strauss",
    role: "Chief Science Officer",
    bio: "Nobel Prize nominee in Physics 2023. Author of 140+ peer-reviewed fusion papers.",
    row: 2,
  },
  {
    name: "Amara Diallo",
    role: "Chief Operations Officer",
    bio: "Ex-Shell VP of Global Operations. Oversaw energy infrastructure across 22 countries.",
    row: 2,
  },
  {
    name: "Chen Wei",
    role: "Chief Revenue Officer",
    bio: "Built Temasek's clean energy portfolio from $2B to $18B in five years.",
    row: 2,
  },
  {
    name: "Dr. Priya Nair",
    role: "Chief Sustainability Officer",
    bio: "Former UN Climate Advisor. Architect of AEVUMA's carbon-negative operations framework.",
    row: 2,
  },
];

const milestones = [
  {
    year: "2019",
    event: "Founded",
    desc: "AEVUMA founded in Geneva by Dr. Marcus Vael and Dr. Yuki Tanaka with $120M seed funding.",
  },
  {
    year: "2020",
    event: "Series A",
    desc: "Raised $400M Series A. First fusion reactor prototype achieves net-positive energy output.",
  },
  {
    year: "2021",
    event: "Breakthrough",
    desc: "Commercial fusion breakthrough announced. First orbital solar array launched into geostationary orbit.",
  },
  {
    year: "2022",
    event: "Series B & C",
    desc: "Raised $1.2B across Series B and C. Operations expanded to 6 countries.",
  },
  {
    year: "2023",
    event: "Series D",
    desc: "Raised $3.4B Series D. First planetary grid node activated. 200M people reached.",
  },
  {
    year: "2024",
    event: "Global Scale",
    desc: "Operations in 18 countries. 1.2B people reached. Valuation reaches $28B.",
  },
  {
    year: "2025",
    event: "Series E",
    desc: "Raised $2.4B Series E. Valuation $48B. IPO preparation begins.",
  },
  {
    year: "2026",
    event: "IPO",
    desc: "AEVUMA lists on NYSE. First reactor cluster achieves 2.4GW continuous output.",
  },
  {
    year: "2028",
    event: "Expansion",
    desc: "Orbital solar array cluster reaches 4.2km². Planetary grid covers 40 countries.",
  },
  {
    year: "2030",
    event: "Carbon Neutral",
    desc: "AEVUMA operations achieve full carbon neutrality. 2B people reached.",
  },
  {
    year: "2035",
    event: "Planetary Grid",
    desc: "Planetary grid fully operational across 6 continents. 3B people powered.",
  },
  {
    year: "2045",
    event: "Mission Achieved",
    desc: "4 billion people powered by clean, abundant AEVUMA energy. Mission complete.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-void-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-solar-blue opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              About AEVUMA
            </span>
          </div>
          <h1 className="text-arctic-white text-4xl font-medium tracking-tight leading-none mb-6 max-w-4xl">
            We are not an energy company. <br />
            <span className="text-solar-blue">
              We are a civilization project.
            </span>
          </h1>
          <p className="text-arctic-white text-lg opacity-50 leading-relaxed max-w-xl">
            Founded in 2019 by scientists and engineers from CERN, NASA, and the
            world's largest energy operators — AEVUMA exists to solve humanity's
            most fundamental problem: energy scarcity.
          </p>
        </div>
      </section>
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div
            className="grid gap-24 items-start"
            style={{ gridTemplateColumns: "1fr 1.5fr" }}
          >
            {/* Kiri — label & judul */}
            <div className="flex flex-col gap-4 sticky top-32">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
                <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                  Our Story
                </span>
              </div>
              <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight">
                Built by scientists. Funded by visionaries.
              </h2>
            </div>

            {/* Kanan — cerita panjang */}
            <div className="flex flex-col gap-6">
              <p className="text-arctic-white text-base opacity-60 leading-relaxed">
                In 2019, Dr. Marcus Vael left his position as Director of Energy
                Research at CERN with a single conviction: that fusion energy —
                long dismissed as "always 30 years away" — was finally within
                reach. He called Dr. Yuki Tanaka, then leading NASA's advanced
                propulsion division, and together they founded AEVUMA Energy
                Systems in Geneva.
              </p>
              <p className="text-arctic-white text-base opacity-60 leading-relaxed">
                Their thesis was simple but radical: don't build one energy
                technology — build three, and engineer them to work as a single
                unified system. Fusion for baseload. Orbital solar for
                continuous harvest. Planetary grid for distribution and storage.
                Together, they form the world's first complete clean energy
                stack.
              </p>
              <p className="text-arctic-white text-base opacity-60 leading-relaxed">
                Today, AEVUMA operates in 18 countries, employs over 12,000
                people, and has delivered clean energy to 1.2 billion people. We
                are Pre-IPO, Series E, valued at $48B — and we are just getting
                started.
              </p>

              {/* Stats kecil di dalam story */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                  <span className="text-arctic-white text-2xl font-medium">
                    2019
                  </span>
                  <span className="text-arctic-white text-xs opacity-40">
                    Year Founded
                  </span>
                </div>
                <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                  <span className="text-arctic-white text-2xl font-medium">
                    Geneva
                  </span>
                  <span className="text-arctic-white text-xs opacity-40">
                    Headquarters
                  </span>
                </div>
                <div className="border border-white/10 rounded-sm p-4 flex flex-col gap-1">
                  <span className="text-arctic-white text-2xl font-medium">
                    12,000+
                  </span>
                  <span className="text-arctic-white text-xs opacity-40">
                    Employees
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="border-t border-white/10 py-24 bg-deep-navy">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Leadership
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight mb-16">
            The team building the future of energy.
          </h2>

          {/* row 1 — 3 person */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {leadership
              .filter((p) => p.row === 1)
              .map((person) => (
                <div
                  key={person.name}
                  className="border border-white/10 rounded-sm p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-200"
                >
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/10" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-arctic-white text-lg font-medium tracking-tight">
                      {person.name}
                    </h3>
                    <span className="text-solar-blue text-xs tracking-wide opacity-80">
                      {person.role}
                    </span>
                  </div>
                  <p className="text-arctic-white text-sm opacity-40 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              ))}
          </div>

          {/* Row 2 — 4 person */}
          <div className="grid grid-cols-4 gap-4">
            {leadership
              .filter((p) => p.row === 2)
              .map((person) => (
                <div
                  key={person.name}
                  className="border border-white/10 rounded-sm p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/10" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-arctic-white text-lg font-medium tracking-tight">
                      {person.name}
                    </h3>
                    <span className="text-solar-blue text-xs tracking-wide opacity-80">
                      {person.role}
                    </span>
                  </div>
                  <p className="text-arctic-white text-sm opacity-40 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Milestones
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight mb-16">
            From lab to planet — our journey.
          </h2>

          {/* Timeline items */}
          <div className="flex flex-col">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className="grid gap-8 py-8 border-b border-white/10 hover:bg-white/2 transition-all duration-200"
                style={{ gridTemplateColumns: "120px 200px 1fr" }}
              >
                {/* Tahun */}
                <span
                  className={`font-mono text-sm font-medium ${
                    parseInt(item.year) > 2026
                      ? "text-arctic-white opacity-30"
                      : "text-arctic-white"
                  }`}
                >
                  {item.year}
                </span>

                {/* Event */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      parseInt(item.year) > 2026
                        ? "bg-white opacity-20"
                        : index === milestones.length - 1
                          ? "bg-plasma-amber"
                          : "bg-fusion-green"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium tracking-wide ${
                      parseInt(item.year) > 2026
                        ? "text-arctic-white opacity-30"
                        : "text-arctic-white"
                    }`}
                  >
                    {item.event}
                  </span>
                </div>

                {/* Deskripsi */}
                <p
                  className={`text-sm leading-relaxed ${
                    parseInt(item.year) > 2026
                      ? "text-arctic-white opacity-20"
                      : "text-arctic-white opacity-50"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8 flex items-end justify-between">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                Join Us
              </span>
            </div>
            <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight">
              Want to be part of the mission?
            </h2>
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
              We're always looking for exceptional people — scientists,
              engineers, operators, and visionaries — who want to work on the
              most important problem of our generation.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="/careers"
              className="bg-solar-blue text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              View Open Roles
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
