"use client";
import { motion } from "framer-motion";
import { ArrowRight  } from "lucide-react";

function AniHeroSection() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true}}
    variants={{
        hidden: {opacity: 0.1, y: 300},
        show: {opacity: 1, y: 0}
    }}
    transition={{
        duration: 1.2, ease: "easeInOut"
    }}
    className='mx-auto max-w-screen-lg lg:px-20 md:px-16 sm:px-5 text-center'>
    <h1  className="drop-shadow-2xl text-white font-black text-5xl mb-4" >Join Our Mission & Experience The Vision.</h1>
    <button className="text-white hover:text-black hover:bg-white hover:border-slate-400 hover:translate-x-3 hover:duration-700 font-medium text-sm rounded-lg py-2 px-3 border-[3px] ">
          Explore More <ArrowRight  className="inline p-1"/>
        </button>
  </motion.div>
  )
}

export default AniHeroSection
