"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import mission from "../../../../public/assets/images/About/mission.png"

function AniMission() {
  return (
    <>
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once:false, amount: 1}}
    exit="hidden"
    transition={{
        duration: 1,
        ease:"easeInOut"
    }}
    className='max-w-screen-lg mx-auto grid xl:gap-8 lg:grid-cols-12 px-4    lg:py-16 '>
        <motion.div 
            
            transition={{
                duration: 1,
                ease:"easeInOut"
            }} 
            variants={{
                visible: { opacity: 1, x:"0%"},
                hidden: { opacity: 0, x: "-50%"}
            }}
        className="lg:col-span-6 place-self-center">
          <h4 className=" font-black text-3xl text-black mb-4">
            Our Mission
          </h4>
          <p className="text-[#636468] text-sm text-pretty text-justify   antialiased">
          At <span className="font-bold">Cloud Tenants</span>, 
          our goal is to achieve Excellence in all aspects of the software industry by providing 
          the most robust software solutions and technical innovations by its proactive and dynamic 
          team, meeting and exceeding the utmost level of desired customer satisfaction by enhancing
        their productivity and increasing their profitability.
          </p>
        </motion.div>

       <motion.div 
       
         transition={{
             duration: 1,
             ease:"easeInOut"
         }}
         variants={{
             visible: { opacity: 1, x:"0%"},
             hidden: { opacity: 0, x: "50%"}
         }}
       className="lg:col-span-6 place-self-end">
        <Image className="w-80" src={mission} width={140} height={100} alt="Mission" />
       </motion.div>
        </motion.div>
    </>
  )
}

export default AniMission
