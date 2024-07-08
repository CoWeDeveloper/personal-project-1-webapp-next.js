"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import assets
import { customersData } from "@/data/customersData";


function AniCustomers() {
  return (<>
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
          hidden: { opacity: 0, scale: 0.6},
          visible: { opacity: 1, scale: 1}
      }}
      transition={{
          duration: 0.5,
          ease: "easeInOut"
      }}

    className="text-center text-4xl text-black font-black">
          Our Valuable Customers
        </motion.h2>
    <div className="flex flex-wrap justify-center gap-14 px-10 pt-7 pb-10">
    {customersData.map((customersData) => {
      return (
        <motion.div
        key={customersData.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          transition={{ 
              duration: 1.2,
              ease: [0.42, 0, 0.58, 1]
            }}
            variants={{
            visible: { opacity:1,  },
            hidden: { opacity:0.1,  }
          }}
          
          className="flex justify-center items-center"
        
        >
          <Image
            className="w-20 hover:scale-[2]  transition-all"
            src={customersData.logo}
            title={customersData.alt}
            alt={customersData.alt}
            width={100}
            height={120}
            />
        </motion.div>
      );
    })}
  </div>
            </>
  )
}

export default AniCustomers
