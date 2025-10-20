import React from 'react'
import serviceProfile from "../assets/service_prof.svg"
import gallerySymbol from "../assets/gallery.svg"
import imageSymbol from "../assets/image.svg"
import EditIcon from "../assets/Edit.svg"
import { FaPlus, FaArrowRight } from "react-icons/fa";

const ServiceRequest = ({ buttonText = "Conform", showArrow = true, bookingId }) => {
  return (
    <div className="bg-[#D9D9DB] min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 bg-[#D9D9DB]">
        {/* Profile Section */}
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <img src={serviceProfile} className="mr-4 w-16 h-16" alt="Service Profile" />
            <div>
              <h1 className="text-xl font-semibold">Nazrul Islam</h1>
              <p className='text-gray-600'>Electrician💪</p>
            </div>
          </div>

          {/* Booking ID */}
          {bookingId && (
            <p className="text-sm text-gray-700 mt-1 ml-[4.5rem]">Booking ID: {bookingId}</p>
          )}
        </div>

        {/* Inputs Section */}
        <div className="space-y-4 mt-6">
          <div className="rounded-lg border border-gray-300 p-3 bg-white">
            <p className="text-gray-500 text-sm mb-1">Title</p>
            <input
              type="text"
              placeholder="Change Bulb"
              className="w-full border-none focus:outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="rounded-lg border border-gray-300 p-3 bg-white">
            <p className="text-gray-500 text-sm mb-1">Description</p>
            <textarea
              id="description"
              placeholder="enter about the service"
              rows={3}
              className="w-full border-none focus:outline-none text-gray-800 placeholder-gray-400 resize-none"
            />
          </div>

          <div className="rounded-lg border border-gray-300 p-3 bg-white flex items-center justify-between">
            <p className="text-gray-500 text-sm">Image & Videos</p>
            <img src={gallerySymbol} alt="Gallery" className="w-6 h-6" />
          </div>

          {/* Preview Images */}
          <div className="flex space-x-4 flex-wrap">
            <img src={imageSymbol} className="w-16 h-16" alt="Preview" />
            <img src={imageSymbol} className="w-16 h-16" alt="Preview" />
            <img src={imageSymbol} className="w-16 h-16" alt="Preview" />
            <div className="w-16 h-16 flex items-center justify-center rounded-lg text-gray-500 cursor-pointer border border-gray-300 bg-white">
              <FaPlus className="text-2xl" />
            </div>
          </div>

          {/* Availability Section */}
          <div className='flex items-center space-x-2 mt-4'>
            <h1 className="font-medium text-2xl">Availability</h1>
            <img src={EditIcon} alt="Edit" className='h-6 w-6' />
          </div>

          {/* From Section */}
          <div className="rounded-lg border border-gray-300 p-3 bg-white">
            <p className="text-gray-500 text-sm mb-2">From</p>
            <div className="flex items-center justify-between space-x-3">
              <div className="w-1/2 rounded-lg border border-gray-300 p-3 bg-white">
                <p className="text-gray-500 text-sm mb-1">Date</p>
                <input type="date" className="w-full border-none focus:outline-none text-gray-800" />
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
          <div className="rounded-lg border border-gray-300 p-3 bg-white">
            <p className="text-gray-500 text-sm mb-2">To</p>
            <div className="flex items-center justify-between space-x-3">
              <div className="w-1/2 rounded-lg border border-gray-300 p-3 bg-white">
                <p className="text-gray-500 text-sm mb-1">Date</p>
                <input type="date" className="w-full border-none focus:outline-none text-gray-800" />
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

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative"
        >
          <span>{buttonText}</span>
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
