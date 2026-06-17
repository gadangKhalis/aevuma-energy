const investors = [
  {
    name: "Vantara Capital",
    sub: "Lead Investor · Series E",
    style: "text-2xl font-light tracking-widest",
  },
  {
    name: "Meridian Sovereign",
    sub: "Strategic Partner",
    style: "text-2xl font-semibold tracking-tight",
  },
  {
    name: "Aurelion Ventures",
    sub: "Co-Investor · Series D",
    style: "text-xl font-medium tracking-wide",
  },
  {
    name: "Stonebridge Group",
    sub: "Institutional Investor",
    style: "text-2xl font-bold tracking-tighter",
  },
  {
    name: "Crestline Fund",
    sub: "Series C · Series D",
    style: "text-xl font-light tracking-wider",
  },
  {
    name: "Hyperion Capital",
    sub: "Growth Equity Partner",
    style: "text-2xl font-semibold tracking-wide",
  },
  {
    name: "Orion Equity",
    sub: "Co-Lead · Series E",
    style: "text-xl font-medium tracking-widest",
  },
];

const clients = [
  {
    name: "Helios Energy Corp",
    sub: "Energy Infrastructure",
    style: "text-xl font-semibold tracking-wide",
  },
  {
    name: "Nordic Grid Alliance",
    sub: "Grid Partnership",
    style: "text-xl font-light tracking-widest",
  },
  {
    name: "Pacifica Power",
    sub: "Asia Pacific Operations",
    style: "text-xl font-bold tracking-tight",
  },
  {
    name: "Volterra Systems",
    sub: "European Distribution",
    style: "text-xl font-medium tracking-wider",
  },
  {
    name: "Solaris Dynamics",
    sub: "Solar Integration",
    style: "text-xl font-semibold tracking-wide",
  },
  {
    name: "Kratos Energy",
    sub: "Defense & Civil Power",
    style: "text-xl font-light tracking-widest",
  },
  {
    name: "Pinnacle Grid Co",
    sub: "National Grid Operator",
    style: "text-xl font-bold tracking-tighter",
  },
  {
    name: "Stratum Power",
    sub: "Industrial Energy",
    style: "text-xl font-medium tracking-wide",
  },
  {
    name: "Celestara Utilities",
    sub: "Public Infrastructure",
    style: "text-xl font-semibold tracking-tight",
  },
  {
    name: "Dawncore Energy",
    sub: "Emerging Markets",
    style: "text-xl font-light tracking-wider",
  },
  {
    name: "Ironveil Systems",
    sub: "Grid Security",
    style: "text-xl font-bold tracking-wide",
  },
  {
    name: "Luminary Power Group",
    sub: "Renewable Integration",
    style: "text-xl font-medium tracking-widest",
  },
];

const investorsDup = [...investors, ...investors];
const clientsDup = [...clients, ...clients];

export default function Investors() {
  return (
    <section className="bg-void-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-arctic-white text-5xl font-medium tracking-tight max-w-2xl leading-tight mb-4">
            Backed by the world's most forward-thinking institutions.
          </h2>
          <p className="text-arctic-white text-sm opacity-40 tracking-wide">
            This website is a fictional portfolio project created for
            demonstration purposes only.
          </p>
        </div>

        {/* Invesrtor Marquee */}
        <div className="mb-4">
          <p className="text-arctic-white text-xs tracking-widest uppercase opacity-40 px-8 mb-6">
            Investors
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-marquee-left">
              {investorsDup.map((item, index) => (
                <div key={index} className="flex flex-col gap-1 shrink-0">
                  <span
                    className={`text-arctic-white opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default ${item.style}`}
                  >
                    {item.name}
                  </span>
                  <span className="text-arctic-white text-xs opacity-30 tracking-wide">
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separating Line */}
        <div className="w-full h-px bg-white opacity-10 my-12" />

        {/* Client Marquee */}
        <p className="text-arctic-white text-xs tracking-widest uppercase opacity-30 px-8 mb-6">
          Client
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee-right">
            {clientsDup.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 shrink-0">
                <span
                  className={`text-arctic-white opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default ${item.style}`}
                >
                  {item.name}
                </span>
                <span className="text-arctic-white text-xs opacity-30 tracking-wide">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
