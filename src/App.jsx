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
import PrivacyContent from "./pages/PrivacyContant";
import RefundPolicy from "./pages/RefundPolicy";
import RefundContant from "./pages/Refundcontant";

import TermsHeader from "./pages/TermsHeader";
import TermsContant from "./pages/TermsContant";

import ReturnPolicy from "./pages/ReturnPolicy";
import ReturnContant from "./pages/ReturnContant";

import Cancellation from "./pages/Cancellation";
import CancellationContant from "./pages/CancellationContant";
import MapSection from "./pages/MapSection";

function App() {
  return (
    <BrowserRouter>
      
      {/* Scroll Top */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>

        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <div className="pt-[92px]">
              <Home />
              <Benefits />
            </div>
          }
        />

        {/* ================= ABOUT PAGE ================= */}
        <Route
          path="/about"
          element={
            <div className="pt-[92px]">
              <About />
              <MissionVision />
              <StrategicAlliance />
              <FutureSection />
            </div>
          }
        />

        {/* ================= CONTACT PAGE ================= */}
        <Route
          path="/contact"
          element={
            <div className="pt-[92px]">
              <ContactHero />
              <ContactSection />
              <MapSection />
            </div>
          }
        />

        {/* ================= MEMBER CREATE PAGE ================= */}
        <Route
          path="/member-create"
          element={
            <div className="pt-[92px]">
              <MemberRegistration />
            </div>
          }
        />

        {/* ================= SUPPLIER CREATE PAGE ================= */}
        <Route
          path="/supplier-create"
          element={
            <div className="pt-[92px]">
              <SupplierRegistration />
            </div>
          }
        />

        {/* ================= SERVICE PROVIDER PAGE ================= */}
        <Route
          path="/service-provider"
          element={
            <div className="pt-[92px]">
              <ServiceProvider />
            </div>
          }
        />

        {/* ================= EVENT MAIN PAGE ================= */}
        {/* HELD SAFE RENDER: Hero and Gallery components loaded here single time */}
        <Route
          path="/events"
          element={
            <div className="pt-[92px]">
              <EventHero />
              <Events />
              <EventGallery />
            </div>
          }
        />

        {/* ================= MEMBERSHIP PAGE ================= */}
        <Route
          path="/membership"
          element={
            <div className="pt-[92px]">
              <MembershipHero />
              <MembershipFAQ />
            </div>
          }
        />

        {/* ================= PRIVACY POLICY PAGE ================= */}
        <Route
          path="/privacy-policy"
          element={
            <div className="pt-[92px]">
              <PrivacyPolicy />
              <PrivacyContent />
            </div>
          }
        />

        <Route
          path="/refund-policy"
          element={
            <div className="pt-[92px]">
              <RefundPolicy />
              <RefundContant />
            </div>
          }
        />

        <Route
          path="/return-policy"
          element={
            <div className="pt-[92px]">
              {/* <ReturnPolicy /> */}
              <ReturnContant />
            </div>
          }
        />

        <Route 
          path="/cancellation"
          element={
            <div className="pt-[92px]">
              {/* <Cancellation /> */}
              <CancellationContant />
            </div>
          }
        />
        
        <Route
          path="/Terms-Header"
          element={
            <div className="pt-[92px]">
              <TermsHeader />
              <TermsContant />
            </div>
          }
        />

        {/* ================= DYNAMIC EVENT DASHBOARD DETAILS PAGE ================= */}
        {/* Dynamic Route correctly aligned with event details design */}
        <Route
          path="/event-details/:id"
          element={
            <div className="pt-[92px]">
              <EventDetails />
            </div>
          }
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;