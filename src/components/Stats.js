const stats = [
  { number: "4B+", label: "People Powered by 2045" },
  { number: "$48B", label: "Company Valuation" },
  { number: "18", label: "Countries of Operation" },
  { number: "12,000+", label: "Global Employees" },
];

export default function Stats() {
  return (
    <section className="bg-void-black py-24 border-t border-white/10">
      <div className="max-w-7x1 mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.number} className="flex items-center ">
              <div className="flex flex-col items-center text-center flex-1">
                <span className="text-arctic-white text-4x1 text-5xl font-medium tracking-tight mb-2">
                  {stat.number}
                </span>
                <span className="text-arctic-white text-sm opacity-50 tracking-wide">
                  {stat.label}
                </span>
              </div>

              {index < stats.length - 1 && (
                <div className="hidden lg:block w-px h-12 bg-white opacity-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
