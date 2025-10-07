// components/OtpVerification.jsx
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("OTP Submitted:", code);
  };

  return (
    <div className="flex flex-col items-center justify-start mt-10 px-4">
      <p className="text-[#1D1F2A] text-sm mb-8 text-center">
        Code has been sent to <span className="font-semibold">(+1) ***-***-529</span>
      </p>

      {/* OTP Inputs */}
      <div className="flex space-x-4 mb-6">
        {otp.map((digit, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-12 h-12 rounded-xl bg-[#736A68] text-white text-center text-xl font-bold outline-none shadow-md"
          />
        ))}
      </div>

      <p className="text-gray-700 text-sm mb-8">
        Resend Code in <span className="font-semibold">{timer}s</span>
      </p>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        className="w-full max-w-sm flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative"
      >
        <span>Verify</span>
        <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <FaArrowRight className="text-[#1D1F2A]" size={16} />
        </span>
      </button>

      {/* Optional Numeric Keypad Mockup */}
      <div className="grid grid-cols-3 gap-6 mt-10 text-[#1D1F2A] text-xl font-semibold">
        {[1,2,3,4,5,6,7,8,9,"*",0,"⌫"].map((num, i) => (
          <button
            key={i}
            className="w-12 h-12 text-center rounded-full"
            onClick={() => {
              if (num === "⌫") {
                const newOtp = [...otp];
                const lastIndex = newOtp.findLastIndex((d) => d !== "");
                if (lastIndex >= 0) newOtp[lastIndex] = "";
                setOtp(newOtp);
              } else if (typeof num === "number" && otp.join("").length < 4) {
                const nextIndex = otp.findIndex((d) => d === "");
                if (nextIndex !== -1) {
                  const newOtp = [...otp];
                  newOtp[nextIndex] = num.toString();
                  setOtp(newOtp);
                }
              }
            }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OtpVerification;
