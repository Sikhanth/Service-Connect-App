// components/FilterList.jsx
import React from "react";
import FilterItem from "./FilterItem";

const FilterList = ({ title, items, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-[#1D1F2A] mb-2">{title}:</h3>
      {items.map((item, index) => (
        <FilterItem
          key={index}
          label={item.label}
          checked={item.checked}
          onChange={() => onChange(index)}
        />
      ))}
    </div>
  );
};

export default FilterList;
