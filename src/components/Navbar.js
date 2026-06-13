export default function Navbar() {
  return (
    <header className="bg-deep-navy">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex item-center gap-3">
          <div className="bg-solar-blue w-8 h-8 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-widest">
              AE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-arctic-white text-sm font-medium tracking-widest uppercase">
              Aevum
            </span>
            <span className="text-arctic-white test-xs tracking-wider opacity-50">
              Energy System
            </span>
          </div>
        </div>

        <p className="text-arctic-white">Nav Links</p>
        <p className="text-arctic-white">CTA Button</p>
      </nav>
    </header>
  );
}
