import React from "react";
import Header from "../../components/Header";
import ToolBar from "../../components/ToolBar";
import CakeDeliveryList from "../../components/client/ServiceCategory/CakeDeliveryList";
import LocationFilterBar from "../../components/LocationFilterBar";

const CakeDeliveryPage = () => {
  return (
    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
      <Header type="category" title="CAKE DELIVERY" />

      <LocationFilterBar />
      
      <div className="flex-1 mt-4 overflow-y-auto pb-24">
        <CakeDeliveryList />
      </div>

      <div className="fixed bottom-0 left-0 w-full z-10">
        <ToolBar />
      
      </div>
    </div>
  );
};

export default CakeDeliveryPage;
