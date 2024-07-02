"use client";
import Image from "next/image";
import { boardProcessData } from "@/data/boardProcessData";
import { motion } from "framer-motion";

export default function BoardProcess() {
  const staggerContainer = {
    hidden: { opacity: 0 },
show: {
  opacity: 1,
  transition: {
    staggerChildren: 0.8,
  },
},
};

const cardAnimat = {
 hidden:{ opacity: 0, scale: "0%", x:-100,  rotateX: 180,},
 show: {scale: "100%", x:0, opacity: 1, rotateX: 0, 
    transition:{
        duration: 0.7,
        ease: "easeIn"
    }
},
}

  return (
<>
<motion.h1 
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }}
   transition={{
    duration: 0.5,
    ease: "easeIn"
   }} 
   variants={{
    visible: {scale: 1, opacity: 1 },
    hidden: { scale: 0.4, opacity: 0}
   }}
className="text-3xl text-center font-black underline">
  ON-BOARDING PROCESS
</motion.h1>
<motion.div 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={staggerContainer}
className="container mt-10 flex flex-wrap justify-center">

{ boardProcessData.map( (boardData: any) => (      
  <motion.div

  variants={cardAnimat}
         key={boardData.id} className="relative flex flex-col items-center w-24 md:w-32 mx-4 my-4 md:mx-5 lg:mx-7 xl:mx-auto ">
         <div className="flex items-center justify-center">
           <div className="flex items-center flex-wrap justify-center w-full border-black border-4 rounded-full p-6">
             <Image
               src={boardData.boardImg}
               width={70}
               height={70}
               alt={boardData.boardImg}
               />
           </div>
         </div>
         {/* if Noman bhai reject the design set py-0 px-2 bottom-14 and title div, set pt-2 */}
         <div className="absolute left-1">
           <div className="text-center w-8 rounded-full text-white font-black py-1 px-2   bg-black">
            {boardData.id}
            </div> 
         </div>
         <div className="font-semibold px-1 md:text-lg text-sm flex text-center pt-1">
           {boardData.title}
         </div>
       </motion.div>
       ))}
       </motion.div>
</>
  )
}
