"use client";
import { motion } from "framer-motion";
import ExploreBtn from "../../ExploreBtn";

function AniHeroSection() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true}}
    transition={{ 
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1]
    }}
    variants={{
      visible: { opacity:1,  y: 0 },
      hidden: { opacity:0.1, y: 300 }
    }}
    className='mx-auto max-w-screen-lg lg:px-20 md:px-16 sm:px-5 text-center'>
        <h1  className={` drop-shadow-2xl text-white font-black text-5xl mb-4`} >Complete Business Solutions As Per Your Needs</h1>
        <ExploreBtn Id={"AboutInfo"} />
      </motion.div>
  )
}

export default AniHeroSection
