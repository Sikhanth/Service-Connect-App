import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Offers from "../components/Offers";
import CategoryList from "../components/CategoryList";
import TopServices from "../components/TopServices";
import TopServiceProvidersList from "../components/TopServiceProvidersList";
import ToolBar from "../components/ToolBar";

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
      {/* App Header */}
      <Header type="app" title="SERVICE CONNECT" />

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-28">
        <SearchBar
          showFilter={true}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />

        {/* Offers section below search bar */}
        <Offers />

        {/* Category and Top Lists */}
        <CategoryList searchQuery={searchQuery} />
        <TopServices searchQuery={searchQuery} />
        <TopServiceProvidersList searchQuery={searchQuery} />
      </div>

      {/* Fixed Bottom Toolbar */}
      <ToolBar />
    </div>
  );
};

export default HomePage;
