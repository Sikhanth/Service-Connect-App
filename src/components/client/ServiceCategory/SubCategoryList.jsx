import React from "react";


import bouquet from "../../../assets/delivery_icons/bouquet.svg";
import cake from "../../../assets/delivery_icons/cake.svg";
import driver from "../../../assets/delivery_icons/driver.svg";
import packers from "../../../assets/delivery_icons/packers.svg";
import pickup from "../../../assets/delivery_icons/pickup.svg";
import SubCategoryItem from "./SubCategoryItem";

const categories = [
  { icon: bouquet, title: "Bouquet Delivery" },
  { icon: cake, title: "Cake Delivery" },
  { icon: driver, title: "Driver" },
  { icon: packers, title: "Packers & Movers" },
  { icon: pickup, title: "Pick Up & Delivery" },
  
];

const SubCategoryList = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 lg:gap-8 px-4">
      {categories.map((cat, index) => (
            <SubCategoryItem key={index} icon={cat.icon} title={cat.title} />
          ))}
    </div>
  );
};

export default SubCategoryList;
