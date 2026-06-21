import Navbar from "@/components/Navbar";

const fundingRounds = [
  {
    round: "Seed",
    year: "2019",
    amount: "$120M",
    valuation: "$400M",
    lead: "Founders + Angels",
  },
  {
    round: "Series A",
    year: "2020",
    amount: "$400M",
    valuation: "$1.8B",
    lead: "Vantara Capital",
  },
  {
    round: "Series B",
    year: "2022",
    amount: "$600M",
    valuation: "$6B",
    lead: "Hyperion Capital",
  },
  {
    round: "Series C",
    year: "2022",
    amount: "$600M",
    valuation: "$12B",
    lead: "Meridian Sovereign",
  },
  {
    round: "Series D",
    year: "2023",
    amount: "$3.4B",
    valuation: "$24B",
    lead: "Stonebridge Group",
  },
  {
    round: "Series E",
    year: "2025",
    amount: "$2.4B",
    valuation: "$48B",
    lead: "Orion Equity",
  },
];

const ipoRoadmap = [
  {
    quarter: "Q3 2025",
    event: "Series E Closed",
    status: "done",
    desc: "Final private round closed at $48B valuation.",
  },
  {
    quarter: "Q4 2025",
    event: "Auditor Engagement",
    status: "done",
    desc: "Big Four auditor engaged for IPO-readiness audit.",
  },
  {
    quarter: "Q1 2026",
    event: "S-1 Filing",
    status: "done",
    desc: "S-1 registration statement filed with the SEC.",
  },
  {
    quarter: "Q2 2026",
    event: "Roadshow",
    status: "current",
    desc: "Global investor roadshow across 12 cities.",
  },
  {
    quarter: "Q3 2026",
    event: "NYSE Listing",
    status: "upcoming",
    desc: "AEVUMA lists on the New York Stock Exchange under ticker AVM.",
  },
  {
    quarter: "Q4 2026",
    event: "Post-IPO Lock-up End",
    status: "upcoming",
    desc: "180-day lock-up period ends for early investors and employees.",
  },
];

const downloads = [
  { title: "Investor Deck 2026", size: "4.2 MB", format: "PDF" },
  { title: "Annual Report 2025", size: "8.7 MB", format: "PDF" },
  { title: "Impact Report 2025", size: "3.1 MB", format: "PDF" },
  { title: "S-1 Filing", size: "12.4 MB", format: "PDF" },
];

const statusColor = {
  done: "bg-fusion-green",
  current: "bg-plasma-amber",
  upcoming: "bg-white/20",
};

const statusLabel = {
  done: "Completed",
  current: "In Progress",
  upcoming: "Upcoming",
};

export default function InvestorsPage() {
  return (
    <main className="bg-void-black">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-24">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-solar-blue opacity-8 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Investor Relations
            </span>
          </div>
          <h1 className="text-arctic-white text-7xl font-medium tracking-tight leading-none mb-6 max-w-4xl">
            Built for the long term. <br />
            <span className="text-solar-blue">Priced for the future.</span>
          </h1>
          <p className="text-arctic-white text-lg opacity-50 leading-relaxed max-w-xl">
            AEVUMA is preparing for its NYSE listing in Q3 2026. We invite
            institutional investors, family offices, and sovereign wealth funds
            to review our financials and join us for the next chapter.
          </p>
        </div>
      </section>

      {/* ── Key Financials ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Key Financials
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                label: "Current Valuation",
                value: "$48B",
                sub: "Pre-IPO · Series E",
              },
              {
                label: "Total Raised",
                value: "$7.1B",
                sub: "Across 6 funding rounds",
              },
              {
                label: "Annual Revenue",
                value: "$3.2B",
                sub: "FY 2025 — audited",
              },
              {
                label: "Revenue Growth",
                value: "184%",
                sub: "YoY — FY2024 to FY2025",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-white/10 rounded-sm p-8 flex flex-col gap-2"
              >
                <span className="text-arctic-white text-xs tracking-widest uppercase opacity-30">
                  {item.label}
                </span>
                <span className="text-arctic-white text-4xl font-medium tracking-tight">
                  {item.value}
                </span>
                <span className="text-arctic-white text-xs opacity-40">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Funding Rounds ── */}
      <section className="border-t border-white/10 py-24 bg-deep-navy">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Funding History
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight mb-16">
            From $120M seed to $48B valuation.
          </h2>

          {/* Header */}
          <div
            className="grid gap-8 pb-4 border-b border-white/10 mb-2"
            style={{ gridTemplateColumns: "120px 80px 120px 160px 1fr" }}
          >
            {["Round", "Year", "Amount", "Valuation", "Lead Investor"].map(
              (h) => (
                <span
                  key={h}
                  className="text-arctic-white text-xs tracking-widest uppercase opacity-30"
                >
                  {h}
                </span>
              ),
            )}
          </div>

          {fundingRounds.map((row) => (
            <div
              key={row.round}
              className="grid gap-8 py-6 border-b border-white/10 hover:bg-white/2 transition-all duration-200"
              style={{ gridTemplateColumns: "120px 80px 120px 160px 1fr" }}
            >
              <span className="text-arctic-white text-sm font-medium">
                {row.round}
              </span>
              <span className="text-arctic-white text-sm opacity-50 font-mono">
                {row.year}
              </span>
              <span className="text-arctic-white text-sm opacity-60">
                {row.amount}
              </span>
              <span className="text-arctic-white text-sm opacity-60">
                {row.valuation}
              </span>
              <span className="text-arctic-white text-sm opacity-60">
                {row.lead}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── IPO Roadmap ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              IPO Roadmap
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight mb-16">
            Our path to the NYSE.
          </h2>
          <div className="flex flex-col">
            {ipoRoadmap.map((item) => (
              <div
                key={item.quarter}
                className="grid gap-8 py-8 border-b border-white/10 items-center"
                style={{ gridTemplateColumns: "140px 180px 120px 1fr" }}
              >
                <span className="text-arctic-white font-mono text-sm opacity-60">
                  {item.quarter}
                </span>
                <span className="text-arctic-white text-sm font-medium">
                  {item.event}
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${statusColor[item.status]}`}
                  />
                  <span className="text-arctic-white text-xs opacity-50">
                    {statusLabel[item.status]}
                  </span>
                </div>
                <p className="text-arctic-white text-sm opacity-40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Downloads ── */}
      <section className="border-t border-white/10 py-24 bg-deep-navy">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Documents
            </span>
          </div>
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight mb-16">
            Investor documents.
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {downloads.map((doc) => (
              <div
                key={doc.title}
                className="border border-white/10 rounded-sm p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-200 group cursor-pointer"
              >
                <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center">
                  <span className="text-arctic-white text-xs opacity-40 font-mono">
                    {doc.format}
                  </span>
                </div>
                <h3 className="text-arctic-white text-base font-medium tracking-tight">
                  {doc.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-arctic-white text-xs opacity-30">
                    {doc.size}
                  </span>
                  <span className="text-solar-blue text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                    Download →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-solar-blue py-24">
        <div className="max-w-7xl mx-auto px-8 flex items-end justify-between">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
              <span className="text-white text-xs tracking-widest uppercase opacity-60">
                Get Involved
              </span>
            </div>
            <h2 className="text-white text-5xl font-medium tracking-tight leading-tight">
              Ready to invest in the future of energy?
            </h2>
            <p className="text-white text-base opacity-70 leading-relaxed max-w-lg">
              Our Series E round is closing in Q4 2026. Contact our investor
              relations team to request a full briefing, financial model, and
              access to our data room.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="/contact"
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
      </section>
    </main>
  );
}
