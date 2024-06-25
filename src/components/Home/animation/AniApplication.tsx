"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// importing data
import {applicationData} from "@/data/homeData"

function AnimaApplication() {
    const staggerContainer = {
        hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
};

const cardAnimat = {
     hidden:{ opacity: 0, scale: "0%", rotate: 360, marginInline: 20},
     show: {scale: "100%", rotate: 0, marginInline: 0,
        opacity: 1,
        transition:{
            duration: 0.7,
            ease: "easeIn"
        }
    },
}

    return (
   <>
   <motion.h3
   initial="hidden"
   whileInView="visible"
   viewport={{ once: false }}
   transition={{
    duration: 0.5,
    ease: "easeIn"
   }} 
   variants={{
    visible: {scale: 1, opacity: 1 },
    hidden: { scale: 0.4, opacity: 0}
   }}
   className="tracking-wide text-white text-3xl font-black mb-14">
    MOBILE APPLICATIONS
    </motion.h3>
            <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="flex flex-wrap gap-7  justify-center items-center">
              
             
             {applicationData.map((applicationData)=>{

              return(
              <motion.div 
            variants={cardAnimat}
              viewport={{ once: false }}
               
             
              key={applicationData.id} className="cursor-pointer hover:-translate-y-2  hover:shadow-orange-300 hover:shadow-lg duration-500 w-44 h-48 bg-white rounded-lg ">
             <div className='flex justify-center '>
                <Image className="mt-4" src={applicationData.img} alt={applicationData.alt} width={100} height={20} />
              </div>
                <h3 className="text-center py-2 px-4 font-medium text-[#446363]">{applicationData.title}</h3>
              </motion.div>
              )
             })}
             
             
             
            </motion.div>
   </>
  )
}

export default AnimaApplication
