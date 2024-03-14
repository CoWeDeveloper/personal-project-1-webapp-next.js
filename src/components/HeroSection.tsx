import React from 'react'

// absolute top-96 lg:left-96 sm:left-40 w-96
function Home() {
  return (
    <>
     <header className="w-full h-[100vh] z-0 bg-top relative 
     ease-in-out bottom-10 overflow-hidden  duration-300 
     transition-all   bg-cover flex items-center"  
     style={{backgroundImage: `url("assets/images/HomeHeader.webp")`}}>
      
      <div className='item-center grid max-w-screen-xl w-full  mx-auto lg:gap-8 xl:gap-0 lg:px-4 lg:py-0 lg:grid-cols-12'>
        <div className='mx-auto col-span-7'>

      <h1 className="text-7xl text-white font-bold ">Your True Digital Transformation Partner.</h1>
      <p className="text-2xl text-gray-300 py-4">
      Streamline your business operations with our cutting-edge software solutions.
      </p>
      <button className="text-white font-bold rounded-lg py-3 px-6 border">Request Demo</button>
      <button className="text-white font-bold rounded-lg py-2 px-5 border-hidden"> Explore More</button>
        </div>
      </div>
     </header>
    </>
  )
}

export default Home
