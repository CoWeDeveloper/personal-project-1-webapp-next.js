"use client";
import { motion } from "framer-motion";
import ExploreBtn from "../../ExploreBtn";
import Loading from "@/app/loading";
import { useState, useEffect } from 'react';
import Image from 'next/image';

function AniHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = '/assets/images/About/AboutHeader.webp';
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <>
    {!isLoaded && (
      <Loading />
     )}
     <div className={`absolute inset-0 w-full h-full transition-opacity duration-500`}>
       <Image
         src="/assets/images/About/AboutHeader.webp"
         alt="Career Header"
         layout="fill"
         objectFit="cover"
         quality={75}
         priority
         onLoadingComplete={() => setIsLoaded(true)}
       />
       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
     </div>
     <div className="relative z-10 w-full">
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true}}
    transition={{ 
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1]
    }}
    variants={{
      visible: { opacity:1,  y: 0 },
      hidden: { opacity:0.1, y: 300 }
    }}
    className='mx-auto max-w-screen-lg lg:px-20 md:px-16 sm:px-5 text-center'>
        <h1  className={` drop-shadow-2xl text-white font-black text-5xl mb-4`} >Complete Business Solutions As Per Your Needs</h1>
        <ExploreBtn Id={"AboutInfo"} />
      </motion.div>
      </div>
      </>
  )
}

export default AniHeroSection
