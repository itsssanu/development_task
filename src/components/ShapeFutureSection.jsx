import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ShapeFutureSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900">
          Shape The Future Of Healthcare Education
        </h1>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Teaching Card */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Teaching
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem
            </p>
            <button className="inline-flex items-center gap-2 bg-[#FFEC22] hover:bg-yellow-300 text-black font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-md
                    transition-transform duration-200 ease-out
                    transform hover:-translate-y-0.5
                    focus:outline-none">
              <span>Apply Now</span>
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200"
                aria-hidden="true"
              >
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Non-Teaching Card */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Non-Teaching
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem
            </p>
            <button className="inline-flex items-center gap-2 bg-[#FFEC22] hover:bg-yellow-300 text-black font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-md
                    transition-transform duration-200 ease-out
                    transform hover:-translate-y-0.5
                    focus:outline-none">
              <span>Apply Now</span>
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200"
                aria-hidden="true"
              >
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}