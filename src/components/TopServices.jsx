// components/TopServices.jsx
import React, { useState } from "react";
import TopServiceItem from "./TopServiceItem";

const categories = ["All", "Plumbing", "Electrical", "Health", "Beauty", "Cleaning", "Technology"];

const demoServices = [
  {
    id: 1,
    category: "Plumbing",
    title: "Complete Residential Plumbing",
    priceRange: "100-200",
    rating: 4.2,
    reviews: 7830,
  },
  {
    id: 2,
    category: "Electrical",
    title: "Home Electrical Fix",
    priceRange: "150-250",
    rating: 4.5,
    reviews: 5600,
  },
  {
    id: 3,
    category: "Beauty",
    title: "Salon at Home",
    priceRange: "300-600",
    rating: 4.8,
    reviews: 1200,
  },
];

const TopServices = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? demoServices
      : demoServices.filter((s) => s.category === activeCategory);

  return (
    <div className="px-4 py-3">
      <h2 className="font-semibold text-lg mb-3">Top Services</h2>

      {/* Scrollable Nav */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scrollable Items */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide mt-4 pb-2">
        {filteredServices.map((item) => (
          <TopServiceItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TopServices;
