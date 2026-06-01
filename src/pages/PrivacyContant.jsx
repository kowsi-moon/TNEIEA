import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Mail,
  Users,
  Lock,
  Globe,
  Cookie,
  Clock,
  MapPin,
  Phone,
  ChevronDown,
  User,
  Info,
} from "lucide-react";

const PrivacyContant = () => {
  const [openSection, setOpenSection] = useState("1.1");
    const navigate = useNavigate();
 
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-10 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* LEFT SIDEBAR */}
        <div className="hidden lg:block sticky top-10 h-fit">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-5">
              Contents
            </h3>

            <div className="space-y-4 text-[14px] text-gray-600">
              <p>1. Information We Collect</p>
              <p>2. How We Use Information</p>
              <p>3. Email Communications</p>
              <p>4. Sharing Information</p>
              <p>5. Data Security</p>
              <p>6. Cookies</p>
              <p>7. Third-Party Links</p>
              <p>8. Member Accounts</p>
              <p>9. Children’s Privacy</p>
              <p>10. Changes to Policy</p>
              <p>11. Contact Us</p>
            </div>

            <div className="bg-red-50 rounded-xl p-4 mt-8 border border-blue-100">
              <p className="text-red-600 font-semibold text-sm">Need Help?</p>

              <p className="text-gray-500 text-xs mt-2">
                Have questions about our data practices?
              </p>

             <button
  onClick={() => navigate("/contact")}
  className="mt-4 w-full border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition"
>
  Contact Legal
