import React from "react";
import { useNavigate } from "react-router-dom";
function MembershipHero() {
  const navigate = useNavigate();
  return (
    <section
      className="
        relative overflow-hidden bg-[#11131A]

        h-[460px]
        sm:h-[520px]
        md:py-28

        px-5 sm:px-6
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-[40%] bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-[40%] bg-blue-600/10 blur-3xl" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto max-w-5xl

          flex flex-col items-center justify-center

          text-center h-full
        "
      >
        {/* Top Badge */}
        <div
          className="
            mb-6 md:mb-8

            rounded-full border border-white/15

            px-5 py-2

            text-[11px] sm:text-sm
            font-medium text-white/80

            backdrop-blur tracking-wide
          "
        >
          Join the Association
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-4xl font-extrabold tracking-tight text-white leading-snug

            text-3xl
            sm:text-5xl
            md:text-6xl
          "
        >
          Building Strong Industry
          <br />
          Connections for Growth & Opportunity.
        </h1>

        {/* Description */}
        <p
          className="
            mt-5 md:mt-6

            max-w-2xl

            text-sm
            sm:text-base
            md:text-lg

            leading-7 md:leading-8

            text-gray-400
          "
        >
          Join a trusted professional network that brings together businesses,
          skilled experts, innovative solutions, and reliable support to
          strengthen industries and create lasting partnerships.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-8 md:mt-10

            flex flex-col sm:flex-row

            gap-4 w-[200px] sm:w-auto"
        >
        
        </div>
      </div>
    </section>
  );
}

export default MembershipHero;
