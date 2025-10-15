import React, { useState } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from 'react-icons/fa';

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  return (
    <div className="w-full max-w-sm mx-auto mt-6 px-4">
      <h2 className="text-xl font-bold text-[#1D1F2A] mb-6">
        Getting Started.!
    </h2>



      <form className="space-y-5">
        {/* Email */}
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
            <FaEnvelope />
          </span>
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
            <FaLock />
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
          />
          <span
            className="absolute inset-y-0 right-4 flex items-center text-white opacity-70 cursor-pointer"
            onClick={togglePassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
            <FaLock />
          </span>
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
          />
          <span
            className="absolute inset-y-0 right-4 flex items-center text-white opacity-70 cursor-pointer"
            onClick={toggleConfirm}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="accent-[#1D1F2A]" />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            Agree to Terms & Conditions
          </label>
        </div>

        {/* Sign In Button - Centered Text, Right Arrow in White Circle */}
<button
  type="submit"
  className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative"
>
  <span>Sign In</span>

  {/* Arrow inside white circle */}
  <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
    <FaArrowRight className="text-[#1D1F2A]" size={16} />
  </span>
</button>

      </form>
    </div>
  );
};

export default AuthForm;