import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();

  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Membership", path: "/membership" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];
  useEffect(() => {
  const handleClickOutside = () => {
    setOpenDropdown(false);
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);
 useEffect(() => {
  setMobileMenu(false);
  setOpenDropdown(false);
}, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
      
      <div className="w-full px-5 md:px-10 lg:px-20 xl:px-40 h-[92px] flex items-center">

        {/* Logo */}
       <Link to="/" className="flex items-center gap-2">
  <img
    src={logo}
    alt="logo"
    className="w-[60px] md:w-[74px] h-[45px] md:h-[54px] object-cover"
  />

  <h1 className="text-[18px] md:text-[22px] font-bold tracking-wide text-black">
    TNEIEA
  </h1>
</Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-14 mx-auto">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group text-[17px] font-semibold transition duration-300
                ${
                  isActive
                    ? "text-black"
                    : "text-black hover:text-red-600"
                }`}
              >
                {item.name}

                {/* Bottom Highlight Line */}
                <span
                  className={`absolute left-0 -bottom-4 h-[3px] bg-black transition-all duration-300
                  ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Register Dropdown */}
        <div className="hidden lg:block relative ml-auto">
          <button
  onClick={(e) => {
    e.stopPropagation();
    setOpenDropdown(!openDropdown);
  }}
            className="flex items-center gap-2 bg-red-600 hover:bg-[#D8CDB5] transition text-white px-6 py-3 rounded-lg text-[17px] font-medium"
          >
            Register
            <ChevronDown size={18} />
          </button>

          {/* Dropdown */}
          {openDropdown && (
           <div
  onClick={(e) => e.stopPropagation()}
  className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
>
              <Link
                to="/member_create"
                className="block px-5 py-4 text-[15px] font-medium hover:bg-red-50 hover:text-red-600 transition"
              >
                Member Registration
              </Link>

              <Link
                to="/supplier_create"
                className="block px-5 py-4 text-[15px] font-medium hover:bg-red-50 hover:text-red-600 transition"
              >
                Supplier Registration
              </Link>

              <Link
                to="/service_provider"
                className="block px-5 py-4 text-[15px] font-medium hover:bg-red-50 hover:text-red-600 transition"
              >
                Service Provider Registration
              </Link>

            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
   {/* Mobile Menu Button */}
<button
  onClick={(e) => {
    e.stopPropagation();
    setMobileMenu(!mobileMenu);
  }}
  className="lg:hidden ml-auto text-black"
>
  {mobileMenu ? <X size={30} /> : <Menu size={30} />}
</button>

      </div>

      {/* Mobile Menu */}
   {mobileMenu && (
  <div
    onClick={(e) => e.stopPropagation()}
    className="lg:hidden absolute top-[92px] left-0 w-full bg-white border-t border-gray-200 shadow-md px-6 py-6 z-50"
  >

          {/* Nav Links */}
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;

               <div className="mt-6">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpenDropdown(!openDropdown);
        }}
      >
        Register
      </button>
    </div>

              return (
               <Link
  key={item.name}
  to={item.path}
  className={`text-[17px] font-semibold transition
  ${
    isActive
      ? "text-red-600"
      : "text-black hover:text-red-600"
  }`}
>
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Register */}
          <div className="mt-6">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full flex items-center justify-center gap-2 bg-black hover:bg-red-600 transition text-white px-6 py-3 rounded-lg text-[16px] font-medium"
            >
              Register
              <ChevronDown size={18} />
            </button>

            {openDropdown && (
              <div className="mt-3 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">

                <Link
                  to="/member_create"
                  className="block px-5 py-4 text-[15px] font-medium hover:bg-red-50 hover:text-red-600 transition"
                >
                  Member Create
                </Link>

                <Link
                  to="/supplier_create"
                  className="block px-5 py-4 text-[15px] font-medium hover:bg-red-50 hover:text-red-600 transition"
                >
                  Supplier Create
                </Link>

                <Link
                  to="/service_provider"
                  className="block px-5 py-4 text-[15px] font-medium hover:bg-red-50 hover:text-red-600 transition"
                >
                  Service Provider
                </Link>

              </div>
            )}
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;