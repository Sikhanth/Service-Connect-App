import React from "react";
import image from "../../assets/img_propic.svg";
import { FaArrowRight } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="bg-[#F5F9FE] min-h-screen py-6 flex justify-center">
      <div className="w-full max-w-md px-4">
        
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt="propic"
            className="w-24 h-24 rounded-full shadow-md border-2 border-gray-200"
          />
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Full Name */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Nick Name */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Nick Name"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Date of Birth */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <input
              type="date"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <input
              type="email"
              placeholder="✉️ Email"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm flex items-center space-x-2">
            <select className="outline-none bg-transparent text-gray-800">
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full outline-none text-gray-800"
            />
          </div>

          {/* Gender */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <select className="w-full outline-none text-gray-800">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Profession */}
          <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Student"
              className="w-full outline-none text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative"
          >
            <span>Update Profile</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
