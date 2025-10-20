import React from 'react'


const InviteFriendItem = ({name,phoneNumber,buttonType}) => {
   
  return (
    <div className="flex items-center bg-white max-w-lg w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300">
      
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex-shrink-0"></div>

      
      <div className="flex flex-col pl-4 text-sm sm:text-base">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-gray-600 truncate max-w-[180px] sm:max-w-[250px] md:max-w-[300px]">
          {phoneNumber}
        </p>
      </div>

      <div className="flex flex-col justify-between items-end ml-auto pr-4 sm:pr-6 text-xs sm:text-sm">
        {buttonType==='A'?(
        <button className='bg-black rounded-full w-16 h-6  text-white '>
            Invite
        </button>
        ):(
        <button className='bg-[#E8F1FF] rounded-full w-16 h-6  text-black'>
            Invite
        </button>
        )
        }
      </div>
    </div>
  )
}

export default InviteFriendItem
