"use client"
import React, { useState } from 'react'
import Image from "next/image"

// import assets 
import WhiteCloudBackground from "../../public/assets/images/WhiteCloudBackground.png";
import grayCloudBackground from "../../public/assets/images/GraycloudBackground.png"; 
import style from "../app/style/custom.module.css"

function About() {
  const [srcImage, setSrcImage]= useState(WhiteCloudBackground)
  return (
    <>
      <section className= 'bg-white w-full h-[100vh]'  >
        <div className='bg-orange-500 relative grid max-w-screen-xl lg:grid-cols-12 mx-auto p x-4 py-8 lg:py-16 items-center md:h-screen'>
          <Image className="z-0 hidden md:flex items-center w-full absolute top=[50%] 
          h-fit object-contain px-[8%] mx-auto transition-all duration-300 ease-linear " src={srcImage}
          onMouseEnter={() =>{ setSrcImage(grayCloudBackground)}} onMouseLeave={()=>{setSrcImage(WhiteCloudBackground)}}
          alt="Cloud Background" width={700} height={300} />
          <div className='z-10 w-full col-span-6'>
          <h1 className='text-8xl font-semibold  tracking-tight '>ABOUT US</h1>
          </div>  
          <div className='z-10 w-full col-span-6'>
            <div className='flex flex-wrap justify-center py-3   bg-slate-900'>

            </div>
            
          </div>
        </div>

        
      </section>
    </>
  )
}

export default About
