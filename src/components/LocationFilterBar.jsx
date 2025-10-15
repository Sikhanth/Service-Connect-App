import React, { useState } from "react";
import { MapPin, Pencil } from "lucide-react";

const filterOptions = ["Near By", "10 KM", "All"];

const LocationFilterBar = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("Near By");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3 px-4 pt-4">
      {/* 📍 Location Row (Left aligned) */}
      <div className="w-full flex items-center gap-2 text-black">
        <MapPin className="w-5 h-5 text-black" />
        <span className="text-sm font-medium">[Location name]</span>
        <Pencil className="w-4 h-4 text-black cursor-pointer" />
      </div>

      {/* 🟣 Open Request Button */}
      <div className="w-full bg-[#3E3E45] text-white text-sm font-medium text-center rounded-full py-3 shadow-md">
        Open Request (Request to Random Accounts)
      </div>

      {/* ⚙️ Filter Buttons */}
      <div className="w-full flex bg-white rounded-full shadow-md overflow-hidden">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleFilterClick(option)}
            className={`flex-1 px-5 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === option
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocationFilterBar;
