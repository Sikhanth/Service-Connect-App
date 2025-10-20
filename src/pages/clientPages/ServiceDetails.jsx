import React from "react";
import Header from "../../components/Header";
import ServiceRequest from "../../components/ServiceRequest";
import BookingReceipt from "../../components/client/BookingDetails/BookingReceipt";
import { FaArrowRight } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <Header type="simple" title="SERVICE DETAILS" />

      {/* Service Request Section */}
      <ServiceRequest />

      {/* Booking Receipt Section */}
      <div className="mt-4">
        {/*Pass props to remove dropdown and set button text */}
        <BookingReceipt buttonText="Complete Payment" showDropdown={false} />
      </div>


      <div className="px-6 md:px-12 lg:px-24 mt-2 mb-8">
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-[#670200] text-white font-semibold py-3 rounded-full shadow-md relative"
        >
          <span>Raise a Complaint</span>
          <span className="absolute right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaArrowRight className="text-black" size={14} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
