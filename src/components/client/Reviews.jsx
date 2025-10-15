import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";

const Reviews = ({ name, rating, review, likes, time }) => {
  return (
    <div className="bg-white w-full max-w-[380px] h-auto rounded-[2rem] px-5 py-4 shadow-md flex flex-col space-y-2">
      {/* Top Section — Profile + Name + Rating */}
      <div className="flex items-center justify-between">
        <div className="bg-black w-12 h-12 rounded-full flex-shrink-0"></div>
        <div className="flex justify-between items-center w-full ml-4">
          <span className="font-bold text-gray-900 text-sm sm:text-base">
            {name}
          </span>

          <div className="flex items-center gap-1 border border-blue-900 bg-sky-200 font-semibold rounded-full px-2 py-0.5 text-xs sm:text-sm shadow-sm">
            <FaStar className="text-yellow-500 text-sm" /> {/* Only one star */}
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-snug mt-1">{review}</p>

      {/* Bottom Section — Likes & Time */}
      <div className="flex items-center text-gray-600 text-xs sm:text-sm font-medium mt-2">
        <div className="flex items-center gap-1 mr-6">
          <FaHeart className="text-red-500" />
          <span>{likes}</span>
        </div>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Reviews;
