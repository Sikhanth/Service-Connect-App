import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookingReceipt = ({
  buttonText = "Accept and Pay Advance",
  showDropdown = true, // ✅ controls the ˅ icon
}) => {
  return (
    <div className="bg-[#D9D9DB] min-h-screen pt-8 px-6.5 rounded-3xl">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold text-[#1D1F2A] mb-4">
          Appointment
        </h1>

        {/* Date and Time */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-2 text-base font-medium text-[#1D1F2A]">
          <div className="bg-[#EEEEEF] rounded-md px-6 py-2">
            <p>June 10, 2014</p>
          </div>
          <div className="bg-[#EEEEEF] rounded-md px-6 py-2">
            <p>9:41 AM</p>
          </div>
        </div>

        {/* Invoice Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-[#1D1F2A]">Invoice</h2>

          <table className="w-full border-collapse text-[#1D1F2A]">
            <thead>
              <tr className="border-b border-black">
                <th className="text-left py-2">Sl.No</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Qty</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-black">
                <td className="py-2">1</td>
                <td className="py-2">Bulb Change</td>
                <td className="py-2">1</td>
                <td className="py-2">300</td>
                <td className="py-2">300</td>
              </tr>

              <tr className="border-t font-semibold">
                <td colSpan="4" className="text-right py-2">
                  Grand Total
                </td>
                <td className="py-2">300</td>
              </tr>
            </tbody>
          </table>

          {/* Terms and Conditions */}
          <div className="mt-6">
            <p className="text-lg font-medium mb-1">Terms and Conditions</p>
            <p className="pl-6 text-base text-gray-700">Valid up to 1 month</p>

            <div className="mt-4">
              <p className="text-base font-medium mb-1 text-amber-700">
                Additional Requirements 🛑
              </p>
              <p className="pl-6 text-base text-gray-700">Provide Ladder</p>
              <p className="pl-6 text-base text-gray-700">Bulb should be provided</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Action Button */}
      <button
        type="submit"
        className="w-full mt-4 mb-0 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative"
      >
        <span>{buttonText}</span>

        {/* ✅ Dropdown only if showDropdown=true */}
        {showDropdown && (
          <span className="ml-2 text-white text-lg">˅</span>
        )}

        <span className="absolute right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <FaArrowRight className="text-black" size={14} />
        </span>
      </button>
    </div>
  );
};

export default BookingReceipt;
