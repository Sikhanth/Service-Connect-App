import React, { useState } from "react";
import JobItem from "./JobItem";

const JobList = () => {
  const categorizedJobs = {
    Ongoing: [
      {
        title: "Tap Repair",
        userName: "Keshavan",
        jobStatus: "Active",
        date: "March 20 2021",
        time: "9.00-10.00AM",
        amountToPay: "Ammount:300/-",
        addRequirement: "Additonal Requirement",
        buttonText: "Complete Payement",
      },
      {
        title: "Tap Repair",
        userName: "Keshavan",
        jobStatus: "Active",
        date: "March 20 2021",
        time: "9.00-10.00AM",
        amountToPay: "Ammount:300/-",
        addRequirement: "Additonal Requirement",
        buttonText: "Complete Payement",
      },
    ],
    Completed: [
      {
        title: "Tap Repair",
        userName: "Keshavan",
        jobStatus: "Active",
        date: "March 20 2021",
        time: "9.00-10.00AM",
        amountToPay: "Ammount:300/-",
        addRequirement: "Additonal Requirement",
        buttonText: "Complete Payement",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Ongoing");
  const [hovered, setHovered] = useState(null); // for hover effect

  const activeJobs = categorizedJobs[activeCategory];

  return (
    <div className="min-h-screen bg-[#D9D9DB] px-6 py-8 flex flex-col items-center">
      {/* Joined Category Buttons */}
            <div className="flex mb-6 w-full max-w-sm mx-auto">
            {["Ongoing", "Completed"].map((category, index) => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
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
                        ? "bg-white text-[#736A68]" // hover = white background
                        : activeCategory === category
                        ? "bg-[#736A68] text-white shadow-md" // active = brown
                        : "bg-[#736A68] text-white" // default = brown
                    }
                    py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6`}
                >
                {category}
                </button>
            ))}
            </div>


      {/* Job Items */}
      <div className="w-full max-w-6xl overflow-y-auto max-h-[70vh] px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeJobs.map((r, index) => (
            <JobItem
              key={index}
              title={r.title}
              userName={r.userName}
              jobStatus={r.jobStatus}
              date={r.date}
              time={r.time}
              amountToPay={r.amountToPay}
              addRequirement={r.addRequirement}
              buttonText={r.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
