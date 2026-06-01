import React from "react";
import {
  MapPin,
  Phone,
  Globe,
  Info,
  ChevronDown,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

function ContactSection() {
  const [files, setFiles] = React.useState([]);
  const [selectedTopic, setSelectedTopic] = React.useState("Select a topic");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    setFiles(fileArray);
  };

  const topics = ["Membership", "Events", "Support"];

  return (
    <section className="w-full bg-[#ffffff] py-16 md:py-8 px-4 sm:px-6 md:px-5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.8fr] gap-8 lg:gap-12 items-start">

        {/* LEFT SIDE FORM */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 shadow-sm min-w-0 overflow-hidden h-fit">

          <h2 className="text-3xl font-bold text-[#111827]">
            Send us a Message
          </h2>

          <p className="text-gray-500 mt-3 text-sm leading-6">
            Fill out the form below and our team will get back to you within
            24-48 business hours.
          </p>

          {/* FORM */}
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();

              const formData = {
                fullName: e.target.fullName.value,
                email: e.target.email.value,
                organization: e.target.organization.value,
                message: e.target.message.value,
                subject: selectedTopic,
                files,
              };

              console.log(formData);

              setFiles([]);
              setSelectedTopic("Select a topic");

              e.target.reset();

              const success = document.getElementById("success-message");

              if (success) {
                success.classList.remove("hidden");

                setTimeout(() => {
                  success.classList.add("hidden");
                }, 3000);
              }
            }}
          >

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-5 min-w-0">

              <div className="min-w-0">
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  required
                  className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="min-w-0">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  required
                  className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

            </div>

            
            {/* Row 2 */}
<div className="grid md:grid-cols-2 gap-5 min-w-0">

  {/* State */}
  <div className="min-w-0">
    <label className="text-sm font-medium text-gray-700">
      State
    </label>

    <input
      type="text"
      name="organization"
      placeholder="Tamil Nadu"
      className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>

  {/* Phone Number */}
  <div className="min-w-0">
    <label className="text-sm font-medium text-gray-700">
      Phone Number
    </label>

    <input
      type="tel"
      name="phone"
      placeholder="+91 98765 43210"
      required
      className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>

</div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="How can we help you today?"
                required
                className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 text-[16px] outline-none resize-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* Success Message */}
            <div
              id="success-message"
              className="hidden bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3"
            >
              Message Submitted Successfully!
            </div>

            {/* Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold py-4 rounded-xl shadow-md">
              Send Message
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Headquarters */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 shadow-sm">

              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-red-600" size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-[#111827]">
                  TNEIEA Engineering Hub
                </h4>

                <p className="text-sm text-gray-500 leading-6 mt-1">
                  No.7/21, Aradhana Apartment,
                  Temple Avenue, Srinagar Colony,
                  Saidapet, Landmark: Saidapet Court Back Side
                  <br />
                  Chennai - 600015
                </p>
              </div>

            </div>
          </div>

          {/* Support Cards */}
          <div className="mt-8 space-y-5">

            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 shadow-sm">

              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-red-600" size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-[#111827]">
                  Phone
                </h4>

                <a
                  href="tel:04422330601"
                  className="text-red-600 text-sm mt-1 block hover:underline"
                >
                  (044)- 2233 0601
                </a>
              </div>

            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 shadow-sm">

              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="text-red-600" size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-[#111827]">
                  Mobile
                </h4>

                <a
                  href="tel:+919710204300"
                  className="text-red-600 text-sm mt-1 block hover:underline"
                >
                  +91-97102 04300
                </a>

              </div>

            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 shadow-sm">

              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Info className="text-red-600" size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-[#111827]">
                  Email
                </h4>

                <a
                  href="mailto:tnagrade@gmail.com"
                  className="text-red-600 text-sm mt-1 block hover:underline break-all"
                >
                  tnagrade@gmail.com
                </a>
              </div>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
}

export default ContactSection;