import react from 'react';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CancellationHeader() {
  return (
    <section className="bg-red-50 py-14 px-5">
      <div className="max-w-6xl mx-auto">

        

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
          Cancellation Policy
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
          At Tamil Nadu Electrical Installation Engineers' Association (TNEIEA),
          we strive to provide a seamless experience for our members. This policy
          outlines the terms and conditions regarding the cancellation of
          memberships, event registrations, and physical or digital orders.
        </p>

      </div>
    </section>
  );
}