"use client"
import Image from "next/image";
import { motion } from "framer-motion";

function AniAlliance({ data }: any) {
  return (
    <div className='max-w-screen-lg mx-auto pt-10'>
    <motion.h1 
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}
       variants={{
           hidden: { opacity: 0},
           visible: { opacity: 1,}
       }}
       transition={{
           duration: 0.5,
           ease: "easeInOut"
       }}
    className='text-4xl font-black tracking-wider text-center'>
      {data.title}
      </motion.h1>
    <motion.div 
      initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
        hidden: { opacity: 0, scale: 0},
        visible: { opacity: 1, scale: 1}
    }}
    transition={{
        duration: 0.8,
        ease: "easeInOut"
    }}
    className='flex flex-wrap justify-center items-center mt-32  '>
    
    {data.logo.map((logo: any) => (
        
        <Image key={logo.id} className={`mx-14 mt-10 ${data.logo.length === 4 ? 'w-56' : 'w-64'}`} src={logo.logoImg} alt={logo.alt} width={100} height={100} />

 
                ))}
    </motion.div>
</div>
  )
}

export default AniAlliance
