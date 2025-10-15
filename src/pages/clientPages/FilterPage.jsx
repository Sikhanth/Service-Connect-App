// pages/FilterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterList from "../../components/FilterList";

const FilterPage = () => {
  const navigate = useNavigate();

  const [subCategories, setSubCategories] = useState([
    { label: "xxxxxxxxxxxxxx", checked: false },
    { label: "xxxxxxxxx", checked: true },
    { label: "xxxxxxxxx", checked: true },
    { label: "xxxxxxxxxxxx", checked: false },
  ]);

  const [price, setPrice] = useState([
    { label: "Paid", checked: true },
    { label: "Free", checked: false },
  ]);

  const [rating, setRating] = useState([
    { label: "4.5 & Up Above", checked: false },
    { label: "4.0 & Up Above", checked: false },
    { label: "3.5 & Up Above", checked: false },
    { label: "3.0 & Up Above", checked: false },
  ]);

  const [duration, setDuration] = useState([
    { label: "0–2 Hours", checked: false },
    { label: "3–6 Hours", checked: false },
    { label: "7–16 Hours", checked: false },
    { label: "17+ Hours", checked: false },
  ]);

  const handleChange = (list, setList, index) => {
    const updated = [...list];
    updated[index].checked = !updated[index].checked;
    setList(updated);
  };

  const handleClear = () => {
    setSubCategories(subCategories.map((i) => ({ ...i, checked: false })));
    setPrice(price.map((i) => ({ ...i, checked: false })));
    setRating(rating.map((i) => ({ ...i, checked: false })));
    setDuration(duration.map((i) => ({ ...i, checked: false })));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Custom Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-gray-200 sticky top-0 z-10">
        {/* Left section: Back + Title */}
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-black text-xl">
            ←
          </button>
          <h2 className="text-black font-bold text-lg">Filter</h2>
        </div>

        {/* Right section: Clear */}
        <button
          onClick={handleClear}
          className="text-[#1D1F2A] text-sm font-medium"
        >
          Clear
        </button>
      </div>

      {/* ✅ Filter content */}
      <div className="flex-1 overflow-y-auto px-5 md:px-10 pb-24">
        <FilterList
          title="SubCategories"
          items={subCategories}
          onChange={(index) =>
            handleChange(subCategories, setSubCategories, index)
          }
        />
        <FilterList
          title="Price"
          items={price}
          onChange={(index) => handleChange(price, setPrice, index)}
        />
        <FilterList
          title="Rating"
          items={rating}
          onChange={(index) => handleChange(rating, setRating, index)}
        />
        <FilterList
          title="Duration"
          items={duration}
          onChange={(index) => handleChange(duration, setDuration, index)}
        />
      </div>

      {/* ✅ Fixed Apply Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
        <button className="w-full bg-[#1D1F2A] text-white py-3 md:py-4 rounded-full text-sm md:text-base font-medium">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterPage;
