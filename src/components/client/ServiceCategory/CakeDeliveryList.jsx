import React from "react";
import CakeDeliveryItem from "./CakeDeliveryItem";
import cake1 from "../../../assets/cake.png";
import cake2 from "../../../assets/cake.png";
import cake3 from "../../../assets/cake.png";

const cakeData = [
  {
    image: cake1,
    distance: "3 km away",
    name: "Thomas",
    priceRange: "280 - 300",
    rating: 4.2,
    reviews: 78,
  },
  {
    image: cake2,
    distance: "2 km away",
    name: "Sweet Moments",
    priceRange: "250 - 400",
    rating: 4.6,
    reviews: 102,
  },
  {
    image: cake3,
    distance: "5 km away",
    name: "Cake House",
    priceRange: "220 - 350",
    rating: 4.3,
    reviews: 89,
  },
  {
    image: cake3,
    distance: "6 km away",
    name: "Bake World",
    priceRange: "300 - 450",
    rating: 4.7,
    reviews: 120,
  },
];

const CakeDeliveryList = () => {
  return (
    <div className="px-4 py-6">
      {/* ✅ Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {cakeData.map((item, index) => (
          <CakeDeliveryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CakeDeliveryList;
