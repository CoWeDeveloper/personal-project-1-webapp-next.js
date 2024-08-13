"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// import data
import { servicesData } from "../../../data/homeData";


function AnimaServices() {
    const customEasing = [0.42, 0, 0.58, 1];
  return (
<>
<motion.h3 
initial="hidden"
whileInView="visible"
viewport={{ once: false }}
transition={{ 
    duration: 1.8,
    ease: customEasing
}}
variants={{
  visible: { opacity: 1, y: 0  },
  hidden: { opacity: 0,  y: 20}
}}
className=" tracking-wide text-center pb-14 cursor-pointer text-4xl font-extrabold text-white ">
            OUR SERVICES
          </motion.h3>

          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          transition={{ 
              duration: 1.5,
              ease: customEasing
          }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
          className="flex flex-wrap gap-y-10 gap-x-14 justify-center w-full mx-auto">
            {/* card UI */}
            {servicesData.map((servicesData) => {
              return (
                <div
                  key={servicesData.id}
                  className="py-10 w-[21rem] bg-white flex flex-col items-center 
                   rounded-lg h-56 relative overflow-hidden group">
                  {/* to change the filling color orgin. Select from top instead of origin right in the following div */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-white via-blue-500 to-blue-400 
                   origin-right transform scale-y-0 bg-[length:200%_200%] transition-transform duration-500 group-hover:scale-y-100"
                  ></div>

                  {/* <div className="flex justify-center items-center py-2"> */}
                    

                    <Image
                      className="py-2 w-20 group-hover:invert-[100%] group-hover:sepia-[0%] group-hover:saturate-[100%] group-hover:hue-rotate-[272deg] group-hover:brightness-[0%] group-hover:contrast-[103%]"
                      src={servicesData.img}
                      width={100}
                      height={30}
                      alt={servicesData.alt}
                      />
                  {/* </div> */}
                  <h5 className="text-gray-500 w-52  hover:text-white z-0 group-hover:text-white text-lg text-center text-warp font-semibold">
                    {servicesData.title}
                  </h5>
                     
                </div>
              );
            })}
          </motion.div>
</>
  )
}

export default AnimaServices
