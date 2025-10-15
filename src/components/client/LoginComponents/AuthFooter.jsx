// components/AuthFooter.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "../../../assets/google.svg";
import AppleIcon from "../../../assets/apple.svg";


const AuthFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/";

  return (
    <div className="text-center mt-8 px-4">
      <p className="text-gray-600 mb-4 text-sm">Or Continue With</p>

      <div className="flex justify-center space-x-6 mb-6">
  <button
    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center 
               hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition"
    aria-label="Sign in with Google"
  >
    <img src={GoogleIcon} alt="Google" className="w-6 h-6" /> 
  </button>

  <button
    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center 
               hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition"
    aria-label="Sign in with Apple"
  >
    <img src={AppleIcon} alt="Apple" className="w-6 h-6" />
  </button>
</div>

      {/* Conditional Link */}
      {isLoginPage ? (
        <p className="text-gray-700 text-sm">
          Don’t have an Account?{" "}
          <span
            className="font-semibold underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            SIGN UP
          </span>
        </p>
      ) : (
        <p className="text-gray-700 text-sm">
          Already have an Account?{" "}
          <span
            className="font-semibold underline cursor-pointer"
            onClick={() => navigate("/")}
          >
            SIGN IN
          </span>
        </p>
      )}
    </div>
  );
};

export default AuthFooter;
