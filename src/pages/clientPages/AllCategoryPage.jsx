import React from "react";
import Header from "../../components/Header";
import ToolBar from "../../components/ToolBar";
import AllCategoryList from "../../components/client/ServiceCategory/AllCategoryList";

const AllCategoryPage = () => {
  return (
    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
      <Header type="category" title="ALL CATEGORY" />

      <div className="flex-1 mt-8 mb-8 overflow-y-auto pb-24">
          <AllCategoryList />
      </div>

      <div className="fixed bottom-0 left-0 w-full z-10">
          <ToolBar />
      </div>
    </div>
  );
};

export default AllCategoryPage;

