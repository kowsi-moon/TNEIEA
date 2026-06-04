import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FutureSection() {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f5f7fc] py-16 md:py-20 px-4 sm:px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-normal">
          Be Part of the Future
        </h1>

        {/* Description */}
        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-[22px] leading-8 md:leading-[35px] text-[#4b5563] max-w-2xl mx-auto">
          Be part of an association that empowers electrical professionals
          through membership support, technical seminars, handbooks,
          newsletters, and industry coordination. TNEIEA continues to strengthen
          the electrical fraternity by promoting knowledge, safety, and
          professional development since 1979.
        </p>

        {/* Buttons */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5">

          {/* Primary Button */}
          <button
            onClick={() => navigate("/member_create")}
            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl flex items-center justify-center gap-3 shadow-md w-full sm:w-auto"
          >
            Join the Association

            <ArrowRight size={22} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default FutureSection;