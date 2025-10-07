import React, { useState } from "react";
import { FaUserCircle, FaCalendarAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import Header from "../components/Header";
import AlertModal from "../components/AlertModal"; // ✅ renamed import

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

  const [showAlert, setShowAlert] = useState(false); // ✅ renamed from isProcessing

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile form submitted", formData);

    // Show alert modal for 3 seconds
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      console.log("Process complete!");
    }, 3000);
  };

  return (
    <>
      <AlertModal
        isVisible={showAlert}
        message="Saving your profile..."
        image="/src/assets/PROCESS.svg"
        background="black"
      />

      <div className="min-h-screen bg-[#E7E7EB] flex flex-col">
        <Header title="FILL YOUR PROFILE" icon={<IoMdArrowBack size={22} />} />

        <div className="flex flex-col items-center px-6 py-4">
          <div className="relative mb-6">
            <FaUserCircle size={100} className="text-gray-400" />
            <button className="absolute bottom-1 right-1 bg-gray-700 p-1 rounded-full text-white text-xs">
              ✏️
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col space-y-4"
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
                    className="w-full bg-[#736A68] text-white rounded-xl px-4 py-3 placeholder-white shadow-md"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <div className="relative">
                    {field.icon && (
                      <span className="absolute inset-y-0 left-4 flex items-center text-white opacity-70">
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
                        field.icon ? "pl-10" : "pl-4"
                      } pr-4 py-3 rounded-xl bg-[#736A68] text-white placeholder-white shadow-md`}
                    />
                  </div>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="mt-4 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative"
            >
              <span>Continue</span>
              <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <FaArrowRight className="text-[#1D1F2A]" size={16} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
