import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    
    <div className='flex flex-col items-center mx-56 gap-9 '>
      <h1
      className='font-extrabold text-[30px] text-center mt-14'
      ><span className='text-[#e6005c] text-center' >Discover Your Next Adventure With AI:</span> Personalized Itineraries at Your Fingertips</h1>
      <p className='text-xs text-gray-900 text-center'>Your personal trip planner and travel curator,creating custom itineraries tailored to your interests and budget.</p>

      <Link to={'/create-trip'}>
      <Button>Get Started, It's Free</Button>
      </Link>

      <img src='/landing.jpg' className='-mt-30 mb-9'/>
    </div>
    
  )
}

export default Hero
