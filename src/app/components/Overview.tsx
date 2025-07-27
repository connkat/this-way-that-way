export default function Overview() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Background image grid */}
      <div className="absolute inset-0 grid grid-cols-4 gap-4 opacity-40">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-full h-64 bg-gray-800"></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-4">
        <h1
          className="font-standard-bold text-[5rem] leading-tight mb-6 text-center"
          style={{ color: "#F8F269" }}
        >
          A monthly interview series
          <br />
          <span className="font-standard-bold" style={{ color: "#DE909E" }}>
            about taking a distinctive path
          </span>
          <br />
          in career and life.
        </h1>
        <div className="flex gap-6 mt-8">
          <a
            href="#events"
            className="px-8 py-3 rounded-lg font-fine-bold text-black transition-transform hover:scale-105"
            style={{ backgroundColor: "#EACF7F" }}
          >
            View Events
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg font-fine-bold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "#3F6FC4" }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
