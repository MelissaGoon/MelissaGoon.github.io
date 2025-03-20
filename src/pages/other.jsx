import {React,useState} from 'react'
import { cornerstar } from '../assets/images'

const other = () => {
  return (
        <div className='w-full h-screen relative bg-portfolio bg-cover bg-center'>
           <img src={cornerstar} className='corner-star' alt='✷'/>
           <section className='absolute left-0 right-0 z-10 p-7 sm:p-16 w-full min-h-svh sm:top-24 top-28 bg-black'>

           </section>

        </div>
  )
}

export default other