import React from 'react'


const NotificationsItem = ({icon,title,description}) => {
  return (
    
    <div className='bg-[#ffffff] rounded-3xl flex items-center mx-3 my-4 p-4'>
        <div>
            <img src={icon} alt="icon_img" className='w-14 h-14' />
        </div>
        <div className='flex flex-col pl-3 space-x-2'>
            <h1 className='font-extrabold'>{title}</h1>
            
            <p className='font-medium text-sm'>{description}</p>
        </div>
    
    </div>
  )
}

export default NotificationsItem
