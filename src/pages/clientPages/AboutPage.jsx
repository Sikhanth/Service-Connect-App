import React from 'react'
import Header from '../../components/Header'
import About from '../../components/About'


const AboutPage = () => {
  return (
    <div>
      <Header type='simple' title='ABOUT'/>
      
      <About heading="Designation" content="The sun dipped below the horizon, casting a golden glow across the quiet village.
       Birds chirped their final songs of the day, and a gentle breeze rustled through the trees. Children laughed in 
      the distance while the aroma of freshly baked bread wafted from the small bakery at the corner, creating a perfect evening scene full of warmth and calm"/>

      <About heading="Designation" content="The sun dipped below the horizon, casting a golden glow across the quiet village.
       Birds chirped their final songs of the day, and a gentle breeze rustled through the trees. Children laughed in 
      the distance while the aroma of freshly baked bread wafted from the small bakery at the corner, creating a perfect evening scene full of warmth and calm"/>

    </div>
  )
}

export default AboutPage
