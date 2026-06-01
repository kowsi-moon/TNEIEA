import React from "react";
import {
  AlertCircle,
  CheckCircle,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Printer,
} from "lucide-react";

function ReturnContant() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const printPolicy = () => {
    window.print();
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
        {/* SIDEBAR */}
       <div className="hidden lg:block sticky top-10 h-fit">

  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

    <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-5">
      Contents
    </h3>


    <div className="space-y-4 text-[14px] text-gray-600">
        <p>1.Service Return Eligibility </p>

      <p>2.Non-Returnable Services</p>

      <p>3. Request Procedure</p>

      <p>4. Approval Rights</p>

      <p>5. Contact Information</p>

          </div>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          {/* HEADER */}
          <div>
            <h1 className="text-5xl font-extrabold text-[#111827] mt-5">
              Return Policy
            </h1>

            <div className="flex items-center gap-5 mt-5 flex-wrap">
              <div className="bg-gray-200 rounded-full px-4 py-2 text-xs font-semibold text-red-500">
                Effective Date: 08 May 2026
              </div>
            </div>
          </div>

          {/* NOTICE */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-8">
                  TNEIEA primarily provides digital registrations, memberships,
                  advertisement services, supplier listings, and service
                  provider packages through its website. As the services
                  provided are digital and non-physical in nature, physical
                  product returns are generally not applicable.
                </p>

                
              </div>
            </div>
          </div>

          {/* SECTION 1 */}
          <div
            id="section-1"
            className="bg-white border border-gray-200 rounded-2xl p-8 mt-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-black rounded-full"></span>
              1. Service Return Eligibility
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
             Requests for reversal or withdrawal of purchased services may be considered only if:
            </p>

            <div className="space-y-4 mt-8">
              {[
               "The service has not yet been activated",
                "The advertisement has not been published.",
                "The registration process has not been completed"
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-red-500" />

                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5 mt-6">
              

              <p className="text-red-400 text-sm mt-2 leading-7">
                Requests must be raised within 4 to 5 business days from the payment date.
              </p>
            </div>
          </div>

          {/* SECTION 2 */}
          <div
            id="section-2"
            className="bg-white border border-gray-200 rounded-2xl p-8 mt-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-black rounded-full"></span>
              2. Non-Returnable Services
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
             The following are non-returnable:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                "Active membership services",
                "Published advertisements",
                "Verified supplier/service provider listings",
                "Completed digital services",
                "Event participation already confirmed",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-3"
                >
                  <AlertCircle className="w-4 h-4 text-red-500" />

                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 */}
          <div
            id="section-3"
            className="bg-white border border-gray-200 rounded-2xl p-8 mt-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-black rounded-full"></span>
              3. Request Procedure
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              To initiate a return request, submit a formal application with the
              following details:
            </p>

            <div className="border border-gray-200 rounded-2xl overflow-hidden mt-8">
              <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
                <div className="p-5 font-semibold text-sm">Required Detail</div>

                <div className="p-5 font-semibold text-sm">Description</div>
              </div>

              {[
                ["Name", "Full name associated with the account"],
                ["Contact details", "Registered email and phone number"],
                ["Transaction ID", "Unique ID from payment confirmation"],
                ["Service details", "Specific package or listing purchased"],
                ["Reason for request", "Clear explanation for refund request"],
              ].map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 border-t border-gray-100"
                >
                  <div className="p-5 text-sm font-medium text-gray-800">
                    {row[0]}
                  </div>

                  <div className="p-5 text-sm text-gray-600">{row[1]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4 */}
          <div
            id="section-4"
            className="bg-white border border-gray-200 rounded-2xl p-8 mt-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-black rounded-full"></span>
              4. Approval Rights
            </h2>

            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-red-700" />
              </div>

              <div className="space-y-5">
                <p className="text-gray-600 leading-8">
                  TNEIEA reserves the right to:
                </p>

                <ul className="space-y-4 text-gray-600 leading-8">
                  <li>
                    • Verify requests.
                  </li>

                  <li>
                    • Approve or reject return-related requests,
.
                  </li>

                  <li>
                    • Restricting access for misuse or fraudulent activity.
                  </li>
                </ul>

                <p className="italic text-gray-500">
                  Restrict misuse of policies.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 5 */}
          <div
            id="section-5"
            className="bg-white border border-gray-200 rounded-2xl p-8 mt-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-black rounded-full"></span>
              5. Contact Information
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              For queries regarding this Return Policy, contact our support
              team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="border border-gray-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>

                <p className="font-bold text-lg mt-5">Email Support</p>

                <p className="text-gray-600 mt-4">tnagrade@gmail.com</p>

               
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>

                <p className="font-bold text-lg mt-5">Phone</p>

                <p className="text-gray-600 mt-4"> (044) 2233 0601</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>

                <p className="font-bold text-lg mt-5">Address</p>

                <p className="text-gray-600 mt-4 leading-7">
                 No.7/21, Aradhana Apartment,
                  Temple Avenue, Srinagar Colony, 
                  Saidapet, Chennai – 600015, India.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-gray-200 mt-14 pt-8 flex items-center justify-between flex-wrap gap-5">
              

            <button
              onClick={scrollToTop}
              className="border border-gray-300 bg-white rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-gray-100 transition"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReturnContant;
