import React, { useState } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Offers from "../../components/Offers";
import CategoryList from "../../components/client/ServiceCategory/CategoryList";
import TopServices from "../../components/client/HomeItems/TopServices";
import TopServiceProvidersList from "../../components/client/HomeItems/TopServiceProvidersList";
import ToolBar from "../../components/ToolBar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleFilterChange = (filters) => {
    console.log("Filters:", filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header type="home" title="SERVICE CONNECT" />

      <div className="flex-1 overflow-y-auto pb-28">
        <SearchBar
          showFilter={true}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
        <Offers />
        <CategoryList searchQuery={searchQuery} />
        <TopServices searchQuery={searchQuery} />
        <TopServiceProvidersList searchQuery={searchQuery} />
      </div>
      <ToolBar />
    </div>
  );
};

export default HomePage;
