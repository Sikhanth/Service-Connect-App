import React from "react";
import ComplaintItem from "./ComplaintItem"; // corrected spelling

const ComplaintList = () => { // capitalized component name
  const jobs = [
    {
      title: "Tap Repair",
      userName: "Keshavan",
      jobStatus: "pending",
      date: "March 20 2021",
      time: "9.00-10.00AM",
      amountToPay: "Amount: 300/-",
      addRequirement: "Additional Requirement",
      buttonText: "Call/chat",
    },
    {
      title: "Tap Repair",
      userName: "Keshavan",
      jobStatus: "resolved",
      date: "March 20 2021",
      time: "9.00-10.00AM",
      amountToPay: "Amount: 300/-",
      addRequirement: "Additional Requirement",
      buttonText: "Complete Payment",
    },
    {
      title: "Tap Repair",
      userName: "Keshavan",
      jobStatus: "completed",
      date: "March 20 2021",
      time: "9.00-10.00AM",
      amountToPay: "Amount: 300/-",
      addRequirement: "Additional Requirement",
      buttonText: "Complete Payment",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D9D9DB] px-6 py-8 flex flex-col items-center">
      <div className="w-full max-w-6xl overflow-y-auto max-h-[70vh] px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <ComplaintItem
              key={index}
              title={job.title}
              userName={job.userName}
              jobStatus={job.jobStatus}
              date={job.date}
              time={job.time}
              amountToPay={job.amountToPay}
              addRequirement={job.addRequirement}
              buttonText={job.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
