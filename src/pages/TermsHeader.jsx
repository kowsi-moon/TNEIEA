import React from "react";
import { Clock, Globe } from "lucide-react";

function TermsHeader() {
  return (
    <div className="w-full bg-red-100 flex justify-center py-24">
      
      <div className="w-full max-w-5xl text-center px-4">

        {/* Badge */}
        <div className="inline-flex items-center border border-red-200 bg-red-50 text-red-600 text-xs font-semibold px-4 py-1 rounded-full">
          Official Document 
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl  font-bold text-red-500 mt-6 bg-">
          Terms and Conditions
        </h1>

        {/* Pills */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">

          <div className="flex items-center gap-2 border border-gray-300 bg-white px-5 py-3 rounded-full">
            <Clock className="w-4 h-4 text-red-500" />

            <span className="text-sm text-gray-700">
              Effective Date: 08 May 2026
            </span>
          </div>

          

        </div>

      </div>

    </div>
  );
}

export default TermsHeader;