"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, inView } from "framer-motion";
import { aboutData } from "../../../data/homeData";

function AnimaAbout() {
    const customEasing = [0.42, 0, 0.58, 1]; 
  return (
    <>
    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ 
            duration: 1.8,
            ease: customEasing
        }}
        variants={{
          visible: { opacity: 1, x: "0%" },
          hidden: { opacity: 0, x: "-130%" }
        }}
    
    className="z-0 w-full col-span-5 ml-14 sm:mx-auto">
    <Link href={'/about'} className='hover:text-white active:hover:text-white'>
      <h2 className="cursor-pointer max-sm:text-4xl sm:text-4xl  md:text-7xl lg:text-8xl font-semibold text-[#636468] tracking-tight ">
        ABOUT US
      </h2>
      </Link>
    </motion.div>
    <div 

    className="z-0 w-full col-span-7">
      <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ 
                  duration: 2,
                  ease: customEasing
              }}
              variants={{
                visible: { opacity: 1, x: "0%" },
                hidden: { opacity: 0, x: "110%" }
              }}
      className="flex flex-wrap justify-center  ">
        {aboutData.map((aboutData) => {
          return (
            <div
            key={aboutData.id}
              className="duration-500 hover:scale-110 flex-wrap my-4 justify-center items-center"
              >
              <Link className="group" href={aboutData.link}>
              <div className="group my-2 mx-4 w-64 sm:w-72 px-120 py-4 flex flex-wrap justify-center border-2 border-gray-600 rounded-xl">
                <Image
                  className="group-hover:scale-x-[-1] transition ease-in-out duration-500 justify-center w-20 h-30 m-4"
                  width={100}
                  height={40}
                  src={aboutData.img}
                  alt={aboutData.alt}
                />
              </div>
              <h3 className="flex font-semibold group   justify-center items-center">
                {aboutData.title}
              </h3>
              </Link>
            </div>
          );
        })}
      </motion.div>
    </div>
        </>
  )
}

export default AnimaAbout;
