"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-void-black/70 border-b border-white/10" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between px-8 py-4">
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
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Impact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Investors
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-arctic-white text-sm tracking-wide opacity-70 hover:opacity-100"
            >
              About
            </a>
          </li>
        </ul>
        {/* CTA action */}
        <div>
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
      </nav>
    </header>
  );
}
