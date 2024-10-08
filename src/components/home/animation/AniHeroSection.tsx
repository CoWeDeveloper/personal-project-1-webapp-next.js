"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightFromLine } from "lucide-react";

function AnimaHeroSection() {
  const customEasing = [0.42, 0, 0.58, 1];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const fadeIn = {
    
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: customEasing },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: customEasing },
    },
  };

  const fadeInButtons = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: customEasing } },
  };

  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 1 }}
    className="lg:ml-7  ml-4 lg:w-1/2 md:w-2/3 sm:w-24 xs:w-auto space-y-2"
    >
      <motion.h1
     
        variants={fadeIn}
        className="tracking-wide  lg:text-6xl md:text-5xl  sm:text-5xl text-3xl text-white text-pretty font-extrabold"
      >
        Your True Digital Transformation Partner.
      </motion.h1>
      <motion.p
        variants={scaleIn}
        className="lg:text-xl sm:text-md xs:text-sm  text-gray-300 py-4 text-pretty font-[300]"
      >
        Streamline your business operations with our cutting-edge software
        solutions.
      </motion.p>
      <motion.div variants={fadeInButtons}>
        <Link href={"./demo"} >
          <button className="text-white font-bold-400 rounded-lg py-3 sm:px-6 xs: px-4 border duration-700 transition-all hover:bg-white hover:text-black">
            Request Demo
          </button>
        </Link>
        <Link href={"./softwares"}>
        <button className="text-blue-500 hover:text-blue-700	hover:translate-x-3	duration-700 transition-all font-bold rounded-lg py-2 sm:px-5 xs:px-1 border-hidden ">
          Explore More <ArrowRightFromLine className="inline" />
        </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default AnimaHeroSection;
