import React from "react";
import { FaTimes } from "react-icons/fa";

const RecentSearch = ({ searches = [], onDelete }) => {
  return (
    <div className="w-full px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#1D1F2A] font-semibold text-sm">Recents Search</h3>
        <button className="text-[#1D1F2A] text-sm font-semibold flex items-center gap-1">
          SEE ALL <span className="text-base">›</span>
        </button>
      </div>

      {/* List of recent searches */}
      <div className="flex flex-col">
        {searches.length === 0 ? (
          <p className="text-gray-400 text-sm">No recent searches</p>
        ) : (
          searches.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-100"
            >
              <span className="text-gray-500 text-sm">{item}</span>
              <button onClick={() => onDelete(item)}>
                <FaTimes className="text-[#6B5B57]" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentSearch;
