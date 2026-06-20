import Navbar from "@/components/Navbar";

const roles = [
  {
    title: "Senior Fusion Engineer",
    dept: "Engineering",
    location: "Geneva, CH",
    type: "Full-time",
  },
  {
    title: "Orbital Systems Architect",
    dept: "Engineering",
    location: "Houston, TX",
    type: "Full-time",
  },
  {
    title: "Planetary Grid Data Scientist",
    dept: "Data & AI",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "VP of Investor Relations",
    dept: "Finance",
    location: "Dubai, UAE",
    type: "Full-time",
  },
  {
    title: "Head of Sustainability",
    dept: "Policy",
    location: "Geneva, CH",
    type: "Full-time",
  },
  {
    title: "Senior Product Manager",
    dept: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Energy Infrastructure Lead",
    dept: "Operations",
    location: "Houston, TX",
    type: "Full-time",
  },
  {
    title: "Full Stack Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Communications Director",
    dept: "Marketing",
    location: "Geneva, CH",
    type: "Full-time",
  },
];

const benefits = [
  {
    title: "Equity for Everyone",
    desc: "Every AEVUMA employee receives meaningful equity — from day one.",
  },
  {
    title: "Global Mobility",
    desc: "Work from Geneva, Houston, Dubai, or fully remote. Relocation supported.",
  },
  {
    title: "Research Budget",
    desc: "$10,000 annual budget for conferences, courses, and personal research projects.",
  },
  {
    title: "Health & Wellbeing",
    desc: "Comprehensive health coverage for you and your family, in every country we operate.",
  },
  {
    title: "Mission-Driven Work",
    desc: "Every role at AEVUMA directly contributes to clean energy for 4 billion people.",
  },
  {
    title: "Sabbatical Program",
    desc: "Six weeks paid sabbatical after every four years — to rest, explore, or create.",
  },
];

const deptColors = {
  Engineering: "text-solar-blue",
  "Data & AI": "text-plasma-amber",
  Finance: "text-fusion-green",
  Policy: "text-fusion-green",
  Product: "text-plasma-amber",
  Operations: "text-solar-blue",
  Marketing: "text-arctic-white",
};

export default function CareersPage() {
  return (
    <main className="bg-void-black">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-24">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-fusion-green opacity-5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-solar-blue opacity-8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Careers at AEVUMA
            </span>
          </div>
          <h1 className="text-arctic-white text-5xl font-medium tracking-tight leading-none mb-6 max-w-4xl">
            Work on the most important <br />
            <span className="text-fusion-green">problem on Earth.</span>
          </h1>
          <p className="text-arctic-white text-lg opacity-50 leading-relaxed max-w-xl">
            We're building a team of exceptional humans — scientists, engineers,
            operators, and thinkers — who believe energy abundance is not just
            possible, but inevitable.
          </p>
        </div>
      </section>

      {/* ── Culture ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div
            className="grid gap-24 items-start"
            style={{ gridTemplateColumns: "1fr 1.5fr" }}
          >
            <div className="flex flex-col gap-4 sticky top-32">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
                <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                  Our Culture
                </span>
              </div>
              <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight">
                High standards. Deep purpose.
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-arctic-white text-base opacity-60 leading-relaxed">
                At AEVUMA, we believe that the best work happens when brilliant
                people are given hard problems, real ownership, and the
                resources to solve them. We don't hire for roles — we hire for
                impact.
              </p>
              <p className="text-arctic-white text-base opacity-60 leading-relaxed">
                Our culture is built on three principles: radical transparency,
                scientific rigor, and long-term thinking. We make decisions on
                decade-long timescales — not quarterly cycles. And we hold each
                other to the highest standards, because the mission demands it.
              </p>
              <p className="text-arctic-white text-base opacity-60 leading-relaxed">
                We are remote-friendly, globally distributed, and deeply
                collaborative. Whether you're in Geneva, Houston, Dubai, or
                anywhere else — you'll work alongside some of the most talented
                people on the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="border-t border-white/10 py-24 bg-deep-navy">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Benefits
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight mb-16">
            Built for humans, not headcount.
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 rounded-sm p-8 flex flex-col gap-3 hover:border-white/20 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
                <h3 className="text-arctic-white text-lg font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-arctic-white text-sm opacity-40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
                <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                  Open Roles
                </span>
              </div>
              <h2 className="text-arctic-white text-4xl font-medium tracking-tight">
                {roles.length} positions available.
              </h2>
            </div>
            <span className="text-arctic-white text-sm opacity-40">
              Updated June 2026
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="border border-white/10 rounded-sm p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-200 group"
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-xs tracking-widest uppercase opacity-70 ${deptColors[role.dept] || "text-arctic-white"}`}
                  >
                    {role.dept}
                  </span>
                  <h3 className="text-arctic-white text-lg font-medium tracking-tight leading-snug">
                    {role.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <span className="text-arctic-white text-xs opacity-40">
                    {role.location}
                  </span>
                  <span className="text-arctic-white text-xs opacity-40">
                    ·
                  </span>
                  <span className="text-arctic-white text-xs opacity-40">
                    {role.type}
                  </span>
                </div>
                <a
                  href="/contact"
                  className="text-solar-blue text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Apply Now →
                </a>
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
              <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
              <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                Don't See Your Role?
              </span>
            </div>
            <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight">
              We hire for talent, not just open positions.
            </h2>
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
              If you're exceptional at what you do and believe in the mission,
              send us a message. We create roles for the right people.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="/contact"
              className="bg-solar-blue text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              Send Open Application
            </a>
            <a
              href="/about"
              className="text-arctic-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide border border-white/20 hover:border-white/50 transition-all duration-200"
            >
              Learn About Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
