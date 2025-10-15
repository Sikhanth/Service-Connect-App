// components/FilterItem.jsx
import React from "react";

const FilterItem = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-3 py-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#1D1F2A] checked:border-[#1D1F2A] flex items-center justify-center"
      />
      <span className="text-[#1D1F2A] text-sm">{label}</span>
    </label>
  );
};

export default FilterItem;
