import React from "react";
import { FaPlus, FaArrowRight } from "react-icons/fa";

const PaymentSelection = () => {
  return (
    <div className="bg-[#D9D9DB] min-h-screen p-6">
      <p className="text-gray-800 font-medium mb-4 text-center">
        Select the payment method you want to choose
      </p>

      <div className="space-y-4">
        {/* PayPal */}
        <div className="flex justify-end bg-white p-4 rounded-2xl shadow-md">
          <div className="flex items-center space-x-3 text-right">
            <span className="text-gray-900 font-semibold text-left">PayPal</span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#1D1F2A] rounded-full"
            />
          </div>
        </div>

        {/* Google Pay */}
        <div className="flex justify-end bg-white p-4 rounded-2xl shadow-md">
          <div className="flex items-center space-x-3 text-right">
            <span className="text-gray-900 font-semibold text-left">Google Pay</span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#1D1F2A] rounded-full"
            />
          </div>
        </div>

        {/* Add Button (+) */}
        <div className="flex justify-end pr-4 pt-[4cm]">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-800 transition">
            <FaPlus className="text-white" size={24} />
          </div>
        </div>

        {/* Enroll Button */}
        <div className="px-4">
          <button
            type="submit"
            className="w-full mt-8 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative hover:bg-[#2a2d3c] transition"
          >
            <span>Enroll Course - $55</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSelection;
