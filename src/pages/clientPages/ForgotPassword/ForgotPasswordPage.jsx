import React from 'react'
import Header from '../../../components/Header'
import ForgotPass from '../../../components/ForgotPass'

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#D4D4D6] flex flex-col">
      <Header type="simple" title="Forgot Password" />

      <div className='pt-20'>
          <ForgotPass />
      </div>

    </div>
  )
}

export default ForgotPasswordPage
