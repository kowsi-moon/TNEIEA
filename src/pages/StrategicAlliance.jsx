import React from "react";
import { ShieldCheck, Globe } from "lucide-react";
import about from "../assets/about.png";

function StrategicAlliance() {
  return (
    <section className="w-full bg-[#f5f5f7] py-14 md:py-20 px-5 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-[1350px] mx-auto grid lg:grid-cols-2 gap-12 md:gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          <span className="inline-block border border-red-500 text-red-600 text-[10px] sm:text-[11px] font-semibold tracking-wide px-4 py-1 rounded-full uppercase">
            About The Association
          </span>

          {/* Heading */}
          <h1 className="mt-5 md:mt-6 text-3xl sm:text-2xl md:text-3xl font-bold leading-tight text-[#111827]">
            Tamil Nadu Electrical Installation Engineers
            <br />
            Association 'A' Grade
          </h1>

          {/* Description */}
          <p className="mt-5 md:mt-3 text-gray-600 text-base sm:text-lg leading-7 md:leading-6 max-w-3xl text-justify">
            We take pride in introducing ourselves as an Association established
            in the year 1979 by ‘A’ Grade Electrical Contractors with a vision
            to unify and uplift professionals in the electrical sector. Since
            its inception, the Association has been dedicated to serving not
            only ‘A’ Grade Electrical Contractors but also manufacturers,
            government officials, and all individuals connected with the
            electrical fraternity. Our primary objective is to create a strong
            and collaborative platform that fosters growth, knowledge sharing,
            and mutual support among members of the industry. Over the years, we
            have built a reputable and trusted network, currently comprising
            around 350 active members. With continued efforts and commitment, we
            are confident that our Association will expand further, welcoming
            many more professionals to join and contribute to this growing
            community.
          </p>

          {/* Features */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-8">
            {/* Feature 1 */}
            {/* <div className="flex gap-4">
              <div className="mt-1 text-red-600">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-[#111827] text-lg md:text-xl">
                  Safety & Standards
                </h3>

                <p className="text-gray-500 text-base md:text-lg leading-6 mt-1">
                  Promoting electrical safety, BIS standards, and energy
                  conservation.
                </p>
              </div>
            </div> */}

            {/* Feature 2 */}
            {/* <div className="flex gap-4">
              <div className="mt-1 text-red-600">
                <Globe size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-[#111827] text-lg md:text-xl">
                  Industry Collaboration
                </h3>

                <p className="text-gray-500 text-base md:text-lg leading-6 mt-1">
                  Connecting professionals through seminars and technical
                  programs.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[580px]">
            {/* Image */}
            <img
              src={about}
              alt="Building"
              className="w-full h-[420px] md:h-[560px] object-cover rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-8 bg-[#D8CDB5] text-red-600 rounded-2xl px-8 py-7 shadow-2xl w-[240px] animate-float z-10">
              <h2 className="text-5xl font-extrabold">25+</h2>

              <p className="mt-3 text-[15px] leading-7 text-black-100">
                Years supporting electrical professionals and industry growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicAlliance;
