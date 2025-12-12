import { ArrowUpRight } from 'lucide-react';
import collegeImg from "../assets/icons/images/college.jpg";

export const WhyJoinSection = () => {
  return (
    <section className="py-20 bg-white " id="why-join">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full">
          <div className="absolute bottom-5 left-0 w-full h-full bg-[#0A90E9] rounded-2xl translate-x-4 translate-y-8"></div>
          <img
            src={collegeImg}
            alt="College students"
            className="relative z-10 w-full rounded-2xl shadow-lg object-cover h-[540px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-black">
            Why Join Our College
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>

          {/* BUTTON */}
          <button
            className="
              flex items-center gap-2 bg-[#FFEC22] text-black font-medium 
              px-6 py-3 rounded-full 
              transition-all duration-300 ease-in-out
              shadow-md hover:shadow-xl hover:-translate-y-1
            "
          >
            <span>Start Your Career</span>
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200"
              aria-hidden="true"
            >
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
