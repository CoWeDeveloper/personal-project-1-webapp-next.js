"use client"
import { motion } from "framer-motion";
import ExploreBtn from "../../ExploreBtn";

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
    <h1  className={` drop-shadow-2xl text-white font-black text-5xl mb-4`} >Where Brands Unite, Celebrating Our Valued Customers.</h1>
    <ExploreBtn Id={"schedule"} />
  </motion.div>
  )
}

export default AniHeroSection;
