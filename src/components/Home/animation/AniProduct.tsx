"use client";
// import Image from "next/image"
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import Arrow from "../../../../public/assets/images/Products/productarrow.svg";

// data
import { productData } from "../../../data/homeData";



function AniProduct() {
    const customEasing = [0.42, 0, 0.58, 1];

    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        show: { pathLength: 1, opacity: 1, 
            transition:{
                duration: 0.5, ease: "easeInOut" 
            }
         }
      };

      const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
          },
        },
      };
      
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
        viewport={{ once: false }}
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
    viewport={{ once: false }}
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
      <button className={`${bgColorSchedule} text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none`} >Schedule a Demo</button>
      <button className={` ${bgColorRead} text-xs hover:ring-2 py-2 px-5 font-medium rounded-lg  focus:outline-none duration-500`}>Read More</button>
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

{/* <motion.svg 
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 1}}
version="1.1" xmlns="http://www.w3.org/2000/svg" 
style={{width: '24px', height: '324px'}}
  viewBox="0 0 24 24"
  // className="w-full h-auto"
// width="512" height="512"
>
<motion.path  variants={pathVariants} d="M0 0 C0.875 3.125 0.875 3.125 1 7 C-0.6341702 9.45391681 -2.57642938 11.32497524 -5 13 C-5.66 13 -6.32 13 -7 13 C-7 13.763125 -7 14.52625 -7 15.3125 C-8 18 -8 18 -9.6015625 19.03515625 C-14.33217514 20.99863447 -17.94738954 21.31367872 -23 20 C-25 18 -25 18 -25.4375 14.6875 C-24.87763298 9.9686208 -23.57193569 9.05013898 -20 6 C-17.58149446 4.50904727 -15.08356829 3.30167467 -12.5 2.125 C-11.84902344 1.8053125 -11.19804688 1.485625 -10.52734375 1.15625 C-6.63503758 -0.6522963 -4.1205796 -1.41050609 0 0 Z " fill="#21B7ED" transform="translate(69,4)"/>
<motion.path  variants={pathVariants} d="M0 0 C0.89525391 0.31517578 0.89525391 0.31517578 1.80859375 0.63671875 C1.31752495 5.08751692 -0.07248915 6.87694117 -3.25390625 9.94921875 C-8.38046154 15.37781631 -11.2648779 21.21058503 -14.3671875 27.90234375 C-16.02789232 31.41488772 -17.83818475 34.53712194 -20.19140625 37.63671875 C-22.81640625 38.13671875 -22.81640625 38.13671875 -25.19140625 37.63671875 C-25.85140625 36.97671875 -26.51140625 36.31671875 -27.19140625 35.63671875 C-27.19140625 22.12973676 -15.96187217 12.41963038 -7.06640625 3.5078125 C-2.79177172 -0.46280708 -2.79177172 -0.46280708 0 0 Z " fill="#21B7EE" transform="translate(31.19140625,54.36328125)"/>
<motion.path  variants={pathVariants} d="M0 0 C1.65 0 3.3 0 5 0 C5.10957031 1.22074219 5.21914062 2.44148438 5.33203125 3.69921875 C6.1570409 12.4097239 7.23953295 20.74310185 9.40234375 29.2421875 C10.20285657 32.93605713 10.22127281 36.23836219 10 40 C7.525 40.495 7.525 40.495 5 41 C0.68172222 36.0173718 -1.12506862 33.26137542 -1.1328125 26.484375 C-1.13410156 25.39769531 -1.13539062 24.31101563 -1.13671875 23.19140625 C-1.13285156 22.05574219 -1.12898437 20.92007813 -1.125 19.75 C-1.12886719 18.62980469 -1.13273438 17.50960937 -1.13671875 16.35546875 C-1.13015856 10.79899033 -0.99617159 5.4710376 0 0 Z " fill="#21B8EE" transform="translate(1,108)"/>
<motion.path  variants={pathVariants} d="M0 0 C3.05787216 0.43683888 5.8409391 0.94215967 8.75 2 C16.18049392 4.28630582 23.2863923 4.03304008 30.94921875 3.2578125 C35.63397664 2.86191747 40.30267159 2.91677961 45 3 C45.6875 4.8125 45.6875 4.8125 46 7 C42.9646471 11.483802 36.96102868 11.98446439 32 13 C21.52824481 14.18229494 11.63099598 9.81755723 2.828125 4.46484375 C1 3 1 3 0 0 Z " fill="#21B8EE" transform="translate(15,162)"/>
<motion.path  variants={pathVariants} d="M0 0 C0.5 2.5625 0.5 2.5625 0 6 C-4.40432311 11.80184871 -11.63452902 15.36802376 -17.77661133 19.07250977 C-23.68478972 22.67378336 -28.95294754 26.79716614 -34.23046875 31.26171875 C-37 33 -37 33 -39.86328125 32.76953125 C-40.56839844 32.51558594 -41.27351563 32.26164062 -42 32 C-41.49466634 28.21319585 -40.91482947 26.4080379 -37.9375 24 C-37.22078125 23.4121875 -36.5040625 22.824375 -35.765625 22.21875 C-34.85296875 21.4865625 -33.9403125 20.754375 -33 20 C-31.76423139 18.97042041 -30.52997811 17.93902051 -29.296875 16.90625 C-8.36418187 -0.52124612 -8.36418187 -0.52124612 0 0 Z " fill="#21B8EE" transform="translate(122,120)"/>
<motion.path  variants={pathVariants} d="M0 0 C0.8125 1.625 0.8125 1.625 1 4 C-2.70507391 9.28028498 -7.09415945 12.33976817 -12.5 15.75 C-20.88314732 21.18304868 -29.04917987 26.83786455 -36.6081543 33.39501953 C-40.77471146 37 -40.77471146 37 -43.3125 37 C-45 36 -45 36 -46 33 C-44.10653506 30.00436891 -41.44627802 27.55172103 -39 25 C-38.21109375 24.14792969 -37.4221875 23.29585937 -36.609375 22.41796875 C-31.51454173 17.08669861 -26.23824625 12.43503179 -20.3125 8.0625 C-19.70728516 7.61414795 -19.10207031 7.1657959 -18.47851562 6.70385742 C-6.00103757 -2.25038909 -6.00103757 -2.25038909 0 0 Z " fill="#21B8EE" transform="translate(179,59)"/>
<motion.path  variants={pathVariants} d="M0 0 C1.3320522 2.57530093 0.79102401 4.10967396 -0.0625 6.8125 C-1.92069244 8.67069244 -4.98161048 8.38357921 -7.484375 8.6796875 C-8.83465143 8.84492126 -10.18491127 9.01029067 -11.53515625 9.17578125 C-13.65385168 9.43037386 -15.7727654 9.68282589 -17.89208984 9.93212891 C-26.17777781 10.91350994 -34.22469938 12.14502769 -42.30175781 14.32861328 C-45.2309053 14.84201709 -47.21378347 14.58747062 -50.0625 13.8125 C-49.8671875 11.96484375 -49.8671875 11.96484375 -49.0625 9.8125 C-39.27012182 3.57590933 -10.8382048 -6.24017852 0 0 Z " fill="#21B7EE" transform="translate(255.0625,27.1875)"/>
<motion.path  variants={pathVariants} d="M0 0 C4.15935885 1.15648044 6.58306675 3.39686364 9.5859375 6.34765625 C10.43079712 7.15638184 10.43079712 7.15638184 11.29272461 7.98144531 C29.37550284 25.47476359 29.37550284 25.47476359 29.5859375 35.34765625 C29.2734375 38.91015625 29.2734375 38.91015625 28.2734375 39.91015625 C24.35618326 40.07004418 22.32255719 39.81298435 19.3125 37.22265625 C14.93278227 32.37553781 11.19799554 27.08244318 7.43359375 21.75390625 C4.34087498 17.682479 0.85226747 14.07476096 -2.72265625 10.41796875 C-4.83324626 7.77664558 -5.51038585 6.25520539 -5.7265625 2.91015625 C-4.12805755 0.08926517 -3.23215959 -0.10650383 0 0 Z " fill="#21B8EE" transform="translate(291.7265625,39.08984375)"/>
<motion.path  variants={pathVariants} d="M0 0 C1.4540625 0.0309375 1.4540625 0.0309375 2.9375 0.0625 C3.4928185 18.44354229 3.8337819 37.3165576 -5.0625 54.0625 C-7.0625 56.0625 -7.0625 56.0625 -9.5625 56.3125 C-12.0625 56.0625 -12.0625 56.0625 -14.0625 54.0625 C-14.61633063 47.54041558 -13.19385165 42.20593702 -11.3125 36 C-8.64858139 26.81464466 -6.76528924 17.65528067 -5.26855469 8.21264648 C-5.12192383 7.29040283 -4.97529297 6.36815918 -4.82421875 5.41796875 C-4.70006592 4.59965576 -4.57591309 3.78134277 -4.44799805 2.93823242 C-3.79760511 -0.22640909 -3.3743352 0.06886398 0 0 Z " fill="#21B8EE" transform="translate(323.0625,98.9375)"/>
<motion.path  variants={pathVariants} d="M0 0 C1.67542976 0.28604898 3.34385343 0.61781233 5 1 C6.03861171 3.65551075 6.12448958 4.70456859 4.99829102 7.37719727 C4.22763306 8.67741821 4.22763306 8.67741821 3.44140625 10.00390625 C1.1721816 13.94670865 -0.99912421 17.89611196 -3.03515625 21.96484375 C-3.78442383 23.44114258 -3.78442383 23.44114258 -4.54882812 24.94726562 C-5.56976554 26.96411102 -6.58262005 28.98506574 -7.58789062 31.00976562 C-12.39869889 40.42600482 -12.39869889 40.42600482 -17 43 C-20.8125 43.25 -20.8125 43.25 -24 43 C-25.37181162 38.99008911 -25.04696509 36.41787529 -23.3125 32.6875 C-17.26483698 21.50694651 -9.00291695 9.00291695 0 0 Z " fill="#21B8EE" transform="translate(290,186)"/>
<motion.path  variants={pathVariants} d="M0 0 C1.67542976 0.28604898 3.34385343 0.61781233 5 1 C2.77557771 5.09293702 0.40992776 8.8266213 -2.375 12.5625 C-9.0131025 21.97473489 -12.52579781 32.93559375 -15.82055664 43.87109375 C-17.20741153 48.30114675 -18.65612593 51.62321379 -22 55 C-24.625 55.5 -24.625 55.5 -27 55 C-29.75511921 50.86732118 -29.56109579 47.85052548 -29 43 C-25.17789581 25.71862889 -12.07989122 12.07989122 0 0 Z " fill="#21B7EE" />
<motion.path  variants={pathVariants} d="M0 0 C0.3934369 3.35329296 0.17847364 4.73208719 -1.72265625 7.5859375 C-2.88087891 8.96652344 -2.88087891 8.96652344 -4.0625 10.375 C-12.44560177 20.98390859 -16.56159775 32.718417 -19.87182617 45.67944336 C-21.27080371 51.03769526 -23.0282901 55.31653429 -26 60 C-28.375 60.125 -28.375 60.125 -31 60 C-33.50428963 57.49571037 -33.32469387 56.59612315 -33.375 53.125 C-32.986859 37.35421818 -23.19374484 20.66047071 -13 9 C-12.45214844 8.33355469 -11.90429688 7.66710937 -11.33984375 6.98046875 C-5.55358961 0 -5.55358961 0 0 0 Z " fill="#21B7EE" transform="translate(201,334)"/>
<motion.path  variants={pathVariants} d="M0 0 C1.65 0 3.3 0 5 0 C5.17015625 1.19496094 5.3403125 2.38992188 5.515625 3.62109375 C7.53893782 19.4218164 7.53893782 19.4218164 16.984375 31.60546875 C18.44213239 32.61403346 19.93758702 33.5688227 21.453125 34.48828125 C23.76797363 35.8968448 25.94131326 37.23670981 28 39 C28.75 42.25 28.75 42.25 28 45 C24.24120229 47.50586514 22.58360299 47.14499525 18.2734375 46.53125 C12.04778709 45.07645884 7.33197892 40.26003413 4 35 C-1.42880576 23.97483275 -0.41864695 11.95881122 0 0 Z " fill="#21B7EE" />
<motion.path  variants={pathVariants} d="M0 0 C1.06476563 0.54269531 2.12953125 1.08539063 3.2265625 1.64453125 C4.69230441 2.36800642 6.15847413 3.09061528 7.625 3.8125 C8.31851563 4.16892578 9.01203125 4.52535156 9.7265625 4.89257812 C22.30866342 11.01511831 35.08738543 11.38619616 48.75 11.0625 C51.06055667 11.01456414 53.37085463 10.97138971 55.68170166 10.94029236 C57.10420394 10.92060682 58.52661331 10.89105874 59.94866943 10.85035706 C61.63298324 10.82428743 63.31825304 10.9034611 65 11 C67 13 67 13 67.4375 15.9375 C67 19 67 19 65.0625 20.75 C51.51548242 26.27939493 37.20706308 24.55876154 23.88134766 19.13818359 C15.69032193 15.4962547 6.52396477 11.21329978 0 5 C-0.81640625 2.859375 -0.81640625 2.859375 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#21B8EE" transform="translate(225,485)"/>
<motion.path  variants={pathVariants} d="M0 0 C2 3 2 3 1.7734375 4.94921875 C-1.38007153 13.31079574 -8.35298273 18.00149028 -16 22 C-18.95653305 23.2436572 -21.88621337 24.23624102 -25 25 C-25.73992187 25.185625 -26.47984375 25.37125 -27.2421875 25.5625 C-30.91405827 26.14500641 -34.54335093 26.14499991 -38.25 26.125 C-39.34828125 26.13080078 -39.34828125 26.13080078 -40.46875 26.13671875 C-45.87328966 26.12671034 -45.87328966 26.12671034 -47 25 C-47.25 22.5625 -47.25 22.5625 -47 20 C-43.03261668 17.35507778 -39.1561487 16.88958563 -34.51953125 15.9765625 C-27.08404168 13.91344109 -21.21011432 9.94381181 -15.125 5.3125 C-6.04890777 -1.51222694 -6.04890777 -1.51222694 0 0 Z " fill="#21B8EE" transform="translate(366,438)"/>
<motion.path  variants={pathVariants} d="M0 0 C2.3125 0.9375 2.3125 0.9375 4.3125 3.9375 C3.09922743 16.74883574 -11.82995286 27.6756356 -21.01953125 35.40625 C-22.68170105 36.93217638 -23.96404389 38.50888679 -25.3125 40.3125 C-27.6875 42.9375 -27.6875 42.9375 -30.875 43.9375 C-31.803125 43.9375 -32.73125 43.9375 -33.6875 43.9375 C-34.3475 43.2775 -35.0075 42.6175 -35.6875 41.9375 C-35.08804474 31.79965363 -23.96435064 21.72504782 -17.265625 14.66796875 C-15.03935753 12.31014912 -12.91235222 9.90710881 -10.8125 7.4375 C-4.20534865 -0.09779881 -4.20534865 -0.09779881 0 0 Z " fill="#21B7EE" />
<motion.path  variants={pathVariants} d="M0 0 C7.16011299 2.43403274 14.65800169 5.81903379 18.9453125 12.25 C19.1953125 15.3125 19.1953125 15.3125 18.9453125 18.25 C18.2853125 18.91 17.6253125 19.57 16.9453125 20.25 C11.8382414 20.05821847 9.52361453 18.37572263 5.8828125 14.9375 C-0.00569507 9.86952218 -5.6281075 8.08996141 -13.0546875 6.25 C-15.06016966 5.60001097 -17.06195132 4.93807482 -19.0546875 4.25 C-19.0546875 2.6 -19.0546875 0.95 -19.0546875 -0.75 C-13.81186918 -3.37140916 -5.4878334 -1.34739644 0 0 Z " fill="#21B7EE" />
<motion.path  variants={pathVariants} d="M0 0 C4.52842704 3.38711616 6.39385385 8.50057523 8.6875 13.5 C9.12175293 14.4283667 9.55600586 15.3567334 10.00341797 16.31323242 C13.32267216 23.43944088 16.53106216 30.61511331 19.73168945 37.79516602 C22.16843822 43.23349443 24.71016006 48.60720011 27.375 53.9375 C27.69678223 54.58178955 28.01856445 55.2260791 28.35009766 55.88989258 C29.70093351 58.5597757 31.08548367 61.1331271 32.703125 63.65234375 C34.115161 66.20846915 34.40483812 67.73070277 34.375 70.625 C34.38660156 71.75808594 34.38660156 71.75808594 34.3984375 72.9140625 C33.89409599 75.55443866 33.13965043 76.40252343 31 78 C26.80634263 79.2966905 22.6565442 79.0655159 18.3125 79 C9.01562786 78.90789154 -0.22881752 79.25322199 -9.50854492 79.8203125 C-15.17482335 80.11133394 -19.65815826 79.97399511 -25 78 C-25.75 76.3125 -25.75 76.3125 -26 74 C-24.07436672 70.24043027 -21.81634554 68.6551773 -17.9375 67.3125 C-8.46660798 64.81717516 2.20539038 63.74172429 12 64 C11.45214844 63.09507812 10.90429688 62.19015625 10.33984375 61.2578125 C4.52720267 51.3671994 -0.44343424 41.11719666 -5.15255737 30.66595459 C-5.83981516 29.14463704 -6.53356328 27.62623407 -7.23391724 26.11090088 C-8.23191754 23.94428773 -9.2030849 21.7674662 -10.16796875 19.5859375 C-10.46953888 18.94054016 -10.77110901 18.29514282 -11.08181763 17.63018799 C-13.26796725 12.56009242 -13.15629281 9.2575243 -12 4 C-8.44817694 -0.17861537 -5.35321899 -0.77865003 0 0 Z " fill="#21B7EE" transform="translate(478,354)"/>
</motion.svg> */}



      </motion.div>
    )}
</section>
  )
}
  )}
<div className="flex justify-center mt-10">
<button className="bg-[#22B8EE] hover:bg-[#1B8FBF] text-white text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none">Seem More Products</button>
</div>  
    </>
  )
}

export default AniProduct