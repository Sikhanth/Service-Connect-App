import React from 'react'
import Header from '../../components/Header'
import ServiceRequest from '../../components/ServiceRequest'

const ServiceRequestPage = () => {
  return (
    <div>
        <Header type="simple" title="REQUEST SERVICE" />
        <ServiceRequest />
    </div>
  )
}

export default ServiceRequestPage
