import React from 'react';
import RecieptIcon from "../assets/rec_icon.svg";
import Barcode from "../assets/barcod.svg";

const EReciept = () => {
  const receiptDetails = [
    { key: "Name", value: "Scott R. Shoemake" },
    { key: "Email ID", value: "shoemake.redial@gmail.com" },
    { key: "Course", value: "3D Character Illustration Cre.." },
    { key: "Category", value: "Web Development" },
    { key: "Transaction ID", value: "SK345680976" },
    { key: "Price", value: "$55.00" },
    { key: "Date", value: "Nov 20, 202X / 15:45" },
    { key: "Status", value: "Paid" },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-6">
      
      {/* Receipt Icon */}
      <div className="flex items-center justify-center pt-4">
        <img src={RecieptIcon} alt="Receipt Icon" className="w-24 md:w-32 lg:w-40" />
      </div>

      {/* Barcode */}
      <div className="flex items-center justify-center pt-6">
        <img src={Barcode} alt="Barcode" className="w-56 md:w-72 lg:w-96" />
      </div>

      {/* Details Section */}
      <div className="mt-10 w-full max-w-md md:max-w-2xl px-6 md:px-10 lg:px-20">
        <div className="space-y-4 text-sm md:text-base">
          {receiptDetails.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-100 pb-2"
            >
              <span className="font-semibold text-[#1D1F2A]">{item.key}</span>
              {item.key === "Status" ? (
                <span className="bg-green-700 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-md">
                  {item.value}
                </span>
              ) : (
                <span className="text-gray-700 text-right">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EReciept;
