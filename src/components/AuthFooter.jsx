// components/AuthFooter.jsx
import React from 'react';

const AuthFooter = () => {
  return (
    <div className="text-center mt-8 px-4">
      <p className="text-gray-600 mb-4 text-sm">Or Continue With</p>

      {/* Social Login Buttons */}
      <div className="flex justify-center space-x-6 mb-6">
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
          <img
            src="/icons/google.svg"
            alt="Google"
            className="w-6 h-6 object-contain"
          />
        </button>
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
          <img
            src="/icons/apple.svg"
            alt="Apple"
            className="w-6 h-6 object-contain"
          />
        </button>
      </div>

      {/* Sign In Text */}
      <p className="text-gray-700 text-sm">
        Already have an Account?{' '}
        <span className="font-semibold underline cursor-pointer">SIGN IN</span>
      </p>
    </div>
  );
};

export default AuthFooter;
