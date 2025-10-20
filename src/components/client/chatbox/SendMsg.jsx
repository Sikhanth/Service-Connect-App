import React from 'react'

const SendMsg = ({image: Image, textMessage}) => {
  return (
    <div className='flex flex-col items-end gap-2'>
        <div className='bg-blue-50 text-gray-900 rounded-3xl rounded-tr-sm shadow-md p-4 max-w-xs'>
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

export default SendMsg