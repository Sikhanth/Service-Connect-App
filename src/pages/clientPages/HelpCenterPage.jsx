import React, { useState } from 'react'
import Header from '../../components/Header'
import FaqList from '../../components/client/FaqList'
import Contact from '../../components/client/Contact'

const HelpCenterPage = () => {
  const [currentEvent, setCurrent] = useState('FAQ');

  return (
    <div className='bg-[#D9D9DB] min-h-screen'>
      <Header type='simple' title='HELP CENTER' />

      {/* Buttons */}
      <div className="flex w-full border-b border-gray-300">
        {/* FAQ Button */}
        <button
          onClick={() => setCurrent('FAQ')}
          className={`relative w-1/2 py-3 font-semibold text-sm transition-all duration-300
            ${currentEvent === 'FAQ'
              ? 'bg-[#D9D9DB] text-black'
              : 'bg-white text-black hover:bg-white'}`}
        >
          FAQ
          <span
            className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-300
              ${currentEvent === 'FAQ' ? 'bg-black' : 'bg-transparent'}`}
          ></span>
        </button>

        {/* Contact Button */}
        <button
          onClick={() => setCurrent('Contact')}
          className={`relative w-1/2 py-3 font-semibold text-sm transition-all duration-300
            ${currentEvent === 'Contact'
              ? 'bg-[#D9D9DB] text-black'
              : 'bg-white text-black hover:bg-white'}`}
        >
          Contact Us
          <span
            className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-300
              ${currentEvent === 'Contact' ? 'bg-black' : 'bg-transparent'}`}
          ></span>
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pt-6">
        {currentEvent === 'FAQ' ? <FaqList /> : <Contact />}
      </div>
    </div>
  )
}

export default HelpCenterPage
