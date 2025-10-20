import React from 'react'

const CallItem = ({ name, callHistory, icon: Icon }) => {
  return (
    <div className="flex items-center bg-white max-w-lg w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto p-4 sm:p-6 rounded-b-lg shadow-md transition-all duration-300">
      {/* Profile Circle */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex-shrink-0"></div>

      {/* Name and Message */}
      <div className="flex flex-col pl-4 text-sm sm:text-base">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-gray-600 truncate max-w-[180px] sm:max-w-[250px] md:max-w-[300px]">
          {callHistory}
        </p>
      </div>

      {/* Icon */}
      <div className="flex flex-col justify-between items-end ml-auto pr-4">
        <Icon className="text-black" size={20} />
      </div>
    </div>
  )
}

export default CallItem
