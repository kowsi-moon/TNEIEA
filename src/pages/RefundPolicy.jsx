import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RefundPolicy() {
  return (
    <section className="bg-red-100 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-500 mt-5">
          Refund Policy
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-center max-w-2xl leading-relaxed mx-auto">
          This Refund Policy applies to all payments made on the TNEIEA Official
          Website for registrations, advertisement packages, supplier listings,
          service provider services, and other association-related services.
        </p>
      </div>

      <div className="flex justify-center mt-6">
  <div className="inline-block bg-gray-200 text-gray-700 text-sm px-4 py-2 text-center rounded-full">
    Effective Date: 08 May 2026
  </div>
</div>

    </section>
  );
}
