import React from 'react'

const TransactionItem = ({title,department,payStatus}) => {
  return (
    <div className="bg-[#D9D9DB] p-3">
      <div className="flex items-center bg-white p-4 rounded-2xl shadow-md space-x-4">
        {/* Black square (image placeholder) */}
        <div className="w-16 h-16 bg-black rounded-2xl"></div>

        {/* Text content */}
        <div className="flex-col gap-1">
          <span className="text-black font-semibold  block">{title}</span>
          <span className="font-normal text-gray-800">{department}</span><br></br>
          <span className="inline-block bg-green-700 text-white text-xs md:text-sm font-semibold px-2.5 py-1 rounded-md">
        {payStatus}
</span>




        </div>
      </div>
    </div>
  )
}

export default TransactionItem
