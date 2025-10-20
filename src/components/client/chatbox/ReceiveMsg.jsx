import React from 'react'

const ReceiveMsg = ({image: Image, textMessage}) => {
  return (
    <div className='flex flex-col items-start gap-2'>
        <div className='bg-[#746A69] text-white rounded-3xl rounded-tl-sm shadow-md p-4 max-w-xs'>
            <p className='text-sm'>{textMessage}</p>
        </div>
        
        
        {Image && (
          <div className='w-10 h-10'>
            <img src={Image} alt="message" className='rounded-full w-full h-full object-cover' />
          </div>
        )}
    </div>
  )
}

export default ReceiveMsg