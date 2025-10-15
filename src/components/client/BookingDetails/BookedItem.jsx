import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function BookedItem() {
  return (
    <div className="space-y-6"> 
      
      {/* === Booked Item 1 === */}
      <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-5 w-full max-w-sm mx-auto border border-gray-100">
        {/* Close Icon */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Title and View Link */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-bold text-gray-800">Tap Repair</h2>
            <span className="text-sm text-gray-600 hover:underline cursor-pointer">
              View
            </span>
          </div>

          <button
            className="text-gray-500 hover:text-red-600 text-xl font-bold"
            aria-label="Remove"
          >
            ×
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center mb-3">
          <div className="w-4 h-4 bg-purple-400 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-700 font-medium text-sm">Keshavan</p>
            <p className="text-gray-400 text-xs">Booked</p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
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
        <div className="bg-gray-900 text-white text-center text-sm rounded-full py-2 font-medium">
          Waiting for Response
        </div>
      </div>

      {/* === Booked Item 2 === */}
      <div className="relative bg-white rounded-2xl shadow-md p-4 sm:p-5 w-full max-w-sm mx-auto border border-gray-100">
        {/* Close Icon */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Title and View Link */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-bold text-gray-800">Pipe Installation</h2>
            <span className="text-sm text-gray-600 hover:underline cursor-pointer">
              View
            </span>
          </div>

          <button
            className="text-gray-500 hover:text-red-600 text-xl font-bold"
            aria-label="Remove"
          >
            ×
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center mb-3">
          <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-700 font-medium text-sm">Anand</p>
            <p className="text-gray-400 text-xs">Pending</p>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">📅</span>
            <span>March 22, 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">⏰</span>
            <span>02.00 – 04.00 PM</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <span>Amount:300/-</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">🛑</span>
            <span className="text-red-600">Additional Requirements</span>
          </div>
        </div>

        {/* Status Bar */}
        <button
          type="submit"
          className="w-full mt-4 flex items-center justify-center bg-[#259125] text-white font-semibold py-2 rounded-full shadow-md relative"
        >
          <span>Accept and Pay Advance</span>
          <span className="ml-2 text-white text-lg">˅</span>

          {/* White round icon at the right end */}
          <span className="absolute right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaArrowRight className="text-[#2E8B57]" size={14} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default BookedItem;
