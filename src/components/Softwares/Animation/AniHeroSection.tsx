"use client";
import { motion } from "framer-motion";
import ExploreBtn from "../../ExploreBtn";

function AniHeroSection() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    variants={{
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0}
    }}
    transition={{
        duration: 1, ease: "easeInOut"
    }}
    className='mx-auto max-w-screen-lg lg:px-20 md:px-16 sm:px-5 text-center'>
    <h1  className={` drop-shadow-2xl text-white font-black text-5xl mb-4`} >Sales & Distribution Add-On Modules Portfolio.</h1>
  
    <ExploreBtn Id={"Products"} />
  </motion.div>
  )
}

export default AniHeroSection
