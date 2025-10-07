import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password request:", formData);
    // After successful input, navigate to OTP verification
    navigate("/forgot-otp");
  };

  return (
    <div className="flex flex-col items-center px-6 py-6">
      <p className="text-gray-700 text-center text-sm mb-10">
        Enter your registered email or phone number to
        <br /> receive a OTP to reset your password
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col space-y-6"
      >
        {/* Email Field */}
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
            <FaEnvelope />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
            <FaPhoneAlt />
          </span>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
          />
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="mt-6 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative"
        >
          <span>Continue</span>
          <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaArrowRight className="text-[#1D1F2A]" size={16} />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ForgotPass;
