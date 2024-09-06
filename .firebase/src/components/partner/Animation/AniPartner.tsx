"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import demoImg from "../../../../public/assets/images/Partner/partnerForm.webp";
import mail from "../../../../public/assets/icons/Demo/mail.svg";
import phone from "../../../../public/assets/icons/Demo/phone.svg";

import PartnerForm from "./../PartnerForm";


function AniPartner() {
  return (
    <div className='max-w-screen-lg py-10 mx-auto'>
    <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        exit="hidden"
        transition={{
            duration: 1,
            ease:"easeInOut"
        }}
        variants={{
            visible: { opacity: 1, y:"0%"},
            hidden: { opacity: 0, y: "-50%"}
        }}
    className='text-4xl font-black lg:mx-0 xs:mx-5'>
        Become a Partner
    </motion.h1>
    <div className='flex flex-wrap justify-between '>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        exit="hidden"
        transition={{
            duration: 1,
            ease:"easeInOut"
        }}
        variants={{
            visible: { opacity: 1, x:"0%"},
            hidden: { opacity: 0, x: "-50%"}
        }}
      className="text-[#636468] mt-1 xs:order-2 lg:order-1 xs:flex-col xs:justify-center xs:mx-auto xs:pt-5 lg:mx-0">
        <h2 className="text-black text-xl font-semibold">For Further Assistance</h2>
        <div className="flex items-center text-sm font-semibold my-4">
          <Image src={mail} className="mr-2  text-[#636468]" alt="career icon" width={24} height={24}/><Link href={"partners@cloudtenants.com"}>partners@cloudtenants.com</Link>
        </div>
        <div className="flex items-center text-sm  font-semibold my-4">
          <Image src={phone} className="mr-2 text-[#636468]" alt="phone icon" width={24} height={24}/>+92 21 34971995</div>
        <div>
          <Image  className="" src={demoImg} width={300} height={300} alt="laptop with screen displaying calender" />
        </div>
      </motion.div>
      <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true}}
                  exit="hidden"
                  transition={{
                      duration: 1,
                      ease:"easeInOut"
                  }}
                  variants={{
                      visible: { opacity: 1, x:"0%"},
                      hidden: { opacity: 0, x: "50%"}
                  }}
      className="lg:order-2 xs:order-1 xs:w-full xs:mx-5 lg:w-auto lg:mx-0">
      <PartnerForm />

      </motion.div>
    </div>
   </div>
  )
}

export default AniPartner
