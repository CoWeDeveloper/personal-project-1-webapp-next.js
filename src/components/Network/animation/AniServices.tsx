"use client"
import Image from "next/image";
import { motion } from "framer-motion";

function AniServices({ networkData} : any ) {
  return (
    <div className="mx-auto w-full max-w-screen-lg pt-10 pb-4 xs:p-2">
    {networkData.id == "1" && (
      <motion.h2 
      initial="hidden"
    whileInView="visible"
    viewport={{ once: true}}
    transition={{ 
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1]
    }}
    variants={{
        hidden: { opacity:0, y: 20 },
      visible: { opacity:1,  y: 0 },
    }}
      className="text-center pt-10 text-4xl text-black font-black">
        Our Services Network
      </motion.h2>
    )}

    <div className="sm:grid  sm:grid-cols-12 sm:h-screen mx-auto pt-14 xs:flex xs:flex-col xs:h-fit">
      <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 1}}
            variants={{
              hidden: {opacity: 0},
              visible: {opacity: 1} 
            }}
            transition={{
              duration: 0.8, ease: "easeInOut"
            }}
      className="col-span-5 w-full h-full ">
        <h3 className="text-3xl font-bold flex tracking-wide items-center">
          {networkData.country}
          <span>
          <Image
            className="w-10 ml-1 ring-2 ring-offset-2 "
            style={{boxShadow: "0px 2px 18px 0px rgba(0,0,0,0.3)"}}
            src={networkData.flagImg}
            width={40}
            height={40}
            alt={networkData.flagAlt}
            />
            </span>
        </h3>
        <h4 className="text-xl font-medium mt-2">
          {networkData.id == "1" ? "HEAD OFFICE" : <span> COUNTRY OFFICE   <sup className="font-light">(JV PARTNER)</sup> </span> }
        </h4>
        <p className="w-64 text-light pb-1 text-pretty ">
          {networkData.address}
        </p>
        <p className="font-medium italic tracking-wide text-sm">
          {networkData.phone}
        </p>

        {networkData.id == "1" && (
          <>  
          <h4 className="text-xl font-medium mt-2">
          REGIONAL OFFICE
        </h4>
        <ul className="list-disc pl-5">
          <li>Lahore</li>
        </ul>
            <h4 className="text-xl font-medium mt-2">
              BRANCH OFFICES
            </h4>
            <ul className="list-disc pl-5">
              <li>Multan</li>
              <li>Sukkur</li>
              <li>Pershawar</li>
              <li>Abbottabad</li>
              <li>Islamabad</li>
              <li>Gujranwala</li>
              <li>Faislabad</li>
              <li>Sahiwal</li>
              <li>Hyderabad</li>
            </ul>
          
          </>
        )}
      </motion.div>

      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 1}}
      variants={{
        hidden: {opacity: 0},
        visible: {opacity: 1} 
      }}
      transition={{
        duration: 0.8, ease: "easeInOut"
      }}
      className="col-span-7 w-full h-full grid md:place-content-end lg:place-content-center lg:items-center md:pt-32">
        <Image
          className="relative w-full h-auto mx-auto drop-shadow-2xl"
          src={networkData.mapImg}
          width={900}
          height={900}
          alt={networkData.mapAlt}
        />
      </motion.div>
    </div>
  </div>
  )
}

export default AniServices
