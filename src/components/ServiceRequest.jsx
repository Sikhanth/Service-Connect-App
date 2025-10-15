import React from 'react'
import serviceProfile from "../assets/service_prof.svg"
import gallerySymbol from "../assets/gallery.svg"
import imageSymbol from "../assets/image.svg"
import EditIcon from "../assets/Edit.svg"
import { FaPlus, FaArrowRight } from "react-icons/fa";

const ServiceRequest = ({ buttonText = "Conform", showArrow = true, bookingId }) => {
  return (
    <div className="px-6 md:px-12 lg:px-24 bg-[#D9D9DB]">
      <div className='flex flex-col'>
        {/* Profile Section */}
        <div className='flex items-center w-30 h-30'>
          <img src={serviceProfile} className="mr-4" alt="Service Profile" />
          <div className="whitespace-nowrap">
            <h1 className="text-xl font-semibold">Nazrul Islam</h1>
            <p className='text-gray-600'>Electrician💪</p>
          </div>
        </div>

        {/* ✅ Booking ID (optional) */}
        {bookingId && (
          <p className="text-sm text-gray-700 mt-1 ml-[4.5rem]">Booking ID: {bookingId}</p>
        )}
      </div>

      <div className="px-6 md:px-12 lg:px-24 space-y-4">
        <div className="w-full rounded-lg border border-gray-300 p-3 bg-white">
          <p className="text-gray-500 text-sm mb-1">Title</p>
          <input
            type="text"
            placeholder="Change Bulb"
            className="w-full border-none focus:outline-none text-gray-800 placeholder-gray-400"
          />
        </div>

        <div className="w-full rounded-lg border border-gray-300 p-3 bg-white">
          <p className="text-gray-500 text-sm mb-1">Description</p>
          <textarea
            id="description"
            placeholder="enter about the service"
            rows={3}
            className="w-full border-none focus:outline-none text-gray-800 placeholder-gray-400 resize-none"
          />
        </div>

        <div className="w-full rounded-lg border border-gray-300 p-3 bg-white flex items-center justify-between">
          <p className="text-gray-500 text-sm">Image & Videos</p>
          <img
            src={gallerySymbol}
            alt="Gallery"
            className="w-6 h-6 object-contain"
          />
        </div>

        <div className="flex space-x-4">
          <img src={imageSymbol} className="w-16 h-16" alt="Preview" />
          <img src={imageSymbol} className="w-16 h-16" alt="Preview" />
          <img src={imageSymbol} className="w-16 h-16" alt="Preview" />
          <div className="w-16 h-16 flex items-center justify-center rounded-lg text-gray-500 cursor-pointer">
            <FaPlus className="text-2xl" />
          </div>
        </div>

        <div className='flex items-center space-x-1'>
          <h1 className="font-medium text-2xl">Availability</h1>
          <img src={EditIcon} alt="" className='h-8 w-8' />
        </div>

        {/* From Section */}
        <div className="w-full rounded-lg border border-gray-300 p-3">
          <p className="text-gray-500 text-sm mb-2">From</p>

          <div className="flex items-center justify-between space-x-3">
            <div className="w-1/2 rounded-lg border border-gray-300 p-3 bg-white">
              <p className="text-gray-500 text-sm mb-1">Date</p>
              <input
                type="date"
                className="w-full border-none focus:outline-none text-gray-800"
              />
            </div>

            <div className="w-1/2 rounded-lg border border-gray-300 p-3 bg-white">
              <p className="text-gray-500 text-sm mb-1">Time</p>
              <input
                type="text"
                placeholder="12:00 PM"
                className="w-full border-none focus:outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* To Section */}
        <div className="w-full rounded-lg border border-gray-300 p-3">
          <p className="text-gray-500 text-sm mb-2">To</p>

          <div className="flex items-center justify-between space-x-3">
            <div className="w-1/2 rounded-lg border border-gray-300 p-3 bg-white">
              <p className="text-gray-500 text-sm mb-1">Date</p>
              <input
                type="date"
                className="w-full border-none focus:outline-none text-gray-800"
              />
            </div>

            <div className="w-1/2 rounded-lg border border-gray-300 p-3 bg-white">
              <p className="text-gray-500 text-sm mb-1">Time</p>
              <input
                type="text"
                placeholder="12:00 PM"
                className="w-full border-none focus:outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Configurable Button */}
      <div className="px-6 md:px-12 lg:px-24 pb-10">
        <button
          type="submit"
          className="w-full mt-6 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative"
        >
          <span>{buttonText}</span>

          {/* Conditionally render arrow */}
          {showArrow && (
            <span className="absolute right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={16} />
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

export default ServiceRequest
