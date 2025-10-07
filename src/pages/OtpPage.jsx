// pages/OtpPage.jsx
import React from "react";
import Header from "../components/Header";
import OtpVerification from "../components/OtpVerification";

const OtpPage = () => {
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <Header />
      <OtpVerification />
    </div>
  );
};

export default OtpPage;
