export default function Hero() {
  return (
    <section className="relative min-h-screen bg-void-black flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-solar-blue opacity-10 blur-[120px] rounded-full pointer-event-none" />
      <div className="relative x-10">
        <p className="text-arctic-white">Konten Hero</p>
      </div>
    </section>
  );
}
