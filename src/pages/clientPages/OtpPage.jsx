import React from "react";
import Header from "../../components/Header";
import OtpVerification from "../../components/OtpVerification";

const OtpPage = () => {
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* ✅ Simple header with back arrow + title */}
      <Header type="simple" title="OTP VERIFICATION" />

      <OtpVerification />
    </div>
  );
};

export default OtpPage;
