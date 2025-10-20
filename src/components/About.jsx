import React from 'react'

const About = ({heading,content}) => {
  return (
    <div className='m-4 p-4'>
      <h2 className='font-medium font-sans'>{heading}</h2>
      <p className='text-base pt-3 font-serif'>{content}</p>
    </div>
  )
}

export default About
