"use client";
import { motion } from "framer-motion";
import { ArrowRightFromLine } from "lucide-react";

function TextHeroSection() {
  return (
<motion.div    
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{
          duration: 0.5,
          ease: 'linear',
        }} 
           className="lg:ml-14  ml-4 col-span-7">
            <h1 
           className="tracking-wide drop-shadow-2xl lg:text-6xl md:text-5xl  sm:text-5xl text-3xl text-white text-pretty font-bold">
              Your True Digital Transformation Partner.
            </h1>
            <p className="lg:text-xl sm:text-md text-gray-300 py-4 text-pretty">
              Streamline your business operations with our cutting-edge software
              solutions.
            </p>
            <button className="text-white font-bold-400 rounded-lg py-3 px-6 border hover:bg-white hover:text-black">
              Request Demo
            </button>
            <button className="text-blue-500 hover:text-blue-700	hover:translate-x-3	hover:duration-700 font-bold rounded-lg py-2 px-5 border-hidden ">
              Explore More <ArrowRightFromLine className="inline" />
            </button>
          </motion.div>
  )
}

export default TextHeroSection;
