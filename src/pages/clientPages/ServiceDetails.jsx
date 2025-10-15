import React from 'react'
import Header from '../../components/Header'
import ServiceRequest from '../../components/ServiceRequest'
import BookingReceipt from '../../components/client/BookingDetails/BookingReceipt'

const ServiceDetails = () => {
  return (
    <div className="min-h-screen bg-[#E9E9E9] flex flex-col">
      <Header type="simple" title="PROFILE" />

      <ServiceRequest />
      <BookingReceipt />
    </div>
  )
}

export default ServiceDetails
