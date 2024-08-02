"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import backgroundImage from "../../../../public/assets/images/Admin/cloudBg.webp";
import cloudImage1 from "../../../../public/assets/images/Admin/cloud1.png"; 
import cloudImage3 from "../../../../public/assets/images/Admin/cloud3.png";
import cloudImage4 from "../../../../public/assets/images/Admin/cloud4.png";
import cloudImage5 from "../../../../public/assets/images/Admin/cloud5.png";

function CloudBg() {
  const cloudVariants = (delay: number) => ({
    animate: {
      x: [-200, 2000], // Adjust the values based on your design
      opacity: [0.6, , 1, 0.9], // Adjust the values based on your design
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "easeInOut",
          delay,
        },
        opacity: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 300,
          ease: "easeInOut",
          delay,
        },
      },
    },
  });

  const clouds = Array.from({ length: 20 }).map((_, index) => (
    <motion.div
      key={index}
      className={`absolute w-full left-0 bottom-${
        index % 2 === 0 ? "2" : "1"
      }`}
      variants={cloudVariants(index * 3)}
      animate="animate"
      //   style={{ bottom: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0.7 }}
    >
      <Image
        src={cloudImage1}
        alt="Cloud"
        width={Math.random() * 200 + 100}
        height={Math.random() * 100 + 50}
      />
      <Image
        src={cloudImage3}
        alt="Cloud"
        width={Math.random() * 200 + 100}
        height={Math.random() * 100 + 50}
        className="absolute bottom-2 right-32"
      />
      <Image
        src={cloudImage4}
        alt="Cloud"
        width={Math.random() * 200 + 100}
        height={Math.random() * 100 + 50}
        className="absolute bottom-2 left-0 right-0"
      />
      <Image
        src={cloudImage5}
        alt="Cloud"
        width={Math.random() * 200 + 100}
        height={Math.random() * 100 + 50}
        className="absolute bottom-2"
      />
    </motion.div>
  ));
  return (
    <>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1, x: "0%" }}
        animate={{ scale: 1.08, x: "-2%" }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10 drop-shadow-2xl "
        />
      </motion.div>
      <div className="absolute w-full h-full overflow-hidden ">{clouds}</div>
    </>
  );
}

export default CloudBg;
