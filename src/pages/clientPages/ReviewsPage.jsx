import React from 'react'
import Header from '../../components/Header'
import ReviewsList from '../../components/client/ReviewsList'


const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-[#E9E9E9] flex flex-col">        
      <Header type="simple" title="REVIEWS" />
      <div>
    <ReviewsList/>
    </div>
    </div>
    
  )
}

export default ReviewsPage
