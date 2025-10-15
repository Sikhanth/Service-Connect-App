import React from "react";
import Header from "../../components/Header";
import ToolBar from "../../components/ToolBar";
import AllCategoryList from "../../components/client/ServiceCategory/SubCategoryList";

const SubCategoryPage = () => {
  return (
    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
  
      <Header type="category" title="Delivery Services" />

      {/* Category Grid */}
      <div className="flex-1 mt-8 overflow-y-auto pb-24">
       
        <AllCategoryList />
      </div>

      {/* Toolbar */}
      <div className="fixed bottom-0 left-0 w-full z-10">
        <ToolBar />
      </div>
    </div>
  );
};

export default SubCategoryPage;

