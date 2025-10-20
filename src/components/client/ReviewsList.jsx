import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Review from "./Reviews";

const ReviewsList = () => {
  const categorizedReviews = {
    Excellent: [
      {
        name: "Heather S. McMullen",
        rating: 4.9,
        review: "Amazing course! The instructor explained every concept clearly.",
        likes: 890,
        time: "1 week ago",
      },
      {
        name: "James Rodriquez",
        rating: 4.9,
        review: "Amazing course! Very detailed and helpful.",
        likes: 750,
        time: "3 days ago",
      },
      {
        name: "David R. Blake",
        rating: 4.2,
        review: "Good course with practical examples, though some parts were fast.",
        likes: 610,
        time: "3 weeks ago",
      },
    ],
    Good: [
      {
        name: "David R. Blake",
        rating: 4.2,
        review: "Good course with practical examples, though some parts were fast.",
        likes: 610,
        time: "3 weeks ago",
      },
    ],
    Average: [
      {
        name: "Sophia K. Lee",
        rating: 3.5,
        review: "It was okay. Some lessons were useful, but a few felt outdated.",
        likes: 280,
        time: "1 month ago",
      },
    ],
    "Below Average": [
      {
        name: "Ryan M. Taylor",
        rating: 2.8,
        review: "The course lacked depth and the examples were too simple.",
        likes: 120,
        time: "2 months ago",
      },
    ],
    Bad: [
      {
        name: "Lara J. Green",
        rating: 1.9,
        review: "Did not meet expectations. Very little useful content.",
        likes: 45,
        time: "3 months ago",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Excellent");
  const activeReviews = categorizedReviews[activeCategory];

  return (
    <div className="min-h-screen bg-[#D9D9DB] px-6 py-8 flex flex-col items-center">
      {/* ⭐ Rating Summary */}
      <div className="text-center mb-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">4.8</h2>
        <div className="flex justify-center items-center mt-1 text-lg sm:text-xl md:text-2xl">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStarHalfAlt className="text-yellow-400" />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">Based on 488 reviews</p>
      </div>

      
      <div className="w-full overflow-x-auto mb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex space-x-3 w-max px-2">
          {Object.keys(categorizedReviews).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap transition-all duration-200
                ${
                  activeCategory === category
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-black border border-gray-700 hover:bg-black hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 🧾 Scrollable Reviews */}
      <div className="w-full max-w-6xl overflow-y-auto max-h-[70vh] px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeReviews.map((r, index) => (
            <Review
              key={index}
              name={r.name}
              rating={r.rating}
              review={r.review}
              likes={r.likes}
              time={r.time}
            />
          ))}
        </div>
      </div>

      {/* Fixed Write a Review Button */}
      <button className="fixed bottom-[1cm] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] px-5 py-4 bg-black text-white rounded-full font-semibold text-base sm:text-lg md:text-xl shadow-md hover:opacity-90 transition">
        Write a Review
      </button>
    </div>
  );
};

export default ReviewsList;
