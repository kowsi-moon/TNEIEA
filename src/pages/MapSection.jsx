import React from "react";

function MapSection() {
  return (
    <section className="w-full  py-20 px-2 sm:px-4 md:px-4">

      <div className="max-w-7xl mx-auto ">

        <h3 className="text-2xl font-bold text-[#111827] mb-5">
          Find Us
        </h3>

        <iframe
          title="TNEIEA Location"
          src="https://maps.google.com/maps?q=No.7/21,Aradhana Apartment,Temple Avenue,Srinagar Colony,Saidapet,Chennai-600015&z=15&output=embed"
          className="w-full h-[220px] md:h-[260px] rounded-2xl border-0"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}

export default MapSection;