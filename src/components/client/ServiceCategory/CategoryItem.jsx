import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ id, name, icon, path }) => {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      onClick={() => navigate(path)}
      className="cursor-pointer flex-shrink-0 hover:scale-105 transition-transform"
    >
      <img
        src={icon}
        alt={name}
        className="w-16 h-16 object-contain"
      />
    </div>
  );
};

export default CategoryItem;
