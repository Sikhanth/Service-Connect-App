import React from 'react'
import Header from '../../components/Header'
import ServiceRequestReciept from '../../components/client/complaintForm/ServiceRequestReciept'
import ComplaintForm from '../../components/client/complaintForm/ComplaintForm'

const ComplaintPage = () => {
  return (
      <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      {/* Header */}
      <Header type="simple" title="COMPLAINT FORM" />
      <ServiceRequestReciept />
      <ComplaintForm />
    </div>
  )
}

export default ComplaintPage
