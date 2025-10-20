import React from 'react'
import ToggleButton from '../../components/ToggleButton'
import Header from '../../components/Header'

const NotificationBar = () => {
    const NotificationItem=[ { id: 1,title:"Special Offers" },
    { id: 2, title:"Sound" },
    { id: 3, title:"Vibration" },
    { id: 4, title:"General Notification" },
    { id: 5,title:"Promo & Discount" },
    { id: 6,title:"Payment Options" },
]

  return (

    <div className='bg-white space-x-1'>  
      <Header type='simple' title='NOTIFICATION SETTINGS'/>         
           {NotificationItem.map((r,id)=>
            <ToggleButton
                key={id}
                title={r.title}
            />
           )} 

    </div>
  )
}

export default NotificationBar
