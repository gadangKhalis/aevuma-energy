import Navbar from "@/components/Navbar";

const offices = [
  {
    city: "Geneva",
    role: "Global Headquarters",
    address: "Route de Pre-Bois 20, 1215 Geneva, Switzerland",
    email: "geneva@aevuma.energy",
    phone: "+41 22 000 0000",
  },
  {
    city: "Houston",
    role: "Operations Center",
    address: "1600 Smith Street, Houston, TX 77002, USA",
    email: "houston@aevuma.energy",
    phone: "+1 713 000 0000",
  },
  {
    city: "Dubai",
    role: "Middle East & Asia Hub",
    address: "DIFC Gate Avenue, Dubai, UAE",
    email: "dubai@aevuma.energy",
    phone: "+971 4 000 0000",
  },
];

const inquiries = [
  {
    type: "Investor Relations",
    desc: "Series E funding, financial reports, and IPO roadmap.",
    email: "investors@aevuma.energy",
    color: "bg-solar-blue",
  },
  {
    type: "Partnership",
    desc: "Energy infrastructure deployment and grid integration.",
    email: "partners@aevuma.energy",
    color: "bg-plasma-amber",
  },
  {
    type: "Press & Media",
    desc: "Press releases, media kits, and interview requests.",
    email: "press@aevuma.energy",
    color: "bg-fusion-green",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-void-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-24">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-solar-blue opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Contact Us
            </span>
          </div>
          <h1 className="text-arctic-white text-7xl font-medium tracking-tight leading-none mb-6 max-w-3xl">
            Let's build the future <br />
            <span className="text-solar-blue">together.</span>
          </h1>
          <p className="text-arctic-white text-lg opacity-50 leading-relaxed max-w-xl">
            Whether you're an investor, a potential partner, or a journalist —
            we'd love to hear from you. Reach out to the right team directly.
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-white/10">
        <p className="text-arctic-white text-xs tracking-widest uppercase opacity-30 mb-10">
          What can we help you with?
        </p>
        <div className="grid grid-cols-3 gap-4">
          {inquiries.map((item) => (
            <div
              key={item.type}
              className="border border-white/10 rounded-sm p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-200"
            >
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <h3 className="text-arctic-white text-xl font-medium tracking-tight">
                {item.type}
              </h3>
              <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
                {item.desc}
              </p>
              <a
                href={`mailto:${item.email}`}
                className="text-arctic-white text-sm opacity-50 hover:opacity-100 transition-opacity duration-200 mt-auto"
              >
                {item.email} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
    </main>
  );
}
