import React from "react";
import { Users, ShieldCheck, Zap, Globe } from "lucide-react";

function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Government & EB Updates",
      desc: "Keep yourself abreast with the latest Government and Electricity Board orders pertaining to the Electrical Contracting field.",
    },

    {
      icon: <Users size={28} />,
      title: "Professional Development",
      desc: "Update your knowledge by attending seminars organized by our Association. You can also effectively make your contribution.",
    },

    {
      icon: <Zap size={28} />,
      title: "Technical Articles & Publications",
      desc: "Read technical articles in our monthly Newsletter and stay updated with the latest developments, safety practices, and energy conservation methods.",
    },

    {
      icon: <Globe size={28} />,
      title: "Representation & Industry Support",
      desc: "Share issues faced by the contracting fraternity through the Association for better representation and solutions from Government and EB authorities.",
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] py-10 md:py-16 px-5 sm:px-8 md:px-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e1e1e] leading-tight">
          Why Join the TNEIEA?
        </h2>

        <p className="text-gray-500 text-base sm:text-lg mt-5 md:mt-6 max-w-3xl mx-auto leading-relaxed">
          Stay updated with industry developments, enhance your technical
          knowledge, and grow professionally with expert guidance and
          association support.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mt-12 md:mt-20">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#1e1e1e] mt-6 md:mt-8 leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mt-4 md:mt-5 text-[15px] md:text-[16px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
