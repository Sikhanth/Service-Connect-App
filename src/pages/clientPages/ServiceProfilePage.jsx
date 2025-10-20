// pages/ServiceProfilePage.jsx
import React from "react";
import Header from "../../components/Header";
import ServiceProfile from "../../components/ServiceProfile";

const ServiceProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#E9E9E9] flex flex-col">
      <Header type="simple" title="PROFILE" />

      <ServiceProfile />
    </div>
  );
};

export default ServiceProfilePage;
