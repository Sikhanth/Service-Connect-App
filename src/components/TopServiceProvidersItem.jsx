// components/TopServiceProvidersItem.jsx
import React from "react";

const TopServiceProvidersItem = ({ name, image }) => {
  return (
    <div className="min-w-[100px] flex-shrink-0 flex flex-col items-center">
      {/* Provider Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-2">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
            Img
          </div>
        )}
      </div>

      {/* Provider Name */}
      <p className="text-sm font-medium text-gray-800 text-center truncate w-full">
        {name}
      </p>
    </div>
  );
};

export default TopServiceProvidersItem;
