import React, { useState } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import RecentSearch from "../../components/RecentSearch";

const RecentSearchPage = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (query) => {
    if (query && !recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches]);
    }
  };

  const handleDelete = (item) => {
    setRecentSearches(recentSearches.filter((s) => s !== item));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Custom Header */}
      <div className="bg-white px-4 py-4 flex items-center gap-3">
        <button onClick={() => window.history.back()} className="text-black text-xl">
          ←
        </button>
        <h2 className="text-black font-bold text-lg">SEARCH</h2>
      </div>

      {/* SearchBar without filter bar */}
      <div className="px-4 py-4">
        <SearchBar showFilter={false} onSearch={handleSearch} />
      </div>

      {/* Recent searches */}
      <RecentSearch searches={recentSearches} onDelete={handleDelete} />
    </div>
  );
};

export default RecentSearchPage;
