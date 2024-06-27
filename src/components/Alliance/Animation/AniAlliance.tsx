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
           hidden: { opacity: 0, scale: 0.6},
           visible: { opacity: 1, scale: 1}
       }}
       transition={{
           duration: 0.5,
           ease: "easeInOut"
       }}
    className='text-4xl font-black tracking-wider text-center'>{data.title}</motion.h1>
    <div className='flex flex-wrap justify-center items-center mt-40 '>
    {data.logo.map((logo: any) => (
        <Image key={logo.id} className='w-72 mx-5 mt-10' src={logo.logoImg} alt={logo.alt} width={100} height={100} />
                ))}
    </div>
</div>
  )
}

export default AniAlliance
