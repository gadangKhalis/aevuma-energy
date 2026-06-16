export default function Mission() {
  return (
    <section className="bg-deep-navy py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Mission Statement */}
        <div className="max-w-3xl mb-24">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-plasma-amber" />
            <span className="text-arctic-white text-xs tracking-widest uppercase opacity-60">
              Our Mission
            </span>
          </div>

          {/* Big Text */}
          <h2 className="text-arctic-white text-5xl font-medium tracking-tight leading-tight mb-6">
            We exist to make clean, abundant energy a basic right — not a
            privilege.
          </h2>

          {/* Small Text */}
          <p className="text-arctic-white text-base opacity-50 leading-relaxed max-w-xl">
            For too long, energy access has been dictated by geography and
            politics. AEVUMA is building the infrastructure to change that —
            permanently.
          </p>
        </div>

        {/* Technology Review */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-void-black border-white/10 p-8 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-solar-blue/10 border border-solar-blue/20 rounded-sm flex items-center justify-center">
              <span className="text-solar-blue text-lg">⚛</span>
            </div>
            <h3 className="text-arctic-white text-xl font-medium tracking-tight">
              Fusion Reactors
            </h3>
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
              Our tokamak-based reactors produce net-positive energy at
              commercial scale — clean, safe, and available 24/7 regardless of
              weather conditions.
            </p>
            <a
              href="#"
              className="text-solar-blue text-sm tracking-wide mt-auto hover:opacity-70 transition-opacity duration-200"
            >
              Learn more →
            </a>
          </div>

          {/* Card 2 - Orbital Solar */}
          <div className="bg-void-black border border-white/10 p-8 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-plasma-amber/10 border border-plasma-amber/20 rounded-sm flex items-center justify-center">
              <span className="text-plasma-amber text-lg">☀</span>
            </div>
            <h3 className="text-arctic-white text-xl font-medium tracking-tight">
              Orbital Solar
            </h3>
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
              Solar arrays positioned in geostationary orbit collect energy 24
              hours a day, beaming it wirelessly to ground stations across six
              continents.
            </p>
            <a
              href="#"
              className="text-plasma-amber text-sm tracking-wide mt-auto hover:opacity-70 transition-opacity duration-200"
            >
              Learn more →
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-void-black border border-white/10 p-8 rounded-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-fusion-green/10 border border-fusion-green/20 rounded-sm flex items-center justify-center">
              <span className="text-fusion-green text-lg">⚡</span>
            </div>
            <h3 className="text-arctic-white text-xl font-medium tracking-tight">
              Planetary Grid
            </h3>
            <p className="text-arctic-white text-sm opacity-50 leading-relaxed">
              A planetary-scale battery storage network that stabilizes energy
              supply across regions — eliminating blackouts and reducing
              transmission losses by 60%.
            </p>
            <a
              href="#"
              className="text-fusion-green text-sm tracking-wide mt-auto hover:opacity-70 transition-opacity duration-200"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
