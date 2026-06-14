export default function Hero() {
  return (
    <section className="relative min-h-screen bg-void-black flex items-center justify-center overflow-hidden">
      {/* background - gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-solar-blue opacity-10 blur-[120px] rounded-full pointer-event-none" />
      {/* COntent */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-5x1 mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-fusion-green" />
          <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
            Series E · Pre-IPO · Est. 2019{" "}
          </span>
        </div>

        <h1 className="text-arctic-white text-6x1 font-medium tracking-tight leading-tight mb-6">
          Energy Without <br />
          <span className="text-solar-blue">Limits.</span>
        </h1>
        <p className="text-arctic-white ">SubHeadling</p>
      </div>
    </section>
  );
}
