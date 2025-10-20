import React from "react";
import { FaArrowRight } from "react-icons/fa";

function BookedItem() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 p-4 sm:p-6 md:p-8">
      {/* === Booked Item 1 === */}
      <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-5 md:p-6 w-full sm:max-w-sm md:max-w-md lg:max-w-lg border border-gray-100 transition-transform hover:scale-[1.02]">
        {/* Close Icon */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Title and View Link */}
        <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Tap Repair</h2>
            <span className="text-sm text-gray-600 hover:underline cursor-pointer">
              View
            </span>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-purple-400 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-700 font-medium text-sm md:text-base">Keshavan</p>
            <p className="text-gray-400 text-xs md:text-sm">Booked</p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">📅</span>
            <span>March 20, 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">⏰</span>
            <span>09.00 – 10.00 AM</span>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-900 text-white text-center text-sm md:text-base rounded-full py-2 font-medium">
          Waiting for Response
        </div>
      </div>

      {/* === Booked Item 2 === */}
      <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-5 md:p-6 w-full sm:max-w-sm md:max-w-md lg:max-w-lg border border-gray-100 transition-transform hover:scale-[1.02]">
        {/* Close Icon */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Title and View Link */}
        <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Pipe Installation</h2>
            <span className="text-sm text-gray-600 hover:underline cursor-pointer">
              View
            </span>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-700 font-medium text-sm md:text-base">Anand</p>
            <p className="text-gray-400 text-xs md:text-sm">Pending</p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">📅</span>
            <span>March 22, 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">⏰</span>
            <span>02.00 – 04.00 PM</span>
          </div>
        </div>

        {/* Amount & Note */}
        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <span>Amount: ₹300/-</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">🛑</span>
            <span className="text-red-600">Additional Requirements</span>
          </div>
        </div>

        {/* Status Bar */}
        <button
          type="submit"
          className="w-full mt-4 flex items-center justify-center bg-[#259125] text-white font-semibold py-2 md:py-3 rounded-full shadow-md relative hover:bg-green-700 transition"
        >
          <span className="text-sm md:text-base">Accept and Pay Advance</span>
          <span className="ml-2 text-white text-lg">˅</span>

          {/* Right arrow icon */}
          <span className="absolute right-5 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
            <FaArrowRight className="text-[#2E8B57]" size={14} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default BookedItem;
