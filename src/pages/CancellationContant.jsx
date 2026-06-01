import React from "react";
import {
  Info,
  AlertCircle,
  Download,
  Printer,
  Mail,
  Phone,
} from "lucide-react";

function CancellationContant() {
  const printPolicy = () => {
    window.print();
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
        {/* SIDEBAR */}
        <div className="hidden lg:block">
          <div className="bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest leading-9 text-gray-500 mb-">
              On This Page
            </p>

            <div className="space-y-0">
              {[
                "Membership & Registration",
                "Advertisement Packages",
                "How to Request",
                "Approval Process",
                "Policy Changes",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl px-4 py-3 text-sm transition${
                    index === 0
                  }`}
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8">
          {/* HEADER */}
          <div>
            <div className="inline-flex items-center border border-red-100 bg-red-50 text-red-500 text-xs font-semibold px-4 py-1 rounded-full">
              Official Documentation
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-5">
              <h1 className="text-5xl font-extrabold text-[#111827]">
                Cancellation Policy
              </h1>

              <div className="bg-gray-100 rounded-full px-5 py-3 text-sm text-gray-600">
                Effective Date:
                <span className="text-red-500 font-semibold ml-2">
                  08 May 2026
                </span>
              </div>
            </div>
          </div>

          {/* INTRO */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl">
              <p className="text-gray-600 leading-8">
                This Cancellation Policy applies to all registrations,
                advertisement packages, supplier listings, service provider
                listings, and other services offered through the 
                <span className="text-red-500 font-semibold">
                  {" "}
                  TNEIEA Official Website.
                </span>{" "}
                By using our services and making payments through the website,
                you agree to comply with the terms outlined below.
              </p>
            </div>

            <div className="absolute right-8 top-8 opacity-5">
              <AlertCircle className="w-32 h-32 text-black" />
            </div>
          </div>

          {/* SECTION 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <Info className="w-5 h-5 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">
                1. Membership & Registration Cancellation
              </h2>
            </div>

            <p className="text-gray-600 leading-8 mt-6">
             Users may request cancellation for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                "Member Registrations",
                "Supplier Registrations",
                "Service Provider Registrations",
                "Event Registrations",
                "Advertisement Package Requests",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl px-5 py-4 text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5 mt-6">
              <p className="text-red-500 text-sm leading-7">
                Cancellation requests must be submitted within 4 to 5 business days from the payment date.
              </p>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <Info className="w-5 h-5 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">
                2. Advertisement Package Cancellation
              </h2>
            </div>

            <p className="text-gray-600 leading-8 mt-6">
              Advertisement or promotional packages may be cancelled only before:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              <div className="border border-gray-200 rounded-xl p-5">
                <p className="font-bold text-gray-900">
                  Eligible for Cancellation
                </p>

                <p className="text-gray-600 leading-7 mt-3">
                  Requests made before approval, activation, publishing, or
                  display on the platform.
                </p>
              </div>

              <div className="border border-red-100 bg-red-50 rounded-xl p-5">
                <p className="font-bold text-red-500">Non-Cancellable</p>

                <p className="text-gray-600 leading-7 mt-3">
                 Once the advertisement is approved or published, cancellation may not be permitted.
                </p>
              </div>
            </div>

            
          </div>

          {/* SECTION 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <Info className="w-5 h-5 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">
                3. How to Request Cancellation
              </h2>
            </div>

            <p className="text-gray-600 leading-8 mt-6">
              To request cancellation, users must provide:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                ["Full Name", "As per registration records"],
                ["Contact Details", "Registered mobile number or email"],
                ["Transaction ID", "Found on your payment receipt"],
                ["Service Details", "Specific package or registration type"],
                ["Reason", "Clear explanation for cancellation"],
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5">
                  <p className="text-xs uppercase font-bold text-gray-500">
                    {item[0]}
                  </p>

                  <p className="text-gray-700 mt-2">{item[1]}</p>
                </div>
              ))}
            </div>

            {/* SUPPORT BOX */}
            <div className="bg-red-500 rounded-2xl p-6 mt-8 text-white">
              <p className="font-bold text-xl">Cancellation requests can be sent to:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm opacity-80">Email Us At</p>

                    <p className="font-semibold">tnagrde@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm opacity-80">Call Support</p>

                    <p className="font-semibold">+91 97102 04300</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <Info className="w-5 h-5 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">
                4. Approval of Cancellation
              </h2>
            </div>

            <p className="text-gray-600 leading-8 mt-6">
              All cancellation requests are subject to verification and approval by TNEIEA.
TNEIEA reserves the right to reject cancellation requests in cases of:
            </p>

            <div className="space-y-4 mt-8">
              {[
                [
                  "Service Processing Complete",
  
                ],
                [
                  "Policy Violations",
               
                ],
                [
                  "Incorrect information submitted by users",
                 
                ],
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 flex gap-5"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">{item[0]}</p>

                    <p className="text-gray-600 leading-7 mt-2">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <Info className="w-5 h-5 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">5. Changes to Policy</h2>
            </div>

            <p className="text-gray-600 leading-8 mt-6">
              TNEIEA reserves the right to modify this Cancellation Policy at any time without prior notice.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CancellationContant;
