'use client'
import Link from "next/link";
import { motion } from "framer-motion"
import CustomerSlider from "./CustomerSlider";

function Customer() {
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

  const fadeInLeft = {
    
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: customEasing },
    },
  };

  const fadeInRight = {
    
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: customEasing },
    },
  };

  return (
    <section className="w-full h-fit bg-[#ecf8fa] pt-5 pb-10 ">
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 1 }}
        className='container py-5'>

            <motion.h3
            variants={fadeInLeft}
            className='tracking-wide text-3xl text-black font-black text-center'>
              OUR CUSTOMERS
            </motion.h3>
            <motion.p    variants={fadeInRight} className="text-sm text-center pb-5 text-[#636468]">We are working with amazing companies.

           </motion.p>
        <CustomerSlider />
        <div className="flex justify-center pt-5">
          <Link href={'./customers'}>
          <button className="bg-white border-2 border-[#105AB6] ring-[#105AB6] hover:bg-[#105AB6] text-[#105AB6] 
          text-sm hover:text-sky-100 rounded-lg px-10 py-2 transition-all duration-500 mr-2 font-medium focus:outline-none">Show All</button>
        </Link>
        </div>
        </motion.div>
    </section>
  )
}

export default Customer
