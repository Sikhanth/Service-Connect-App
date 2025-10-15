// components/TopServiceProvidersList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import TopServiceProvidersItem from "./TopServiceProvidersItem";

const demoProviders = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sneha Patel",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Amit Verma",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Nisha Kumar",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Ravi Singh",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const TopServiceProvidersList = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg">Top Service Providers</h2>
        <button
          onClick={() => navigate("/providers/all")}
          className="text-black font-medium hover:underline text-sm"
        >
          See All
        </button>
      </div>

      {/* Horizontal Scrollable List */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {demoProviders.map((provider) => (
          <TopServiceProvidersItem key={provider.id} {...provider} />
        ))}
      </div>
    </div>
  );
};

export default TopServiceProvidersList;
