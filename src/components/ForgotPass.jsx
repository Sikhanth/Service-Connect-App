import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

const ForgotPass = ({ type }) => {
  const [visibility, setVisibility] = useState({
    password: false,
    confirm: false,
  });

  // Common styles
  const inputStyle =
    "flex items-center bg-[#6B6363] text-white rounded-2xl px-4 py-3 shadow-md";

  // Field definitions based on type
  const fields =
    type === "confirm"
      ? [
          {
            name: "password",
            placeholder: "Password",
            icon: <FaLock className="mr-3" />,
            toggle: true,
          },
          {
            name: "confirm",
            placeholder: "Confirm Password",
            icon: <FaLock className="mr-3" />,
            toggle: true,
          },
        ]
      : [
          {
            name: "email",
            placeholder: "Email",
            icon: <FaEnvelope className="text-white mr-3" />,
          },
          {
            name: "phone",
            placeholder: "Phone Number",
            icon: <FaPhoneAlt className="text-white mr-3" />,
          },
        ];

  // Toggle password visibility
  const handleToggle = (name) => {
    setVisibility((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="flex flex-col justify-center flex-grow px-6 space-y-6">
      {type === "confirm" ? (
        <h2 className="text-lg font-semibold text-[#1E1E2D]">
          Create Your New Password
        </h2>
      ) : (
        <p className="text-center text-gray-600">
          Enter your registered email or phone number to receive an OTP to reset
          your password
        </p>
      )}

      {/* Render Input Fields */}
      {fields.map((field) => (
        <div key={field.name} className={inputStyle}>
          {field.icon}
          <input
            type={
              field.toggle
                ? visibility[field.name]
                  ? "text"
                  : "password"
                : field.type || "text"
            }
            placeholder={field.placeholder}
            className="bg-transparent outline-none placeholder-white w-full"
          />
          {field.toggle && (
            <span
              onClick={() => handleToggle(field.name)}
              className="cursor-pointer"
            >
              {visibility[field.name] ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
      ))}

      {/* Continue Button */}
      <button className="relative w-full bg-[#1E1E2D] text-white rounded-full py-3 shadow-md mt-4">
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
          <FaArrowRight />
        </span>
        <span className="block text-center">Continue</span>
      </button>


    </div>
  );
};

export default ForgotPass;
