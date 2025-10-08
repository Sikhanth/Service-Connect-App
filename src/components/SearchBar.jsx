import React, { useState } from "react";
import { Search, Filter } from "lucide-react";

const filterOptions = ["Near By", "10 KM", "All"];

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Near By");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3 p-4 bg-gray-50">
      {/* 🔍 Search bar */}
      <div className="w-full flex items-center justify-between bg-[#736A68] text-white rounded-full px-4 py-3 shadow-md">
        <Search className="w-5 h-5 text-white mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder={searchTerm ? "" : "Search for..."}
          className="bg-transparent flex-1 outline-none placeholder-white text-center text-sm"
        />
        <Filter className="w-5 h-5 text-white ml-2" />
      </div>

      {/* ⚙️ Filter tab bar */}
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

export default SearchBar;
