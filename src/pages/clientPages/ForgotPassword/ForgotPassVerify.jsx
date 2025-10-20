import React from 'react'
import OtpVerification from '../../../components/OtpVerification'
import Header from '../../../components/Header'

const ForgotPassVerify = () => {
  return (
    <div className="min-h-screen bg-[#D9D9DB] flex flex-col">
      <Header type="simple" title="FORGOT PASSWORD" />
      <OtpVerification/>
    </div>
  )
}

export default ForgotPassVerify
