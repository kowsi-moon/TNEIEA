import React from "react";
import { Target, Lightbulb } from "lucide-react";

function MissionVision() {
  return (
    <section className="w-full bg-[#ffffff] py-14 md:py-20 px-5 sm:px-6 md:px-10 lg:px-5">
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        
        {/* Mission Card */}
        <div className="bg-[#f8dddd] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition duration-300">
          
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#fef2f2] flex items-center justify-center mb-4">
            <Target className="text-red-600" size={28} />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-5 md:mb-6">
            Our Mission
          </h2>

          {/* Content */}
          <p className="text-[#4b5563] text-base sm:text-lg leading-8 md:leading-9">
            To promote the efficient use of power in the best interest of the
            community by organizing seminars, exhibitions, technical programs,
            and knowledge-sharing initiatives for electrical professionals.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-[#f8dddd] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition duration-300">
          
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#fef2f2] flex items-center justify-center mb-4">
            <Lightbulb className="text-red-600" size={28} />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-5 md:mb-6">
            Our Vision
          </h2>

          {/* Content */}
          <p className="text-[#4b5563] text-base sm:text-lg leading-8 md:leading-9">
            To support and strengthen the electrical industry through
            professional development, safety awareness, energy conservation,
            technical publications, and collaboration with government and
            industry bodies across India.
          </p>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;