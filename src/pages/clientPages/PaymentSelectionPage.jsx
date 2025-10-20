import React from 'react'
import Header from '../../components/Header'
import PaymentSelection from '../../components/PaymentSelection'
import CourseItem from '../../components/CourseItem'

const PaymentSelectionPage = () => {
  return (
    <div>
      <Header type='simple' title='PAYMENT METHODS'/>
      <CourseItem/>
      <PaymentSelection/>

    </div>
  )
}

export default PaymentSelectionPage
