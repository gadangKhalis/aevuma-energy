const navLinks = [
  { label: "Technology", href: "#" },
  { label: "Impact", href: "#" },
  { label: "Investors", href: "#" },
  { label: "Careers", href: "#" },
  { label: "About", href: "#" },
];
const contactLinks = [
  { label: "Geneva HQ", value: "geneva@aevuma.energy" },
  { label: "Houston Operations", value: "houston@aevuma.energy" },
  { label: "Dubai Office", value: "dubai@aevuma.energy" },
  { label: "Press Inquiries", value: "press@aevuma.energy" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Investor Disclosures", href: "#" },
];
export default function Footer() {
  return (
    <footer className="bg-void-black border-t border-white/10">
      {/* Top, Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
        >
          {/* 1st coloumn */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-solar-blue w-8 h-8 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-widest">
                  AE
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-arctic-white text-sm font-medium tracking-widest uppercase">
                  Aevuma
                </span>
                <span className="text-arctic-white text-xs tracking-wider uppercase opacity-50">
                  Energy System
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed max-w-xs">
              Building the energy infrastructure for the next century. Clean,
              abundant, and available to everyone on Earth.
            </p>
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
              <span className="text-arctic-white text-xs opacity-40 tracking-wide">
                All System Operational
              </span>
            </div>
          </div>

          {/* Coloumn 2 */}
          <div className="flex flex-col gap-4">
            <p className="text-arctic-white text-xs tracking-widest uppercase opacity-30 mb-2">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  "text-arctic-white text-sm opacity-50 hover:opacity-100 transition-opacity duration-200 tracking-wide"
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Coloumn 3 */}
          <div className="flex flex-col gap-4">
            <p className="text-arctic-white text-xs tracking-widest uppercase opacity-30 mb-2">
              Contact
            </p>
            {contactLinks.map((item) => (
              <div key={item.label} className="flex flex.com gap-0.5">
                <span className="text-arctic-white text-xs tracking-wide opacity-30">
                  {item.label}
                </span>
                <a
                  href={`mailto:${item.value}`}
                  className="text-arctic-white text-sm opacity-50 hover:opacity-100 transition-opacity duration-200"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Coloumn 4 */}
          <div className="flex flex-col gap-4">
            <p className="text-arctic-white text-xs tracking-widest uppercase opacity-30 mb-2">
              Legal
            </p>
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-arctic-white text-sm opacity-50 hover:opacity-100 transition-opacity duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <span className="text-arctic-white text-xs opacity-30 tracking-wide">
            © 2026 AEVUMA Energy Systems. All rights reserved.
          </span>
          <span className="text-arctic-white text-xs opacity-30 tracking-wide text-right max-w-sm">
            This website is a fictional portfolio project created for
            demonstration purposes only.
          </span>
        </div>
      </div>
    </footer>
  );
}
