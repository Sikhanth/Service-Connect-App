import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ id, icon, path }) => {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      onClick={() => navigate(path)}
      className="cursor-pointer flex-shrink-0 hover:scale-105 transition-transform"
    >
      <img
        src={icon}
        alt=""
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
      />
    </div>
  );
};

export default CategoryItem;
