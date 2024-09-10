"use client";
import Image from "next/image";
import { useEffect } from "react";
import { sndNextData } from "@/data/sndNextData";
import {motion, useAnimation} from "framer-motion";
import banner from "../../../../../public/assets/images/Software/SnDNext/sndNHeader.svg";

function AniSnDInfo() {
    const controls = useAnimation();

    useEffect(() => {
      const interval = setInterval(() => {
        controls.start({
          left: ['-60%', '130%'],
          opacity: [0, 1, 0],
          transition: { duration: 2, ease: 'easeInOut' },
        });
      }, 3000); // Runs every 3 seconds
  
      return () => clearInterval(interval);
    }, [controls]);

  return (
    <>
      <div className="flex justify-center items-center">
      <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true}}
          variants={{
              hidden: {opacity: 0.1,},
              show: {opacity: 1,}
          }}
          transition={{
              duration: 1.2, ease: "easeInOut"
          }}
      className=" relative group">
      <Image src={banner} alt="banner" width={435} height={318} />
        <motion.div
          animate={controls}
          initial={{ left: '-60%', opacity: 0 }}
          className="absolute top-[-50%] w-[20%] h-[200%] transform rotate-[30deg] bg-gradient-to-r from-white/20 via-white/70 to-transparent"
        ></motion.div>
      </motion.div>
    </div>
          <motion.p 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true}}
              variants={{
                  hidden: {opacity: 0.1,},
                  show: {opacity: 1,}
              }}
              transition={{
                  duration: 1.2, ease: "easeInOut"
              }}
          className="font-medium pt-12 pb-8 text-justify text-[#636468]" >Elevate your business with our Cloud-based and Web-based Sales & Distribution Management solution that give unparalleled advantage to your organization. 
            Optimize your operational efficiency by streamlining your sales processes with improved customer engagement and better insights into your business with our AI Based Dashboards and Real-Time Reporting. 
            Utilize the Cloud-based features with seamless accessibility from anywhere. Cloud Tenants encourage adaptability and empower insightful decision-making.           
            <br />
            <br />
           Our Sales and Distribution Software provides tools and features to enhance Sales Efficiency, Track Leads, and Opportunities, Manage Customer Relationships, Automate Sales Tasks, and Analyze Sales and Distribution Performance.
           </motion.p>

           {sndNextData.map(( data: any) => (
       <div key={data.id}>
        <motion.h1 
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 1}}
           variants={{
               hidden: {opacity: 0.1, x:-200},
               show: {opacity: 1, x:0}
           }}
           transition={{
               duration: 1.2, ease: "easeInOut"
           }}
        className="text-3xl text-black font-extrabold">
            {data.heading}
        </motion.h1>
          <hr className="border-1 text-gray-900 my-2" />
            <div className="flex flex-wrap justify-center gap-4 px-auto text-center pt-7 pb-10">
            {data.cards.map((card: any) => {
                return (
                <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 1}}
                variants={{
                    hidden: {opacity: 0.1, y:20, scale: 0.9},
                    show: {opacity: 1, y:0, scale: 1 }
                }}
                transition={{
                    duration: 1.2, ease: "easeInOut"
                }}
                key={card.id}
                className="flex-col justify-center items-center py-2  "
                >
                    <Image
                    className="w-14 mx-auto"
                    src={card.url}
                    alt={card.title}
                    width={150}
                    height={100}
                    />
                    <div className="mx-auto  w-[170px]">
                    <h2 className="  px-4 py-1 text-center  text-sm">{card.title}</h2>
                    </div>
                </motion.div>
                );
            })}
            </div>
    </div>
    ))}
    </>
  )
}

export default AniSnDInfo
