import React from "react";

function SubCategoryItem({ icon }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={icon}
        alt="category"
        className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

export default SubCategoryItem;
