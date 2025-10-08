import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryItem from "./CategoryItem";

// ✅ Import icons
import cleaningIcon from "../assets/service_icons/cleaning.svg";
import electricalIcon from "../assets/service_icons/electrical.svg";
import beautyIcon from "../assets/service_icons/beauty.svg";
import deliveryIcon from "../assets/service_icons/delivery.svg";
import technologyIcon from "../assets/service_icons/technology.svg";

const categories = [
  { id: 1, name: "Cleaning", icon: cleaningIcon, path: "/services/cleaning" },
  { id: 2, name: "Electrical", icon: electricalIcon, path: "/services/electrical" },
  { id: 3, name: "Beauty", icon: beautyIcon, path: "/services/beauty" },
  { id: 4, name: "Delivery", icon: deliveryIcon, path: "/services/delivery" },
  { id: 5, name: "Technology", icon: technologyIcon, path: "/services/technology" },
];

const CategoryList = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-3">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg">Service Categories</h2>
        <button
          onClick={() => navigate("/services/all")}
          className="text-black font-medium hover:underline text-sm"
        >
          See All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
  {categories.map((item) => (
    <CategoryItem
      key={item.id}
      id={item.id}
      name={item.name}
      icon={item.icon}
      path={item.path}
    />
  ))}
</div>
</div>
  );
};

export default CategoryList;
