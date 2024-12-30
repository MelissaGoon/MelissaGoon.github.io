import React from 'react'
import { resume } from '../assets'
import { cornerstar } from '../assets/images'

const Resume = () => {
  return (
    <div className='w-full h-screen relative bg-portfolio bg-cover bg-center'>
       <img src={cornerstar} className='absolute hidden lg:block' alt='✷'/>
       <iframe src={resume} className='relative flex w-full sm:h-[calc(100vh-6rem)] h-[calc(100vh-8rem)] sm:top-24 top-28'  />
    </div>
  )
}

export default Resume