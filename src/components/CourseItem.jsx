import React from 'react'

const CourseItem = () => {
  return (
    <div className="bg-[#f8f7f7] p-6">
      <div className="flex items-center bg-white p-4 rounded-2xl shadow-md space-x-4">
        {/* Black square (image placeholder) */}
        <div className="w-16 h-16 bg-black rounded-2xl"></div>

        {/* Text content */}
        <div>
          <span className="text-amber-400 font-semibold block">Graphic Design</span>
          <span className="font-semibold text-gray-800">Setup Your Graphic Desig..</span>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
