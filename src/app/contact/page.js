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
          <h1 className="text-arctic-white text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-none mb-6 max-w-3xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
                <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
                  Send a Message
                </span>
              </div>
              <h2 className="text-arctic-white text-4xl font-medium tracking-tight leading-tight">
                Tell us about your project or inquiry.
              </h2>
              <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
                Our team typically responds within 24 hours. For urgent matters,
                please contact the relevant office directly.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
                  <span className="text-arctic-white text-xs opacity-50 tracking-wide">
                    Average response time: 4 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
                  <span className="text-arctic-white text-xs opacity-50 tracking-wide">
                    Available Monday – Friday, 09:00 – 18:00 CET
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
                  <span className="text-arctic-white text-xs opacity-50 tracking-wide">
                    All inquiries handled with full confidentiality
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-arctic-white text-xs opacity-40 tracking-widest uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Anderson"
                    className="bg-transparent border border-white/10 rounded-sm px-4 py-3 text-arctic-white text-sm placeholder:opacity-20 focus:outline-none focus:border-white/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-arctic-white text-xs opacity-40 tracking-widest uppercase">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-transparent border border-white/10 rounded-sm px-4 py-3 text-arctic-white text-sm placeholder:opacity-20 focus:outline-none focus:border-white/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-arctic-white text-xs opacity-40 tracking-widest uppercase">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Compant Name"
                    className="bg-transparent border border-white/10 rounded-sm px-4 py-3 text-arctic-white text-sm placeholder:opacity-20 focus:outline-none focus:border-white/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-arctic-white text-xs opacity-40 tracking-widest uppercase">
                    Inquiry Type
                  </label>
                  <select className="bg-void-black border border-white/10 rounded-sm px-4 py-3 text-arctic-white text-sm opacity-60 focus:outline-none focus:border-white/30 transition-all duration-200">
                    <option value="">Select type</option>
                    <option value="investor">Investor Relation</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-2">
                <label className="text-arctic-white text-xs opacity-40 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  className="bg-transparent border border-white/10 rounded-sm px-4 py-3 text-arctic-white text-sm placeholder:opacity-20 focus:outline-none focus:border-white/30 transition-all duration-200 resize-none"
                />
              </div>

              <button className="bg-solar-blue text-white text-sm font-medium px-8 py-3.5 rounded-sm tracking-wide hover:opacity-90 transition-opacity duration-200 text-left mt-2">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Offices ── */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-arctic-white text-xs tracking-widest uppercase opacity-30 mb-10">
            Global Offices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((office) => (
              <div
                key={office.city}
                className="border border-white/10 rounded-sm p-8 flex flex-col gap-4 hover:border-white/20 transition-all duration-200"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-arctic-white text-2xl font-medium tracking-tight">
                    {office.city}
                  </h3>
                  <span className="text-arctic-white text-xs opacity-40 tracking-wide">
                    {office.role}
                  </span>
                </div>
                <p className="text-arctic-white text-sm opacity-40 leading-relaxed">
                  {office.address}
                </p>
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/10">
                  <a
                    href={`mailto:${office.email}`}
                    className="text-arctic-white text-sm opacity-50 hover:opacity-100 transition-opacity duration-200"
                  >
                    {office.email}
                  </a>
                  <span className="text-arctic-white text-sm opacity-30">
                    {office.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer disclaimer ── */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-arctic-white text-xs opacity-30 tracking-wide">
            © 2026 AEVUMA Energy Systems. All rights reserved.
          </span>
          <span className="text-arctic-white text-xs opacity-30 tracking-wide">
            This website is a fictional portfolio project created for
            demonstration purposes only.
          </span>
        </div>
      </div>
    </main>
  );
}
