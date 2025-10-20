import React from 'react';
import image from "../assets/img_propic.svg";
import { FiLogOut } from 'react-icons/fi';

const SidebarButton = ({ label }) => {
  return (
    <button className="w-full bg-transparent hover:bg-[#97989D] transition duration-300 rounded-2xl p-2 text-white text-left">
      {label}
    </button>
  );
};

const RightMenu = () => {
  return (
    <div className="w-auto h-auto p-6 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900">
      {/* Profile Info */}
      <div className="flex items-center">
        <div className="relative inline-block">
          <img src={image} alt="propic" className="w-16 h-16" />
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div className="flex flex-col pl-4">
          <h1 className="font-bold text-orange-600">Stone Stellar</h1>
          <p className="font-bold text-amber-400">UID: CU7D</p>
          <p className="text-green-500 font-light">Online</p>
        </div>
      </div>

      
      <div className='flex flex-col items-start space-y-2 mt-4'>
        <SidebarButton label="My Profile"/>
        <SidebarButton label="Home"/>
        <SidebarButton label="Bookings"/>
        <SidebarButton label="Active Services"/>
        <SidebarButton label="Services"/>
        <SidebarButton label="Compliants"/>
        <SidebarButton label="Message"/>
        <SidebarButton label="Settings"/>
        <SidebarButton label="Transaction"/>
        <SidebarButton label="History"/>
        <SidebarButton label="Help Center"/>
        <SidebarButton label="Terms & Conditions"/>
        <SidebarButton label="About Us"/>
        <SidebarButton label="Invite a Friend"/>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-[#97989D] active:bg-[#97989D] transition duration-300 rounded-2xl p-2 text-white text-left">
        <FiLogOut className="w-5 h-5" />
        <span>Logout</span>
    </button>
    </div>
  );
};

export default RightMenu;
