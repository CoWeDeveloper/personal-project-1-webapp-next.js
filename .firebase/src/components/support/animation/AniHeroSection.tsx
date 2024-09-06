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
    className='mx-auto max-w-screen-lg lg:px-20 md:px-16 px-0  text-center'>
    <h1  className="drop-shadow-2xl text-white font-black text-4xl sm:text-5xl mb-4" >Experience The Difference With Our Customer Services.</h1>
    <ExploreBtn Id={"Support"} />
  </motion.div>
  )
}

export default AniHeroSection
