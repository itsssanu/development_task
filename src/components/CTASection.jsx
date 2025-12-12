import { ctaData } from "../data/mock";

export const CTASection = () => {
  return (
    <section className="w-full py-16 px-4" id="cta">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FFD812] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shadow-sm">

          {/* Left */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              {ctaData.title}
            </h2>

            <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              {ctaData.subtitle}
            </h2>

            <p className="text-base md:text-base text-gray-900 opacity-90 leading-relaxed">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hac arcu primis hac in senectus sit penatibus. Efficitur rutrum pellentesque
            </p>
          </div>

          {/* Right */}
          <div className="md:w-auto w-full flex md:justify-end">
            <button
              className="
                bg-white text-gray-900 font-medium rounded-full
                px-16 py-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {ctaData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
