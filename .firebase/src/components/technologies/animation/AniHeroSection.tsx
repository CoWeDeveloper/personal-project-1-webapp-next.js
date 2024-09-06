"use client";
import ExploreBtn from "../../ExploreBtn";
import { motion }  from "framer-motion";

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
    <h1  className={` drop-shadow-2xl text-white font-black text-5xl mb-4`} >It's Not That We Use Technology, We Live In Technology.</h1>
    <ExploreBtn Id={"CompTech"} />
  </motion.div>
  )
}

export default AniHeroSection
