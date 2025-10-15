import React from 'react'
import Header from '../../../components/Header'
import BookedItem from '../../../components/client/BookingDetails/BookedItem'
import Toolbar from '../../../components/ToolBar'
function Bookings() {
  return (

    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
  <Header type="category" title="BOOKINGS" />

  <div className="pt-10">

    <BookedItem />
  </div>

  <Toolbar />
</div>

  )
}

export default Bookings