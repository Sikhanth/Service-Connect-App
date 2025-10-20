import React from 'react'
import ChatItem from './ChatItem'

const ChatList = () => {
  const NewMessages = [
    { name: "Peter Heaven", message: "Hi Good Morning", count: "3️⃣", time: "14:28" },
    { name: "Alice Johnson", message: "Are we meeting today?", count: "2️⃣", time: "09:15" },
    { name: "Mark Smith", message: "Please check the report.", count: "1️⃣", time: "11:42" },
    { name: "Sophia Davis", message: "Thanks for your help!", count: "4️⃣", time: "16:10" },
    { name: "Daniel White", message: "Can you call me?", count: "5️⃣", time: "18:30" },
    { name: "Emily Brown", message: "See you tomorrow!", count: "2️⃣", time: "20:05" },
  ];

  return (
    <div className="bg-[#D9D9DB] min-h-screen py-5 px-3 flex flex-col items-center space-y-0.2">
      {NewMessages.map((r, index) => (
        <ChatItem
          key={index}
          name={r.name}
          message={r.message}
          count={r.count}
          time={r.time}
        />
      ))}
    </div>
  )
}

export default ChatList
