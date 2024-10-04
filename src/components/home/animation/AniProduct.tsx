"use client";
// import Image from "next/image"
import Link from "next/link";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import Arrow from "../../../../public/assets/images/Products/productarrow.svg";

// data
import { productData } from "../../../data/homeData";



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
        <motion.h3 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: { opacity: 0, scale: 0.6},
            visible: { opacity: 1, scale: 1}
        }}
        transition={{
            duration: 0.5,
            ease: "easeIn"
        }}
        className="tracking-wide text-3xl text-center text-black font-black mb-14">
            OUR SPECIALITY PRODUCTS PORTFOLIO
          </motion.h3>


  {productData.map((product, index) => {
      const bgColorRead = product.styleRead;
      const bgColorSchedule = product.styleSchedule;
    return(
<section key={product.id} className="flex flex-wrap max-w-screen-lg mx-auto justify-center items-center">

    <motion.div  
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={index % 2 === 0 ? leftVariant : rightVariant} 
    className="w-full flex flex-wrap mx-auto justify-center" >
      <div className={` w-full lg:w-[55%] ${product.id % 2 === 0 ? 'order-1' : 'order-0'} `} >
      <Image
        className="w-48"
        src={product.img}
        width={120}
        height={60}
        alt="Product Image"
      />
      <p className=" text-sm text-[#636468] my-3 text-justify">{product.description}</p>
      <Link href={`/demo/${product.value}#schedule`}>
      <button className={`${bgColorSchedule} text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none`} >Schedule a Demo</button>
      </Link>
      <Link  href={product.link}>
      <button className={` ${bgColorRead} text-xs hover:ring-2 py-2 px-5 font-medium rounded-lg  focus:outline-none duration-500`}>
        Read More</button>
      </Link>
      </div>
      <div  className="lg:mt-0 mt-5 w-full lg:w-[45%] flex justify-center"  >
        <Image
          className="lg:w-70 md:w-64 sm:w-56"
          src={product.gridImg}
          width={200}
          height={150}
          alt="Grid Image"
        />
      </div>
   
    </motion.div>
    {index < productData.length - 1 && productData[index + 1].id === product.id + 1 && (
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
  )
}
  )}
  <Link href='./softwares'>
<div className="flex justify-center mt-10">
<button className="bg-[#22B8EE] hover:bg-[#1B8FBF] text-white text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none">Seem More Products</button>
</div>  
  </Link>
    </>
  )
}

export default AniProduct
