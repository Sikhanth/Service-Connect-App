import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionList = () => {
    const transactions=[
        { 
            title:"Build Personal Banking",
            department:"Web Designer",
            payStatus:"paid",
        },
        { 
            title:"Build Personal Banking",
            department:"Web Designer",
            payStatus:"paid",
        },
        { 
            title:"Build Personal Banking",
            department:"Web Designer",
            payStatus:"paid",
        },
        { 
            title:"Build Personal Banking",
            department:"Web Designer",
            payStatus:"paid",
        },
        { 
            title:"Build Personal Banking",
            department:"Web Designer",
            payStatus:"paid",
        },
    
    ]
  return (
    <div className="flex flex-col gap-y-0.5 bg-[#D9D9DB] ">
      { transactions.map((transactionitems,index)=>
      <TransactionItem
        key={index}
        title={transactionitems.title}
        department={transactionitems.department}
        payStatus={transactionitems.payStatus}
      />
    )

      }
    </div>
  )
}

export default TransactionList
