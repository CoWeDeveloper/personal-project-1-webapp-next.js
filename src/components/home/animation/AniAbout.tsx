"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, inView } from "framer-motion";
import { aboutData } from "../../../data/homeData";

function AnimaAbout() {
    const customEasing = [0.42, 0, 0.58, 1]; 
  return (
    <>
    
    <div className="z-0 w-full col-span-5   sm:mx-auto relative">

    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ 
          duration: 1,
            ease: customEasing
          }}
        variants={{
          visible: { opacity: 1, x: "0%" },
          hidden: { opacity: 0, x: "-30%" }
        }}
    >
    {/* return NextResponse.json({ error: `Failed to upload image: ${err.message}`, stack: err.stack }, { status: 500 });
  } */}

    <Link href={'/about'} className='hover:text-white active:hover:text-white'>
      <h2 
      className="text-right cursor-pointer max-sm:text-4xl sm:text-4xl  md:text-7xl lg:text-8xl font-semibold text-[#636468] tracking-tight ">
        ABOUT US
      </h2>
      </Link>
    </motion.div>
        </div>
    <div 

    className="z-0 w-full col-span-7 relative overflow-hidden">
      <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ 
                  duration: 1,
                  ease: customEasing
              }}
              variants={{
                visible: { opacity: 1, x: "0%" },
                hidden: { opacity: 0, x: "30%" }
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
