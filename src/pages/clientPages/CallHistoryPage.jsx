import React from 'react'
import Header from '../../components/Header';
import ToolBar from '../../components/ToolBar';
import CallList from '../../components/client/CallList';
import ChatList from '../../components/client/ChatList';
import { useState } from 'react'

const CallHistoryPage = () => {
    const [selected, setSelected] = useState('chat');
  return (
    <div className="min-h-screen bg-[#D9D9DB">
      <Header type='category' title='CHAT' />

      <div className="min-h-screen py-3 bg-[#D9D9DB]">
      
      <div className="flex justify-center mb-2">
        <div className="inline-flex rounded-full border-2 border-gray-400 bg-white overflow-hidden">
          
          <button
                onClick={() => setSelected('Chat')}
                className={`px-28 py-2 text-sm font-medium transition-colors ${
                    selected === 'Chat'
                    ? 'bg-white text-black'
                    : 'bg-[#746A69] text-white hover:bg-white hover:text-black'
                }`}
                >
                Chat
        </button>
          
          
          <button
            onClick={() => setSelected('Call')}
            className={`px-28 py-2 text-sm font-medium transition-colors ${
                selected === 'Call'
                ? 'bg-white text-black'
                : 'bg-[#746A69] text-white hover:bg-white hover:text-black'
            }`}
            >
            Call
            </button>
        </div>
      </div>

     
      {selected === 'Chat' ? <ChatList/> : <CallList />}
    </div>

      <ToolBar/>
    </div>
    
  )
}

export default CallHistoryPage
