import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookingReceipt = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 bg-[#D9D9DB] min-h-screen">
      <div className="bg-white p-6">
        <h1>Appointment</h1>

        {/* Date and Time */}
        <div className="flex items-center justify-center space-x-2 pt-4 pb-0 text-base font-medium text-[#1D1F2A]">
          <div className="bg-[#EEEEEF] rounded-md px-6 py-2">
            <p>June 10, 2014</p>
          </div>
          <div className="bg-[#EEEEEF] rounded-md px-6 py-2">
            <p>9:41 AM</p>
          </div>
        </div>

        {/* Invoice */}
        <div className="mt-4 bg-white p-6 text-[#7082ea] pl-0">
          <h2 className="text-xl font-semibold mb-4">Invoice</h2>

          <table className="w-full border-collapse">
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
          <div className="mt-4">
            <div>
              <p className="text-base font-medium mb-1">Terms and Conditions</p>
              <p className="text-base font-medium pl-6">Valid up to 1 month</p>
            </div>

            <div className="mt-4">
              <p className="text-base font-medium mb-1 text-amber-700">
                Additional Requirements 🛑
              </p>
              <p className="text-base font-medium pl-6">Provide Ladder</p>
              <p className="text-base font-medium pl-6">
                Bulb should be provided
              </p>
            </div>
          </div>

          
        </div>
      </div>
      {/* Accept and Pay Advance Button */}
          <button
            type="submit"
            className="w-full mt-6 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-2 rounded-full shadow-md relative"
          >
            <span>Accept and Pay Advance</span>
            <span className="ml-2 text-white text-lg">˅</span>

            {/* White round icon at the right end */}
            <span className="absolute right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-black" size={14} />
            </span>
          </button>
    </div>
  );
};

export default BookingReceipt;
