import React from 'react'
import { Star } from 'lucide-react'
import image from "../../assets/Image.svg";

const ServicesItem = ({ serviceCategory, description, rating }) => {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow-md w-full max-w-[380px] h-[150px] overflow-hidden">
      {/* Left Image */}
      <div className="w-1/3 h-full bg-gray-200">
        <img
          src={image}
          alt={serviceCategory}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Info Section */}
      <div className="flex flex-col justify-between p-3 w-2/3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{serviceCategory}</h3>
          <span className="font-semibold text-gray-800">{description}</span>
        </div>

        <div className="flex items-center text-xs text-gray-600">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-gray-800 font-medium">{rating}</span>
        </div>
      </div>
    </div>
  )
}

export default ServicesItem;
