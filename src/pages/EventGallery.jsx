import React from "react";

import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";
import img7 from "../assets/gallery7.png";
import img8 from "../assets/gallery8.png";

function EventGallery() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 md: px-4 sm:px-2 md:px-5 lg:px-10">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 sm:px-4 py-2 bg-[#f8f8fb]">

          <span className="w-2 h-2 rounded-full bg-gray-500"></span>

          <p className="text-[10px] sm:text-[11px] tracking-[2px] uppercase font-semibold text-red-600">
            Moments From The Community
          </p>

        </div>

        {/* Title */}
        <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight">
          Glimpses of TNEIEA
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto px-2">
          Relive the innovation, collaboration, and excitement from our
          previous global gatherings.
        </p>

      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 auto-rows-[180px] sm:auto-rows-[170px] md:auto-rows-[150px]">

        {/* Large Image */}
        <div className="sm:col-span-2 sm:row-span-2 overflow-hidden rounded-xl">

          <img
            src={img1}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        {/* Small Images */}
        <div className="overflow-hidden rounded-xl">

          <img
            src={img2}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        <div className="overflow-hidden rounded-xl">

          <img
            src={img3}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        <div className="overflow-hidden rounded-xl">

          <img
            src={img4}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        <div className="overflow-hidden rounded-xl">

          <img
            src={img5}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        <div className="overflow-hidden rounded-xl">

          <img
            src={img6}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        <div className="overflow-hidden rounded-xl">

          <img
            src={img7}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        <div className="overflow-hidden rounded-xl">

          <img
            src={img8}
            alt="Gallery"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default EventGallery;