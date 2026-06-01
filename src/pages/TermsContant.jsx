import React from "react";
import {
  Info,
  ExternalLink,
  Scale,
  MapPin,
  Phone,
  Mail,
  Smartphone,
  ArrowUp,
} from "lucide-react";

function TermsContant() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const sections = [
  //   "About TNEIEA",
  //   "Website Usage",
  //   "Membership",
  //   "User Accounts",
  //   "Events & Seminars",
  //   "Intellectual Property",
  //   "External Links",
  //   "Limitation of Liability",
  //   "Accuracy of Information",
  //   "Termination of Access",
  //   "Governing Law",
  //   "Changes to Terms",
  //   "Contact Information",
  // ];

  return (
    <section className="bg-[#f5f5f5] py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* LEFT SIDEBAR */}
       <div className="hidden lg:block sticky top-10 h-fit">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

  <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-5">
    Contents
  </h3>

  <div className="space-y-4 text-[14px] text-gray-600">

    <p>1. About TNEIEA</p>

    <p>2. Website Usage</p>

    <p>3. Membership</p>

    <p>4. User Accounts</p>

    <p>5. Events & Seminars</p>

    <p>6. Intellectual Property</p>

    <p>7. External Links</p>

    <p>8. Limitation of Liability</p>

    <p>9. Accuracy of Information</p>

    <p>10. Termination of Access</p>

    <p>11. Governing Law</p>

    <p>12. Changes to Terms</p>

    <p>13. Contact Information</p>

  </div>

</div>
          </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          {/* TOP NOTICE */}
          <div className="bg-red-50 border border-blue-100 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Info className="text-red-500 w-5 h-5 mt-1" />

              <p className="text-gray-700 italic leading-8 font-medium">
                Welcome to TNEIEA Official Website. By accessing or using this
                website, you agree to comply with these Terms and Conditions. If
                you do not agree, please do not use the website.
              </p>
            </div>
          </div>

          {/* SECTION 1 */}
          <div
            id="section-1"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              1. About TNEIEA
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Tamil Nadu Electrical Installation Engineers’ Association (TNEIEA)
              is a professional association established to support electrical
              contractors, engineers, manufacturers, and professionals
              associated with the electrical industry.
            </p>
          </div>

          {/* SECTION 2 */}
          <div
            id="section-2"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              2. Website Usage
            </h2>

            <ul className="space-y-5 text-gray-600 mt-6 leading-8">
              <li>Users agree:</li>

              <li>To use the website lawfully</li>

              <li>Not to misuse or disrupt website services</li>

              <li>
                Not to attempt unauthorized access to member accounts or server
                systems
              </li>

              <li>Not to upload harmful, false, or misleading content</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div
            id="section-3"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              3. Membership
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              TNEIEA reserves the right to:
            </p>

            <ul className="space-y-4 text-gray-600 mt-5 leading-8">
              <li>
                • Membership approval is subject to verification and association
                rules.
              </li>

              <li>
                • Approval is subject to verification of documents and adherence
                to association rules.
              </li>

              <li>
                • TNEIEA reserves the right to approve or reject applications.
              </li>

              <li>
                • Membership may be suspended for violations of association
                guidelines.
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div
            id="section-4"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              4. User Accounts
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Members are responsible for:
            </p>

            <div className="bg-gray-50 border-l-4 border-red-300 rounded-lg p-5 mt-6">
              <p className="text-gray-700 leading-8">
                Maintaining confidentiality of login credentials Providing
                accurate information Updating account information when required
              </p>
            </div>

            <p className="text-gray-600 leading-8 mt-5">
              TNEIEA is not liable for unauthorized access caused by user
              negligence.
            </p>
          </div>

          {/* SECTION 5 */}
          <div
            id="section-5"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              5. Events & Seminars
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Participation in seminars, events, and meetings organized by
              TNEIEA may be subject to separate rules, fees, and registration
              requirements.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Schedules and event details may change without prior notice.
            </p>
          </div>

          {/* SECTION 6 */}
          <div
            id="section-6"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              6. Intellectual Property
            </h2>

            <p className="text-gray-600 leading-7 mt-4">
              All website content including:
            </p>

            <ul className="space-y-2 text-gray-600 mt-5 leading-7">
              <li>• Logo</li>

              <li>• Text</li>

              <li>• Images</li>

              <li>• Publication</li>
              <li>• Newsletter</li>

              <li>• Document</li>

              <li>• Website Design</li>
            </ul>

            <p className="text-gray-800 font-semibold leading-8 mt-5">
              Are the property of TNEIEA unless otherwise stated. Users may not
              reproduce or distribute website content without written
              permission.
            </p>
          </div>

          {/* SECTION 7 */}
          <div
            id="section-7"
            className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-10 bg-red-500 rounded-full"></span>
              7. External Links
            </h2>

            <p className="text-gray-600 leading-7">
              The website may contain links to third-party websites for
              informational purposes. TNEIEA does not endorse or assume
              responsibility for third-party content or services.
            </p>
          </div>

          {/* SECTION 8 */}
          <div
            id="section-8"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              8. Limitation of Liability
            </h2>

            <ul className="space-y-4 text-gray-600 mt-6 leading-8">
              <li>• Website interruptions</li>
              <li>• Technical errors</li>
              <li>• Data loss</li>
              <li>• Unauthorized access</li>
              <li>• Damages arising from website use</li>
            </ul>
          </div>

          {/* SECTION 9 */}
          <div
            id="section-9"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              9. Accuracy of Information
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              While we strive to maintain accurate and updated information,
              TNEIEA does not guarantee completeness or accuracy of all website
              content.
            </p>
          </div>

          {/* SECTION 10 */}
          <div
            id="section-10"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              10. Termination of Access
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              We reserve the right to suspend or terminate access to the website
              or member portal without prior notice for violations of these
              Terms.
            </p>
          </div>

          {/* SECTION 11 */}
          <div
            id="section-11"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              11. Governing Law
            </h2>

            <div className="flex items-start gap-3 mt-6">
              <Scale className="text-red-500 w-5 h-5 mt-1" />

              <p className="text-gray-600 leading-8">
                These Terms shall be governed by the laws of India. Any disputes
                shall be subject to the jurisdiction of courts located in
                Chennai, Tamil Nadu.
              </p>
            </div>
          </div>

          {/* SECTION 12 */}
          <div
            id="section-12"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              12. Changes to Terms
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              TNEIEA may update these Terms and Conditions at any time.
              Continued use of the website after changes constitutes acceptance
              of the revised Terms.
            </p>

            <div className="bg-red-50 border border-blue-100 rounded-xl p-5 mt-6">
              <p className="text-gray-700 leading-8">
                By continuing to access or use our website after updates, you
                agree to the revised terms.
              </p>
            </div>
          </div>

          {/* SECTION 13 */}
          <div
            id="section-13"
            className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-1 h-8 bg-red-500 rounded-full"></span>
              13. Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />

                <div>
                  <p className="font-semibold text-gray-900">
                    Address
                  </p>

                  <p className="text-gray-600 leading-7 mt-2">
                   Tamil Nadu Electrical Installation Engineers’ Association (TNEIEA)
                  No.7/21, Aradhana Apartment,
                  Temple Avenue, Srinagar Colony,
                  Saidapet, Chennai – 600015, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-red-500 mt-1" />

                <div>
                  <p className="font-semibold text-gray-900">Phone</p>

                  <p className="text-gray-600 mt-2">(044) 2233 0601</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Smartphone className="w-5 h-5 text-red-500 mt-1" />

                <div>
                  <p className="font-semibold text-gray-900">Mobile </p>

                  <p className="text-gray-600 mt-2">+91 97102 04300</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-red-500 mt-1" />

                <div>
                  <p className="font-semibold text-gray-900">Email Address</p>

                  <p className="text-gray-600 mt-2">tnagrade@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between pt-5">
           

            <button
              onClick={scrollToTop}
              className="border border-gray-300 bg-white px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:bg-gray-100 transition"
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

export default TermsContant;
