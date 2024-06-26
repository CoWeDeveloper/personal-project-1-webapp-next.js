"use client";
import { motion } from "framer-motion";

function AniAboutInfo() {
    const customEasing = [0.42, 0, 0.58, 1];

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.6,
          },
        },
      };
    
      const fadeIn = {
        
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
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
     className='max-w-screen-lg mx-auto px-5 py-10'>

        <div 
         
        className='text-center flex flex-col justify-center items-center'>
                <motion.h2  variants={fadeIn} className='font-extrabold text-3xl py-4 tracking-tight text-black'>About Us</motion.h2>
                <motion.h4 
                variants={scaleIn}
                className='font-medium text-[#545456] px-48 text-lg text-pretty max-sm:px-2 max-sm:text-center '>
                    You want to integrate your business management, Our services tie it all together.
                </motion.h4>
        </div>
            <motion.div 
            variants={fadeInButtons}
            className='text-sm py-8 text-[#636468]'>
                <p className='text-justify py-2 tracking-wide subpixel-antialiased'>
                <b>Cloud Tenants Pvt Ltd</b> has evolved in <b>Year 2017</b> from its Group Company Fourgen Information Systems which has been in <b>software business since 1998</b>. Collectively, Cloud Tenants bear with it an experience of <b>25+ Years</b>. Over the years, our team of experts has successfully completed software projects with a number of renowned companies in Pakistan & Internationally.
                </p>
                <p className='text-justify py-2 tracking-wide subpixel-antialiased'>
                We offer <b>Cloud Hosted, Web Based</b> & <b>Mobile Applications based solutions</b>, eliminating the heavy infrastructure procurement cost and its regular management/administration costs, yet more versatile, user friendly, mobility enhanced and feature rich solutions.
                </p>
                <p className='text-justify py-2 tracking-wide subpixel-antialiased'>
                Our solutions have supported the businesses to enhance their <b>productivity</b>, increase their <b >profitability</b>& <b>growth</b>. Our efficient <b >Reporting Tools</b> & <b >Management Dashboards</b> help managements take <b >Effective Business Decision</b> for their Businesses.
                </p>
                <p className='text-justify py-2 tracking-wide subpixel-antialiased'>
                We offer complete integrated environment with our <b>ERP modules</b>, hence, we truly are a <b >One Window Solution Provider</b>.
                </p>
            </motion.div>
     </motion.div>



  )
}

export default AniAboutInfo
