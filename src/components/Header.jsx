// components/OtpHeader.jsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#1D1F2A] flex items-center px-4 py-4">
      <button onClick={() => navigate(-1)} className="text-white text-lg">
        <FaArrowLeft />
      </button>
      <h2 className="flex-1 text-center text-white font-bold text-lg">
        OTP VERIFICATION
      </h2>
    </div>
  );
};

export default Header;
