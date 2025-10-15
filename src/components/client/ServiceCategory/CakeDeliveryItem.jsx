import React from "react";
import { Star } from "lucide-react";

const CakeDeliveryItem = ({ image, distance, name, priceRange, rating, reviews }) => {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow-md w-full max-w-[380px] h-[150px] overflow-hidden">

      {/* 🧁 Left Image Section */}
      <div className="w-1/3 h-full bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📋 Right Info Section */}
      <div className="flex flex-col justify-between p-3 w-2/3">
        {/* 🔹 Distance & Bookmark */}
        <div className="flex items-start justify-between">
          <p className="text-xs text-orange-600 font-medium">{distance}</p>
          <img
            src="/icons/bookmark.svg"
            alt="bookmark"
            className="w-4 h-4 opacity-80"
          />
        </div>

        {/* 🧑 Name & Price */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
          <p className="text-[13px] text-gray-800 font-medium">₹{priceRange}</p>
        </div>

        {/* ⭐ Rating & Reviews */}
        <div className="flex items-center text-xs text-gray-600">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-gray-800 font-medium">{rating}</span>
          <span className="mx-2">|</span>
          <span className="text-black font-medium">{reviews} reviews</span> {/* ✅ Black color */}
        </div>
      </div>
    </div>
  );
};

export default CakeDeliveryItem;
