// components/ServiceProfile.jsx
import React, { useEffect, useState } from "react";
import { FaStar, FaHeart, FaArrowRight } from "react-icons/fa";

const ServiceProfile = () => {
  const [showButton, setShowButton] = useState(false);

  // 👇 Detect when user reaches near bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const bottomPosition =
        document.documentElement.offsetHeight - 100; // small offset

      if (scrollPosition >= bottomPosition) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex-1 px-4 pb-28 space-y-5">
      {/* ✅ Cover image */}
      <div className="bg-gray-400 h-48 md:h-64 w-full"></div>

      {/* ✅ Floating chat button */}
      <div className="relative flex justify-end -mt-6 pr-6 z-10">
        <button className="w-12 h-12 rounded-full bg-[#1D1F2A] text-white flex items-center justify-center shadow-md">
          💬
        </button>
      </div>

      {/* ✅ Provider Card */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="flex justify-between items-center">
          <span className="text-[#FF7A00] text-sm font-medium">3 km away</span>
          <div className="flex items-center text-sm text-gray-600">
            <FaStar className="text-yellow-500 mr-1" />
            4.2 | 32 Reviews
          </div>
        </div>
        <h2 className="text-[#1D1F2A] font-semibold mt-1">
          William S. Cunningham
        </h2>
        <p className="text-gray-500 text-sm mb-3">Plumber</p>

        <div className="flex text-xs text-gray-600 gap-3">
          <p>📷 21 videos & images</p>
          <p>🛠️ 2 services listed</p>
        </div>
      </div>

      {/* ✅ About Section */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <h3 className="font-semibold text-[#1D1F2A] mb-1">About</h3>
        <p className="text-gray-600 text-sm mb-1">
          Graphic design is now a popular profession, offering creative
          opportunities and career growth across various industries.
        </p>
        <p className="text-gray-600 text-sm">
          With a passion for design and innovation, I help clients bring their
          ideas to life through visual storytelling.
          <button className="text-[#1D1F2A] font-medium ml-1">Read More</button>
        </p>
      </div>

      {/* ✅ Services Section */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <h3 className="font-semibold text-[#1D1F2A] mb-3">Services</h3>
        <div className="space-y-2 text-gray-700 text-sm">
          <p>🔧 Plumbing</p>
          <p>💻 Access Mobile, Desktop & TV</p>
          <p>🚰 Water tank fit</p>
          <p>🔊 Audio install</p>
          <p>🔒 Lockset change</p>
          <p>🧹 Plumb cleaning</p>
          <p>⚡ Wiring</p>
        </div>
      </div>

      {/* ✅ Reviews Section */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-[#1D1F2A]">Reviews</h3>
          <button className="text-[#1D1F2A] text-sm font-medium">
            SEE ALL →
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              name: "William S. Cunningham",
              rating: 4.5,
              text: "The service was excellent and exceeded my expectations.",
            },
            {
              name: "Martha E. Thompson",
              rating: 4.5,
              text: "Professional and reliable, highly recommended!",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-gray-50 rounded-xl p-3"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-[#1D1F2A] text-sm">
                    {r.name}
                  </h4>
                  <div className="flex items-center text-sm text-gray-700">
                    <FaStar className="text-yellow-500 mr-1" />
                    {r.rating}
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-1">{r.text}</p>
                <div className="flex items-center text-gray-500 text-xs mt-2 gap-3">
                  <FaHeart className="text-red-500" /> 578
                  <span>•</span> 2 Weeks Ago
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Images Section */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <h3 className="font-semibold text-[#1D1F2A] mb-3">Images</h3>
        <div className="grid grid-cols-4 gap-3">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="w-full aspect-square bg-gray-300 rounded-lg"
              ></div>
            ))}
        </div>
      </div>

      {/* ✅ Videos Section */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-24">
        <h3 className="font-semibold text-[#1D1F2A] mb-3">Videos</h3>
        <div className="grid grid-cols-4 gap-3">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="w-full aspect-square bg-gray-300 rounded-lg flex items-center justify-center text-xl"
              >
                🎥
              </div>
            ))}
        </div>
      </div>

      {/* ✅ Book Service Button */}
      {showButton && (
        <div className="w-full bg-transparent px-5 pb-5">
          <button className="w-full bg-[#1D1F2A] text-white py-3 rounded-full flex justify-center items-center text-sm font-medium shadow-lg">
            Book Service <FaArrowRight className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceProfile;
