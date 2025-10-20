import React from 'react'
import image from "../../assets/img_propic.svg";
import {
  UserRoundPen,
  CreditCard,
  Bell,
  Shield,
  Globe,
  Moon,
  FileText,
  HelpCircle,
  UserPlus,
  LogOut,
  ChevronRight
} from "lucide-react";

const ProfileSettings = () => {
    const settings = [
    { id: 1, icon: <UserRoundPen className="w-5 h-5 text-gray-700" />, label: "Edit Profile" },
    {id:2,icon:<CreditCard className='w-5 h-5 text-gray-700'/>,label:"Payment Methods"},
    {id:3,icon:<Bell className='w-5 h-5 text-gray-700'/>,label:"Notifications"},
    {id:4 ,icon:<Shield className='w-5 h-5 text-gray-700'/>,label:"Security"},
    {id:5,icon:<Globe className='w-5 h-5 text-gray-700'/>,label:"Language"},
    {id:6,icon:<Moon className='w-5 h-5 text-gray-700'/>,label:"Dark Mode" },
    { id: 7, icon: <FileText className="w-5 h-5 text-gray-700" />, label: "Terms & Conditions" },
    { id: 8, icon: <HelpCircle className="w-5 h-5 text-gray-700" />, label: "Help Center" },
    { id: 9, icon: <UserPlus className="w-5 h-5 text-gray-700" />, label: "Invite Friends" },
    { id: 10, icon: <LogOut className="w-5 h-5 text-red-600" />, label: "Log Out", textColor: "text-red-600" },
    ];
  return (
    <div className="bg-[#D9D9DB] min-h-screen py-6 flex justify-center">

  {/* Card container */}
  <div className="relative w-full max-w-sm md:max-w-lg bg-white rounded-lg shadow px-4 py-6 md:px-8 md:py-10 mt-16">

    {/* Profile Image */}
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <img
        src={image}
        alt="profile_img"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-md border-4 border-white"
      />
    </div>

    {/* Name & Email */}
    <div className="mt-20 flex flex-col items-center">
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 text-center">John Doe</h2>
      <p className="text-sm md:text-lg text-gray-600 text-center mb-4">john.doe@example.com</p>
    </div>

    {/* Settings List */}
    <div className="flex flex-col gap-2">
      {settings.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between py-2 px-2 md:px-4 hover:bg-gray-50 rounded-md transition"
        >
          <div className="flex items-center space-x-2 md:space-x-4">
            {item.icon}
            <p className={`${item.textColor || "text-gray-800"} font-medium md:text-lg`}>
              {item.label}
            </p>
          </div>
          <ChevronRight className={`${item.textColor || "text-gray-600"} w-5 h-5 md:w-6 md:h-6`} />
        </div>
      ))}
    </div>

  </div>
</div>

  )
}

export default ProfileSettings
