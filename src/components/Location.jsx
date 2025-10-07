import React, { useState } from "react";

const Location = () => {
  const [manualLocation, setManualLocation] = useState("");

  const handleAllowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location Accessed:", position.coords);
          // You can save or pass these coordinates to backend
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to access location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#D9D9DB] px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center">
        <h2 className="text-[#1D1F2A] text-xl font-bold mb-6">Allow Location</h2>

        {/* Allow Button */}
        <button
          onClick={handleAllowLocation}
          className="w-full bg-[#1D1F2A] text-white font-semibold py-3 rounded-full mb-6 shadow-md hover:opacity-90 transition"
        >
          Allow
        </button>

        <p className="text-[#1D1F2A] text-sm font-medium mb-3">
          Manually Enter Location
        </p>

        {/* Manual Location Input */}
        <input
          type="text"
          placeholder="Value"
          value={manualLocation}
          onChange={(e) => setManualLocation(e.target.value)}
          className="w-full bg-[#736A68] text-white placeholder-white py-3 px-4 rounded-xl shadow-md focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Location;
