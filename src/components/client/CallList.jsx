import React from 'react'
import CallItem from './CallItem'
import { PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-react'

const CallList = () => {
  const NewCalls = [
    { name: "Peter Heaven", callHistory: "Incoming | 24-10-2025", icon: PhoneIncoming },
    { name: "Alice Johnson", callHistory: "Outgoing | 23-10-2025", icon: PhoneOutgoing },
    { name: "Mark Smith", callHistory: "Missed | 22-10-2025", icon: PhoneMissed },
    { name: "Sophia Davis", callHistory: "Incoming | 21-10-2025", icon: PhoneIncoming },
    { name: "Daniel White", callHistory: "Missed | 20-10-2025", icon: PhoneMissed },
    { name: "Emily Brown", callHistory: "Outgoing | 19-10-2025", icon: PhoneOutgoing },
  ];

  return (
    <div className="bg-[#D9D9DB] min-h-screen py-5 px-3 flex flex-col items-center space-y-0.5">
      {NewCalls.map((r, index) => (
        <CallItem
          key={index}
          name={r.name}
          callHistory={r.callHistory}
          icon={r.icon}
        />
      ))}
    </div>
  )
}

export default CallList
