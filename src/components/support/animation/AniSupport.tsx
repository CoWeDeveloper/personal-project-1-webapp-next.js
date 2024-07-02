"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

function AniSupport({data}: any) {
    const customEasing = [0.42, 0, 0.58, 1];

    const staggerContainer = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.7,
        },
      },
    };
  
    const fadeInLeft = {
      
      hidden: { opacity: 0, x: -50 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: customEasing },
      },
    };
  
    const fadeInRight = {
      
      hidden: { opacity: 0, x: 50 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: customEasing },
      },
    };
  return (
   <>
  {data.id == 1 && (
              <motion.h1 
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {opacity: 0},
                visible:{opacity: 1}
              }}
              viewport={{once: true}}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="md:text-3xl text-4xl font-black tracking-wider text-center">
                SUPPORT MECHANISM
              </motion.h1>
            )}
            <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 1 }}
             className="text-center flex flex-col justify-center items-center">
              <motion.h1 
              variants={fadeInLeft}
              className="text-3xl font-semibold mt-10 ">{data.title}</motion.h1>
              <div className="flex flex-wrap justify-center items-center mt-10 my-10">
                {data.card.map((card: any)=>
            (
              <motion.div
              variants={fadeInRight}
              key={card.id}
              >
              <div
              className="duration-500 group hover:scale-110 flex-wrap my-4 justify-center items-center"
              >
              <div className="   my-2 mx-10 w-56 px-120 py-4 flex flex-wrap justify-center border-2 border-gray-400 rounded-xl">
                <Image
                  className="group-hover:scale-x-[-1] transition ease-in-out duration-500 justify-center w-20 h-30 m-4"
                  width={100}
                  height={40}
                  src={card.img}
                  alt={card.alt}
                  />
              </div>
              <h3 className="flex font-light  justify-center items-center">
                {card.title}
              </h3>
           
            </div>
                  </motion.div>
            ))}

              </div>
            </motion.div>
   </>
  )
}

export default AniSupport
