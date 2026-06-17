const investors = [
  { name: "SoftBank", sub: "Lead Investor · Series E" },
  { name: "Temasek", sub: "Strategic Partner" },
  { name: "NEOM Capital", sub: "Co-Investor · Series D" },
  { name: "Blackrock", sub: "Institutional Investor" },
];

const clients = [
  { name: "Saudi Aramco", sub: "Energy Infrastructure" },
  { name: "EDF Group", sub: "Grid Partnership" },
  { name: "KEPCO", sub: "Asia Pacific Operations" },
  { name: "Enel SpA", sub: "European Distribution" },
];

export default function Investors() {
  return (
    <section className="bg-void-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
          <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
            Backed By
          </span>
        </div>

        {/* Heading */}
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-arctic-white text-4xl font-medium tracking-tight max-w-md">
            Trusted by the world's most forward-thinking institutions.
          </h2>
          <p className="text-arctic-white text-sm opacity-50 max-w-xs leading-relaxed text-right">
            AEVUMA is backed by sovereign wealth funds, institutional investors,
            and the world's largest energy operators.
          </p>
        </div>

        {/* Grid */}
        <p className="text-arctic-white text-xs tracking-widest uppercase opacity-40 mb-6">
          Investors
        </p>
        <div className="grid grid-cols-4 gap-4 mb-16">
          {investors.map((item) => (
            <div
              key={item.name}
              className="border border-white/10 p-6 rounded-sm flex flex-col gap-2 hover:border-white/20 transition-all duration-200"
            >
              <div className="w-8 h-8 bg-white/5 rounded-sm mb-2" />
              <span className="text-arctic-white text-sm font-medium">
                {item.name}
              </span>
              <span className="text-arctic-white text-xs opacity-40">
                {item.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Client */}
        <p className="text-arctic-white text-xs tracking-widest uppercase opacity-40 mb-6">
          Client
        </p>
        <div className="grid grid-cols-4 gap-4">
          {clients.map((item) => (
            <div
              key={item.name}
              className="border border-white/10 p-6 rounded-sm flex flex-col gap-2 hover:border-white/20 transition-all duration-200"
            >
              <div className="w-8 h-8 bg-white/5 rounded-sm mb-2 " />
              <span className="text-arctic-white text-sm font-medium">
                {item.name}
              </span>
              <span className="text-arctic-white text-xs opacity-40">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
