import banner from "../assets/icons/images/banner.jpg";

export const HeroSection = () => {
  return (
    <section className="w-full px-4 py-8" id="hero">
      <div
        className="mx-auto  rounded-2xl overflow-hidden shadow-lg relative"
        style={{
          height: "320px",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 md:px-12 lg:px-16 py-10 md:py-12 w-full">
            <div className="max-w-2xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight">
                Careers
              </h1>

              <div className="mt-6">
                <div className="inline-flex items-center bg-white/95 text-sm rounded-full px-4 py-2 shadow-sm">
                  <span className="text-xs font-semibold text-gray-700 mr-3 uppercase tracking-wide">Home</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block mr-3" />
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Careers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
