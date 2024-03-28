import React from 'react'
import { ArrowRight  } from "lucide-react";

function HeroSection() {
  return (
    <div className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all g-no-repeat bg-cover flex items-center '
       style={{ backgroundImage: `url("assets/images/AboutHeader.webp")` }} >
      <div className='mx-auto max-w-screen-lg lg:px-20 md:px-16 sm:px-5 text-center'>
        <h1 className='text-white font-black text-5xl mb-4'>Complete Business Solutions As Per Your Needs</h1>
        <button className="text-white hover:text-gray-200	hover:translate-x-3	hover:duration-700 font-bold text-es rounded-lg py-1 px-2 border-2 ">
              Explore More <ArrowRight  className="inline text-sm" />
            </button>
      </div>
    </div>
  )
}

export default HeroSection
