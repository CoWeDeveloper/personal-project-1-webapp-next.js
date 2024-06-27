"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import assets
import Arrow from "../../../../public/assets/images/Products/productarrow.png";
import ScheduleBtn from "../ScheduleBtn";
// import data
import {softwareData} from "../../../data/softwareData";

function AniProduct() {
  const customEasing = [0.42, 0, 0.58, 1];

  // Variants for animation
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: customEasing } }
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: customEasing } }
  };

  return (
    <>
      {softwareData.map((softwareData)=> ( 
        <div key={softwareData.id} className={`${(softwareData.id == 1) ? "mt-2" : "mt-36"}`}>
          <motion.h3
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
             variants={{
                 hidden: { opacity: 0, scale: 0.6},
                 visible: { opacity: 1, scale: 1}
             }}
             transition={{
                 duration: 0.5,
                 ease: "easeIn"
             }}
          key={softwareData.id} className="tracking-wide text-3xl text-center text-black font-black mb-14">
            {softwareData.title}
          </motion.h3>

{softwareData.cards.map((cards, index) => {
  const bgColorRead = cards.styleRead;
  // const bgColorSchedule = cards.styleSchedule; 
    return(
<section key={cards.id} className="flex flex-wrap w-9/12 mx-auto justify-center items-center">

    <motion.div 
     initial="hidden"
     whileInView="visible"
     viewport={{ once: false }}
     variants={index % 2 === 0 ? leftVariant : rightVariant}
    className="w-full flex flex-wrap mx-auto justify-center" >
      <div className={`w-full lg:w-[55%] ${cards.id % 2 === 0 ? 'order-0' : 'order-1'} `} >
      <Image
        className="w-40"
        src={cards.img}
        width={120}
        height={60}
        alt="Product Image"
      /> 
      <p className="text-sm text-[#636468] my-3 text-justify">{cards.description}</p>
      <ScheduleBtn value={cards.value} styleButton={`${cards.styleSchedule} text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none`} />
      {/* <button  className={`${bgColorSchedule} text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none`}>
        Schedule a Demo
      </button> */}
      
     <Link  href={cards.link} > 
     <button className={` ${bgColorRead} text-xs hover:ring-2 py-2 px-5 font-medium rounded-lg  focus:outline-none duration-500`}>Read More</button></Link>
      </div>
      <div  className={`lg:mt-0 mt-5 w-full lg:w-[45%] flex justify-center ${cards.id % 2 === 0 ? 'order-1' : 'order-0'} `}  >
        <Image
          className="lg:w-60  md:w-64 sm:w-56"
          src={cards.gridImg}
          width={500}
          height={100}
          alt="mock up"
        />
      </div>
    </motion.div>
    {index < softwareData.cards.length - 1 && softwareData.cards[index + 1].id === cards.id + 1 && (
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ 
          duration: 1,
          ease: customEasing
      }}
      animate={{ 
        y: [null, -20, 0], 
        transition: { duration: 3, repeat: Infinity, ease: customEasing, times: [1, 0.5, 0] } 
      }}
      
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0.2, scale: 0 }
      }}
      className="flex justify-center my-14">
        <Image
          className="w-39 mt-2 flex-col rotate-45"
          src={Arrow}
          width={100}
          height={40}
          alt="Arrow Image"
        />
      </motion.div>
    )}
</section>
  )}
)}

</div>           
))}
    </>
  )
}

export default AniProduct
