import React from 'react'
import ReceiveMsg from '../../components/client/chatbox/ReceiveMsg'
import SendMsg from '../../components/client/chatbox/SendMsg'

const ChatForm = ({ contactName = "Virginia M. Patterson" }) => {
  
  
  const messages = [
    {
      id: 1,
      type: 'sent',
      textMessage: "Hi, Nicholas Good Evening 😊",
      time: "10:45",
      image: null
    },
    {
      id: 2,
      type: 'sent',
      textMessage: "How was your UI/UX Design Course Like. ? 😊",
      time: "12:45",
      image: null
    },
    {
      id: 3,
      type: 'received',
      textMessage: "Hi, Morning too Ronald",
      time: "15:29",
      image: null
    },
    {
      id: 4,
      type: 'received',
      textMessage: "Hello, i also just finished the Sketch Basic ⭐⭐⭐⭐⭐",
      time: "15:29",
      image: "https://via.placeholder.com/40"
    },
    {
      id: 5,
      type: 'sent',
      textMessage: "OMG, This is Amazing..",
      time: "13:59",
      image: null
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      
     
      <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">{contactName}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
      
      
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 px-6 py-2 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-700">Today</span>
          </div>
        </div>

       
        <div className="space-y-3">
          {messages.map((msg) => {
            
            if (msg.type === 'sent') {
              return (
                <SendMsg 
                  key={msg.id}
                  textMessage={msg.textMessage}
                  image={msg.image}
                />
              );
            }
           
            else {
              return (
                <ReceiveMsg 
                  key={msg.id}
                  textMessage={msg.textMessage}
                  image={msg.image}
                />
              );
            }
          })}
        </div>

      </div>

      {/* Message Input Area */}
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-3">
            <input
              type="text"
              placeholder="Message"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <button className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </button>
          </div>
          <button className="bg-gray-900 p-4 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatForm