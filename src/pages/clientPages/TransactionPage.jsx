import React from 'react'
import Header from '../../components/Header'
import TransactionList from '../../components/client/Transaction/TransactionList'
import ToolBar from '../../components/ToolBar'

const TransactionPage = () => {
  return (
    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
      <Header type="category" title="Transactions" />
      <TransactionList/>
      <ToolBar/>

      
    </div>
  )
}

export default TransactionPage
