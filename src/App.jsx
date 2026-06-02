import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import About from "./pages/about";
import MissionVision from "./pages/MissionVision";
import StrategicAlliance from "./pages/StrategicAlliance";
import FutureSection from "./pages/FeatureSection";
import ContactHero from "./pages/Contact";
import ContactSection from "./pages/ContactSection";
import EventHero from "./pages/EventHero";
import EventGallery from "./pages/EventGallery";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import SupplierRegistration from "./pages/SupplierRegistration";
import ServiceProvider from "./pages/ServiceProvider";
import MemberRegistration from "./pages/MemberRegistration";
import MembershipHero from "./pages/MembershipHero";
import MembershipFAQ from "./pages/MembershipFAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyContent from "./pages/PrivacyContant"; // Check your filename spelling
import RefundPolicy from "./pages/RefundPolicy";
import RefundContant from "./pages/Refundcontant";   // Check your filename spelling
import TermsHeader from "./pages/TermsHeader";
import TermsContant from "./pages/TermsContant";     // Check your filename spelling
import ReturnContant from "./pages/ReturnContant";   // Check your filename spelling
import CancellationContant from "./pages/CancellationContant"; // Check your filename spelling
import MapSection from "./pages/MapSection";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<div className="pt-[92px]"><Home /><Benefits /></div>} />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<div className="pt-[92px]"><About /><MissionVision /><StrategicAlliance /><FutureSection /></div>} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<div className="pt-[92px]"><ContactHero /><ContactSection /><MapSection /></div>} />

        {/* REGISTRATION & PROVIDERS */}
        <Route path="/member-create" element={<div className="pt-[92px]"><MemberRegistration /></div>} />
        <Route path="/supplier-create" element={<div className="pt-[92px]"><SupplierRegistration /></div>} />
        <Route path="/service-provider" element={<div className="pt-[92px]"><ServiceProvider /></div>} />

        {/* EVENTS */}
        <Route path="/events" element={<div className="pt-[92px]"><EventHero /><Events /><EventGallery /></div>} />
        <Route path="/event-details/:id" element={<div className="pt-[92px]"><EventDetails /></div>} />

        {/* MEMBERSHIP */}
        <Route path="/membership" element={<div className="pt-[92px]"><MembershipHero /><MembershipFAQ /></div>} />

        {/* POLICIES (All paths strictly lowercase) */}
        <Route path="/privacy-policy" element={<div className="pt-[92px]"><PrivacyPolicy /><PrivacyContent /></div>} />
        <Route path="/refund-policy" element={<div className="pt-[92px]"><RefundPolicy /><RefundContant /></div>} />
        <Route path="/return-policy" element={<div className="pt-[92px]"><ReturnContant /></div>} />
        <Route path="/cancellation" element={<div className="pt-[92px]"><CancellationContant /></div>} />
        <Route path="/terms-header" element={<div className="pt-[92px]"><TermsHeader /><TermsContant /></div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;