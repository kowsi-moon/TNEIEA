import React from "react";
import bgImage from "../assets/img1.jpg";

function About() {
  return (
    <section
      className="
        relative w-full bg-cover bg-center overflow-hidden flex items-center

        h-[400px]
        sm:h-[500px]
        md:min-h-[calc(60vh-70px)]
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000033]/40"></div>

      {/* Content */}
      <div
        className="
          relative z-10 w-full max-w-7xl mx-auto

          px-5 sm:px-8 md:px-16 lg:px-24

          py-12 sm:py-16 md:py-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-5xl">

          {/* Tag */}
          <div className="inline-block border border-red-500 rounded-full px-4 py-1 mb-4 md:mb-6">
            <p className="text-white text-[10px] sm:text-xs tracking-widest font-semibold">
              ESTABLISHED 1979
            </p>
          </div>

          {/* Heading */}
          <h1
            className="
              text-white font-extrabold leading-snug

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Empowering Electrical
            <br />
            <span className="text-red-600">
              Excellence
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              text-white mt-4 md:mt-8

              text-sm
              sm:text-base
              md:text-xl

              leading-7 md:leading-10

              max-w-2xl
            "
          >
            Empowering the electrical fraternity through technical
            excellence, safety, and professional growth.
          </p>

          {/* Stats */}
          <div
            className="
              grid grid-cols-2 lg:grid-cols-4

              gap-5 md:gap-10

              mt-8 md:mt-14
            "
          >

            <div className="border-l-4 border-red-600 pl-3 md:pl-4">
              <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">
                1,500+
              </h2>

              <p className="text-red-500 uppercase tracking-widest text-[9px] sm:text-xs md:text-sm mt-1 font-medium">
                Active Members
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-3 md:pl-4">
              <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">
                25+
              </h2>

              <p className="text-red-500 uppercase tracking-widest text-[9px] sm:text-xs md:text-sm mt-1 font-medium">
                Technical Excellence
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-3 md:pl-4">
              <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">
                500+
              </h2>

              <p className="text-red-500 uppercase tracking-widest text-[9px] sm:text-xs md:text-sm mt-1 font-medium">
                Suppliers
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-3 md:pl-4">
              <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">
                300+
              </h2>

              <p className="text-red-500 uppercase tracking-widest text-[9px] sm:text-xs md:text-sm mt-1 font-medium">
                Service Provider
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;