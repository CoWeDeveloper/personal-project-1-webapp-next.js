"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function AniComponentTech({ data }: any) {
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
        { data.id == 1 && (
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
          className='md:text-4xl sm:text-2xl font-black tracking-wider text-center'>
         Technologies We Work On
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
            className="text-3xl font-semibold mt-32">
              {data.title}
            </motion.h1>
           <motion.div 
            variants={fadeInRight}
           className='flex flex-wrap justify-center items-center mt-10 my-10'>
           {data.logo.map((logo: any) => {
             const logoWidth = `w-${logo.width}`
             return(
                 <Image key={logo.id}
                 className={`${logoWidth} hover:drop-shadow-2xl hover:scale-125 hover:mx-14 transition-scale duration-300   mx-10 my-10`} src={logo.logoImg} alt={logo.alt} width={300} height={400} />
                  )      
              }
          )}
           </motion.div>
              </motion.div>
              
      </>
  )
}

export default AniComponentTech
