import React from "react";

function SubCategoryItem({ icon }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={icon}
        alt="category"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

export default SubCategoryItem;
