import React from 'react'
import Header from '../../components/Header'
import InviteFriendItem from '../../components/client/InviteFriendItem'
import { FaFacebook, FaTwitter, FaWhatsapp ,FaGooglePlus} from 'react-icons/fa';

const InviteList = () => {
    const friends = [
    { id: 1, name: "John Doe", phoneNumber: "+1 234 567 8900", buttonType: "A" },
    { id: 2, name: "Jane Smith", phoneNumber: "+1 987 654 3210", buttonType: "B" },
    { id: 3, name: "Mike Johnson", phoneNumber: "+1 555 123 4567", buttonType: "A" },
    { id: 4, name: "Sarah Williams", phoneNumber: "+1 444 999 8888", buttonType: "B" },
    { id: 5, name: "David Brown", phoneNumber: "+1 333 222 1111", buttonType: "A" },
  ]
  return (
    <div className="min-h-screen bg-[#D9D9DB]">
        <Header type='category' title='INVITE FRIEND' />
        <div className="space-y-0.2 pt-8 px-4">
            {friends.map((friend) => (
            <InviteFriendItem
                key={friend.id}
                name={friend.name}
                phoneNumber={friend.phoneNumber}
                buttonType={friend.buttonType}
            />
            ))}
        


            <h1 className='font-semibold pt-3 pl-2'>Share Invite Via</h1>
            <div className='flex items-center pt-3 pl-5 space-x-1'>
                
                <FaFacebook color="#3b5998" size="20px" />
                <FaTwitter color="#00acee" size="20px" />
                <FaGooglePlus color="red" size="20px" />
                <FaWhatsapp color="#25D366" size="20px" />               
            </div>

            </div>

      
    </div>
  )
}

export default InviteList
