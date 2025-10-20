import React from 'react'
import { ChevronRight } from 'lucide-react'
import Header from '../../components/Header'
import ToggleButton from '../../components/ToggleButton'

const SecurityPage = () => {
  const SecurityItem = [
    { id: 1, title: "Remember Me" },
    { id: 2, title: "Biometric ID" },
    { id: 3, title: "Face ID" },
  ]

  return (
    <div className="bg-white min-h-screen">
      <Header type="simple" title="SECURITY" />

      {SecurityItem.map((r) => (
        <ToggleButton key={r.id} title={r.title} />
      ))}

      <div className="flex items-center justify-between px-4 py-2 ">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">Google Authenticator</p>
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      
      <div className="flex flex-col items-center space-y-3  px-4 absolute bottom-4 left-0 w-full">
        <button className="w-full bg-[#E8F1FF] rounded-full py-2 font-medium text-black">
          Change Pin
        </button>

        <button className="w-full bg-black rounded-full py-2 font-medium text-white">
          Change Password
        </button>
        
      </div>
    </div>
  )
}

export default SecurityPage
