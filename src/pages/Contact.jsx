import React from "react";

function ContactHero() {
  return (
    <section className="w-full bg-[#f5f7fc] py-10 px-2">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-block border border-red-300 rounded-full px-5 py-2 mb-8">
          <p className="text-red-600 text-sm font-semibold">Contact Us</p>
        </div>

        {/* Heading */}
        <h1 className="text-red-600 text-5xl md:text-6xl font-extrabold leading-tight">
         Connect With TNEIEA
        </h1>

        {/* Description */}
        <p className="mt-5 text-[#4b5563] text-xl md:text-xl leading-[30px] max-w-2xl mx-auto">
          We are here to support electrical contractors and professionals with
          the right guidance, industry updates, and association services.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
