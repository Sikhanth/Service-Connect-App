import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const AddNewCard = () => {
  return (
    <div className='bg-[#D9D9DB] min-h-screen flex flex-col items-center pt-10'>
      
      {/* 💳 Card Section */}
      <div className="bg-gradient-to-r from-[#1E1E1E] to-[#2E2E2E] text-white rounded-2xl p-8 w-96 shadow-lg">
        <div className="font-medium flex flex-col space-y-3">
          <span className="font-mono text-2xl tracking-[0.3em] text-white font-semibold">
            1234 5678 9101
          </span>
          <span className="text-gray-300 text-sm">Valid 12/18</span>
          <span className='font-semibold text-lg'>Timmy C Hernandaz</span>
        </div>
      </div>

      {/* 📝 Form Section */}
      <div className="mt-8 w-96 space-y-5">
        <div>
          <label className="block text-gray-800 font-medium mb-2">Card Name</label>
          <input 
            type='text'
            id='card_name'
            placeholder='Belina Joy'
            className='w-full text-lg border border-gray-400 rounded-lg p-3 focus:outline-none focus:border-black bg-[#FFFFFF]'
          />
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-2">Card Number</label>
          <input 
            type='text'
            id='card_num'
            placeholder='**** **** **** ****'
            className='w-full text-lg border border-gray-400 rounded-lg p-3 focus:outline-none focus:border-black bg-[#FFFFFF]'
          />
        </div>

        <div className='flex items-center space-x-4'>
          <div className="w-1/2">
            <label className="block text-gray-800 font-medium mb-2">Expiry Date</label>
            <input 
              type="text"
              id="expiry_date"
              placeholder="MM / YY"
              className="w-full text-lg border border-gray-400 rounded-lg p-3 focus:outline-none focus:border-black bg-[#FFFFFF]"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-800 font-medium mb-2">CVV</label>
            <input 
              type='text'
              id='cvv'
              placeholder='•••'
              maxLength={3}
              className='w-full text-lg border border-gray-400 rounded-lg p-3 focus:outline-none focus:border-black bg-[#FFFFFF]'
            />
          </div>
        </div>

        {/* 🖤 Add Card Button */}
        <button
          type="submit"
          className="w-full mt-6 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative"
        >
          <span>Add Card</span>
          <span className="absolute right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaArrowRight className="text-[#1D1F2A]" size={16} />
          </span>
        </button>
      </div>
    </div>
  )
}

export default AddNewCard
