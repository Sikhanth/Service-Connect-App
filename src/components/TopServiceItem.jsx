import React from "react";

const TopServiceItem = ({ title, category, priceRange, rating, reviews, image }) => {
  return (
    <div className="min-w-[240px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0">
      {/* Image */}
      <div className="w-full h-32 bg-gray-200">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            Image
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        <h3 className="font-semibold text-sm mb-1 truncate">{title}</h3>

        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>₹{priceRange}</span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">★</span>
            <span>{rating}</span>
            <span className="text-gray-400">({reviews} Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServiceItem;
