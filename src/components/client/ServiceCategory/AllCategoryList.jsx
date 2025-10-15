import React from "react";
import AllCategoryItem from "./AllCategoryItem";


import allIcon from "../../assets/categories_icon/All.svg";
import deliveryIcon from "../../assets/categories_icon/delivery.svg";
import homeAppIcon from "../../assets/categories_icon/home_app.svg";
import laundryIcon from "../../assets/categories_icon/laundry.svg";
import businessIcon from "../../assets/categories_icon/business.svg";
import eventsIcon from "../../assets/categories_icon/events.svg";
import cleaningIcon from "../../assets/categories_icon/cleaning.svg";
import electronicsIcon from "../../assets/categories_icon/electronics.svg";
import techIcon from "../../assets/categories_icon/technology.svg";
import healthIcon from "../../assets/categories_icon/health.svg";
import beautyIcon from "../../assets/categories_icon/beauty.svg";


const categories = [
  { icon: allIcon, title: "All" },
  { icon: deliveryIcon, title: "Delivery Services" },
  { icon: homeAppIcon, title: "Home Appliance Repair" },
  { icon: laundryIcon, title: "Laundry Service" },
  { icon: businessIcon, title: "Business Services" },
  { icon: eventsIcon, title: "Events and Partys" },
  { icon: cleaningIcon, title: "Cleaning Service" },
  { icon: electronicsIcon, title: "Electronics Repair" },
  { icon: techIcon, title: "Technology Services" },
  { icon: healthIcon, title: "Health and Fitness" },
  { icon: beautyIcon, title: "Beauty Services" },
];

const AllCategoryList = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 px-4">

   {categories.map((cat, index) => (
        <AllCategoryItem key={index} icon={cat.icon} title={cat.title} />
      ))}
    </div>
  );
};

export default AllCategoryList;
