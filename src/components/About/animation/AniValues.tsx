"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import assets
import {valueData} from "@/data/aboutData";

function AniValues() {
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
    
      const fadeIn = {
        
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: customEasing },
        },
      };

      
  
  return (
       <div className="max-w-screen-lg mx-auto px-10 pb-5">
            <motion.h3
            initial="hidden"
            whileInView= "show"
            viewport={{once: true, amount: 1}}
            variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            className='text-3xl text-black font-black text-center pt-10'>
                Our Values
            </motion.h3>
            <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap justify-center items-center">

            {
              valueData.map((valueData)=>{
                return(
                  
                  <motion.div key={valueData.id} className='pt-5 xs:w-[200px] md:w-[230px] max-sm:pb-1 lg:pb-5 xs:mx-0 sm:mx-1 md:mx-5 '>
                      <div  className="flex flex-wrap justify-center m-1">
                     <div className="  pt-2 pr-2  bg-white rounded-lg shadow-md">
                          <div  className="bg-[#f1f1f1] h-56 py-6 px-5 ">
                    <div 
                   
                        style={{backgroundImage: `url('${valueData.bgImg}')`}}  className='bg-no-repeat bg-contain h-full '
                    >
                    {/* <Image src={one} width={60} height={40} alt="Integrity" className="z-0 absolute flex justify-center left-2 items-center h-[70%]" /> */}
                 

                    <motion.div 
                        variants={fadeIn}
                        
                        className="flex flex-col justify-center items-center"> 

                    <Image src={valueData.icon} width={60} height={40} className="z-10" alt="Integrity" />
                    <h5 className="text-xl font-bold z-10 pt-5">{valueData.title}</h5>
                    <p className="text-sm text-center text-[#636468] z-10">{valueData.description}</p>
                    </motion.div>
                   

                    </div>  
                    </div>
                </div>
                </div>
           </motion.div> 
          )
        }
      )
    }
    </motion.div>
         
        </div> 
    
  )
}

export default AniValues;
