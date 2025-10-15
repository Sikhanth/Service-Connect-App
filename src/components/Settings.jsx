// components/Settings.jsx
import React from "react";
import { FaShareAlt, FaDownload, FaPrint } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="absolute top-12 right-4 bg-gray-100 rounded-xl shadow-lg p-3 w-40 z-50">
      <button className="flex items-center gap-2 text-gray-700 hover:text-black w-full py-2">
        <FaShareAlt /> Share
      </button>
      <button className="flex items-center gap-2 text-gray-700 hover:text-black w-full py-2">
        <FaDownload /> Download
      </button>
      <button className="flex items-center gap-2 text-gray-700 hover:text-black w-full py-2">
        <FaPrint /> Print
      </button>
    </div>
  );
};

export default Settings;
