import React from "react";
import bgImage from "../assets/event.png";

function EventHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center py-20 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#000033]/20"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07275f]/20 via-[#021b45]/15 to-[#001233]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Tag */}
        <div className="inline-block border border-white/10 bg-white/2 backdrop-blur-sm rounded-full px-5 py-1 mb-5">
        </div>

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-normal">
          Together for the Electrical
          <br />

          <span className="text-red-500">
            Community.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-white text-sm sm:text-lg md:text-2xl leading-7 sm:leading-8 md:leading-9 max-w-3xl mx-auto px-2">
          Stay engaged with industry events, professional meetings,
          and technical awareness programs.
        </p>

      </div>
    </section>
  );
}

export default EventHero;