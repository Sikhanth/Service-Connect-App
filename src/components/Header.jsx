// components/Header.jsx
import React from "react";
import { FaArrowLeft, FaBars, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ type = "app", title = "SERVICE CONNECT" }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#1D1F2A] flex items-center justify-between px-4 py-4">
      {/* Left Section */}
      {type === "otp" ? (
        <button onClick={() => navigate(-1)} className="text-white text-lg">
          <FaArrowLeft />
        </button>
      ) : (
        <button className="text-white text-xl">
          <FaBars />
        </button>
      )}

      {/* Center Title */}
      <h2 className="text-white font-bold text-lg flex-1 text-center">
        {title}
      </h2>

      {/* Right Section */}
      {type === "otp" ? (
        <div className="w-6" /> // keeps spacing even
      ) : (
        <div className="flex items-center gap-4">
          <FaBell className="text-white text-lg" />
          <img
            src="/assets/profile.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
