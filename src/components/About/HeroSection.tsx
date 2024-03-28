import React from 'react'
import { ArrowRightFromLine } from "lucide-react";

function HeroSection() {
  return (
    <div className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all g-no-repeat bg-cover flex items-center '
       style={{ backgroundImage: `url("assets/images/AboutHeader.webp")` }} >
      <div className='mx-auto max-w-screen-lg text-center'>
        <h1 className='text-white font-black text-5xl'>Complete Business Solutions As Per Your Needs</h1>
        <button className="text-white hover:text-gray-200	hover:translate-x-3	hover:duration-700 font-bold rounded-lg py-2 px-5 border-4">
              Explore More <ArrowRightFromLine className="inline" />
            </button>
      </div>
    </div>
  )
}

export default HeroSection
