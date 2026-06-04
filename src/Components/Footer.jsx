import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";


import logo from "../assets/img.png";


function Footer() {

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {

    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {

      await addDoc(collection(db, "newsletter"), {
        email: email,
        createdAt: new Date(),
      });

      alert("Subscribed Successfully");

      setEmail("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="w-full bg-[#F5EFD9] border-t border-[#D8CDB5] mt-0">

      {/* Main Footer */}
      <div className="border-t border-[#D8CDB5] bg-[#EEE4CC]">

        <div className="max-w-[1350px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] gap-8 lg:gap-4">

          {/* Logo & About */}
          <div className="max-w-[320px]">

            <div className="flex items-center gap-4">
             <Link to="/" className="flex items-center gap-4">
  <img
    src={logo}
    alt="logo"
    className="w-[40px] h-[40px] object-contain"
  />

  <h1 className="text-[22px] font-bold text-[#C1442E] leading-snug">
    TNEIEA
  </h1>
</Link>
            </div>

            <p className="text-red-700 mt-5 leading-7 md:leading-8 text-base sm:text-[16px]">
              Advancing the profession of electrical engineering through
              networking, professional development, and advocacy since 1979.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8 text-[#4B4B4B]">

              <FaTwitter className="cursor-pointer hover:text-blue-500 transition text-2xl" />

              <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition text-2xl" />

              <FaFacebookF className="cursor-pointer hover:text-blue-700 transition text-2xl" />

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-[18px] font-semibold uppercase text-[#C1442E]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 mt-6 md:mt-7 text-red-700 text-base sm:text-[16px]">

              <Link
                to="/about"
                className="hover:text-black transition"
              >
                About TNEIEA
              </Link>

              <Link
                to="/membership"
                className="hover:text-black transition"
              >
                Membership Plans
              </Link>

              <Link
                to="/events"
                className="hover:text-black transition"
              >
                Upcoming Events
              </Link>

              <Link
                to="/contact"
                className="hover:text-black transition"
              >
                Contact US
              </Link>

            </div>
          </div>

          {/* Support */}
          <div>

            <h3 className="text-[18px] font-semibold uppercase text-[#C1442E]">
              Support
            </h3>

            <div className="flex flex-col gap-2 mt-6 md:mt-7 text-red-700 text-base sm:text-[16px]">

           <Link to="/privacy_policy">Privacy Policy</Link>
            

               <Link to="/terms_conditions" className="hover:text-black transition">
Terms & Conditions
</Link>

           <Link to="/refund_policy" className="hover:text-black transition">
  Refund Policy
</Link>

       <Link to="/return_policy" className="hover:text-black transition">
  Return Policy
</Link>

<Link to="/cancellation" className="hover:text-black transition">
  Cancellation Policy
</Link>
            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-[18px] font-semibold uppercase text-[#C1442E]">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 mt-5 text-red-700 text-base sm:text-[16px]">

              <div className="flex items-start gap-1">

                <MapPin
                  size={20}
                  className="text-[#B91C1C] mt-1 shrink-0"
                />

                <p className="max-w-[420px] leading-7 md:leading-8 text-base sm:text-[16px]">
                  No.7/21, Aradhana Apartment, Temple Avenue,
                  Srinagar Colony, Saidapet, Chennai - 600015.
                  Landmark: Saidapet Court Back Side
                </p>

              </div>

              <div className="flex items-center gap-2">

                <Phone size={20} className="text-[#B91C1C]" />

                <a
                  href="tel:+919710204300"
                  className="hover:text-black transition"
                >
                  +91-97102 04300
                </a>

              </div>

              <div className="flex items-center gap-2">

                <Mail size={20} className="text-[#B91C1C]" />

                <a
                  href="mailto:tnagrade@gmail.com"
                  className="break-all hover:text-black transition"
                >
                  tnagrade@gmail.com
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#D8CDB5] bg-[#E3D7BB]">

        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-red-700 text-sm sm:text-[15px] text-center md:text-left">
            © 2026 TNEIEA. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-red-700 text-sm sm:text-[15px]">

             <Link to="/terms_conditions" className="hover:text-black transition">
Terms & Conditions
</Link>

            <Link to="/privacy_policy">Privacy Policy</Link>

           

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;