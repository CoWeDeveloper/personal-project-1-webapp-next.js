"use client"
// import slider libary
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// import assets
import SliderEdge from "../SliderEdge";

function AnimaEdge() {
    
  return (
    <>
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once:false}}
    exit="hidden"
    transition={{
        duration: 2,
        ease:"easeInOut"
    }}
    variants={{
        visible: { opacity: 1, x:"0%"},
        hidden: { opacity: 0, x: "-50%"}
    }}
    className="z-0 w-full  col-span-6  lg:ml-14 sm:ml-4 md:ml-2">
          <h2 className=" cursor-pointer text-4xl leading-none md:text-7xl xl:text-8xl font-semibold text-[#636468] tracking-tight ">
            OUR EDGES
          </h2>
    </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:false}}
            exit="hidden"
            transition={{
                duration: 2,
                ease:"easeInOut"
            }}
            variants={{
                visible: { opacity: 1, x:"0%"},
                hidden: { opacity: 0, x: "50%"}
            }}
        className="col-span-6 my-14 lg:my-0">
            <SliderEdge  />    
        </motion.div>
    </>
  )
}

export default AnimaEdge
