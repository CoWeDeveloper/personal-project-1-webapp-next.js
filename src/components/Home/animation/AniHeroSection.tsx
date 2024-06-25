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
    viewport={{ once: false, amount: 1 }}
    className="lg:ml-14  ml-4 col-span-7"
    >
      <motion.h1
     
        variants={fadeIn}
        className="tracking-wide drop-shadow-2xl lg:text-6xl md:text-5xl  sm:text-5xl text-3xl text-white text-pretty font-bold"
      >
        Your True Digital Transformation Partner.
      </motion.h1>
      <motion.p
        variants={scaleIn}
        className="lg:text-xl sm:text-md text-gray-300 py-4 text-pretty"
      >
        Streamline your business operations with our cutting-edge software
        solutions.
      </motion.p>
      <motion.div variants={fadeInButtons}>
        <Link href={"./demo"}>
          <button className="text-white font-bold-400 rounded-lg py-3 px-6 border hover:bg-white hover:text-black">
            Request Demo
          </button>
        </Link>
        <button className="text-blue-500 hover:text-blue-700	hover:translate-x-3	duration-700 transition-all font-bold rounded-lg py-2 px-5 border-hidden ">
          Explore More <ArrowRightFromLine className="inline" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default AnimaHeroSection;
