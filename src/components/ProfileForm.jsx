// components/ProfileForm.jsx
import React, { useState } from "react";
import { FaUserCircle, FaCalendarAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import AlertModal from "./AlertModal";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    dob: "",
    email: "",
    phone: "",
    gender: "",
    houseName: "",
    landmark: "",
    pincode: "",
    district: "",
    state: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <AlertModal
        isVisible={showAlert}
        message="Saving your profile..."
        image="/src/assets/PROCESS.svg"
        background="black"
      />

      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 py-6">
        <div className="relative mb-6">
          <FaUserCircle size={100} className="text-gray-400 md:text-[120px] lg:text-[140px]" />
          <button className="absolute bottom-1 right-1 bg-gray-700 p-1 rounded-full text-white text-xs md:text-sm">
            ✏️
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col space-y-4"
        >
          {[
            { label: "Full Name", name: "fullName" },
            { label: "Address", name: "address" },
            { label: "Date of Birth", name: "dob", icon: <FaCalendarAlt /> },
            { label: "Email", name: "email", icon: <FaEnvelope /> },
            { label: "Phone", name: "phone", prefix: "+1" },
            { label: "Gender", name: "gender", type: "select" },
            { label: "House Name", name: "houseName" },
            { label: "Land mark", name: "landmark" },
            { label: "Pin code", name: "pincode" },
            { label: "District", name: "district" },
            { label: "State", name: "state" },
          ].map((field, idx) => (
            <div key={idx}>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full bg-[#736A68] text-white rounded-xl px-4 py-3 placeholder-white shadow-md md:py-4"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <div className="relative">
                  {field.icon && (
                    <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70 md:left-5">
                      {field.icon}
                    </span>
                  )}
                  <input
                    type={field.name === "dob" ? "date" : "text"}
                    name={field.name}
                    placeholder={field.label}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full ${
                      field.icon ? "pl-10 md:pl-12" : "pl-4 md:pl-6"
                    } pr-4 py-3 md:py-4 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md`}
                  />
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 md:py-4 rounded-full shadow-md relative hover:bg-gray-800 transition"
          >
            <span className="text-sm md:text-base lg:text-lg">Continue</span>
            <span className="absolute right-4 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={16} />
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
