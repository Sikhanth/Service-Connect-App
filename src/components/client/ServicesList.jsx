import React, { useState } from "react";
import ServicesItem from "./ServicesItem";

const ServicesList = () => {
  const servicesProvided = {
    Ongoing: [
      {
        serviceCategory: "Graphic Design",
        description: "Well Defined Structured services",
        rating: "4.2",
      },
      {
        serviceCategory: "Graphic Design",
        description: "Well Defined Structured services",
        rating: "4.2",
      },
      {
        serviceCategory: "Graphic Design",
        description: "Well Defined Structured services",
        rating: "4.2",
      },
    ],
    Completed: [
      {
        serviceCategory: "Graphic Design",
        description: "Well Defined Structured services",
        rating: "4.2",
      },
      {
        serviceCategory: "Graphic Design",
        description: "Well Defined Structured services",
        rating: "4.2",
      },
      {
        serviceCategory: "Graphic Design",
        description: "Well Defined Structured services",
        rating: "4.2",
      },
    ],
  };

  const [services, setServices] = useState("Ongoing");
  const [hovered, setHovered] = useState(null);
  const servicesAvailable = servicesProvided[services];

  return (
    <div className="min-h-screen bg-[#D9D9DB] px-6 py-8 flex flex-col items-center">
      {/* Category Buttons */}
      <div className="flex mb-6 w-full max-w-sm mx-auto">
        {["Ongoing", "Completed"].map((category, index) => (
          <button
            key={category}
            onClick={() => setServices(category)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`flex-1 font-semibold text-sm sm:text-base md:text-lg transition-colors duration-200
              ${
                index === 0
                  ? "rounded-l-full border border-[#736A68]"
                  : "rounded-r-full border border-l-0 border-[#736A68]"
              }
              ${
                hovered === index
                  ? "bg-white text-[#736A68]"
                  : services === category
                  ? "bg-[#736A68] text-white shadow-md"
                  : "bg-[#736A68] text-white"
              }
              py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Service Items */}
      <div className="w-full max-w-6xl overflow-y-auto max-h-[70vh] px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesAvailable.map((service, index) => (
            <ServicesItem
              key={index}
              serviceCategory={service.serviceCategory}
              description={service.description}
              rating={service.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
