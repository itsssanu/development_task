import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../assets/icons/images/slider1.jpg";
import slider2 from "../assets/icons/images/slider2.jpg";
import slider3 from "../assets/icons/images/slider3.jpg";
import slider4 from "../assets/icons/images/slider4.jpg";
import slider5 from "../assets/icons/images/slider5.jpg";

const slides = [
  { id: 1, image: slider1, label: "Central Library" },
  { id: 2, image: slider2, label: "Central Library" },
  { id: 3, image: slider3, label: "Central Library" },
  { id: 4, image: slider4, label: "Central Library" },
  { id: 5, image: slider5, label: "Central Library" },
];

export const CarouselSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#0B4A73] via-[#0B5580] to-[#0B6091] overflow-x-hidden" id="carousel">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-[#0B4A73] text-sm font-medium">Our Facility</span>
          </div>

          <h2 className="text-4xl md:text-5xl text-white font-light">
            Empowering Future Healthcare Professionals
          </h2>

          {/* Custom Nav Buttons */}
          <div className="absolute z-0 right-6 md:right-10 top-full mt-6 mb-8 flex gap-3">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-[#FFD812] flex items-center justify-center shadow-xl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#0B4A73" strokeWidth="2.5" />
              </svg>
            </button>

            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="#0B4A73" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: true },
            1024: { slidesPerView: 3, centeredSlides: true },
            1280: { slidesPerView: 4, centeredSlides: false },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="!flex !justify-center px-2">
              <div className="group rounded-2xl overflow-hidden w-full max-w-sm">
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />

                  <div className="absolute left-5 bottom-5 right-5 flex items-center gap-3">
                    <div className="h-1 w-16 bg-[#FFD812] rounded-full"></div>
                    <span className="text-white text-lg font-normal">
                      {slide.label}
                    </span>
                    <div className="h-1 flex-1 bg-[#FFD812] rounded-full"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PAGINATION BELOW IMAGES */}
        <div className="custom-pagination mt-4 flex justify-center gap-2"></div>
      </div>

      <style>{`

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.4;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
        }

        .swiper-pagination-bullet-active {
          background: #FCD34D !important;
          width: 20px !important;
          border-radius: 6px !important;
        }
      `}</style>
    </section>
  );
};

export default CarouselSection;
