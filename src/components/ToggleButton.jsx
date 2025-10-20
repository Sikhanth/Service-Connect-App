import React from 'react'

const ToggleButton = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
        {title}
      </span>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          defaultChecked
        />
        <div className="w-11 h-6 bg-[#D9D9DB] peer-focus:outline-none peer-focus:ring-4 
          peer-focus:ring-gray-400 rounded-full 
          peer dark:bg-[#D9D9DB] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
          after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white 
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
          after:transition-all dark:border-gray-600 peer-checked:bg-black">
        </div>
      </label>
    </div>
  )
}

export default ToggleButton
