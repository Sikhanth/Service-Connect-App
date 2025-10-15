import React from 'react'
import Header from '../../../components/Header'
import ServiceRequest from '../../../components/ServiceRequest'
import BookingReceipt from '../../../components/client/BookingDetails/BookingReceipt'

const BookingDetailsPage = () => {
  return (
    <div>
      <Header type="simple" title="BOOKING DETAILS" />
      <ServiceRequest 
        buttonText="Reschedule Appointment" 
        showArrow={false} 
        bookingId="1234" 
      />
      <BookingReceipt />
    </div>
  )
}

export default BookingDetailsPage
