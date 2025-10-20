import React from "react";
import serviceProfile from "../../../assets/service_prof.svg";

const ServiceRequestReciept = () => {
  return (
    <div className="bg-[#D9D9DB] min-h-screen py-8">
      {/* ===== Profile Section ===== */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 bg-[#D9D9DB]">
        <div className="flex items-center">
          <img
            src={serviceProfile}
            className="mr-4 w-16 h-16"
            alt="Service Profile"
          />
          <div>
            <h1 className="text-xl font-semibold">Nazrul Islam</h1>
            <p className="text-gray-600">Electrician 💪</p>
          </div>
        </div>
      </div>

      
      {/* ===== Booking / Invoice Section ===== */}
<div className="w-full max-w-md sm:max-w-lg md:max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-6 rounded-lg shadow-sm mt-6">
  <div className="mb-4">
    <h1 className="font-semibold text-base sm:text-lg md:text-xl">Title</h1>
    <p className="font-normal pl-2 sm:pl-3">Bulb Change</p>

    <h1 className="font-semibold mt-3 text-base sm:text-lg md:text-xl">Description</h1>
    <p className="font-normal pl-2 sm:pl-3">
      Good service with friendly behaviour
    </p>
  </div>

  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1D1F2A] mb-4">
    Appointment
  </h1>

  {/* Date and Time */}
  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-2 text-sm sm:text-base md:text-base font-medium text-[#1D1F2A]">
    <div className="bg-[#EEEEEF] rounded-md px-3 sm:px-6 py-1 sm:py-2">
      <p>June 10, 2014</p>
    </div>
    <div className="bg-[#EEEEEF] rounded-md px-3 sm:px-6 py-1 sm:py-2">
      <p>9:41 AM</p>
    </div>
  </div>

  {/* Invoice Section */}
  <div className="mt-4 sm:mt-6">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-[#1D1F2A]">Invoice</h2>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm sm:text-base md:text-base text-[#1D1F2A]">
        <thead>
          <tr className="border-b border-black">
            <th className="text-left py-1 sm:py-2">Sl.No</th>
            <th className="text-left py-1 sm:py-2">Description</th>
            <th className="text-left py-1 sm:py-2">Qty</th>
            <th className="text-left py-1 sm:py-2">Price</th>
            <th className="text-left py-1 sm:py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-black">
            <td className="py-1 sm:py-2">1</td>
            <td className="py-1 sm:py-2">Bulb Change</td>
            <td className="py-1 sm:py-2">1</td>
            <td className="py-1 sm:py-2">300</td>
            <td className="py-1 sm:py-2">300</td>
          </tr>
          <tr className="border-t font-semibold">
            <td colSpan="4" className="text-right py-1 sm:py-2">Grand Total</td>
            <td className="py-1 sm:py-2">300</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Terms */}
    <div className="mt-4 sm:mt-6">
      <p className="text-base sm:text-lg font-medium mb-1">Terms and Conditions</p>
      <p className="pl-2 sm:pl-6 text-sm sm:text-base text-gray-700">Valid up to 1 month</p>

      <div className="mt-2 sm:mt-4">
        <p className="text-sm sm:text-base font-medium mb-1 text-amber-700">
          Additional Requirements 🛑
        </p>
        <p className="pl-2 sm:pl-6 text-sm sm:text-base text-gray-700">Provide Ladder</p>
        <p className="pl-2 sm:pl-6 text-sm sm:text-base text-gray-700">Bulb should be provided</p>
      </div>
    </div>
  </div>
</div>


      {/* ===== Buttons Section (Match Receipt Width) ===== */}
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="mt-8">
          <button className="w-full py-4 bg-black text-white rounded-full font-semibold text-base sm:text-lg md:text-xl shadow-md hover:opacity-90 transition">
            Service Status
          </button>
        </div>

        <div className="mt-4 mb-10">
          <button className="w-full py-4 bg-black text-white rounded-full font-semibold text-base sm:text-lg md:text-xl shadow-md hover:opacity-90 transition">
            Payment Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestReciept;
