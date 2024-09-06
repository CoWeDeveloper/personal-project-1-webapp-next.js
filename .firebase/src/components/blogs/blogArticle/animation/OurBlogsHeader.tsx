"use client";
import {motion} from "framer-motion";
import Image from "next/image";


function OurBlogsHeader() {
    const customEasing = [0.42, 0, 0.58, 1];

    const staggerContainer = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 1.2,
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

    const fadeInOut = {
        hidden: { opacity: 0, height: 0, scale: 0 },
        show: {
          opacity: 1,
          height: '8rem', // animate to the original height
          scale: 1,
          transition: { 
            duration: 1, 
            ease: [0.6, -0.05, 0.01, 0.99], // example custom easing
          },
        }
      };


  return (
    <>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 1 }}
    
      className="container  md:px-56 sm:px-5 flex items-center w-full mx-auto ">
       
      <motion.hr 
      variants={fadeInOut}
      className="border-2 border-sky-200 h-32 mr-4" />
      <div 
      className="flex-col items-start overflow-hidden">

      <motion.h1 
      variants={fadeInLeft}
      className='text-5xl x text-gray-600 font-semibold  shadow-slate-700'>
        OUR BLOGS
      </motion.h1>
      <motion.h6 
      variants={fadeInLeft}
      className='ml-3  text-gray-500 font-medium   shadow-slate-700'>
        Lastest News
      </motion.h6>
      </div>
      
        </motion.div>
    </>
  )
}

export default OurBlogsHeader
