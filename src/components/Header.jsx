import React from "react";
import {
  FaArrowLeft,
  FaBars,
  FaBell,
  FaSearch,
  FaSlidersH,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({
  type = "home", // "home" | "simple" | "category"
  title = "SERVICE CONNECT",
  onLeftClick,
}) => {
  const navigate = useNavigate();

  // Left section
  const renderLeft = () => {
    if (type === "home") {
      return (
        <button
          onClick={onLeftClick || (() => {})}
          className="text-white text-xl"
        >
          <FaBars />
        </button>
      );
    }
    return (
      <button
        onClick={onLeftClick || (() => navigate(-1))}
        className="text-white text-lg border border-white/30 rounded-full w-8 h-8 flex items-center justify-center"
      >
        <FaArrowLeft />
      </button>
    );
  };

  // Right section
  const renderRight = () => {
    if (type === "home") {
      return (
        <div className="flex items-center gap-4">
          <FaBell className="text-white text-lg" />
          <img
            src="/assets/profile.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-white"
          />
        </div>
      );
    } else if (type === "category") {
      return (
        <div className="flex items-center gap-3">
          <button className="text-white text-lg border border-white/30 rounded-full w-8 h-8 flex items-center justify-center">
            <FaSlidersH />
          </button>
          <button className="text-white text-lg border border-white/30 rounded-full w-8 h-8 flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
      );
    } else {
      return <div className="w-8" />;
    }
  };

  return (
    <div className="w-full bg-[#1D1F2A] flex items-center justify-between px-4 py-4">
      {renderLeft()}

      {/* ✅ Heading aligned to left */}
      <h2 className="text-white font-semibold text-base text-left flex-1 pl-4">
        {title}
      </h2>

      {renderRight()}
    </div>
  );
};

export default Header;
