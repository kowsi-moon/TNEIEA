import React from "react";
import {
  Printer,
  ShieldCheck,
  XCircle,
  Clock3,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";

function RefundContant() {
  const printPolicy = () => {
    window.print();
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">

        {/* SIDEBAR */}
        <div className="hidden lg:block">

          <div className="border-2rounded-sm p-6 bg-white">

            <p className="text-xs font-bold tracking-widest text-gray-700 uppercase mb-6">
              On This Page
            </p>

            <div className="space-y-5 text-sm text-gray-600">
              <p>1. Refund Eligibility</p>
              <p>2. Non-Refundable Cases</p>
              <p>3. Refund Processing</p>
              <p>4. Failed Transactions</p>
              <p>5. Contact Support</p>
              <p>6. Policy Updates</p>
            </div>

          

          </div>

       

        </div>

        {/* CONTENT */}
        <div className="space-y-8">

  
        

          {/* SECTION 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                1. Refund Eligibility
              </div>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Refund requests will be considered if submitted within
              <span className="font-semibold text-gray-900">
                {" "}4 to 5 business days
              </span>
              {" "}from the payment date.
              Refunds may be applicable for:


            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

              {[
                "Duplicate payments",
                "Incorrect payment amounts",
                "Cancelled registrations within eligible period",
                "Advertisement packages cancelled before activation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <ShieldCheck className="w-4 h-4 text-red-500 mt-1" />

                  <p className="text-gray-600 leading-7">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* SECTION 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>

              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                2. Non-Refundable Cases
              </div>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Refunds will not be provided for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

              {[
                "Approved or active advertisement packages",
                "Completed verification processes",
                "Services already delivered or utilized",
                "Incorrect details submitted by users",
                "Policy violations by the user",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 mt-1" />

                  <p className="text-gray-600 leading-7">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* SECTION 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>

              <div className="flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-red-500" />
                3. Refund Processing
              </div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8 mt-8 items-center">

              <div>
                <p className="text-gray-600 leading-8">
                  Approved refunds will be processed within
                  <span className="font-semibold text-gray-900">
                    {" "}7 to 14 business days.
                  </span>
                  {" "}All refunds will be credited back to the original
                  payment method used during the transaction.
                </p>

               
                  <p className="text-gray-600 leading-8">
                    Processing time may vary depending on banks and payment gateway providers.
                  </p>
              
              </div>

              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <p className="text-4xl font-extrabold text-red-500">
                  7-14
                </p>

                <p className="text-xs font-bold tracking-widest text-gray-500 mt-3 uppercase">
                  Business Days
                </p>
              </div>

            </div>
          </div>

          {/* SECTION 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>

              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                4. Failed Transactions
              </div>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
         If payment is deducted but confirmation is not received:
Users should contact TNEIEA support with transaction details.
Transactions will be verified before initiating refund processing.
            </p>
          

          </div>

          {/* SECTION 5 */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                5. Contact for Refund Requests
              </div>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              For all refund-related queries and official requests,
              contact our administration team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

              <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Email Us
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    tnagrde@gmail.com
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">
                    Call Support
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    +91 97102 04300
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 6 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>

              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                6. Policy Updates
              </div>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
             TNEIEA reserves the right to update or modify this Refund Policy at any time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RefundContant;