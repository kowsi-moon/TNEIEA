import {
  CheckCircle2,
  FileBadge,
  ShieldCheck,
  UserCog,
  Users,
  GraduationCap,
} from "lucide-react";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MembershipPlan() {
  const navigate = useNavigate();

  return (
  <section className="w-full px-8 sm:px-6 md:px-10 lg:px-20 xl:px-32 mt-10 mb-20 overflow-hidden">

  <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[400px_1fr]">

    {/* LEFT SECTION */}
    <div className="bg-[#eef3f9]">

      {/* TOP HEADER */}
      <div className="bg-red-500 px-6 sm:px-9 py-7">
        <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-white uppercase leading-snug">
          TNEIEA – MEMBERSHIP PLAN
        </h1>
      </div>

      {/* CONTENT */}
      <div className="p-8 sm:p-8">

       <div className="flex items-center justify-between gap-2 w-full">

  {/* Annual Plan */}
  <div className="bg-[#E3D7BB] min-w-fit text-black text-[11px] sm:text-[13px] font-bold px-4 sm:px-5 py-2.5 rounded-full uppercase flex items-center justify-center">
    Annual Plan
  </div>

  {/* Renewal */}
<div className="bg-[#E3D7BB] min-w-fit text-white text-[11px] sm:text-[13px] font-bold px-5 py-2.5 rounded-full uppercase flex items-center gap-2">

  <CalendarDays className="w-4 h-4 shrink-0 text-black" />

  <span className="text-[12px] sm:text-[13px] font-bold text-black whitespace-nowrap">
    Renewal: Yearly once
  </span>

</div>

</div>

        {/* PRICE */}
        {/* <div className="mt-8 sm:mt-10">
          <p className="text-[14px] sm:text-[15px] font-semibold text-gray-500">
            Total Initial Investment
          </p>

          <h2 className="mt-3 text-[42px] sm:text-[50px] md:text-[58px] leading-none font-extrabold text-[#16181d]">
            ₹ 3,000
            <span className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold">
              .00
            </span>
          </h2>
        </div> */}

        {/* FEES */}
        <div className="mt-8 sm:mt-10">
          <h3 className="text-[12px] sm:text-[13px] uppercase tracking-[2px] font-extrabold text-red-500">
            Registration Fees Breakdown
          </h3>

          <div className="mt-6 space-y-5">

            <div className="flex items-center justify-between border-b border-gray-200 pb-4 gap-4">
              <span className="text-[14px] sm:text-[16px] text-gray-600">
                Admission Fee
              </span>

              <span className="font-bold text-[15px] sm:text-[17px] text-[#1f2937] whitespace-nowrap">
                ₹ 500.00
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4 gap-4">
              <span className="text-[14px] sm:text-[16px] text-gray-600">
                Membership Fee
              </span>

              <span className="font-bold text-[15px] sm:text-[17px] text-[#1f2937] whitespace-nowrap">
                ₹ 2,500.00
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-[14px] sm:text-[16px] text-gray-600">
                Renewal Fee (Yearly)
              </span>

              <span className="font-bold text-[15px] sm:text-[17px] text-[#1f2937] whitespace-nowrap">
                ₹ 2,500.00
              </span>
            </div>

          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/member-create")}
          className="mt-10 sm:mt-14 w-full rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-300 py-3 sm:py-4 text-white text-[20px] sm:text-[24px] md:text-[26px] font-bold shadow-md"
        >
          Register Now
        </button>

        <p className="mt-5 text-center text-[11px] sm:text-[12px] text-gray-500">
           Renewal Fee applies yearly once
        </p>

      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="bg-white p-5 sm:p-8">

      {/* TITLE */}
      <div className="flex items-start sm:items-center gap-3">
        <CheckCircle2 className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 sm:mt-0" />

        <h2 className="text-[18px] sm:text-[26px] md:text-[34px] font-extrabold text-[#1b1f2b] leading-snug">
          Membership Details & Eligibility
        </h2>
      </div>

      {/* CARDS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* CARD */}
        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6">
          <FileBadge className="w-5 h-5 text-red-500" />

          <h4 className="mt-3 text-[11px] sm:text-[12px] uppercase tracking-[2px] font-bold text-gray-400">
            Eligibility
          </h4>

          <p className="mt-3 text-[15px] sm:text-[17px] leading-8 sm:leading-9 text-[#1f2937]">
            EA/ESA Grade License Issued of Tamil Nadu Government
          </p>
        </div>

        {/* CARD */}
        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6">
          <UserCog className="w-5 h-5 text-red-500" />

          <h4 className="mt-3 text-[11px] sm:text-[12px] uppercase tracking-[2px] font-bold text-gray-400">
            Ownership
          </h4>

          <p className="mt-3 text-[15px] sm:text-[17px] text-[#1f2937]">
            Authorised Person
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-red-100 text-red-600 text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full">
              Proprietor
            </span>

            <span className="bg-red-100 text-red-600 text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full">
              Partner
            </span>

            <span className="bg-red-100 text-red-600 text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full">
              Director
            </span>
          </div>
        </div>

        {/* CARD */}
        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6">
          <Users className="w-5 h-5 text-red-500" />

          <h4 className="mt-3 text-[11px] sm:text-[12px] uppercase tracking-[2px] font-bold text-gray-400">
            Sex
          </h4>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-red-100 text-red-600 text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full">
              Male
            </span>

            <span className="bg-red-100 text-red-600 text-[11px] sm:text-[12px] font-medium px-3 py-1 rounded-full">
              Female
            </span>
          </div>
        </div>

        {/* CARD */}
        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6">
          <GraduationCap className="w-5 h-5 text-red-500" />

          <h4 className="mt-3 text-[11px] sm:text-[12px] uppercase tracking-[2px] font-bold text-gray-400">
            Qualification
          </h4>

          <p className="mt-3 text-[15px] sm:text-[17px] leading-8 sm:leading-9 text-[#1f2937]">
            Firm Registration and Ownership
          </p>
        </div>

      </div>

      {/* NOTE */}
      {/* <div className="mt-8 border border-red-100 rounded-2xl bg-red-50 p-5 sm:p-6 flex items-start gap-4">

        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-red-500" />
        </div> */}

        {/* <div>
          <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1f2937]">
            Important Note
          </h3>

          <p className="mt-2 text-[13px] sm:text-[14px] leading-7 text-gray-500">
            All memberships are subject to verification of the EA/ESA Grade
            license issued by the Tamil Nadu Government. Ensure your firm
            registration documents are up-to-date before proceeding with the
            registration.
          </p>
        </div> */}

      </div>

    </div>

</section>
  );
}

export default MembershipPlan;