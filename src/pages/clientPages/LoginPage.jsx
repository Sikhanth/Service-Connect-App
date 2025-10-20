// pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/client/LoginComponents/AppHeader";
import AuthFooter from "../../components/client/LoginComponents/AuthFooter";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ Hook at top level

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted");

    // ✅ Navigate to OTP page
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col items-center py-6">
      <AppHeader />

      {/* Form */}
      <div className="w-full max-w-sm mx-auto mt-6 px-4">
        <h2 className="text-xl font-bold text-[#1D1F2A] mb-2">Let’s Sign In.!</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login to Your Account to Continue your Courses
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md"
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center text-white opacity-70 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Remember me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="accent-[#1D1F2A]" />
              <label htmlFor="remember" className="text-gray-700">
                Remember Me
              </label>
            </div>
            <span className="text-gray-700 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative"
          >
            <span>Sign In</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={16} />
            </span>
          </button>
        </form>
      </div>

      {/* Footer */}
      <AuthFooter />
    </div>
  );
};

export default LoginPage;