"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 relative z-50  ${scrolled ? "backdrop-blur-md bg-void-black/70 border-b border-white/10" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-solar-blue w-8 h-8 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-widest">
              AE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-arctic-white text-sm font-medium tracking-widest uppercase">
              Aevum
            </span>
            <span className="text-arctic-white text-xs tracking-wider opacity-50">
              Energy System
            </span>
          </div>
        </div>

        {/* Navlinks */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <a
              href="/technology"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="/impact"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Impact
            </a>
          </li>
          <li>
            <a
              href="/onvestors"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Investors
            </a>
          </li>
          <li>
            <a
              href="/careers"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              About
            </a>
          </li>
        </ul>
        {/* CTA action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="text-arctic-white text-sm opacity-50 hover:opacity-100 tracking-wide"
          >
            Investor Portal
          </a>
          <a
            href="#"
            className="bg-solar-blue text-white text-sm px-5 py-2.5 rounded-sm tracking-wide hover:opacity-90 "
          >
            Get in Touch
          </a>
        </div>
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block w-6 h-px bg-arctic-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-arctic-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-arctic-white transition-all duration-300 ${mobileOpen ? "-rotate-45 translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-void-black/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-8  py-8 gap-6">
            <ul>
              <li>
                <a
                  href="/technology"
                  className="text-arctic-white text-lg opacity-70 hover:opacity-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="/impact"
                  className="text-arctic-white text-lg opacity-70 hover:opacity-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="/investors"
                  className="text-arctic-white text-lg opacity-70 hover:opacity-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="text-arctic-white text-lg opacity-70 hover:opacity-100"
                  onClick={() => setMobileOpen(false)}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-arctic-white text-lg opacity-70 hover:opacity-100"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a
                href="/investors"
                className="text-arctic-white text-sm opacity-70 hover:opacity-100 tracking-wide"
              >
                Investor Portal
              </a>
              <a
                href="/contact"
                className="bg-solar-blue text-white text-sm font-medium px-5 py-3 rounded-sm text-center tracking-wide"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