</button>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          {/* TOP INTRO */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 leading-8">
              Welcome to the TNEIEA Official Website operated by the Tamil Nadu
              Electrical Installation Engineers’ Association (“TNEIEA”, “we”,
              “our”, or “us”).
            </p>

            <p className="text-gray-500 leading-8 mt-5">
              This Privacy Policy explains how we collect, use, disclose, and
              protect your information when you use our website and member
              services. By accessing or using the website, you agree to the
              terms of this Privacy Policy.
            </p>
          </div>

          {/* SECTION 1 */}
          <div className="space-y-5">
            {/* 1.1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() =>
                  setOpenSection(openSection === "1.1" ? "" : "1.1")
                }
                className="w-full flex items-center justify-between p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    1.1
                  </span>

                  <h3 className="font-semibold text-lg">
                    Personal Information
                  </h3>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openSection === "1.1" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSection === "1.1" && (
                <div className="px-6 pb-6">
                  <p className="text-gray-500 mb-5">
                    We collect identifiers you provide during registration or
                    through profile updates:
                  </p>

                  <ul className="space-y-3 text-gray-600">
                    <li>• Name and professional title</li>
                    <li>• Primary email address and contact numbers</li>
                    <li>• Company name and registered business address</li>
                    <li>• District and PIN code for regional classification</li>
                    <li>• Electrical license details and certifications</li>
                    <li>• Secure login credentials (encrypted)</li>
                    <li>• Membership-related history and dues information</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 1.2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() =>
                  setOpenSection(openSection === "1.2" ? "" : "1.2")
                }
                className="w-full flex items-center justify-between p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    1.2
                  </span>

                  <h3 className="font-semibold text-lg">
                    Technical Information
                  </h3>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openSection === "1.2" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSection === "1.2" && (
                <div className="px-6 pb-6">
                  <p className="text-gray-500 mb-5">
                    We may automatically collect:
                  </p>

                  <ul className="space-y-3 text-gray-600">
                    <li>• IP address</li>
                    <li>• Browser type</li>
                    <li>• Device information</li>
                    <li>• Date and time of access</li>
                    <li>• Website usage information</li>
                  </ul>
                </div>
              )}
            </div>

            {/* 1.3 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() =>
                  setOpenSection(openSection === "1.3" ? "" : "1.3")
                }
                className="w-full flex items-center justify-between p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    1.3
                  </span>

                  <h3 className="font-semibold text-lg">
                    Information Submitted by Users
                  </h3>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openSection === "1.3" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSection === "1.3" && (
                <div className="px-6 pb-6">
                  <p className="text-gray-500 mb-5">
                    Information submitted through:
                  </p>

                  <ul className="space-y-3 text-gray-600">
                    <li>• Membership registration forms</li>
                    <li>• Contact forms</li>
                    <li>• Member login portal</li>
                    <li>• Sale/product posting sections</li>
                    <li>• Event registrations</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Shield className="text-red-500 w-6 h-6" />

              <h2 className="text-3xl font-bold">2. How We Use Information</h2>
            </div>

            <p className="text-gray-500 mt-8 leading-8">
              We use collected information for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {[
                "Membership registration and Management",
                "Providing access to member services",
                "Communication regarding events,seminars, and newsletters",
                "Responding to enquiries",
                "Improving website functionality and user experience",
                "Maintaining website security",
                "Sending important notifications and updates",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-red-500" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Mail className="text-red-500 w-6 h-6" />

              <h2 className="text-3xl font-bold">3. Email Communications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-10 mt-8 items-center">
              <div>
                <div className="px-6 pb-6">
                  <p className="text-gray-500 mb-5">
                    Information submitted through:
                  </p>

                  <ul className="space-y-3 text-gray-600">
                    <li>• Membership registration forms</li>
                    <li>• Contact forms</li>
                    <li>• Member login portal</li>
                    <li>• Sale/product posting sections</li>
                    <li>• Event registrations</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-blue-100 rounded-xl p-5 mt-6">
                  <p className="text-red-500 italic text-sm">
                    "Users may contact us to unsubscribe from non-essential
                    communications."
                  </p>
                </div>
              </div>

              <div className="border border-dashed border-blue-200 rounded-2xl flex items-center justify-center h-[120px]">
                <Mail className="text-blue-300 w-14 h-14" />
              </div>
            </div>
          </div>

          {/* SECTION 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Users className="text-red-500 w-6 h-6" />

              <h2 className="text-3xl font-bold">4. Sharing of Information</h2>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-4 mt-8">
              <p className="text-red-500 font-medium">
                Strict Policy: We do not sell, rent, or trade your personal
                information.
              </p>
            </div>

            <p className="text-gray-500 mt-6">Information may be shared:</p>

            <div className="space-y-4 mt-6">
              {[
                "When required by law",
                "With government authorities or regulatory bodies if necessary",
                "With service providers supporting website functionality",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl px-5 py-4 text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Lock className="text-red-500 w-6 h-6" />

              <h2 className="text-3xl font-bold">5. Data Security</h2>
            </div>

            <p className="text-gray-500 leading-8 mt-8">
              We implement reasonable administrative and technical safeguards to
              protect user information from unauthorized access, misuse, or
              disclosure. However, no internet transmission or storage system is
              completely secure.
            </p>
          </div>

          {/* SECTION 6 + 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <Cookie className="text-red-500 w-6 h-6" />

                <h2 className="text-2xl font-bold">6. Cookies</h2>
              </div>

              <p className="text-gray-500 mt-6 leading-8">
                Our website may use cookies and similar technologies to: Improve
                website performance Maintain user sessions Enhance user
                experience Analyze website traffic Users may disable cookies
                through browser settings.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <Globe className="text-red-500 w-6 h-6" />

                <h2 className="text-2xl font-bold">7. Third-Party Links</h2>
              </div>

              <p className="text-gray-500 mt-6 leading-8">
                The website may contain links to third-party websites including
                government and electricity-related portals. We are not
                responsible for the privacy practices or content of external
                websites.
              </p>
            </div>
          </div>

          {/* SECTION 8 + 9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <User className="text-red-500 w-6 h-6" />

                <h2 className="text-2xl font-bold">8. Member Accounts</h2>
              </div>

              <p className="text-gray-500 mt-6 leading-8">
                Members are responsible for: Maintaining confidentiality of
                login credentials Ensuring account information is accurate All
                activities performed through their account
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <Shield className="text-red-500 w-6 h-6" />

                <h2 className="text-2xl font-bold">9. Children’s Privacy</h2>
              </div>

              <p className="text-gray-500 mt-6 leading-8">
                Our website and services are intended for professionals and
                association members and are not directed toward children under
                18 years of age.
              </p>
            </div>
          </div>

          {/* SECTION 10 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="text-red-500 w-6 h-6" />

              <h2 className="text-3xl font-bold">10. Changes to This Policy</h2>
            </div>

            <p className="text-gray-500 mt-8 leading-8">
              We may update this Privacy Policy from time to time. Updated
              versions will be posted on this page with a revised effective
              date.
            </p>
          </div>

          {/* SECTION 11 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <MapPin className="text-red-500 w-6 h-6" />

              <h2 className="text-3xl font-bold">11. Contact Us</h2>
            </div>

            <p className="text-gray-500 mt-8 leading-8">
              For any questions regarding this Privacy Policy, contact:
            </p>

            <div className="bg-red-50 rounded-2xl p-8 mt-8">
              <div className="space-y-8">
                <div className="grid grid-cols-[120px_1fr] gap-5">
                  <p className="text-red-600 font-bold uppercase text-sm">
                    Address
                  </p>

                  <p className="text-gray-700 leading-8">
                    Tamil Nadu Electrical Installation Engineers’ Association
                    (TNEIEA)
                    <br />
                    No. 7/21, Aradhana Apartment
                    <br />
                    Temple Avenue, Srinagar Colony,
                    <br />
                    Saidapet, Chennai - 600015, India.
                  </p>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-5">
                  <p className="text-red-600 font-bold uppercase text-sm">
                    Phone
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-red-500" />
                      044 -2233 0601
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-red-500" />
                      +91 97102 04300
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-5">
                  <p className="text-red-600 font-bold uppercase text-sm">
                    Email
                  </p>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-red-500" />
                    tnagrade@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContant;
