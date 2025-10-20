import React from 'react'
import gallerySymbol from "../../../assets/gallery.svg"

const ComplaintForm = () => {
  return (
    <div className="bg-[#D9D9DB] min-h-screen py-1 flex flex-col justify-start">
      {/* Inputs Section */}
      <div className="space-y-4 mt-6 px-4 sm:px-6 md:px-12">
        <div className="rounded-lg border border-gray-300 p-3 bg-white">
          <p className="text-gray-500 text-sm mb-1">Title</p>
          <input
            type="text"
            placeholder="Miss behave"
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
      </div>

      {/* Button Section */}
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 md:px-12 mt-3 mb-5">
        <button className="w-full py-4 bg-[#670200] text-white rounded-full font-semibold text-base sm:text-lg md:text-xl shadow-md hover:opacity-90 transition">
          Conform Complaint
        </button>
      </div>
    </div>
  )
}

export default ComplaintForm
