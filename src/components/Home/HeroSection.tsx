import React from "react";
import Link from "next/link";
import { ArrowRightFromLine } from "lucide-react";

function Home() {
  return (
    <>
      <header
        className="w-full h-screen z-0    
     ease-in-out overflow-hidden  duration-300 
     transition-all g-no-repeat bg-cover flex items-center "
        style={{ backgroundImage: `url("assets/images/HomeHeader.webp")` }}
      >
        <div className="item-center grid max-w-screen-xl w-full  mx-auto lg:gap-8 xl:gap-0 lg:px-4 lg:py-0 lg:grid-cols-12">
          <div className="animate__animated animate__slideInLeft animate__faster mx-auto col-span-7">
            <h1 className="lg:text-7xl md:text-4xl text-white font-bold">
              Your True Digital Transformation Partner.
            </h1>
            <p className="lg:text-2xl md:text-xl sm:text-sm text-gray-300 py-4">
              Streamline your business operations with our cutting-edge software
              solutions.
            </p>
            <button className="text-white font-bold-400 rounded-lg py-3 px-6 border hover:bg-white hover:text-black">
              Request Demo
            </button>
            <button className="text-blue-500 hover:text-blue-700	hover:translate-x-3	hover:duration-700 font-bold rounded-lg py-2 px-5 border-hidden ">
              Explore More <ArrowRightFromLine className="inline" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
